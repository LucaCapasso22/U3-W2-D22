import { Container } from 'react-bootstrap'

const Welcome = () => {
  return (
    <Container>
      <div className="jumbotron">
        <h1 className="display-4 text-danger fw-bold mt-3 ">EpicBooks.</h1>
        <hr className="my-4" />
        <p className="lead fw-bold text-secondary fs-5">
          The Worst Website for Shopping Books!
        </p>
      </div>
    </Container>
  )
}
export default Welcome
