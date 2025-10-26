import { useEffect, useState } from "react";
import "./YouTube.css";

function YoutubeVideos() {
  const [videos, setVideos] = useState([]);

 
  // const API_Key = import.meta.env.VIT_YouTubeAPIKey;
  const key = "AIzaSyB3fhdXue8cw0kVmc-gI1cS5aXhfqfcRG8";
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=${key}`
        );
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.log("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);
  console.log(videos);

  return (
    <>
      <div className="allVideosWrapper">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos
              </div>
            </div>

            {videos?.map((video, i) => {
              let vidId = video.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              return (
                <div key={i} className="col-sm-12 col-md-6">
                  <div className="singleVideoWrapper ">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={video.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {video.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc ">
                        {video.snippet.description}
                      </div>
                      <div className="videoDate">
                        {video.snippet.publishedAt
                          .split("T")[0]
                          .split("-")
                          .reverse()
                          .join("-")}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default YoutubeVideos;
