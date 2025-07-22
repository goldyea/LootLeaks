"use client";

import { useState } from "react";
import { Settings, Send, MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatPanelProps {
  isVisible?: boolean;
  onToggle?: () => void;
}

export default function ChatPanel({
  isVisible = false,
  onToggle,
}: ChatPanelProps) {
  const [message, setMessage] = useState("");

  const messages = [
    {
      user: "ProGamer_2024",
      message: "🔔 ProGamer_2024 joined the chat",
      time: "5 minutes ago",
      avatar: "progamer",
      type: "system",
    },
    {
      user: "gold",
      message: "Anyone know where to find good PvP configs?",
      time: "5 minutes ago",
      avatar: "gold",
      type: "message",
    },
    {
      user: "MinecraftMaster",
      message: "@gold Check out the latest drops section! 🔥",
      time: "3 minutes ago",
      avatar: "master",
      type: "message",
      mention: true,
    },
    {
      user: "gold",
      message: "Thanks! Found some great stuff there 😊",
      time: "2 minutes ago",
      avatar: "gold",
      type: "message",
    },
    {
      user: "DevHelper",
      message: "New EssentialsX update just dropped! 🚀",
      time: "1 minute ago",
      avatar: "dev",
      type: "message",
    },
  ];

  if (!isVisible) {
    return (
      <div className="fixed right-6 bottom-6 z-50">
        <Button
          onClick={onToggle}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group relative"
        >
          <MessageSquare className="w-6 h-6" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1"></div>
          </div>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed right-6 bottom-6 w-96 h-[600px] bg-[#0f1419] border border-gray-800/50 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-800/50 bg-[#0f1419]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <MessageSquare className="w-5 h-5 text-blue-400" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="font-semibold text-white text-sm">
                Live support
              </span>
              <p className="text-xs text-gray-400">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg p-2"
            >
              <Settings className="w-4 h-4" />
            </Button>
            {onToggle && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggle}
                className="text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg p-2"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${msg.type === "system" ? "justify-center" : ""}`}
          >
            {msg.type !== "system" && (
              <Avatar className="w-7 h-7 ring-1 ring-gray-700">
                <AvatarImage
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${msg.avatar}`}
                />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-xs">
                  {msg.user[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
            )}
            <div
              className={`flex-1 ${msg.type === "system" ? "text-center" : ""}`}
            >
              {msg.type !== "system" && (
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-white">
                    {msg.user}
                  </span>
                  <span className="text-xs text-gray-500">{msg.time}</span>
                </div>
              )}
              <div
                className={`text-xs leading-relaxed ${
                  msg.type === "system"
                    ? "text-gray-400 italic"
                    : msg.mention
                      ? "text-blue-300"
                      : "text-gray-300"
                }`}
              >
                {msg.message}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t border-gray-800/50">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Type a message... (markdown supported)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 rounded-lg text-sm"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setMessage("");
              }
            }}
          />
          <Button
            size="sm"
            onClick={() => setMessage("")}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-lg px-3 py-2 shadow-lg transition-all duration-300"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
