interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return;
  <main className="flex min-h-screen flex-col relative">{children}</main>;
}
