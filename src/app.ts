import { GraphQLServer } from 'graphql-yoga';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan'; // 웹 요청이 들어왔을때, 로그를 출력하는 미들웨어
import schema from './schema';

class App {
    public app : GraphQLServer;
    constructor(){
        this.app = new GraphQLServer({
            schema
        })
        this.middelwares();
    }
    private middelwares = () : void => { //middleware는 void를 리턴하고 있다.
        this.app.express.use(cors());//express는 graphql-yoga 의 서버 부분.(yoga는 이미 내부에 express를 가지고있다.)
        this.app.express.use(logger("dev"));
        this.app.express.use(helmet())
    }
}

export default new App().app //App class를 export 하기 위해 사용한다.