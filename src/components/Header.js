import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const Header = () => (
  <ImageBackground
    accessibilityRole={'image'}
    source={require('../assets/logo.jpg')}
    style={headerStyles.background}
    imageStyle={headerStyles.logo}>
    <Text style={headerStyles.text}>SpreeExample</Text>
  </ImageBackground>
);

const headerStyles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: Colors.lighter,
  },
  logo: {
    opacity: 0.15,
    overflow: 'visible',
    resizeMode: 'cover',
    marginLeft: -96,
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
});

export default Header;