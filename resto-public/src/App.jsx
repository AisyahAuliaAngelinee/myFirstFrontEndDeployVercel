import { useState } from 'react'
import './App.css'
import Header from '../pages/Header';
import Cuisine from '../pages/Cuisine';
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
      <Cuisine />
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
