import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
    containerStyle: {
      borderWidth: 1,
      borderRadius: 2, // rounded corners
      borderColor: '#ddd',
      borderBottomWidth: 0, // hide bottom border
      shadowColor: '#000', // adds elevation
      shadowOffser: { width: 0, height: 2 }, // bottom
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10
    }
};

export default Card;
