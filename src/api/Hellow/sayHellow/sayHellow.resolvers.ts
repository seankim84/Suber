import { Greeting } from '../../../types/graph';

const resolvers = {
    Query: {
        sayHellow: () : Greeting => {
            return  {
                error: false,
                text: "I love you"
            };
        }
        
    }
};

export default resolvers;