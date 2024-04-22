import { useState } from "react";
import { SaveDataContext } from "../../context/context";
import { useContext } from "react";

const AddBlog = () => {
  //   const { saveData, setSaveData } = useContext(SaveDataContext);

  const [titel, setTitel] = useState("");
  const [bild, setBild] = useState("");
  const [text, setText] = useState("");

  const addNewBlog = (event) => {
    event.preventDefault();

    const formData = new FormData();

    // formData.append("Titel", titel);
    // formData.append("Beitragsbild", bild);
    // formData.append("Text", text);

    formData.append("Blog", bild, bild.name);

    // console.log(bild);
    // console.log(titel);
    // console.log(text);

    fetch("http://localhost:1122/api/files/uploads", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const newBlog = {
          id: data.id,
          Titel: titel,
          Beitragsbild: data.Beitragsbild,
          Text: text,
        };
        return newBlog;
      })
      .then((newBlog) =>
        fetch("http://localhost:1122/api/v1/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newBlog),
        })
      )
      .then((res) => res.json())
      .then((data) => {
        // setSaveData(data);
        setTitel("");
        setText("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2>Write your Blog</h2>

      <form>
        <input type="file" onChange={(e) => setBild(e.target.files[0])} />
        <input type="text" placeholder="Titel" value={titel} onChange={(e) => setTitel(e.target.value)} />
        <input
          type="text"
          placeholder="Füge etwas hinzu.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={addNewBlog}>Post</button>
      </form>
    </>
  );
};

export default AddBlog;
