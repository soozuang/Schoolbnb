
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { transparentHeaderStyle } from '../styles/navigation';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

const navigateToTabsAction = NavigationActions.navigate({
  routeName: 'LoggedIn',
});

export default class TurnOnNotifications extends Component {
  static navigationOptions = () => ({
    headerLeft: null,
    headerStyle: transparentHeaderStyle,
    gesturesEnabled: false,
  });

  constructor(props) {
    super(props);

    this.state = {
      pressStatusNotifyBtn: false,
      pressStatusSkipBtn: false,
    };

    this.handleNotifyBtnHideUnderlay = this.handleNotifyBtnHideUnderlay.bind(this);
    this.handleNotifyBtnShowUnderlay = this.handleNotifyBtnShowUnderlay.bind(this);
    this.handleSkipBtnHideUnderlay = this.handleSkipBtnHideUnderlay.bind(this);
    this.handleSkipBtnShowUnderlay = this.handleSkipBtnShowUnderlay.bind(this);
  }

  handleNotifyBtnHideUnderlay() {
    this.setState({ pressNotifyBtn: false });
  }

  handleNotifyBtnShowUnderlay() {
    this.setState({ pressNotifyBtn: true });
  }

  handleSkipBtnHideUnderlay() {
    this.setState({ pressSkipBtn: false });
  }

  handleSkipBtnShowUnderlay() {
    this.setState({ pressSkipBtn: true });
  }

  render() {
  	const { pressNotifyBtn, pressSkipBtn } = this.state;

  	return (
  	  <View style={styles.wrapper}>
  	    <View style={styles.content}>
  	      <Icon
  	        name="comments-o"
  	        size={46}
  	        style={styles.icon}
  	      />
  	      <Text style={styles.title}>
  	        Bật thông báo?
  	      </Text>
  	      <Text style={styles.description}>
  	        Chúng tôi sẽ thông báo cho bạn những tin quan trọng
  	      </Text>
  	      <TouchableHighlight
  	        style={[{ backgroundColor: pressNotifyBtn ? colors.green02 : colors.green01 }, styles.notifyButton]}
  	        onPress={() => this.props.navigation.dispatch(navigateToTabsAction)}
  	        onShowUnderlay={this.handleNotifyBtnShowUnderlay}
  	        onHideUnderlay={this.handleNotifyBtnHideUnderlay}
  	        underlayColor={colors.green02}
  	      >
  	        <Text style={[{ color: colors.white }, styles.buttonText]}>Thông báo cho tôi</Text>
  	      </TouchableHighlight>
  	      <TouchableHighlight
  	        style={[{ backgroundColor: pressSkipBtn ? colors.gray01 : 'transparent' }, styles.skipButton]}
  	        onPress={() => this.props.navigation.dispatch(navigateToTabsAction)}
  	        onShowUnderlay={this.handleSkipBtnShowUnderlay}
  	        onHideUnderlay={this.handleSkipBtnHideUnderlay}
  	        underlayColor={colors.gray01}
  	      >
  	        <Text style={[{ color: colors.green01 }, styles.buttonText]}>Bỏ qua</Text>
  	      </TouchableHighlight>
  	    </View> 
  	  </View>
  	);
  }
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    marginTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
  },
  icon: {
    color: colors.green01,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    color: colors.black,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    paddingRight: 30,
    marginTop: 15,
    lineHeight: 22,
  },
  notifyButton: {
  	width: 160,
  	paddingTop: 12,
  	paddingBottom: 12,
  	borderRadius: 3,
  	marginTop: 40,
  },
  buttonText: {
  	fontSize: 18,
  	fontWeight: '600',
  	alignSelf: 'center',
  },
  skipButton: {
  	borderColor: colors.green01,
  	width: 100,
  	borderWidth: 2,
  	paddingTop: 12,
  	paddingBottom: 12,
  	borderRadius: 3,
  	marginTop: 15,
  }
});

TurnOnNotifications.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
};
