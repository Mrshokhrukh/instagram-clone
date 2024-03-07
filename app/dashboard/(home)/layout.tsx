// import type { Metadata } from "next";

import Header from "@/components/header/Header";

// export const metadata: Metadata = {
//   title: "Dashboard",
// };

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
}
