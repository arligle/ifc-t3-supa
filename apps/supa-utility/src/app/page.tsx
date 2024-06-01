/* eslint-disable @typescript-eslint/require-await */
import HorizontalLine from "@/components/horizontal-line";
import { createClient } from "@/utils/supabase/server";

import AuthButton from "../components/AuthButton";

export default async function HomePage() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
        <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
          {isSupabaseConnected && <AuthButton />}
          {isSupabaseConnected ? (
            <div>已连接Supabase！</div>
          ) : (
            <div>未连接Supabase</div>
          )}
        </div>
      </nav>
      <HorizontalLine />
      {/* 
      <div className="flex max-w-4xl flex-1 flex-col gap-20 px-3 opacity-0 animate-in">
        <Header />
      </div> */}
    </div>
  );
}
