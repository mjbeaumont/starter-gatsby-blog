import AWS from 'aws-sdk';

const handleSendSuccess = () => ({
  statusCode: 200,
  body: 'Message sent',
});

const handleSendError = (error: AWS.AWSError) => ({
  statusCode: 500,
  body: `Error sending email: ${error.message}`,
});

export async function sendMessage(message: string) {
  AWS.config.update({
    accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
    region: process.env.AWS_SES_REGION,
  });

  const ses = new AWS.SES({ apiVersion: '2010-12-01' });
  const params = {
    Destination: {
      ToAddresses: process.env.CONTACT_FORM_TO?.split(',') ?? [],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: message,
        },
        Text: {
          Charset: 'UTF-8',
          Data: '',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'New contact form submission from hvpmusicians.org',
      },
    },
    Source: process.env.CONTACT_FORM_FROM ?? '',
  };

  return await ses
    .sendEmail(params)
    .promise()
    .then(handleSendSuccess)
    .catch(handleSendError);
}
