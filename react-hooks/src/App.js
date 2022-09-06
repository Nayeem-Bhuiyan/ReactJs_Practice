import {
  Route, Routes
} from "react-router-dom";

import useStateHook from "../src/components/stateHook/useStateHook";




function App() {
  return (
    <div>
      <div>
        <link to={useStateHook} style={{color:"black"}}>useStateHook</link>
      </div>




      <>
      <Routes>
        <Route path="/" element={<useStateHook />}>
        </Route>
      </Routes>
    </>
    </div>
  );
}

export default App;
