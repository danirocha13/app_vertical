import React, { Component } from 'react';
import { Text,View,StyleSheet,StatusBar,Image,Button,TextInput,Alert,TouchableHighlight} from 'react-native';
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
   		<View style={styles.view}>
   			<StatusBar hidden={true}/>
   			<View style={styles.logoView} >
   				<Image style={styles.logo} source={logo}/>
   			</View>
   			<View style={styles.viewForm}>
   				<View>
   					<TextInput onChangeText={(text) => this.setState({email:text})} underlineColorAndroid='#F6B50C' placeholder='Usuário' style={styles.inputText}/>
   				</View>
   				<View>
   					<TextInput onChangeText={(text) => this.setState({senha:text})} underlineColorAndroid='#F6B50C' placeholder='Senha' style={styles.inputText}/>
   				</View>
   				<View style={styles.buttonView}> 
   					<Button  title='Entrar' onPress={() => {
   						axios.post(urlLogin, qs.stringify({
	   						email: this.state.email,
	   						password: this.state.senha,
							servidor: servidor
						})
						).then(response => {
							if(response.data.error){
								Alert.alert('Email e/ou senha inválidos.')
							}else {
								this.props.navigator.push({id: 'CenaPrincipal'});
							}
							console.log(response.data)
						}).catch(() => { Alert.alert('Erro ao conectar ao servidor.') });
   					}} />
   				</View>
   				<Text style={styles.txtFooter1}>Esqueceu seu email ou senha ?</Text>
   				<TouchableHighlight onPress={() => {
				this.props.navigator.push({id: 'recoveredPassword'});
			}}>
   					<Text style={styles.txtFooter2}>Obtenha ajuda para fazer login.</Text>
   				</TouchableHighlight>
   			</View>
        </View>
   	);
  }
}

const styles = StyleSheet.create({
	view:{
		backgroundColor:'#333',
		flex:1,
		justifyContent:'space-between',
		alignItems:'center',
		flexDirection:'column'
	},
	logo:{
		width:200,
		height:200,
		backgroundColor:'#FFF'
	},
	logoView:{
        marginBottom:40,
        backgroundColor:'#FFF',
        paddingHorizontal:140
	},
	inputText:{
		backgroundColor:'#FFF',
		borderWidth:2,
        borderColor:'#FFFFFF',
        borderRadius:2,
        marginBottom:15,
        marginTop:15,
        width:300,
        height:40,
        fontSize:18,
        color:'#F6B50C'
	},
	viewForm:{
		flex:4,
		marginTop:50
	},
	buttonView:{
		marginTop:30
	},
	txtFooter1:{
		textAlign:'center',
		color:'#FFF'
	},
	txtFooter2:{
		color:'#F6B50C',
		fontWeight:'bold',
		textAlign:'center'
	},
	txtDescription:{
		fontSize:20,
		color:'#FFF'
	},
	touchble:{

	}
});

export default Login;
