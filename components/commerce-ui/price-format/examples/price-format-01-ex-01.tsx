import PriceFormat01 from "@/components/commerce-ui/price-format/price-format-01";

export default function PriceFormat01Example01() {
  return (
    <div className="flex flex-col gap-2">
      <PriceFormat01 prefix="€" value={5549.54} />
      <PriceFormat01 prefix="¥" value={998.99} />
      <PriceFormat01 prefix="R$" value={154404.85} />
    </div>
  );
}
