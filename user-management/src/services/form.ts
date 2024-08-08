import * as z from "zod";

export const roleSchema = z.object({
  roleCode: z.string().min(1, { message: "Role code is required" }),
});

const baseUserSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  branch: z.string().min(1, { message: "Branch is required" }),
  invalidPasswordRetry: z.number().nonnegative(),
  locked: z.string(),
  active: z.string(),
  roles: z
    .array(roleSchema)
    .nonempty({ message: "At least one role is required" }),
});

export const createUserSchema = baseUserSchema.extend({
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string().min(6, { message: "Confirm Password must be at least 6 characters" })
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"], // Specify which field to add the error to
});

export const updateUserSchema = baseUserSchema; // remove password validation

export type UserSchema = z.infer<typeof createUserSchema>;

export const servicesSchema = z.object({
  serviceCode: z.string().min(1, { message: "Service code is required" }),
  url: z.string().min(1, { message: "Url is required"}),
});

export const roleMenusSchema = z.object({
  menuCode: z.string().min(1, { message: "Menu Code is required"}),
  label: z.string().min(1, { message: "Label is required"}),
  description: z.string().min(1, { message: "Description is required"}),
  url: z.string().min(1, {message: "Url is required"}),
  parent: z.string(),
  orderNo: z.string().min(1, {message: "Order Number is required"}),
  services: z.array(servicesSchema).nonempty({ message: "At least one Service(Menu) is required"}),
})

export const postRoleSchema = z.object({
  roleCode: z.string().min(1, {message: "Role Code is required"}),
  roleName: z.string().min(1, { message: "Role Name is required"}),
  description: z.string().min(1, {message: "Description is required"}),
  active: z.string(),
  menus: z.array(roleMenusSchema),
  services: z.array(servicesSchema),
})

export type PostRoleSchema = z.infer<typeof postRoleSchema>;