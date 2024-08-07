import React from 'react';
import banner from '../../assets/images/ny-videos__banner.jpeg';
import '../../assets/css/VideoBanner.css';

function VideosBanner() {
  return (
    <div className='ny-videos__banner'>
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-md-6 ny-videos__banner__text">
            <h1 className='mb-1'>Videos</h1>
            <br></br>
            <p className='mb-5'>Dive into our extensive collection of instructional videos and <br></br>embark on a transformative yoga journey at your own pace.</p>
          </div>
          <div className="col-md-6 ny-videos__banner__img">
            <img src={banner} alt="woman in yoga pose" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideosBanner;
