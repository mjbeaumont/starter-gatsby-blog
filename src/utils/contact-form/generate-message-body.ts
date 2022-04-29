import { FormData } from '../../api/contact';

export const generateMessageBody = ({
  name,
  email,
  phone,
  role,
  message,
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
</p>
`;
