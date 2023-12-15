import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const redirectUrl = process.env.SPOTIFY_REDIRECT_URL;

import { authenticateWithSpotify } from './services/SpotifyAuth'

type SectionProps = PropsWithChildren<{
  title: string;
}>;


const handleSpotifyAuthentication = async () => {
  console.log('Authenticating with Spotify...')
  try {
    await authenticateWithSpotify();
  } catch (error) {
    console.error('Authentication error:', error);
  }
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSpotifyAuthentication}
        activeOpacity={0.5} // This prop controls the opacity when the button is pressed
      >
        <Text style={styles.buttonText}>Authenticate with Spotify</Text>
      </TouchableOpacity>

  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#841584',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 26,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
