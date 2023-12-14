//pages/search.js

import React, { useEffect, useState } from "react";
import SearchResultsPage from "@/components/SearchResultsPage";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();

  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = router.query.q || "coding girls";

        // Make the fetch request to the API route
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/googlesearch?q=${query}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Parse the JSON response
        const results = await response.json();

        // Update the state with the search results
        setSearchResults(results);
        console.log(results);
      } catch (error) {
        console.error("Error fetching search results:", error);
        // Handle errors if needed
      }
    };

    fetchData();
  }, [router.query.q]);




  return (
    <div>
      {searchResults && (
        <SearchResultsPage
          searchResults={searchResults}
          query={router.query.q}
        />
      )}
    </div>
  );
};

export default Search;
