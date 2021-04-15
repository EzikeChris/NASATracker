// import Usestate and UseEffect into our apps
/// import your components from components folder//
import { useState, useEffect } from "react";
import Map from "./Components/Map/Map";

function App() {
  // set our events and data
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  /// Import your/render components of your apps///
  return (
    <div>
      <Map />
    </div>
  );
}

export default App;
