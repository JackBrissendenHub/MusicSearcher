import React from "react";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/hooks";
import { fetchArtistSearch } from "../services/SpotifyApi";
import SearchResult from "../components/SearchResult";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchArtistSearch(debouncedSearchTerm)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.artists.items);
        });
    }
  }, [debouncedSearchTerm, searchResults]);

  return (
    <>
      <header>
        <h1 className="block text-center text-neutral-300 w-xl block my-12 mx-auto text-2xl font-bold">
          Musical Artist Search
        </h1>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-xl block my-12 mx-auto"
          placeholder="artist name..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      {!!searchResults.length && (
        <div className="w-xl mx-auto">
          {searchResults.map((artist) => (
            <SearchResult key={artist.id} artist={artist} />
          ))}
        </div>
      )}
      {!!searchResults.length && <div id="search-results"></div>}
    </>
  );
};

export default Search;
