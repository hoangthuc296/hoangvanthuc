import React, {Component} from 'react';
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {horizontalFlatListData} from '../data/horizontalFlatListData';
import {horizontalStatus} from '../data/horizontalFlatListData';
import Icon from 'react-native-vector-icons/Ionicons';

class HorizontalFlatListItem extends Component {
    render() {
        return (
            <View 
                style={{
                    flex:1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    width:90,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: 'grey',
                    margin:4,
                }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 20,
                }}>
                    {this.props.item.hour}
                </Text>
                <Icon name={(Platform.OS === 'android' ) ? this.props.item.status.ios : this.props.item.status.android }
                    size={30}
                    color='white' 
                />
                <Text style={{
                    fontSize: 16,
                    color: 'white',
                    margin: 10,
                }}>
                    {this.props.item.degrees}°C
                </Text>
            </View>
        );
    }
};

export default class HorizontalFlatList extends Component {

    render() {
        return (
            <View 
                style= {{
                    flex: 1,
                    flexDirection: 'column',
                    marginTop: Platform.OS === 'android' ? 34: 0,
                }}>
                <View style={{ height:150}}>
                    <FlatList 
                        style= {{
                            backgroundColor: 'black',
                            opacity:0.5,
                        }}
                        horizontal={true}
                        data={horizontalFlatListData}
                        renderItem={({ item, index }) => {
                            return (
                                <HorizontalFlatListItem item={item} index={index} parentFlatList={this}>
                                
                                </HorizontalFlatListItem>
                            );
                        }}
                    >
                    
                    </FlatList>
                </View>
            </View>
        );
    }
}