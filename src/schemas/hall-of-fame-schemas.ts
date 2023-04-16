import Joi from "joi";

export const hallSchema = Joi.object({
    name: Joi.string().required()
  })