import { createClient } from "../../../supabase/server";
import { cookies } from "next/headers";
import {
  Package,
  Download,
  Star,
  Eye,
  Filter,
  Search,
  TrendingUp,
  Clock,
  Users,
  Zap,
  Crown,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MainLayout from "@/components/layout/main-layout";

export default async function DropsPage() {
  const supabase = createClient(cookies());
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const resources = [
    {
      icon: "⚡",
      title: "EssentialsX Plus",
      type: "Plugin",
      description:
        "Essential commands and features for your server with advanced economy system",
      downloads: "45.2K",
      views: "33K",
      rating: 5,
      status: "online",
      author: "ServerPro",
      updated: "2 hours ago",
      featured: true,
      tags: ["Economy", "Commands", "1.20.1", "Spigot"],
      performance: "excellent",
      safety: "verified",
      thumbnail:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80",
    },
    {
      icon: "⚔️",
      title: "PvP Arena Config",
      type: "Config",
      description:
        "Professional PvP arena setup with custom kits and balanced gameplay",
      downloads: "12.8K",
      views: "18K",
      rating: 4,
      status: "online",
      author: "PvPMaster",
      updated: "5 hours ago",
      featured: false,
      tags: ["PvP", "Arena", "Factions", "1.19.4"],
      performance: "good",
      safety: "verified",
      thumbnail:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80",
    },
    {
      icon: "👤",
      title: "Huzuni Client",
      type: "Client",
      description:
        "Premium utility client with advanced features and clean interface",
      downloads: "28.5K",
      views: "37K",
      rating: 5,
      status: "online",
      author: "ClientDev",
      updated: "1 day ago",
      featured: true,
      tags: ["Utility", "PvP", "1.20.1", "Forge"],
      performance: "excellent",
      safety: "caution",
      thumbnail:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80",
    },
    {
      icon: "🎨",
      title: "Faithful 32x",
      type: "Texture Pack",
      description:
        "High-resolution faithful texture pack maintaining vanilla aesthetics",
      downloads: "89.1K",
      views: "125K",
      rating: 5,
      status: "online",
      author: "TextureArt",
      updated: "3 days ago",
      featured: true,
      tags: ["Faithful", "32x", "1.20.1", "Vanilla"],
      performance: "good",
      safety: "verified",
      thumbnail:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&q=80",
    },
    {
      icon: "🌟",
      title: "BSL Shaders",
      type: "Shader",
      description:
        "Beautiful lighting and shadow effects for enhanced visual experience",
      downloads: "67.3K",
      views: "94K",
      rating: 5,
      status: "online",
      author: "ShaderMaster",
      updated: "1 week ago",
      featured: false,
      tags: ["Lighting", "Shadows", "OptiFine", "1.20.1"],
      performance: "moderate",
      safety: "verified",
      thumbnail:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    },
    {
      icon: "🏰",
      title: "Medieval Castle",
      type: "Map",
      description:
        "Massive medieval castle with detailed interiors and surrounding village",
      downloads: "23.7K",
      views: "41K",
      rating: 4,
      status: "online",
      author: "BuilderPro",
      updated: "2 weeks ago",
      featured: false,
      tags: ["Medieval", "Castle", "Adventure", "1.19.4"],
      performance: "good",
      safety: "verified",
      thumbnail:
        "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=400&q=80",
    },
  ];

  return (
    <MainLayout
      user={user}
      title="Resource Drops"
      subtitle={`Discover ${resources.length} amazing resources`}
    >
      <div className="p-6">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            {/* Filters */}
            <div className="flex gap-3 w-full lg:w-auto justify-center lg:justify-end">
              <Select>
                <SelectTrigger className="w-40 bg-slate-700/30 border-slate-600/50 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="plugin">Plugins</SelectItem>
                  <SelectItem value="mod">Mods</SelectItem>
                  <SelectItem value="texture-pack">Texture Packs</SelectItem>
                  <SelectItem value="shader">Shaders</SelectItem>
                  <SelectItem value="map">Maps</SelectItem>
                  <SelectItem value="config">Configs</SelectItem>
                  <SelectItem value="client">Clients</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-40 bg-slate-700/30 border-slate-600/50 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="downloads">Most Downloads</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-slate-700/30 border border-slate-600/50 text-white hover:bg-slate-600/50 px-4 rounded-xl">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            <Button className="bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 px-4 py-2 rounded-xl text-sm font-semibold">
              All
            </Button>
            <Button
              variant="ghost"
              className="text-slate-400 hover:text-white hover:bg-slate-700/30 px-4 py-2 rounded-xl text-sm"
            >
              Featured
            </Button>
            <Button
              variant="ghost"
              className="text-slate-400 hover:text-white hover:bg-slate-700/30 px-4 py-2 rounded-xl text-sm"
            >
              New Releases
            </Button>
            <Button
              variant="ghost"
              className="text-slate-400 hover:text-white hover:bg-slate-700/30 px-4 py-2 rounded-xl text-sm"
            >
              Trending
            </Button>
            <Button
              variant="ghost"
              className="text-slate-400 hover:text-white hover:bg-slate-700/30 px-4 py-2 rounded-xl text-sm"
            >
              VIP Only
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/30">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">2.1M</div>
              <div className="text-xs text-slate-400">Total Downloads</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/30">
            <CardContent className="p-4 text-center">
              <Package className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">50K+</div>
              <div className="text-xs text-slate-400">Resources</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/30">
            <CardContent className="p-4 text-center">
              <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">25K+</div>
              <div className="text-xs text-slate-400">Contributors</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/30">
            <CardContent className="p-4 text-center">
              <Star className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">4.8</div>
              <div className="text-xs text-slate-400">Avg Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className={`backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02] group hover:shadow-2xl cursor-pointer overflow-hidden ${
                resource.featured
                  ? "bg-slate-900/50 border-emerald-500/30 hover:bg-slate-800/70 hover:shadow-emerald-500/10 hover:border-emerald-400/50"
                  : "bg-slate-900/50 border-slate-800/50 hover:bg-slate-800/70 hover:shadow-blue-500/10 hover:border-slate-700/70"
              }`}
            >
              <CardContent className="p-0">
                {/* Thumbnail */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={resource.thumbnail}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  {resource.featured && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-emerald-500/90 text-white border-emerald-400/50 text-xs font-semibold backdrop-blur-sm">
                        <Crown className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  {/* Performance Indicator */}
                  <div className="absolute top-3 right-3 flex gap-2">
                    <div
                      className={`w-3 h-3 rounded-full shadow-lg ${
                        resource.performance === "excellent"
                          ? "bg-green-400"
                          : resource.performance === "good"
                            ? "bg-yellow-400"
                            : "bg-orange-400"
                      }`}
                      title={`Performance: ${resource.performance}`}
                    ></div>
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

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl flex items-center justify-center text-xl shadow-lg">
                        {resource.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-white text-lg">
                            {resource.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            className={`text-xs font-semibold ${
                              resource.type === "Plugin"
                                ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                : resource.type === "Config"
                                  ? "bg-green-500/20 text-green-400 border-green-500/30"
                                  : resource.type === "Client"
                                    ? "bg-purple-500/20 text-purple-400 border-purple-500/30"
                                    : resource.type === "Texture Pack"
                                      ? "bg-pink-500/20 text-pink-400 border-pink-500/30"
                                      : resource.type === "Shader"
                                        ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
                                        : "bg-orange-500/20 text-orange-400 border-orange-500/30"
                            }`}
                          >
                            {resource.type}
                          </Badge>
                          <span className="text-xs text-slate-500">
                            by {resource.author}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full shadow-lg ${
                        resource.status === "online"
                          ? "bg-green-400 animate-pulse"
                          : "bg-red-400"
                      }`}
                    ></div>
                  </div>

                  {/* Tags */}
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

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {resource.description}
                  </p>

                  {/* Stats */}
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
                          className={`w-4 h-4 ${
                            i < resource.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-slate-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="w-3 h-3" />
                      <span>Updated {resource.updated}</span>
                    </div>
                    {resource.featured && (
                      <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-xs font-semibold">
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Download Button */}
                  <Button
                    className={`w-full font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 ${
                      resource.featured
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white hover:shadow-emerald-500/25"
                        : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white hover:shadow-blue-500/25"
                    }`}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Get Resource
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="bg-slate-700/30 border border-slate-600/50 text-white hover:bg-slate-600/50 px-8 py-3 rounded-xl font-semibold">
            Load More Resources
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
