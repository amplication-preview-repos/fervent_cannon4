/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HouseWhereUniqueInput } from "../../house/base/HouseWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsInt,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RoomCreateInput {
  @ApiProperty({
    required: false,
    type: () => HouseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HouseWhereUniqueInput)
  @IsOptional()
  @Field(() => HouseWhereUniqueInput, {
    nullable: true,
  })
  house?: HouseWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  size?: number | null;
}

export { RoomCreateInput as RoomCreateInput };
