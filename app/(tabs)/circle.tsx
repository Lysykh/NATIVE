import { useState } from 'react';
import { Slider as RangeSlider, StyleSheet, Text, View } from 'react-native';

const Circle = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const maxValue = 42;

  // Рассчитываем значения секторов
  const redAngle = (sliderValue / maxValue) * 360;
  const blueAngle = ((maxValue - sliderValue) / maxValue) * 180; 

  return (
    <View className="circle-container">
      <Text className="circle-title">Кругова диаграма</Text>
      
      {/* Контейнер для кругової диаграми */}
      <View style={styles.chartContainer}>
        {/* Сектор зелений */}
        <View 
          style={[
            styles.greenSector,
            {
              borderRightColor: 'green',
              borderLeftWidth: 0,
              borderTopStartAngle: `${redAngle + blueAngle / 2}%`,
              borderBottomEndAngle: `${redAngle + blueAngle / 2}%`
            }
          ]}
        />
        
        {/* Сектор синій */}
        <View 
          style={[
            styles.blueSector,
            {
              borderRightColor: 'blue',
              borderLeftWidth: 0,
              borderTopStartAngle: `${maxValue > sliderValue ? redAngle : 0}%`,
              borderBottomEndAngle: `${maxValue > sliderValue ? redAngle : 0}%`
            }
          ]}
        />
        
        {/* Сектор коричневий */}
        <View 
          style={[
            styles.redSector,
            {
              borderRightColor: 'red',
              borderLeftWidth: 0,
              borderTopStartAngle: `${maxValue > sliderValue ? redAngle : 0}%`,
              borderBottomEndAngle: `${maxValue > sliderValue ? redAngle : 0}%`
            }
          ]}
        />
      </View>

      {/* Контейнер для слайдера */}
      <View className="circle-slider-container">
        <RangeSlider
          minimumValue={0}
          maximumValue={42}
          value={sliderValue}
          onSlidingChange={(value) => setSliderValue(value)}
          style={{ width: '100%', height: 5 }}
        />
        
        {/* Марки для слайдера */}
        <View className="circle-slider-marks">
          {[...Array(43)].map((_, i) => (
            <Text 
              key={i} 
              className={`circle-slider-mark ${i <= sliderValue ? 'circle-active' : ''}`}
              style={{ position: 'absolute', bottom: 10, left: `${(i / 42) * 100}%` }}
            >
              {i}
            </Text>
          ))}
        </View>

        <Text className="circle-slider-value">Текущее значення: {sliderValue}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    width: '100%',
    height: 250,
    position: 'relative',
    marginBottom: 20
  },
  
  redSector: {
    position: 'absolute',
    top: -1,
    left: 0,
    right: 0,
    bottom: 0,
    borderLeftWidth: 3,
    borderRightColor: '#ff4757'
  },

  blueSector: {
    position: 'absolute',
    top: -1,
    left: 0,
    right: 0,
    bottom: 0,
    borderLeftWidth: 3,
    borderRightColor: '#2196f3'
  },
  
  greenSector: {
    position: 'absolute',
    top: -1,
    left: 0,
    right: 0,
    bottom: 0,
    borderLeftWidth: 3,
    borderRightColor: '#4CAF50'
  }
});

export default Circle;