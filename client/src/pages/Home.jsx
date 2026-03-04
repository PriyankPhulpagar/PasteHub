import { useEffect, useState } from "react";
import API from "../services/api";
import PasteCard from "../components/PasteCard";
import PasteForm from "../components/PasteForm";
import Loader from "../components/Loader";

function Home() {
  const [pastes, setPastes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPastes = async () => {
    try {
      const res = await API.get("/pastes");
      setPastes(res.data);
    } catch (error) {
      console.error("Error fetching pastes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPastes();
  }, []);

  const createPaste = async (data) => {
    try {
      await API.post("/pastes", data);
      fetchPastes();
    } catch (error) {
      console.error("Error creating paste:", error);
    }
  };

  const deletePaste = async (id) => {
    try {
      await API.delete(`/pastes/${id}`);
      fetchPastes();
    } catch (error) {
      console.error("Error deleting paste:", error);
    }
  };

  return (
    <div className="container mt-5">
      <PasteForm onSubmit={createPaste} buttonText="Create Paste" />

      {loading ? (
        <Loader />
      ) : (
        pastes.map((paste) => (
          <PasteCard
            key={paste._id}
            paste={paste}
            onDelete={deletePaste}
          />
        ))
      )}
    </div>
  );
}

export default Home;