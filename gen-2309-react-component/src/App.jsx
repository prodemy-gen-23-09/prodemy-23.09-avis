import { Products } from "./assets/product";
import productData from './content';
import Header from './assets/header';
import Footer from './assets/footer';
import Navbar from "./assets/navbar";

export default function App() {
  return (
    <div className='App'>
      <Header />
      <div className='BodyGrid'>
        <div className='Body flex flex-wrap px-24 py-3'>
          <div className="grid grid-cols-5 gap-9 w-full">
            {productData.map(content => (
              <Products
                key={content.id}
                image={content.image}
                name={content.name}
                price={content.price}
                totalSales={content.totalSales}
                timeLeft={content.timeLeft}
                rating={content.rating}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
