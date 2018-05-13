import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import { transparentHeaderStyle } from '../styles/navigation';
import RoundedButton from '../components/buttons/RoundedButton';
import NavBarButton from '../components/buttons/NavBarButton';
import iPhoneSize from '../helpers/utils';

const size = iPhoneSize();
let termsTextSize = 13;
let headingTextSize = 30;

if (size === 'small') {
  termsTextSize = 12;
  headingTextSize = 26;
}

export default class LoggedOut extends Component {


  constructor(props) {
    super(props);
    this.onCreateAccountPress = this.onCreateAccountPress.bind(this)
  }

  static navigationOptions = ({ navigation }) => ({
    headerRight: <NavBarButton handleButtonPress={() => navigation.navigate('LogIn')} location="right" color={colors.white} text="Đăng nhập" />,
    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.white,
  });

  onFacebookPress() {
    alert('Facebook button pressed');
  }

  onCreateAccountPress() {
    const { navigate } = this.props.navigation;
    navigate('CreateAccount');
  }

  onMoreOptionsPress() {
    alert('More options button pressed');
  }

  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image
            source={require('../img/VNUFinder.gif')}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>Chào mừng bạn đến với VNUFinder</Text>
          <RoundedButton
            text="Đăng nhập với Facebook"
            textColor={colors.green01}
            background={colors.white}
            icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon} />}
            handleOnPress={this.onFacebookPress}
          />
          <RoundedButton
            text="Tạo tài khoản mới"
            textColor={colors.white}
            handleOnPress={this.onCreateAccountPress}
          />

          {/* <TouchableHighlight
            style={styles.moreOptionsButton}
            onPress={this.onMoreOptionsPress}
          >
            <Text style={styles.moreOptionsButtonText}>More options</Text>
          </TouchableHighlight> */}

          <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>Khi tiếp tục sử dụng các tính năng của</Text>
            <Text style={styles.termsText}>chương trình, </Text>
            <Text style={styles.termsText}>bạn đã đồng ý với </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Điều khoản</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Chính sách bảo mật </Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>của </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>VNUFinder</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.green01,
  },
  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    marginTop: 30,
    padding: 20,
  },
  logo: {
    width: 70,
    height: 70,
    marginTop: 25,
    marginBottom: 35,
  },
  welcomeText: {
    fontSize: headingTextSize,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
  },
  facebookButtonIcon: {
    color: colors.green01,
    position: 'relative',
    left: 20,
    zIndex: 8,
  },
  moreOptionsButton: {
    marginTop: 10,
  },
  moreOptionsButtonText: {
    color: colors.white,
    fontSize: 16,
  },
  termsAndConditions: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 30,
  },
  termsText: {
    color: colors.white,
    fontSize: termsTextSize,
    fontWeight: '600',
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  }
});