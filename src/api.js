import axios from 'axios';

const BASE_URL = 'https://rocky-savannah-60468.herokuapp.com/';

export const getColorsFromUrl = async input =>
  (await axios.post(`${BASE_URL}imageurl`, { input })).data.outputs[0].data.colors;

export const increaseUserEntries = async id => (await axios.put(`${BASE_URL}image`, { id })).data;

