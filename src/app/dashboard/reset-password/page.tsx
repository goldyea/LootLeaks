import { resetPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/components/layout/auth-layout";

export default async function ResetPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <AuthLayout>
        <div className="flex h-screen w-full flex-1 items-center justify-center p-4">
          <div className="w-full max-w-md">
            <FormMessage message={searchParams} />
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
            LootLeaks
          </span>
        </div>

        <div className="w-full max-w-md bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-8 shadow-2xl">
          <form className="flex flex-col space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold text-white tracking-tight">
                Reset password
              </h1>
              <p className="text-slate-400">
                Please enter your new password below.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-white"
                >
                  New password
                </Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="New password"
                  required
                  className="bg-slate-700/30 border-slate-600/50 text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium text-white"
                >
                  Confirm password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  required
                  className="bg-slate-700/30 border-slate-600/50 text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>

            <SubmitButton
              formAction={resetPasswordAction}
              pendingText="Resetting password..."
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 hover:shadow-emerald-500/25"
            >
              Reset password
            </SubmitButton>

            <FormMessage message={searchParams} />
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}
