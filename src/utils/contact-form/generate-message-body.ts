import { FormData } from '../../utils/contact-form/validate-form';

export const generateMessageBody = ({
  name,
  email,
  phone,
  role,
  message,
  emailConsent,
}: FormData) => `
<html> 
<body>
<p> Someone has filled out the contact form on hvpmusicians.org: </p>
<p>
  Name: ${name}<br />
  Email: ${email}<br />
  Phone: ${phone ?? 'Not Provided'}<br />
  Role: ${role}<br />
  Message: ${message}<br />
  Would like to receive email updates: ${emailConsent ? 'Yes' : 'No'}
</p>
`;
