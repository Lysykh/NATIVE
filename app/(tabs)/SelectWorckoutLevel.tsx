// Импорт необходимых компонентов из React и React Native
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

// Добавляем интерфейс для пропсов
interface SelectLevelProps {
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}

function SelectLevel({ level, setLevel }: SelectLevelProps) {
  function handleIncrement() {
    setLevel(prevLevel => prevLevel + 1);
  }

  function handleDecrement() {
    setLevel(prevLevel => (prevLevel > 0 ? prevLevel - 1 : 0));
  }

  function calculateResult() {
    const a = 5;
    const b = 3;
    const result = a + b;
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