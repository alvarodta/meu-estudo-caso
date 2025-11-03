import { useParams, Link } from 'react-router-dom'
import products from '../products'

export default function ProductDetails() {
  const { id } = useParams()
  const product = products.find((p) => String(p.id) === String(id))

  if (!product) {
    return (
      <div className="wrap">
        <p>Produto não encontrado.</p>
        <Link to="/">Voltar</Link>
      </div>
    )
  }

  return (
    <div className="wrap">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p><strong>Preço:</strong> R$ {product.price.toFixed(2)}</p>
      <Link to="/">Voltar</Link>
    </div>
  )
}
