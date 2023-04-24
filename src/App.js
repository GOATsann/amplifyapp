import logo from './logo.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css"

import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({signOut}) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <h1>Hello</h1>
        <Heading level={1}>We now have Auth!</Heading>
        <h1>This is just the beginning</h1>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
