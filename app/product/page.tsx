import type { Metadata } from "next";

import { ProductView } from "@/features/static-page/view/product-view";

export const metadata: Metadata = {
  title: "Product | AgroMistral",
  description: "Explore AgroMistral products built for modern agriculture businesses.",
};

export default function ProductPage() {
  return <ProductView />;
}
