import { Link } from "react-router-dom";
import { copyToClipboard } from "../utils/copyToClipboard";

function PasteCard({ paste, onDelete }) {
  return (
    <div className="card shadow-sm p-3 mb-3">
      <h5>{paste.title}</h5>
      <p>{paste.content}</p>

      <div className="d-flex gap-2">
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => copyToClipboard(paste.content)}
        >
          Copy
        </button>

        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() =>
            copyToClipboard(`${window.location.origin}/paste/${paste._id}`)
          }
        >
          Share
        </button>

        <Link
          to={`/edit/${paste._id}`}
          className="btn btn-outline-warning btn-sm"
        >
          Edit
        </Link>

        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => onDelete(paste._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default PasteCard;