'use client'
import { useState } from 'react'

export default function AddToCartButton() {
  const [count, setCount] = useState(0)

  const handleAddToCart = () => {
    setCount(state=>state+1)
  }

  return (
    <button onClick={handleAddToCart}>
      Adicionar ao carrinho:{
        count > 0 && ` (${count})`
      }
    </button>
  )
}
