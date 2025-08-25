import axios from 'axios';


//API to fetch products data 
const Url = axios.create({
  baseURL: 'https://dummyjson.com/products',
});

export const getProducts = () => {return Url.get('/')};




//connecting to backend

const baseUrlofBackend = axios.create({
  baseURL:"http://localhost:8080/"
})

export const createOrder = (data) =>{
  return baseUrlofBackend.post("payment/create_order",data)
}

export default Url;