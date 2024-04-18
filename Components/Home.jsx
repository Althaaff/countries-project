import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
// import { Outlet } from "react-router-dom";


export default function Home() {
const [query, setQuery] = useState('');
const [isDark] = useTheme();

return (
<div>
<main className={`${isDark ? 'dark' : ''}`}> 
 <div className="search-filter-container">
    <SearchBar setQuery={setQuery}/>
    <SelectMenu setQuery={setQuery}/>
 </div> 
   {query === 'unmount' ? 'Try Again!': <CountriesList query={query}/>}
</main>
</div>
  )
}
