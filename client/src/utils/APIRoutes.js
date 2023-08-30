// const host = "https://msj-car-rental-backend.onrender.com";
const host = "http://localhost:8000";

export const registerRoute = `${host}/auth/register`;
export const loginRoute = `${host}/auth/login`;
export const logoutRoute = `${host}/auth/logout`;
export const isUserAuthRoute = `${host}/auth/isUserAuth`;
export const refreshTokenRoute = `${host}/auth/refresh_token`;
export const getAllUsersRoute = `${host}/auth/getAllUsers`;
export const getUserRoute = `${host}/auth/getUser`;
export const updateUserInfoRoute = `${host}/auth/updateUserInfo`;
export const updateSavedCarsRoute = `${host}/auth/updateSavedCars`;
export const uploadProfilePicRoute = `${host}/auth/uploadProfilePic`;

export const getAllCarsRoute = `${host}/car/getAllCars`;
export const addCarRoute = `${host}/car/addCar`;
export const updateCarRoute = `${host}/car/updateCar`;
export const addCarReviewRoute = `${host}/car/addCarReview`;

export const getAllRentalsRoute = `${host}/rental/getAllRentals`;
export const addRentalRoute = `${host}/rental/addRental`;
