import React from "react";

function VideoIframe({ src, width = 560, height = 315, responsive = false }) {
  if (responsive) {
    const aspectRatio = 9 / 16; // 16:9 aspect ratio (common for Vimeo videos)
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          margin: "0 0 -4px",
        }}
      >
        <video
          controls
          muted
          autoPlay
          loop
          playsinline
          style={{ maxWidth: "100%" }}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
