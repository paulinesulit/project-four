import { useState } from 'react';
import React, { Component } from "react";

const PageButton = () => {

const [ bookCounter, setBookCounter ] = useState(1);

return (

    (bookCounter <= 0)
    ?  console.log('STOP')
    :     
    <div>
        <p>{ console.log(bookCounter)}</p>
        <button onClick={() => setBookCounter(bookCounter - 11) }> Back</button>;
        <button onClick={() => setBookCounter(bookCounter + 10) }> Next</button>;
    </div> 
    )}

export default PageButton;
// On forwards button have an onClick event with a function that increases pageCounter (i.e setPageCounter) by the number of books we want to skip from the first call i.e if the first page shows 10 books we want our bookCounter to go up by 10, and have our list on the next page start on the 11th book. I haven't taken a look at how the google books API does pages but im sure there's a query that we can manipulate to have our results have pages. 
// On backwards button we need to have an onClick event with a function that decreases pageCounter and does an API call with the decreased pageCounter number, so an opposite function of the forward click event function
// both the backward and forward click functions will have api calls within them. So far we have 4 api calls being constructed not including the ones for genres