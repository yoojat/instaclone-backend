import { protectedResolver } from "./../../users/users.utils";
import { Resolvers } from "./../../types.d";
import client from "../../client";
const resolvers: Resolvers = {
  Query: {
    seeRooms: protectedResolver(async (_, __, { loggedInUser }) =>
      client.room.findMany({
        where: {
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
