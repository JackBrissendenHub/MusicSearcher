import React from "react";
import { NavLink } from "react-router-dom";

const SearchResult = ({ artist }) => {
  return (
    <>
      <div className="transition duration-400 flex p-6 border-b border-neutral-800 text-neutral-300 ">
        <div className="artist-image mr-12">
          {artist.images.length && (
            <img src={artist.images[0].url} width="150" />
          )}
        </div>
        <div>
          <span className="mt-10 block font-bold">{artist.name}</span>
          <span className="mt-3 block">{artist.followers.total} followers</span>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
