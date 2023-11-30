import { useState } from "react";

const Search = ({ children }) => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <div className="search-container">
        <input
          className="search"
          type="text"
          placeholder="Search anime..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {children}
      </div>
    </div>
  );
};

export default Search;
