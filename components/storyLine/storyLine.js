import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Thumbnail, Icon } from "native-base";

class storyLine extends Component {
  renderStory = ({ item }) => (
    <Thumbnail style={styles.story} source={{ uri: item.story }} />
  );

  keyExtractor = item => item.id.toString();

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>Stories</Text>
          <View style={styles.playAll}>
            <Icon name="md-play" style={{ fontSize: 14 }} />
            <Text style={{ fontWeight: "bold" }}>Watch all</Text>
          </View>
        </View>
        <View style={styles.storyline}>
          <FlatList
            horizontal={true}
            alwaysBounceHorizontal={true}
            bounces={true}
            showsHorizontalScrollIndicator={false}
            data={this.props.stories}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderStory}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { height: 100 },
  text: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 7
  },
  storyline: { flex: 3 },
  story: {
    marginHorizontal: 5,
    borderColor: "pink",
    borderWidth: 2
  },
  playAll: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default storyLine;
