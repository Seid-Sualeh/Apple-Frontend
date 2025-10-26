import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./page/Home/Main";
import Mac from "./page/Mac/Mac";
import Iphone from "./page/Iphone/iphone";
import Ipad from "./page/Ipad/Ipad";
import Watch from "./page/Watch/Watch";
import TV from "./page/TV/TV";
import Music from "./page/Music/Music";
import Support from "./page/Support/Support";
import Cart from "./page/Cart/Cart";
import { Route, Routes } from "react-router";
import Shared from "./Components/Shared/SharedLayOut";

import Four04 from "./page/Four04/Four04";

import Product from "./Components/Product";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route path="/" element={<Main />} />
          <Route path="mac" element={<Mac />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="iphone/:id" element={<Product />} />
         
          <Route path="ipad" element={<Ipad />} />
          <Route path="watch" element={<Watch />} />
          <Route path="tv" element={<TV />} />
          <Route path="music" element={<Music />} />
          <Route path="support" element={<Support />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
