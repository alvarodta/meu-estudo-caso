import { Link } from 'react-router-dom'
import products from '../products'

export default function Home() {
  return (
    <div className="wrap">
      <h1>Lista de Produtos</h1>
      <ul className="lista">
        {products.map((p) => (
          <li key={p.id} className="item">
            <div className="titulo">{p.name}</div>
            <div className="acoes">
              <Link to={`/product/${p.id}`}>Ver detalhes</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
