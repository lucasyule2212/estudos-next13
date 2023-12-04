interface ProductProps{
  params: {
    data:string[]
  }
}

export default async function Product({ params }: ProductProps) {
  await new Promise(resolve => setTimeout(resolve, 2500))
  const [productId, size, color] = params.data  
  
  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
    </div>
  )
}