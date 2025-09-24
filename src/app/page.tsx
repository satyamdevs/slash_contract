"use client";

import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
// Internal Components
import { useWallet } from "@aptos-labs/wallet-adapter-react";

function App() {
  const { connected } = useWallet();

  return (
    <div className="app-background">
      <Header />
      <Hero />
      <div className="flex items-center justify-center flex-col">
      </div>
      <div></div>
    </div>
  );
}

export default App;
