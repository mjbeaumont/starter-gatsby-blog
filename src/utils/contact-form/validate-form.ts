import * as yup from 'yup';

export enum FormRole {
  AudienceMember = 'Audience Member',
  BoardMember = 'Board Member',
  Musician = 'Musician',
  Other = 'Other',
}

export const contactSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .required('Email is required')
    .email(`That email address doesn't look quite right`),
  phone: yup.string().optional(),
  role: yup.string().oneOf(Object.values(FormRole)).required(),
  message: yup.string().required('Please include a message'),
});

export async function validateForm(input: unknown) {
  return await contactSchema.validate(input, { abortEarly: false });
}

export type FormData = yup.InferType<typeof contactSchema>;
