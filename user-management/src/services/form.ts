import * as z from "zod";

export const roleSchema = z.object({
  roleCode: z.string().min(1, { message: "Role code is required" }),
});

const baseUserSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }),
  branch: z.string().min(1, { message: "Branch is required" }),
  title: z.string().min(1, { message: "Title is required" }),
  invalidPasswordRetry: z.number().nonnegative(),
  locked: z.string(),
  active: z.string(),
  roles: z
    .array(roleSchema)
    .nonempty({ message: "At least one role is required" }),
});

export const createUserSchema = baseUserSchema.extend({
  password: z.string().min(6, { message: "Password is required" }),
});

export const updateUserSchema = baseUserSchema; // remove password validation

export type UserSchema = z.infer<typeof createUserSchema>;
