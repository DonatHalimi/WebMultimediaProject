import { useEffect, useRef } from "react";

const Video = () => {
    const videoRef = useRef(null);

    // Start the video at 25% volume
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = 0.25;
        }
    }, []);

    return (
        <video ref={videoRef} src='../../src/Video.mp4' controls className='mx-auto my-auto mb-40'></video>
    )
}

export default Video;