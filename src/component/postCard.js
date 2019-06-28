import React, { Component } from 'react';
import CardData from '../data.json';




class PostCard extends React.Component{
    render() {
        return (
            <div className="cardOne">
               {CardData.map((postDetail, index)=>{
                   return(
                        <div className="cardCont">
                            <h1  id="cardTitle">{postDetail.title}</h1>
                                <div className="cardTop">
                                <h2  id="cardSubreddit">{postDetail.subreddit}</h2>
                                <h2 id="cardUser">{postDetail.userposted}</h2>
                                <h2 id="cardTimePosted">{postDetail.timePosted}</h2>
                                <img src={postDetail.img} />
                                </div>
                            <p id="cardPreview">{postDetail.preview}</p>
                        </div>
                   )
               })}
            </div>
        )
            }
    }

export default PostCard;