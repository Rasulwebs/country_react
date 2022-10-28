import { useState, useRef } from "react";
import context from "./context";

import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main/index";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import language from "./components/lang/language";

function App() {
  const [lang, setLang] = useState("uz");
  // const [count, setCount] = useState(0);
  // const [data, setData] = useState([]);
  // const [category, setCategory] = useState([]);
  // const baseUrl = "https://restcountries.com/v2/all";
  // const nameUrl = "https://restcountries.com/v2/name/";

  // async function getAllData() {
  //   const response = await fetch(baseUrl);
  //   const result = await response.json();
  //   setData(result);
  // }

  // // categoriyani yigib olamiz
  // data.forEach((rgn) => {
  //   if (!category.includes(rgn.region)) {
  //     setCategory(category.push(e.region));
  //   }
  // });

  // useEffect(() => {
  //   getAllData();
  // }, []);
  // const nameRefSearch = useRef();
  // const [input, setInput] = useState("");

  const mainDark = useRef();
  return (
    <>
      <context.Provider value={{ language, lang, setLang }}>
        <Navbar data={language} lang={lang} setLang={setLang} ke={""}/>
        <main ref={mainDark}>
          <Routes>
            <Route path="/" element={<Main />}></Route>
          </Routes>
        </main>
        <Footer />
      </context.Provider>
    </>
  );
}

export default App;
