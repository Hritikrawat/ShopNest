import axios from 'axios';

const Url = axios.create({
  baseURL: 'https://dummyjson.com/products',
});


export const getProducts = () => {return Url.get('/')};


export default Url;