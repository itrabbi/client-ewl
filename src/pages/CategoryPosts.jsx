import React, { useEffect, useState } from "react";
import PostItem from "../components/PostItem";
import Loader from "../components/Loader";
import axios from "axios";
import { useParams } from "react-router-dom";

function CategoryPosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {category} = useParams()

  useEffect(()=>{
    const fechPosts = async () =>{
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/categories/${category}`)
        setPosts(response.data)
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    }
    fechPosts();
  },[category])

  if(isLoading){
    return <Loader/>;
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

export default CategoryPosts;
