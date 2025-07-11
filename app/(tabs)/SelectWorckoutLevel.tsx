// Импорт необходимых компонентов из React и React Native
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

// Основной компонент приложения
function SelectLevel() {
  // Использование хука состояния для хранения текущего уровня сложности
  // Начальное значение - 15
  const [level, setLevel] = useState(15);

  // Функция для увеличения уровня сложности
  function handleIncrement() {
    // setLevel принимает функцию обновления, которая получает ПРЕДЫДУЩЕЕ значение состояния
    // prevLevel - это предыдущее значение состояния level перед обновлением
    // React автоматически передает это значение в функцию
    setLevel(function(prevLevel) {
      // Возвращаем новое значение: предыдущее значение + 1
      return prevLevel + 1;
    });
  }

  // Функция для уменьшения уровня сложности
  function handleDecrement() {
    // Аналогично handleIncrement, но с проверкой, чтобы уровень не стал меньше 0
    setLevel(function(prevLevel) {
      // Если предыдущий уровень больше 0, уменьшаем на 1, иначе оставляем 0
      return prevLevel > 0 ? prevLevel - 1 : 0;
    });
  }

  // Вспомогательная функция для вычисления результата
  function calculateResult() {
    const a = 5;
    const b = 3;
    const result = a + b; // Простое сложение для примера
    return result;
  }

  // Возвращаем JSX разметку компонента
  return (
    <View style={styles.underSector}>
      {/* Заголовок секции */}
      <Text style={styles.text}>УРОВЕНЬ СЛОЖНОСТИ ТРЕНИРОВКИ</Text>
      
      {/* Основной контейнер секций */}
      <View style={styles.sectors}>
        <View style={styles.subsectors}>
          {/* Блок отображения уровня */}
          <View style={styles.levelDisplay}>
            {/* Текст с прошлым уровнем */}
            <Text style={styles.levelDisplayText}>ПРОШЛАЯ 12

{
// выводим строку с  значением
(() => {
  const a = level;
  return `${a}`;
})()}

            </Text>
            
            {/* Отображение результата вычислений (8) */}
            <Text style={[styles.text, {marginLeft: 10}]}>
              {calculateResult()}
            </Text>

            {/* Основной блок с текущим уровнем */}
            <View style={styles.levelDisplayMain}>
              {/* Отображаем текущее значение состояния level */}
              <Text style={styles.levelDisplayMainText}>{level}</Text>
            </View>
            
            {/* Индикатор статуса (зеленая точка) */}
            <View style={styles.levelDisplayStatus}>
              <Image 
                source={require('./dot_green.png')}
                alt="Logo"
                style={{ width: '20%', height: 70}}
                resizeMode="contain"
              />
            </View>
          </View>
          
          {/* Блок кнопок управления уровнем */}
          <View style={styles.buttomBox}>
            {/* Кнопка увеличения уровня */}
            <TouchableOpacity 
              style={styles.buttomUp} 
              onPress={handleIncrement} // При нажатии вызываем handleIncrement
            >
              <Text>+</Text>
            </TouchableOpacity>
            
            {/* Кнопка уменьшения уровня */}
            <TouchableOpacity 
              style={styles.buttomDown} 
              onPress={handleDecrement} // При нажатии вызываем handleDecrement
            >
              <Text>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}



export default SelectLevel;