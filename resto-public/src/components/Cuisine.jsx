import { useState } from "react";
import App from "../App";

const Cuisine = () => {
    const [cuisine, setCuisine] = useState(
        [
            {
                id: 1,
                name: "Nasi Goreng Seafood",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                price: 25000,
                imgUrl: "https://dcostseafood.id/wp-content/uploads/2017/12/Nasi-Goreng-seafood-2.jpg",
                categoryId: 1,
            },
            {
                id: 2,
                name: "Nasi Goreng Seafood",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                price: 25000,
                imgUrl: "https://dcostseafood.id/wp-content/uploads/2017/12/Nasi-Goreng-seafood-2.jpg",
                categoryId: 1,
            },
            {
                id: 3,
                name: "Nasi Goreng Seafood",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                price: 25000,
                imgUrl: "https://dcostseafood.id/wp-content/uploads/2017/12/Nasi-Goreng-seafood-2.jpg",
                categoryId: 1,
            },
            {
                id: 4,
                name: "Nasi Goreng Seafood",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                price: 25000,
                imgUrl: "https://dcostseafood.id/wp-content/uploads/2017/12/Nasi-Goreng-seafood-2.jpg",
                categoryId: 1,
            },
            {
                id: 5,
                name: "Nasi Goreng Seafood",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                price: 25000,
                imgUrl: "https://dcostseafood.id/wp-content/uploads/2017/12/Nasi-Goreng-seafood-2.jpg",
                categoryId: 1,
            },
            {
                id: 6,
                name: "Nasi Goreng Seafood",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                price: 25000,
                imgUrl: "https://dcostseafood.id/wp-content/uploads/2017/12/Nasi-Goreng-seafood-2.jpg",
                categoryId: 1,
            },
        ]
    )

    return (
        <section className="cuisine" id="cuisine">
            <h3 className="sub-heading">Our Cuisine</h3>
            <div className="box-container">
                {cuisine.map((cus) => (
                    <div className="box flex flex-col items-center" key={cus.id}>
                        <img src={cus.imgUrl} alt="" />
                        <h3>{cus.name}</h3>
                        <p flex flex-wrap>{cus.description}</p>
                        <span>Rp. {cus.price}</span>
                        <button className="text-white px-2.5 py-1 rounded text-sm font-medium bg-gray-800 border-0 border-l hover:bg-[#15803d] dark:hover:text-white" onClick={<App fnOnClickShowDetail />}>Detail</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Cuisine;