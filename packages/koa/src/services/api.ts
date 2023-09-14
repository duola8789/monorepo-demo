// /api
const index = async () => {
  return new Promise(resolve => resolve('Hello API'));
};

// /api/user/
const user = {
  // /api/user/
  async index() {
    return new Promise(resolve => resolve('Hello User'));
  },

  // /api/user/info
  async userInfo() {
    return new Promise(resolve => resolve({ name: 'Jay', age: '32' }));
  },
};

export const apiServices = {
  index,
  user,
};
