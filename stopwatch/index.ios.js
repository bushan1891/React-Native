/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';

import {
  AppRegistry,
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';
class stopwatch extends Component {
  // this is called when the Component is render
  constructor(props) {
      super(props);
      this.state = {timeElapsed: null,
                    running:false,
                    startTime :null,
                    laps:[]
                  };
    this.handleLapPress=this.handleLapPress.bind(this);
    this.handleStartPress =this.handleStartPress.bind(this);
}
  render() {
    return (
          <View style={[styles.container]}>

            <View style={[styles.header]}>

              <View style={[styles.timerWrapper]}>
                <Text style={styles.timer}>
                    {formatTime(this.state.timeElapsed)}
                </Text>
              </View>

              <View style={[styles.buttonWrapper]}>
                {this.StartStopButton()}
                {this.lapButton()}
              </View>

            </View>

            <View style={[styles.footer] }>
                {this.laps()}
            </View>

          </View>
    );
  }

laps(){
return this.state.laps.map(function(lap,index){
  return (<View style={styles.lap}>
    <Text style={styles.lapText}>
      Lap #{index+1}
    </Text>
    <Text style={styles.lapText}>
      {formatTime(lap)}
    </Text>
  </View>)
})
}

  StartStopButton(){
    let style = this.state.running ? styles.stopButton : styles.startButton ;
    return (
      <TouchableHighlight  underlayColor="gray"
        onPress={this.handleStartPress}
        style={[styles.button, style]}>
        <Text>
          { this.state.running==true ? 'Stop' : 'Start' }
        </Text>
      </TouchableHighlight>
    )
  }
  handleStartPress(){
    if(this.state.running==true){
      clearInterval(this.interval);  // this is js function
      this.setState({running:false});

      return  // we want to return because we do not want to run the setInterval again
    }

    // save the start time

    this.setState({startTime:new Date()})

    this.interval=setInterval(() => {
         this.setState({timeElapsed: new Date() - this.state.startTime,
         running:true})
       }, 30);

  }
  lapButton(){
    return <TouchableHighlight style={styles.button}        underlayColor="gray"
      onPress={this.handleLapPress}>
              <Text>
                Lap
              </Text>
          < /TouchableHighlight>
  }
  handleLapPress(){
    let lap = this.state.timeElapsed;
     // creates a new obj
    // this is set  the startTime to current time which will reset the clock
    this.setState({startTime:new Date(),
    laps:this.state.laps.concat([lap])
  })
  }

  border(color){
    return{
      borderColor:color,
      borderWidth:4

    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1, // fill the entire screen
    alignItems:'stretch'
  },
  header:{  // yellow
    flex:1
  },
  footer:{
    flex:1
  },
  timerWrapper:{  // red area   // parent has 1      5 + 3 = 8
    flex:5, // takes up 5/8th
    alignItems:'center',
    justifyContent:'center'

  },
  buttonWrapper:{ // green ared
    flex :3 ,// takes up 3/8th         // never use fixed height
    flexDirection:'row',
    justifyContent:'space-around', // by default they stack by column with react native
    alignItems:'center'
  },
  timer:{
    fontSize:60
  },
  button:{
    borderWidth:2,
    height:100,
    width:100,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
  },
  startButton:{
    borderColor :'green'
  },
  stopButton:{
    borderColor:'red'
  },lap:{
    justifyContent:'space-around',
    flexDirection:'row'
  },
  lapText:{
    fontSize:30
  }
});

AppRegistry.registerComponent('stopwatch', () => stopwatch);
