// import React, { useState, useEffect } from "react";
// import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

// const data = [
//   "Untitled.png",
//   "img1.png",
//   "img2.png",
//   "img3.png",
//   "img4.png",
//   "img5.png",
// ];

// const ImageSlider = () => {
//   const [activeImageIndex, setActiveImageIndex] = useState(0);
//   const [nextImageIndex, setNextImageIndex] = useState(1);
//   const [direction, setDirection] = useState("next");

//   const handlePrevClick = () => {
//     setDirection("prev");
//     setActiveImageIndex(
//       activeImageIndex === 0 ? data.length - 1 : activeImageIndex - 1
//     );
//     setNextImageIndex(
//       activeImageIndex === 0 ? data.length - 1 : activeImageIndex - 1
//     );
//   };

//   const handleNextClick = () => {
//     setDirection("next");
//     setActiveImageIndex((activeImageIndex + 1) % data.length);
//     setNextImageIndex((activeImageIndex + 1) % data.length);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       handleNextClick();
//     }, 2000);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [activeImageIndex]);

//   return (
//     <div className="relative w-full h-80 md:h-96 overflow-hidden">
//       <button
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 font-bold p-4 m-10 z-10 cursor-pointer hover:scale-105"
//         onClick={handlePrevClick}
//       >
//         <FaChevronCircleLeft className=" scroll-button text-3xl text-yellow-300 cursor-pointer" />
//       </button>
//       <img
//         src={data[activeImageIndex]}
//         className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
//           direction === "next" ? "opacity-0" : "opacity-100"
//         }`}
//         style={{ zIndex: 10 }}
//         alt="current wallpaper"
//       />
//       <img
//         src={data[nextImageIndex]}
//         className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ${
//           direction === "next" ? "opacity-100" : "opacity-0"
//         }`}
//         style={{ zIndex: 0 }}
//         alt="next wallpaper"
//       />

//       <button
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 font-bold p-4 m-10 z-10 hover:scale-105"
//         onClick={handleNextClick}
//       >
//         <FaChevronCircleRight className=" scroll-button text-3xl text-yellow-300" />
//       </button>
//     </div>
//   );
// };

// export default ImageSlider;

import React, { useState, useEffect } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const data = [
  "Untitled.png",
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png",
];

const ImageSlider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [direction, setDirection] = useState("next");

  const handlePrevClick = () => {
    setDirection("prev");
    setActiveImageIndex(
      activeImageIndex === 0 ? data.length - 1 : activeImageIndex - 1
    );
    setNextImageIndex(
      activeImageIndex === 0 ? data.length - 1 : activeImageIndex - 1
    );
  };

  const handleNextClick = () => {
    setDirection("next");
    setActiveImageIndex((activeImageIndex + 1) % data.length);
    setNextImageIndex((activeImageIndex + 1) % data.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);

  return (
    <div className="relative w-full h-80 md:h-96 overflow-hidden">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 font-bold p-2 md:p-4 m-2 md:m-10 z-10 cursor-pointer hover:scale-105"
        onClick={handlePrevClick}
      >
        <FaChevronCircleLeft className="scroll-button text-2xl md:text-3xl text-yellow-300 cursor-pointer" />
      </button>
      <img
        src={data[activeImageIndex]}
        className={`absolute top-0 left-0 w-full h-full object-contain  transition-opacity duration-500 sm:object-contain ${
          direction === "next" ? "opacity-0" : "opacity-100"
        }`}
        style={{ zIndex: 10 }}
        alt="current wallpaper"
      />
      <img
        src={data[nextImageIndex]}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
          direction === "next" ? "opacity-100" : "opacity-0"
        }`}
        style={{ zIndex: 0 }}
        alt="next wallpaper"
      />
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 font-bold p-2 md:p-4 m-2 md:m-10 z-10 hover:scale-105"
        onClick={handleNextClick}
      >
        <FaChevronCircleRight className="scroll-button text-2xl md:text-3xl text-yellow-300" />
      </button>
    </div>
  );
};

export default ImageSlider;
