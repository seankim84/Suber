import { SayHellowQueryArgs, sayHellowResponse } from "../../../types/graph";

const resolvers = {
    Query: {
        sayHellow: (_, args:SayHellowQueryArgs) : sayHellowResponse => { //미리 타입설정가능
            return  {
                error: false,
                text: `Hellow ${ args.name }`
            };
        }
        
    }
};

export default resolvers;