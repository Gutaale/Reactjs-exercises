import React, { useState } from 'react'

const ShoppingCart = () => {
    const [products, setProducts] = useState([])
    const [titleInput, setTitleInput] = useState('')
    const [priceInput, setPriceInput] = useState('');
    const addTotheCart=()=>{
        if(titleInput!=="" && priceInput!==''){
            const newProduct={
                id:crypto.randomUUID(),
                name:titleInput,
                price:parseFloat(priceInput),
                quantity:1
            }
            setProducts([...products, newProduct]);
            setTitleInput("")
            setPriceInput("")
        }
    }

    const increasQuantity=(id)=>{
        const updatedProducts = products.map(product => product.id === id?  
            {...product, quantity: product.quantity + 1 }: product);
        setProducts(updatedProducts);
            console.log(id);
        }
    const decreasQuantity=(id)=>{
        const updatedProducts = products.map(product => product.id === id && product.quantity>1?  
            {...product, quantity: product.quantity - 1 }: product);
                 setProducts(updatedProducts);
    }

    const totalPrice = products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
  return (
    <div>
        <h2>Add a product</h2>
            <input type="text" placeholder="Product Name" value={titleInput}  onChange={(e)=>{setTitleInput(e.target.value)}}/>
            <input type="number" placeholder="Price" min="0" value={priceInput} onChange={(e)=>{setPriceInput(e.target.value)}}/>
            <button onClick={addTotheCart}>Add to Cart</button>
            {
                products.length > 0 ?(
                    <div>
                        <h2>Products in Cart</h2>
                    
                 <ul>
                    {
                        products.map(product=>(
                        
                                <li key={product.id}> <strong>{product.name}</strong> - ${product.price.toFixed(2)}
                                <div>
                                    <button onClick={()=>increasQuantity(product.id)} 
                                        style={
                                                {
                                                    backgroundColor:"#194e19", 
                                                    color:'white', 
                                                    fontSize:"1.2rem",
                                                    border:"none", 
                                                    padding:"0 10px",
                                                    borderRadius:"3px", 
                                                    fontWeight:"bold" 
                                                }
                                            }
                                        >+</button>
                                        {product.quantity}
                                    <button onClick={()=>decreasQuantity(product.id)} 
                                    style={
                                            {
                                                backgroundColor:"#f69732", 
                                                color:'white', 
                                                fontSize:"1.2rem",
                                                border:"none", 
                                                padding:"0 10px",
                                                borderRadius:"3px", 
                                                fontWeight:"bold"
                                            }
                                            }
                                            >-</button>
                                </div>
                                <button onClick={()=>{setProducts(products.filter(p=>p.id!==product.id))}} style={{backgroundColor:"#0570ce", marginTop:"10px",border:"none", padding:"10px", borderRadius:"3px",color:'white', fontSize:"1.2rem", fontWeight:"bold"}}>Remove</button>
                                </li>
                            
                        ))
                    }
               </ul>
                <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
                </div>
                    ): <h2>The Cart is empty</h2>
                        }
            

    </div>
  )
}

export default ShoppingCart