import React from'react';
import PropTypes from 'prop-types';

const Profile = ({children,FullName,Bio,Profession})=> {
    function HandleClick (Name){
        alert(`Bonjour ${Name}`);
        } 
    return (
        <div style={{backgroundColor:'pink',width:450, marginLeft:'470px'}}>
<p>{children}</p>
< a href ="/" onClick={()=>HandleClick(FullName)}>Bonjour :) </a> 
<h1>Full Name: {FullName}</h1>
<h1>BIO : {Bio}</h1>
<h1>Profession : {Profession}</h1>

        </div>
    );
};
Profile.propTypes={
    FullName: PropTypes.string,
    Bio: PropTypes.string,
    Profession: PropTypes.string,
}
Profile.defaultProps={
FullName:"Name Default",
Bio:"Bio Default",
Profession:"Profession Default",

}

export default Profile;