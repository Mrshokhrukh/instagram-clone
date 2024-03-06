import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram | Auth",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid place-content-center h-screen bg-white">
      {children}
    </div>
  );
}
