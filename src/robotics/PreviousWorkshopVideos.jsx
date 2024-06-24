import React, { useState } from 'react';
import Modal from 'react-modal';

const videos = [
  { 
    title: "DIY Bot Building Workshop", 
    description: "An introductory workshop on the basics of robotics.",
    link: "https://www.youtube.com/embed/kEVcw-qdW0Y",
    
  },
  { 
    title: "Robo Race and Drone Workshop", 
    description: "Advanced concepts in robotics and their applications.",
    link: "https://www.youtube.com/embed/J9AmjGMmBwk",
   
  },
  { 
    title: "Tech Explorers Summer Camp", 
    description: "Exploring the role of AI in robotics.",
    link: "https://www.youtube.com/embed/jA-MGaD77Cc",
   
  },
  { 
    title: "Summer Camp Water Level Indicator", 
    description: "Hands-on session on building robots.",
    link: "https://www.youtube.com/embed/obB83AocPEs",
    
  },
  { 
    title: "Project - DIY Bots", 
    description: "Programming techniques for robotics.",
    link: "https://www.youtube.com/embed/halMLKrmjZ0",
    
  },
  { 
    title: "Drone Basics and Hands-on", 
    description: "Discussion on the future trends in robotics.",
    link: "https://www.youtube.com/embed/LS1Y6UeSPBs",
   
  },
];

const PreviousWorkshopVideos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [videoType, setVideoType] = useState("youtube");

  const openModal = (link, type) => {
    setCurrentVideo(link);
    setVideoType(type);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentVideo("");
    setVideoType("youtube");
  };

  return (
    <section className="py-8">
      <h2 className="text-4xl font-bold text-center mb-12 ">Previous Workshop Videos</h2>
      <div className="flex flex-wrap justify-center">
        {videos.map((video, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-8 mx-4 flex items-center justify-center">
            <div className="shadow-lg rounded-lg overflow-hidden w-full" onClick={() => openModal(video.link, "youtube")}>
              {videoType === "youtube" && (
                <iframe
                  width="100%"
                  height="200"
                  src={video.link}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
              {videoType === "map" && (
                <iframe
                  width="100%"
                  height="200"
                  src={video.location}
                  title="Google Maps location"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              )}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-center">{video.title}</h3>
                <p className="text-center">{video.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video/Map Modal"
        className="flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="bg-white p-4 rounded-lg max-w-4xl w-full">
          <button onClick={closeModal} className="text-right w-full">
            <span className="text-gray-600 text-xl">&times;</span>
          </button>
          {videoType === "youtube" && (
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="350"
                height="450" // Adjusted height for larger iframe
                src={currentVideo.replace("watch?v=", "embed/")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          {videoType === "map" && (
            <iframe
              width="100%"
              height="450"
              src={currentVideo}
              title="Google Maps location"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </Modal>
    </section>
  );
};

export default PreviousWorkshopVideos;
