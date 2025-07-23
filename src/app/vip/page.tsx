import { createClient } from "@/lib/supabase";
import {
  Crown,
  Star,
  Zap,
  Shield,
  Download,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MainLayout from "@/components/layout/main-layout";

export default async function VIPPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <MainLayout
      user={user}
      showSearch={false}
      title="VIP Membership"
      subtitle="Unlock premium features and exclusive content"
    >
      <div className="p-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-12 h-12 text-yellow-400 animate-pulse" />
            <h2 className="text-5xl font-bold text-white">
              Unlock Premium Features
            </h2>
            <Sparkles className="w-12 h-12 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Get exclusive access to premium resources, priority downloads, and
            VIP-only content. Join thousands of satisfied members who've
            upgraded their Minecraft experience.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Basic VIP */}
          <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/30 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-white mb-2">
                Basic VIP
              </CardTitle>
              <div className="text-4xl font-bold text-blue-400 mb-2">$9.99</div>
              <p className="text-slate-400">per month</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">
                    Priority download queue
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">
                    Access to VIP resources
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">No download limits</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">VIP Discord role</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl">
                Choose Basic VIP
              </Button>
            </CardContent>
          </Card>

          {/* Premium VIP - Most Popular */}
          <Card className="bg-slate-800/30 backdrop-blur-xl border-emerald-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 relative ring-2 ring-emerald-500/20">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 font-bold">
                MOST POPULAR
              </Badge>
            </div>
            <CardHeader className="text-center pb-8 pt-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-white mb-2">
                Premium VIP
              </CardTitle>
              <div className="text-4xl font-bold text-emerald-400 mb-2">
                $19.99
              </div>
              <p className="text-slate-400">per month</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">
                    Everything in Basic VIP
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">
                    Exclusive premium resources
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">
                    Early access to new releases
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">
                    Custom resource requests
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Priority support</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-3 rounded-xl">
                Choose Premium VIP
              </Button>
            </CardContent>
          </Card>

          {/* Elite VIP */}
          <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/30 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-white mb-2">
                Elite VIP
              </CardTitle>
              <div className="text-4xl font-bold text-purple-400 mb-2">
                $39.99
              </div>
              <p className="text-slate-400">per month</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">
                    Everything in Premium VIP
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">
                    Unlimited cloud storage
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">
                    Private Discord channels
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">
                    Direct developer access
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">
                    Beta testing privileges
                  </span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-xl">
                Choose Elite VIP
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-6 text-center">
            <Download className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Priority Downloads
            </h3>
            <p className="text-slate-400 text-sm">
              Skip the queue and download instantly
            </p>
          </div>
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-6 text-center">
            <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Exclusive Content
            </h3>
            <p className="text-slate-400 text-sm">
              Access VIP-only resources and mods
            </p>
          </div>
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-6 text-center">
            <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">VIP Community</h3>
            <p className="text-slate-400 text-sm">
              Join exclusive Discord channels
            </p>
          </div>
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-6 text-center">
            <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Early Access</h3>
            <p className="text-slate-400 text-sm">
              Get new releases before everyone else
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Can I cancel anytime?
              </h4>
              <p className="text-slate-400">
                Yes, you can cancel your VIP membership at any time. Your
                benefits will continue until the end of your billing period.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                What payment methods do you accept?
              </h4>
              <p className="text-slate-400">
                We accept all major credit cards, PayPal, and cryptocurrency
                payments for your convenience.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Do you offer refunds?
              </h4>
              <p className="text-slate-400">
                We offer a 7-day money-back guarantee if you're not satisfied
                with your VIP membership.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                How do I access VIP content?
              </h4>
              <p className="text-slate-400">
                Once you subscribe, VIP content will automatically appear in
                your dashboard and resource listings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
