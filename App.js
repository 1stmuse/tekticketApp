import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaView,StyleSheet,StatusBar,View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import AysncStore from '@react-native-community/async-storage'
import {userReducer} from './reducer'
import {createStore} from 'redux'
import {useSelector, Provider, useDispatch} from 'react-redux'

import RootStack from './components/RootStack'
import AuthStack from './components/AuthStack'
const store = createStore(userReducer)

const App= () =>  {

const {user, loading} = useSelector(state=> state)
const dispatch = useDispatch()

  const getAuth = async()=>{
    try {
      const item = await AysncStore.getItem('user')
      if(item !==null){
        const jsonUser = JSON.parse(item)
        dispatch({type:'LOGIN', payload:{user:jsonUser, loading:false}})
      }else{
        dispatch({type:'LOGIN', payload:{user:jsonUser, loading:false}})
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
   getAuth()
  },[])

  if(loading){
    return (
      <View style={{alignItems:'center', justifyContent:'center', flex:1}} >
          <ActivityIndicator size='large' color='blueviolet'/>
      </View>
    )
  }

  return (
    <>
        <StatusBar backgroundColor='blueviolet' barStyle='invert' />
        <SafeAreaView style={{flex:1}} >
            <NavigationContainer>
              { user == null ?<AuthStack/> : <RootStack/>}
          
            </NavigationContainer>
        </SafeAreaView>

    </>
  );
};
const Main =()=>{

  return(
    <Provider store={store} >
      <App/>
    </Provider>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
  }
});

export default Main;
