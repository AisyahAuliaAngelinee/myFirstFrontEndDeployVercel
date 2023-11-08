import { useState } from 'react'
import './App.css'
import Header from '../pages/Header';
import Detail from '../pages/Detail';
import Footer from '../components/Footer';
import Slide from '../components/Swiper';
import Pagination from '../components/Pagination';

function App() {

  // const [showOrHidePageComponent, setShowOrHidePageComponent] = useState(false)
  const [cuisine, setCuisine] = useState([
    {
      id: 1,
      name: "Ayam Panggang Dada Goreng Tepung",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      price: 90000,
    },
    {
      id: 2,
      name: "Nasi Goreng Ayam Utuh",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      price: 875000,
    },
    {
      id: 3,
      name: "Ikan Bakar Ayam Panggang Goreng",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      price: 75000,
    },
    {
      id: 4,
      name: "Ayam Panggang Dada + Nasi",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      price: 938000,
    },
    {
      id: 5,
      name: "Ayam Lemon Panggang Ikan Teri",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      price: 23000,
    },
    {
      id: 6,
      name: "Minyak Goreng Ayam Panggang",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      price: 657000,
    },
  ])
  return (
    <>
      {/* <!-- HEADER START --> */}
      <Header />
      {/* <!-- HEADER END --> */}

      {/* <!-- SEARCH START --> */}
      <form action="" id="search-form">
        <input type="search" placeholder="search cuisine" name="" id="search-box" />
        <label for="search-box" class="fas fa-search"></label>
        <i class="fas fa-times" id="close"></i>
      </form>
      {/* <!-- SEARCH END --> */}

      {/* <!-- HOME SECTION START --> */}
      <Slide />
      {/* <!-- HOME SECTION END --> */}

      {/* <!-- CUISINE SECTION START --> */}
      <section class="cuisine" id="cuisine">
        <h3 class="sub-heading">Our Cuisine</h3>
        <div class="box-container">
          {cuisine.map((cus) => (
            <div class="box flex flex-col items-center" key={cus.id}>
              <img src="#" alt="" />
              <h3>{cus.name}</h3>
              <p flex flex-wrap>{cus.description}</p>
              <span>Rp{cus.price}</span>
              <button class="text-white px-2.5 py-1 rounded text-sm font-medium bg-gray-800 border-0 border-l hover:bg-[#15803d] dark:text-gray-400 dark:hover:text-white">Detail</button>
            </div>
          ))}
        </div>
      </section>
      {/* <!-- CUISINE SECTION END --> */}

      {/* <!-- PAGINATION START --> */}
      <Pagination />
      {/* <!-- PAGINATION END --> */}

      {/* <!-- DETAIL CUISINE START --> */}
      <Detail />
      {/* <!-- DETAIL CUISINE END --> */}

      {/* <!-- FOOTER START --> */}
      <Footer />
      {/* <!-- FOOTER END --> */}
    </>
  )
}

export default App
