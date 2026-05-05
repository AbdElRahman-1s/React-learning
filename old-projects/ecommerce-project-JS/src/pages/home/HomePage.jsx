import { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
import { useSearchParams } from 'react-router';
import './HomePage.css';



export function HomePage({ cart , loadCart}) {

  const [products, setProducts] = useState([]);

  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect( () => {
    const getHomeDate = async () =>{
      const response = await axios.get(search ?`/api/products?search=${search}` :'/api/products');
      setProducts(response.data);
    }
    getHomeDate();
  }, [search]);


  return (
    <>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <title>Ecommerce Page</title>

      <Header
        cart={cart}
      />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}