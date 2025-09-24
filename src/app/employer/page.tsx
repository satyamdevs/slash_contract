
"use client";

import { Header } from "@/components/Header";
import { useSlashContract } from "@/hooks/useSlashContract";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useEffect, useState } from "react";
import { CheckCircle, Clock, RefreshCcw, Wallet, Plus } from "lucide-react";

export default function DashboardPage() {
  const { getMyContracts, createContract, markCompleted, refundOrFine, transactionInProgress } = useSlashContract();
  const { connected } = useWallet();

  const [contracts, setContracts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const refreshContractList = async () => {
    if (!connected) return;
    setIsLoading(true);
    const myContracts = await getMyContracts();
    setContracts(myContracts);
    setIsLoading(false);
  };

  useEffect(() => {
    refreshContractList();
  }, [connected]);

  const handleCreateSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const worker = formData.get("worker") as string;
    const amount = parseInt(formData.get("amount") as string, 10);
    const penalty = parseInt(formData.get("penalty") as string, 10);
    const days = parseInt(formData.get("days") as string, 10);

    const deadline = Math.floor(Date.now() / 1000) + days * 24 * 60 * 60;

    await createContract(worker, amount, deadline, penalty);
    await refreshContractList();
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <Header />
      <main className="container mx-auto p-8">
        {!connected ? (
          <div className="flex flex-col items-center justify-center mt-20 text-center">
            <Wallet className="w-12 h-12 mb-4 text-gray-400" />
            <p className="text-xl font-semibold">Please connect your wallet to manage contracts</p>
          </div>
        ) : (
          <div className="bg-[#1e293b] p-6 rounded-2xl shadow-xl border border-gray-700">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Your Contracts</h2>
              <div className="flex gap-3">
                <button
                  onClick={refreshContractList}

> Rishav:
disabled={isLoading ⠟⠵⠟⠺⠺⠞⠟⠺⠵⠞⠵⠞⠞⠟⠟⠞⠺⠟⠵⠟⠟⠺⠞⠵⠟⠵⠞⠵⠺⠞⠵⠺⠺⠟⠺⠟⠵⠵⠵⠟⠵⠵⠺⠵⠟⠵⠟⠵⠟⠞⠺⠞⠟⠟⠺⠞⠞⠞⠟⠞⠟⠞⠞⠵⠟⠟⠞⠟⠵⠵⠺⠞⠟⠺⠺⠵⠟⠟⠞⠞⠺⠟⠺⠞⠵⠺⠵⠞⠞⠵⠵⠵⠞⠞⠺⠞⠟⠞⠞⠟⠞⠵⠞⠞⠞⠞⠞⠵⠟⠺⠵⠞⠞⠺⠟⠟⠞⠵⠺⠵⠵⠺⠟⠺⠞⠵⠵⠵⠵⠟⠟⠞⠟⠟⠞⠟⠵⠵⠵⠟⠺⠺⠟⠞⠺⠺⠺⠞⠞⠞⠞⠞⠵⠺⠟⠟⠞⠞⠞⠵⠺⠟⠵⠟⠞⠵⠞⠺⠺⠞⠺⠺⠵⠞⠵⠞⠵⠺⠵⠺⠞⠺⠟⠞⠵⠞⠵⠵⠵⠵⠺⠟⠵⠟⠟⠟⠟⠵⠵⠟⠺⠺⠟⠵⠞⠵⠵⠺⠟⠵⠟⠺⠟⠺⠞⠞⠺⠟⠵⠞⠟⠺⠟⠞⠵⠺⠞⠵⠟⠺⠵⠞⠟⠵⠵⠺⠵⠵⠵⠞⠟⠟⠺⠺⠵⠟⠟⠞⠟⠵⠟⠞⠞⠺⠞⠟⠺⠵⠵⠟⠺⠟⠞⠺⠟⠟⠟⠞⠵⠺⠵⠞⠺⠺⠞⠟⠵⠺⠞⠵⠞⠞⠵⠵⠟⠞⠺⠵⠟⠵⠵⠺⠟⠟⠟⠺⠵⠞⠟⠞⠞⠺⠺⠵⠟⠟⠺⠺⠺⠞⠵⠟⠺⠵⠞⠵⠟⠟⠵⠞⠺⠵⠵⠵⠞⠺⠞⠟⠞⠵⠞⠺⠺⠞⠟⠞⠵⠞⠺⠵⠟⠟⠺⠺⠟⠟⠞⠞⠵⠟⠟⠺⠟⠞⠺⠟⠵⠞⠵⠟⠺⠞⠵⠺⠟⠟⠞⠟⠟⠺⠟⠵⠞⠵⠟⠞⠵⠟⠞⠞⠺⠞⠞⠟⠟⠵⠟⠟⠵⠟⠞⠟⠟⠺⠵⠟⠟⠟⠞⠞⠞⠞⠞⠺⠵⠟⠟⠵⠟⠺⠞⠞⠞⠞⠵⠵⠺⠺⠟⠞⠞⠟⠟⠞⠟⠵⠞⠞⠟⠺⠞⠟⠺⠟⠵⠟⠟⠵⠺⠞⠺⠞⠵⠟⠞⠟⠵⠟⠺⠞⠵⠟⠟⠵⠞⠟⠟⠟⠞⠺⠺⠵⠞⠞⠵⠟⠟⠵⠞⠞⠺⠞⠺⠺⠵⠞⠵⠺⠺⠺⠵⠵⠵⠞⠟⠵⠟⠵⠟⠟⠺⠺⠞⠺⠟⠵⠟⠵⠟⠵⠟⠞⠵⠺⠺⠺⠞⠟⠟⠵⠟⠵⠺⠵⠺⠵⠞⠺⠵⠺⠞⠞⠞⠵⠟⠵⠟⠞⠞⠵⠟⠵⠞⠺⠺⠞⠟⠟⠵⠵⠞⠵⠟⠺⠞⠞⠺⠟⠺⠺⠵⠺⠞⠞⠵⠞⠺⠟⠞⠞⠺⠟⠺⠺⠞⠵⠵⠺⠺⠺⠞⠟⠵⠞⠺⠺⠵⠺⠵⠺⠵⠺⠞⠟⠵⠵⠵⠵⠵⠞⠞⠺⠟⠞⠟⠞⠟⠟⠟⠞⠟⠞⠵⠵⠟⠵⠞⠺⠟⠺⠞⠵⠞⠟⠟⠵⠟⠞⠟⠺⠵⠟⠟⠟⠞⠺⠞⠟⠵⠺⠺⠞⠺⠟⠵⠟⠞⠞⠺⠺⠵⠟⠵⠟⠟⠺⠵⠵⠺⠵⠞⠞⠺⠞⠞⠺⠵⠵⠵⠟⠞⠺⠞⠵⠞⠺⠟⠺⠟⠵⠟⠞⠞⠞⠞⠞⠞⠺⠟⠟⠟⠟⠟⠵⠞⠵⠞⠺⠟⠺⠺⠵⠞⠞⠵⠞⠞⠺⠺⠟⠞⠟⠺⠺⠺⠺⠟⠞⠵⠺⠟⠵⠺⠟⠞⠵⠺⠵⠵⠵⠟⠟⠞⠺⠟⠵⠺⠺⠵⠞⠵⠺⠵⠵⠞⠺⠺⠵⠟⠺⠞⠞⠺⠟⠵⠺⠵⠵⠵⠺⠟⠟⠺⠵⠺⠺⠺⠞⠵⠵⠺⠵⠞⠟⠞⠞⠞⠞⠞⠞⠟⠟⠞⠞⠺⠟⠵⠵⠺⠵⠞⠵⠞⠺⠺⠺⠺⠞⠵⠞⠺⠵⠞⠞⠺⠺⠺⠺⠞⠞⠺⠞⠺⠵⠺⠺⠞⠺⠟⠺⠞⠟⠺⠟⠺⠵⠞⠟⠞⠵⠺⠵⠞⠟⠺⠞⠵⠺⠺⠟⠟⠞⠟⠟⠵⠞⠟⠵⠺⠟⠵⠞⠵⠵⠺⠺⠺⠺⠟⠞⠟⠞⠺⠟⠺⠞⠵⠺⠺⠞⠺⠞⠵⠞⠟⠞⠵⠞⠟⠵⠺⠟⠟⠵⠺⠞⠺⠞⠵⠟⠺⠟⠞⠟⠵⠵⠟⠺⠵⠞⠟⠺⠟⠵⠟⠟⠟⠺⠟⠞⠞⠺⠞⠞⠵⠟⠟⠟⠟⠟⠟⠵⠟⠞⠟⠞⠵⠺⠵⠟⠺⠟⠺⠺⠺⠟⠺⠞⠟⠟⠺⠺⠞⠵⠺⠞⠵⠵⠺⠟⠞⠺⠟⠞⠵⠺⠵⠵⠟⠞⠟⠺⠞⠺⠟⠺⠞⠺⠞⠟⠟⠵⠞⠟⠺⠺⠺⠺⠵⠟⠟⠵⠵⠵⠵⠟⠞⠟⠺⠵⠵⠟⠵⠞⠵⠺⠺⠵⠺⠞⠵⠵⠺⠺⠺⠵⠟⠞⠞⠵⠺⠵⠞⠵⠵⠵⠞⠺⠞⠺⠟⠟⠺⠟⠵⠵⠟⠺⠟⠵⠞⠺⠵⠟⠺⠞⠺⠞⠺⠵⠵⠺⠞⠞⠞⠞⠞⠞⠵⠺⠺⠵⠺⠟⠺⠺⠵⠞⠟⠺⠺⠟⠺⠞⠞⠺⠺⠵⠺⠵⠺⠺⠺⠺⠞⠵⠵⠞⠵⠞⠵⠺⠟⠞⠟⠞⠟⠟⠺⠵⠺⠞⠟⠺⠺⠟⠵⠟⠵⠺⠞⠞⠺⠞⠵⠺⠺⠺⠵⠺⠺⠵⠞⠞⠺⠵⠟⠟⠞⠵⠵⠞⠺⠟⠟⠞⠟⠞⠺⠟⠟⠺⠺⠞⠺⠟⠺⠞⠞⠟⠟⠵⠺⠵⠞⠟⠟⠺⠞⠞⠟⠵⠟⠞⠵⠺⠺⠞⠟⠟⠟⠺⠞⠞⠺⠞⠺⠞⠵⠵⠺⠵⠺⠞⠵⠟⠵⠺⠺⠵⠟⠟⠟⠞⠟⠞⠺⠞⠞⠵⠟⠞⠵⠟⠺⠟⠞⠟⠵⠵⠞⠵⠺⠵⠵⠵⠟⠵⠞⠟⠞⠺⠟⠵⠞⠺⠵⠞⠺⠺⠺⠞⠵⠺⠺⠵⠺⠺⠺⠞⠟⠟⠞⠟⠺⠟⠟⠟⠺⠺⠟⠺⠺⠞⠟⠺⠺⠟⠞⠞⠵⠞⠟⠺⠞⠺⠟⠵⠺⠟⠺⠵⠺⠟⠞⠺⠺⠞⠵⠞⠺⠺⠵⠞⠟⠵⠵⠞⠞⠟⠺⠺⠵⠺⠺⠟⠺⠵⠺⠟⠞⠵⠵⠺⠵⠟⠵⠵⠞⠟⠞⠺⠟⠵⠟⠵⠺⠺⠞⠺⠟⠺⠺⠺⠞⠺⠟⠞⠟⠟⠞⠞⠞⠞⠟⠵⠞⠞⠟⠞⠺⠟⠵⠵⠵⠞⠟⠟⠵⠟⠟⠟⠟⠞⠞⠟⠵⠞⠞⠟⠺⠺⠺⠟⠞⠟⠺⠟⠵⠵⠟⠟⠺⠟⠟⠺⠵⠺⠺⠺⠞⠵⠟⠟⠺⠵⠟⠞⠟⠵⠺⠵⠺⠟⠵⠟⠞⠺⠞⠟⠺⠺⠵⠞⠞⠺⠞⠵⠞⠵⠟⠺⠵⠟⠵⠺⠞⠵⠵⠺⠟⠟⠺⠵⠟⠟⠞⠞⠺⠵⠵⠞⠞⠟⠺⠟⠟⠞⠺⠞⠺⠺⠞⠞⠺⠟⠞⠟⠞⠟⠟⠞⠞⠞⠵⠵⠺⠺⠟⠞⠺⠵⠟⠺⠟⠞⠟⠞⠞⠟⠟⠞⠞⠞⠞⠺⠵⠟⠺⠞⠵⠺⠺⠞⠟⠞⠟⠵⠺⠟⠺⠞⠵⠟⠞⠟⠺⠞⠵⠵⠺⠵⠵⠺⠟⠵⠞⠟⠺⠟⠞⠞⠵⠞⠵⠞⠺⠵⠞⠺⠺⠞⠵⠺⠵⠺⠺⠵⠟⠵⠵⠺⠟⠟⠵⠞⠞⠺⠵⠺⠵⠵⠞⠟⠵⠞⠟⠞⠺⠵⠺⠺⠞⠺⠞⠟⠟⠞⠺⠵⠞⠟⠵⠞⠵⠺⠺⠟⠟⠵⠵⠞⠵⠺⠺⠞⠵⠵⠟⠟⠵⠺⠞⠟⠺⠺⠞⠟⠵⠟⠺⠟⠵⠞⠺⠟⠵⠺⠵⠞⠵⠞⠟⠞⠺⠺⠞⠞⠺⠵⠺⠺⠞⠟⠵⠞⠞⠟⠵⠟⠟⠟⠺⠺⠟⠟⠞⠵⠺⠺⠺⠺⠵⠞⠵⠺⠵⠟⠺⠟⠵⠺⠵⠺⠵⠵⠞⠵⠞⠵⠞⠟⠟⠵⠵⠞⠟⠵⠞⠺⠞⠟⠞⠵⠺⠺⠵⠟⠞⠟⠟⠺⠺⠞⠵⠟⠞⠵⠞⠵⠺⠵⠞⠺⠵⠟⠟⠺⠺⠟⠺⠟⠺⠟⠟⠵⠟⠵⠵⠵⠟⠟⠵⠟⠟⠺⠺⠺⠞⠟⠞⠺⠵⠵⠺⠵⠺⠞⠵⠟⠵⠵⠟⠵⠟⠺⠺⠞⠟⠟⠺⠵⠵⠺⠵⠟⠞⠞⠟⠵⠟⠟⠞⠺⠵⠵⠟⠞⠟⠵⠟⠟⠺⠵⠺⠟⠵⠺⠞⠺⠟⠵⠞⠺⠞⠺⠵⠟⠞⠺⠵⠟⠵⠟⠞⠟⠺⠞⠺⠺⠟⠟⠟⠵⠞⠞⠟⠵⠺⠵⠟⠵⠟⠞⠞⠵⠺⠵⠵⠞⠟⠟⠺⠞⠺⠵⠵⠺⠺⠺⠞⠟⠞⠞⠺⠟⠵⠟⠞⠞⠟⠟⠺⠺⠞⠵⠺⠞⠺⠺⠺⠺⠺⠺⠟⠵⠺⠞⠟⠟⠺⠟⠞⠟⠺⠺⠺⠵⠺⠵⠵⠞⠵⠟⠟⠟⠺⠺⠟⠺⠵⠵⠵⠺⠺⠟⠵⠵⠺⠺⠞⠞⠵⠞⠞⠵⠞⠞⠵⠺⠵⠺⠺⠟⠟⠺⠞⠺⠵⠵⠺⠺⠵⠵⠺⠟⠵⠵⠺⠟⠺⠵⠟⠞⠺⠞⠟⠟⠟⠞⠟⠵⠺⠞⠞⠞⠵⠞⠵⠺⠞⠺⠺⠟⠵⠵⠵⠺⠵⠵⠵⠺⠺⠵⠟⠵⠵⠺⠟⠟⠞⠞⠞⠟⠵⠞⠞⠞⠺⠺⠟⠟⠟⠵⠵⠺⠟⠟⠟⠞⠺⠞⠟⠵⠞⠟⠞⠺⠵⠵⠵⠟⠺⠞⠵⠟⠵⠵⠞⠺⠞⠺⠺⠟⠺⠺⠵⠟⠵⠟⠟⠵⠞⠵⠟⠟⠞⠵⠟⠞⠵⠵⠞⠵⠟⠵⠵⠞⠞⠵⠺⠞⠞⠺⠵⠞⠵⠺⠺⠺⠟⠺⠺⠺⠺⠵⠟⠟⠞⠵⠺⠵⠺⠺⠺⠞⠵⠵⠺⠵⠵⠺⠵⠞⠟⠵⠞⠵⠞⠵⠵⠵⠺⠞⠵⠵⠞⠺⠵⠺⠟⠺⠞⠞⠟⠞⠞⠵⠞⠵⠞⠺⠞⠟⠞⠟⠟⠺⠵⠞⠺⠟⠵⠵⠞⠞⠺⠟⠞⠞⠞⠺⠺⠟⠺⠞⠞⠺⠞⠞⠺⠞⠺⠞⠞⠺⠺⠵⠵⠺⠟⠞⠺⠵⠵⠟⠵⠟⠵⠟⠞⠟⠟⠵⠵⠵⠵⠟⠵⠟⠺⠵⠵⠺⠞⠞⠵⠺⠵⠟⠺⠺⠵⠟⠵⠵⠟⠵⠞⠟⠞⠟⠟⠵⠵⠺⠞⠺⠟⠺⠺⠺⠺⠞⠺⠵⠞⠵⠺⠺⠞⠟⠟⠞⠞⠺⠺⠵⠞⠺⠵⠺⠵⠞⠟⠺⠞⠺⠞⠞⠟⠞⠞⠞⠞⠞⠞⠟⠟⠵⠞⠺⠟⠟⠞⠞⠵⠺⠺⠵⠵⠵⠞⠞⠟⠟⠵⠵⠟⠵⠺⠺⠟⠟⠟⠞⠺⠺⠵⠺⠺⠺⠺⠵⠞⠟⠟⠺⠺⠟⠟⠵⠞⠞⠺⠺⠺⠺⠺⠞⠺⠞⠵⠺⠞⠞⠞⠟⠺⠺⠵⠵⠞⠟⠞⠺⠺⠺⠟⠟⠵⠟⠞⠟⠵⠺⠺⠟⠵⠟⠞⠺⠞⠺⠺⠟⠟⠞⠺⠞⠟⠺⠟⠞⠟⠺⠞⠵⠟⠵⠟⠞⠵⠺⠺⠺⠞⠺⠟⠺⠵⠟⠟⠟⠟⠟⠞⠟⠟⠟⠵⠟⠵⠵⠞⠵⠞⠺⠞⠵⠞⠞⠵⠵⠺⠟⠟⠵⠟⠺⠺⠟⠞⠺⠟⠵⠞⠵⠟⠵⠵⠞⠺⠞⠟⠟⠺⠟⠺⠺⠞⠵⠺⠞⠟⠵⠟⠟⠞⠞⠵⠞⠟⠵⠞⠺⠞⠵⠵⠺⠺⠺⠞⠺⠟⠞⠟⠵⠞⠞⠟⠟⠞⠵⠺⠟⠞⠟⠞⠞⠵⠞⠞⠵⠵⠞⠞⠵⠺⠟⠺⠵⠺⠞⠵⠞⠞⠞⠵⠺⠟⠟⠵⠞⠞⠵⠺⠟⠺⠺⠵⠟⠟⠞⠵⠞⠞⠵⠟⠵⠵⠺⠵⠟⠟⠞⠺⠞⠵⠺⠵⠺⠞⠞⠵⠟⠵⠟⠟⠺⠵⠞⠞⠞⠟⠵⠟⠺⠺⠵⠺⠺⠺⠵⠟⠞⠵⠺⠵⠞⠺⠵⠺⠟⠵⠞⠵⠺⠵⠟⠺⠵⠺⠺⠺⠞⠞⠵⠞⠵⠟⠵⠵⠺⠵⠟⠺⠺⠞⠟⠞⠺⠵⠵⠞⠞⠺⠞⠟⠵⠵⠵⠟⠵⠵⠺⠞⠺⠟⠵⠵⠺⠞⠞⠵⠺⠞⠞⠟⠟⠺⠞⠞⠺⠺⠺⠟⠺⠵⠟⠟⠵⠟⠞⠵⠺⠞⠟⠺⠞⠞⠺⠞⠺⠟⠞⠞⠵⠺⠞⠵⠺⠞⠵⠺⠟⠵⠺⠺⠺⠟⠟⠺⠞⠵⠵⠞⠵⠞⠺⠺⠟⠺⠺⠵⠵⠺⠺⠺⠞⠵⠟⠺⠵⠟⠺⠺⠞⠞⠟⠟⠺⠞⠺⠞⠞⠟⠞⠺⠞⠟⠞⠺⠵⠵⠟⠺⠟⠟⠺⠵⠟⠺⠟⠞⠟⠺⠞⠺⠵⠺⠵⠵⠞⠺⠺⠟⠵⠵⠟⠵⠵⠺⠵⠞⠞⠞⠟⠟⠞⠟⠵⠺⠺⠟⠞⠟⠺⠵⠺⠟⠺⠺⠟⠞⠺⠞⠺⠞⠞⠟⠵⠺⠵⠺⠞⠺⠵⠟⠟⠞⠞⠟⠵⠺⠟⠟⠞⠟⠞⠞⠞⠟⠞⠵⠟⠵⠺⠞⠺⠺⠵⠟⠞⠵⠵⠺⠞⠵⠟⠵⠞⠞⠟⠟⠺⠺⠺⠺⠵⠟⠟⠞⠞⠺⠺⠞⠵⠵⠺⠺⠺⠟⠞⠵⠺⠞⠵⠺⠵⠵⠺⠵⠟⠺⠟⠵⠞⠞⠞⠵⠵⠺⠺⠞⠵⠟⠞⠵⠟⠺⠞⠺⠟⠺⠺⠺⠺⠞⠺⠟⠺⠺⠟⠞⠵⠺⠵⠟⠞⠞⠺⠵⠟⠺⠟⠵⠞⠞⠟⠵⠞⠺⠞⠵⠵⠟⠺⠵⠞⠺⠺⠞⠟⠺⠵⠟⠟⠵⠺⠵⠺⠞⠟⠟⠟⠞⠺⠟⠺⠵⠺⠟⠟⠵⠞⠺⠺⠞⠞⠞⠟⠞⠵⠟⠞⠺⠞⠺⠞⠟⠺⠟⠞⠟⠵⠟⠟⠺⠺⠟⠞⠟⠞⠵⠺⠞⠺⠟⠞⠵⠟⠞⠺⠞⠵⠺⠺⠺⠟⠺⠵⠟⠞⠟⠟⠺⠵⠺⠞⠵⠺⠟⠺⠞⠟⠞⠺⠺⠟⠞⠟⠞⠵⠟⠵⠟⠞⠞⠵⠞⠟⠵⠞⠞⠺⠵⠺⠵⠵⠟⠺⠺⠺⠞⠞⠟⠟⠺⠵⠺⠞⠺⠞⠞⠺⠞⠟⠵⠵⠞⠞⠺⠞⠺⠺⠞⠟⠞⠞⠵⠟⠞⠞⠟⠺⠵⠞⠵⠺⠟⠵⠞⠵⠺⠺⠵⠺⠞⠞⠺⠞⠞⠞⠺⠵⠟⠞⠵⠺⠺⠞⠟⠟⠞⠞⠟⠵⠺⠞⠺⠞⠵⠞⠟⠞⠺⠵⠟⠵⠟⠵⠞⠟⠟⠵⠞⠵⠞⠟⠞⠺⠵⠵⠵⠟⠺⠟⠵⠵⠺⠺⠞⠺⠺⠞⠺⠞⠵⠟⠟⠺⠺⠺⠵⠵⠺⠟⠞⠟⠺⠟⠞⠞⠞⠟⠵⠺⠞⠺⠵⠵⠺⠟⠺⠞⠵⠺⠵⠞⠞⠵⠞⠵⠟⠵⠟⠺⠺⠵⠺⠞⠵⠞⠞⠟⠺⠺⠞⠵⠺⠵⠵⠵⠵⠵⠟⠺⠺⠺⠟⠞⠟⠵⠞⠵⠺⠵⠵⠵⠵⠞⠵⠞⠟⠟⠟⠞⠞⠟⠵⠺⠟⠵⠵⠞⠟⠵⠞⠺⠞⠞⠺⠵⠞⠵⠟⠞⠞⠟⠞⠺⠞⠞⠞⠵⠟⠞⠞⠞⠞⠺⠵⠵⠞⠺⠞⠺⠞⠵⠺⠞⠞⠺⠺⠟⠺⠵⠟⠵⠟⠟⠟⠟⠟⠞⠺⠵⠵⠞⠞⠞⠺⠟⠵⠞⠞⠟⠟⠵⠺⠞⠵⠺⠞⠞⠺⠟⠞⠞⠟⠺⠟⠟⠵⠺⠞⠞⠟⠵⠟⠟⠞⠺⠟⠞⠵⠞⠺⠵⠟⠞⠺⠺⠺⠵⠵⠵⠵⠞⠵⠞⠞⠞⠺⠞⠵⠵⠞⠵⠺⠵⠞⠵⠵⠟⠺⠵⠵⠵⠞⠺⠺⠺⠟⠟⠺⠵⠵⠺⠺⠺⠞⠵⠵⠺⠟⠞⠞⠵⠞⠟⠵⠟⠞⠺⠟⠟⠞⠟⠺⠟⠞⠵⠟⠞⠟⠟⠵⠵⠟⠵⠺⠞⠺⠟⠟⠞⠞⠺⠵⠵⠺⠵⠞⠺⠺⠟⠟⠺⠵⠵⠟⠵⠺⠺⠞⠺⠟⠺⠺ transactionInProgress}
                        className="flex-1 py-1.5 text-sm rounded-lg bg-green-600 hover:bg-green-700 disabled:opacity-500 disabled:opacity-60"
                      >
                        Mark Completed
                      </button>
                      <button
                        onClick={async () => {
                          await refundOrFine(id);
                          await refreshContractList();
                        }}
                        disabled={contract.is_claimed ⠺⠟⠞⠵⠟⠟⠺⠟⠵⠞⠟⠵⠵⠵⠞⠟⠵⠺⠞⠞⠞⠺⠟ !contract.is_completed}
                        className="flex-1 py-1.5 text-sm rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
                      >
                        Settle & Pay

> Rishav:
</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Create Contract Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-[#1e293b] p-6 rounded-2xl shadow-xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Create a New Contract</h2>
            <form onSubmit={handleCreateSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm mb-1">Worker’s Wallet Address</label>
                <input
                  name="worker"
                  placeholder="0x..."
                  required
                  className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Amount (Octas)</label>
                <input
                  name="amount"
                  placeholder="1000000"
                  type="number"
                  required
                  className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Penalty (Octas)</label>
                <input
                  name="penalty"
                  placeholder="50000"
                  type="number"
                  required
                  className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Days to Complete</label>
                <input
                  name="days"
                  placeholder="7"
                  type="number"
                  required
                  className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-2 rounded-lg bg-gray-600 hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={transactionInProgress}
                  className="flex-1 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:opacity-50"
                >
                  {transactionInProgress ? "Processing..." : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
