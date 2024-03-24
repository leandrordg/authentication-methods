import { Footer } from "@/components/footer";

interface Props {
  children: React.ReactElement;
}

export default function LandingLayout({ children }: Props) {
  return (
    <div className="relative flex flex-col items-center justify-center h-full p-6">
      {children}
      <Footer />
    </div>
  );
}
