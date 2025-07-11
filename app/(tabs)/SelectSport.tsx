// Импортируем необходимые компоненты и хуки из React и React Native
import React, { useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles'; // Импортируем стили из отдельного файла

// Создаем основной компонент с использованием function declaration
function SportSelect() {
  // Состояние для хранения выбранного вида спорта
  // Изначально null - ничего не выбрано
  const [sport, setSport] = useState(null);
  
  // Состояние для хранения текущего типа изображения плавания
  // Изначально 'orange' - показываем оранжевую иконку
  const [swimType, setSwimType] = useState('orange');

  // Функция-обработчик нажатия на иконку плавания
  function handleSwimPress() {
    // Определяем следующий тип иконки на основе текущего
    let nextType;
    
    // Используем switch для циклического перебора состояний
    switch (swimType) {
      case 'orange':
        nextType = 'green'; // После оранжевого - зеленый
        break;
      case 'green':
        nextType = 'red';   // После зеленого - красный
        break;
      case 'red':
        nextType = 'grey';  // После красного - серый
        break;
      case 'grey':
        nextType = 'orange'; // После серого снова оранжевый (зацикливаем)
        break;
      default:
        nextType = 'orange'; // По умолчанию - оранжевый
    }
    
    // Обновляем состояния
    setSwimType(nextType);  // Устанавливаем новый тип иконки
    setSport('swim');       // Фиксируем, что выбран вид спорта 'swim'
    
    // Для отладки: выводим текущие значения в консоль
    console.log('sport: swim, swimType: ' + nextType);
  }

  // Вспомогательная функция для получения нужного изображения
  // в зависимости от текущего состояния swimType
  function getSwimImage() {
    // В зависимости от текущего типа возвращаем соответствующее изображение
    switch (swimType) {
      case 'orange':
        return require('./swim_orange.png');
      case 'green':
        return require('./swim_green.png');
      case 'red':
        return require('./swim_red.png');
      case 'grey':
        return require('./swim_grey.png');
      default:
        return require('./swim_orange.png'); // По умолчанию оранжевое
    }
  }

  // Возвращаем JSX разметку компонента
  return (
    <View style={styles.underSector}>
      {/* Заголовок секции */}
      <Text style={styles.text}>ВИД СПОРТА</Text>
      
      {/* Основной контейнер для видов спорта */}
      <View style={styles.sectors}>
        <View style={styles.subsectors}>
          {/* Контейнер для иконки плавания с обработчиком нажатия */}
          <TouchableOpacity onPress={handleSwimPress}>
            <ImageBackground
              source={getSwimImage()} // Динамически выбираем изображение
              style={styles.spotrbox}
              resizeMode="contain"    // Режим отображения изображения
              imageStyle={styles.backgroundImage}
            >



{
// выводим строку с обоими значениями
(() => {
  const a = sport;
  const b = swimType;
  
  return `${a} ${b}`;
})()}

              {/* Здесь может быть дополнительный контент */}
            </ImageBackground>
          </TouchableOpacity>
          
          {/* Иконка бега (статичная, без обработчика) */}
          <ImageBackground
            source={require('./run_grey.png')}
            style={styles.spotrbox}
            resizeMode="contain"
            imageStyle={styles.backgroundImage}
          >
            {/* Здесь может быть дополнительный контент */}
          </ImageBackground>
          
          {/* Иконка велоспорта (статичная, без обработчика) */}
          <ImageBackground
            source={require('./bike_grey.png')}
            style={styles.spotrbox}
            resizeMode="contain"
            imageStyle={styles.backgroundImage}
          >
            {/* Здесь может быть дополнительный контент */}
          </ImageBackground>

          {/* Пустой контейнер (возможно, для будущих элементов) */}
          <View style={styles.spotrbox}></View>
        </View>
      </View>
    </View>
  );
}

// Экспортируем компонент для использования в других частях приложения
export default SportSelect;