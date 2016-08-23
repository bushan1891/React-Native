import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  MapView,
  View
} from 'react-native';
import Api from './src/api.js';
class weather extends Component {
constructor(props){
  super(props)
  this.state={
    pin:[{
      latitude:35.94368688540484,
      longitude:-95.78557999999998
    }],
    city:'',
    temprature:'',
    description:''
  }

this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
}

  onRegionChangeComplete(region) {
    console.log(region);
    this.setState({pin:[{longitude:region.longitude,
    latitude:region.latitude}]
    });


    // when you use this in a function this is ??? but if you use => this refers the Component
    /*Api(region.latitude,region.longitude).then(function(data){
        //this inside this block is unknow
    });*/

 Api(region.latitude,region.longitude)
  }

  render() {

    return (
            <MapView style={styles.map}
             annotations={this.state.pin}
             onRegionChangeComplete={this.onRegionChangeComplete}>
            </MapView>
    );
  }
}

const styles = StyleSheet.create({
        container:{
            flex:1
        },
        map:{
          flex:2
        },
        text:{
          flex:1
        }
});

AppRegistry.registerComponent('weather', () => weather);
