import React from 'react'
import BookList from './BookList'
import { Form, FormControl, Button } from 'react-bootstrap'

class FilterBookList extends React.Component {
    state = {
        searchField: "",
    }

    render() {
        return (
            <div>
                <div>
                    <Form inline className="ml-auto">
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2 "
                            value={this.state.searchField}
                            onChange={(e) => this.setState({ searchField: e.target.value })} />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </div>
                <div>
                    <BookList searchValue={this.state.searchField} />
                </div>
            </div>


        )
    }
}
export default FilterBookList