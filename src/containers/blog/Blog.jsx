import React from "react";
import {blog01,blog02,blog03,blog04,blog05} from './import'
import "./blog.css";

const blogData = [
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    text: "Read Full Article",
    img : blog01,
  },
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    text: "Read Full Article",
    img : blog02
  },
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    text: "Read Full Article",
    img : blog03
  },
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    text: "Read Full Article",
    img : blog04
  },
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    text: "Read Full Article",
    img : blog05
  },
];

function Blog() {
  return (
    <div className="gpt3__blog section__margin">
      <div className="gpt3__blog__heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog__content">
        {blogData.map((el, i) => {
          return (
            <div key={i} className="gpt3__blog__box">
              <div className="gpt3__blog__box__image">
                <img src={el.img} alt="Blog-images" />
              </div>
              <div className="gpt3__blog__box__text">
                <h4>{el.date}</h4>
                <h1>{el.title}</h1>
                <p>{el.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
