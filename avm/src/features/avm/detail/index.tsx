import { AddAVMSchema, addAVMSchema } from "../../../services/form";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { CustomFormField, Form } from "mainApp/form";
import { toast } from "sonner";
import { Button } from "mainApp/button";
import { CustomDialog } from "mainApp/dialog";
import CustomTable from "mainApp/table";
import EligibilityRuleDialog from "./eligibility-rule-dialog";
import FinalEventDialog from "./final-event-dialog";
import { Input } from "mainApp/input";
import ModelMappingDialog from "./model-mapping-dialog";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { postAvm } from "../../../services";

type ModelMapping = {
  functionCode: string;
  ruleExp: string;
};

export type FinalEvent = {
  functionCode: string;
  handlerType: string;
  handlerSpec: string | {
    url?: string;
    method?: string;
    tokenMethod?: string;
    tokenName?: string;
    destType?: string;
    destName?: string;
    external?: string;
  } | null;
  lastAction: string;
  failureHandling: string;
};

type EligibilityRule = {
  name: string,
  ruleDescription: string,
  fieldExp: string,
  valueType: string,
  valueChoice: string,
};

function Index() {
  const navigate = useNavigate();
  // state for ModelMapping
  const [models, setModels] = useState<ModelMapping[]>([]);
  const [selectedModel, setSelectedModel] = useState<ModelMapping | null>(null);
  const [isModelDialogOpen, setModelDialogOpen] = useState(false);

  // state for FinalEvent
  const [events, setEvents] = useState<FinalEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<FinalEvent | null>(null);
  const [isEventDialogOpen, setEventDialogOpen] = useState(false);

  // state for Eligibility
  const [eligibilities, setEligibilities] = useState<EligibilityRule[]>([]);
  const [selectedEligibility, setSelectedEligibility] = useState<EligibilityRule | null>(null);
  const [isEligibilityDialogOpen, setEligibilityDialogOpen] = useState(false);

  const form = useForm<AddAVMSchema>({
    resolver: zodResolver(addAVMSchema),
    defaultValues: {
      model: {},
      mappings: [],
      finalEvents: [],
      elgRules: [],
    },
    mode: "onChange",
  });

  
// setup for ModelMapping

  const addModel = (newModel: ModelMapping) => {
    setModels((prevModels) => {
      const updatedModels = [...prevModels, newModel];
      return updatedModels;
    });
  };

  const handleOpenAddModelDialog = () => {
    setSelectedModel(null);
    setModelDialogOpen(true);
  };

  const editModel = (updatedModel: ModelMapping, index: number) => {
    setModels((prevModels) => {
      const updatedModels = [...prevModels];
      updatedModels[index] = updatedModel;
      return updatedModels;
    });
  };

  const deleteModel = (index: number) => {
    setModels((prevModels) => prevModels.filter((_, i) => i !== index));
  };

  const handleSaveModel = (modelData: ModelMapping) => {
    if (selectedModel) {
      const index = models.findIndex((m) => m === selectedModel);
      editModel(modelData, index);
    } else {
      addModel(modelData);
    }
  };

  const dataModel = models.map((item: ModelMapping, index: number) => ({
    functionCode: item.functionCode,
    ruleExp: item.ruleExp,
    action: (
      <div className="flex flex-row gap-3">
        <Button
         onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault(); // Prevent form submission
          setSelectedModel(models[index]); // Set model that will be edited
          setModelDialogOpen(true); // Open dialog
        }}
        >
          Edit
        </Button>
        <Button
          onClick={() => {
            deleteModel(index); // Delete model based on index
          }}
          variant="destructive"
        >
          Delete
        </Button>
      </div>
    ),
  }));

  // setup for FinalEvent

  const addEvent = (newEvent: FinalEvent) => {
    setEvents((prevEvents) => {
      const updatedEvents = [...prevEvents, newEvent];
      return updatedEvents;
    });
  };

  const handleOpenAddEventDialog = () => {
    setSelectedEvent(null);
    setEventDialogOpen(true);
  };

  const editEvent = (updatedEvent: FinalEvent, index: number) => {
    setEvents((prevEvents) => {
      const updatedEvents = [...prevEvents];
      updatedEvents[index] = updatedEvent;
      return updatedEvents;
    });
  };

  const deleteEvent = (index: number) => {
    setEvents((prevEvents) => prevEvents.filter((_, i) => i !== index));
  };

  const handleSaveEvent = (eventData: FinalEvent) => {
    if (selectedEvent) {
      const index = events.findIndex((e) => e === selectedEvent);
      editEvent(eventData, index);
    } else {
      addEvent(eventData);
    }
  };

  const dataEvent = events.map((item: FinalEvent, index: number) => ({
    functionCode: item.functionCode,
    handlerType: item.handlerType,
    handlerSpec: item.handlerSpec,
    lastAction: item.lastAction,
    failureHandling: item.failureHandling,
    action: (
      <div className="flex flex-row gap-3">
        <Button
         onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault(); // Prevent form submission
          setSelectedEvent(events[index]); // Set model that will be edited
          setEventDialogOpen(true); // Open dialog
        }}
        >
          Edit
        </Button>
        <Button
          onClick={() => {
            deleteEvent(index); // Delete model based on index
          }}
          variant="destructive"
        >
          Delete
        </Button>
      </div>
    ),
  }));

  // setup for EligibilityRule

  const addEligibiliy = (newEligibility: EligibilityRule) => {
    setEligibilities((prevEligibilities) => {
      const updatedEligibilities = [...prevEligibilities, newEligibility];
      return updatedEligibilities;
    });
  };

  const handleOpenAddEligibilityDialog = () => {
    setSelectedEligibility(null);
    setEligibilityDialogOpen(true);
  };

  const editEligibility = (updatedEligibility: EligibilityRule, index: number) => {
    setEligibilities((prevEligibilities) => {
      const updatedEligibilities = [...prevEligibilities];
      updatedEligibilities[index] = updatedEligibility;
      return updatedEligibilities;
    });
  };

  const deleteEligibility = (index: number) => {
    setEligibilities((prevEligibilities) => prevEligibilities.filter((_, i) => i !== index));
  };

  const handleSaveEligibility = (eligibilityData: EligibilityRule) => {
    if (selectedEligibility) {
      const index = eligibilities.findIndex((e) => e === selectedEligibility);
      editEligibility(eligibilityData, index);
    } else {
      addEligibiliy(eligibilityData);
    }
  };

  const dataEligibility = eligibilities.map((item: EligibilityRule, index: number) => ({
    name: item.name,
    ruleDescription: item.ruleDescription,
    fieldExp: item.fieldExp,
    valueType: item.valueType,
    valueChoice: item.valueChoice,
    action: (
      <div className="flex flex-row gap-3">
        <Button
         onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault(); // Prevent form submission
          setSelectedEligibility(eligibilities[index]); // Set model that will be edited
          setEligibilityDialogOpen(true); // Open dialog
        }}
        >
          Edit
        </Button>
        <Button
          onClick={() => {
            deleteEligibility(index); // Delete model based on index
          }}
          variant="destructive"
        >
          Delete
        </Button>
      </div>
    ),
  }));

  // main setup

  const onSubmit = async (data: AddAVMSchema) => {
    try {
      const payload: AddAVMSchema = {
        ...data,
        mappings: models.map((item) => ({
          functionCode: item.functionCode,
          ruleExp: item.ruleExp,
        })),
        finalEvents: events.map((item) => ({
          functionCode: item.functionCode,
          handlerType: item.handlerType,
          handlerSpec: JSON.stringify(item.handlerSpec),
          lastAction: item.lastAction,
          failureHandling: item.failureHandling,
        })),
        elgRules: eligibilities.map((item) => ({
          name: item.name,
          ruleDescription: item.ruleDescription,
          fieldExp: item.fieldExp,
          valueType: item.valueType,
          valueChoice: item.valueChoice,
        })),
      };
      await postAvm(payload);
      toast.success("AVM has been submit successfully");
      navigate("/avm");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // const ContentDialogMapping = <div className="flex flex-col"></div>;
  const modelMappingColumns = [
    {
      header: "Function",
      accessor: "functionCode",
    },
    {
      header: "Rule EXP",
      accessor: "ruleExp",
    },
    {
      header: "Action",
      accessor: "action",
    },
  ];

  const EventColumns = [
    {
      header: "Function",
      accessor: "functionCode",
    },
    {
      header: "Action",
      accessor: "action",
    },
  ];

  const ELGRuleColumns = [
    {
      header: "Rule",
      accessor: "name",
    },
    {
      header: "Description",
      accessor: "ruleDescription",
    },
    {
      header: "Action",
      accessor: "action",
    },
  ];

  const {
    handleSubmit,
    formState: { isSubmitting },
    // formState: { errors },
  } = form;

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">Add AVM</h1>
      <br />
      <Form {...form}>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <CustomFormField control={form.control} name="model.name" label="Name">
            {(field: ControllerRenderProps<AddAVMSchema, "model.name">) => (
              <Input
                {...field}
                type="text"
                placeholder="Input Name"
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
              />
            )}
          </CustomFormField>

          <CustomFormField
            control={form.control}
            name="model.description"
            label="Description"
          >
            {(field: ControllerRenderProps<AddAVMSchema, "model.description">) => (
              <Input
                {...field}
                type="text"
                placeholder="description"
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
              />
            )}
          </CustomFormField>

          <div className="flex justify-end items-center w-full">
            <CustomDialog
              title="Mapping"
              open={isModelDialogOpen}
              onOpenChange={setModelDialogOpen}
              content={
                <ModelMappingDialog
                  model={selectedModel}
                  onSave={handleSaveModel}
                  onClose={()=> setModelDialogOpen(false)}
                />
              }
              styleContent="sm:max-w-[425px]"
            >
              <Button onClick={handleOpenAddModelDialog}>
                Add Function Mapping
              </Button>
            </CustomDialog>
          </div>
          <CustomTable
            columns={modelMappingColumns}
            data={dataModel}
            className="mt-4 border-collapse border border-gray-200 shadow-lg"
            headerClassName="bg-gray-100 text-gray-700 whitespace-nowrap"
            bodyClassName="bg-white"
          />

          <div className="flex justify-end items-center w-full">
            <CustomDialog
              title="Final Event"
              open={isEventDialogOpen}
              onOpenChange={setEventDialogOpen}
              content={
                <FinalEventDialog 
                  event={selectedEvent}
                  onSave={handleSaveEvent}
                  onClose={()=> setEventDialogOpen(false)}
                />}
              styleContent="sm:max-w-[425px]"
            >
              <Button onClick={handleOpenAddEventDialog}>Add Event</Button>
            </CustomDialog>
          </div>
          <CustomTable
            columns={EventColumns}
            data={dataEvent}
            className="mt-4 border-collapse border border-gray-200 shadow-lg"
            headerClassName="bg-gray-100 text-gray-700 whitespace-nowrap"
            bodyClassName="bg-white"
          />

          <div className="flex justify-end items-center w-full">
            <CustomDialog
              title="Eligibility Rule"
              open={isEligibilityDialogOpen}
              onOpenChange={setEligibilityDialogOpen}
              content={
                <EligibilityRuleDialog 
                  eligibility={selectedEligibility}
                  onSave={handleSaveEligibility}
                  onClose={()=> setEligibilityDialogOpen(false)}
                />}
              styleContent="sm:max-w-[425px]"
            >
              <Button onClick={handleOpenAddEligibilityDialog}>Add Rule</Button>
            </CustomDialog>
          </div>
          <CustomTable
            columns={ELGRuleColumns}
            data={dataEligibility}
            className="mt-4 border-collapse border border-gray-200 shadow-lg"
            headerClassName="bg-gray-100 text-gray-700 whitespace-nowrap"
            bodyClassName="bg-white"
          />

          <div className="flex flex-row gap-5 mt-4 justify-end">
            <Button variant="secondary" onClick={() => navigate(-1)}>
              Back
            </Button>
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Submitting..." : "Save"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default Index;
