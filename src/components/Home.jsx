import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { getProducts } from '../Url';
import Footer from './Footer';

export default function Home() {
  // this is how to access env variables;
  // console.log(import.meta.env.VITE_APP_KEY);

  const [products,setProducts] = useState([]);

  useEffect(()=>{
    getProducts().then((res)=>{
        setProducts(res.data.products);
        console.log(res.data)
    }).catch((e)=>console.log("Error : ",e))
  },[])

  return (
    <div className='min-h-screen max-w-full bg-purple-400 bg-gradient-to-b from-purple-400 to-purple-200'>
        <Navbar/>
        
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full px-4">
            {products.map((e)=>(    
              <div key={e.id} className='bg-white rounded-2xl hover:shadow-2xl hover:scale-103 transition-all duration-300 ease-in-out p-4 '>
                  <img src={e.thumbnail}
                  alt={e.title}
                  className='h-40 w-40 object-contain mx-auto'/>
                  <h3 className='text-lg font-semibold'>{e.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{e.description}</p>
              <div className="mt-2 font-bold text-green-600 flex justify-between">
                ${e.price}
                <FavoriteBorderIcon/>
                
                </div>
              </div>
          ))}
        </div>

        <Footer/>
    </div>

  )
}
