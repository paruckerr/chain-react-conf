import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import TalkFooter from '../components/TalkFooter';

@withNavigation
export default class TalkCard extends React.PureComponent {
  render() {
    const { details } = this.props;
    const containerStyles = [styles.container];

    return (
      <View>
        <TouchableWithoutFeedback onPress={this._handlePressCard}>
          <View style={containerStyles}>
            <View style={styles.info}>
              <View style={styles.infoText}>
                <Text style={styles.name}>
                  {details.speaker}
                </Text>
                <Text style={styles.title}>
                  {details.title}
                </Text>
              </View>
              <Image
                style={styles.avatar}
                source={{ uri: details.avatarURL }}
              />
            </View>
            <TalkFooter details={details} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  _handlePressCard = () => {
    this.props.navigation.navigate('TalkDetail', {
      details: this.props.details,
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: Layout.baseMargin,
    marginHorizontal: Layout.doubleBaseMargin,
  },
  currentDay: {
    marginLeft: 16,
    marginRight: 24,
  },
  active: {
    marginLeft: 6,
    marginRight: 34,
    borderRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 5,
    shadowColor: Colors.redShadow,
    shadowOpacity: 1,
  },
  finished: {
    opacity: 0.7,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Layout.doubleBaseMargin,
    borderTopLeftRadius: Layout.cardRadius,
    borderTopRightRadius: Layout.cardRadius,
    backgroundColor: Colors.snow,
  },
  infoText: {
    flex: 1,
    paddingRight: Layout.doubleBaseMargin,
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 17,
    color: Colors.darkPurple,
    letterSpacing: 0,
  },
  name: {
    fontFamily: 'Montserrat-Light',
    fontSize: 13,
    color: Colors.lightText,
    letterSpacing: 0,
    lineHeight: 18,
  },
  avatar: {
    width: Layout.images.avatar,
    height: Layout.images.avatar,
    borderColor: Colors.avatarBorder,
    borderWidth: 1,
    borderRadius: Layout.images.avatar / 2,
  },
  moreInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 13,
    paddingHorizontal: Layout.doubleBaseMargin,
    borderBottomLeftRadius: Layout.cardRadius,
    borderBottomRightRadius: Layout.cardRadius,
    backgroundColor: Colors.silver,
  },
  details: {
    flexDirection: 'row',
  },
  detail: {
    paddingRight: Layout.doubleBaseMargin,
  },
  detailLabel: {
    fontFamily: 'Montserrat-Light',
    fontSize: 11,
    color: Colors.lightText,
    letterSpacing: 0,
  },
  detailText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 11,
    color: Colors.darkPurple,
    letterSpacing: 0,
  },
});
