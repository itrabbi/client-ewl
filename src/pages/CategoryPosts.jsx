import React, { useState } from "react";
import { DUMMY_POSTS } from "../data";
import PostItem from "../components/PostItem";

function CategoryPosts() {
  const [posts, setPosrs] = useState(DUMMY_POSTS);
  return (
    <section>
      {posts.length > 0 ? (
        <div className="container posts__container">
          {posts.map(
            ({ id, thumbnail, category, title, description, authorID }) => (
              <PostItem
                key={id}
                postId={id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={description}
                authorID={authorID}
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
