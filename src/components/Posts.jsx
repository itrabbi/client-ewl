import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import axios from "axios";
import PostLoader from "../loader/PostLoader";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/posts`
        );
        setPosts(response.data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <section className="container posts__container">
        {/* Show loaders while loading */}
        {[...Array(9)].map((_, index) => (
          <PostLoader key={index} />
        ))}
      </section>
    );
  }

  return (
    <section className="posts">
      {posts.length > 0 ? (
        <div className="container posts__container">
          {posts.map(
            ({
              _id: id,
              thumbnail,
              category,
              title,
              description,
              createdAt,
              creator,
              viewCount,
            }) => (
              <PostItem
                key={id}
                postID={id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={description}
                authorID={creator}
                createdAt={createdAt}
                viewCount={viewCount}
              />
            )
          )}
        </div>
      ) : (
        <h2 className="center">No Posts Found</h2>
      )}
    </section>
  );
}

export default Posts;
