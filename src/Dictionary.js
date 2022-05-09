import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={search}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search word..."
                  onChange={handleKeywordChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn SearchButton"
                />
              </div>
            </div>
          </form>
          <div className="WordSuggestions">
            Suggested words: tea, vine, fish...
          </div>
          <Results results={results} />
        </section>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
