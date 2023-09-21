import React from "react";
import YouTube from "react-youtube";
import "./TrailerModal.css";

interface TrailerModalProps {
  trailerUrl: string;
  onClose: () => void;
}

const TrailerModal: React.FC<TrailerModalProps> = ({ trailerUrl, onClose }) => {
  return (
    <div className="trailer-modal">
      <YouTube videoId={trailerUrl} />
      <button className="trailer-modal__close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default TrailerModal;
