import { mailService } from '../services/mail.service.js';

const mailController = async (request, response) => {
    const { name, email } = request.body;

    if (!name || name === '') {
        response.status(500).json({
            error: {
                message: 'Argument `name` is required'
            }
        });
    }

    if (!email || email === '') {
        response.status(500).json({
            error: {
                message: 'Argument `email` is required'
            }
        });
    }

    const serviceResponse = await mailService({
        name: name,
        email: email
    });

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
