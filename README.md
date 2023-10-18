# Description
This repository should help reproduce the issue mentioned in https://github.com/mikro-orm/mikro-orm/issues/4836 (currently moved to discussion: https://github.com/mikro-orm/mikro-orm/discussions/4840)

Please see links for description of the issue.

# Setup

1. Install dependencies with `pnpm install` (or npm), I used Node v16.15.0 for this
2. Start docker compose with `docker compose up` to start postgres database
3. Run `pnpm run build` to build files
4. Run `pnpm run migrations` to run all necessary migrations
5. Run `pnpm run start` to start demo application (located in `main.ts`)

# Database migrations

In the database we will have these entities:

## SubscriptionPlanEntity

| name             | credits | env     |
|------------------|---------|---------|
| `'for-dev-only'` | `20`    | `'dev'` |
| `'for-all'`      | `20`    | `null`  |

## SubscriptionEntity

| id    | env              |
|-------|------------------|
| `'1'` | `'for-dev-only'` |
| `'2'` | `'for-all'`      |


# When running the application
You will see 2 repository calls that log the results:

1. The first call will NOT populate the `SubscriptionPlanEntity`, because it has `env: 'dev'` value (which is not the default of the `WithEnv` filter)
2. The second call WILL populate the `SubscriptionPlanEntity`, because it has `env: null` value (which is the default of the `WithEnv` filter) 