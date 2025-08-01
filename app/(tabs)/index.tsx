import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import SportSelect from './SelectSport';
import SelectSportLevel from './SelectSportLevel';
import SelectLevel from './SelectWorckoutLevel';
import styles from './styles';
import WorckOutMain from './WorckOutMain';
import WorckOut from './WorckOutTop';



// Зачем нужно определять интерфейс для типа пользователя я не понял, но без этого не работает.sv
interface User {
  id: number;
  // Добавьте другие свойства пользователя, которые ожидаете с сервера
  // например: name: string;
}
// Это будем говорить материнская функция... 
export default function HelloWorld() {

  const navigation = useNavigation(); // Добавляем навигацию
  
// Добавляем состояния для показов и удаления компонентов в зависимости от кнопки
  const [showComponents, setShowComponents] = useState({
  sportSelect: true,
  worckOut: false,
  worckOutMain: false
}); 


  const [workoutLevel, setWorkoutLevel] = useState(15); // Добавляем состояние для уровня


    // Состояние для хранения данных пользователя которые мы планируем забрать с сервера и переделать из джейсона. 
  // потом их можно будет использовать как user.id или user.name и т.п.
  // Указываем тип User | null, так как изначально данных нет
  const [user, setUser] = useState<User | null>(null);
  // Состояние для inputId (добавил, так как он используется в запросе). Но для начала в запрос 
  // пока это состояние не использую
  const [inputId, setInputId] = useState<string>('');
  // Асинхронная функция для получения данных пользователя с сервера
  async function fetchUsers() {
    try {
      // Делаем запрос к серверу изначально закомментировал запрос где будет использоваться
      //принимаемое значение и формы
      // const response = await fetch(`http://127.0.0.1:811/get-items/${inputId}`);
      // а в этом запросе для простоты зафиксировал... Но не срабатывает, потому что что-то с вервером или я не правильно фиксируюсь
      const Znacheniya = await fetch(`http://127.0.0.1:811/get-items/1`);
      
      // Проверяем, что запрос успешен... Эта штука выводит LOADING
      if (!Znacheniya.ok) {
        throw new Error(`HTTP error! status: ${Znacheniya.status}`);
      }
      
      // забираем  JSON ответ Вот тут немного не разобрал, немного странный синтаксис
      const data = await Znacheniya.json();
      // он зачемто предлагал вот так
      // const data: User = await Znacheniya.json();

      // Обновляем состояние с полученными данными
      setUser(data);

    
      
    } catch (error) {
      // Обрабатываем возможные ошибки
      console.error('Error fetching user data:', error);
    }
  }
  // это условие не дает постоянно запрашивать функцию и это ПЛОХО, Дима хочет все переписать и улучшить.
  if (!user) fetchUsers();
  



  return (
    
    <View style={styles.motherbox}>
    <View style={{  justifyContent: 'center', alignItems: 'flex-end', marginHorizontal: 20 }}>
      <Image 
        source={require('./logo.png')} // Проверьте правильный путь к файлу
        alt="Logo"
        style={{ width: '50%', height: 70}} // Добавили стили для отображения
        resizeMode="contain"
        
      />
    </View>


{showComponents.sportSelect && <SportSelect />}
{showComponents.worckOut && <WorckOut />}
{showComponents.worckOutMain && <WorckOutMain />}
 
 <SelectLevel level={workoutLevel} setLevel={setWorkoutLevel}/>

            {/* Добавляем кнопку для перехода на новый экран */}
      <TouchableOpacity onPress={() => navigation.navigate('NewScreen')}>
        <Text style={{color: 'blue'}}>Перейти на новый экран</Text>
      </TouchableOpacity>
      
      <View style={styles.underSector}>   
      <View style={styles.sectors}>
      
        <View style={styles.buttomGO}>
        
<TouchableOpacity 
  style={styles.buttomGO}
  onPress={() => setShowComponents({
    sportSelect: !showComponents.sportSelect,
    worckOut: !showComponents.worckOut,
    worckOutMain: !showComponents.worckOutMain
  })}
>
            <Text style={styles.textButtomGo}>СОЗДАТЬ ТРЕНИРОВКУ</Text>
            <Text>Уровень + 2: {workoutLevel + 2}</Text>
          </TouchableOpacity>


<Text>Уровень + 2: {workoutLevel + 2}</Text>

{/* {
// ПРОБУЮ ВЫВОДИТЬ
(() => {
  const a = SelectLevel;
  
  return `${a}`;
})()} */}


        </View>
      
      </View>
      </View>

      
 <SelectSportLevel />


   {/* <View style={styles.container}> */}
      {/* Previous content */}

      {/* <View style={{ bottom: 0, width: '100%', padding: 20 }}>
          <TextInput
              placeholder="Enter ID"
              
        
              style={{
                  marginBottom: 10,
                  padding: 10,
                  borderRadius: 5,
                  borderWidth: 1
              }}
          />
          
          <Button 
              title="Submit" 
            
          />
      </View>
    </View> */}


    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      {/* Отображаем ID пользователя, если данные загружены */}
      <Text style={styles.text}>{user ? user.id : 'Loading...'}</Text>
      {/* если делаю без всякого, то он пишет что значение 0... прошлый раз я решал проблемы тем что задавал по умолчанию значение  */}
      {/* <Text style={styles.text}>{user.id}</Text> */}
    </View>
    </View>
  );
}
