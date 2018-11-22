import dotenv from 'dotenv';
    dotenv.config();
    
import { Options } from 'graphql-yoga';
import { createConnection } from 'typeorm';
import app from './app';
import connectionOptions from './ormConfig';
import decodeJWT from './utils/decodeJWT';

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND : string  = '/playground';
const GRAPHQL_ENDPOINT: string = '/graphql';
const SUBSCRIPTION_ENDPOINT: string = '/subscription';

const appOptions: Options = {
    port: PORT,
    playground: PLAYGROUND,
    endpoint: GRAPHQL_ENDPOINT,
    subscriptions:{
        path:  SUBSCRIPTION_ENDPOINT,
        onConnect: async connectionParams => {
            const token = connectionParams['X-JWT']
            if(token){
                const user = await decodeJWT(token);
                console.log(user)
                if(user) {
                    return  {
                        currentUser: user
                    };
                }
            }
            throw new Error("No JWT. Can't subscribe"); 
        }
    }

};

const handleAppStart = () => console.log(`Listening the PORT ${PORT}`);

createConnection(connectionOptions).then(() => {
    app.start(appOptions, handleAppStart)
}).catch(error => console.log(error))
/*app.start()는 option param과 callback param을 갖는다 
callback에는 물음표가 있는데, 이것은 가져도 되고 안가져도 된다는것 */