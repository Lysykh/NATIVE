import { StyleSheet } from "react-native";


export default StyleSheet.create({
  motherbox: {
backgroundColor: '#C0C1C1',
flex: 1,
overflowX: 'hidden', // запрещает горизонтальную прокрутку
  },

sectors: {
backgroundColor: '#CFCFCF',
overflow: 'scroll', //- разрешает горизонтальный скрол внутри 
  },

  // субсектор прокручивается по горизонтали внутри сетора вместе с боксами
subsectors: { 
backgroundColor: '#CFCFCF',
flexDirection: 'row',   // располагаем элементы в линию
justifyContent: 'space-between', // равномерное распределение по оси X
paddingHorizontal: 20,   // отступ слева и справа для контейнера
  },

spotrbox: {
width: 120,          // ширина квадрата
height: 140,         // высота квадрата
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
    fontSize: 50,
    color: '#333',
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

