import React from 'react';
import Loader from 'react-loader-spinner';

export default class LoaderNew extends React.Component {
   render() {
    return(
        <div className='loading'>
            <Loader
                type="TailSpin"
                color="#ff6347"
                height={100}
                width={100}
            />
        </div>
    );
   }
}