import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setLisitngs] = useState([]);
  const [currentSearch, setCurrentSearch] = useState("")

  useEffect(()=> {
    fetch(" http://localhost:6001/listings")
    .then((r)=> r.json())
    .then(setLisitngs)
  }, [] )

  function handleRemoveListing(id) {
    const newListings = listings.filter((listing) => listing.id !== id)
    setLisitngs(newListings)
  }

    const displayedListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(currentSearch.toLowerCase()));
  
  return (
    <div className="app">
      <Header onSearch={setCurrentSearch} />
      <ListingsContainer listings={displayedListings} onRemoveListing={handleRemoveListing} />
    </div>
  );
}

export default App;
