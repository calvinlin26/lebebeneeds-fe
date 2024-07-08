import * as z from "zod";

export const roleSchema = z.object({
  roleCode: z.string().min(1, { message: "Role code is required" }),
});

export const userSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(6, { message: "Password is required" }),
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }),
  branch: z.string().min(1, { message: "Branch is required" }),
  title: z.string().min(1, { message: "Title is required" }),
  roles: z
    .array(roleSchema)
    .nonempty({ message: "At least one role is required" }),
});

export type UserSchema = z.infer<typeof userSchema>;
