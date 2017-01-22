import React from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router, ActionConst } from 'react-native-router-flux';

import * as Pages from 'animationDemo/src/pages';
import { LogoTitle } from 'animationDemo/src/components';
import backChevron from 'animationDemo/src/assets/back_chevron.png';

import appStyle from 'animationDemo/src/appStyle';

const styles = StyleSheet.create({
  header: {
    backgroundColor: appStyle.colors.primary,
    borderBottomWidth: 0,
  },
  title: {
    color: appStyle.colors.lightText,
  },
});

const Scenes = () => (
  <Router>
    <Scene
      key="root"
      titleStyle={styles.title}
      navigationBarStyle={styles.header}
      backButtonImage={backChevron}
    >
      <Scene
        key="home"
        type={ActionConst.RESET}
        component={Pages.Home}
        renderTitle={LogoTitle}
        initial
      />
      <Scene
        key="infos"
        component={Pages.Infos}
        title="Infos"
      />
    </Scene>
  </Router>
);

export default Scenes;
