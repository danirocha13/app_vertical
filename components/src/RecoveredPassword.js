import React, { Component } from 'react';
import { Text,View,StyleSheet,StatusBar,Image,Button,TextInput,Alert} from 'react-native';
import axios from 'axios';
var qs = require('qs');

const logo = require('../imgs/logo.png');
const urlLogin = 'http://cvnet2.verticalvert.com.br/api/conta/login?';
const servidor = 'verticalvert';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = { email:'',senha:'',apiKey:'' }
	}


render() {
   return (
   		<View>
   			
        </View>
   	);
  }
}

const styles = StyleSheet.create({
	
});

export default Login;
