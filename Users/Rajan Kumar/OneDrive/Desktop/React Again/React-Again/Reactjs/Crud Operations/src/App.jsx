import { BrowserRouter,Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Insert from "./pages/insert";
import Display from "./pages/display";
import Search from "./pages/search";
import SearchByName from "./pages/SearchByName";
import Update from "./pages/Update";
import EditData from "./pages/EditData";

const App=()=>{
  return(
    <>
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
               <Route index element={<Home/>}/>
               <Route path="home" element={<Home/>}/>
               <Route path="insert" element={<Insert/>}/>
               <Route path="display" element={<Display/>}/>
               <Route path="search" element={<Search/>}/>
               <Route path="searchbyname" element={<SearchByName/>}/>
               <Route path="update" element={<Update/>}/>
               <Route path="editdata" element={<EditData/>}/>
              </Route>
          </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;