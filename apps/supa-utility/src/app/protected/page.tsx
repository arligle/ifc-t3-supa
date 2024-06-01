import { redirect } from "next/navigation";
import AuthButton from "@/components/AuthButton";
import DeployButton from "@/components/DeployButton";
import Header from "@/components/Header";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import { createClient } from "@/utils/supabase/server";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <div className="w-full">
        <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
          <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
            <DeployButton />
            <AuthButton />
          </div>
        </nav>
        <div className="bg-purple-950 py-6 text-center font-bold">
          这是一个受保护的页面，能看到这个页面表示您已经经通过过身份验证！
        </div>
      </div>

      <div className="flex max-w-4xl flex-1 flex-col gap-20 px-3 opacity-0 animate-in">
        <Header />
        <main className="flex flex-1 flex-col gap-6">
          <h2 className="mb-4 text-4xl font-bold">后续步骤：</h2>
          <FetchDataSteps />
        </main>
      </div>

      <footer className="flex w-full justify-center border-t border-t-foreground/10 p-8 text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  );
}