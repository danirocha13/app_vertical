import React, { Component } from 'react';
import { Text,View,StyleSheet } from 'react-native';

class Itens extends Component {
  render() {
    return (
    	<View>
	    	<View style={styles.card}>
		    	<View>
		    		<View style={styles.topoCard}>
		    			<View>
					    	<Text style={styles.txtTituloCard}>{this.props.item.bolDescricao}</Text>
					    	<Text style={styles.txtCard}>N.Boleto:{this.props.item.bolNumero}</Text>
				    	</View>
				    	<View>
					    	<Text style={styles.txtCard}>{this.props.item.bolSituacao}</Text>
				    	</View>
				   </View>

				   

				    <View style={styles.footerCard}>
				    	<View>
				    		<Text style={styles.txDescripition}>Data Pagamento: </Text> 
				    		<Text style={styles.txValue}>{this.props.item.bolDataPagamento}</Text>
				    	</View>
				    	<View style={{justifyContent:'center'}}>
				    		<Text style={styles.txDescripition}>Valor Pago:</Text>
				    		<Text style={styles.txValue}>R${this.props.item.bolValorPago}</Text>
				    	</View>
			    	</View>
			    </View>
	    	</View>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	card: {
		backgroundColor:'#F1F4FF',
		flexDirection: 'column',
        justifyContent: 'space-between',
        margin:8,
        height:110,
        borderWidth:2,
        borderColor:'#FFFFFF',
        borderRadius:2,
        flex:1
       },
	topoCard: {
		flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    	height:52,
        marginHorizontal: 3
	},
	footerCard: {
		flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height:53,
        borderWidth:2,
        borderColor: '#C2C2C2',
        borderRadius:3,
        marginBottom:5 ,
        marginHorizontal: 8,
        backgroundColor: '#C2C2C2',
	},
	txtCard: {
		fontFamily: 'brody d',
		fontSize: 18,
    	color: '#555',
    	fontWeight: '300',
    	marginHorizontal: 8,
    	textDecorationLine:'underline',
	},
	txtTituloCard: {
		color: '#999',
		fontSize: 18,
		marginHorizontal: 8
	},
	txDescripition:{
		color: '#F6B50C',
		fontWeight: 'bold' 
	},
	txValue:{
		textDecorationLine:'underline',
		fontSize: 18,
		fontWeight: 'bold',
		
	}
});

export default Itens;