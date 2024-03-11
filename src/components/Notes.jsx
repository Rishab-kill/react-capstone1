import {useState} from 'react';
export default function Notes () {
    const [notes, setNotes] = useState(localStorage.getItem("notes") ?? "");
    const handleChange = (e) => {
        setNotes(e.target.value);
        localStorage.setItem("notes",e.target.value)
    }
    return (
        <div
            style={{
                background:"#F1C758",
                width:"30vw",
                padding:"16px",
                marginTop:"12px",
            }}
        >
            <h1>Notes</h1>
            <textarea
            onChange={handleChange}
            value={notes}
                style={{
                    background:"#F1C758",
                    maxWidth:"30vw",
                    width:"30vw",
                    maxHeight:"40vh",
                    height:"40vh",
                    border:"none",
                }}
            >
            </textarea>
        </div>
    )
}