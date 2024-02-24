import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing page",
  description: "Está es la página de precios de mi servicio",
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing page</span>
    </>
  );
}
