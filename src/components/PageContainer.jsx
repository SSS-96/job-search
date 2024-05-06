import React, { useEffect, useState } from 'react';
import FilterContainer from './Filter/FilterContainer';
import CardContainer from './Card/CardContainer';

function PageContainer() {
    // setting fetched data for passing to child components
    const [cardData,setCardData] = useState({});
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(5);
    const [filterObject, setfilterObject] = useState({})
    // service call for api
    const fetchData = () => {
        setLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const body = JSON.stringify({
            "limit": limit,
            "offset": offset
           });
           
           const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
           };
           
        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
            .then((response) => response.json())
            .then((result) => setCardData(result))
            .catch((error) => console.error(error));

        setLoading(false)
    }

    const handleScroll = () => {
        // Check if user has scrolled to the bottom of the page
        if (
            window.innerHeight + document.documentElement.scrollTop + 20 >
            document.documentElement.offsetHeight
        ) {
            setOffset(prevState => prevState + 10);
            setLimit(prevState => prevState + 10);
        }
    };

    useEffect(()=>{
        fetchData();
        window.addEventListener('scroll', handleScroll);
        // Remove scroll event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])

    useEffect(()=>{
        fetchData();
    },[offset])

    const setFilter = payload => {
        setfilterObject({
            ...filterObject,
            [payload.name]:payload.filterData
        })
    }

    return (
        <div className='pageContainer'>
            <FilterContainer setFilter={setFilter}/>
            {loading ? <p>Loading...</p> : <CardContainer cardData={cardData} filterObject={filterObject}/>}
        </div>
    )
}

export default PageContainer