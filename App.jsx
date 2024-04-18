import Header from "./Components/Header";
import './App.css'
import { useState } from "react";
// import SearchBar from "./Components/SearchBar";
// import SelectMenu from "./Components/SelectMenu";
// import CountriesList from "./Components/CountriesList";
// import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
return (
  <ThemeProvider>
    <Header/>
    <Outlet/>  
  </ThemeProvider>
)
{/* <main> 
 <div className="search-filter-container">
   <SearchBar setQuery={setQuery}/>
   <SelectMenu/>
 </div> 
 {query === 'unmount' ? '' : <CountriesList query={query}/>}
</main> */}

 
}
export default App;