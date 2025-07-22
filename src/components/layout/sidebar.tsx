"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Gamepad2,
  Package,
  Upload,
  MessageSquare,
  User,
  Star,
  Plus,
  Minus,
  Info,
  HelpCircle,
  Settings,
  MessageCircle,
  Shield,
} from "lucide-react";

interface SidebarProps {
  user?: any;
}

export default function Sidebar({ user }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const sidebarItems = [
    { icon: Home, href: "/", tooltip: "Home" },
    { icon: Gamepad2, href: "/games", tooltip: "Games" },
    { icon: Package, href: "/resources", tooltip: "Resources" },
    { icon: Upload, href: "/upload", tooltip: "Upload" },
    { icon: MessageSquare, href: "/chat", tooltip: "Chat" },
    { icon: User, href: "/profile", tooltip: "Profile" },
    { icon: Star, href: "/vip", tooltip: "VIP" },
    { icon: Plus, href: "/deposit", tooltip: "Deposit" },
    { icon: Minus, href: "/withdraw", tooltip: "Withdraw" },
    { icon: HelpCircle, href: "/help", tooltip: "Help" },
    { icon: Settings, href: "/settings", tooltip: "Settings" },
  ];

  return (
    <div className="fixed left-0 top-0 w-20 h-full bg-[#0f1419] border-r border-gray-800/30 flex flex-col items-center py-6 z-40">
      {/* Logo */}
      <Link href="/" className="mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
          <span className="text-white font-bold text-xl">▶</span>
        </div>
      </Link>

      {/* Navigation Items */}
      <div className="flex flex-col gap-3 flex-1">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 group ${
                active
                  ? "bg-blue-600/20 text-blue-400 shadow-lg shadow-blue-500/20"
                  : "text-gray-500 hover:text-white hover:bg-gray-800/50 hover:scale-105"
              }`}
              title={item.tooltip}
            >
              <Icon className="w-5 h-5" />
              {active && (
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-400 rounded-full"></div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
