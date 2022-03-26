import './App.css';
import { CommentBlock } from './components/CommentBlock'
import {useState} from "react";

function App() {
    const [comments, setComments] = useState([])


    fetch('https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/comments.json')
        .then((response) => {
            return response.json()
        }).then((data) => {
            setComments(data);
            return data
        })

    return (
        <div className="App">
            Comments Block
            {comments.map((comment) =>
                <CommentBlock comment={comment} />
            )}
        </div>
    );
}

export default App;
