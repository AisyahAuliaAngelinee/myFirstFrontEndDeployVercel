import { useState } from 'react'
import Cuisine from './components/Cuisine'
import './App.css'

function App() {
  const [showDetail, setShowDetail] = useState(false)
  const fnOnClickShowDetail = (event) => {
    event.preventDefault();

    showDetail(true);
  };
  return (
    <>
      {/* <!-- HEADER START --> */}
      <header>
        <a href="" class="logo"><i class="fas fa-utensils"></i>resto.</a>
        <nav class="navbar">
          <a href="">Homepage</a>
          <a href="">About Us</a>
          <a href="">Add Menu</a>
          <a href="">Profile</a>
        </nav>

        <div class="icons">
          <i class="fas fa-bars" id="menu-bars"></i>
          <i class="fas fa-search" id="search-icon"></i>
        </div>
      </header>
      {/* <!-- HEADER END --> */}

      {/* <!-- SEARCH START --> */}
      {/* <!-- SEARCH END --> */}

      {/* <!-- HOME SECTION START --> */}
      {/* <!-- HOME SECTION END --> */}

      {/* <!-- CUISINE SECTION START --> */}
      <Cuisine />
      {/* <!-- CUISINE SECTION END --> */}

      {/* <!-- DETAIL CUISINE START --> */}
      <section class="detail">
        {showDetail && (
          <div class="detail-cuisine">
            <div class="detail-image">
              <img src="https://dcostseafood.id/wp-content/uploads/2017/12/Nasi-Goreng-seafood-2.jpg" alt="" />
            </div>
            <div class="detail-description">
              <span class="category">BERAT</span>
              <h3>Nasi Goreng Seafood</h3>
              <span class="price">Rp. 198.000</span>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aperiam minus cumque aut reprehenderit dolore obcaecati non quo, cum eius magnam ducimus dolores itaque? Alias odio repellat iste dolores iure!</p>
              <button class="text-white px-4 py-1 text-sm font-medium bg-gray-800 border-0 border-l hover:bg-[#16a34a] dark:text-gray-400 dark:hover:text-white">Edit</button>
              <button class="text-white px-2 py-1 text-sm font-medium bg-gray-800 border-0 border-l hover:bg-[#dc2626] dark:text-gray-400 dark:hover:text-white">Delete</button>
            </div>
          </div>
        )}
      </section>
      {/* <!-- DETAIL CUISINE END --> */}

      {/* <!-- FOOTER START --> */}
      <footer>
        <div class="w-full bg-Gray-300 p-4 text-center text-neutral-700"> © 2023 Copyright:
          <a class="text-neutral-800 dark:text-neutral-400" href="">Aisyah Aulia Angelinee</a>
        </div>
      </footer>
      {/* <!-- FOOTER END --> */}
    </>
  )
}

export default App
