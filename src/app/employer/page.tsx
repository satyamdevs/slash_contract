// src/pages/dashboard.tsx

"use client";

import { Header } from "@/components/Header"; // Assuming you have a Header component
import { useSlashContract } from "@/hooks/useSlashContract";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  // 1. Destructure all the functions and state from your hook
  const { getMyContracts, createContract, markCompleted, refundOrFine, transactionInProgress } = useSlashContract();

  const { account, connected } = useWallet();

  // State for this component to hold the list of contracts and loading status
  const [contracts, setContracts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 2. Create a function to fetch and update the contract list
  const refreshContractList = async () => {
    if (!connected) return;
    setIsLoading(true);
    const myContracts = await getMyContracts();
    console.log(myContracts);
    setContracts(myContracts);
    setIsLoading(false);
  };

  // 3. Fetch the initial list of contracts when the wallet connects
  useEffect(() => {
    refreshContractList();
    if (account) {
      console.log("Account Address", account.address);
    }
  }, [connected]);

  // 4. Create an event handler for your "Create Contract" form
  const handleCreateSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const worker = formData.get("worker") as string;
    const amount = parseInt(formData.get("amount") as string, 10);

    // Example values for deadline and penalty
    const deadline = Math.floor(Date.now() / 1000) + 3600; // 1 hour from now
    const penalty = 100000;

    await createContract(worker, amount, deadline, penalty);

    // After the transaction, refresh the list to show the new contract
    await refreshContractList();
  };

  // Render the UI
  return (
    <div className="app-background">
      <Header />
      <main className="container mx-auto p-8">
        {!connected ? (
          <p className="text-center">Please connect your wallet to manage your contracts.</p>
        ) : (
          <div>
            {/* --- Create Contract Section --- */}
            <div className="mb-8 p-6 border rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Create a New Contract</h2>
              <form onSubmit={handleCreateSubmit} className="flex flex-col gap-4">
                <input name="worker" placeholder="Worker's Wallet Address" required className="p-2 border rounded" />
                <input
                  name="amount"
                  placeholder="Amount (in Octas)"
                  type="number"
                  required
                  className="p-2 border rounded"
                />
                <button
                  type="submit"
                  disabled={transactionInProgress}
                  className="gradient-button p-3 rounded-lg font-semibold"
                >
                  {transactionInProgress ? "Processing..." : "Create Escrow"}
                </button>
              </form>
            </div>

            {/* --- Contract List Section --- */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Your Contracts</h2>
                <button
                  onClick={refreshContractList}
                  disabled={isLoading || transactionInProgress}
                  className="p-2 border rounded"
                >
                  {isLoading ? "Refreshing..." : "Refresh"}
                </button>
              </div>
              {isLoading ? (
                <p>Loading your contracts...</p>
              ) : contracts.length === 0 ? (
                <p>You have not created any contracts yet.</p>
              ) : (
                <div className="space-y-4">
                  {contracts.map((contract, id) => (
                    <div key={id} className="p-4 border rounded-lg shadow">
                      <p>
                        <b>Contract ID:</b> {id}
                      </p>
                      <p>
                        <b>Worker:</b> {contract.worker}
                      </p>
                      <p>
                        <b>Status:</b> {contract.is_completed ? "Completed" : "In Progress"}
                      </p>
                      <div className="mt-4 flex gap-4">
                        {/* 5. Wire up the buttons to the hook functions */}
                        <button
                          onClick={async () => {
                            await markCompleted(id);
                            await refreshContractList();
                          }}
                          disabled={contract.is_completed || transactionInProgress}
                          className="bg-green-500 text-white p-2 rounded disabled:bg-gray-400"
                        >
                          Mark as Completed
                        </button>
                        <button
                          onClick={async () => {
                            await refundOrFine(id);
                            await refreshContractList();
                          }}
                          disabled={contract.is_claimed || transactionInProgress}
                          className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
                        >
                          Settle & Pay
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
