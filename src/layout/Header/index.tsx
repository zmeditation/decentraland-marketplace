import React from "react";
import { HeaderStyle, StyledHeaderBtn } from "./HeaderStyle";
import logo_svg from "./../../assets/svg/logo.svg";
export default function Layout() {
  const classes = HeaderStyle();
  const [head_index, setHeaderIndex] = React.useState(1);
  const handleMarketPlace = () => {
    setHeaderIndex(1);
  };
  const handleBuilder = () => {
    setHeaderIndex(2);
  };
  const handleDocs = () => {
    setHeaderIndex(3);
  };
  const handleEvents = () => {
    setHeaderIndex(4);
  };
  const handleDAO = () => {
    setHeaderIndex(5);
  };
  const handleBlog = () => {
    setHeaderIndex(6);
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div style={{ position: "relative" }}>
            <div className={classes.headermenu_container}>
              <a>
                <img src={logo_svg} className={classes.logo} alt="symbol" />
              </a>

              <StyledHeaderBtn
                // disabled={head_index === 1}
                onClick={handleMarketPlace}
              >
                Marketplace
              </StyledHeaderBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
