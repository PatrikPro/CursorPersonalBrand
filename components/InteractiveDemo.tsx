"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, BarChart, Shield, Settings } from "lucide-react";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: BarChart },
  { id: "messages", label: "Messages", icon: MessageSquare },
  { id: "security", label: "Security", icon: Shield },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    setIsLoading(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setIsLoading(false);
    }, 300);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-accent/30 rounded w-3/4"></div>
              <div className="h-4 bg-accent/20 rounded w-1/2"></div>
              <div className="grid grid-cols-3 gap-3 pt-4">
                <div className="h-20 bg-accent/20 rounded"></div>
                <div className="h-20 bg-accent/20 rounded"></div>
                <div className="h-20 bg-accent/20 rounded"></div>
              </div>
              <div className="h-32 bg-gradient-to-br from-accent/10 to-accent-purple/10 rounded-lg border border-accent/20"></div>
            </div>
          </div>
        );
      case "messages":
        return (
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="h-12 bg-accent/20 rounded-lg"></div>
              <div className="h-12 bg-accent/15 rounded-lg"></div>
              <div className="h-12 bg-accent/20 rounded-lg"></div>
            </div>
            <div className="h-24 bg-accent/10 rounded-lg border border-accent/20"></div>
          </div>
        );
      case "security":
        return (
          <div className="space-y-4">
            <div className="h-8 bg-accent/30 rounded w-full"></div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-24 bg-accent/20 rounded-lg"></div>
              <div className="h-24 bg-accent/20 rounded-lg"></div>
            </div>
            <div className="h-16 bg-accent/15 rounded-lg"></div>
          </div>
        );
      case "settings":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="h-6 bg-accent/25 rounded w-2/3"></div>
              <div className="h-6 bg-accent/20 rounded w-1/2"></div>
              <div className="h-6 bg-accent/25 rounded w-3/4"></div>
            </div>
            <div className="h-32 bg-accent/10 rounded-lg border border-accent/20"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      <div className="relative bg-gradient-to-br from-accent/20 to-accent-purple/20 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-accent text-white"
                    : "bg-background/50 text-foreground/70 hover:bg-background/70"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="bg-background/50 rounded-lg border border-white/10 p-6 min-h-[300px] relative overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/50 z-10">
              <motion.div
                className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
          )}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {/* Decorative gradient */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 blur-3xl rounded-full"></div>
    </div>
  );
}

