import React from 'react';

const EmbedVideo = ({ videoId }) => {
  return (
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center my-10 w-11/12 max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-white">Daniel San</h2>
        <EmbedVideo videoId={'wse9Ox0dtEs'} />
      </div>
      <div className="flex flex-col items-center justify-center my-10 w-11/12 max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-white">Daniel San</h2>
        <EmbedVideo videoId={'wse9Ox0dtEs'} />
      </div>
      <div className="flex flex-col items-center justify-center my-10 w-11/12 max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-white">Daniel San</h2>
        <EmbedVideo videoId={'wse9Ox0dtEs'} />
      </div>
    </div>
  );
}
