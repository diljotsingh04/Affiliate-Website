import React, { useState } from 'react'
import proItem from '../api.json'
import Allcards from "./Allcards";

const Card = () => {

    const [defItem, setdefItem] = useState(proItem);

    const filterItem = (category) =>{
        const updatedList = proItem.filter((curEle) =>{
            return curEle.category === category;
        });
        console.log(updatedList);
        setdefItem(updatedList);
    }

    return (
        <>
            <Allcards proItem={defItem}/>
            <label for="cars">Filter Items:</label>
            <select name="cars" id="cars">
                <option value="All"  onClick={() => setdefItem(proItem)}>All</option>
                <option value="Shoes"  onClick={() => filterItem("mugs")}>Shoes</option>
                <option value="Shirts">Shirts</option>
                <option value="Mugs">Mugs</option>
            </select>
            <ul>
                <li><button onClick={() => setdefItem(proItem)}>All</button></li>
                <li><button onClick={() => filterItem("mugs")}>Mugs</button></li>
                <li><button onClick={() => filterItem("shoes")}>Shoes</button></li>
                <li><button onClick={() => filterItem("shirt")}>Shirts</button></li>
            </ul>
        </>
    )
}

export default Card;
