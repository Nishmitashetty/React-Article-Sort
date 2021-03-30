import React,{useState} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

 
    const [articlesort, setArticlesSort] = useState("upvotesort");

let sortArticles =()=>{
        if(articlesort ==="upvotesort"){
            let sortedarray =   articles.sort((a,b) => (b.upvotes > a.upvotes) ? 1 : ((a.upvotes > b.upvotes) ? -1 : 0));
            return sortedarray;
        }else{
            let sortedarray =   articles.sort((a,b) => (new Date(b.date) > new Date(a.date)) ? 1 : ((new Date(a.date) > new Date(b.date)) ? -1 : 0));
            return sortedarray;
        }
    }
    articles  = sortArticles();

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={()=>setArticlesSort("upvotesort")}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={()=>setArticlesSort("datesort")}>Most Recent</button>
            </div>
            <Articles articles={articles}/>
        </div>
    );

}

export default App;
