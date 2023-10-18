import { Entity, PrimaryKey, PrimaryKeyType, Property } from "@mikro-orm/core";
import { WithEnv } from "../filters/with-env.filter";

@Entity()
@WithEnv()
export class SubscriptionPlanEntity {
  @PrimaryKey()
  name!: string;

  @Property()
  credits!: number;

  @Property({ nullable: true })
  env!: string | null;

  [PrimaryKeyType]?: string;
}