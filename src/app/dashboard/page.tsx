import { InfoIcon, UserCircle } from "lucide-react";
import { redirect } from "next/navigation";
import { createClient } from "../../../supabase/server";
import MainLayout from "@/components/layout/main-layout";

export default async function Dashboard() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <MainLayout
      user={user}
      showSearch={false}
      title="Dashboard"
      subtitle="Manage your account and resources"
    >
      <div className="p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Info Banner */}
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 text-sm p-4 rounded-xl text-slate-300 flex gap-3 items-center">
            <InfoIcon size="16" className="text-blue-400" />
            <span>
              This is a protected page only visible to authenticated users
            </span>
          </div>

          {/* User Profile Section */}
          <section className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-8">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                <UserCircle size={32} className="text-white" />
              </div>
              <div>
                <h2 className="font-bold text-2xl text-white mb-2">
                  User Profile
                </h2>
                <p className="text-slate-400">{user.email}</p>
              </div>
            </div>
            <div className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
              <h3 className="text-lg font-semibold text-white mb-4">
                Account Details
              </h3>
              <pre className="text-xs font-mono text-slate-300 max-h-64 overflow-auto bg-slate-900/50 p-4 rounded-lg">
                {JSON.stringify(user, null, 2)}
              </pre>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
