import { basicFetcher as fetcher } from '../utils/fetcher'
import Container from '../components/container'
import Header from '../components/header'
import Form from '../components/form'

const Random = props => {
  return (
    <Container>
      <Header>{props.data.comedian}</Header>
      <div className='mt-4'>
        <iframe
          src={`https://youtube.com/embed/${props.data.video[0].id}`}
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />
      </div>
      <Form comedian={props.data.comedian} />
    </Container>
  )
}

export async function getServerSideProps () {
  const data = await fetcher('/get-random-comedian')
  return { props: { data } }
}

export default Random
