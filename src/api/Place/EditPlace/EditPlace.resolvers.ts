import cleanNullArgs from "../../../utils/cleanNullArg";
import Place from "../../../entities/Place";
import privateResolver from "../../../utils/privateResolver";
import User from "../../../entities/User";
import { EditPlaceMutationArgs, EditPlaceResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";


const resolvers: Resolvers = {
    Mutation: {
        EditPlace: privateResolver(async (_, args: EditPlaceMutationArgs, {req}): Promise<EditPlaceResponse> => {
            const user: User = req.user;
            try {
                const place = await Place.findOne({id: args.placeId}) //Place.ts에 userId로 정의했기때문에 relation옵션을 사용할 필요가 없다.
                if(place) {
                    if(place.userId === user.id) {
                        const notNull = cleanNullArgs(args);
                        await Place.update({id: args.placeId}, {...notNull});
                        return {
                            ok: true,
                            error: null
                        } 
                    } else {
                        return {
                            ok: false,
                            error: "Not Authorized"
                        };
                    }
                } else {
                    return {
                        ok: false,
                        error: "Place Not Found"}
                }
            } catch(error){
                return {
                    ok: false,
                    error: error.message
                }
            }
        })
    }
}

export default resolvers;