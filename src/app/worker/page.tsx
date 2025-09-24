"use client"
import { useState } from "react";

export default function WorkerDashboard() {
  const [activeTab, setActiveTab] = useState<"available" | "mine">("available");

  return (
    <div className="p-6">
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("available")}
          className={`px-4 py-2 rounded ${activeTab === "available" ? "bg-green-600 text-white" : "bg-gray-200"}`}
        >
          Available Work
        </button>
        <button
          onClick={() => setActiveTab("mine")}
          className={`px-4 py-2 rounded ${activeTab === "mine" ? "bg-green-600 text-white" : "bg-gray-200"}`}
        >
          My Work
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "available" ? <AvailableWorkTable /> : <MyWorkTable />}
    </div>
  );
}

function AvailableWorkTable() {
  // In real app, fetch available contracts from chain
  const jobs = [
    { id: 1, employer: "0xabc...", amount: 100, deadline: "2025-10-01", penalty: 10 },
    { id: 2, employer: "0xdef...", amount: 50, deadline: "2025-10-05", penalty: 5 },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Available Work</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Employer</th>
            <th className="p-2 border">Amount</th>
            <th className="p-2 border">Deadline</th>
            <th className="p-2 border">Penalty</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td className="p-2 border">{job.id}</td>
              <td className="p-2 border">{job.employer}</td>
              <td className="p-2 border">{job.amount}</td>
              <td className="p-2 border">{job.deadline}</td>
              <td className="p-2 border">{job.penalty}</td>
              <td className="p-2 border">
                <button className="px-3 py-1 bg-blue-500 text-white rounded">Accept</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MyWorkTable() {
  // In real app, filter contracts where worker == current user
  const myJobs = [
    { id: 1, employer: "0xabc...", amount: 100, deadline: "2025-10-01", status: "In Progress" },
    { id: 3, employer: "0xghi...", amount: 70, deadline: "2025-09-30", status: "Completed" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">My Assigned Work</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Employer</th>
            <th className="p-2 border">Amount</th>
            <th className="p-2 border">Deadline</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {myJobs.map((job) => (
            <tr key={job.id}>
              <td className="p-2 border">{job.id}</td>
              <td className="p-2 border">{job.employer}</td>
              <td className="p-2 border">{job.amount}</td>
              <td className="p-2 border">{job.deadline}</td>
              <td className="p-2 border">{job.status}</td>
              <td className="p-2 border">
                {job.status === "In Progress" && (
                  <button className="px-3 py-1 bg-green-500 text-white rounded">Mark Completed</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
