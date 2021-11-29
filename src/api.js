import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export const getColorsFromUrl = async input =>
  (await axios.post(`${BASE_URL}imageurl`, { input })).data.outputs[0].data.colors;

export const increaseUserEntries = async id => (await axios.put(`${BASE_URL}image`, { id })).data;

export const signin = async (email, password) => (await axios.post(`${BASE_URL}signin`, { email, password })).data;

export const register = async (name, email, password) =>
  (await axios.post(`${BASE_URL}register`, { name, email, password })).data;
