import React from "react";
import "../index.css";

const YtEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="50vw"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YtEmbed;
