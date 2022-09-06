import {
  BrowserRouter as Router,
  Routes,
  link,
  Route, Redirect,Navigate
} from "react-router-dom";

import useStateHook from "../src/components/stateHook/useStateHook";




function App() {
  return (
    <div>
      <div>
        <link to={useStateHook} style={{color:"black"}}>useStateHook</link>
      </div>




  <Router>
    <Routes>
      <Route path="/useStateHook" element={<useStateHook />} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
