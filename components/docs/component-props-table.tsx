import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { InfoIcon } from "lucide-react";
import * as React from "react";

interface TypeMetadata {
  description?: string;
  type: string;
  required?: boolean;
  default?: string;
  tsType?: {
    name: string;
    raw?: string;
  };
  defaultValue?: {
    value: string;
  };
  typeValue?: string;
}

interface TypesMap {
  [key: string]: TypeMetadata;
}

interface PropsTableProps {
  types: TypesMap;
}

export const ComponentPropsTable: React.FC<PropsTableProps> = ({ types }) => {
  console.log("propsComponentData", types);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium tracking-wider">
              Prop
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium tracking-wider">
              Type
            </th>
            {/* <th className="px-6 py-3 text-left text-sm font-medium tracking-wider">
            Required
          </th> */}
            <th className="px-6 py-3 text-left text-sm font-medium tracking-wider">
              Default
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {Object.keys(types).map((typeName) => (
            <tr key={typeName}>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                <div className="flex flex-row items-start gap-1 align-middle">
                  <code className="rounded-md bg-fd-primary/10 p-1 text-fd-primary">
                    {typeName}
                  </code>
                  {types[typeName].required && (
                    <span className="text-md text-red-500">*</span>
                  )}
                  {types[typeName].description && (
                    <Popover>
                      <PopoverTrigger>
                        {" "}
                        <InfoIcon size={16} />
                      </PopoverTrigger>
                      <PopoverContent className="p-2">
                        <p className="text-sm">{types[typeName].description}</p>
                      </PopoverContent>
                    </Popover>
                  )}
                </div>
              </td>

              <td className="whitespace-wrap px-6 py-4 font-mono text-sm text-gray-500">
                <Badge
                  variant="secondary"
                  className="rounded-xs py-2 font-mono font-normal tracking-wider"
                >
                  {" "}
                  {types[typeName].type}
                </Badge>
                {types[typeName].typeValue && (
                  <Popover>
                    <PopoverTrigger>
                      <InfoIcon size={16} />
                    </PopoverTrigger>
                    <PopoverContent className="p-2">
                      <p className="font-mono text-sm">
                        {types[typeName].typeValue}
                      </p>
                    </PopoverContent>
                  </Popover>
                )}
              </td>

              <td className="whitespace-nowrap px-6 py-4 font-mono text-sm text-gray-500">
                {types[typeName].defaultValue?.value ||
                  types[typeName].default ||
                  "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
