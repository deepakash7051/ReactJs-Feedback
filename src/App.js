function App() {
    const title = "Blog Title";
    const body = "This is blog title";
    const comments = [
        {id:1, text:'Comment one'},
        {id:2, text:'Comment two'},
        {id:3, text:'Comment three'},
        {id:4, text:'Comment four'},
    ]
    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{body}</p>
            <div className='comments'>
                <h3>Comments ({comments.length})</h3>
                <ul>
                    {comments.map((comment, index)=> (
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App
