export const typeDefs = ["type Query {\n  sayBye: String!\n  sayHellow(name: String!): SayHellowResponse!\n}\n\ntype SayHellowResponse {\n  text: String!\n  error: Boolean!\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: string;
  sayHellow: SayHellowResponse;
}

export interface SayHellowQueryArgs {
  name: string;
}

export interface SayHellowResponse {
  text: string;
  error: boolean;
}
