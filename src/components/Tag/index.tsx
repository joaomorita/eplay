import { TagContainer } from './styles'

export type Props = {
  size?: 'smaill' | 'big'
  children: string
}

const Tag = ({ children, size = 'smaill' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
