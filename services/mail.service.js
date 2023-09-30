import brevo from '@getbrevo/brevo';
import dotenv from 'dotenv';

dotenv.config();

const client = brevo.ApiClient.instance;

// Configure API key authorization
const clientApiKey = client.authentications['api-key'];
clientApiKey.apiKey = process.env.BREVO_API_KEY;

const clientMailApi = new brevo.TransactionalEmailsApi();

const mailService = async (message) => {
    const mailSenderInstance = new brevo.SendSmtpEmail();

    mailSenderInstance.subject = 'Test email';
    mailSenderInstance.htmlContent = message;
    mailSenderInstance.sender = {
        name: 'Tester',
        email: 'tester@example.com'
    };
    mailSenderInstance.to = [
        {
            name: 'Yacine BOUKARI',
            email: 'steeveboukari9@gmail.com'
        },
    ];

    let result;

    try {
        result = {
            success: true,
            data: await clientMailApi.sendTransacEmail(mailSenderInstance)
        }
    } catch (error) {
        result = {
            success: false,
            error: error
        }
    }

    return result;
}

export { mailService };
