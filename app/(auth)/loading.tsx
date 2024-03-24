import { LoaderCircleIcon } from "lucide-react";

export default function LoadingComponent() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <LoaderCircleIcon className="size-10 text-muted-foreground animate-spin" />
    </div>
  );
}
