// import React from 'react';
import axios from 'axios';

// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

const KEY = '15876252-73f3be1600bc59555b8bf80ec';
const BASE_URL = `https://pixabay.com/api/?key=${KEY}&lang=ru&lang=en&image_type=photo&orientation=horizontal&per_page=12&`;

const fetchImages = (query = 'dog', page = 1) => {
  const fullUrl = BASE_URL + `q=${query}&page=${page}`;
  // return console.log(fullUrl);
  return axios.get(fullUrl);
};

export default fetchImages;
