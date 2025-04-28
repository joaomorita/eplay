import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkItem, LinkCart } from './styles'

import logo from '../../assets/logo.svg'
import carrinho from '../../assets/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="EPLAY Logo" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - Produto(s)
      <img src={carrinho} alt="Carrinho de compras" />
    </LinkCart>
  </HeaderBar>
)

export default Header
