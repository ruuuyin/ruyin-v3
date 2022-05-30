import arkibo1 from "./../assets/works/1.arkibo/1.png";
import arkibo2 from "./../assets/works/1.arkibo/2.png";
import arkibo3 from "./../assets/works/1.arkibo/3.png";
import arkibo4 from "./../assets/works/1.arkibo/4.png";
import arkibo5 from "./../assets/works/1.arkibo/5.png";
import arkibo6 from "./../assets/works/1.arkibo/6.png";

import csap1 from "./../assets/works/2.csap/1.jpg";
import csap2 from "./../assets/works/2.csap/2.jpg";
import csap3 from "./../assets/works/2.csap/3.jpg";
import csap4 from "./../assets/works/2.csap/4.jpg";
import csap5 from "./../assets/works/2.csap/5.jpg";
import csap6 from "./../assets/works/2.csap/6.jpg";
import csap7 from "./../assets/works/2.csap/7.jpg";

import opcr1 from "./../assets/works/3.opcr/1.jpg";
import opcr2 from "./../assets/works/3.opcr/2.jpg";

import ordering1 from "./../assets/works/4.ordering/1.jpg";
import ordering2 from "./../assets/works/4.ordering/2.jpg";
import ordering3 from "./../assets/works/4.ordering/3.jpg";
import ordering4 from "./../assets/works/4.ordering/4.jpg";
import ordering5 from "./../assets/works/4.ordering/5.jpg";
import ordering6 from "./../assets/works/4.ordering/6.jpg";
import ordering7 from "./../assets/works/4.ordering/7.jpg";
import ordering8 from "./../assets/works/4.ordering/8.jpg";

import brankolei1 from "./../assets/works/5.brankolei/1.png";
import brankolei2 from "./../assets/works/5.brankolei/2.png";

import jak1 from "./../assets/works/6.jak/1.png";
import jak2 from "./../assets/works/6.jak/2.png";

import pos1 from "./../assets/works/7.pos/1.png";
import pos2 from "./../assets/works/7.pos/2.png";
import pos3 from "./../assets/works/7.pos/3.png";

import snippu1 from "./../assets/works/8.snippu/1.jpg";
import snippu2 from "./../assets/works/8.snippu/2.jpg";

import guidance1 from "./../assets/works/9.guidance/1.png";
import guidance2 from "./../assets/works/9.guidance/2.png";
import guidance3 from "./../assets/works/9.guidance/3.png";

const works = [
  {
    id: 1,
    title: "Arkibo: Research Repository",
    sub: "Senior Project",
    tech: [
      "Spring Framework",
      "Hibernate",
      "ReactJs",
      "Ant Design",
      "MySQL",
      "Microsoft Azure",
      "Vercel",
    ],
    img: [arkibo1, arkibo2, arkibo3, arkibo4, arkibo5, arkibo6],
  },

  {
    id: 2,
    title: "Centralized Student Accounts Portal (CSAP)",
    sub: "Internship Project",
    tech: ["Laravel", "ReactJs", "Ant Design", "MySQL"],
    img: [csap1, csap2, csap3, csap4, csap5, csap6, csap7],
  },
  {
    id: 3,
    title: "OPCR/IPCR",
    sub: "Internship Project",
    tech: ["Laravel", "ReactJs", "Ant Design", "MySQL"],
    img: [opcr1, opcr2],
  },

  {
    id: 4,
    title: "Ordering system for CNSC cafeteria",
    sub: "Freelance Project",
    tech: ["React Native", "NativeBase"],
    img: [
      ordering1,
      ordering2,
      ordering3,
      ordering4,
      ordering5,
      ordering6,
      ordering7,
      ordering8,
    ],
  },

  {
    id: 5,
    title: "bestpizza.ph",
    sub: "Freelance Project",
    tech: ["ReactJs", "SASS"],
    img: [brankolei1, brankolei2],
  },

  {
    id: 6,
    title: "Jak @ your service Inventory System",
    sub: "School Project",
    tech: ["JavaFX", "MySQL"],
    img: [jak1, jak2],
  },

  {
    id: 7,
    title: "Grocery POS",
    sub: "Freelance Project",
    tech: ["JavaFX", "MySQL"],
    img: [pos1, pos2, pos3],
  },
  {
    id: 8,
    title: "Snippu",
    sub: "School Project",
    tech: ["HTML", "CSS", "JS"],
    img: [snippu1, snippu2],
  },

  {
    id: 9,
    title: "School Guidance Information System",
    sub: "School Project",
    tech: ["JavaFX", "MySQL"],
    img: [guidance1, guidance2, guidance3],
  },
];

export default works;
