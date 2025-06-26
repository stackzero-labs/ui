import { Mail, Eye } from "lucide-react";
import InputIcon from "@/components/commerce-ui/components/inputs/icon/input-icon";
import { Input } from "@/components/ui/input";
export default function Input_Icon_Ex_01() {
  return (
    <div className="max-w-sm space-y-4">
      <InputIcon placeholder="Two icons" startIcon={Mail} endIcon={Eye} />
      <InputIcon placeholder="Just a start icon" startIcon={Mail} />
      <InputIcon placeholder="Just an end icon" endIcon={Eye} />
      <InputIcon placeholder="No icons" />
      <Input placeholder="Standard shadcn/ui input" />
    </div>
  );
}
