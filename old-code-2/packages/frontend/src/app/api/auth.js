import { restApi } from './base/rest-api';

export function createAuthApi() {
  return {
    register,
    login,
    logout,
    fetchUser,
  };
}

async function register(data) {
  const response = await restApi.post('auth/register', data);
  return response.data;
}

async function login(data) {
  const response = await restApi.post('auth/login', data);
  return response.data;
}

async function logout() {
  const response = await restApi.post('auth/logout');
  return response.data;
}

async function fetchUser() {
  const response = await restApi.get('auth/user');
  return response.data;
}
