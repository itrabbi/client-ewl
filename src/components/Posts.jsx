import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import Loader from "./Loader";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    const fechPosts = async () =>{
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`)
        setPosts(response.data)
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    }
    fechPosts();
  },[])

  if(isLoading){
    return <Loader />;
  }

  return (
    <section className="posts">
      {posts.length > 0 ? (
        <div className="container posts__container">
          {posts.map(
            ({ _id: id, thumbnail, category, title, description,createdAt, creator }) => (
              <PostItem
                key={id}
                postID={id} 
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={description}
                authorID={creator}
                createdAt={createdAt}
              />
            )
          )}
        </div>
      ) : (
        <h2 className="center">No Post Founds</h2>
      )}
    </section>
  );
}

export default Posts;
