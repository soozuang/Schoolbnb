
import React, { Component } from 'react';
import {
  Dimensions,
  View,
  Linking,
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
import getDirections from 'react-native-google-maps-directions';
import api_config from '../data/api_config'
import call from 'react-native-phone-call'
class UniversityDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarVisible: true,
    headerLeft: <TouchableOpacity
      style={styles.closeButton}
      onPress={() => navigation.goBack()}
    >
      <Icon name="ios-arrow-back" color={colors.darkOrange} size={30} style={styles.backbtn} />
    </TouchableOpacity>,
    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.white,
    tabBarLabel: 'KHÁM PHÁ',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="ios-search"
        size={26}
        color={tintColor}
      />
    ),
  });

  constructor(props) {
    super(props);
    this.state = {
      privacyOption: 'private',
      latitude: null,
      longitude: null,
      error: null,
    };
    this.listCreated = false;
    this.selectPrivacyOption = this.selectPrivacyOption.bind(this);
    this.onMapPress = this.onMapPress.bind(this);
  }

  componentWillUnmount() {
    const { navigation } = this.props;
    navigation.state.params.onDetailClose();
    navigator.geolocation.clearWatch(this.watchId);
  }

  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  selectPrivacyOption(privacyOption) {
    this.setState({ privacyOption });
  }

  onWebPress(web) {
    Linking.openURL(web)
  }

  onCallPres(phone) {
    const args = {
      number: phone, // String value with the number to call
      prompt: false

    }
    call(args).catch(console.error)
  }

  onMapPress(lat, lng) {

    const data = {
      source: {
        latitude: this.state.latitude,
        longitude: this.state.longitude,
      },
      destination: {
        latitude: lat,
        longitude: lng
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode 
        }
      ]
    }
    getDirections(data)
  }

  render() {
    const { privacyOption, location } = this.state;
    const { navigation } = this.props;
    const listing = navigation.state.params.listing

    return (
      <View style={styles.wrapper}>
        <Image
          style={styles.canvas}
          resizeMode='cover'
          source={{ uri: listing.banner }} />

        <Text style={styles.heading}>{listing.tentruong}</Text>
        <Text style={styles.listingTitle}>| {listing.tentruong2} |</Text>
        <Image
          style={[styles.image, { textAlign: 'center' }]}
          resizeMode='contain'
          source={{ uri: listing.logo }} />
        <View style={styles.center}>
          <Stars
            votes={10}
            size={16}
            color={colors.green02} />

          <View style={styles.funcBar}>
            <Icon
              onPress={() => this.onMapPress(listing.lat, listing.lng)}
              name="ios-map"
              size={36}
              color={colors.darkOrange}

            />
            <Icon
              onPress={() => this.onWebPress(listing.website)}
              name="ios-link"
              size={36}
              color={colors.darkOrange}
              style={styles.icon}
            />
            <Icon
              onPress={() => this.onCallPress(listing.dienthoai)}
              name="ios-call"
              size={36}
              color={colors.darkOrange}
              style={styles.icon}
            />
          </View>
        </View>

        <ScrollView style={styles.scrollView}>
          <View style={styles.rowInfo}>
            <Icon
              name="ios-medal"
              size={24}
              color={colors.darkOrange}
              style={styles.icon}
            />
            <Text style={styles.infoMini}>{listing.loai}</Text>
          </View>
          <View style={styles.rowInfo}>
            <Icon
              name="ios-podium"
              size={24}
              color={colors.darkOrange}
              style={styles.icon}
            />
            <Text style={styles.infoMini}>{listing.taichinh} đồng/ năm</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  infoMini: {
    fontSize: 18,
    color: '#020202',
    marginLeft: 20
  },
  wrapper: {
    backgroundColor: colors.white,
    flex: 1
  },

  center: {
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center'
  },

  heading: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    fontSize: 22,
    fontWeight: '600',
    color: colors.lightBlack,
    marginBottom: 10,
    textAlign: 'center'
  },

  backbtn: {
    marginLeft: 20,
    zIndex: 100
  },

  scrollView: {
    marginTop: 10,
  },

  image: {
    height: 70,
    borderRadius: 8,
    marginBottom: 7,
  },

  canvas: {
    width: Dimensions.get('window').width,
    flex: 1
  },

  listingTitle: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center'
  },

  rowInfo: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginLeft: 40,
  },

  funcBar: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#a3a3a3',
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25
  }

});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(null, mapDispatchToProps)(UniversityDetail);
