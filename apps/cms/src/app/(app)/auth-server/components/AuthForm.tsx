import { Tabs, TabsContent, TabsList, TabsTrigger } from "@acme/ui/tabs";

import RegisterForm from "./RegisterForm";
import SignInForm from "./SignInForm";

export function AuthForm() {
  return (
    <div className="space-y-5">
      <h1 className="text-center text-3xl font-bold">Auth-server</h1>
      <Tabs defaultValue="signin" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">SignIn</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <SignInForm />
        </TabsContent>
        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
