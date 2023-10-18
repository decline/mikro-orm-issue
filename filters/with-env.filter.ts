import { Filter } from "@mikro-orm/core";

export interface WithEnvArguments {
  env?: 'dev' | 'prod';
}

export const WithEnv = (): ClassDecorator =>
  Filter({
    name: 'env',
    cond: ({env}: WithEnvArguments = {}) => {
      if (!env) {
        return {
          env: null
        };
      }
      return {
        env
      };
    },
    default: true
  });