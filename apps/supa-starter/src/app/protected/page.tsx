import { redirect } from "next/navigation";
import AuthButton from "@/components/AuthButton";

import { createServerSideClient as createClient } from "@acme/supabase-utils";

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
            <AuthButton />
          </div>
        </nav>
        <div className=" bg-green-600 py-6 text-center font-bold animate-in">
          这是一个受保护的页面，能看到它表示您已经通过身份验证！
        </div>
      </div>
    </div>
  );
}
