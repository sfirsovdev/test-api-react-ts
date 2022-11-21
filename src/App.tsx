import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom'

import { ProductPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage'
import { Navigation} from './components/Naviagation'

import dataJson from './data/data.json';



function App() {
  // const [pageData, setPageData] = useState<JobItem[]>([]);

  // async function getData(): Promise<void> {
  //   try {
  //     const token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';
  //     const { data } = await axios.post('https://api.json-generator.com/templates/ZM1r0eic3XEy/data', {}, {
  //       headers: {
  //         'Authorization': `Bearer ${ token }`
  //       },
  //     });
  //     setPageData(data);
  //   } catch (error) {
  //     console.warn(error, 'API error, use JSON.');
  //     setPageData(dataJson);
  //   }
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  // function renderList() {
  //   const arr = [];
  //   for (const item of pageData) {
  //     arr.push(<p key={item.id}>{item.name} ({item.email} {item.address} )</p>)
  //   }
  //   return arr;
  // }

  return (
    <>
      <Navigation />
    
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      </>
  )
  }

export default App;
