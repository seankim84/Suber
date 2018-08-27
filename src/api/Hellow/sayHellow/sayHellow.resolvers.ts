import { Greeting } from '../../../types/graph';

const resolvers = {
  Query: {
    sayHellow: (): Greeting => {
      return {
        error: false,
        text: "love you"
      }
    }
  }
};

export default resolvers;
