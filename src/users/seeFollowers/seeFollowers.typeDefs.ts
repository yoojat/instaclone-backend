import { gql } from "apollo-server";
export default gql`
  type SeeFollowerResult {
    ok: Boolean!
    error: String
    followers: [User]
    ttalPages: Int
  }
  type Query {
    seeFollowers(username: String!, page: Int!): SeeFollowerResult
  }
`;
