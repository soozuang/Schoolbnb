
import React, { Component } from 'react';
import {
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import HeartButton from '../components/buttons/HeartButton';
import { transparentHeaderStyle } from '../styles/navigation';
import InputField from '../components/form/InputField';
import RadioInput from '../components/form/RadioInput';
import RoundedButton from '../components/buttons/RoundedButton';
import NavBarButton from '../components/buttons/NavBarButton';
import Stars from '../components/Stars';
class UniversityDetail extends Component {

  static navigationOptions = ({ navigation }) => ({
    tabBarVisible: true,
    headerLeft: <TouchableOpacity
      style={styles.closeButton}
      onPress={() => navigation.goBack()}
    >
      <Icon name="ios-arrow-back" color={colors.green01} size={30} style={styles.icon} />
    </TouchableOpacity>,
    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.white,
    tabBarLabel: 'KHÁM PHÁ',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="ios-search"
        size={22}
        color={tintColor}
      />
    ),
  });

  constructor(props) {
    super(props);

    this.state = {
      privacyOption: 'private',

    };

    this.listCreated = false;
    this.selectPrivacyOption = this.selectPrivacyOption.bind(this);
  }

  componentWillUnmount() {
    const { navigation } = this.props;
    navigation.state.params.onDetailClose();
  }

  selectPrivacyOption(privacyOption) {
    this.setState({ privacyOption });
  }

  render() {
    const { privacyOption, location } = this.state;
    const { navigation } = this.props;
    const listing = navigation.state.params.listing

    return (
      <View style={styles.wrapper}>
        <Image
          style={styles.canvas}
          resizeMode="contain"
          source={{ uri: listing.banner }} />
        <ScrollView style={styles.scrollView}>

          <Text style={styles.heading}>{listing.tentruong}</Text>
          <View style={styles.details}>
            <Text
              style={styles.listingTitle}
            >
              {listing.tentruong2}
            </Text>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{ uri: listing.logo }} />
            <Stars
              size={16}
              color={colors.green02}
            />
          </View>

          <View style={styles.rowInfo}>
            <Icon
              name="ios-browsers"
              size={30}
              color={colors.darkOrange}
              style={styles.icon}
            />
            <Text>{listing.loai}</Text>
          </View>

          <View style={styles.rowInfo}>
            <FontAwesomeIcon
              name="dollar"
              size={30}
              color={colors.darkOrange}
              style={styles.icon}
            />
            <Text>{listing.taichinh} đồng mỗi năm</Text>
          </View>


        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },

  details: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 5,
  },

  heading: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.lightBlack,
    marginBottom: 4,
    textAlign: 'center'
  },

  icon: {
    position: 'absolute',
    marginLeft: 20,
  },

  scrollView: {
    paddingBottom: 40,
    marginHorizontal: 20,
  },

  image: {
    width: undefined,
    flex: 1,
    height: 100,
    borderRadius: 8,
    marginBottom: 7
  },

  canvas: {
    width: Dimensions.get('window').width,
    flex: 1,
    height: undefined,
  },

  listingTitle: {
    fontSize: 14,
    marginBottom: 4
  },

  rowInfo: {
    marginRight: 20,
    marginTop: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginRight: 30
  }

});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(null, mapDispatchToProps)(UniversityDetail);
