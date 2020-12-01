import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';

import { useSelector } from 'react-redux';

const Item = ({ title, price, completedAt, state }) => (
  <View style={styles.item}>
    <Text style={styles.title}>Order #{title}</Text>
    <Text>{completedAt}</Text>
    <Text style={{textAlign: 'right'}}>{price}</Text>
    <Text style={{textAlign: 'right'}}>{state}</Text>
  </View>
);

const OrderScreen = ({ navigation }) => {
  const orderList = useSelector(state => state.account.orderList);
  console.log(orderList);

  const renderItem = ({ item }) => (
    <Item 
      title={item.attributes.number} 
      price={item.attributes.display_total} 
      completedAt={item.attributes.completed_at}
      state={item.attributes.state} />
  );

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Order List:</Text>
        <FlatList
          data={orderList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <Button
          title='View account'
          color='pink'
          onPress={() => navigation.navigate('Account')}
        />
      </View>
    </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32
  },
});
  

export default OrderScreen;