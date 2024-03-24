import Link from "next/link";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-16 border-t">
      <div className="flex flex-col h-full items-center justify-center">
        <div className="flex items-center gap-x-1 text-sm text-muted-foreground">
          <span>&copy; {new Date().getFullYear()}</span>
          <span>Authentication Methods.</span>
          <span>All rights reserved.</span>
        </div>
        <div className="flex items-center gap-x-1 text-xs text-muted-foreground">
          <span>Created by:</span>
          <Link
            target="_blank"
            href="https://leandro-dev.vercel.app"
            className="font-bold"
          >
            Leandro Rodrigues
          </Link>
        </div>
      </div>
    </footer>
  );
}
