import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from 'path';

const allTypes: GraphQLSchema[] = fileLoader(
    path.join(__dirname, "./api/**/*.graphql") //api안에있는 깊이에 상관없이 .grpahql로 끝나는 파일을 모두 가져옴
)

const allResolovers: string[] = fileLoader(
    path.join(__dirname, "./api/**/*.resolvers.*")
);

const mergedTypes = mergeTypes(allTypes);
const mergedResolvers = mergeResolvers(allResolovers);

const schema = makeExecutableSchema({
    typeDefs: mergedTypes,
    resolvers: mergedResolvers
});

export default schema;