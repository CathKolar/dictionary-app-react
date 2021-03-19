import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(e) {
    e.preventDefault();
    alert(`Searching for ${keyword}`);
  }
  //track input change - set state
  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
