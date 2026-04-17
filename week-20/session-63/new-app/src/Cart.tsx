import { useEffect, useState } from "react";
interface Item{
    id:number,
    name:string,
    price:number
}

function Cart(){
    const [cart,setCart] = useState<Item[]>([]);
    const [total,setTotal] = useState<number>(0);

    const products: Item[]=[
        {id:1,name:"Shoes",price:2000},
        {id:2,name:"T-Shirts",price:500},
        {id:3,name:"Watch",price:3000},
    ]
    // add items to the cart
    const addToCart= (item:Item)=>{
        setCart([...cart,item]);
        //setTotal(total+item.price);
    }
    // remove item from cart
    const removeFromCart= (id:number)=>{
        const newCart= cart.filter(item=>item.id!==id);
        setCart(newCart);
    }
    useEffect(()=>{
        const newTotal= cart.reduce((sum,item)=>sum+item.price,0);
        setTotal(newTotal);
    },[cart]);

    return(
        <div>
            <h2>Products</h2>
            {products.map((item)=>(
                <div key={item.id}>
                    <span>{item.name} - ₹{item.price}</span>
                    <button onClick={()=>addToCart(item)}>  Add</button>
                </div>
            ))}

            <h2>Cart</h2>
            {cart.map((item)=>(
                <div key={item.id}>
                    <span>{item.name} - ₹{item.price}</span>
                    <button onClick={()=>removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
            <h2>Total: ₹{total}</h2>
        </div>
    )

}
export default Cart;