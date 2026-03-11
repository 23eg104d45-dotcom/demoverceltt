// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from "./Register";
// import Home from "./Home";

// function App() {
//   return (
//     <BrowserRouter>
//       <h1>Iam APP</h1>

//       <Routes>
//         <Route path="/" element={<Register />} />
//         <Route path="/reg" element={<Register />} />
//         <Route path="/h" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";

function App() {
  return (
    <Router>
      <h1>Iam APP</h1>

      <Routes>
        
        <Route path="/reg" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;