import React from 'react';
import ReactPlayer from 'react-player';

interface CustomReactPlayerProps {
  url: string;
  playing: boolean;

  onCustomPlay?: () => void; // Optional prop
  onCustomPause?: () => void; // Optional prop
}

const CustomReactPlayer: React.FC<CustomReactPlayerProps> = ({
  url,
  playing,
  onCustomPlay,
  onCustomPause,
}) => {
  return (
    <ReactPlayer
      url={url}
      controls={true}
      playing={playing}
      onPlay={() => onCustomPlay && onCustomPlay()}
      onPause={() => onCustomPause && onCustomPause()}
      width='80%'
      height='80%'
    />
  );
};

export default CustomReactPlayer;
