/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux"
import { dec, inc } from "../features/cartslice";



export default function Cart({ id,title, price, img, amount }) {
    
    const dispatch = useDispatch();
    
  return (
      <div>
          <h2>{title}</h2>
          <img src={img} alt="" />
          <h2>{price}</h2>
          <p>{amount}</p>
          <button onClick={() => dispatch(dec({id}))}>-</button>
          <button onClick={() => dispatch(inc({id}))}>+</button>
          <button>del</button>
    </div>
  )
}
