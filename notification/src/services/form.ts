import * as z from "zod";

export const notificationSchema = z.object({
  notificationCode: z
    .string()
    .min(1, { message: "Notification code is required" }),
  notificationType: z
    .string()
    .min(1, { message: "Notification Type is required" }),
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().min(1, { message: "Content is required" }),
  image: z
    .any()
    .optional()
    .refine((file) => !file || (file[0] && file[0]?.size <= 5000000), {
      message: "Image size must be less than 5MB",
    })
    .refine(
      (file) =>
        !file ||
        (file[0] &&
          ["image/jpeg", "image/png", "image/gif"].includes(file[0]?.type)),
      { message: "Image must be a JPEG, PNG, or GIF" }
    ),
});

export type NotificationSchema = z.infer<typeof notificationSchema>;
