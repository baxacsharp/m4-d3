import { Navbar, Nav, Form, FormControl, Button, Badge } from 'react-bootstrap'
import { useState } from 'react'
const MyBadge = (props) => {
    const [searchTerm, setSearchTerm] = useState("")
    return <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Button variant="primary">
            Profile <Badge variant="light">9</Badge>
            <span className="sr-only">unread messages</span>
        </Button>

    </Navbar>
}
export default MyBadge