import React from "react";
import YouTube from "react-youtube";
const YoutubePlayer = ({ video }) => {
  // YOUTUBE VIDEO FUNCTION
  const opts = {
    width: "100%",
    borderRadius: "2rem",
    playerVars: { autoplay: 0 },
  };
  const videoReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <>
      <div>
        <div
          style={{
            width: "800px",
            margin: "auto",
            marginTop: "12px",
            minHeight: "auto",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
                  <YouTube
                      videoId={video}
            opts={opts}
            onReady={videoReady}
          />
        </div>
      </div>
    </>
  );
};

export default YoutubePlayer;