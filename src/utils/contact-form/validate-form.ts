import * as yup from 'yup';

export enum FormRole {
  AudienceMember = 'Audience Member',
  BoardMember = 'Board Member',
  BardavonSubscriber = 'Bardavon Subscriber',
  HVPSubscriber = 'Hudson Valley Philharmonic Subscriber',
  Musician = 'Musician',
  Other = 'Other',
}

export interface FormData {
  name: string;
  email: string;
  phone?: string;
  role: FormRole;
  message: string;
  emailConsent: boolean;
}

export const contactSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .required('Email is required')
    .email(`That email address doesn't look quite right`),
  phone: yup.string().optional(),
  role: yup
    .string()
    .oneOf(Object.values(FormRole))
    .required('Please tell us how you know about the HVP'),
  message: yup.string().required('Please include a message'),
  emailConsent: yup.boolean().required(),
});

export async function validateForm(input: unknown) {
  return (await contactSchema.validate(input, {
    abortEarly: false,
  })) as FormData;
}
