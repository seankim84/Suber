
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from 'path';

const allTypes: GraphQLSchema[] = fileLoader(
    path.join(__dirname, "./api/**/*.graphql") //api폴더 안에있는 깊이에 상관없이 모든 폴더들 안의 .graphql 파일을 모두 가져온다.
);

const allResolvers: string[] = fileLoader(
    path.join(__dirname, "./api/**/*.resolvers.*") // 나중에 .ts -> .js로 바꾸어도 충돌이 나지 않도록 .*로 설정한다.
);

const mergedTypes = mergeTypes(allTypes);
const mergedResolvers = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
    typeDefs: mergedTypes,
    resolvers: mergedResolvers
});

export default schema;


