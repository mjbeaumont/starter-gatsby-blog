import mailchimp, { MemberErrorResponse } from '@mailchimp/mailchimp_marketing';
import { FormData } from '../../utils/contact-form/validate-form';

function initializeClient() {
  if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_SERVER_PREFIX) {
    throw new Error('Must set mailchimp API key and server prefix');
  }
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
  });
}

function splitName(name: FormData['name']) {
  const splitNames = name.split(' ');
  const [firstName, ...lastName] = splitNames;
  return {
    firstName,
    lastName: lastName.join(' '),
  };
}

export async function addNewSubscriber(formData: FormData) {
  initializeClient();
  if (!process.env.MAILCHIMP_LIST_ID) {
    throw new Error('Must set Mailchimp list ID to add subscribers');
    return;
  }

  const { email, name, phone } = formData;
  const { firstName, lastName } = splitName(name);

  const response = await mailchimp.lists.addListMember(
    process.env.MAILCHIMP_LIST_ID,
    {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        PHONE: phone,
      },
    }
  );

  if (Number.isFinite(response.status)) {
    const { title, detail } = response as MemberErrorResponse;
    throw new Error(`Error adding subscriber: ${title}: ${detail}`);
  }
}
