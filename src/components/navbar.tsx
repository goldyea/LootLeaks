import Link from "next/link";
import { createClient } from "../../supabase/server";
import { Button } from "./ui/button";
import { Bell, Coins, MessageCircle } from "lucide-react";
import UserProfile from "./user-profile";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return (
    <nav className="w-full backdrop-blur-md bg-black/20 border-b border-white/10 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" prefetch className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            LootLeaks
          </span>
        </Link>

        <div className="flex gap-6 items-center">
          {user ? (
            <>
              <div className="flex items-center gap-4">
                {/* Tokens Display */}
                <div className="flex items-center gap-2 px-3 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg">
                  <Coins className="w-4 h-4 text-yellow-400" />
                  <span className="text-white font-medium">1,250</span>
                </div>

                {/* Notifications */}
                <button className="relative p-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors">
                  <Bell className="w-5 h-5 text-gray-300" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
                </button>

                {/* Chat */}
                <button className="p-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-gray-300" />
                </button>
              </div>

              <Link
                href="/dashboard"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 border-0">
                  Dashboard
                </Button>
              </Link>
              <UserProfile />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
