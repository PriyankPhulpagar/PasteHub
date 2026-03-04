import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import PasteForm from "../components/PasteForm";
import Loader from "../components/Loader";

function EditPaste() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [paste, setPaste] = useState(null);

  useEffect(() => {
    API.get(`/pastes/${id}`).then((res) => {
      setPaste(res.data);
    });
  }, [id]);

  const updatePaste = async (data) => {
    await API.put(`/pastes/${id}`, data);
    navigate("/");
  };

  if (!paste) return <Loader />;

  return (
    <div className="container mt-5">
      <PasteForm
        onSubmit={updatePaste}
        initialData={paste}
        buttonText="Update Paste"
      />
    </div>
  );
}

export default EditPaste;