import * as z from "zod";

export const variantShema = z.object({
  variantId: z.string().optional(),
  variantCode: z.string().min(1, { message: "Variant code is required" }),
  variantName: z.string().min(1, { message: "Variant name is required" }),
  unitTypeId: z.string().min(1, { message: "Unit type is required" }),
});

export const masterDataSchema = z.object({
  productCode: z.string().min(1, { message: "Product code is required" }),
  productName: z.string().min(1, { message: "Product name is required" }),
  description: z
    .string()
    .min(1, { message: "Product description is required" }),
  variants: z.array(variantShema).optional(),
});

export const stockVariantSchema = z.object({
  variantId: z.string().optional(),
  quantity: z
    .string()
    .min(1, { message: "Quantity must be a positive number" }),
});

export type MasterDataSchema = z.infer<typeof masterDataSchema>;
export type VariantShema = z.infer<typeof variantShema>;
export type StockVariantSchema = z.infer<typeof stockVariantSchema>;
