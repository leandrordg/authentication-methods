import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4 max-w-screen-sm">
      <div className="flex flex-col text-center lg:text-left gap-y-4">
        <div className="flex flex-col lg:flex-row items-center gap-y-2 lg:gap-y-0 lg:gap-x-2">
          <h1 className="font-bold text-2xl">Authentication Methods</h1>
          <Badge variant="outline">v.0.0.1</Badge>
        </div>
        <p className="text-muted-foreground">
          This website was developed with the aim of practicing front-end skills
          and finalizing it with the back-end in the future.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-4">
        <Button size="sm" variant="default" asChild>
          <Link href="/signin">Get started</Link>
        </Button>
        <Button size="sm" variant="primary" asChild>
          <Link href="/signup">Create account</Link>
        </Button>
      </div>

      <div className="flex flex-col text-center lg:text-left lg:items-start gap-y-4">
        <span className="text-xs text-muted-foreground">Other Links</span>

        <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-4">
          <Button size="sm" variant="ghost" asChild>
            <Link href="/forgot-confirm?code=312583&email=lrbertalhia@gmail.com">
              Forgot Confirmation
            </Link>
          </Button>
          <Button size="sm" variant="ghost" asChild>
            <Link href="/2fa">2FA Code</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
