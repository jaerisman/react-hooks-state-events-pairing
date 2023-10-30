import React from "react";

function VideoPlayer( { video } ){

    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title={video.title}
            />
            <h2>{video.title}</h2>
            <p>Views: {video.views} | Created At: {video.createdAt}</p>
        </div>
    );
};

export default VideoPlayer;