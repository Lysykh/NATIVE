import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const SelectSportLevel = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedBox, setSelectedBox] = useState<number | null>(null);

  const timeOptions = ['02:00', '01:55', '01:50', '01:45', '01:40', '01:35', '01:30'];

  const handleBoxPress = (index: number, time: string) => {
    setSelectedBox(index);
    setSelectedTime(time);
  };

  return (
    <View style={styles.underSector}>
      <Text style={styles.text}>ТВОЙ СПОРТИВНЫЙ УРОВЕНЬ</Text>
      <View style={styles.sectors}>
        <View style={styles.subsectors}>
          {timeOptions.map((time, index) => (
            <TouchableOpacity
              key={time}
              style={[
                styles.levelbox,
                selectedBox === index && styles.selectedBox
              ]}
              onPress={() => handleBoxPress(index, time)}
            >
              <Text style={styles.text}>100М {time}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};


export default SelectSportLevel;