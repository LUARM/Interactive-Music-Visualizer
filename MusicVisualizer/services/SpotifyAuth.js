import { authorize } from 'react-native-app-auth';

// Function to generate a random string for the state parameter
function generateRandomString(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function authenticateWithSpotify() {
  try {
    const state = generateRandomString(16);
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const redirectUrl = process.env.SPOTIFY_REDIRECT_URL;

    // Define the configuration
    const config = {
      clientId: clientId,
      redirectUrl: redirectUrl,
      scopes: ['user-read-private', 'user-read-email'], // Define your scopes here
      serviceConfiguration: {
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        tokenEndpoint: 'https://accounts.spotify.com/api/token',
      },
      additionalParameters: {
        state: state,
      },
      // Add other config properties as needed
    };

    // Perform the authentication
    const result = await authorize(config);

    // The result object contains the access token and other information
    console.log('Access token:', result.accessToken);
    // Handle the authentication result as needed

  } catch (error) {
    console.error('Authentication error:', error);
  }
}

export { authenticateWithSpotify };
