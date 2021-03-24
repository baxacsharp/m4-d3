import { Alert } from 'react-bootstrap'
const WarningSign = (props) => {
    return <Alert variant="danger">
        <Alert.Heading>Awws ERROR</Alert.Heading>
        <p>
            {props.text}
        </p>
        <hr />

    </Alert>

}




export default WarningSign