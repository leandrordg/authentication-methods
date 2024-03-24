import { Suspense } from "react";

import { ForgotConfirmForm } from "@/components/forms/forgot-confirm-form";

export default function ForgotConfirmPage() {
  return (
    <Suspense>
      <ForgotConfirmForm />
    </Suspense>
  );
}
