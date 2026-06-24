import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main
        id="main"
        className="relative bg-midnight-950 pt-32 pb-24 sm:pt-40 sm:pb-32"
      >
        <div className="container-edge mx-auto max-w-3xl">{children}</div>
      </main>
      <Footer />
    </>
  );
}
