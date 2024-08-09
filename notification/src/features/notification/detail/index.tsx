import { ControllerRenderProps, useForm } from "react-hook-form";
import { CustomFormField, Form } from "mainApp/form";
import { NotificationSchema, notificationSchema } from "../../../services/form";
import React, { useEffect, useState } from "react";
import {
  getDownloadURL,
  ref,
  storage,
  uploadBytesResumable,
} from "mainApp/firebase";
import { postNotification, putNotification } from "../../../services";

import { Button } from "mainApp/button";
import DropdownSelect from "mainApp/select";
import { Input } from "mainApp/input";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useNotificationDetail } from "../hooks/useNotificationDetail";
import { useQuery } from "mainApp/useQuery";
import { zodResolver } from "@hookform/resolvers/zod";

const Index: React.FC = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const code = query.get("code") as string;
  const notificationDetail = useNotificationDetail(code);

  const [imgUrl, setImgUrl] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);

  const isEdit = code ? true : false;

  const form = useForm<NotificationSchema>({
    resolver: zodResolver(notificationSchema),
    defaultValues: {
      notificationCode: "",
      notificationType: "",
      title: "",
      content: "",
      image: "",
    },
    mode: "onChange",
  });

  const fileWatcher = form.watch("image");

  useEffect(() => {
    if (notificationDetail) {
      form.reset({
        ...notificationDetail,
        image: "",
      });
      setImgUrl(notificationDetail.image);
    }
  }, [notificationDetail, form]);

  const onSubmit = async (data: NotificationSchema) => {
    if (data.image) {
      const storageRef = ref(storage, `images/${data.image[0].name}`);
      const uploadTask = uploadBytesResumable(storageRef, data.image[0]);

      uploadTask.on(
        "state_changed",
        (snapshot: any) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error: any) => {
          toast.error(error || "An unexpected error occurred");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: any) => {
            setImgUrl(downloadURL);
            const payload = {
              ...data,
              image: downloadURL,
            };

            if (isEdit) {
              onPutNotification(payload);
            } else {
              onPostNotification(payload);
            }
          });
        }
      );
    } else {
      const payload = {
        ...data,
        image: imgUrl,
      };
      if (isEdit) {
        onPutNotification(payload);
      } else {
        onPostNotification(payload);
      }
    }
  };

  const onPostNotification = async (payload: NotificationSchema) => {
    try {
      await postNotification(payload);
      toast.success("Notification template has been created");
      navigate("/notification");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const onPutNotification = async (payload: NotificationSchema) => {
    try {
      await putNotification(payload);
      toast.success("Notification template has been edited");
      navigate("/notification");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    if (fileWatcher?.length > 0) {
      setImgUrl(URL.createObjectURL(fileWatcher?.[0]));
    }
  }, [fileWatcher]);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold">
        {isEdit ? "Edit Notification" : "Add Notification"}
      </h1>
      <Form {...form}>
        <form
          className="flex flex-col gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <CustomFormField
            control={form.control}
            name="notificationCode"
            label="Code"
          >
            {(
              field: ControllerRenderProps<
                NotificationSchema,
                "notificationCode"
              >
            ) => (
              <Input
                {...field}
                placeholder="Input code"
                type="text"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>

          <CustomFormField
            control={form.control}
            name="notificationType"
            label="Notification Type"
          >
            {(
              field: ControllerRenderProps<
                NotificationSchema,
                "notificationType"
              >
            ) => (
              <DropdownSelect
                {...field}
                placeholder="Input Notification Type"
                disabled={form.formState.isSubmitting}
                data={[
                  { label: "PUSH NOTIFICATION", value: "PUSH_NOTIFICATION" },
                  { label: "EMAIL", value: "EMAIL" },
                  { label: "SMS", value: "SMS" },
                  {
                    label: "PUSH NOTIFICATIONBLAST",
                    value: "PUSH_NOTIFICATION_BLAST",
                  },
                  {
                    label: "PUSH NOTIFICATION TOKEN",
                    value: "PUSH_NOTIFICATION_TOKEN",
                  },
                ]}
              />
            )}
          </CustomFormField>

          <CustomFormField control={form.control} name="title" label="Title">
            {(field: ControllerRenderProps<NotificationSchema, "title">) => (
              <Input
                {...field}
                placeholder="Input title"
                type="text"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>

          <CustomFormField
            control={form.control}
            name="content"
            label="Content"
          >
            {(field: ControllerRenderProps<NotificationSchema, "content">) => (
              <Input
                {...field}
                placeholder="Input content"
                type="text"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
            )}
          </CustomFormField>

          <CustomFormField control={form.control} name="image" label="Image">
            {() => (
              <>
                {imgUrl && (
                  <div className="flex w-full justify-center ">
                    <img src={imgUrl} className=" max-h-72" />
                  </div>
                )}

                <Input
                  {...form.register("image")}
                  id="image"
                  type="file"
                  variant="file"
                  accept="image/jpeg, image/png, image/gif"
                />
              </>
            )}
          </CustomFormField>

          <div className="flex flex-row gap-5 mt-4 justify-end">
            <Button
              variant="secondary"
              onClick={() => navigate("/notification")}
            >
              Back
            </Button>
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting
                ? `Submitting... ${progress}`
                : isEdit
                ? "Update"
                : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Index;
