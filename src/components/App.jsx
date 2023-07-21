import React, { useState } from "react";
// import Button from "./Button";
import Image from "./Image";
import Heading from "./Heading";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {motion} from "framer-motion"

function App() {
  const [index, setIndex] = useState(0);

  function changeToPrevious() {
    setIndex((prev) => (prev === 0 ? 4 : prev - 1));
  }
  function changeToNext() {
    setIndex((prev) => (prev === 4 ? 0 : prev + 1));
  }

  return (
    <div className="container">
      <Heading />
      <div className="carousel">
        

        
<motion.div className="arrowBack" whileHover={{scale:2}} initial={{scale:1}}>
        <ArrowBackIosIcon
          className="navigation-icon"
          onClick={changeToPrevious}
        />
        </motion.div>

        <Image no={index} />
        <motion.div className="arrowNext" whileHover={{scale:2}} initial={{scale:1}}>
        <ArrowForwardIosIcon
          className="navigation-icon"
          onClick={changeToNext}
        />
        </motion.div>

       
      </div>
    </div>
  );
}

export default App;
