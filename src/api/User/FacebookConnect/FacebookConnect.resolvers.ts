
import User from "../../entities/User";
import { Resolvers } from '../../../types/resolvers';
import { FacebookConnectMutaionArgs, FacebookConnectResponse } from '../../../types/graph';

const resolvers: Resolvers = {
  Mutation: {
      FacebookConnect: (_, args: FacebookConnectMutaionArgs
        ) : Promise<FacebookConnectResponse> => {
            const { fbId } = args;
          try {
            const existingUser = await User.findOne({fbId });
            if(existingUser){
                return {
                    ok:true,
                    error: null,
                    token: null
                };
            } 
          } catch(error){
              return {
                  ok: false,
                  error: error.message,
                  token: null
              };
          } try {

          } catch (error) {
              return {
                  ok: false,
                  error: error.message,
                  token: null
              }
          }
      }
  }
};

export default resolvers;