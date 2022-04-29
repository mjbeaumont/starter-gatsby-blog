import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';
import { generateMessageBody } from './generate-message-body';
import { sendMessage } from './send-message';

enum FormRole {
  AudienceMember = 'Audience Member',
  BoardMember = 'Board Member',
  Musician = 'Musician',
  Other = 'Other',
}

export interface FormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  role: FormRole;
}

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  console.log({ req });
  const message = generateMessageBody(req.body as FormData);
  const { statusCode, body } = await sendMessage(message);
  res.status(statusCode).json({ body });
}
