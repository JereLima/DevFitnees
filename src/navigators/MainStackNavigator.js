import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Preload from '../screens/Preload';
import StarterStack from '../navigators/StarterStack';
//import AppTab from './AppTab';

const MainStackNavigator = createStackNavigator(
  {
    Preload,
    StarterStack,
    //AppTab
  },
  {
    initialRouteName: 'Preload',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(MainStackNavigator);
