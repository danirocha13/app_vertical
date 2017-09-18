import React, { Component } from 'react';
import { ScrollView ,View} from 'react-native';
import Itens from './Itens';
import axios from 'axios';
import BarraNavegacao from './BarraNavegacao';
var qs = require('qs');

class ListaItens extends Component {
	constructor(props) {
		super(props);
		this.state = { listaItens: [] };
	}

componentWillMount() {
	/*axios.get('http://cvnet2.verticalvert.com.br/api/boleto/list?servidor=verticalvert&apiKey=fefpg48MO2pwg7ws2soVW8WtEv-CZKtHUTGDKnS5s5E')
	.then(response => {	this.setState({ listaItens: response.data }); })
	.catch(() => { console.log('Erro ao executar'); });		*/
	
	axios.post('http://cvnet2.verticalvert.com.br/api/boleto/list?', qs.stringify({
	servidor: 'verticalvert',
	apiKey: 'fefpg48MO2pwg7ws2soVW8WtEv-CZKtHUTGDKnS5s5E'
	})
	).then(response => {
		this.setState({ listaItens: response.data.boletos }); 
	}).catch(() => { console.log('Erro ao executar'); });	
}

render() {
   return (
   	<View>
   	<BarraNavegacao />
	<ScrollView style={{ backgroundColor: '#333' }}>
		{ this.state.listaItens.map(item => (<Itens key={item.bolNumero} item={item} />))}
	</ScrollView>
	</View>
    );
  }
}


export default ListaItens;
