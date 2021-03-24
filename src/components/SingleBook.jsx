import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
// import SelectedBook from './SelectedBook'
class SingleBook extends React.Component {

    render() {
        return (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-5">
                <Card>
                    <Card.Img variant="top" src={this.props.book.img} className='img-fluid'
                        style={{ height: "300px" }}
                    />
                    <Card.Body>
                        <Card.Title>{this.props.book.title.slice(0, 15)}</Card.Title>
                        <Card.Text>
                            ${this.props.book.price}
                        </Card.Text>
                        <Button variant="primary">Buy</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}
export default SingleBook