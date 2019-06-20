import React from 'react';
import firebase from 'firebase';
import { Text, StyleSheet } from 'react-native';
import { Button, Spinner, Card, CardSection, _TextInput } from './common/Index';

export default class LoginForm extends React.Component{
    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
    }

    onButtonPress(){
        const {email, password} = this.state;

        //restart the error msg
        this.setState({error: '', loading: true});

        // firebase.auth().signInWithEmailAndPassword(email, password)
        //     .then(this.onLoginSuccess.bind(this))
        //     .catch(() => {
        //         this.onLoginFail.bind(this)
        //     });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: '',
        });
    }

    onLoginFail(){
        this.setState({
            error: 'Authentication Failed',
            loading: false,
        });
    }

    renderButton(){
        if(this.state.loading){
            return(
                <Spinner size={'small'}/>
            );
        }else{
            return(
                <Button 
                    text={'Log in'}
                    onPress={this.onButtonPress.bind(this)}
                />
            );
        }
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <_TextInput 
                        label={'Email:'}
                        placeholder={'user@gmail.com'}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email: email })}
                     />
                </CardSection>
                <CardSection>
                    <_TextInput 
                        label={'Password:'}
                        placeholder={'********'}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password: password })}
                        passwordEntry={true}
                    />
                </CardSection>

                <Text style={styles.ErrorMessage}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    ErrorMessage:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    },
});


