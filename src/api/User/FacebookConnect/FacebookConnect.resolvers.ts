import { Resolvers } from '../../../types/resolvers';
import { FacebookConnectMutaionArgs, FacebookConnectResponse } from '../../../types/graph';

const resolvers: Resolvers = {
  Mutation: {
      FacebookConnect: (_, args: FacebookConnectMutaionArgs) : Promise<FacebookConnectResponse> => {
          try {
            const 
          } catch(error){
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