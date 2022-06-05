import { useState, useEffect } from "react";
import Loading from "./components/loading/Loading.comp";
import Tours from "./components/tours/Tours.comp";
import "./App.css";

function App() {
  const url = "https://course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  useEffect(() => {
    setLoading(true);
    fetchTours();
  }, []);

  const fetchTours = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTours(data);
    setLoading(false);
  };

  let element = "";
  if (loading) {
    element = <Loading />;
  } else if (tours.length === 0) {
    element = (
      <div className="container">
        <h1>No tours left</h1>
        <button className="btn" onClick={() => fetchTours()}>
          Refresh
        </button>
      </div>
    );
  } else {
    element = (
      <>
        <Tours tours={tours} removeTour={removeTour} />
      </>
    );
  }

  return element;
}

export default App;
