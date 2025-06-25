import { StyleSheet } from "react-native";


export default StyleSheet.create({
  motherbox: {
backgroundColor: '#C0C1C1',
flex: 1,
overflowX: 'hidden', // запрещает горизонтальную прокрутку
  },

underSector: {
borderRadius: 10, 
overflowX: 'hidden', // запрещает горизонтальную прокрутку
backgroundColor: '#CFCFCF',
borderRadius: 10, 
margin:5,

  },

sectors: {
backgroundColor: '#CFCFCF',
overflow: 'scroll', //- разрешает горизонтальный скрол внутри 

  },

  // субсектор прокручивается по горизонтали внутри сетора вместе с боксами
subsectors: { 
backgroundColor: '#CFCFCF',
flexDirection: 'row',   // располагаем элементы в линию
paddingHorizontal: 10,   // отступ слева и справа для контейнера
borderRadius: 10, 
padding: 20,
alignItems: 'center',
  },

spotrbox: {
width: 130,          // ширина квадрата
height: 150,         // высота квадрата
backgroundColor: '#E5E5E5', // цвет фона
marginHorizontal: 10, // расстояние между элементами по горизонтали
borderRadius: 10,     // небольшой радиус для углов (опционально)
  },

levelbox: {
width: 100,          // ширина квадрата
height: 100,         // высота квадрата
backgroundColor: '#E5E5E5', // цвет фона
marginHorizontal: 10, // расстояние между элементами по горизонтали
borderRadius: 10,     // небольшой радиус для углов (опционально)
  },

typebox: {
width: 110,          // ширина квадрата
height: 100,         // высота квадрата
backgroundColor: '#E5E5E5', // цвет фона
marginHorizontal: 10, // расстояние между элементами по горизонтали
borderRadius: 10,     // небольшой радиус для углов (опционально)
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 15,
    color: '#333',
    padding: 10,
    
  },

  backgroundImage: {
    width: '50%', // Размер изображения — 50% от контейнера
    height: '50%',
    alignSelf: 'center', // Центрирует по горизонтали
  },
});


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   text : {
//     fontSize: 50,
//     color: '#333',
//   },

// }
// );

