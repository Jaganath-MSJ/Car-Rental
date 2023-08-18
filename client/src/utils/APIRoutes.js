// const host = "https://msj-car-rental-backend.onrender.com";
const host = "http://localhost:8000";

export const registerRoute = `${host}/auth/register`;
export const loginRoute = `${host}/auth/login`;
export const logoutRoute = `${host}/auth/logout`;
export const isUserAuthRoute = `${host}/auth/isUserAuth`;
export const refreshTokenRoute = `${host}/auth/refresh_token`;
export const getAllUsersRoute = `${host}/auth/getAllUsers`;
export const getUserRoute = `${host}/auth/getUser`;
