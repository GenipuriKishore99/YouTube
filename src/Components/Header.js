import { useDispatch } from "react-redux";
import { toggleOpen } from "../utils/ShowHide";
import { useEffect, useState } from "react";
import { searchApi } from "../utils/Constants";

export const Header = () => {
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion,setShowSuggestion]=useState(false);

  console.log(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      getApiSearch();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const getApiSearch = async () => {
    const data = await fetch(searchApi + search);
    const res = await data.json();
    setSuggestion(res[1]);
    // console.log(res)
  };

  const dispatch = useDispatch();

  const handlerData = () => {
    dispatch(toggleOpen());
  };
  return (
    <div>
      <header className="d-flex justify-content-between bg-dark text-white p-2 m-2 row">
        <div className="w-25 m-3 col-4">
          <img
            src="https://e7.pngegg.com/pngimages/124/176/png-clipart-hamburger-button-computer-icons-menu-minimalist-menu-angle-text.png"
            className="w-25 me-3 cursor-pointer"
            alt="logo"
            onClick={() => {
              handlerData();
            }}
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            alt="you"
            className="w-25"
          />
        </div>

        <div className="col-6">
          <input
            type="text"
            value={search}
            onFocus={()=>{setShowSuggestion(true)}}
            onBlur={()=>{setShowSuggestion(false)}}
            placeholder="Search"
            className="form-control"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button className="bi bi-search"></button>
        </div>
        {showSuggestion &&<div className="text-white  w-50 bg-secondary p-2 m-2">
          <ul className="">
            {suggestion.map((m) => {
              return (
                <li key={m.id}>
                  <span className="bi bi-search"></span>{m}
                </li>
              );
            })}
          </ul>
        </div>}
        <div className="col-2">
          <span className="bi bi-person"></span>
        </div>
      </header>
    </div>
  );
};
