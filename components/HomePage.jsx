import React from 'react'
import { useRouter } from "next/router";


const HomePage = () => {
   const router = useRouter();

    const handleGoogleSearch = () => {
      const query = document.getElementById("searchInput").value; // Get the search query from the input field

      // Redirect to the search page with the query
      router.push(`/search?q=${encodeURIComponent(query)}`);
    };


  return (
    <div className="max-h-screen overflow-hidden">
      <>
        {/* header */}
        <div className="header flex w-full justify-end gap-x-5 p-5">
          <a href="#">Gmail</a>
          <a href="#">Images</a>
          <a href="#">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z" />
            </svg>
          </a>
          <a href="#">
            <img
              className=" w-6 rounded-full object-cover object-top"
              src="https://source.unsplash.com/random/800x800?saree"
              alt=""
            />
          </a>
        </div>
        {/* end header */}
        {/*  Content */}
        <div className="  flex flex-col justify-center mt-28 items-center text-gray-600">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt=""
          />
          <div className="search rounded-full border w-2/5 flex p-2 mt-5 ">
            <div className="">
              <svg
                className="h-6 fill-current"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </div>
            <input
              className="w-full outline-none"
              id="searchInput"
              type="search"
              placeholder="Search Google"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleGoogleSearch();
                }
              }}
            />
            <div className="">
              <svg
                className="h-6"
                focusable="false"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                  fill="#4285f4"
                />
                <path d="m11 18.08h2v3.92h-2z" fill="#34a853" />
                <path
                  d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                  fill="#f4b400"
                />
                <path
                  d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                  fill="#ea4335"
                />
              </svg>
            </div>
          </div>
          <div className="flex mt-7 text-sm gap-x-3">
            <button
              className="p-2 rounded bg-gray-100  hover:bg-gray-200"
              onClick={() => handleGoogleSearch()}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleGoogleSearch();
                }
              }}
            >
              Google Search
            </button>
            <button
              className="p-2 rounded bg-gray-100 hover:bg-gray-200"
              onClick={() => handleGoogleSearch()}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleGoogleSearch();
                }
              }}
            >
              I&apos;m Feeling Lucky
            </button>
          </div>
        </div>
        {/* end Content */}
        {/*  Footer */}
        <footer className="bg-gray-50 flex-row-reverse  border-t absolute bottom-0 right-0  left-0 flex justify-between items-center text-sm gap-x-5 p-3">
          <div className="flex flex-row gap-x-5 ">
            <a href="">Privacy</a>
            <a href="">Terms</a>
            <a href="">Settings</a>
          </div>

          <div className="flex flex-row gap-x-5">
            <a href="">India</a>
            <a href="">About</a>
            <a href="">Advertising</a>
            <a href="">Buisness</a>
            <a href="">How Search Works</a>
          </div>
          {/* end Footer */}
        </footer>
      </>
    </div>
  );
}

export default HomePage