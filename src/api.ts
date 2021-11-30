import axios from 'axios';
import { RawColorType } from './interfaces/Colors';

const BASE_URL = import.meta.env.VITE_API_URL;

export const getColorsFromUrl = async (input: string): Promise<[RawColorType]> =>
  (await axios.post(`${BASE_URL}imageurl`, { input })).data.outputs[0].data.colors;

export const increaseUserEntries = async (id: string) => (await axios.put(`${BASE_URL}image`, { id })).data;

export const signin = async (email: string, password: string) =>
  (await axios.post(`${BASE_URL}signin`, { email, password })).data;

export const register = async (name: string, email: string, password: string) =>
  (await axios.post(`${BASE_URL}register`, { name, email, password })).data;
