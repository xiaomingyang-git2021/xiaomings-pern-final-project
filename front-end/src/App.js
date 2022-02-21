// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";


// COMPONENTS
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/books" element={<Index />} />
            <Route path="/books/new" element={<New />} />
            <Route path="/books/:id" element={<Show />} />
            <Route path="/books/:id/edit" element={<Edit />} />
            <Route path="/*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}



// import axios from "axios";
// import { useState, useEffect } from "react";
// const API = process.env.REACT_APP_API_URL;

// console.log(API);
// function App() {
//   const [days, setDays] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`${API}/test`)
//       .then(
//         (response) => {
//           setDays(response.data);
//         },
//         (error) => console.log("get", error)
//       )
//       .catch((c) => console.warn("catch", c));
//   }, []);
//   return (
//     <div>
//       <ul>
//         {days.map((day) => (
//           <li key={day.name}>{day.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default App;
