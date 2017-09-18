import React, { Component } from 'react';
import { Text,View,StyleSheet} from 'react-native';

class BarraNavegacao extends Component {
	constructor(props) {
		super(props);
	
	}



render() {
   return (
	   	<View style={styles.barraTitulo}>
	   		<Text style={styles.titulo}>BarraNavegacao</Text>
	   	</View>
   	);
  }
}

const styles = StyleSheet.create({
	barraTitulo:{
		backgroundColor: '#F6B50C',
		padding: 10,
		height:60
	},
	titulo:{
		flex:1,
		fontSize:18,
		textAlign: 'center',
		color: '#FFF'
	}
});

export default BarraNavegacao;
