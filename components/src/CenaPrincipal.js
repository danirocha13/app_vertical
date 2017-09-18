import React, { Component } from 'react';
import { Text,View,StyleSheet,StatusBar,Image,TouchableHighlight} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const logo =  require ('../imgs/logo.png');
const financas =  require ('../imgs/029-profits.png');
const configuracao =  require ('../imgs/028-settings.png');
const faleConosco =  require ('../imgs/016-teamwork.png');
const enquete =  require ('../imgs/038-file.png');

class CenaPrincipal extends Component {
	constructor(props) {
		super(props);
	
	}

render() {
   return (
	   	<View>

        <StatusBar 
          backgroundColor ='#DF8B00'
        />

        <BarraNavegacao />
        <View style={styles.logoView}>
        	<Image style={styles.logo} source={logo}/>
        </View>
        <View style={styles.menus}>
			<View style={styles.containerMenu}>  
			<TouchableHighlight onPress={() => {
				this.props.navigator.push({id: 'listaItens'});
			}}>      	
		        <Image style={styles.imageMenu} source={financas}/>
		    </TouchableHighlight>
		        <Image style={styles.imageMenu} source={enquete}/>
		    </View> 
		    <View style={styles.containerMenu}>   
		        <Image style={styles.imageMenu} source={configuracao}/>
		        <Image style={styles.imageMenu} source={faleConosco}/>
		    </View>
        </View>

      </View>
   	);
  }
}

const styles = StyleSheet.create({
	logo:{
		width:200,
		height:200
	},
	imageMenu:{
		width:100,
		height:100,
		margin:20
	},
	logoView:{
		alignItems:'center'
	},
	menus:{
		alignItems:'center'
	},
	containerMenu:{
		flexDirection:'row',
		justifyContent: 'space-between'
	}
});

export default CenaPrincipal;
