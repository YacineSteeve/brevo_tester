import { mailService } from '../services/mail.service.js';

const mailController = async (request, response) => {
    const { message } = request.body;

    const serviceResponse = await mailService(message);

    if (serviceResponse.success) {
        response.status(200).json({
            data: serviceResponse.data
        });
    } else {
        response.status(500).json({
            error: serviceResponse.error
        });
    }
}

export { mailController };
