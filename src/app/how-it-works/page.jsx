'use client';
import Image from 'next/image';
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

const Thumbnail = ({image}) => {
  return(
    <Image src={image} width={200} height={250} alt='demo video' />
  )
}

export default function Page() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="flex flex-col items-center justify-center">

      {/* <div> */}
      <div className='flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50 bg-opacity-10 p-10 mt-20 text-white w-full'>
        <div onClick={() => scrollToSection("video1")} className='flex-1'>
          <Thumbnail image={'/multidst_trailer.png'} />
          <h2>Why should you choose MultiDST?</h2>
        </div>
        <div onClick={() => scrollToSection("video2")}  className='flex-1'>
          <Thumbnail image={'/MultiDST_Python_Thumb.png'} />
          <h2>How to use MultiDST Python library</h2>
        </div>
        <div onClick={() => scrollToSection("video3")}  className='flex-1'>
          <Thumbnail image={'/gene_thumb.png'} />
          <h2>Example using genomic data</h2>
        </div>
        <div onClick={() => scrollToSection("video3")}  className='flex-1'>
          <Thumbnail image={'/finance_thumb.png'} />
          <h2>Example using financial data</h2>
        </div>
        <div onClick={() => scrollToSection("docs")} className='flex-1'>
        <Thumbnail image={'/MultiDST_Documentation.png'} />
          <h2>Other related documentation</h2>
        </div>
        </div>
      {/* </div> */}

      <div className="flex flex-col items-center justify-center my-10 w-11/12 max-w-4xl" id='video1'>
        <h2 className="text-2xl font-bold mb-4 text-white">How to use MultiDST website for simplified multiple testing</h2>
        <EmbedVideo videoId={'ZIJMnMGUrQs'} />
      </div>
      <div className="flex flex-col items-center justify-center my-10 w-11/12 max-w-4xl" id='video2'>
        <h2 className="text-2xl font-bold mb-4 text-white">How to use MultiDST Python library</h2>
        <EmbedVideo videoId={'OLqbyn_jqZI'} />
      </div>
      <div className="flex flex-col items-center justify-center my-10 w-11/12 max-w-4xl" id='video3'>
        <h2 className="text-2xl font-bold mb-4 text-white">Example using genomic data</h2>
        <EmbedVideo videoId={'UMfYeCbxDgI'} />
      </div>
      <div className="flex flex-col items-center justify-center my-10 w-11/12 max-w-4xl" id='video3'>
        <h2 className="text-2xl font-bold mb-4 text-white">Example using financial data</h2>
        <EmbedVideo videoId={'UMfYeCbxDgI'} />
      </div>
      <div className="flex flex-col items-center bg-slate-50 rounded-md bg-opacity-10 justify-center my-10 w-11/12 max-w-4xl text-white p-4" id='docs'>
        <h2 className="text-2xl font-bold mb-4 ">Documentation Links</h2>
        <div className='flex flex-col w-full'>
        <a href="https://pypi.org/project/multidst/" target='_blank'>Python Library: MultiDST v0.1.9</a>
        <a href="https://multidst-docs-2.readthedocs.io/en/latest/" target='_blank'>MultiDST Documentation</a>
        </div>
      </div>
    </div>
  );
}
