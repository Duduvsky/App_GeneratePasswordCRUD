import { StyleSheet, View, ImageBackground } from 'react-native';
import { Insert } from './banco/Insert';
import { Remove } from './banco/Remove';
import { AllContacts } from './banco/AllContacts';
import { Update } from './banco/Update';
import { ScrollView } from 'react-native';
 
export default function App() {

  return (
    <ImageBackground
            source={require('./assets/bg_senha.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
      <View style={styles.container}>
        <Insert/>
        <Update/>
        <Remove/>
      </View>
    </ScrollView>
    <View style={styles.container2}>
      <AllContacts/>
    </View>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2: {
    flex: 2.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
},
});