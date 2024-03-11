import {useEffect, useState} from 'react';
export default function News(){
    const [news,setNews] = useState(null);
    useEffect(() => {
        fetch("https://api.worldnewsapi.com/search-news?text=hurricane&language=en&api-key=7cd4fc7792a442ddaa660b9b5538947c")
        .then((data) => data.json())
        .then((data) => setNews(data))
        .catch((error) => console.log(error));
    },[])
    console.log("news is",news);
    return (
        <div style={{marginTop:"20px",border:"2px solid black"}}>
           <p>News</p> 
            {news ? <img width={200} height={200} src={news.news[0].image}/> :<></>}
            {news ? <h1>news.news[0].title</h1> : <></>}
            {news ? <p>{news.news[0].text.slice(0,500)}...</p> : <></>}
        </div>
    )
}