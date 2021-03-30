import React, { useState } from "react";
import "dotenv";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  // deal with Dictionary API response
  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  // deal with Pexels API response
  function handlePexelsResponse(response) {
    console.log(response);
  }

  //  make API call onSubmit
  function search(e) {
    e.preventDefault();

    // documentation: https://dictionaryapi.dev/
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    // pexels API call
    const pexelsApiKey = process.env.REACT_APP_PEXELS_API_KEY;
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  //track input change - set state
  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>What word would you like to look up? </h1>
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
        </form>
        <p className="hint">i.e. pterodactyl, chives, quaint, smize...</p>
      </section>
      <Results results={results} />
    </div>
  );
}
