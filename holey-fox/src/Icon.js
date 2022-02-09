import React from "react";
import { motion } from "framer-motion";

function Icon({hovered}) {
    const svgVariants = {
        hidden: {
            y: 50,
        },
        visible: {
            y: 0,
            transition: {
                duration: 0.5,
            }
        }
    }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      fill="none"
      viewBox="0 0 190 224"
    >
      <rect width="190" height="148" y="76" fill="#3599D4" rx="15"></rect>
      <path
        fill="#3599D4"
        d="M0 76c0-8.284 6.716-15 15-15h44v148c0 8.284-6.716 15-15 15H15c-8.284 0-15-6.716-15-15V76zM59 61l22.5 15H59V61z"
          ></path>
          <motion.g
              variants={svgVariants}
              initial="hidden"
              animate={hovered? "visible": "hidden"}
          >
            <path fill="#944a2b" d="M90 35l26.847 83.25H63.153L90 35z"></path>
            <path
                fill="#db6837"
                d="M81.084 17.223L59.94 0v33.011L47 45.131l27.3 18.34L87.395 85h5.681l12.782-21.53L133 45.132l-12.939-12.12V.957L98.916 18.02l-17.832-.798z"
            ></path>
            <path
                fill="#FFF"
                d="M78.5 44l7.361-6.75H71.14L78.5 44zM100.5 44l7.361-6.75H93.139L100.5 44z"
                    ></path>
        </motion.g>
      <rect
        width="190"
        height="132"
        y="92"
        fill="url(#paint0_linear_1_25)"
        rx="15"
      ></rect>
      <defs>
        <linearGradient
          id="paint0_linear_1_25"
          x1="95"
          x2="95"
          y1="92"
          y2="224"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#69CDFE"></stop>
          <stop offset="1" stopColor="#40B8F4"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon;