import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function ViewPaste() {
  const { id } = useParams();
  const [paste, setPaste] = useState(null);

  useEffect(() => {
    API.get(`/pastes/${id}`).then((res) => setPaste(res.data));
  }, [id]);

  if (!paste) return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h3>{paste.title}</h3>
        <p>{paste.content}</p>
      </div>
    </div>
  );
}

export default ViewPaste;