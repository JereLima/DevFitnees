import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Preaload from './screens/Preload';
import StarterStack from './screens/StarterStack';
import AppTab from './screens/AppTab';

const MainStackNavigator = createStackNavigator({
  Preaload,
  StarterStack,
  AppTab,
});

export default createAppContainer(MainStackNavigator);
