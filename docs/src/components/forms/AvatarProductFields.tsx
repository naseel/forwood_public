
import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { type QuoteFormValues } from "./quoteSchema";

interface AvatarProductFieldsProps {
  control: Control<QuoteFormValues>;
}

const AvatarProductFields = ({ control }: AvatarProductFieldsProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium border-b pb-2">AVATAR WPC Sheet (0.7 Density) - Quantity</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField
          control={control}
          name="product_17mm_avatar"
          render={({ field }) => (
            <FormItem>
              <FormLabel>17MM AVATAR 3LAYER WPC</FormLabel>
              <FormControl>
                <Input {...field} placeholder="0" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default AvatarProductFields;
