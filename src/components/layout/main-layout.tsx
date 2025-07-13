"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import ChatPanel from "./chat-panel";
import TopHeader from "./top-header";
import Footer from "@/components/footer";

interface MainLayoutProps {
  children: React.ReactNode;
  user?: any;
  showSearch?: boolean;
  title?: string;
  subtitle?: string;
  showChat?: boolean;
  showSidebar?: boolean;
}

export default function MainLayout({
  children,
  user,
  showSearch = true,
  title,
  subtitle,
  showChat = true,
  showSidebar = true,
}: MainLayoutProps) {
  const [isChatVisible, setIsChatVisible] = useState(showChat);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex relative">
      {/* Top Navigation - Fixed with highest z-index */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopHeader
          user={user}
          showSearch={showSearch}
          title={title}
          subtitle={subtitle}
        />
      </div>

      {/* Left Sidebar - Fixed below header */}
      {showSidebar && (
        <div className="fixed left-0 top-24 h-[calc(100vh-6rem)] z-40 transition-all duration-300">
          <Sidebar user={user} />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${showSidebar ? "ml-64" : "ml-0"}`}
      >
        {/* Content Area with proper spacing and margin */}
        <div className="flex-1 flex pt-24">
          {/* Main Content */}
          <div
            className={`flex-1 overflow-y-auto transition-all duration-300 ${showChat && isChatVisible ? "mr-80" : "mr-0"}`}
          >
            <div className="min-h-full">{children}</div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`transition-all duration-300 ${showChat && isChatVisible ? "mr-80" : "mr-0"}`}
        >
          <Footer />
        </div>
      </div>

      {/* Right Chat Panel - Fixed below header */}
      {showChat && (
        <div className="fixed right-0 top-24 h-[calc(100vh-6rem)] z-40">
          <ChatPanel
            isVisible={isChatVisible}
            onToggle={() => setIsChatVisible(!isChatVisible)}
          />
        </div>
      )}
    </div>
  );
}
