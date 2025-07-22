import Link from "next/link";
import {
  Twitter,
  Github,
  MessageCircle,
  Package,
  Gamepad2,
  Palette,
  Wrench,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900/40 backdrop-blur-xl border-t border-slate-800/50">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-white mb-6 flex items-center gap-2">
              📁 Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  <Package className="w-4 h-4" />
                  Texture Packs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Wrench className="w-4 h-4" />
                  Mods
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  <Palette className="w-4 h-4" />
                  Shaders
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2"
                >
                  <Gamepad2 className="w-4 h-4" />
                  Maps
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h3 className="font-semibold text-white mb-6 flex items-center gap-2">
              💬 Community
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Discord Server
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Forums
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Creator Program
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Leaderboards
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-semibold text-white mb-6 flex items-center gap-2">
              📞 Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Upload Guide
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Bug Reports
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-white mb-6 flex items-center gap-2">
              📜 Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  DMCA Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Brand Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              LootLeaks
            </span>
          </div>
          <p className="text-gray-400 max-w-md mx-auto">
            The ultimate destination for premium Minecraft resources. Discover,
            download, and share the best content for your world.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center mb-6">
          <div className="glass-dark rounded-xl p-4 inline-block">
            <p className="text-slate-300 mb-2">💎 Want unlimited downloads?</p>
            <Link
              href="/vip"
              className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
            >
              Upgrade to VIP
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-slate-800/50">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} LootLeaks. All rights reserved. Made with ❤️ for
            the Minecraft community.
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors p-2 backdrop-blur-md bg-white/5 rounded-lg hover:bg-white/10"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors p-2 backdrop-blur-md bg-white/5 rounded-lg hover:bg-white/10"
            >
              <span className="sr-only">Discord</span>
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 transition-colors p-2 backdrop-blur-md bg-white/5 rounded-lg hover:bg-white/10"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
