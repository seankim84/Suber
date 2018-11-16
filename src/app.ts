import { GraphQLServer } from 'graphql-yoga';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'logger';
import morgan from 'morgan'; // 웹 요청이 들어왔을때, 로그를 출력하는 미들웨어



class App {
    public app : GraphQLServer;
    constructor(){
        this.app = new GraphQLServer({
    
        })
        this.middelwares();
    }
    private middelwares = () : void => {
        this.app.express.use(cors());//express는 graphql-yoga 의 서버 부분.(yoga는 이미 내부에 express를 가지고있다.)
        this.app.express.use(logger("dev"));
        this.app.express.use(helmet())
        this.app.express.use(morgan())
    }
}

export default new App().app //App class를 export 하기 위해 사용한다.