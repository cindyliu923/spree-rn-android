import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  SafeAreaView
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { apiSignIn, signOut, getOrdersList } from './redux';

const AccountScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const token = useSelector(state => state.account.bearerToken);
  const email = useSelector(state => state.account.email);

  return (
    <SafeAreaView style={styles.container}>
      {
        token ? 
        <View>
          <Text style={styles.title}>
            Hi! {email}
          </Text>
          <View style={styles.fixButton}>
            <Button
              onPress={() => {
                dispatch(getOrdersList(token));
                navigation.navigate('Order');
              }} 
              title="My Order List" 
              color="#841584" />
            <Button
              onPress={() => dispatch(signOut())} 
              title="Sign Out" />
          </View>
        </View>
        : 
        <View>
          <TextInput 
            style={styles.input}          
            autoFocus={true}
            placeholder='email'
            textContentType='username'
            onChangeText={text => setUsername(text)}
            value={username} />
          <TextInput 
            style={styles.input}
            placeholder='password'
            textContentType='password'
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            value={password} />
          <Button
            onPress={() => dispatch(apiSignIn(username, password))}
            title='Submit'
            color="#841584" />
        </View> 
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    flex: 1
  },
  fixButton: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    marginVertical: 16
  },
  input: {
    width: 300, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginVertical: 16,
    fontSize: 30,
  },
});


export default AccountScreen;