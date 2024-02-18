import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function PostDetailsLoader() {
  return (
        <div>
        <SkeletonTheme color="#FFFF" highlightColor="#FFF">
              <div style={{ display: "flex", width: "100%" , gap: '20px'}}>
                <Skeleton circle={true} height={45} width={45} style={{marginLeft: '2rem'}} />
                <div style={{ display: "flex",  flexDirection: "column", width: "100%",}}>
                  <Skeleton height={16} width="90%" style={{  marginBottom: "0.5rem" }}/>
                  <Skeleton  height={11}  width="90%" />
                </div>
              </div>
                  <Skeleton height={43} width="87%" style={{ marginLeft: '2rem', marginTop: "2rem" }}/>
                  <Skeleton height='300px' width="87%" style={{ marginLeft: '2rem', marginTop: "1.5rem" }}/>
                  <Skeleton height={11} width="87%" style={{ marginLeft: '2rem', marginTop: "2.8rem" }}/>
                  <Skeleton height={11} width="87%" style={{ marginLeft: '2rem' }}/>
                  <Skeleton height={11} width="87%" style={{ marginLeft: '2rem' }}/>
                  <Skeleton height={11} width="87%" style={{ marginLeft: '2rem' }}/>
                  <Skeleton height={11} width="87%" style={{ marginLeft: '2rem' }}/>
                  <Skeleton height={11} width="87%" style={{ marginLeft: '2rem' }}/>
                  <Skeleton height={11} width="70%" style={{ marginLeft: '2rem' }}/>

        </SkeletonTheme>
        </div>
  )
}

export default PostDetailsLoader
