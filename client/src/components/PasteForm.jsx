import { useState, useEffect } from "react";

function PasteForm({ onSubmit, initialData = {}, buttonText }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (initialData.title) {
      setTitle(initialData.title);
      setContent(initialData.content);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div className="card p-4 shadow mb-4">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          className="form-control mb-3"
          rows="4"
          placeholder="Write your paste..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button className="btn btn-dark w-100">
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default PasteForm;