import { RequestContext } from "@mikro-orm/core";
import { MikroORM, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { SubscriptionEntity } from "./entities/subscription.entity"; // or any other driver package

MikroORM.init<PostgreSqlDriver>({
  entities: ['./dist/entities'], // path to our JS entities (dist), relative to `baseDir`
  entitiesTs: ['./src/entities'], // path to our TS entities (src), relative to `baseDir`
  dbName: 'mikro-orm-issue',
  user: 'user',
  password: 'password',
  port: 35000
}).then(async (orm) => {
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

