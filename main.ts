import { RequestContext } from "@mikro-orm/core";
import { MikroORM, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { SubscriptionEntity } from "./entities/subscription.entity"; // or any other driver package
import MikroOrmConfig from './mikro-orm.config';

MikroORM.init<PostgreSqlDriver>(MikroOrmConfig).then(async (orm) => {
  await RequestContext.createAsync(orm.em, async () => {
    const subscription1 = await orm.em.getRepository(SubscriptionEntity).findOneOrFail(
      { id: '1' },
      { populate: ['subscriptionPlan'] }
    )

    console.log('This will NOT populate', subscription1)

    const subscription2 = await orm.em.getRepository(SubscriptionEntity).findOneOrFail(
      { id: '2' },
      { populate: ['subscriptionPlan'] }
    )

    console.log('This WILL populate', subscription2)
  })

});

