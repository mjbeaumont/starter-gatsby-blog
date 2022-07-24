import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';
import { generateMessageBody } from '../../utils/contact-form/generate-message-body';
import { sendMessage } from '../../utils/contact-form/send-message';
import { addNewSubscriber } from '../../utils/contact-form/add-new-subscriber';

import { validateForm } from '../../utils/contact-form/validate-form';

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  if (req.method !== 'POST') {
    throw new Error('Server error');
  }

  try {
    const validInput = await validateForm(req.body);
    const message = generateMessageBody(validInput);
    const { statusCode, body } = await sendMessage(message);
    if (validInput.emailConsent) {
      await addNewSubscriber(validInput);
    }
    res.status(statusCode).json({ body });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
