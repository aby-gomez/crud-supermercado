import { useState,useEffect } from 'react';
import type {Products,Category,Tag} from './interfaces';
import ProductRow from './ProductRow';


export default function ProductTable(){
    const[products, setProducts] = useState<Products[]>([]);

   
    useEffect(() => {
        async function getProducts(){
        
            const answ = await fetch (`http://161.35.104.211:8000/products`,
                {
                    method : 'GET',
                    headers : {
                        accept: "application/json",
                        Authorization : 'Bearer Topsy'}
                }
            );
            const data : Products[] = await answ.json();
            return data;
        }
            getProducts()
            .then((data) => setProducts(data))
            .catch(console.error);


            },[]);
console.log(products);
    return(
        <>
        <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="p-4">Product</th>
                            <th scope="col" className="p-4">Category</th>
                            <th scope="col" className="p-4">Stock</th>
                            <th scope="col" className="p-4">Sales/Day</th>
                            <th scope="col" className="p-4">Sales/Month</th>
                            <th scope="col" className="p-4">Rating</th>
                            <th scope="col" className="p-4">Sales</th>
                            <th scope="col" className="p-4">Revenue</th>
                            <th scope="col" className="p-4">Last Update</th>
                        </tr>
                    </thead>
                    <tbody>
                       {products.map((p) => (
                        <ProductRow 
                            key = {p.id}
                            title={p.title}
                picture={`http://161.35.104.211:8000${p.pictures[0]}`}
                price={p.price * 1000}
                description={p.description}
                productId={p.id}
                category = {p.category.title}
                    ></ProductRow>))
                       }
        </tbody>
        </table>
        </div>
        </>
    );

}