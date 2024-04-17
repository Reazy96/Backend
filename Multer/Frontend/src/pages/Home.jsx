import { useState } from "react";
import { useEffect } from "react";
import AllBlogs from "../components/AllBlogs/AllBlogs";
import { useContext } from "react";
import { SaveDataContext } from "../context/context";

const Home = () => {
  //   const { saveData, setSaveData } = useContext(SaveDataContext);#

  const [saveData, setSaveData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1122/api/v1/blogs", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setSaveData(data))
      .catch((error) => console.log("AllBlogsFetch Error", error));
  }, []);

  return (
    <>
      <h1>Timeline</h1>

      {saveData ? (
        saveData.map((item, index) => (
          <div key={index}>
            <AllBlogs BlogID={item.id} BlogTitle={item.Titel} BlogImage={item.Beitragsbild} BlogText={item.Text} />
          </div>
        ))
      ) : (
        <p>loading</p>
      )}
    </>
  );
};

export default Home;
