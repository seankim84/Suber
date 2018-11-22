import cleanNullArgs from "../../../utils/cleanNullArg";
import privateResolver from "../../../utils/privateResolver";
import User from "../../../entities/User";
import { Resolvers } from "../../../types/resolvers";
import { ReportMovementMutationArgs, ReportMovementResponse } from '../../../types/graph';

const resolvers: Resolvers = {
  Mutation: {
    ReportMovement: privateResolver(
        async (
            _, 
            args: ReportMovementMutationArgs,
             { req, pubSub }
             ): Promise<ReportMovementResponse> => {
            const user: User = req.user;
            const notNull = cleanNullArgs(args);
            try {
                await User.update({id: user.id}, {...notNull});
                pubSub.publish("driverUpdate", { DriversSubscription: user }) // publish는 두가지 args를 갖는다.
                //첫째로 channelName, 둘째로 payload(.grpahql에서 declare 한 정확한 이름을 사용해야 함.) 
                return {
                    ok: true,
                    error: null
                }
            } catch(error) {
                return {
                    ok: false,
                    error: error.message
                }
            }

        })
  }
};

export default resolvers