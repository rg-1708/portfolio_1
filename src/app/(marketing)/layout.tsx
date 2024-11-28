import { Footer } from "@/components/navigation/footer";
import { Header } from "@/components/navigation/header";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col relative">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
