import Link from "next/link";
import { redirect } from "next/navigation";
import Header from "@/components/Header/Header";

// import { createClient } from '@/utils/supabase/server';
import { createServerSideClient as createClient } from "@acme/supabase-utils";

export default async function ResetPassword({
  searchParams,
}: {
  searchParams: { message: string; code: string };
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return redirect("/");
  }

  const resetPassword = async (formData: FormData) => {
    "use server";

    const password = formData.get("password") as string;
    const supabase = createClient();

    if (searchParams.code) {
      const supabase = createClient();
      const { error } = await supabase.auth.exchangeCodeForSession(
        searchParams.code,
      );

      if (error) {
        return redirect(
          `/reset-password?message=Unable to reset Password. Link expired!`,
        );
      }
    }

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      console.log(error);
      return redirect(
        `/reset-password?message=Unable to reset Password. Try again!`,
      );
    }

    redirect(
      `/login?message=Your Password has been reset successfully. Sign in.`,
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
          action={resetPassword}
        >
          <label className="text-md" htmlFor="password">
            New Password
          </label>
          <input
            className="mb-6 rounded-md border bg-inherit px-4 py-2"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <label className="text-md" htmlFor="password">
            Confirm New Password
          </label>
          <input
            className="mb-6 rounded-md border bg-inherit px-4 py-2"
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            required
          />
          <button className="mb-2 rounded-md bg-indigo-700 px-4 py-2 text-foreground">
            Reset
          </button>

          {searchParams.message && (
            <p className="mt-4 bg-foreground/10 p-4 text-center text-foreground">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
