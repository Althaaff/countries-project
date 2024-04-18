import React, { useEffect, useState } from 'react'
// import countriesData from '../countriesData'
import CountryCard from './CountryCard';
import CountriesListShimmer from './CountriesListShimmer';

export default function CountriesList({query}) {
  // console.log(countriesData);  
  // const [query, setQuery] = useState('')
  // const filteredCountries = countriesData.filter((country) => country.name.common.toLowerCase().includes('india'));
  // console.log(filteredCountries);

  const [countriesData, setCountriesData] = useState([]);
  // const [count, setCount] = useState(0);
   useEffect(() => {
    console.log("HEYY!");
    fetch('https://restcountries.com/v3.1/all')
     .then((res) => res.json())
     .then((data) => {
     setCountriesData(data)
     })

    //  const intervalId = setInterval(() => {
    //   console.log('running countries list Component!')
    //  }, [1000]);

    //  return () => {
    //   clearInterval(intervalId);
    //   console.log("Cleaning Up!")
    //  }
     }, []);// when we're cliking the inrease count btn that it will re render and "HEYY" will come in console //
            // if we not given any dependency then not will re render "HEYY!" and 
      
    //  useEffect(() => {
    //   console.log("Hey Iam UseEffect")
    //  }, [count, countriesData]); // when we are clik the increase count and searchBar that time it will re-render "Hey Iam UseEffect" //

 //   if (countriesData.length === 0) {
// //     fetch('https://restcountries.com/v3.1/all')
// //      .then((res) => res.json())
// //      .then((data) => {
// //      setCountriesData(data);
// //   })
 //  }

 if (countriesData.length === 0) {
  return <CountriesListShimmer />
 }
return (
<>
{/*<h2>{count}</h2>*/}
{/*<button onClick={() => setCount(count + 1)}>Increase Count</button> */}
   

{/*  this is commented Bcoz i declared if statement */}
{/* { !countriesData.length ? (
     <CountriesListShimmer />
) : ( */}
   <div className="countries-container"> 
    {countriesData.filter((country) => country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query))
    .map((country) => {
    // console.log(country);
    return (
    <CountryCard
      key={country.name.common}  
      name={country.name.common} 
      flag={country.flags.svg} 
      population={country.population.toLocaleString(`en-In`)}  // props name any name u can pass 
      region={country.region}
      capital={country.capital?.[0]}
      data={country}
      /> 
    )
  })}
  </div> 

</>
 )
}