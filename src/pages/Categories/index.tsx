import ProductsList from '../../components/ProductsList'
import {
  useGetActionGameQuery,
  useGetFightGameQuery,
  useGetRpgGameQuery,
  useGetSimulationGameQuery,
  useGetSportGameQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao, isLoading: isLoadingAction } =
    useGetActionGameQuery()
  const { data: gamesEsportes, isLoading: isLoadingSports } =
    useGetSportGameQuery()
  const { data: gamesLuta, isLoading: isLoadingFight } = useGetFightGameQuery()
  const { data: gamesRpg, isLoading: isLoadingRpg } = useGetRpgGameQuery()
  const { data: gamesSimulacao, isLoading: isLoadingSimulation } =
    useGetSimulationGameQuery()

  return (
    <>
      <ProductsList
        games={gamesAcao}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={gamesEsportes}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={gamesLuta}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={gamesRpg}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        games={gamesSimulacao}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
