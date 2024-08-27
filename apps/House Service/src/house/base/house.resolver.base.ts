/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { House } from "./House";
import { HouseCountArgs } from "./HouseCountArgs";
import { HouseFindManyArgs } from "./HouseFindManyArgs";
import { HouseFindUniqueArgs } from "./HouseFindUniqueArgs";
import { CreateHouseArgs } from "./CreateHouseArgs";
import { UpdateHouseArgs } from "./UpdateHouseArgs";
import { DeleteHouseArgs } from "./DeleteHouseArgs";
import { RoomFindManyArgs } from "../../room/base/RoomFindManyArgs";
import { Room } from "../../room/base/Room";
import { HouseService } from "../house.service";
@graphql.Resolver(() => House)
export class HouseResolverBase {
  constructor(protected readonly service: HouseService) {}

  async _housesMeta(
    @graphql.Args() args: HouseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [House])
  async houses(@graphql.Args() args: HouseFindManyArgs): Promise<House[]> {
    return this.service.houses(args);
  }

  @graphql.Query(() => House, { nullable: true })
  async house(
    @graphql.Args() args: HouseFindUniqueArgs
  ): Promise<House | null> {
    const result = await this.service.house(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => House)
  async createHouse(@graphql.Args() args: CreateHouseArgs): Promise<House> {
    return await this.service.createHouse({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => House)
  async updateHouse(
    @graphql.Args() args: UpdateHouseArgs
  ): Promise<House | null> {
    try {
      return await this.service.updateHouse({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => House)
  async deleteHouse(
    @graphql.Args() args: DeleteHouseArgs
  ): Promise<House | null> {
    try {
      return await this.service.deleteHouse(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Room], { name: "rooms" })
  async findRooms(
    @graphql.Parent() parent: House,
    @graphql.Args() args: RoomFindManyArgs
  ): Promise<Room[]> {
    const results = await this.service.findRooms(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
