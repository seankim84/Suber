import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

const resolvers: Resolvers = {
    Query: { // authResolver를 쓰는것은 if 문을 쓰는 것과 같다
        GetMyProfile: privateResolver(async (_, __, { req }) => { //우리가 부르는 것은 authResolver이다
            const { user } = req; 
            return {
                ok: true,
                error: null,
                user
            }
        }
    )}
};

export default resolvers;