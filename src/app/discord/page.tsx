import { createClient } from "../../../supabase/server";
import {
  MessageCircle,
  Users,
  Crown,
  Shield,
  Gamepad2,
  ExternalLink,
  Star,
  Zap,
  Gift,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MainLayout from "@/components/layout/main-layout";

export default async function DiscordPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <MainLayout
      user={user}
      showSearch={false}
      title="Discord Community"
      subtitle="Join our thriving community of Minecraft enthusiasts"
    >
      <div className="p-6">
        {/* Official Discord Server Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-xl border border-indigo-500/30 rounded-3xl p-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">
                  Official LootLeaks Discord
                </h2>
                <p className="text-xl text-slate-400">
                  Join our thriving community of Minecraft enthusiasts
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">
                  25,000+
                </div>
                <div className="text-slate-400">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  24/7
                </div>
                <div className="text-slate-400">Community Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-slate-400">Channels</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold px-8 py-4 text-lg rounded-xl flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Join Discord Server
                <ExternalLink className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 border-slate-600/50 text-white hover:bg-white/20 px-8 py-4 text-lg rounded-xl"
              >
                View Server Rules
              </Button>
            </div>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Connect with fellow Minecraft players, get help with resources,
              share your creations, and stay updated with the latest LootLeaks
              announcements.
            </p>
          </div>
        </div>

        {/* Discord Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/30 hover:bg-slate-800/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">
                Community Chat
              </h3>
              <p className="text-slate-400 text-sm">
                Chat with thousands of Minecraft players
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/30 hover:bg-slate-800/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">
                Support Channels
              </h3>
              <p className="text-slate-400 text-sm">
                Get help from our expert moderators
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/30 hover:bg-slate-800/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Gamepad2 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">
                Gaming Events
              </h3>
              <p className="text-slate-400 text-sm">
                Join community events and competitions
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/30 hover:bg-slate-800/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">
                Exclusive Updates
              </h3>
              <p className="text-slate-400 text-sm">
                Be first to know about new releases
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sponsor Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Crown className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl font-bold text-white">Our Sponsors</h2>
            <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 px-3 py-1 font-semibold">
              Premium Partners
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sponsor Card 1 */}
            <Card className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-3 py-1 font-semibold">
                    💎 Diamond Sponsor
                  </Badge>
                  <ExternalLink className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    ServerHost Pro
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Premium Minecraft server hosting with 99.9% uptime guarantee
                  </p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>24/7 Expert Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>DDoS Protection</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>One-Click Modpack Install</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-2 rounded-xl">
                  Get 50% Off First Month
                </Button>
              </CardContent>
            </Card>

            {/* Sponsor Card 2 */}
            <Card className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 px-3 py-1 font-semibold">
                    🚀 Gold Sponsor
                  </Badge>
                  <ExternalLink className="w-5 h-5 text-slate-400 hover:text-purple-400 transition-colors" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    DevCraft Studios
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Custom plugin development and Minecraft server solutions
                  </p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Custom Plugin Development</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Server Setup & Configuration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Ongoing Maintenance</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 rounded-xl">
                  Get Free Consultation
                </Button>
              </CardContent>
            </Card>

            {/* Sponsor Card 3 */}
            <Card className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-3 py-1 font-semibold">
                    🌟 Silver Sponsor
                  </Badge>
                  <ExternalLink className="w-5 h-5 text-slate-400 hover:text-green-400 transition-colors" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    SecurePlay Network
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Advanced anti-cheat and server security solutions
                  </p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Advanced Anti-Cheat</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Real-time Monitoring</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Automated Moderation</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-2 rounded-xl">
                  Try Free for 30 Days
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Discord Rules Preview */}
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Community Guidelines
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                Be Respectful
              </h4>
              <p className="text-slate-400 mb-4">
                Treat all community members with respect and kindness. No
                harassment, discrimination, or toxic behavior.
              </p>

              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                Stay On Topic
              </h4>
              <p className="text-slate-400">
                Keep discussions relevant to Minecraft and LootLeaks. Use
                appropriate channels for different topics.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                No Spam or Self-Promotion
              </h4>
              <p className="text-slate-400 mb-4">
                Avoid excessive posting, advertising, or self-promotion without
                permission from moderators.
              </p>

              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                Help Others
              </h4>
              <p className="text-slate-400">
                Share your knowledge and help fellow community members when
                possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
