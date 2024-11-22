import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const menuItems = [
  { id: 1, course: 'Starter', name: 'Salad', price: 10 },
  { id: 2, course: 'Starter', name: 'Soup', price: 8 },
  { id: 3, course: 'Main', name: 'Steak', price: 20 },
  { id: 4, course: 'Dessert', name: 'Ice Cream', price: 5 },
];

const FilterMenu = () => {
  const [filteredItems, setFilteredItems] = useState([]);

  const filterByCourse = (course) => {
    const filtered = [];
    for (const item of menuItems) {
      if (item.course === course) {
        filtered.push(item);
      }
    }
    setFilteredItems(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtered Menu Items:</Text>
      {filteredItems.map((item) => (
        <Text key={item.id}>
          {item.name} - ${item.price}
        </Text>
      ))}
      <Button title="Show Starters" onPress={() => filterByCourse('Starter')} />
      <Button title="Show Mains" onPress={() => filterByCourse('Main')} />
      <Button title="Show Desserts" onPress={() => filterByCourse('Dessert')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
});

export default FilterMenu;
