// components/EmployerDashboard.tsx
"use client"
import { useState } from "react";

export default function EmployerDashboard() {
  const [activeTab, setActiveTab] = useState<"put" | "review">("put");

  return (
    <div className="p-6">
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("put")}
          className={`px-4 py-2 rounded ${activeTab === "put" ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
        >
          Put Work
        </button>
        <button
          onClick={() => setActiveTab("review")}
          className={`px-4 py-2 rounded ${activeTab === "review" ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
        >
          Review Work
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "put" ? <PutWorkForm /> : <ReviewWorkTable />}

      {/* Contracts Table */}
      <div className="mt-8">
        <ContractsTable />
      </div>
    </div>
  );
}

function PutWorkForm() {
  return (
    <form className="space-y-4 bg-white shadow-md rounded p-6">
      <div>
        <label className="block font-medium">Worker Address</label>
        <input type="text" className="w-full border rounded p-2" />
      </div>
      <div>
        <label className="block font-medium">Amount (APT)</label>
        <input type="number" className="w-full border rounded p-2" />
      </div>
      <div>
        <label className="block font-medium">Deadline</label>
        <input type="datetime-local" className="w-full border rounded p-2" />
      </div>
      <div>
        <label className="block font-medium">Penalty</label>
        <input type="number" className="w-full border rounded p-2" />
      </div>
      <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">
        Create Contract
      </button>
    </form>
  );
}

function ReviewWorkTable() {
  // You’ll fetch contracts from chain here
  const dummy = [{ id: 1, worker: "0xabc...", amount: 50, deadline: "2025-10-01", status: "Completed" }];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Contracts Pending Review</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Worker</th>
            <th className="p-2 border">Amount</th>
            <th className="p-2 border">Deadline</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {dummy.map((c) => (
            <tr key={c.id}>
              <td className="p-2 border">{c.id}</td>
              <td className="p-2 border">{c.worker}</td>
              <td className="p-2 border">{c.amount}</td>
              <td className="p-2 border">{c.deadline}</td>
              <td className="p-2 border">
                <button className="px-3 py-1 bg-green-500 text-white rounded mr-2">Approve</button>
                <button className="px-3 py-1 bg-red-500 text-white rounded">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ContractsTable() {
  // Example dummy contracts
  const contracts = [
    { id: 1, worker: "0x123...", amount: 100, status: "In Progress" },
    { id: 2, worker: "0x456...", amount: 50, status: "Completed" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">My Contracts</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Worker</th>
            <th className="p-2 border">Amount</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((c) => (
            <tr key={c.id}>
              <td className="p-2 border">{c.id}</td>
              <td className="p-2 border">{c.worker}</td>
              <td className="p-2 border">{c.amount}</td>
              <td className="p-2 border">{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
