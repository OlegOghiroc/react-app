import React from 'react';
import ReactDOM from 'react-dom';

const elem = React.createElement('div',{a:6,b:8}, 'привіт',' ', 'світ');
console.log(elem)

ReactDOM.render(elem, document.querySelector('#root'));