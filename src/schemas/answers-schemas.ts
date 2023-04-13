import Joi from "joi";

export const answerSchema = Joi.object({
    answer: Joi.string().required()
  })