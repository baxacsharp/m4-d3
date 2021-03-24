import { Navbar, Nav, Form, FormControl, Button, Badge } from 'react-bootstrap'
const MyBadge = (props) => {
    return <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 " />
            <Button variant="outline-info">Search</Button>
            <Button variant="primary" className='ml-2'>
                {props.text} <Badge variant="light">9</Badge>
                <span className="sr-only">unread messages</span>
            </Button>
        </Form>
    </Navbar>
}
export default MyBadge