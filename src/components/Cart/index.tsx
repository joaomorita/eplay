import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Button from '../Button'
import Tag from '../Tag'
import { close, remove } from '../../store/reducers/cart'
import * as S from './styles'
import { getTotalPrice, parseToBrl } from '../../utils'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItemFromCart = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{parseToBrl(item.prices.current)}</span>
                  </div>
                  <button
                    onClick={() => removeItemFromCart(item.id)}
                    type="button"
                  />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>{items.length} Jogos no carrinho</S.Quantity>
            <S.Prices>
              {parseToBrl(getTotalPrice(items))}{' '}
              <span>Em até 6x sem juros</span>
            </S.Prices>
            <Button
              title="Clique aqui para continuar com a compra"
              type="button"
              onClick={goToCheckout}
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio! Adicione um produto para continuar
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
