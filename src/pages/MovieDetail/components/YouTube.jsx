import React from "react";
import YouTube from "react-youtube";

const YouTubeVideo = ({ videoId }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1, // 자동 재생 활성화
      modestbranding: 1, // YouTube 로고 최소화
      rel: 0, // 재생이 끝난 후 유사 비디오 표시 안 함
    },
  };

  // 핸들러는 컴포넌트 내에서 직접 선언될 수 있습니다.
  const handleReady = (event) => {
    console.log("Player is ready");
    event.target.pauseVideo(); // 비디오 일시 정지
  };

  const handlePlay = (event) => {
    console.log("Video played");
  };

  const handlePause = (event) => {
    console.log("Video paused");
  };

  const handleEnd = (event) => {
    console.log("Video ended");
  };

  const handleError = (event) => {
    console.error("Video playback failed");
  };

  const handleStateChange = (event) => {
    console.log("Player state changed:", event.data);
  };

  const handlePlaybackRateChange = (event) => {
    console.log("Playback rate changed:", event.data);
  };

  const handlePlaybackQualityChange = (event) => {
    console.log("Playback quality changed:", event.data);
  };

  return (
    <div>
      <h2>YouTube Video Example</h2>
      <YouTube
        videoId={videoId} // videoId를 props로 받습니다.
        opts={opts}
        onReady={handleReady}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnd={handleEnd}
        onError={handleError}
        onStateChange={handleStateChange}
        onPlaybackRateChange={handlePlaybackRateChange}
        onPlaybackQualityChange={handlePlaybackQualityChange}
      />
    </div>
  );
};

export default YouTubeVideo;
