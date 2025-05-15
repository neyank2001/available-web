import VerifyEmail from "~/ScreenComponent/VerifyEmail";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Verify Email" },
    { name: "description", content: "Verify your email" },
  ];
}

export async function clientLoader() {
  return { data: "hey" };
}

export default function EmailVerification({}: Route.ComponentProps) {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <VerifyEmail />
    </div>
  );
}
