import { useState } from "react";
export default function NoteForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, content);
    }

    return (
        <div className="flex flex-row w-[70%] border-2">
            <h1>NoteForm</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">
                    Title
                </label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="content">
                    content
                </label>
                <input type="text" id="content" value={content} onChange={(e) => setContent(e.target.value)} />
                <button type="submit">Add Note</button>
            </form>
        </div>
    )
}