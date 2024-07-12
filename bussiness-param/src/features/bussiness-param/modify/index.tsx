import React from "react";
import { CustomFormField, Form } from "mainApp/form";
import { Input } from "mainApp/input";

const Index: React.FC<{id?: string | null}> = ({ id }) => {

  console.log(id);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold">{id ? `Edit` : `Create`} Bussiness Param</h1>
      <Form>
        <form
          className="flex flex-col gap-5"
          // onSubmit={}
        >
          <CustomFormField
            // control={}
            name={"id"}
            label={"Parameter ID"}
          >
            <Input
              placeholder={"Input parameter ID"}
              type={"text"}
              disabled={false}
              aria-disabled={false}
            />
          </CustomFormField>
          <CustomFormField
            // control={}
            name={"category"}
            label={"Parameter Category"}
          >
            <Input
              placeholder={"Input parameter category"}
              type={"text"}
              disabled={false}
              aria-disabled={false}
            />
          </CustomFormField>
        </form>
      </Form>
    </div>
  )
}

export default Index