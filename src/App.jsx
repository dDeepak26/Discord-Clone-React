import React from "react";
import {
  Home,
  Download,
  Nitro,
  Discover,
  Safety,
  Support,
  Blog,
  Careers,
} from "./pagesBarrel";

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Download />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <Home />
    </div>
  );
};

export default App;
