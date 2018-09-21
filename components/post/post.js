import React, { Component } from "react";
import PostPhoto from "./postPhoto";
import IconBar from "./iconBar";
import LikesCount from "./likesCount";
import UserBar from "./userBar";
import Comments from "./comments";

class post extends Component {
  state = {
    liked: false
  };

  handleLike = () => {
    this.setState(prevState => ({
      liked: !prevState.liked
    }));
  };

  render() {
    const { name, profilePhoto, postPhoto, likes, comments } = this.props;
    const totalLikes = this.state.liked ? likes + 1 : likes;

    return (
      <React.Fragment>
        <UserBar name={name} profilePhoto={profilePhoto} />
        <PostPhoto postPhoto={postPhoto} handleLike={this.handleLike} />
        <IconBar onHeartPress={this.handleLike} />
        <LikesCount likes={totalLikes} />
        <Comments comments={comments} />
      </React.Fragment>
    );
  }
}

export default post;
