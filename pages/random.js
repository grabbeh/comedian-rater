import { basicFetcher as fetcher } from '../utils/fetcher'
import Container from '../components/container'
import Header from '../components/header'
import Form from '../components/form'

const Random = props => {
  return (
    <Container>
      <Header>{props.data.comedian}</Header>
      <Form comedian={props.data.comedian} />
    </Container>
  )
}

export async function getServerSideProps () {
  const data = await fetcher('/get-random-comedian')
  return { props: { data } }
}

export default Random
