import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import client from '../api/client';

const Item = ({ title, price }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={{textAlign: 'right'}}>{price}</Text>
  </View>
);

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFirstData = async () => {
      const result = await client.products.list({
        page: 1, per_page: 20, include: 'images', sort: '-updated_at'
      });
      console.log(result.success().data);
      if (result.isSuccess()) {
        return setProducts(result.success().data);
      }
    }
  
    fetchFirstData();
  }, [])

  const renderItem = ({ item }) => (
    <Item title={item.attributes.name} price={item.attributes.display_price} />
  );

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Product List:</Text>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
  
export default ProductList;