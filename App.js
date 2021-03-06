import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaView,StyleSheet,StatusBar,View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { Provider as PaperProvider} from 'react-native-paper';
import AysncStore from '@react-native-community/async-storage'
import combinedReducer from './reducer/combineRed'
import {createStore} from 'redux'
import {useSelector, Provider, useDispatch} from 'react-redux'

import RootStack from './src/RootStack'
import AuthStack from './src/AuthStack'
import {menuRoute} from './utils'
const store = createStore(combinedReducer)

const App= () =>  {

  const {user, loading} = useSelector(state=> state.user)
  const dispatch = useDispatch()

  const getAuth = async()=>{
    try {
      const userData = await AysncStore.getItem('user')
      const jsonUser = JSON.parse(userData)
      if(jsonUser!==null){
        dispatch({type:'LOGIN', payload:{user:jsonUser, loading:false}})
      }else{
        dispatch({type:'LOGIN', payload:{user:null, loading:false}})
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
   getAuth()
  },[user])

  if(loading){
    return (
      <View style={{alignItems:'center', justifyContent:'center', flex:1}} >
          <ActivityIndicator size='large' color='blueviolet'/>
      </View>
    )
  }

  return (
    <>
        <StatusBar backgroundColor='#1A4A99' barStyle='invert' />
        <SafeAreaView style={{flex:1}} >
            <NavigationContainer>
              { user == null ?<AuthStack/> : <RootStack
              />}
            </NavigationContainer>
        </SafeAreaView>

    </>
  );
};
const Main =()=>{

  return(
    <PaperProvider>
        <Provider store={store} >
          <App/>
      </Provider>
    </PaperProvider>

  )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
  }
});

export default Main;
