import React from 'react';

function HandleName ({e}) {
function HandleClick(Name){
alert(`Bonjour ${Name}`);
}
return (
< a href ="/" onClick={HandleClick(e)}>Bonjour :) </a>

);

}
export default HandleName;