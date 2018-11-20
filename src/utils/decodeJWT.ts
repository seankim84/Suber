import jwt from 'jsonwebtoken';
import User from '../entities/User';


const decodeJWT = async (token: string): Promise<any> => { // 만약 User가 존재하지 않을 시엔 undefined 한다.
    try {
        const decoded: any = jwt.verify(token, process.env.JWT_TOKEN || "");
        const { id } = decoded;
        const user = await User.findOne({ id });
        return user;
    } catch(error){
        return undefined;
    }
} 

export default decodeJWT