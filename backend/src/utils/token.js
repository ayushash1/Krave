import jwt from "jsonwebtoken";

const generateTokenAndSetCookies = (userId) => {
    try {
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        return token;
    } catch (error) {
        console.error(error);
        throw new Error(`Error in generating token: ${error.message}`);
    }
};

export default generateTokenAndSetCookies;