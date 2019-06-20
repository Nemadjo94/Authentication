import React from 'react';
import firebase from 'firebase';
import { View, StyleSheet } from 'react-native';
import { Header, Button, Spinner } from './src/components/common/Index';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  state = {
    loggedIn: null,
  };
  
  componentWillMount(){
    firebase.initializeApp({
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({loggedIn: true})
      }else{
        this.setState({loggedIn: false})
      }
    });
  }

  signUserOut(){
    firebase.auth().signOut();
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
          return(
              <Button 
                      text={'Log out'}
                      onPress={this.signUserOut.bind(this)}
                  />
          );
      case false:
          return <LoginForm />;
      default:
          return(
              <Spinner size={'large'}/>
          );  
  }
  }

  render(){
    return (
      <View style={styles.containerStyle}>
        <Header headerText={'Authentication'} />  
        {this.renderContent()}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
  }
});

