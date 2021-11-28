import React, {useState} from 'react';
import {View, StyleSheet, LogBox} from 'react-native';

import DrawerMenu from './src/components/DrawerMenu';
import Home from './src/views/home';

const App = () => {
  LogBox.ignoreAllLogs();

  const [isOpened, setIsOpened] = useState(false);

  const onMenuButtonClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <View style={styles.container}>
      <DrawerMenu isOpened={isOpened} />
      <View style={styles.pageContainer}>
        <Home onMenuButtonClick={onMenuButtonClick} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  pageContainer: {
    flex: 1,
  },
});

export default App;
