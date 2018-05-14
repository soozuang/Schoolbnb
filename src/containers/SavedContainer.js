
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NoResults from '../components/saved/NoResults';
import colors from '../styles/colors';

export default class SavedContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'ƯA THÍCH',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="ios-heart-outline"
        size={26}
        color={tintColor}
      />
    ),
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <NoResults />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    backgroundColor: colors.white,
  },
});