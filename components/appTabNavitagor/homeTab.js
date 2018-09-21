import React, { Component } from "react";
import { StyleSheet, FlatList, Text, Platform, StatusBar } from "react-native";
import { Icon, Container, Content } from "native-base";
import Post from "./../post/post";
import data from "./../../api/data.json";
import StoryLine from "../storyLine/storyLine";
import Header from "../header";

class homeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  };

  renderPost = ({ item }) => (
    <Post
      name={item.name}
      profilePhoto={item.profilePhoto}
      postPhoto={item.postPhoto}
      likes={item.likes}
      comments={item.comments}
    />
  );

  keyExtractor = item => item.id.toString();

  render() {
    return (
      <Container style={styles.container}>
        <Header
          leftIcon="ios-camera-outline"
          rightIcon="ios-send-outline"
          center="Instagram"
        />
        <Content>
          <StoryLine stories={data.stories} />
          <FlatList
            renderItem={this.renderPost}
            keyExtractor={this.keyExtractor}
            data={data.posts}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  androidHeader: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: "white"
      }
    })
  },
  androidHeaderTitle: {
    ...Platform.select({
      android: {
        alignItems: "flex-end"
      }
    })
  }
});

export default homeTab;
