import React, { useState } from 'react';
import Modal from 'react-modal';

// Import your thumbnail images
import Thumbnail1 from '../assets/diy.png';
import Thumbnail2 from '../assets/race.png';
import Thumbnail3 from '../assets/tec.png';
import Thumbnail4 from '../assets/water.png';
import Thumbnail5 from '../assets/sc.png';
import Thumbnail6 from '../assets/drone.png';

const videos = [
  { 
    title: "DIY Bot Building Workshop", 
    description: "An introductory workshop on the basics of robotics.",
    link: "https://www.youtube.com/watch?v=kEVcw-qdW0Y",
    thumbnail: Thumbnail1 // Replace with actual image import
  },
  { 
    title: "Robo Race and Drone Workshop", 
    description: "Advanced concepts in robotics and their applications.",
    link: "https://www.youtube.com/watch?v=J9AmjGMmBwk",
    thumbnail: Thumbnail2 // Replace with actual image import
  },
  { 
    title: "Tech Explorers Summer Camp", 
    description: "Exploring the role of AI in robotics.",
    link: "https://www.youtube.com/watch?v=jA-MGaD77Cc",
    thumbnail: Thumbnail3 // Replace with actual image import
  },
  { 
    title: "Summer Camp Water Level Indicator", 
    description: "Hands-on session on building robots.",
    link: "https://www.youtube.com/watch?v=obB83AocPEs",
    thumbnail: Thumbnail4 // Replace with actual image import
  },
  { 
    title: "Project - DIY Bots", 
    description: "Programming techniques for robotics.",
    link: "https://www.youtube.com/watch?v=halMLKrmjZ0",
    thumbnail: Thumbnail5 // Replace with actual image import
  },
  { 
    title: "Drone Basics and Hands-on", 
    description: "Discussion on the future trends in robotics.",
    link: "https://www.youtube.com/watch?v=LS1Y6UeSPBs",
    thumbnail: Thumbnail6 // Replace with actual image import
  },
];

const PreviousWorkshopVideos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const openModal = (link) => {
    setCurrentVideo(link);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentVideo("");
  };

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Previous Workshop Videos</h2>
      <div className="flex flex-wrap justify-center">
        {videos.map((video, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-8 mx-4 flex items-center justify-center">
          <div className="shadow-lg rounded-lg overflow-hidden">
            <button onClick={() => openModal(video.link)} className="focus:outline-none">
              <img
                src={video.thumbnail} 
                alt={`Thumbnail for ${video.title}`}
                className="w-full h-56 object-cover"
              />
            </button>
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
        contentLabel="Video Modal"
        className="flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="bg-white p-4 rounded-lg max-w-4xl w-full">
          <button onClick={closeModal} className="text-right w-full">
            <span className="text-gray-600 text-xl">&times;</span>
          </button>
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
        </div>
      </Modal>
    </section>
  );
};

export default PreviousWorkshopVideos;
