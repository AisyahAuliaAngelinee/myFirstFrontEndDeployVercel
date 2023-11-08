const Slide = () => {
    return (
        <section class="home" id="home">
            <div class="swiper home-slider">
                <div class="swiper-wrapper wrapper">
                    <div class="swiper-slide slide">
                        <div class="content">
                            <span>Our Special Dish</span>
                            <h3>Nasi Goreng Kasablangka</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quis quaerat explicabo, minima ipsa ea quia reiciendis unde eius rem eligendi omnis dolorem autem iusto, eos possimus doloremque recusandae debitis!</p>
                            <a href="" class="btn">Detail</a>
                        </div>
                        <div class="image">
                            <img src="../image/home/home-img-1.png" alt="" />
                        </div>
                    </div>
                    <div class="swiper-slide slide">
                        <div class="content">
                            <span>Our Special Dish</span>
                            <h3>Burger Goreng Ikan Asin</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quis quaerat explicabo, minima ipsa ea quia reiciendis unde eius rem eligendi omnis dolorem autem iusto, eos possimus doloremque recusandae debitis!</p>
                            <a href="" class="btn">Detail</a>
                        </div>
                        <div class="image">
                            <img src="../image/home/home-img-2.png" alt="" />
                        </div>
                    </div>
                    <div class="swiper-slide slide">
                        <div class="content">
                            <span>Our Special Dish</span>
                            <h3>Ayam Panggang Bakar</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quis quaerat explicabo, minima ipsa ea quia reiciendis unde eius rem eligendi omnis dolorem autem iusto, eos possimus doloremque recusandae debitis!</p>
                            <a href="" class="btn">Detail</a>
                        </div>
                        <div class="image">
                            <img src="../image/home/home-img-3.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </section>
    )
}

export default Slide;