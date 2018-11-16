export const typeDefs = ["type Query {\n  sayBye: String!\n  sayHellow(name: String!): sayHellowResponse!\n}\n\ntype sayHellowResponse {\n  text: String!\n  error: Boolean!\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: string;
  sayHellow: sayHellowResponse;
}

export interface SayHellowQueryArgs {
  name: string;
}

export interface sayHellowResponse {
  text: string;
  error: boolean;
}
