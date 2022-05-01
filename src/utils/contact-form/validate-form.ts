import * as yup from 'yup';

export enum FormRole {
  AudienceMember = 'Audience Member',
  BoardMember = 'Board Member',
  Musician = 'Musician',
  Other = 'Other',
}

const contactSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup.string().optional(),
  role: yup.string().oneOf(Object.values(FormRole)).required(),
  message: yup.string().required(),
});

export async function validateForm(input: unknown) {
  return await contactSchema.validate(input, { abortEarly: false });
}

export type FormData = yup.InferType<typeof contactSchema>;
