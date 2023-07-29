import Ui from "./Ui";
import Card from "./Card";
import Footer from "./Footer";
import { useContext } from "react";
import { ThemeContext } from "../ContextApi/Context";
import { GrMenu } from "react-icons/gr";

import MenuItems from "../Menuitems";
import { useState } from "react";

const Landingpage = () => {
  const [click, setClick] = useState(false);

  const { state, toggleMenu } = useContext(ThemeContext);

  // console.log("From Landingpage",tasks)

  return (
    <>
      {/* {
        click?<h2 onClick={() => toggleMenu()} className="close">
        x
      </h2>:null
      }
      <GrMenu className="menu" onClick={setClick} /> */}

      {!click ? (
        <GrMenu className="menu" onClick={setClick} />
      ) : (
        <>
          {click ? (
            <h2 onClick={() => setClick(false)} className="close">
              x
            </h2>
          ) : null}
        </>
      )}

      <main
        className="mainbody"
        style={{ backgroundColor: state ? "  #68B984" : null }}
      >
        <Ui />
        {/* <MenuItems/> */}
        {click ? <MenuItems /> : null}
        <div className="card">
          <Card />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Landingpage;
