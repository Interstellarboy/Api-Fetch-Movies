import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Summary from "./Summary";
import "./HomePage.css";

function HomePage() {
  const [posts, setPosts] = useState([]);
  //sets summary

  const [images, setImages] = useState([]);
  const base_url = "https://api.tvmaze.com/search/shows?q=all";
  const num = Math.floor(Math.random() * 100 + 1);
  const [wholeshows, setWholeshows] = useState([]);
  useEffect(() => {
    //data fetch from api

    const loadPost = async () => {
      const response = await axios.get(base_url);
      setWholeshows(response.data);
      setImages(response.data.image);
      setPosts(response.data.name);
    };
    loadPost();
  }, []);

  let navigate = useNavigate();
  let { username } = useParams();

  return (
    <>
      <div className="HomePage">
        <div></div>

        <div className="posts">
          {/* this is  {username} */}
          {/* <img src={images} alt="" /> */}
          {wholeshows.map((wholeshow) => (
            <div key={`${wholeshow.show.id}`}>
              <span className="heading">{wholeshow.show.name}</span>
              <img className="ogposts" src={wholeshow.show.image.medium} />

              <button
                class="button-55"
                role="button"
                onClick={() => {
                  navigate("/summary/" + wholeshow.show.id);
                }}
              >
                Summary
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
