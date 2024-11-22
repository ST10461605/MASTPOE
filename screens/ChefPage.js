import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const menuItems = [
  { id: 1, name: 'Salad', price: 10 },
  { id: 2, name: 'Soup', price: 8 },
  { id: 3, name: 'Steak', price: 20 },
];

const ChefPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Items:</Text>
      {menuItems.map((item) => (
        <Text key={item.id}>
          {item.name} - ${item.price}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
});

export default ChefPage;
