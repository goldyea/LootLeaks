"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Home as HomeIcon,
  Package,
  Upload,
  Crown,
  MessageCircle,
  Settings,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  MessageSquare,
  Info,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";

interface SidebarProps {
  user?: any;
}

export default function Sidebar({ user }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: HomeIcon, label: "Home", color: "emerald", emoji: "🏠" },
    {
      href: "/drops",
      icon: Package,
      label: "Drops",
      color: "blue",
      emoji: "📦",
    },
    {
      href: "/upload",
      icon: Upload,
      label: "Upload",
      color: "purple",
      emoji: "⬆️",
    },
    {
      href: "/vip",
      icon: Crown,
      label: "VIP",
      color: "yellow",
      special: true,
      emoji: "💎",
      animated: true,
    },
    {
      href: "/discord",
      icon: MessageCircle,
      label: "Discord",
      color: "indigo",
      emoji: "🗨️",
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div
      className={`${isCollapsed ? "w-16" : "w-64"} h-full bg-slate-900/70 backdrop-blur-xl border-r border-slate-800/50 p-4 flex flex-col shadow-2xl transition-all duration-300`}
    >
      {/* Logo and Toggle */}
      <div className="flex items-center justify-between mb-8">
        {!isCollapsed ? (
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">
                LootLeaks
              </h1>
              <p className="text-xs text-slate-400 font-medium">MC Resources</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center p-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">L</span>
            </div>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-slate-400 hover:text-white hover:bg-slate-700/40 p-2 flex-shrink-0"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <TooltipProvider>
        <nav className="space-y-1 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            const navItem = (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center ${isCollapsed ? "justify-center" : "gap-3"} px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer group hover:shadow-lg ${
                  active
                    ? `bg-gradient-to-r from-${item.color}-500/20 to-teal-500/20 text-${item.color}-400 border border-${item.color}-500/20 shadow-lg backdrop-blur-sm`
                    : item.special
                      ? "text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-amber-500/20 hover:border hover:border-yellow-500/30 hover:shadow-yellow-500/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-700/40"
                }`}
              >
                <div className="relative">
                  <Icon
                    className={`w-5 h-5 ${active ? `text-${item.color}-400` : `group-hover:text-${item.color}-400`} transition-colors flex-shrink-0 ${item.animated && item.special ? "group-hover:animate-bounce" : ""}`}
                  />
                  {item.special && item.animated && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full animate-pulse"></div>
                  )}
                </div>
                {!isCollapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
              </Link>
            );

            if (isCollapsed) {
              return (
                <Tooltip key={item.href}>
                  <TooltipTrigger asChild>{navItem}</TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="bg-slate-800 border-slate-700 text-white"
                  >
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              );
            }

            return navItem;
          })}

          {/* Settings with tooltip */}
          {isCollapsed ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center justify-center px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700/40 transition-all duration-300 cursor-pointer group hover:shadow-lg">
                  <Settings className="w-5 h-5 group-hover:text-gray-400 transition-colors flex-shrink-0" />
                </div>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="bg-slate-800 border-slate-700 text-white"
              >
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700/40 transition-all duration-300 cursor-pointer group hover:shadow-lg">
              <Settings className="w-5 h-5 group-hover:text-gray-400 transition-colors flex-shrink-0" />
              <span className="font-medium">Settings</span>
            </div>
          )}
        </nav>
      </TooltipProvider>

      {/* Bottom Strip */}
      <div className="mt-auto space-y-4">
        {/* Theme Toggle & Utilities */}
        <div
          className={`flex ${isCollapsed ? "flex-col gap-2" : "items-center justify-between"} px-2`}
        >
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="w-8 h-8 bg-slate-700/30 hover:bg-slate-600/50 rounded-lg p-0 transition-all duration-300"
              >
                <Sun className="w-4 h-4 text-slate-400 hover:text-yellow-400 transition-colors" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-8 h-8 bg-slate-700/30 hover:bg-slate-600/50 rounded-lg p-0 transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4 text-slate-400 hover:text-blue-400 transition-colors" />
              </Button>
            </div>
          )}
          {isCollapsed ? (
            <div className="flex flex-col gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 bg-slate-700/30 hover:bg-slate-600/50 rounded-lg p-0 transition-all duration-300"
                  >
                    <Sun className="w-4 h-4 text-slate-400 hover:text-yellow-400 transition-colors" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-slate-800 border-slate-700 text-white"
                >
                  <p>Theme</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 bg-slate-700/30 hover:bg-slate-600/50 rounded-lg p-0 transition-all duration-300"
                  >
                    <MessageSquare className="w-4 h-4 text-slate-400 hover:text-blue-400 transition-colors" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-slate-800 border-slate-700 text-white"
                >
                  <p>Feedback</p>
                </TooltipContent>
              </Tooltip>
            </div>
          ) : (
            <div className="text-xs text-slate-500 font-medium">
              LootLeaks v2.5
            </div>
          )}
        </div>

        {/* User Profile */}
        {user && (
          <div
            className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-700/30 backdrop-blur-sm border border-slate-600/30 shadow-lg hover:from-slate-700/50 hover:to-slate-600/30 transition-all duration-300 ${isCollapsed ? "justify-center" : ""}`}
          >
            <Avatar className="w-10 h-10 ring-2 ring-indigo-400/30 hover:ring-indigo-400/50 transition-all">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=gold" />
              <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-bold">
                {user.email?.[0]?.toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
            {!isCollapsed && (
              <div className="flex-1">
                <p className="text-sm font-semibold text-white truncate">
                  {user.email?.split("@")[0] || "User"}
                </p>
                <p className="text-xs text-slate-400 font-medium">Free Plan</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
