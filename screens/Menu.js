import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const Menu = () => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [dishes, setDishes] = useState([]);

  // Function to add dish
  const addDish = () => {
    if (dishName && description && price) {
      const newDish = { name: dishName, description, price };
      setDishes([...dishes, newDish]);
      setDishName('');  // Clear inputs
      setDescription('');
      setPrice('');
    } else {
      alert('Please fill all fields');
    }
  };

  // Function to remove dish
  const removeDish = (index) => {
    const updatedDishes = dishes.filter((_, i) => i !== index);
    setDishes(updatedDishes);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.menuText}>Restaurant Menu</Text>

        {/* Input for Name of the Dish */}
        <TextInput
          style={styles.input}
          placeholder="Name of the Dish"
          value={dishName}
          onChangeText={setDishName}
        />

        {/* Input for Description */}
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />

        {/* Input for Price */}
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />

        {/* Add Button */}
        <Button title="Add Dish" onPress={addDish} color="gold" />

        {/* Display the list of added dishes */}
        {dishes.map((dish, index) => (
          <View key={index} style={styles.dishContainer}>
            <Text style={styles.dishText}>
              {dish.name} - {dish.description} - ${dish.price}
            </Text>
            <Button title="Remove" onPress={() => removeDish(index)} color="red" />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'black', // Scrollable background
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'black',
  },
  menuText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'gold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white',
    backgroundColor: '#333',
    borderRadius: 5,
  },
  dishContainer: {
    width: '100%',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#444',
    borderRadius: 5,
  },
  dishText: {
    color: 'white',
  },
});

export default Menu;
