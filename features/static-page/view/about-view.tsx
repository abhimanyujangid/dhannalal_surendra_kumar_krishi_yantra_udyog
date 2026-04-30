import { StaticPageShell } from "@/features/static-page/components/static-page-shell";
import { STATIC_PAGE_CONTENT } from "@/features/static-page/data/static-page.data";

export function AboutView() {
  return <StaticPageShell content={STATIC_PAGE_CONTENT.about} />;
}
