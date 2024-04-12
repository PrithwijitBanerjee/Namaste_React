
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


// React Element without  JSX ...
// const mainDivContainer = React.createElement('div', { className: 'container' },
//     [React.createElement('div', { id: 'first-container', key: 1 },
//         React.createElement('h1', { id: 'first-header' }, 'First Container Element')),
//     React.createElement('div', { id: 'second-container', key: 2 },
//         React.createElement('h1', { id: 'second-header' }, 'Second Container Element'))]);

// React Element with JSX ...
// JSX ===> React Element (by Babel Transplier) ===> JS Object ====> html tag (by render() method)
// const mainDivContainer2 = (<div className="container">
//     <div id="first-container">
//         <h1 id="first-header" className="head">
//             First Container JSX
//         </h1>
//     </div>
//     <div id="second-container">
//         <h1 id="second-header" className="head">
//             Second Container JSX
//         </h1>
//     </div>
// </div>)

// React Component with JSX ....(Component name always should be starts with Capital letter)
// React Functional Component (Stateless Component) ===> Normal JS Function with First letter capital ...
const Container = () => {
    return (<>
            <h1>this is arrow functional component ...</h1>
    </>);
}
// console.log(divContainer.props.children);


// React Element inside React Component ...
// const Container = () => {
//     return (<>
//             <h1>this is arrow functional component ...</h1>
//             {mainDivContainer2}
//     </>);
// }

// React Component inside React Element ...

// const mainDivContainer2 = (<div className="container">
//     <div id="first-container">
//         <h1 id="first-header" className="head">
//             First Container JSX
//         </h1>
//         <Container/>
//     </div>
//     <div id="second-container">
//         <h1 id="second-header" className="head">
//             Second Container JSX
//         </h1>
//     </div>
// </div>)


// Page Become freeze when ...

//React Class Component ...
class ReactComponent extends React.Component {
    render() {
        return (<>
            <h1>this is react class component</h1>
            {reactElement}
        </>)
    }
}

var reactElement = (<div>
    <h1>this is react element</h1>
    <ReactComponent />
</div>);

// Babel does sanitization of API data api.getUsers()...


const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root);

// root.render() ==> converts React Element into html tag and renders it to actual screen (real DOM)
root.render(<Container />); 
