import React from 'react';
import './work-card.css';

function WorkCard({item}) {
    return (


      
       <div class="wrapper" id="app">
             <div class="card-form">
               <div class="card-list">
                 <div class="card-item -front">
                   <div class="card-item__side">
                     <div class="card-item__cover">
                       <img src={item.companyLogo} alt="work" height="100%" width="100%" />
                     </div>
                   </div>
                 </div>
               </div>
               <div class="card-form__inner">
                   <div class="card-title">{item.company}</div>
                
                   <div class="card-description">
                     <p> {item.work} </p>
                   </div>
                   <div class="price">
                     <p> <span class="new-price">{item.dateJoining}</span> <span class="new-price"><span class="sr-only"> - </span>{item.dateEnd} </span>
                     </p>
                   </div>
                   <button class="card-form__button">{item.designation}</button>
                 </div>
               </div>
             </div>
       








            
    )
}

export default WorkCard;