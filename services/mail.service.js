import brevo from '@getbrevo/brevo';
import dotenv from 'dotenv';
import * as uuid from 'uuid';

import { invoiceTemplate } from '../templates/invoice.template.js';

dotenv.config();

const client = brevo.ApiClient.instance;

// Configure API key authorization
const clientApiKey = client.authentications['api-key'];
clientApiKey.apiKey = process.env.BREVO_API_KEY;

const clientMailApi = new brevo.TransactionalEmailsApi();

const mailService = async (data) => {
    const mailSenderInstance = new brevo.SendSmtpEmail();

    mailSenderInstance.subject = 'Test email (invoice)';

    mailSenderInstance.htmlContent = invoiceTemplate({
        number: uuid.v4(),
        date: new Date().toUTCString(),
        dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toUTCString(),
        customer: data['name'],
        totalPrice: `$${Math.floor(Math.random() * 1000)}`
    });

    mailSenderInstance.sender = {
        name: data['name'],
        email: data['email']
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
