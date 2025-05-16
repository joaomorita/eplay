import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: promocoes, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: emBreve, isLoading: isLoadingComingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={promocoes}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductsList
        games={emBreve}
        title="Em breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingComingSoon}
      />
    </>
  )
}

export default Home
