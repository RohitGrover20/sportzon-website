"use client";
import NoDataFound from "@/components/NoDataFound";
import React, { useEffect, useState } from "react";
// import ContactForm from "./ContactForm";

function Page() {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const videosPerPage = 5; // Change videos per page to 5

  // Use different video sizes (width and height) in pixels
  const videoSizes = [
    { width: 560, height: 315 },
    { width: 60, height: 30 },
    { width: 70, height: 45 },
  ];

  // Function to fetch videos from the YouTube API
  const fetchVideos = async (page) => {
    // Sample YouTube video URLs (you can replace these with your own YouTube video URLs or use the YouTube API to fetch them)
    const videoUrls = [
      "https://youtu.be/CJc-hVDJxcU?si=O5eY6wYkX6V8Crax", // Video 1
      "https://www.youtube.com/embed/3JZ_D3ELwOQ", // Video 2
      // Add more YouTube video URLs as needed
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    ];

    // For simplicity, use static data for videos (change this to fetch video URLs from the YouTube API)
    const videosData = videoUrls.map((url, index) => ({
      id: index,
      url,
      title: `Video ${index + 1}`,
      description: `Description for Video ${index + 1}`,
    }));

    setVideos(videosData);
    setTotalPages(Math.ceil(videosData.length / videosPerPage));
  };

  // Fetch videos when the component mounts and when the current page changes
  useEffect(() => {
    fetchVideos(currentPage);
  }, [currentPage]);

  // Function to handle pagination
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <section className="gray-simple">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10 col-md-12 col-sm-12 mb-1">
              <div className="sec-heading center">
                <div className="d-inline-flex px-4 py-1 rounded-5 text-info bg-light-info font--medium">
                  <span>Learning Section</span>
                </div>
                <h2>Explore Our Learning Resources</h2>
                <p>Learn Sports Techniques and Strategies with Expert Videos</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="video-grid">
          {videos.map((video, index) => (
            index >= (currentPage - 1) * videosPerPage && index < currentPage * videosPerPage && (
              <div key={video.id} className="video-item">
                <div style={{ width: "500px" }}>
                  <iframe
                    className="card-img-top"
                    width="100%"
                    height="315"
                    src={video.url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )
          ))}
        </div> */}

        {/* Pagination Controls */}
        {/* <div className="pagination-controls">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div> */}
        <div >
          <NoDataFound/>
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  );
}

export default Page;
