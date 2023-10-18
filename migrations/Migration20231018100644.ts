import { Migration } from '@mikro-orm/migrations';

export class Migration20231018100644 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "subscription_plan_entity" ("name" varchar(255) not null, "credits" int not null, "env" varchar(255) null, constraint "subscription_plan_entity_pkey" primary key ("name"));');

    this.addSql('create table "subscription_entity" ("id" varchar(255) not null, "subscription_plan_name" varchar(255) not null, constraint "subscription_entity_pkey" primary key ("id"));');

    this.addSql('alter table "subscription_entity" add constraint "subscription_entity_subscription_plan_name_foreign" foreign key ("subscription_plan_name") references "subscription_plan_entity" ("name") on update cascade;');

    this.addSql(
      'insert into "subscription_plan_entity" ("name", "credits", "env") values (\'for-dev-only\', 20, \'dev\');'
    );
    this.addSql(
      'insert into "subscription_plan_entity" ("name", "credits", "env") values (\'for-all\', 20, null);'
    );
    this.addSql(
      'insert into "subscription_entity" ("id", "subscription_plan_name") values (\'1\', \'for-dev-only\');'
    );
    this.addSql(
      'insert into "subscription_entity" ("id", "subscription_plan_name") values (\'2\', \'for-all\');'
    );
  }

  async down(): Promise<void> {
    this.addSql('alter table "subscription_entity" drop constraint "subscription_entity_subscription_plan_name_foreign";');

    this.addSql('drop table if exists "subscription_plan_entity" cascade;');

    this.addSql('drop table if exists "subscription_entity" cascade;');
  }

}
