import { Routes, Route } from "react-router-dom";

import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/Authentication/Authentication.component";


const Shop = () => {
  return (
    <div>
      <div>
        <h1>
          I am the shop
        </h1>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
      
    </Routes>
  );
};

export default App;
