"use client";

import Youtube from "react-youtube";

const YoutubeVideo = ( { ytId } ) => {

const option = {
    width: "250",
    height: "200"
} 

  return (
    <div>
      <Youtube 
        videoId={ytId}
        onReady={(e) => e.target.pauseVideo()}
        opts={option}
      />
    </div>
  );
};

export default YoutubeVideo
