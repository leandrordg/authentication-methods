import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <h1 className="font-bold text-2xl">Not Found (404)</h1>
          <span className="text-muted-foreground text-sm">
            Could not find this page. How about trying again?
          </span>
        </div>

        <Button asChild>
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </div>
  );
}
