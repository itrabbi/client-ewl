import React ,{useContext, useEffect, useState,} from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link, useParams } from 'react-router-dom'
import axios from "axios";
import { UserContext } from '../context/userContext'
import Loader from '../components/Loader'
import DeletePost from './DeletePost'
import { IoIosEye } from "react-icons/io";



function PostDetail() {
  const {id} = useParams()
  const [post, setPost] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const {currentUser} = useContext(UserContext)

  useEffect(() =>{
    const getPost = async () =>{
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`)
        setPost(response.data)
      } catch (error) {
        setError(error)
      }
      setIsLoading(false)
    }

    getPost()
  }, [])

  if(isLoading) {
    return <Loader />
  }

  return (
    <section className='post-detail'>
    {error && <p className='error'>{error}</p>}
     {post && <div className="container post-detail__container">
     {currentUser?.id == post?.creator && <div className="post-detail__buttons">
            <Link to={`/posts/${post._id}/edit`} className='btn sm primary'>Edit</Link>
            <DeletePost postId={id}/>
          </div>}
        <div className="post-detail__header">
          <PostAuthor authorID={post.creator} createdAt={post.createdAt}/>
          <p className='view'><IoIosEye /> {post.viewCount}</p>
        </div>
        <h1>{post.title}</h1>
        <div className="post-detail__thumbnail">
          <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`} alt={post.title} />
        </div>
        <div dangerouslySetInnerHTML={{__html: post.description}}></div>
      </div>}
    </section>
  )
}

export default PostDetail
// <Link to={`/posts/easyweblearner/delete`} className='btn sm danger'>Delete</Link>