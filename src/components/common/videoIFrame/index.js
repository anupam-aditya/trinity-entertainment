// VideoIframe.js
import React from "react";

function VideoIframe({ videoId, width = 560, height = 315 }) {
  // Construct the YouTube embed URL with loop and playlist parameters
  //   const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=1&modestbranding=1&rel=0`;

  return (
    <iframe
      src={videoId}
      width={width}
      height={height}
      frameBorder="0"
      allowFullScreen
      title="YouTube Video Player"
    ></iframe>
  );
}

export default VideoIframe;
