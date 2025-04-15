import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function WelcomeScreen({ navigation }) {
  const handleQuickSetup = () => {
    console.log('Quick Setup Pressed');
    // navigation.navigate('QuickSetup');
  };

  const handleSignIn = () => {
    console.log('Sign In Pressed');
    // navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('./assets/Street.png')} style={styles.logo} />
      </View>

      {/* Tagline */}
      <View style={styles.taglineContainer}>
        <Text style={styles.tagline}>Where streets,{'\n'}become arenas.</Text>
      </View>

      {/* Quick Setup Button */}
      <TouchableOpacity style={styles.button} onPress={handleQuickSetup}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Quick Setup</Text>
          <Ionicons name="arrow-forward" size={22} color="white" style={styles.icon} />
          </View>
          </TouchableOpacity>

      <View style={styles.signInRow}>
        <Text style={styles.signInText}>Already a user?</Text>
        <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.signInButton}> SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  logoContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
    marginLeft: 25, 
  },
  logo: {
    width: 180,
    height: 50,
    resizeMode: 'contain',
  },

  //  Tagline shifted slightly right
  taglineContainer: {
    alignItems: 'flex-start',
    marginLeft: 25, 
    marginBottom: 80,
  },
  tagline: {
    color: 'white',
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'left',
  },

  //  Quick Setup button:
  button: {
    alignSelf: 'center',
    width: '85%',
    backgroundColor: '#FF1D9D',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginBottom: 30,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'right',
    justifyContent: 'right',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 8,
  },
  icon: {
    marginTop: 1,
  },

  // Split into row: "Already a user?" and clickable "SIGN IN"
  signInRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signInText: {
    color: '#ccc',
    fontSize: 16,
  },
  signInButton: {
    color: '#FF1D9D', 
    fontSize: 16,
    fontWeight: '700',
  },
});