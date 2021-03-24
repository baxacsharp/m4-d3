import { Figure } from 'react-bootstrap'

const SelectedBook = (props) =>
    props.selectedBooks ?

        <Figure>
            <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={props.selectedBooks.img}
            />
            <Figure.Caption>
                {props.selectedBooks.title}
            </Figure.Caption>
        </Figure>
        : <h1 style={{ display: "none" }}>Nothing Yet </h1>
export default SelectedBook
