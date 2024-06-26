import React from "react";
import { redirect } from "next/navigation";

import { readUserSession } from "~/lib/actions";
import { AuthForm } from "./components/AuthForm";

export default async function page() {
  const { data } = await readUserSession();

  if (data.session) {
    return redirect("/");
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96">
        <AuthForm />
      </div>
    </div>
  );
}
