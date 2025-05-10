import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'
import { useEffect, useState } from 'react'
import {
  useGetActionGameQuery,
  useGetFightGameQuery,
  useGetRpgGameQuery,
  useGetSimulationGameQuery,
  useGetSportGameQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao } = useGetActionGameQuery()
  const { data: gamesEsportes } = useGetSportGameQuery()
  const { data: gamesLuta } = useGetFightGameQuery()
  const { data: gamesRpg } = useGetRpgGameQuery()
  const { data: gamesSimulacao } = useGetSimulationGameQuery()

  if (gamesAcao && gamesEsportes && gamesLuta && gamesRpg && gamesSimulacao) {
    return (
      <>
        <ProductsList
          games={gamesAcao}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={gamesEsportes}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={gamesLuta}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductsList games={gamesRpg} title="RPG" background="gray" id="rpg" />
        <ProductsList
          games={gamesSimulacao}
          title="Simulação"
          background="black"
          id="simulation"
        />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Categories
