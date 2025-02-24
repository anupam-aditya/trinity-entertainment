// VideoIframe.js
import React from "react";

function VideoIframe({ videoPath, width = 560, height = 315 }) {
  return (
    <iframe
      src={videoPath}
      width={width}
      height={height}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
}

export default VideoIframe;
