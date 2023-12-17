import { useSelector } from "react-redux"


export default function Navbar() {
    const { amount } = useSelector((state) => state.cart);
  return (
      <div className="nav">
          <ul>
              <li>home</li>
              <li>home</li>
              <li>home</li>
              <li>{ amount}</li>
          </ul>
    </div>
  )
}
