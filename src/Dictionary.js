import React, { useState } from "react";
export default function Dictionary() {
  let [searchword, setSearchWord] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`searching for ${searchword}`);
  }
  function handleSearchWord(event) {
    setSearchWord(event.target.value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleSearchWord} />
      </form>
    </div>
  );
}
