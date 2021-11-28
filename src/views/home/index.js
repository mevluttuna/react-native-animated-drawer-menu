import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

import MenuButtonImage from '../../assets/images/menu.png';
import BackImage from '../../assets/images/page.jpg';

const Home = ({onMenuButtonClick = () => {}}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground source={BackImage} style={{flex: 1}}>
        <TouchableOpacity
          style={{
            width: 48,
            height: 48,
            margin: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
          }}
          onPress={onMenuButtonClick}>
          <Image
            source={MenuButtonImage}
            style={{width: 48, height: 48}}
            resizeMethod="resize"
            resizeMode="cover"
          />
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

Home.propTypes = {
  onMenuButtonClick: PropTypes.func,
};

export default Home;
