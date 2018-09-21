import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "native-base";

const editProfile = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Button bordered dark style={styles.editProfile} onPress={onPress}>
        <Text>Edit Profile</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", paddingTop: 10 },
  editProfile: {
    flex: 3,
    marginLeft: 10,
    justifyContent: "center",
    height: 30,
    marginRight: 10
  }
});

export default editProfile;
