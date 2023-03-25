import React from "react";
import "./NotesList.scss";
import { parseISO, formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const NotesList = ({ notes }) => {
  const dispatch = useDispatch();

  if (!notes || notes.length === 0) {
    return <div className="not-found">No notes found</div>;
  }

  const sortedNotes = [...notes].sort(
    (a, b) => parseISO(b.noteDate) - parseISO(a.noteDate)
  );

  return (
    <div className="notes">
      <h5 className="fs-18 fw-8 text-uppercase notes-title">notes</h5>
      <div className="notes-list grid">
        {sortedNotes.map((note) => {
          return (
            <Link to={`/note/${note.noteId}`} key={note.noteId}>
              <div className="notes-item">
                <div className="notes-item-title">
                  {note.noteTitle.substring(0, 80) + "..."}
                </div>
                <div className="notes-item-body">
                  {note.noteContent.substring(0, 200) + "..."}
                </div>
                <div className="notes-item-btns flex align-center justify-between">
                  <div>
                    <div className="notes-item-date text-capitalize">
                      {formatDistanceToNow(parseISO(note.noteDate))} ago
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NotesList;
