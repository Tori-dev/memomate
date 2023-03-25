import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SingleNotePage.scss";
import { getAllNotes, removeNote } from "../../features/notes/noteSlice";
import { FiEdit, FiDelete, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineDelete } from "react-icons/ai";


const SingleNotePage = () => {
  const { id } = useParams();
  const notes = useSelector(getAllNotes);
  let tempNote = notes.filter((note) => note.noteId === id);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleDeleteNote = () => {
    dispatch(removeNote(id));
    navigate("/note");
    toast.success("Note Deleted")
  };

  return (
<section>

      <div className="options">
        <Link to="/note">
          <FiArrowLeft />
        </Link>
        <span className="option">
          <span>
            <FiEdit />
            Edit
          </span>
          <button onClick={handleDeleteNote}>
            <AiOutlineDelete />
            Delete
          </button>
          <ToastContainer />
        </span>
      </div>
    <div className="note-single-section px-4">
      <div className="note-single-title">
        <h2 className="my-2 fs-20">{tempNote[0].noteTitle}</h2>
      </div>

      <div className="py-4">
        <pre>{tempNote[0].noteContent}</pre>
      </div>
    </div>
</section>
  );
};

export default SingleNotePage;
