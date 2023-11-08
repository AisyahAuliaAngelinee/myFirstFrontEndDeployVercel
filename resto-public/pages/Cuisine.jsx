const Cuisine = () => {
    return (
        <section class="cuisine" id="cuisine">
            <h3 class="sub-heading">Our Cuisine</h3>
            <div class="box-container">
                { }
                <div class="box flex flex-col items-center">
                    <a href="" class="fas fa-eye"></a>
                    <img src="../image/ayam/menu-6.jpg" alt="" />
                    <h3>Minyak Goreng Ayam Panggang</h3>
                    <p flex flex-wrap>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque fugit tempora voluptatum, illo nisi deleniti corrupti natus, eius quia quos pariatur incidunt ab eum nesciunt sequi iste repellendus! Facere, in.</p>
                    <span>Rp. 657.000</span>
                    <button class="text-white px-2.5 py-1 rounded text-sm font-medium bg-gray-800 border-0 border-l hover:bg-[#15803d] dark:text-gray-400 dark:hover:text-white">Detail</button>
                </div>
            </div>
        </section>
    )
}

export default Cuisine;