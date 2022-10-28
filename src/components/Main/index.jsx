import React, { useEffect, useState, useRef, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import context from "../../context";
import "./stylemain.scss";
import Card from "../UI/Card/Card";
import Loader from "../UI/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar";

const Main = () => {
    // Languange
    const { language, lang } =
    useContext(context);
 
    const tt=language[lang]

    // console.log(lang)
   
 

  const [data, setData] = useState([]);

  const [countr, setCount] = useState([]);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");

  const baseUrl = "https://restcountries.com/v2/all";
  const searchUrl = "https://restcountries.com/v2/name";

  // async function getData() {
  //   const response = await fetch("https://restcountries.com/v2/all");
  //   const result = await response.json();
  //   // console.log(data);
  //   setData(result);
  // }



  async function getAllData() {
    const response = await fetch(baseUrl);
    const result = await response.json();
    setData(result);
  }

  const searchData = async (text) => {
    const response = await fetch(`${searchUrl}/${text}`);
    const result = await response.json();
    if (result.status === 404) {
      toast.error("404 Not Found");
    } else {
      setData(result);
      toast.success("E malades");
    }
  };

  // categoriyani yigib olamiz
  data.forEach((rgn) => {
    if (!category.includes(rgn.region)) {
      setCategory(category.push(rgn.region));
      // console.log(category)
    }
  });

  useEffect(() => {
    getAllData();
  }, []);

  const nameRefSearch = useRef();

  // const [input, setInput] = useState("");
  // nameRefSearch((e)=>{
  //   console.log(e.target.value);
  // })
  //boshida nechinchi page ligini belgilaydi
  const [currentPage, setCurrentPage] = useState(1);

  //bu bitta page da nechtadan malumot chiqishini belgilaydi
  const [totalPage, setTotalPage] = useState(10);

  //bu malumotlarni birinchi qismini aniqlaydi
  const firstPage = currentPage * totalPage;

  //malumotni oxirgi qismini aniqlaydi
  const lastPage = firstPage - totalPage;

  //bunda api dan kelayotga malumotlarni kerakli qismlarga ajratib nusxalab olyapmiz
  const lastData = data.slice(lastPage, firstPage);

  const [loading, setLoading] = useState(false);

  const paginate = (id) => {
    setCurrentPage(id);
  };

  //category render
  async function categoryData(region) {
    const response = await fetch(
      `https://restcountries.com/v2/region/${region}`
    );
    const result = await response.json();
    setData(result);
  }
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(data.length / totalPage); i++) {
    pageNumber.push(i);
  }
  return (
    <>
      <section className="pt-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-4 col-md-6 col-sm-12 search_name_wrpp my-4">
              <div className="search_inpt d-flex align-items-center">
                <i className="fa-solid fa-magnifying-glass icon_search"></i>
                <input
                  ref={nameRefSearch}
                  type="text"
                  placeholder={tt.nameSearchPlaceholder}
                  className="form-control search_name"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    if (search.trim().length > 0) {
                      searchData(search);
                    }
                  }}
                />
              </div>
            </div>

            <div className="col-lg-8 col-md-6 col-sm-12 my-4">
              <select
                name="region"
                id="region"
                className="form-select region_search float-end shadow-3"
                onChange={(e) => {
                  categoryData(e.target.value);
                }}
              >
                <option selected disabled >
                  {tt.regionPlaceholder}
                </option>
                {category.map((cat) => {
                  return <option >{cat}</option>;
                })}
              </select>
              {/* <div className="search_region_wrapp d-flex align-items-center justify-content-end">
                <div className="region_sct mb-3">
                 
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="cards_wrapp d-flex flex-wrap justify-content-around">
            {data.length > 0 ? (
              lastData.map((cnt, i) => {
                return <Card key={cnt.name} item={cnt} />;
              })
            ) : (
              <Loader key={""} />
            )}
          </div>
        </div>
        {/* paginate elements */}
        <div className="container mt-5 mb-5 d-flex justify-content-center">
          <div className="pagenation_wrapp mx-auto mt-5 mb-5">
            <nav aria-label="...">
              <ul className="pagination pagination-sm d-flex flex-wrap">
                {pageNumber.map((pageEl) => {
                  return (
                    <li className="page-item  rounded-5 p-1 mx-1 my-2" onClick={() => paginate(pageEl)}>
                      <a className="page-link" href="#">
                        {pageEl}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <ToastContainer key={""} />
    </>
  );
};

export default Main;

