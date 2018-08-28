import { SayHellowQueryArgs, SayHellowResponse } from "../../../types/graph";

const resolvers = {
  Query: {
    sayHellow: (_, args: SayHellowQueryArgs): SayHellowResponse => {
      return {
        error: false,
        text: `Hellow ${args.name}`
      };
    }
  }
};

export default resolvers;
