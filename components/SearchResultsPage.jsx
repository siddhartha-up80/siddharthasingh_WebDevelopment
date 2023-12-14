import React, { useState } from 'react'
import Link from 'next/link'

const SearchResultsPage = ({ searchResults, query }) => {

    // console.log(searchResults)
    // console.log(query)

    const [searchinput, setSearchInput] = useState(null)
    const [inputsearchresults, setInputSearchResults] = useState(searchResults)

    

  const handleInputChange = async (event) => {
      event.preventDefault()
      setSearchInput(event.target.value)
    }


    const searchGoogle = ()=>{
          const fetchData = async () => {


             
            try {
              // Make the fetch request to the API route
              const response = await fetch(
                `${process.env.NEXT_PUBLIC_HOST}/api/googlesearch?q=${searchinput}`
              );

              if (!response.ok) {
                throw new Error("Network response was not ok");
              }

              // Parse the JSON response
              const results = await response.json();

              // Update the state with the search results
              setInputSearchResults(results);
              console.log(results);
            } catch (error) {
              console.error("Error fetching search results:", error);
              // Handle errors if needed
            }
          };
          
  fetchData();
         
    }



  return (
    <div>
      <div className="overflow-hidden">
        <div id="header" className="mb-4">
          <div className="flex h-16 items-end fixed bg-white w-full">
            <Link href="/">
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt=""
                className="w-40 relative top-4 p-6 cursor-pointer"
              />
            </Link>

            <div className="w-[625px] h-[45px] rounded-full border-lightgray border-solid border-1 text-base relative bottom-2 overflow-hidden flex z-10">
              <input
                id="searchbartext"
                type="text"
                onChange={handleInputChange}
                value={searchinput}
                onKeyDown={searchGoogle}
                className="h-[45px] border-none text-base leading-[45px] pl-[20px] flex-1 focus:outline-none"
                defaultValue={query}
              />
              <button
                id="searchbarmic"
                className="h-10 w-6 mr-3 ml-auto bg-white"
              >
                <svg
                  className="goxjub"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#4285f4"
                    d="M12 15c1.66 0 3-1.31 3-2.97V5.01C15 3.35 13.66 2 12 2S9 3.34 9 5.01v7.02C9 13.69 10.34 15 12 15z"
                  />
                  <path fill="#34a853" d="M11 18.08h2V22h-2z" />
                  <path
                    fill="#fbbc05"
                    d="M7.05 16.87C5.78 15.54 5 14.04 5 12h2c0 1.45.56 2.42 1.47 3.38v.32l-1.15 1.18z"
                  />
                  <path
                    fill="#ea4335"
                    d="M12 16.93a4.97 5.25 0 01-3.54-1.55l-1.41 1.49A6.751 6.751 0 0012 19c3.87 0 6.99-2.92 6.99-7H17c0 2.92-2.24 4.93-5 4.93z"
                  />
                </svg>
              </button>
              <button
                id="searchbarbutton"
                className="h-10 w-8 bg-white relative -mr-1 focus:outline-none"
                onClick={searchGoogle}
              >
                <svg
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-8 relative -left-2 fill-current text-blue-500"
                >
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </button>
            </div>
            {/* <div
              id="boxesicon"
              className="w-[25px] h-[25px] bg-cover bg-no-repeat bg-opacity-60"
              style={{ backgroundImage: "url('images/boxes.png')" }}
            />
            <div id="bellicon" />
            <img id="profileimage" src="images/photo.png" alt="Profile" /> */}
          </div>
          <div id="optionsbar" className="pt-20">
            <ul
              id="optionsmenu1"
              className="flex space-x-8 ml-[170px] w-screen"
            >
              <li id="optionsmenuactive">All</li>
              <li>Images</li>
              <li>Videos</li>
              <li>Images</li>
              <li>Maps</li>
              <li>More</li>
            </ul>
            {/* <ul id="optionsmenu2" className="flex space-x-4 ml-[100px]">
              <li>Settings</li>
              <li>Tools</li>
            </ul> */}
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            id="searchresultsarea"
            className="flex flex-col justify-start md:w-[50vw] mr-auto ml-[170px]"
          >
            <p id="searchresultsnumber" className="text-sm text-gray-500 mb-4">
              About {inputsearchresults.searchInformation.formattedTotalResults}{" "}
              results (
              {inputsearchresults.searchInformation.formattedSearchTime}{" "}
              seconds)
            </p>

            {inputsearchresults.items.map((result, index) => (
              <div className="searchresult mb-4" key={index}>
                <h2 className="text-xl font-semibold mb-2">{result.title}</h2>
                <Link
                  className="text-blue-500 mb-2"
                  href={result.link}
                  target="_blank"
                >
                  {result.link}
                </Link>
                <p className="text-gray-700">{result.snippet}</p>
              </div>
            ))}

            

            
          </div>
        </div>
        <div
          id="footer"
          className="bg-gray-200 p-4 relative bottom-0 right-0  left-0 pl-[170px] mt-10"
        >
          <ul id="footermenu" className="list-none flex ml-0">
            <li className="pr-4">Help</li>
            <li className="pr-4">Send feedback</li>
            <li className="pr-4">Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </div>
    // <></>
  );
};

export default SearchResultsPage