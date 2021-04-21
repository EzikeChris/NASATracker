// import Usestate and UseEffect into our apps
// import / working with the fetch api
/// import your components from components folder//
import { useState, useEffect } from "react";
import Map from "./Components/Map/Map";
import Loader from "./Components/loader/loader";

function App() {
  // set our events and data using useState
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  /// Import your/render components of your apps///
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eont.sci.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };
    fetchEvents();
  }, []);
  return <div>{!loading ? <Map eventData={eventData} /> : <Loader />}</div>;
}

export default App;
