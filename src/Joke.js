import React from 'react';
import date from './date';
import './Joke.css';

function Joke({data}) {
    const {
        updated_at,
        value,
        url,
        id,
        categories
    } = data;
    
    if(data.length === 0) return null;
    
    const updatedHrsAgo = date(updated_at);

    console.log(id,data);
    return (
        <div className="joke-wrapper">
           <div className="joke-link">
                ID: <a href={`${url}`} target="_blank">{id}</a>
           </div>
           <div className="joke-value">
                {value}
           </div>
           <div className="joke-footer">
               <div className="joke-updatedAt">
                {`Last update: ${updatedHrsAgo} hours ago`}
                </div>
                <div className="joke-categories">
                    {
                        categories.length ? 
                        categories.map(cat => {
                            return <div className="category-item" key={cat}>{cat}</div>
                        }) : null
                    }
                </div>
           </div>
           
        </div>
    );
}

export default Joke;