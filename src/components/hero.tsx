import Link from "next/link";
import { Search, Download, Star, Users } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%239C92AC%27%20fill-opacity%3D%270.1%27%3E%3Ccircle%20cx%3D%2730%27%20cy%3D%2730%27%20r%3D%272%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      </div>

      <div className="relative pt-32 pb-40 sm:pt-40 sm:pb-48">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-500/20 text-purple-200 border border-purple-400/30 backdrop-blur-sm">
                🎮 Premium Minecraft Resources
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl font-bold mb-8 tracking-tight">
              <span className="text-white">Welcome to </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 animate-pulse">
                LootLeaks
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover, download, and share the best Minecraft resources. From
              epic texture packs to game-changing mods, find everything you need
              to enhance your Minecraft experience.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl" />
                <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-2">
                  <div className="flex items-center">
                    <Search className="w-6 h-6 text-gray-400 ml-4" />
                    <input
                      type="text"
                      placeholder="Search for texture packs, mods, shaders..."
                      className="flex-1 bg-transparent text-white placeholder-gray-400 px-4 py-4 focus:outline-none text-lg"
                    />
                    <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-xl font-medium hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                href="/dashboard"
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-xl font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Browse Resources
                  <Download className="ml-2 w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href="#featured"
                className="px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 text-lg font-medium hover:scale-105"
              >
                View Featured
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-purple-400 mb-2">
                  <Download className="w-5 h-5" />
                  <span className="text-2xl font-bold text-white">50K+</span>
                </div>
                <div className="text-gray-400 text-sm">Resources Available</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-cyan-400 mb-2">
                  <Users className="w-5 h-5" />
                  <span className="text-2xl font-bold text-white">25K+</span>
                </div>
                <div className="text-gray-400 text-sm">Active Community</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-yellow-400 mb-2">
                  <Star className="w-5 h-5" />
                  <span className="text-2xl font-bold text-white">4.9</span>
                </div>
                <div className="text-gray-400 text-sm">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
