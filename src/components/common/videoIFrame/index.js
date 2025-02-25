import React from "react";

function VideoIframe({ src, width = 560, height = 315, responsive = false }) {
  if (responsive) {
    const aspectRatio = 9 / 16; // 16:9 aspect ratio (common for Vimeo videos)
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: `${aspectRatio * 100}%`,
        }}
      >
        <iframe
          src={src}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          frameBorder="0"
          allowFullScreen
          title="Video Player"
        ></iframe>
      </div>
    );
  } else {
    return (
      <iframe
        src={src}
        width={typeof width === "number" ? `${width}px` : width}
        height={typeof height === "number" ? `${height}px` : height}
        frameBorder="0"
        allowFullScreen
        title="Video Player"
      ></iframe>
    );
  }
}

export default VideoIframe;
