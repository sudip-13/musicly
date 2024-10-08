import { InputType, Field, Int, ObjectType } from '@nestjs/graphql';
@InputType()
export class Signup {
  @Field()
  userId: string;

  @Field()
  email: string;

  @Field()
  name: string;
}

@ObjectType()
export class SignupResponse {
  @Field(() => Int)
  status: number;

  @Field()
  message: string;
}


@ObjectType()
export class LastHistory {
  @Field()
  userId: string;

  @Field()
  id: number;

  @Field()
  musicUrl: string;

  @Field()
  thumbnailUrl: string;

  @Field()
  musicTitle: string;

  @Field()
  musicArtist: string;

  @Field()
  lastPlayedAt: Date;

  @Field()  
  isFavourite?: boolean;
}
