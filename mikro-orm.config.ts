import { Migrator } from '@mikro-orm/migrations';
import { defineConfig } from '@mikro-orm/postgresql';

export default defineConfig({
  baseDir: __dirname,
  entities: ['./entities'],
  entitiesTs: ['./entities'],
  dbName: 'mikro-orm-issue',
  user: 'user',
  password: 'password',
  port: 35000,
  extensions: [Migrator],
  migrations: {
    path: `./migrations`,
    pathTs: `./migrations`
  }
});
