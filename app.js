
// Using JS DOM Manipulation ..........

// const divContainer = document.createElement('div');
// divContainer.innerText = 'this is div container';

// const root = document.getElementById('root');

// root.appendChild(divContainer);

import React from "react";
import ReactDOM from "react-dom/client";

// Using React ........

// <div class='container'>
//     <div id='first-container'> 
//          <h1 id='first-header' class='head'>First Container</h1>
//     </div> 
//     <div id='second-container'>  
//          <h1 id='second-header' class='head'>Second Container</h1>
//     </div>      
// </div>
// 
// 



const mainDivContainer = React.createElement('div', { className: 'container' },
    [React.createElement('div', { id: 'first-container', key: 1 },
        React.createElement('h1', { id: 'first-header' }, 'First Container Element')),
    React.createElement('div', { id: 'second-container', key: 2 },
        React.createElement('h1', { id: 'second-header' }, 'Second Container Element'))]);



// console.log(divContainer.props.children);

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root);

root.render(mainDivContainer); 
