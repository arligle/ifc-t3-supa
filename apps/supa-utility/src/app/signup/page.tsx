import Link from "next/link";
import Header from "@/components/Header/Header";

export default async function Signup({
  searchParams,
}: {
  searchParams: { message: string };
}) {
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
        <form className="mb-4 flex w-full flex-1 flex-col justify-center gap-2 text-foreground animate-in">
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="mb-6 rounded-md border bg-inherit px-4 py-2"
            name="email"
            placeholder="you@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="mb-6 rounded-md border bg-inherit px-4 py-2"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <label className="text-md" htmlFor="password">
            Confirm Password
          </label>
          <input
            className="mb-6 rounded-md border bg-inherit px-4 py-2"
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            required
          />
          <button className="mb-2 rounded-md bg-indigo-700 px-4 py-2 text-foreground">
            Sign up
          </button>

          {searchParams.message && (
            <p className="mt-4 bg-foreground/10 p-4 text-center text-foreground">
              {searchParams.message}
            </p>
          )}
        </form>

        <Link
          href="/signup"
          className="rounded-md text-sm text-foreground no-underline"
        >
          Already have an account? Sign In
        </Link>
      </div>
    </div>
  );
}
