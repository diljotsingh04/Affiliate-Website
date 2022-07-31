import React from 'react'
import './Card.css'
import Products from '../api.json'

const Card = () => {
    return (
        <div className="cards">
            {
                Products && Products.map(product => {
                    return (
                        <div className="card" key={product.id}>
                            <div className="imag">
                                <img src={product.image} alt="Loading.." className="i1" />
                            </div>
                            <div className="othInfo">
                                <div className="info">
                                    <p>{product.description}</p>
                                    
                                </div>
                                <div className="buyNow">
                                    {/* <a className="btn" href="#">Add to Cart</a> */}
                                    <p style={{"font-weight": "bold", "font-size": "18px"}}>{product.price}</p>
                                    <a className="btn" href="/">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
    // return (
    // <div className='cards'>
    //     <div className="card">
    //         <div className="imag">
    //             <img src="https://picsum.photos/400/300" alt="Loading.." className="i1"/>
    //         </div>
    //         <div className="othInfo">
    //             <div className="info">
    //                 <p>Lorem Lipsum dolor sit amet consec tetur ad ipisicing elit. Minus rem quidem vero perferendis modi voluptatem molestias quis, dolor soluta earum Lorem ipsum dolor sit amet consect etur pe rspiciatis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima autem quis unde delectus reprehenderit, harum perspiciatis quisquam culpa iste odio.</p>
    //             </div>
    //             <div className="buyNow">
    //                 {/* <a className="btn" href="#">Add to Cart</a> */}
    //                 <a className="btn" href="/">Buy Now</a>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // )
}

export default Card
