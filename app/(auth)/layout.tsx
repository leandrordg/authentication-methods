import type { Metadata } from "next";

interface Props {
  children: React.ReactElement;
}

export const metadata: Metadata = {
  title: "Auth | Authentication Methods",
  description: "Auth Layout Group for authentication methods",
  authors: [
    { name: "Leandro Rodrigues", url: "https://leandro-dev.vercel.app" },
  ],
};

export default function AuthLayout({ children }: Props) {
  return (
    <main className="flex flex-col items-center justify-center h-full p-6">
      {children}
    </main>
  );
}
