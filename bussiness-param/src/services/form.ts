import * as z from "zod";

export const paramTxtShema = z.object({
  langCode: z.string(),
  text: z.string(),
  description: z.string(),
});

export const baseParamSchema = z.object({
  category: z.string().min(1, { message: "Category is required" }),
  code: z.string().min(1, { message: "Category ID is required" }),
  orderNo: z.string().min(1, { message: "Order No is required" }),
  valueType: z.string().min(1, { message: "Value type is required" }),
  paramValue: z.string().nullable(),
  frontEnd: z.string().min(1, { message: "Front End is required" }),
  active: z.string().min(1, { message: "Active is required" }),
  paramTxt: z.array(paramTxtShema),
});

export const createParamSchema = baseParamSchema;
export const updateParamSchema = baseParamSchema;

export type ParamSchema = z.infer<typeof baseParamSchema>;
