import React, { Component } from "react";
import { FlatList, Text, StyleSheet } from "react-native";

class comments extends Component {
  renderComment = ({ item }) => (
    <Text>
      <Text style={styles.commentProfile}>{item.name} </Text>
      {item.content}
    </Text>
  );

  keyExtractor = item => item.id.toString();

  render() {
    return (
      <FlatList
        style={{ marginLeft: 15, marginBottom: 5 }}
        renderItem={this.renderComment}
        keyExtractor={this.keyExtractor}
        data={this.props.comments}
      />
    );
  }
}

const styles = StyleSheet.create({
  commentProfile: {
    fontWeight: "900"
  }
});

export default comments;
