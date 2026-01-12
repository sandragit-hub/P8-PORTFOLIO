import { useEffect, useState } from "react";

function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const videoUrl = "/assets/background.mp4"; // ta nouvelle vidéo

  useEffect(() => {
    const video = document.createElement("video");
    video.src = videoUrl;

    let interval;

    // Quand la vidéo est chargée (metadata / data)
    video.onloadeddata = () => {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(onFinish, 300);
            return 100;
          }
          return prev + 2;
        });
      }, 20);
    };

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [onFinish, videoUrl]);

  return (
    <div className="loader-container">
      <div className="loading-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default Loader;
