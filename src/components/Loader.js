import React from 'react';
import Loader from 'react-loader-spinner';

function LoaderNew () {  

    return(
        <div className='loading'>
            <Loader
                type="TailSpin"
                color="#ff6347"
                height={100}
                width={100}
            />
        </div>
    )
  }
  
  export default LoaderNew;