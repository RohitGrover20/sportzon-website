"use client";
import NoDataFound from "@/components/NoDataFound";
import React, { useEffect, useState } from "react";

function Page() {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const videosPerPage = 5;

  // Function to fetch videos from the YouTube API
  const fetchVideos = async (page) => {
    // Sample YouTube video URLs (you can replace these with your own YouTube video URLs or use the YouTube API to fetch them)
    const videoUrls = [
      "https://youtu.be/CJc-hVDJxcU?si=O5eY6wYkX6V8Crax",
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

  useEffect(() => {
    fetchVideos(currentPage);
  }, [currentPage]);

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
        <div>
          <NoDataFound />
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  );
}

export default Page;
