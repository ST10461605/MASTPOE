import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const menuItems = [
  { course: 'Starter', price: 10 },
  { course: 'Starter', price: 15 },
  { course: 'Main', price: 20 },
  { course: 'Main', price: 25 },
  { course: 'Dessert', price: 8 },
  { course: 'Dessert', price: 12 },
];

const calculateAverages = () => {
  const courseTotals = {};
  const courseCounts = {};

  // Use a for loop to calculate totals and counts
  for (const item of menuItems) {
    if (!courseTotals[item.course]) {
      courseTotals[item.course] = 0;
      courseCounts[item.course] = 0;
    }
    courseTotals[item.course] += item.price;
    courseCounts[item.course] += 1;
  }

  // Calculate averages
  const averages = {};
  for (const course in courseTotals) {
    averages[course] = courseTotals[course] / courseCounts[course];
  }

  return averages;
};

const Home = () => {
  const averages = calculateAverages();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Average Prices by Course:</Text>
      {Object.keys(averages).map((course) => (
        <Text key={course}>
          {course}: ${averages[course].toFixed(2)}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
});

export default Home;
