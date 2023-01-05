import React from "react";
import "./Manager.css";
import { useNavigate, useLocation } from "react-router-dom";
import { ImBooks } from "react-icons/im";
import { AiFillFileAdd } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { RiSlideshowFill } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import Header from "../CustomerPage/components/Header";
export default function Manager() {
  let nav = useNavigate();
  const location = useLocation();
  return (
    <div className="Manager">
      <Header cartid={5656} />
      <nav>
        <ul>
          <li onClick={() => nav("/addnewbook", { state: location.state })}>
            <h2>
              <AiFillFileAdd />
            </h2>{" "}
            <span>Add new book</span>
          </li>

          <li onClick={() => nav("/menu-items", { state: location.state })}>
            <h2>
              <RiSlideshowFill />
            </h2>{" "}
            <span>Show orders</span>
          </li>

          <li onClick={() => nav("/CustomerTable", { state: location.state })}>
            <h2>
              <BsPeopleFill />
            </h2>{" "}
            <span>Show customers</span>
          </li>

          <li onClick={() => nav("/menu-items", { state: location.state })}>
            <h2>
              <TbReportAnalytics />
            </h2>{" "}
            <span>Reports</span>
          </li>
        </ul>
      </nav>
      <h1 className="Welcome">
        Welcome, <span>Mahmoud Fathallah</span>
        {/* {location.state.userName} */}
      </h1>
      {/* <div className="admin-container">
      <h1 className="Logo2">Eat Nine</h1>
      <div className="side-bar">
        <div className="side-bar-link active">Dash Board</div>
        <div
          className="side-bar-link"
          onClick={() => nav("./menu-items", { state: location.state })}
        >
          Menu Items
        </div>
        <div
          className="side-bar-link"
          onClick={() => nav("./delivery", { state: location.state })}
        >
          Delivery men
        </div>
      </div>
      <div className="admin-main">
        <div className="CHeader">
          <p>
            Welcome, <span> {location.state.name}</span>{" "}
          </p>
        </div>
      </div>
    </div> */}
    </div>
  );
}
