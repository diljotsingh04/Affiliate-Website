import React, { useState } from 'react'
import proItem from '../api.json'
import Allcards from "./Allcards";

const Card = () => {
    //use state
    const [defItem, setdefItem] = useState(proItem);

    // filter function
    const filterItem = (category) =>{
        

        const updatedList = proItem.filter((curEle) =>{
            return curEle.category === category;
        });
        setdefItem(updatedList);
    }

    const getItem = () =>{
        
        var e = document.getElementById("filItem");
        // var value = e.value;
        var text = e.options[e.selectedIndex].text;
        
        // console.log(text.toLowerCase());

        if(text.toLowerCase() === 'all'){
            setdefItem(proItem)
        }
        else{
            filterItem(text.toLowerCase());
        }
    }

    return (
        <>
            <div className="filItem">
                <label htmlFor="cars">Filter Items: &nbsp;</label>
                <select name="cars" id='filItem' onChange={()=> getItem()}>
                    <option>All</option>
                    <option>Shoes</option>
                    <option>Shirt</option>
                    <option>Mugs</option>
                </select>
            </div>


            <Allcards proItem={defItem}/>

            {/* rejected list*/}
            {/* <ul>
                <li><button onClick={() => setdefItem(proItem)}>All</button></li>
                <li><button onClick={() => filterItem("mugs")}>Mugs</button></li>
                <li><button onClick={() => filterItem("shoes")}>Shoes</button></li>
                <li><button onClick={() => filterItem("shirt")}>Shirts</button></li>
            </ul> */}
        </>
    )
}

export default Card;
