import React from "react";
import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../UI/Loader/Loader";

const InfoWindow = () => {
  const { cname } = useParams();
  const back = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setload] = useState(false);

  const fetchData = async (cname) => {
    const response = await fetch(
      `https://restcountries.com/v2/name/${cname}`
    );
    const result = await response.json();
    setCountry(result);
console.log(result)
    setload(true);
  };

  useEffect(() => {
    fetchData(cname);
  }, [cname]);

 
  return <>
  
  <div className="row">
    <button className="btn btn-danger" onClick={()=>back(-1)}>Go back</button>
  </div>


  <div className="container">
    <div className="row">
        <div className="col-lg-12">
            {
                loading ? <>
                <img src={country[0].flags.png} alt="" className="mx-auto d-block my-5"/>

                <div className="row">
                    <div className="col-lg-12 ">
                        <div className="row">
                            <div className="col-lg-6 col-lg-6 col-sm-12">
                               <p className="mt-5 fs-3"><strong className="text-primary ">Name:</strong >{country[0].name}</p>
                               <p className="mt-5 fs-3"><strong className="text-primary ">Capital:</strong >{country[0].capital}</p>
                               <p className="mt-5 fs-3"><strong className="text-primary ">Region:</strong >{country[0].region}</p>
                               <p className="mt-5 fs-3"><strong className="text-primary ">Nativename:</strong >{country[0].nativeName}</p>
                               <p className="mt-5 fs-3"><strong className="text-primary ">Timezone:</strong >{country[0].timezones}</p>
                            </div>
                            <div className="col-lg-6 col-lg-6 col-sm-12">
                               <p className="mt-5 fs-3"><strong className="text-primary ">Numer Code:</strong >{country[0].numericCode}</p>
                               <p className="mt-5 fs-3"><strong className="text-primary ">Currency:</strong >{country[0].currencies[0].symbol}</p>
                               <p className="mt-5 fs-3"><strong className="text-primary ">Language:</strong >{country[0].languages[0].name}</p>
                               <p className="mt-5 fs-3"><strong className="text-primary ">Population:</strong >{country[0].population}</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
                </> : <>
                <Loader key={""} />
                </>
            }
    {/* <img src={country[0].flags.png} alt="" /> */}
        </div>
    </div>
  </div>
  
  </>;
};

export default InfoWindow;
