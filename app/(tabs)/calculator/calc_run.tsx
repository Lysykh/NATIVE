import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface CalcRunProps {
  a: number;
  b: number;
}

function CalcRun({ a, b }: CalcRunProps) {
  // Логика сложения прямо в компоненте (без отдельной функции)
  const c = a + b;

  return (
    <View style={{ borderWidth: 0 }}>
      <Text style={styles.text}>РАЗМИНКА</Text>
      <Text style={styles.text}>Результат: {a} + {b} = {c}</Text>
    </View>
  );
}

export default CalcRun;