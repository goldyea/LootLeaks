"use client";

import { Search, Bell, Settings, Package } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TopHeaderProps {
  user?: any;
  showSearch?: boolean;
  title?: string;
  subtitle?: string;
}

export default function TopHeader({
  user,
  showSearch = true,
  title,
  subtitle,
}: TopHeaderProps) {
  return (
    <header className="bg-[#0f1419]/95 backdrop-blur-xl border-b border-gray-800/30 px-6 py-4 sticky top-0 z-30">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">▶</span>
          </div>
          <span className="text-xl font-bold text-white tracking-wide">
            LOOTLEAKS
          </span>
        </Link>

        {/* Center: Gift Button, Search, and Navigation */}
        {showSearch && (
          <div className="flex items-center gap-6">
            {/* Gift Button */}
            <Link
              href="/drops"
              className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-xl hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Package className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-white/80">Take your</span>
                <span className="text-sm font-bold text-yellow-300">
                  free reward
                </span>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search plugins... | All v"
                className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-xl w-80 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
              />
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center gap-6">
              <Link
                href="/"
                className="text-white font-semibold hover:text-blue-400 transition-colors relative"
              >
                Home
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"></div>
              </Link>
              <Link
                href="/resources"
                className="text-gray-400 font-semibold hover:text-white transition-colors"
              >
                Resources
              </Link>
              <Link
                href="/bonuses"
                className="text-gray-400 font-semibold hover:text-white transition-colors"
              >
                Bonuses
              </Link>
              <Link
                href="/vip"
                className="text-gray-400 font-semibold hover:text-white transition-colors flex items-center gap-1"
              >
                <span className="text-yellow-400">⭐</span> VIP Club
              </Link>
            </nav>
          </div>
        )}

        {/* Right: User Actions */}
        <div className="flex items-center gap-4">
          {/* Live Support */}
          <div className="flex items-center gap-2 text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Live support</span>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10 ring-2 ring-blue-500/30">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                {user?.email?.[0]?.toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
            <div className="text-right">
              <div className="text-lg font-bold text-white">
                $252240<span className="text-gray-400">.26</span>
              </div>
            </div>
          </div>

          {/* Deposit Button */}
          <Link href="/deposit">
            <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-6 py-2 rounded-xl transition-all duration-300 shadow-lg hover:scale-105">
              DEPOSIT
            </Button>
          </Link>

          {/* Notifications */}
          <div className="relative cursor-pointer group">
            <div className="w-3 h-3 bg-red-500 rounded-full absolute -top-1 -right-1 animate-pulse"></div>
            <div className="w-10 h-10 bg-gray-800/50 rounded-xl flex items-center justify-center hover:bg-gray-700/50 transition-all duration-300 group-hover:scale-105">
              <Bell className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            </div>
          </div>

          {/* Settings */}
          <Button
            variant="ghost"
            size="sm"
            className="w-10 h-10 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 p-0 hover:scale-105"
          >
            <Settings className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
          </Button>
        </div>
      </div>
    </header>
  );
}
