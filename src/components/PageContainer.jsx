import React, { useEffect, useState } from 'react';
import FilterComponent from './Filter/FilterComponent';
import CardContainer from './Card/CardContainer';

function PageContainer() {
    // setting fetched data for passing to child components
    const [cardData,setCardData] = useState({});

    // service call for api
    const fetchData = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const body = JSON.stringify({
            "limit": 10,
            "offset": 1
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
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className='pageContainer'>
            <FilterComponent/>
            <CardContainer cardData={cardData}/>
        </div>
    )
}

export default PageContainer