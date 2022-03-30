//sets title
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Summary.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

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
          <hr></hr>
          {/* this is {id} */}
        </div>
        <h2>The summary:</h2>
        <div>{summary}</div>
        <hr></hr>
        <div>
          <h4>Book Tickets?</h4>
          <Popup trigger={<button> Tickets</button>} position="right center">
            <form>
              <label>
                <h1>Book Tickets?</h1>
              </label>
              <div class="form-row">
                <div class="col">
                  <label>Your Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div class="col">
                  <label>Movie</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={posts}
                    value={posts}
                  />
                </div>
              </div>
              <div className="btn">
                <button type="submit">Book</button>
              </div>
            </form>
          </Popup>
        </div>
      </div>
    </>
  );
}
export default Summary;
