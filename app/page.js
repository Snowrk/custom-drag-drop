"use client";

import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import "./page.css";

export default function Home() {
  const list = [
    {
      id: 1,
      name: "Apple",
      imgUrl: "https://assets.codepen.io/128542/apple.png",
    },
    {
      id: 2,
      name: "Grape",
      imgUrl: "https://assets.codepen.io/128542/grape.png",
    },
    {
      id: 3,
      name: "Orange",
      imgUrl: "https://assets.codepen.io/128542/orange.png",
    },
    {
      id: 4,
      name: "Bananna",
      imgUrl: "https://assets.codepen.io/128542/banana.png",
    },
    {
      id: 5,
      name: "Cherry",
      imgUrl: "https://assets.codepen.io/128542/cherry.png",
    },
  ];
  const handlePointerDown = (e) => {
    e.target.setPointerCapture(e.pointerId);
    e.target.style.cursor = "grabbing";
    // const ele = e.target.parentNode.cloneNode(true);
    // ele.classList.add("draggingIcon");
    // const listNode = e.target.parentNode.parentNode;
    // listNode.appendChild(ele);
    // document.body.classList.add("grabbing");
    // const r = document.querySelector(":root");
    // let mouseX = `${e.pageX}px`;
    // let mouseY = `${e.pageY}px`;
    // console.log(e);
    // console.log(mouseX, mouseY);
    // r.style.setProperty("--mouseX", mouseX);
    // r.style.setProperty("--mouseY", mouseY);
  };
  const handlePointerUp = (e) => {
    e.target.releasePointerCapture(e.pointerId);
    e.target.style.cursor = "grab";
  };
  const ListItem = (props) => {
    const { name, imgUrl } = props;
    return (
      <li className="listItem">
        <span
          className="dragIcon"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        ></span>
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
        <div className="buttonWrapper">
          <button>
            <FaAngleUp />
          </button>
          <button>
            <FaAngleDown />
          </button>
        </div>
      </li>
    );
  };
  return (
    <div className="con">
      <ul className="list">
        {list.map((item) => (
          <ListItem name={item.name} imgUrl={item.imgUrl} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
