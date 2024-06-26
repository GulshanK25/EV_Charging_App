import { createregistrationDBService, loginuserDBService } from './userservices.js';
import User from './usermodel.js';

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
            const user = await User.findOne({ email: req.body.email }); // Assuming User is your Mongoose model
            res.status(200).json({ status: true, userId: user._id, username: user.name });
        } else {
            res.status(401).json({ status: false, message: result.msg });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
};
