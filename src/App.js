import './App.css';
import { CommentBlock } from './components/CommentBlock'

const comments = [
    {
        text: 'Hot Stuff!',
        created: '11:00 26.03.2022',
        authorName: 'Vasya Pupkin',
        authorImage: 'https://cdn.promodj.com/afs/ff76b55b804c8b9cbbed5a68b82609a111%3Aresize%3A440x732%3Asame%3A37cac4'
    },
    {
        text: 'Hot Stuff 2!',
        created: '11:00 26.03.2022',
        authorName: 'Almas',
        authorImage: 'https://cdn.promodj.com/afs/ff76b55b804c8b9cbbed5a68b82609a111%3Aresize%3A440x732%3Asame%3A37cac4'
    },
    {
        text: 'Hot Stuff 3!',
        created: '11:00 26.03.2022',
        authorName: 'Vasya Pupkin',
        authorImage: 'https://cdn.promodj.com/afs/ff76b55b804c8b9cbbed5a68b82609a111%3Aresize%3A440x732%3Asame%3A37cac4'
    },
]

function App() {
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
