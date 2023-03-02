import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [index, setIndex] = useState(1);
  const [numOfUsers, setNumOfUsers] = useState(10);
  const [loading, setLoading] = useState(false);
  const [propertySearch, setPropertySearch] = useState("");
  const [keySearch, setKeySearch] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       setData(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    setLoading(true);
    const fetchItem = async () => {
      try {
        const items = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(items.data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItem();
  }, []);

  useEffect(() => {
    const filterring = () => {
      setFilteredData([...data]);

      if (propertySearch && keySearch) {
        setFilteredData((prev) =>
          prev.filter((user) =>
            String(user[keySearch]).includes(String(propertySearch))
          )
        );
      }

      setFilteredData((prev) =>
        prev.slice((index - 1) * numOfUsers, index * numOfUsers)
      );
    };
    filterring();
  }, [index, numOfUsers, data, keySearch, propertySearch]);

  useEffect(() => {
    setIndex(1);
  }, [numOfUsers]);

  let textHtml = filteredData.map((user) => {
    return (
      <div key={user.id}>
        <b>userId</b> : {user.id} <br></br>
        <b>title</b> : {user.title} <br></br>
        <b>body</b> : {user.body} <br></br>
        <br></br>
      </div>
    );
  });

  const changeIndex = (changeBy) => {
    setIndex(index + changeBy);
  };


  return (
    <div>
      <Navigation disable={"Pagination"}></Navigation>

      <div className="container">
        <h1>Users Date</h1>

        <div className="inputs">
          <div className="flex input-box">
            <p>How many users do you want do display? </p>
            <input type="number" className="input" onChange={(e) => setNumOfUsers(e.target.value)}></input>
          </div>
          <div className="flex input-box">
            <p>Search value </p>
            <input
              type="text"
              className="input"
              onChange={(e) => setPropertySearch(e.target.value)}
              placeholder="Search key"
            ></input>
            <select onChange={(e) => setKeySearch(e.target.value)}>
              <option value="">properties</option>
              <option value="id">user id </option>
              <option value="title">title </option>
              <option value="body">body</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div>
            <div className="info">{textHtml}</div>
            <div className="btns flex">
              <button
                className="btn"
                disabled={index === 1}
                onClick={() => setIndex(1)}
              >
                {" 1  "}
              </button>
              {" <  "}
              <button
                className="btn"
                disabled={index === 1}
                onClick={() => changeIndex(-1)}
              >
                {" -  "}
              </button>
              {`  ${Math.floor(index)}  `}
              <button
                className="btn"
                disabled={index >= filteredData.length / numOfUsers}
                onClick={() => changeIndex(1)}
              >
                {" +  "}
              </button>
              {" >  "}
              <button
                className="btn"
                disabled={index >= filteredData.length / numOfUsers}
                onClick={() => setIndex(filteredData.length / numOfUsers)}
              >
                {` ${Math.floor(filteredData.length / numOfUsers)}  `}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
