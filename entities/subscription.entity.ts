import { Entity, ManyToOne, PrimaryKey } from "@mikro-orm/core";
import { SubscriptionPlanEntity } from "./subscription-plan.entity";

@Entity()
export class SubscriptionEntity {
    @PrimaryKey()
    id!: string;

    @ManyToOne(() => SubscriptionPlanEntity)
    subscriptionPlan!: SubscriptionPlanEntity;
}