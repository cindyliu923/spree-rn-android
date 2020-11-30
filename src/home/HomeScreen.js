import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Button
} from 'react-native';

import Header from '../components/Header'
import ProductList from '../components/ProduceList';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header />
        <View>
          <Button
            title='View account'
            color='pink'
            onPress={() => navigation.navigate('Account')}
          />
        </View>
        <ProductList />
    </SafeAreaView>  
  );
}

export default HomeScreen;