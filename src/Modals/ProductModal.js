import axios from "axios";
import { useState,useRef, useContext } from "react";
import { LoginContext } from "../App";


export const ProductModal =({open,onClose,itemName, itemPrice,itemPic}) =>{
    const[amount, setAmount] = useState(null);
    const id = useContext(LoginContext);
    const price = useRef();
    const item = useRef();
   
    const MyCart = async()=>{
        const response = axios.get(`http://localhost:5047/api/Reg/MyCart?id=${id}`)
    }
   
    if(!open) return null;
    return(
       <div className="modalContainer">
        <form className="formItems">
            <div>
                <img src={`data:image/jpeg;base64,${itemPic}`} height={300} width={300} style={{marginTop:40}}/>
            </div>
           
            <h3>{itemName}</h3><br/>
            <label>Item Price</label>
            <input type="text" size="3" value={itemPrice}/><br/><br/>
            <label>Order Quantity</label>
            <input type="text" size="3" onChange={event =>setAmount(event.target.value)}/><br/><br/>
            <div>
                <button className="modalButtons">Order</button>
                <button onClick={onClose} style={{marginLeft:40}} className="modalButtons">Close</button>
            </div>
                
        </form> 

       </div>
    )
}