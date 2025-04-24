import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/resident.png'
import diablo from '../../assets/diablo.png'
import zelda from '../../assets/zelda.png'
import starWars from '../../assets/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250.00'],
    image: resident
  },
  {
    id: 2,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo       ',
    system: 'Windows',
    infos: ['10%', 'R$ 250.00'],
    image: diablo
  },
  {
    id: 3,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    title: 'The Legend of Zelda - TOK',
    system: 'Switch ',
    infos: ['10%', 'R$ 250.00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star Wars Jedi Survivor',
    system: 'Windows',
    infos: ['10%', 'R$ 250.00'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['17/05'],
    image: resident
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo       ',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    title: 'The Legend of Zelda - TOK',
    system: 'Switch ',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 8,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star Wars Jedi Survivor',
    system: 'Windows',
    infos: ['17/05'],
    image: starWars
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
