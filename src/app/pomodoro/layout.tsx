import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Manage timers",
  description: "Add or remove timers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
