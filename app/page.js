import { redirect } from "next/navigation";
import { defaultLanguage } from "../lib/i18n/settings";

export default function RootPage() {
  redirect(`/${defaultLanguage}`);
}
