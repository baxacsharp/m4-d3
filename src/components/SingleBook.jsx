import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import books from '../data/history.json'
// import SelectedBook from './SelectedBook'
class Home extends React.Component {
    state = {
        selectedBooks: null
    }
    render() {
        return (
            <Container>
                <Row >
                    {
                        books.map(book => (
                            <Card style={{ width: '18rem' }} key={book.asin} className='col col-sm-6 col-md-4 col-lg-3 mt-3' >
                                <Card.Img variant="top" src={book.img} />
                                <Card.Body>
                                    <Card.Title>book.title</Card.Title>
                                    <Card.Text>
                                        {book.price}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => this.setState({
                                        selectedBooks: book
                                    })}>Buy</Button>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </Row>
                {/* <Row className="justify-content-center mt-5">
                    <Col xs={8}>
                        <SelectedBook selectedBooks={this.selectedBooks.state} />
                    </Col>
                </Row> */}
            </Container>
        )
    }
}
export default Home