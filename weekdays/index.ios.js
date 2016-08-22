var React = require('react-native');
var Moment = require('moment');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');



// create a new component
var Weekdays = React.createClass({
  render:function(){
    return <View style={styles.container}>
      <Text style={styles.textStyle}>
        Days of the Week :
      </Text>
      {this.days()}
    </View>
  },
  days : function(){
      var daysItems = [];

      for(var i = 0; i< 7 ; i++){
        var day = Moment().add(i,'days').format('dddd');
        daysItems.push(
          <DayItem day={day} daysUntil={i} />
        )
      }

      return daysItems;
    }

});

// Style the React Component
var styles = StyleSheet.create({
  container : {
    flex:1, // fill up all the space flex 1 means width 100% height 100%
    //flexDirection:'coloumn', // controlls the direction of justifyContent and alignItems
    justifyContent:'center', // y direction // flex-end to move it to bottom  // flex start move it to the start
    alignItems:'center' // x direction
  },
  textStyle:{
    color:'black'
  }
});


// show react components on screen
AppRegistry.registerComponent('weekdays',function(){
  return Weekdays
});

// look of the app is styled in the same js file
