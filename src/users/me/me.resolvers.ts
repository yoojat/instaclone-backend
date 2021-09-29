import { protectedResolver } from "./../users.utils";
import { Query } from "./../../types/graph";
import client from "../../client";
const resolvers = {
  Query: {
    me: protectedResolver((_, __, { loggedInUser }) =>
      client.user.findUnique({
        where: {
          id: loggedInUser.id,
        },
      })
    ),
  },
};

export default resolvers;
