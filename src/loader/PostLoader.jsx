import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function PostLoader() {
  return (
    <div>
        <SkeletonTheme color="#f2f2ff" highlightColor="#f2f2ff" baseColor="#fff">
        <Skeleton  height='16rem'  width="100%"  style={{ marginBottom: "1rem" }} />
        <Skeleton  height='34px'  width="100%"  style={{ marginBottom: "1rem",  }} />
        <Skeleton  height={10}  width="100%"   />
        <Skeleton  height={10}  width="100%"   />
        <Skeleton  height={10}  width="100%"   style={{ marginBottom: "1.5rem",  }}/>

          <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
            <div style={{ width: "80%" }}>
              <div style={{ display: "flex", width: "100%" }}>
                <Skeleton circle={true} height={40} width={40} />
                <div style={{ display: "flex",  flexDirection: "column", width: "100%",}}>
                  <Skeleton height={14} width="80%" style={{ marginLeft: "1rem", marginBottom: "0.5rem" }}/>
                  <Skeleton  height={10}  width="80%"  style={{ marginLeft: "1rem" }} />
                </div>
              </div>
            </div>
            <div style={{ width: "20%" }}>
              <Skeleton height={24} width="100%" style={{ marginBottom: "0.4rem" }} />
            </div>
          </div>
        </SkeletonTheme>
        </div>
  )
}

export default PostLoader
