import { protectedResolver } from "./../../users/users.utils";
import { Resolvers } from "./../../types.d";
import client from "../../client";
const resolvers: Resolvers = {
  Query: {
    seeRoom: protectedResolver((_, { id }, { loggedInUser }) =>
      client.room.findFirst({
        where: {
          id,
          users: {
            some: {
              id: loggedInUser.id,
            },
          },
        },
      })
    ),
  },
};

export default resolvers;
