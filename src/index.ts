import { Options } from 'graphql-yoga';
import app from './app';

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND : string  = '/playground';
const GRAPHQL_ENDPOINT: string = '/graphql';

const appOptions: Options = {
    port: PORT,
    playground: PLAYGROUND,
    endpoint: GRAPHQL_ENDPOINT
};

const handleAppStart = () => console.log(`Listening the PORT ${PORT}`);

app.start(appOptions, handleAppStart); //app.start()는 option param과 callback param을 갖는다.
// callback에는 물음표가 있는데, 이것은 가져도 되고 안가져도 된다는것.