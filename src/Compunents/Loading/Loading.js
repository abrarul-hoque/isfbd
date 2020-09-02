import React from 'react';
import Loader from '../../resource/image/loader.gif'

const Loading = (props) => {
    return (
        <div className="text-center col-12 py-5 my-5" style={{display: props.visibility}}>
            <img src={Loader} alt=""/>
        </div>
    );
};

export default Loading;