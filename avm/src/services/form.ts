import * as z from "zod";

export const modelSchema = z.object({
  name: z.string().min(1, { message: "Model name is required" }),
  description: z.string().min(1, { message: "Model description is required" }),
});

export const modelMappingSchema = z.object({
  functionCode: z.string().min(1, { message: "Function Code is required" }),
  ruleExp: z.string().min(1, { message: "Rule Expression is required" }),
});

export const levelSchema = z.object({
  levelSequence: z.string(),
  modelName: z.string(),
  active: z.string(),
});

export const approvalSetupSchema = z.object({
  model: z.object({
    name: z.string().min(1, { message: "Category is required" }),
    description: z.string().min(1, { message: "Category ID is required" }),
  }),
  mappings: z.array(modelMappingSchema),
  level: z.array(levelSchema),
});

const handlerSpecSchema = z.object({
  url: z.string().optional(),
  method: z.string().optional(),
  tokenMethod: z.string().optional(),
  tokenName: z.string().optional(),
  destType: z.string().optional(),
  destName: z.string().optional(),
  external: z.string().optional(),
}).nullable();

export const finalEventSchema = z.object({
  functionCode: z.string().min(1, { message: "Function Code is required" }),
  handlerType: z.string().min(1, { message: "Handler Type is required" }),
  handlerSpec: z.union([
    z.string(),
    handlerSpecSchema,
  ]),
  lastAction: z.string().min(1, { message: "Last Action is required" }),
  failureHandling: z
    .string()
    .min(1, { message: "Failure Handling is required" }),
});

export const eligibilityRuleSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  ruleDescription: z.string().min(1, { message: "Description is required" }),
  fieldExp: z.string().min(1, { message: "Field EXP is required" }),
  valueType: z.string().min(1, { message: "Value Type is required" }),
  valueChoice: z.string().min(3, { message: "Value Type is required" }),
});

export type ApprovalSetupSchema = z.infer<typeof approvalSetupSchema>;
export type ModelMappingSchema = z.infer<typeof modelMappingSchema>;
export type LevelSchema = z.infer<typeof levelSchema>;
export type FinalEventSchema = z.infer<typeof finalEventSchema>;
export type EligibilityRuleSchema = z.infer<typeof eligibilityRuleSchema>;

export const reviewersSchema = z.object({
  id: z.string(),
  userOrGroupId: z.string(),
  userOrGroupName: z.string(),
  reviewerType: z.string(),
});

export const addLevelSchema = z.object({
  level: z.object({
    modelId: z.string(),
    modelName: z.string(),
    levelSequence: z.string().min(1, { message: "Level Sequence is required" }),
    priority: z.string().min(1, { message: "Priority is required" }),
    levelMode: z.string().min(1, { message: "Level Mode is required" }),
    quorumValue: z.string(),
    eligibilityRuleId: z
      .string()
      .min(1, { message: "Eligibility Rule is required" }),
    compareValue: z.string().min(1, { message: "Compare Value is required" }),
  }),
  reviewers: z.array(reviewersSchema),
});

export const setupEligibilityRuleSchema = eligibilityRuleSchema.extend({
  id: z.string(),
});

export const getEligibilityRules = eligibilityRuleSchema.extend({
  id: z.string(),
});

export const addAVMSchema = z.object({
  model: modelSchema,
  mappings: z.array(modelMappingSchema),
  finalEvents: z.array(finalEventSchema),
  elgRules: z.array(eligibilityRuleSchema),
});

export type AddLevelSchema = z.infer<typeof addLevelSchema>;
export type ReviewersSchema = z.infer<typeof reviewersSchema>;
export type AddAVMSchema = z.infer<typeof addAVMSchema>;
export type GetEligibilityRules = z.infer<typeof getEligibilityRules>;
