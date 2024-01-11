import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../store/slices/productSlice"

const ButtonQuantity = ({ productId, quantity }) => {
  const dispatch = useDispatch()

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setQty(event.target.value)
    }
  }

  const handleClick = (operation) => {
    let qty = quantity
    if (operation == "+") {
      qty += 1
    } else if (operation == "-") {
      if (qty == 0) {
        qty = 0
      } else {
        qty -= 1
      }
    }
    const payload = {
      qty: qty,
      id: productId,
    }
    dispatch(addToCart(payload))
  }

  return (
    <>
      <div className="w-fit gap-1 flex items-center">
        <button onClick={() => handleClick("-")}>-</button>
        <input className="w-10 text-center border-2 border-slate-200 rounded-lg text-sm" type="text" onKeyDown={handleKeyDown} value={quantity} onChange={(event) => event.target.value} />
        <button onClick={() => handleClick("+")}>+</button>
      </div>
    </>
  )
}

export default ButtonQuantity
