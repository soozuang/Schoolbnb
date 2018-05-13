
import React, { Component } from 'react';
import {
  Alert,
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import { transparentHeaderStyle } from '../styles/navigation';
import InputField from '../components/form/InputField';
import Notification from '../components/Notification';
import NextArrowButton from '../components/buttons/NextArrowButton';
import NavBarButton from '../components/buttons/NavBarButton';
import Loader from '../components/Loader';
import iPhoneSize from '../helpers/utils';
import { firebaseApp } from '../components/FirebaseConfig'
const size = iPhoneSize();
const headingTextSize = 30;

if (size === 'small') {
  headingTextSize = 26;
}

export default class ForgotPassword extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerLeft: <NavBarButton
      handleButtonPress={() => navigation.goBack()}
      location="left"
      icon={<Icon name="angle-left" color={colors.white} size={30} />}
    />,
    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.white,
  });

  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      loadingVisible: false,
      validEmail: false,
      validPassword1: false,
      validPassword2: false,
      emailAddress: '',
      password1: '',
      password2: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.goToNextStep = this.goToNextStep.bind(this);
    this.handleCloseNotification = this.handleCloseNotification.bind(this);
    this.handlePass1Change = this.handlePass1Change.bind(this);
    this.handlePass2Change = this.handlePass2Change.bind(this);
  }

  handlePass1Change(password) {
    this.setState({ password1: password })
    if (password === '' || password === null || password.length < 8) {
      this.setState({ validPassword1: false })
    }
    else {
      this.setState({ validPassword1: true })
    }
  }

  handlePass2Change(password) {
    this.setState({ password2: password })
    if (password === this.state.password1 && password !== '' && password !== null && password.length > 7) {
      this.setState({ validPassword2: true })
    }
    else this.setState({ validPassword2: false })
  }

  handleEmailChange(email) {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({ emailAddress: email });

    if (!this.state.validEmail) {
      if (emailCheckRegex.test(email)) {
        this.setState({ validEmail: true });
      }
    } else {
      if (!emailCheckRegex.test(email)) {
        this.setState({ validEmail: false });
      }
    }
  }

  goToNextStep() {
    const email = this.state.emailAddress
    const pass = this.state.password2
    const { navigate } = this.props.navigation;
    if (this.state.emailAddress === 'wrong@email.com') {
      this.setState({
        loadingVisible: false,
        formValid: false,
      });
    }
    else {
      this.setState({
        loadingVisible: false,
        formValid: true,
      });
      firebaseApp.auth().createUserWithEmailAndPassword(email, pass)
        .then(() => {
          Alert.alert(
            'Chúc mừng',
            'Đăng kí thành công ' + email,
            [
              { text: 'OK', onPress: () => navigate('LoggedOut') },
            ],
            { cancelable: false }
          )
        })
        .catch((error) => {
          this.setState({ formValid: false, loadingVisible: false });
        });
    }
  }

  handleCloseNotification() {
    this.setState({ formValid: true });
  }

  render() {
    const { loadingVisible, formValid, validEmail, validPassword1, validPassword2 } = this.state;
    const background = formValid ? colors.green01 : colors.darkOrange;
    const showNotification = formValid ? false : true;
    return (
      <KeyboardAvoidingView
        style={[{ backgroundColor: background }, styles.wrapper]}
        behavior="padding"
      >
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.forgotPasswordHeading}>Tạo tài khoản mới</Text>
            <Text style={styles.forgotPasswordSubheading}>Nhập email và mật khẩu của bạn</Text>
            <InputField
              customStyle={{ marginBottom: 30 }}
              textColor={colors.white}
              labelText="ĐỊA CHỈ EMAIL"
              labelTextSize={14}
              labelColor={colors.white}
              borderBottomColor={colors.white}
              inputType="email"
              onChangeText={this.handleEmailChange}
              showCheckmark={validEmail}
            />
            <InputField
              customStyle={{ marginBottom: 30 }}
              textColor={colors.white}
              labelText="MẬT KHẨU"
              labelTextSize={14}
              labelColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              onChangeText={this.handlePass1Change}
              showCheckmark={validPassword1}
            />
            <InputField
              customStyle={{ marginBottom: 30 }}
              textColor={colors.white}
              labelText="NHẬP LẠI MẬT KHẨU"
              labelTextSize={14}
              labelColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              onChangeText={this.handlePass2Change}
              showCheckmark={validPassword2}
            />
          </ScrollView>
          <NextArrowButton
            handleNextButton={this.goToNextStep}
            disabled={!validEmail || !validPassword1 || !validPassword2}
          />
        </View>
        <Loader
          modalVisible={loadingVisible}
          animationType="fade"
        />
        <View style={styles.notificationWrapper}>
          <Notification
            showNotification={showNotification}
            handleCloseNotification={this.handleCloseNotification}
            type="Lỗi"
            firstLine="Tên đăng nhập đã tồn tại."
            secondLine="Vui lòng thử lại."
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
  },
  forgotPasswordHeading: {
    fontSize: headingTextSize,
    color: colors.white,
    fontWeight: '300',
  },
  forgotPasswordSubheading: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 60,
  },
  notificationWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }
});