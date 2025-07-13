"use client";

import {
  Search,
  Bell,
  Coins,
  Settings,
  Upload,
  ChevronDown,
  Package,
  Wrench,
  Gamepad2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
    <div className="w-full bg-gradient-to-r from-slate-900/60 via-slate-900/40 to-slate-900/60 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  LootLeaks
                </h1>
                <p className="text-xs text-slate-400 font-medium">v2.5</p>
              </div>
            </Link>
          </div>

          {/* Center: Enhanced Search with Category Dropdown */}
          {showSearch ? (
            <div className="flex-1 max-w-3xl mx-8">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input
                    placeholder="Search resources, plugins, configs..."
                    className="pl-12 pr-4 py-3 bg-slate-800/40 backdrop-blur-sm border-slate-700/50 text-white placeholder-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl shadow-lg transition-all duration-300 hover:bg-slate-800/60"
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-32 bg-slate-800/40 border-slate-700/50 text-white hover:bg-slate-800/60 rounded-xl">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="plugins">
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4" />
                        Plugins
                      </div>
                    </SelectItem>
                    <SelectItem value="configs">
                      <div className="flex items-center gap-2">
                        <Wrench className="w-4 h-4" />
                        Configs
                      </div>
                    </SelectItem>
                    <SelectItem value="clients">
                      <div className="flex items-center gap-2">
                        <Gamepad2 className="w-4 h-4" />
                        Clients
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          ) : (
            <div className="flex-1 mx-8">
              {title && (
                <div>
                  <h1 className="text-2xl font-bold text-white">{title}</h1>
                  {subtitle && (
                    <p className="text-slate-400 mt-1">{subtitle}</p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Right: Enhanced Actions */}
          <div className="flex items-center gap-3">
            {/* Primary Upload CTA */}
            <Link href="/upload">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-indigo-500/25 hover:scale-105">
                <Upload className="w-4 h-4 mr-2" />
                Upload Resource
              </Button>
            </Link>

            {/* Enhanced Tokens with Gradient Glow */}
            <Link
              href="/vip"
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-xl border border-yellow-500/30 backdrop-blur-sm hover:from-yellow-500/30 hover:to-amber-500/30 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-yellow-500/20"
            >
              <Coins className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-400">
                1,250 Tokens
              </span>
            </Link>

            {/* Enhanced Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="relative cursor-pointer group">
                  <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full absolute -top-1 -right-1 animate-pulse shadow-lg"></div>
                  <div className="w-11 h-11 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 group-hover:scale-105 shadow-lg">
                    <Bell className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800/95 backdrop-blur-xl border-slate-700 w-80 shadow-2xl">
                <div className="p-3 border-b border-slate-700">
                  <h3 className="font-semibold text-white text-sm">
                    Recent Activity
                  </h3>
                </div>
                <DropdownMenuItem className="text-white hover:bg-slate-700/50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-sm">
                        New resource uploaded
                      </span>
                      <span className="text-xs text-slate-400">
                        EssentialsX Plus v2.1 is now available
                      </span>
                      <span className="text-xs text-slate-500">
                        2 minutes ago
                      </span>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-slate-700/50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-sm">
                        VIP membership expires soon
                      </span>
                      <span className="text-xs text-slate-400">
                        Renew your membership to keep access
                      </span>
                      <span className="text-xs text-slate-500">1 hour ago</span>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-slate-700/50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-sm">
                        Download complete
                      </span>
                      <span className="text-xs text-slate-400">
                        BSL Shaders v8.2 ready to use
                      </span>
                      <span className="text-xs text-slate-500">
                        3 hours ago
                      </span>
                    </div>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Settings */}
            <Button
              variant="ghost"
              size="sm"
              className="w-11 h-11 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 p-0 hover:scale-105 shadow-lg"
            >
              <Settings className="w-5 h-5 text-slate-300 hover:text-white transition-colors" />
            </Button>

            {/* Enhanced User Profile Popover */}
            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-800/30 rounded-xl p-2 transition-all duration-300 group">
                    <Avatar className="w-10 h-10 ring-2 ring-slate-600/50 hover:ring-indigo-400/50 transition-all group-hover:scale-105">
                      <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                      <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-semibold">
                        {user.email?.[0]?.toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:block">
                      <p className="text-sm font-semibold text-white">
                        {user.email?.split("@")[0] || "User"}
                      </p>
                      <p className="text-xs text-slate-400">Free Plan</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-800/95 backdrop-blur-xl border-slate-700 w-56 shadow-2xl">
                  <div className="p-3 border-b border-slate-700">
                    <p className="font-semibold text-white text-sm">
                      {user.email?.split("@")[0] || "User"}
                    </p>
                    <p className="text-xs text-slate-400">
                      Plan: Free | Upgrade
                    </p>
                  </div>
                  <DropdownMenuItem className="text-white hover:bg-slate-700/50">
                    Profile Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white hover:bg-slate-700/50">
                    My Uploads
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white hover:bg-slate-700/50">
                    My Favorites
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white hover:bg-slate-700/50">
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white hover:bg-slate-700/50 text-red-400">
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
