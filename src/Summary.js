//sets title
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Summary.css";

function Summary() {
  const [posts, setPosts] = useState([]);
  //sets summary
  const [summary, setSummary] = useState([]);

  const [images, setImages] = useState([]);
  const base_url = "https://api.tvmaze.com/shows/";
  let { id } = useParams();
  const num = Math.floor(Math.random() * 100 + 1);
  useEffect(() => {
    //data fetch from api

    const loadPost = async () => {
      const response = await axios.get(base_url + id);
      setImages(response.data.image.medium);
      setPosts(response.data.name);
      setSummary(response.data.summary);
    };
    loadPost();
  }, []);
  let navigate = useNavigate();

  return (
    <>
      <div className="App">
        <div>
          <img src={images} alt="" />
        </div>

        <div>
          <h1>{posts}</h1>
          this is {id}
        </div>

        <div>{summary}</div>
      </div>
    </>
  );
}
export default Summary;
