import Header from "./components/Header/Header"; 
import Footer from "./components/Footer/Footer";
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/category" element={<Category/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;