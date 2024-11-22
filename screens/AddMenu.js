import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AddMenu = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Salad', price: 10 },
    { id: 2, name: 'Soup', price: 8 },
    { id: 3, name: 'Steak', price: 20 },
  ]);

  const removeItemsBelowPrice = (threshold) => {
    let index = 0;
    while (index < menuItems.length) {
      if (menuItems[index].price < threshold) {
        menuItems.splice(index, 1);
      } else {
        index++;
      }
    }
    setMenuItems([...menuItems]); // Update state
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Items:</Text>
      {menuItems.map((item) => (
        <Text key={item.id}>
          {item.name} - ${item.price}
        </Text>
      ))}
      <Button
        title="Remove items below $10"
        onPress={() => removeItemsBelowPrice(10)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
});

export default AddMenu;

