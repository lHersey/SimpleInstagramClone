import React from "react";
import { Text, Platform, StatusBar, StyleSheet } from "react-native";
import { Header, Left, Icon, Right, Body } from "native-base";

const header = ({ leftIcon, leftType, rightIcon, rightIconType, center }) => {
  return (
    <Header style={[styles.androidHeader]}>
      <Left>
        <Icon type={leftType} name={leftIcon} style={{ paddingLeft: 10 }} />
      </Left>
      <Body style={[styles.androidHeaderTitle]}>
        <Text>{center}</Text>
      </Body>
      <Right>
        <Icon
          type={rightIconType}
          name={rightIcon}
          style={{ paddingRight: 10, fontSize: 32 }}
        />
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({
  androidHeader: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: "white",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "rgb(233,233,233)"
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

export default header;
