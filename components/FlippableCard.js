import React, { useState } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSpring, animated } from 'react-spring/native';

const AnimatedView = animated(View);

const FlippableCard = ({

}) => {
  const [flipped, setFlipped] = useState(true);

  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));
  // const animation = useSpring({
  //   to: { width: 100, opacity: 1 },
  //   from: { width: 0, opacity: 0 },
  //   delay: 1,
  // })

  // const props = useSpring({
  //   opacity: flipped ? 1 : 0,
  //   transform: [
  //     { rotateX: '45deg' }, 
  //     { rotateZ: (flipped ? '0deg' : '90deg') }
  //   ]
  // })




  return(
    // <AnimatedView style={props} onPress={()=>{}}>
    //   <TouchableOpacity onPress={() => setFlipped(!flipped)} style={styles.touchableButtonRed}>
    //     <Text>test</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity onPress={() => setFlipped(!flipped)} style={styles.touchableButtonBlue}>
    //     <Text>test</Text>
    //   </TouchableOpacity>
      
    // </AnimatedView>
    <View>
      <View style={styles.touchableButtonBlue}>

      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  touchableButtonRed: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  
  },
  touchableButtonBlue: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default FlippableCard;

// import React, { Component } from 'react'
// import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
// // import { Spring, animated } from 'react-spring/native'
// import { Spring, animated } from 'react-spring/renderprops-native';

// const styles = {
//   flex: 1,
//   margin: 0,
//   backgroundColor: 'red',
//   alignItems: 'center',
//   justifyContent: 'center',
// }

// const AnimatedView = animated(View)

// export default class FlippableCard extends Component {
//   state = { flag: true }
//   toggle = () => this.setState(state => ({ flag: !state.flag }))
//   render() {
//     const { flag } = this.state
//     return (
//       // <View>

//       // </View>
//       <Spring
//         native
//         from={{ margin: 0, rotate: 0 }}
//         to={{ 
//           margin: flag ? 100 : 0, 
//           backgroundColor: flag ? 'green' : 'rgba(0,0,0,0.1)', 
//           scale: flag ? 1 : 1.5,
//           transform: `perspective(600px) rotateX(${flag ? 180 : 0}deg)` 
//         }}
//         config={{ tension: 10, friction: 150 }}>
//         {({ scale, ...props }) => (
//           <TouchableWithoutFeedback onPress={this.toggle}>
//             <AnimatedView style={{ ...styles, ...props, transform: [{ scale }] }}>
//               <Text>#######################</Text>
//             </AnimatedView>
//           </TouchableWithoutFeedback>
//         )}
//       </Spring>
//     )
//   }
// }