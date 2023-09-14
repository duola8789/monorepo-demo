import { getTitle } from '@common/index';

const home = {
  async index() {
    return new Promise(resolve => resolve('Hello Koa' + getTitle()));
  },
};

export const homeServices = {
  home,
};
