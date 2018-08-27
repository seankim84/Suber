export const typeDefs = ["type Query {\n  sayBye: String!\n  sayHellow: Greeting!\n}\n\ntype Greeting {\n  text: String!\n  error: Boolean!\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: string;
  sayHellow: Greeting;
}

export interface Greeting {
  text: string;
  error: boolean;
}
