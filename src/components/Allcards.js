import React from 'react'
import './Card.css'

const Allcards = ({proItem}) => {
  return (
    <div className="cards">
            {
                proItem && proItem.map(product => {
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
                                    <p style={{"fontWeight": "bold", "fontSize": "18px"}}>{product.price}</p>
                                    <a className="btn" href="/">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
  )
}

export default Allcards
