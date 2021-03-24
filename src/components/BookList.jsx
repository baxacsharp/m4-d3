import React from 'react'
import { Container, Row, Form, FormControl, Button, Badge } from 'react-bootstrap'
import books from '../data/history.json'
import SingleBook from './SingleBook'


class BookList extends React.Component {
    render() {
        return (

            <Container>

                <Row className="mt-5">
                    {
                        books.filter(item => item.title.toLowerCase().includes(this.props.searchValue.toLowerCase()))
                            .map(item => (
                                <SingleBook key={item.asin} book={item} />
                            ))
                    }
                </Row>
            </Container>
        )
    }
}
export default BookList