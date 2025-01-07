import * as z from "zod";

export const variantShema = z.object({
  variantCode: z.string().min(1, { message: "Variant code is required" }),
  variantName: z.string().min(1, { message: "Variant name is required" }),
  unitType: z.string().min(1, { message: "Unit type is required" }),
});

export const masterDataSchema = z.object({
  productCode: z.string().min(1, { message: "Product code is required" }),
  productName: z.string().min(1, { message: "Product name is required" }),
  productDescription: z
    .string()
    .min(1, { message: "Product description is required" }),
  content: z.string().min(1, { message: "Content is required" }),
  productVariants: z.array(variantShema),
});

export const stockVariantSchema = z.object({
  quantity: z
    .number()
    .min(0, { message: "Quantity must be a positive number" }),
});

export type MasterDataSchema = z.infer<typeof masterDataSchema>;
export type StockVariantSchema = z.infer<typeof stockVariantSchema>;
