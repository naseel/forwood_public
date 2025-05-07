
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

interface ImperialProductFieldsProps {
  control: Control<QuoteFormValues>;
}

const ImperialProductFields = ({ control }: ImperialProductFieldsProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium border-b pb-2">IMPERIAL PVC Sheet (0.7 Density) - Quantity</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField
          control={control}
          name="product_17mm_imperial"
          render={({ field }) => (
            <FormItem>
              <FormLabel>17MM IMPERIAL</FormLabel>
              <FormControl>
                <Input {...field} placeholder="0" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="product_12mm_imperial"
          render={({ field }) => (
            <FormItem>
              <FormLabel>12MM IMPERIAL</FormLabel>
              <FormControl>
                <Input {...field} placeholder="0" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="product_8mm_imperial"
          render={({ field }) => (
            <FormItem>
              <FormLabel>8MM IMPERIAL</FormLabel>
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

export default ImperialProductFields;
