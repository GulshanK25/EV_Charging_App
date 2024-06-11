import { createregistrationDBService, loginuserDBService } from './studentservices.js';

export const createregistrationControllerFn = async (req, res) => {
    try {
        console.log(req.body);
        const status = await createregistrationDBService(req.body);
        console.log(status);

        if (status) {
            res.send({ status: true, message: "User created successfully" });
        } else {
            res.send({ status: false, message: "Error creating user" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
};

export const loginUserControllerFn = async (req, res) => {
    try {
        const result = await loginuserDBService(req.body);

        if (result.status) {
            res.send({ status: true, message: result.msg });
        } else {
            res.send({ status: false, message: result.msg });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
};
