import { useState } from "react";

export function Createtodo(props) {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Description"
          onchange={function (e) {
            setDescription(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Title"
          onchange={function (e) {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          onClick={() =>
            fetch("http://localhost:3000/createtodos/", {
              method: "post",
              body: JSON.stringify({
                title: title,
                description: description,
                completed: false,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }).then(async function () {
              const json = await res.json();
              alert("Data Saved Successfully");
            })
          }
        >
          Add todo
        </button>
      </div>
    </div>
  );
}
