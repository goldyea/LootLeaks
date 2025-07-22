import { createClient } from "../../supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import {
  Home as HomeIcon,
  Package,
  Upload,
  Crown,
  MessageCircle,
  Settings,
  Search,
  Download,
  Star,
  Wrench,
  Gamepad2,
  Palette,
  ExternalLink,
  TrendingUp,
  Users,
  MessageSquare,
  Send,
  Eye,
  Bell,
  Coins,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import MainLayout from "@/components/layout/main-layout";

export default async function Home() {
  const supabase = createClient(cookies());
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <MainLayout user={user} showSearch={true}>
      <div className="p-6">
        {/* Enhanced Hero Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-xl">🎉</span>
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 tracking-tight">
                    Welcome back, {user?.email?.split("@")[0] || "Explorer"}!
                  </h1>
                  <p className="text-slate-400 text-lg font-medium mt-2">
                    Explore fresh Minecraft tools, leaks, and configs — all in
                    one spot.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-500/30 rounded-xl px-4 py-2">
                <span className="text-sm font-semibold text-indigo-400">
                  ✨ What's New
                </span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 mb-8">
            <Link href="/drops">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:shadow-indigo-500/25 hover:scale-105">
                🔍 Explore Drops
              </Button>
            </Link>
            <Link href="/upload">
              <Button
                variant="outline"
                className="bg-slate-800/30 border-slate-700/50 text-white hover:bg-slate-700/50 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                ⬆️ Upload Now
              </Button>
            </Link>
          </div>
        </div>

        {/* News & Promotions */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <h2 className="text-xl font-bold text-white">News & Promotions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* News Card with Mini Icon */}
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm">📰</span>
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-3 py-1 rounded-lg font-semibold">
                    News
                  </Badge>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                LootLeaks 2.5 — Premium Gaming Hub!
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Experience our redesigned interface with enhanced visual
                hierarchy and modern touches.
              </p>
            </div>

            {/* Featured Card with PvP Icon */}
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-yellow-500/10 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm">⚔️</span>
                  </div>
                  <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 px-3 py-1 rounded-lg font-semibold">
                    Featured
                  </Badge>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-yellow-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Weekly Featured: PvP Resource Pack
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Check out this week's featured resource pack with enhanced PvP
                textures and optimized performance.
              </p>
            </div>

            {/* Sponsored Cards with Icons */}
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-orange-500/10 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm">🖥️</span>
                  </div>
                  <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-3 py-1 rounded-lg font-semibold">
                    Sponsored
                  </Badge>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-orange-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Premium Server Hosting - 50% Off!
              </h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                Get the best Minecraft server hosting with our exclusive
                discount and 99.9% uptime guarantee.
              </p>
              <p className="text-xs text-slate-500 font-medium">
                ⭐ Sponsored by ServerHost Pro
              </p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm">⚙️</span>
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-3 py-1 rounded-lg font-semibold">
                    Sponsored
                  </Badge>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Custom Plugin Development Services
              </h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                Professional plugin development for your Minecraft server needs
                with ongoing support.
              </p>
              <p className="text-xs text-slate-500 font-medium">
                ⭐ Sponsored by DevCraft Studios
              </p>
            </div>
          </div>
        </div>

        {/* Latest Drops */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">Latest Drops</h2>
              <span className="text-sm text-slate-400">30 resources</span>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 border-slate-600/50 text-white hover:bg-white/20 rounded-xl font-semibold backdrop-blur-sm"
              >
                All
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-white hover:bg-slate-700/30 rounded-xl font-medium transition-all duration-300"
              >
                Plugins
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-white hover:bg-slate-700/30 rounded-xl font-medium transition-all duration-300"
              >
                Configs
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-white hover:bg-slate-700/30 rounded-xl font-medium transition-all duration-300"
              >
                Clients
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-white hover:bg-slate-700/30 rounded-xl font-medium transition-all duration-300"
              >
                Mods
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Resource Cards */}
            {[
              {
                icon: "⚡",
                title: "EssentialsX Plus",
                type: "Plugin",
                description: "Essential commands and features for your server",
                downloads: "45.2K",
                views: "33K",
                rating: 5,
                status: "online",
                author: "ServerPro",
                updated: "2 hours ago",
                featured: true,
                tags: ["Economy", "Commands", "1.20.1"],
                safety: "verified",
                thumbnail:
                  "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80",
              },
              {
                icon: "⚔️",
                title: "PvP Arena Config",
                type: "Config",
                description: "Professional PvP arena setup with custom kits",
                downloads: "12.8K",
                views: "18K",
                rating: 4,
                status: "online",
                author: "PvPMaster",
                updated: "5 hours ago",
                featured: false,
                tags: ["PvP", "Arena", "1.19.4"],
                safety: "verified",
                thumbnail:
                  "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80",
              },
              {
                icon: "👤",
                title: "Huzuni Client",
                type: "Client",
                description: "Premium utility client with advanced features",
                downloads: "28.5K",
                views: "37K",
                rating: 5,
                status: "online",
                author: "ClientDev",
                updated: "1 day ago",
                featured: true,
                tags: ["Utility", "PvP", "1.20.1"],
                safety: "caution",
                thumbnail:
                  "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80",
              },
            ].map((resource, index) => (
              <div
                key={index}
                className={`backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02] group hover:shadow-2xl cursor-pointer overflow-hidden rounded-2xl ${
                  resource.featured
                    ? "bg-slate-900/50 border-indigo-500/30 hover:bg-slate-800/70 hover:shadow-indigo-500/10 hover:border-indigo-400/50"
                    : "bg-slate-900/50 border-slate-800/50 hover:bg-slate-800/70 hover:shadow-blue-500/10 hover:border-slate-700/70"
                }`}
              >
                {/* Thumbnail */}
                {resource.thumbnail && (
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={resource.thumbnail}
                      alt={resource.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    {resource.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-indigo-500/90 text-white border-indigo-400/50 text-xs font-semibold backdrop-blur-sm">
                          ✨ Featured
                        </Badge>
                      </div>
                    )}
                    {/* Safety Badge */}
                    <div className="absolute top-3 right-3">
                      <div
                        className={`w-3 h-3 rounded-full shadow-lg ${
                          resource.safety === "verified"
                            ? "bg-green-400"
                            : resource.safety === "caution"
                              ? "bg-yellow-400"
                              : "bg-red-400"
                        }`}
                        title={`Safety: ${resource.safety}`}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl flex items-center justify-center text-xl shadow-lg">
                        {resource.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">
                          {resource.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge
                            className={`text-xs font-semibold ${
                              resource.type === "Plugin"
                                ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                : resource.type === "Config"
                                  ? "bg-green-500/20 text-green-400 border-green-500/30"
                                  : "bg-purple-500/20 text-purple-400 border-purple-500/30"
                            }`}
                          >
                            {resource.type}
                          </Badge>
                          {resource.author && (
                            <span className="text-xs text-slate-500">
                              by {resource.author}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full ${resource.status === "online" ? "bg-green-400 animate-pulse" : "bg-red-400"} shadow-lg`}
                    ></div>
                  </div>

                  {/* Tags */}
                  {resource.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs bg-slate-700/30 text-slate-300 border-slate-600/50 hover:bg-slate-600/50 transition-colors cursor-pointer"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {resource.description}
                  </p>

                  {/* Mini Stats */}
                  <div className="flex items-center justify-between text-sm text-slate-400 mb-6">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        <span className="font-medium">
                          {resource.downloads}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span className="font-medium">{resource.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < resource.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-600"}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Footer with Update Time */}
                  {resource.updated && (
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span>Updated {resource.updated}</span>
                      </div>
                      {resource.featured && (
                        <Badge className="bg-indigo-500/20 text-indigo-400 border-indigo-500/30 text-xs font-semibold">
                          Featured
                        </Badge>
                      )}
                    </div>
                  )}

                  {/* Enhanced Download Button */}
                  <Button
                    className={`w-full font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 ${
                      resource.featured
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white hover:shadow-indigo-500/25"
                        : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white hover:shadow-blue-500/25"
                    }`}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Get Resource
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
