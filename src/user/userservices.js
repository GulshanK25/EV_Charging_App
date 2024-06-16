import simpleEncryptor from 'simple-encryptor';
import Registration from './usermodel.js';

const key = '123456789trytryrtyr';
const encryptor = simpleEncryptor(key);

export async function createregistrationDBService(registrationDetails) {
    try {
        const { fullname, email, password, address } = registrationDetails;

        if (!fullname || !email || !password || !address) {
            throw new Error("Missing required fields");
        }

        const encryptedPassword = encryptor.encrypt(password);
        const registrationModelData = new Registration({
            fullname,
            email,
            password: encryptedPassword,
            address
        });

        await registrationModelData.save();
        return true;
    } catch (error) {
        console.error("Error saving registration data:", error);
        return false;
    }
}
export async function loginuserDBService(registrationDetails) {
    try {
        const result = await Registration.findOne({ email: registrationDetails.email });

        if (result) {
            const decrypted = encryptor.decrypt(result.password);
            if (decrypted === registrationDetails.password) {
                return { status: true, msg: "User Validated Successfully" };
            } else {
                return { status: false, msg: "User Validation Failed" };
            }
        } else {
            return { status: false, msg: "Error Details" };
        }
    } catch (error) {
        console.error("Error logging in user:", error);
        return { status: false, msg: "Invalid Data" };
    }
}
