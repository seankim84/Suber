import cors from 'cors';
import decodeJWT from "./utils/decodeJWT";
import helmet from 'helmet';
import logger from 'morgan'; // 웹 요청이 들어왔을때, 로그를 출력하는 미들웨어
import schema from './schema';
import { GraphQLServer, PubSub } from "graphql-yoga";
import { NextFunction, Response } from 'express-serve-static-core';

class App {
    public app : GraphQLServer;
    public pubSub: any;
    constructor(){
        this.pubSub = new PubSub();
        this.pubSub.ee.setMaxListeners(99);
        this.app = new GraphQLServer({
            schema,
            context: req => {
                return {
                    req: req.request,
                    pubSub: this.pubSub
                }// context란 resolver로 넘길 것들의 모임이다
            }
        })
        this.middelwares();
    }
    private middelwares = () : void => { //middleware는 void를 리턴하고 있다.
        this.app.express.use(cors());//express는 graphql-yoga 의 서버 부분.(yoga는 이미 내부에 express를 가지고있다.)
        this.app.express.use(logger("dev"));
        this.app.express.use(helmet());
        this.app.express.use(this.jwt);
    };
    private jwt = async (req, res: Response, next: NextFunction): Promise<void> => { //custom middleware(Header를 감시)
        const  token = req.get("X-JWT"); // 이름은 상관없다.(헤더에 넣을거임)
        if(token){
            const user = await decodeJWT(token);
            if(user){
                req.user = user;
            } else {
                req.user = undefined;
            }
        }
        next(); //middleware 시작
    } 
}

export default new App().app //App class를 export 하기 위해 사용한다.