import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions,
  StyleSheet,
  Easing,
} from 'react-native';
import PropTypes from 'prop-types';

const DrawerMenu = ({isOpened}) => {
  const {width} = Dimensions.get('window');
  const menuAnim = useRef(new Animated.Value(0)).current;

  function openMenu() {
    Animated.timing(menuAnim, {
      toValue: 0,
      duration: 250,
      easing: Easing.elastic(1),
    }).start();
  }

  function closeMenu() {
    Animated.timing(menuAnim, {
      toValue: -(width * 0.59),
      duration: 250,
      easing: Easing.elastic(1),
    }).start();
  }

  useEffect(() => {
    if (isOpened) {
      openMenu();
    } else {
      closeMenu();
    }
  }, [isOpened]);

  return (
    <Animated.View
      style={[
        styles.menuContainer,
        {
          width: width * 0.59,
          marginLeft: menuAnim,
        },
      ]}>
      <View style={[styles.menuContent, {width: width * 0.59}]}>
        <Text style={styles.menuItemRow}>Home</Text>
        <Text style={styles.menuItemRow}>Search</Text>
        <Text style={styles.menuItemRow}>Settings</Text>
        <Text style={styles.menuItemRow}>Logout</Text>
      </View>
    </Animated.View>
  );
};

DrawerMenu.propTypes = {
  isOpened: PropTypes.bool,
};

const styles = StyleSheet.create({
  menuContainer: {
    height: '100%',
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#FFF',
  },
  menuContent: {
    height: '100%',
    alignSelf: 'flex-end',
    paddingTop: 50,
  },
  menuItemRow: {
    width: '100%',
    height: 50,
    fontWeight: '900',
    fontSize: 24,
    lineHeight: 45,
    paddingLeft: 15,
  },
});

export default DrawerMenu;
