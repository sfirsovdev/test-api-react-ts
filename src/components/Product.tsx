import { useState } from 'react'
import {IProduct} from '../models'

interface ProductProps {
    product: IProduct
}


export function Product({ product }: ProductProps) {
    const [details] = useState(false)


    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <img src={product.id} className="w-1/6" alt={product.title} />
            <p>{product.title}</p>
            <span className='font-bold'>{product.address}</span>

        

        {details && <div>
                <p>{product.description}</p>
                <p>Rate:<span style={{ fontWeight: 'bold'}}>{product.email}</span></p>
        </div>}
        
        </div>
    )
    
}