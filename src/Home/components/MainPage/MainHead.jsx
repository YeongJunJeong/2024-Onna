import "./MainHead.css";
import searchIcon from "/assets/SearchW.svg";
import bell from "/assets/Bell.svg";
import plus from "/assets/Plus.svg";
import LocationDrop from "./LocationDrop";
import image from "/assets/AppTitle.png";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const TitleImage = styled.img`
  width: 160px;
  margin-left: 16px;

  //TODO: 마운트 시 애니메이션 추가
`;

const SearchLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`;

export default function MainHead() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header-top">
        <TitleImage src={image} />
        <button>
          <img src={bell} alt="bell" />
        </button>
        {localStorage.getItem("role") == "TRAINER" && (
          <button onClick={() => navigate("/productreg")}>
            <img src={plus} alt="plus" />
          </button>
        )}
      </div>
      <div className="search-bar">
        <img src={searchIcon} alt="Search Icon" />
        <SearchLink to="/search">
          <input type="text" placeholder="어떤 운동을 찾나요?" readOnly />
        </SearchLink>
      </div>
      <LocationDrop />
    </header>
  );
}
