import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  SafeAreaView
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { apiSignIn } from './redux';

const AccountScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const token = useSelector(state => state.account.token);
  const name = useSelector(state => state.account.name);

  return (
    <SafeAreaView>
      {
        token ? <Text>Hi! {name}</Text> : 
        <View style={{paddingTop: 10, paddingBottom: 10 }}>
        <TextInput 
          style={{ height: 50, borderColor: 'gray', borderWidth: 1 }}          
          autoFocus={true}
          placeholder='email'
          textContentType='username'
          onChangeText={text => setUsername(text)}
          value={username} />
        <TextInput 
          style={{ height: 50, borderColor: 'gray', borderWidth: 1 }}
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
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

export default AccountScreen;