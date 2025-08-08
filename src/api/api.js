// src/utils/api.js
import axios from 'axios';
const base_url = 'http://localhost/eDengiSystem'; // or import from config

export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${base_url}/Event/get`);
    return response.data.response; // make sure your API returns an array of events
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};
