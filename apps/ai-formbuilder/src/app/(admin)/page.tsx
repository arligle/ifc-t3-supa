import { CardWithForm } from "~/components/card-with-form";
import { Navbar } from "~/components/navbar";

// export const runtime = "edge";

export default function HomePage() {
  return (
    <main className="container h-screen py-16">
      {/* <Navbar /> */}
      <CardWithForm />
    </main>
  );
}
