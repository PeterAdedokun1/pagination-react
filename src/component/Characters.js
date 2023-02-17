import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Character } from "./character";
const Characters = () => {
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }) => {
    const reponse = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return reponse.json();
  };

  const { data, status, isPreviousData, isLoading, isError } = useQuery(
    ["characters", page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }

  );
  if (isLoading) {
    return <h1>loading</h1>;
  }
  if (isError) {
    return <h1>error</h1>;
  }
  return (
    <>
      {" "}
      <div className="card-container">
        {data.results.slice(0,10).map((character) => {
          return <Character key={character.id} {...character} />;
        })}
      </div>
      <div className="btn-container">
        <button
          disabled={page === 1}
          onClick={() => setPage((oldpage) => oldpage - 1)}
        >
          previous
        </button>
        <button
         
          disabled={isPreviousData && !data.info.next}
          onClick={() => setPage((oldpage) => oldpage + 1)}
        >
          next
        </button>
      </div>
    </>
  );
};

export default Characters;
