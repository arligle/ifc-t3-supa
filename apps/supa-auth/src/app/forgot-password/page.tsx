import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import Header from "@/components/Header/Header";

// import { createClient } from '@/utils/supabase/server';
import { createServerSideClient as createClient } from "@acme/supabase-utils";

export default async function ForgotPassword({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return redirect("/");
  }

  const confirmReset = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${origin}/reset-password`,
    });

    if (error) {
      return redirect("/forgot-password?message=Could not authenticate user");
    }

    return redirect(
      "/confirm?message=Password Reset link has been sent to your email address",
    );
  };

  return (
    <div>
      <Header />

      <Link
        href="/"
        className="bg-btn-background hover:bg-btn-background-hover m-4 rounded-md px-4 py-2 text-sm text-foreground no-underline"
      >
        Home
      </Link>

      <div className="mx-auto mt-4 w-full px-8 sm:max-w-md">
        <form
          className="mb-4 flex w-full flex-1 flex-col justify-center gap-2 text-foreground animate-in"
          action={confirmReset}
        >
          <label className="text-md" htmlFor="email">
            Enter Email Address
          </label>
          <input
            className="mb-6 rounded-md border bg-inherit px-4 py-2"
            name="email"
            placeholder="you@example.com"
            required
          />

          <button className="mb-2 rounded-md bg-indigo-700 px-4 py-2 text-foreground">
            Confirm
          </button>

          {searchParams.message && (
            <p className="mt-4 bg-foreground/10 p-4 text-center text-foreground">
              {searchParams.message}
            </p>
          )}
        </form>

        <Link
          href="/login"
          className="rounded-md text-sm text-foreground no-underline"
        >
          Remember your password? Sign in
        </Link>
      </div>
    </div>
  );
}
