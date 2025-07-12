
import Button from '@mui/material/Button';

function Modal({ title, content }) {

    return (
        <div style={{ border: '1px solid gray', padding: '20px', backgroundColor: 'lightgray' }}>
            <h2>{title}</h2>
            <p>{content}</p>
            <Button variant="contained">
                Contained
            </Button>
        </div>

    );

}

export function App() {
    return <Modal title="React te dice:" content="Este es un mensaje importante." />;
}

export default App;