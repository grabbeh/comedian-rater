import Button from '../components/button'
import Container from '../components/container'
import Header from '../components/header'
import Link from 'next/link'

const Index = () => (
  <Container>
    <div className='space-y-10'>
      <Header>Comedian rater</Header>
      <div className='flex justify-between'>
        <Button>
          <Link href='/random'>
            <a>Rate</a>
          </Link>
        </Button>
        <Button>
          <Link href='/results'>
            <a>Results</a>
          </Link>
        </Button>
      </div>

      <div className='h-10 mt-4 bg-green-500'></div>
      <div className='h-10 mt-4 bg-blue-500'></div>
      <div className='h-10 mt-4 bg-purple-500'></div>
      <div className='h-10 mt-4 bg-red-500'></div>
      <div className='h-10 mt-4 bg-yellow-500'></div>
    </div>
  </Container>
)

export default Index
