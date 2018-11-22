import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import User from "../../../entities/User";
import { Between, getRepository } from "typeorm";
import { GetNearByDriversResponse } from "src/types/graph";

const resolvers: Resolvers = {
  Query: {
    GetNearByDrivers: privateResolver(async (_, __, {req}): Promise<GetNearByDriversResponse> => {
        const user: User = req.user;
        const { lastLat, lastLng } = user;
        try{
            const drivers: User[] = await getRepository(User).find({ //Between을 사용하기 위해선,  getReopository로 부터 User에 대한 정보를 받아와야 한다.
                isDriving: true,
                lastLat:Between(lastLat - 0.5, lastLat + 0.5),//Between()은 find operator이다.
                lastLng: Between(lastLng - 0.5, lastLng + 0.5) //오직 getRepository에서만 동작한다.
            });
            return {
                ok: true,
                error: null,
                drivers
            }
        } catch(error){
            return {
                ok: false,
                error: error.message,
                drivers: null
            }
        }
    })
  }
};

export default resolvers;
