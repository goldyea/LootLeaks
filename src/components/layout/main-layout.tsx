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
  const [isChatVisible, setIsChatVisible] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white relative overflow-x-hidden">
      {/* Left Sidebar */}
      {showSidebar && <Sidebar user={user} />}

      {/* Main Content */}
      <div
        className={`${showSidebar ? "ml-20" : "ml-0"} min-h-screen flex flex-col`}
      >
        {/* Fixed Header */}
        <TopHeader
          user={user}
          showSearch={showSearch}
          title={title}
          subtitle={subtitle}
        />

        {/* Content Area */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Floating Chat Panel */}
      {showChat && (
        <ChatPanel
          isVisible={isChatVisible}
          onToggle={() => setIsChatVisible(!isChatVisible)}
        />
      )}
    </div>
  );
}
