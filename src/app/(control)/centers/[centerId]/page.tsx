import { notFound } from "next/navigation";
import { CenterDetails } from "@/components/center-details";
import { centers } from "@/lib/mock-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return centers.map((center) => ({ centerId: center.id }));
}

export default async function CenterDetailsPage({ params }: { params: Promise<{ centerId: string }> }) {
  const { centerId } = await params;
  const center = centers.find((item) => item.id === centerId);
  if (!center) notFound();

  return <CenterDetails center={center} />;
}
