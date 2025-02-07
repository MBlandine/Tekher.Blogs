import React from "react";
import '../styles.css/Shop.css'
import image1 from '../assets/image1.webp'
import image2 from '../assets/image2.webp'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.webp'
import image5 from '../assets/image5.webp'
import image6 from '../assets/image6.webp'
import image7 from '../assets/image7.webp'
import image8 from '../assets/image8.webp'
import image9 from '../assets/image9.webp'
import image10 from '../assets/image10.webp'
import { TfiMenuAlt } from "react-icons/tfi";
import { PiDotsNineBold } from "react-icons/pi";
const Shop = () => {
    const products = [
        {
            id: 1,
            image: image2,
            title: "All in one bottle",
            price: '$22.00 – $55.00',
            ratings: 3,
            color: ["#6B705C", "#B08968", "#EDEDED"],
        },
        {
            id: 2,
            image: image3,
            title: "Amazon Alexa",
            price: "$49.00 – $69.00",
            ratings: 4,
            color: ["#6B705C", "#B08968", "#EDEDED"],
        },
        {
            id: 3,
            image: image4,
            title: "Headset Gamer Legion",
            price: "$22.00 – $55.00",
            ratings: 5,
            color: ["#6B705C", "#B08968", "#EDEDED"],
        },
        {
            id: 4,
            image: image5,
            title: "Headset Gamer Legion",
            price: "$22.00 – $55.00",
            ratings: 5,
            color: ["#6B705C", "#B08968", "#EDEDED"],
        },
        {
            id: 5,
            image: image6,
            title: "Headset Gamer Legion",
            price: "$22.00 – $55.00",
            ratings: 5,
            color: ["#6B705C", "#B08968", "#EDEDED"],
        },
        {
            id: 6,
            image: image7,
            title: "Headset Gamer Legion",
            price: "$22.00 – $55.00",
            ratings: 5,
            color: ["#6B705C", "#B08968", "#EDEDED"],
        },
        {
            id: 7,
            image: image8,
            title: "Headset Gamer Legion",
            price: "$22.00 – $55.00",
            ratings: 5,
            color: ["#6B705C", "#B08968", "#EDEDED"],
        },
        {
            id: 8,
            image: image9,
            title: "Headset Gamer Legion",
            price: "$22.00 – $55.00",
            ratings: 5,
            color: ["#6B705C", "#B08968", "#EDEDED"],
        },
        {
            id: 9,
            image: image10,
            title: "Headset Gamer Legion",
            price: "$22.00 – $55.00",
            ratings: 5,
            color: ["#6B705C", "#B08968", "#EDEDED"],
        }

    ]
    return (
        <div>

            <div class="indexhome">
                <h1 class="shop">Shop</h1>
                <img src={image1} alt="" />
            </div>
            <div class="cards">
                <div class="words">
                    <li>Categories</li>
                    <li>Body Lotion11 product</li>
                    <li>Computer Gadget33 products</li>
                    <li>Electronics55 products</li>
                    <li>Fashion33 products</li>
                    <li>General11 product</li>
                    <li>Shoes22 products</li>
                    <li>Sports33 products</li>
                    <li>Watch11 product</li>
                    <li>Woman Clothes(3)</li>
                </div>
                <div>
                <div class="producttitle">
                     <div><h3>Showing 1–9 of 13 results</h3></div>
                     <div><select id="fruits" name="fruits">
                            <option value="All Categories">All Categories</option>
                            <option value="banana">Banana</option>
                            <option value="grape">Grape</option>
                            <option value="orange">Orange</option>
                          </select>
                          <TfiMenuAlt /></div>
                          <PiDotsNineBold />
                </div>
                <div class="product">
                    {products.map((product, index) => (
                        <div key={index}>
                            <img src={product.image} alt="" class="image" />
                            <div className="title"><h3>{product.title}</h3>
                                <h3>{product.price}</h3>
                                <div class="rating">
                                    {"★".repeat(product.ratings)}
                                    {"☆".repeat(5 - product.ratings)}
                                </div>
                                <div class="colors">
                                    {product.color.map((color, index) => (
                                        <span key={index} class="circle" style={{ backgroundColor:color }}></span>
                                    ))}</div>

                            </div>

                        </div>
                    ))}
                </div>
                </div>
            </div>


        </div>
    )
}
export default Shop