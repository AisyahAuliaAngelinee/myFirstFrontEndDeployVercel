const Detail = () => {
    return (
        <section class="detail">
            <div class="detail-cuisine">
                <div class="detail-image">
                    <img src="../image/home/home-img-1.png" alt="" />
                </div>
                <div class="detail-description">
                    <span class="category">HEAVY MEAL</span>
                    <h3>Nasi Goreng Kasablangka</h3>
                    <span class="price">Rp. 198.000</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aperiam minus cumque aut reprehenderit dolore obcaecati non quo, cum eius magnam ducimus dolores itaque? Alias odio repellat iste dolores iure!</p>
                    <button class="text-white px-4 py-1 rounded text-sm font-medium bg-gray-800 border-0 border-l hover:bg-[#16a34a] dark:text-gray-400 dark:hover:text-white">Edit</button>
                    <button class="text-white px-2 py-1 rounded text-sm font-medium bg-gray-800 border-0 border-l hover:bg-[#dc2626] dark:text-gray-400 dark:hover:text-white">Delete</button>
                </div>
            </div>
        </section>
    )
}

export default Detail;