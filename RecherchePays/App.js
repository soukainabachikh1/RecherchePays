import { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

class PageDeRecherche extends Component{  
  render(){
    return <Text style={styles.description}>Rechercher des pays !</Text>
  }
}

const Pile = createStackNavigator()
function MaPile(){
  return (
    <Pile.Navigator>
      <Pile.Screen name="Accueil" component={PageDeRecherche}/>
    </Pile.Navigator>
  );
}

export default class App extends Component{
  render(){
    <NavigationContainer>
      <MaPile/>
    </NavigationContainer>
  }
}

const styles = StyleSheet.create({
  description:{
    fontSize:18,
    textAlign: 'center',
    color:'#656565',
    marginTop:65
  }
})