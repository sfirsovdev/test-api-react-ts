import { useEffect, useState } from "react"
import { IProduct } from "../models"
import axios, {AxiosError} from "axios"

export interface JobItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  address: string;
  benefits: string[];
  location: {
    lat: number;
    long: number;
  };
  pictures: string[];
  createdAt: string;
  updatedAt: string;
  description: string;
  employment_type: string[];
}

export function useProducts() {
  const [products, setProducts] = useState<JobItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
async function fetchproducts() {
  try {
    setError('')
    setLoading(true)
    const token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';
      const { data } = await axios.post<JobItem[]>('https://api.json-generator.com/templates/ZM1r0eic3XEy/data', {}, {
        headers: {
          'Authorization': `Bearer ${ token }`
        },
      });
    // const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
    setProducts(data)
    setLoading(false)
  } catch (e: unknown) {
    const error = e as AxiosError
    setLoading(false)
    setError(error.message)
  }
}

  useEffect(() => {
  fetchproducts()
}, [])

    return  { products,error,loading}
}