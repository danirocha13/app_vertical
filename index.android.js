import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import CenaPrincipal from './components/src/CenaPrincipal';
import RecoveredPassword from './components/src/RecoveredPassword';
import ListaItens from './components/src/ListaItens';
import Login from './components/src/Login';
import { Navigator } from 'react-native-deprecated-custom-components';

export default class app4 extends Component {
  render() {
    return (
      <Navigator 
        initialRoute = {{id: 'CenaPrincipal'}}
        renderScene = {(route, navigator) => {
            if(route.id === 'CenaPrincipal'){
              return (<CenaPrincipal navigator={navigator}/>);
            }
            if(route.id === 'Login'){
              return (<Login navigator={navigator}/>);
            }
            if(route.id === 'listaItens'){
              return (<ListaItens />)
            }
            if(route.id === 'recoveredPassword'){
              return (<RecoveredPassword navigator={navigator} />)
            }
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('app4', () => app4);
