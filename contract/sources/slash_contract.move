module 0x242d944914d9597c6a4599c08ede76e3dd7ea1b6061d7b020ff0235b613b0567::slash_contract {
    use std::signer;
    use aptos_framework::aptos_coin::AptosCoin;
    use aptos_framework::coin;
    use aptos_framework::table;
    use aptos_framework::timestamp;
    #[test_only]
    use std::debug;

    //:!:>resource
    struct WorkContract has copy, drop, store {
        employer: address,
        worker: address,
        amount: u64,
        deadline: u64,         // task must be completed before this
        is_completed: bool,
        is_claimed: bool,
        penalty: u64           // fine amount if failed
    }

    //<:!:resource

    struct WorkContractState has key {
    contracts: table::Table<u64, WorkContract>,  // contractId -> contract
    balances: table::Table<u64, coin::Coin<AptosCoin>>, // contractId -> locked funds
    next_id: u64,  // incrementing id for contracts
    }

    public entry fun create_contract(
    employer: &signer,
    worker: address,
    amount: u64,
    deadline: u64,
    penalty: u64
    ) acquires WorkContractState {
    let employer_addr = signer::address_of(employer);

    // ensure employer has initialized state
    if (!exists<WorkContractState>(employer_addr)) {
        move_to(employer, WorkContractState {
            contracts: table::new(),
            balances: table::new(),
            next_id: 0,
        });
    };

    let state = borrow_global_mut<WorkContractState>(employer_addr);

    let contract_id = state.next_id;
    state.next_id = state.next_id + 1;

    // withdraw employer's locked funds
    let locked_funds = coin::withdraw<AptosCoin>(employer, amount);

    // store contract details
    table::add(&mut state.contracts, contract_id, WorkContract {
        employer: employer_addr,
        worker,
        amount,
        deadline,
        penalty,
        is_completed: false,
        is_claimed: false,
    });

    // hold the funds in balances
    table::add(&mut state.balances, contract_id, locked_funds);
    }


///////////////////////////////////////////////////////////////////////////
    //todo make approval from worker or employee
    public entry fun mark_completed(
    account: &signer,
    employer_addr: address,
    contract_id: u64
    ) acquires WorkContractState {
    let caller = signer::address_of(account);

    // Access employer’s state
    assert!(exists<WorkContractState>(employer_addr), 1);
    let state = borrow_global_mut<WorkContractState>(employer_addr);

    // Contract must exist
    assert!(table::contains(&state.contracts, contract_id), 2);
    let contract = table::borrow_mut(&mut state.contracts, contract_id);

    // Only employer or worker can call
    assert!(caller == contract.employer || caller == contract.worker, 3);

    // Prevent double marking
    assert!(!contract.is_completed, 4);

    // Mark completed
    contract.is_completed = true;
    }

/////////////////////////////////////////////////////////////////////////////////////
public entry fun refund_or_fine(
    employer: &signer,
    contract_id: u64
) acquires WorkContractState {
    let employer_addr = signer::address_of(employer);
    assert!(exists<WorkContractState>(employer_addr), 10);
    let state = borrow_global_mut<WorkContractState>(employer_addr);
    assert!(table::contains(&state.contracts, contract_id), 11);

    let contract = table::borrow_mut(&mut state.contracts, contract_id);
    assert!(signer::address_of(employer) == contract.employer, 12);
    assert!(!contract.is_claimed, 13);

    let now = timestamp::now_seconds();

    let coins = table::remove(&mut state.balances, contract_id);
    let payment_after_penalty: u64;

if (contract.is_completed && now <= contract.deadline) {
    payment_after_penalty = contract.amount; // full payment if completed before deadline
} else if (contract.penalty < contract.amount) {
    payment_after_penalty = contract.amount - contract.penalty;
} else {
    payment_after_penalty = 0; // penalty equals or exceeds amount
};


coin::deposit<AptosCoin>(contract.worker, coin::extract(&mut coins, payment_after_penalty));
    if (coin::value(&coins) > 0) {
        coin::deposit<AptosCoin>(employer_addr, coins); // leftover back to employer
    } else {
    // Explicitly destroy the empty coin object
    coin::destroy_zero<AptosCoin>(coins);
};

    contract.is_claimed = true;
}



}