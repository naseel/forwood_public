
import * as z from "zod";

export const quoteSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  phone: z.string().min(1, "Mobile number is required"),
  product_17mm_signature: z.string().optional(),
  product_12mm_signature: z.string().optional(),
  product_8mm_signature: z.string().optional(),
  product_17mm_imperial: z.string().optional(),
  product_12mm_imperial: z.string().optional(),
  product_8mm_imperial: z.string().optional(),
  product_17mm_avatar: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;
