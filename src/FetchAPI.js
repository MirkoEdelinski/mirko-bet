import React, { useEffect, useState } from 'react';

function FetchAPI() {

    const api_key = 'eyJhbGciOiJSUzI1NiIsImtpZCI6Img4LThRX1YwZnlUVHRPY2ZXUWFBNnV2bktjcnIyN1YzcURzQ2Z4bE44MGMiLCJ0eXAiOiJKV1QifQ.eyJhY2Nlc3NfdGllciI6ImFmZmlsaWF0ZSIsImV4cCI6MTk5NDE3NDYyNiwiaWF0IjoxNjc4ODE0NjI2LCJqdGkiOiI3Yzk4ZTI4Mi1hZjUyLTQ0NDUtYjU4Yy1lMzI0YTQ4MDU0Y2MiLCJzdWIiOiJjMDEwOTg4Yi00OTUzLTQ1MDgtYTk5MS1mZmEwYWYzNDJjOWYiLCJ0ZW5hbnQiOiJjbG91ZGJldCIsInV1aWQiOiJjMDEwOTg4Yi00OTUzLTQ1MDgtYTk5MS1mZmEwYWYzNDJjOWYifQ.QnR8tLjyPtAyW3SbowreRVWWnWLk1fPoWRug8y9YkULO-B0hZcJS5r5OdKbcx7RBXXMFKWlU2R3d91suDlbzAnRB4WXiJld7OYVQjedZjxviE3HPq3j0RFEMeUS3m3udUGxVB2FMAnveanfnk26oMOXxD1eXampimgCF9CNotw3QIM8DUisqMvw1h1966j2y9niyyS_-rkaGfSaRrEn8Sw-uqs3UNxLWn6l_KxlcAIFG-RBaXXCmOcZPipov6amriZXtduHq31d1eweNTq6tSFy7c182ijboKYlNx-fliV2EJUD3_tP0MQa4GZ9ZknrWnZNq-y0DQBvva2J7NAz_mA'

    const [match, setMatch] = useState([]);
    const myHeaders = new Headers();
    myHeaders.append('Content-Type','application/json');
    myHeaders.append('X-API-Key',api_key);

    const apiGet = () => {    
        fetch('https://sports-api.cloudbet.com/pub/v2/odds/fixtures?sport=soccer&date=2023-03-18&limit=100', {
            headers: myHeaders,
        })
        .then((response)=>response.json())
        .then((json) => {
            console.log(json);
            setMatch(json.competitions);
        });
};

    useEffect (()=>{
        apiGet();
    },[])

    return (
        <div>
            <ul>
                {/* { <pre>{JSON.stringify(match,null, 2)}</pre> } */
                     match.map(match => <li key={match.key}>{match.name}</li>)
                }
            </ul>
        </div>
    );
}

export default FetchAPI;