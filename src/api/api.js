import * as axios from "axios";

const axiosConfig = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "3c65e3c0-b6b0-4117-8ec8-35b3d5a20261",
      },
})

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return axiosConfig.get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => response.data);
};
