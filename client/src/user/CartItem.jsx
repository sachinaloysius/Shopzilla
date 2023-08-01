
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CartItem({ key, product, remove,load }) {
  const [total, setTotal] = useState();
  const [qtyvalue, setQtyValue] = useState(1);
  const { product_image, product_name, product_price, cart_id ,cart_quantity  } = product;

  useEffect(()=>{
        setTotal(product_price);
  },[]);

  const toUpdateTotal = (qty,price,id) => {
    const newQty = parseInt(qty);
    const newPrice = parseInt(price);

    updateQty(newQty,id)

    setQtyValue(newQty)
    setTotal(newQty*newPrice);

  };

  const updateQty=((qty,id)=>{
    var val = {
      qty:qty,
      id:id
    }
    axios.post("http://localhost:4777/CartUpdate/",val)
    .then((response)=>response.data)
    .then((data)=>{
      load();
    })
  })

  return (
    <div style={{ display: "flex", width: "90%", marginTop: "15px" }}>
      <div className="cart-Column">
        <img src={product_image} width="70px" alt="" />
      </div>
      <div className="cart-Column">{product_name}</div>
      <div className="cart-Column rupee">{product_price}</div>
      <div className="cart-Column">
        <input
          type="number"
          min={1}
          value={cart_quantity}
          onChange={(e) => toUpdateTotal(e.target.value, product_price,cart_id)}
        />
      </div>
      <div className="cart-Column">
        <button onClick={() => remove(cart_id)}>Remove</button>
      </div>
      <div className="cart-Column rupee">{total}</div>
    </div>
  );
}
