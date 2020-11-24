import {createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

import PlacesListScreen from '../screens/PlacesListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import Colors from "../constants/Colors";

const PlacesNavigator = createStackNavigator({
    Places: PlacesListScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: NewPlaceScreen,
    Map: MapScreen,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '',
        },
        headerTintColor: Colors.primary,
    }
});

export default createAppContainer(PlacesNavigator);