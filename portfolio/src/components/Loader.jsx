import { useEffect, useState } from "react";

function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    // Quand la vidéo est chargée (metadata / data)

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

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [onFinish]);

  return (
    <div className="loader-container">
      <div className="loading-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default Loader;
