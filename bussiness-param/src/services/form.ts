import * as z from "zod";

export const paramTxtShema = z.object({
  langCode: z.string().min(1, { message: "Lang Code is required" }),
  text: z.string().min(1, { message: "Text is required" }),
  description: z.string().min(1, { message: "Description is required" }),
});

export const baseParamSchema = z.object({
  category: z.string().min(1, { message: "Category is required" }),
  id: z.string().min(1, { message: "Category ID is required" }),
  orderNo: z.string().min(1, { message: "Order No is required" }),
  valueType: z.string().min(1, { message: "Value type is required" }),
  paramId: z.string().min(1, { message: "Parameter ID is required" }),
  parentId: z.string().nullable(),
  paramValue: z.string().nullable(),
  frontEnd: z.string().min(1, { message: "Front End is required" }),
  active: z.string().min(1, { message: "Active is required" }),
  paramTxt: z.array(paramTxtShema),
});

export const createParamSchema = baseParamSchema;
export const updateParamSchema = baseParamSchema;

export type ParamSchema = z.infer<typeof baseParamSchema>;
