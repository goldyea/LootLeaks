"use client";

import { useState } from "react";
import { Users, Settings, Send, MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatPanelProps {
  isVisible?: boolean;
  onToggle?: () => void;
}

export default function ChatPanel({
  isVisible = true,
  onToggle,
}: ChatPanelProps) {
  const [message, setMessage] = useState("");

  const messages = [
    {
      user: "ProGamer_2024",
      message: "🔔 **ProGamer_2024** joined the chat",
      time: "2 minutes ago",
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
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 backdrop-blur-xl border border-indigo-500/30 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
        >
          <MessageSquare className="w-6 h-6 group-hover:animate-bounce" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse shadow-lg">
            <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full animate-ping opacity-20"></div>
        </Button>
      </div>
    );
  }

  return (
    <div className="w-80 h-full bg-gradient-to-b from-slate-900/60 to-slate-900/40 backdrop-blur-xl border-l border-slate-800/50 flex flex-col shadow-2xl transition-all duration-300 ease-in-out">
      {/* Enhanced Chat Header */}
      <div className="p-6 border-b border-slate-800/40 bg-gradient-to-r from-slate-800/30 to-slate-700/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Users className="w-6 h-6 text-indigo-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse shadow-lg"></div>
            </div>
            <div>
              <span className="font-bold text-white text-lg">Live Chat</span>
              <p className="text-xs text-slate-400">24 online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-400 hover:text-white hover:bg-slate-700/30 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Settings className="w-5 h-5" />
            </Button>
            {onToggle && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggle}
                className="text-slate-400 hover:text-white hover:bg-slate-700/30 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Chat Messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 hover:bg-slate-700/20 p-3 rounded-xl transition-all duration-300 ${
              msg.type === "system" ? "bg-slate-800/30" : ""
            } ${msg.mention ? "bg-indigo-500/10 border-l-2 border-indigo-400" : ""}`}
          >
            {msg.type !== "system" && (
              <Avatar className="w-8 h-8 ring-2 ring-slate-600/30 hover:ring-indigo-400/50 transition-all">
                <AvatarImage
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${msg.avatar}`}
                />
                <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-bold text-xs">
                  {msg.user[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
            )}
            <div
              className={`flex-1 ${msg.type === "system" ? "text-center" : ""}`}
            >
              {msg.type !== "system" && (
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-white">
                    {msg.user}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {msg.time}
                  </span>
                </div>
              )}
              <div
                className={`text-sm leading-relaxed ${
                  msg.type === "system"
                    ? "text-slate-400 italic text-xs"
                    : msg.mention
                      ? "text-slate-200"
                      : "text-slate-300"
                }`}
              >
                {msg.message.includes("**") ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: msg.message.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>",
                      ),
                    }}
                  />
                ) : (
                  msg.message
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="p-6 border-t border-slate-800/40">
        <div className="flex items-center gap-3">
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 bg-slate-700/30 backdrop-blur-sm border-slate-600/50 text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl py-3 transition-all duration-300"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                // Handle send message
                setMessage("");
              }
            }}
          />
          <Button
            size="sm"
            onClick={() => setMessage("")}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl px-4 py-3 shadow-lg transition-all duration-300 hover:shadow-emerald-500/25"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
