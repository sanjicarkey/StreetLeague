import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const App = () => {
  const handleNext = () => {
    console.log('Next button pressed');
  };

  return (
    <View style={styles.container}>
      {/* Logo & Text */}
      <View style={styles.topSection}>
        <Image
          source={require('./assets/iimage.png')}
          style={styles.logo}
        />
        
      </View>

      {/* Arrow Button */}
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Feather name="arrow-right" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 60, 
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 100, // gap between logo and button
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#E81F89',
    width: 60,
    height: 60,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;