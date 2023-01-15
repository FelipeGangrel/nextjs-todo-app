import * as S from './PageHeader.styles'

type PageHeaderProps = {
  title: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <S.PageHeader>
      <S.PageTitle>{title}</S.PageTitle>
    </S.PageHeader>
  )
}

export default PageHeader
