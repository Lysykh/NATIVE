
import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const WorckOutMain = () => {


  return (
    <View 
    style={{ 
        borderWidth: 1, 
        backgroundColor: '#FFFFFF', // цвет фона
        borderColor: 'blue', 
        padding: 0,
        justifyContent: 'flex-start', // Выравнивание по началу (левому краю для LTR)
       
        
                    }}
    >
      <Text style={styles.text}>РАЗМИНКА</Text>
  
            
       <View style={{ 
        borderWidth: 1, 
        height: 60,
        borderColor: 'red', 
        flexDirection: 'row', // Это ключевое изменение
        justifyContent: 'flex-start', // Выравнивание по началу (левому краю для LTR)
        alignItems: 'center' // Выравнивание по центру по вертикали
                    }}>

            {/* палочка */}
            <View style={{ borderWidth: 1, borderColor: 'blue', backgroundColor: '#BFBFBF', height:'100%', padding: 8 }}>
                <View></View>
                
            </View>
            
            {/* иконки */}
            <View style={{ borderWidth: 1, borderColor: 'blue', height:'100%'}}>
                <View style={{height:'50%', justifyContent: 'center' }}>
                <Image 
    source={require('./img_blue/time.png')} 
    style={{ borderWidth: 1, borderColor: 'red', width: 15, height: 15}}
                />
                </View>
                <View style={{height:'50%', justifyContent: 'center' }}>
                <Image 
    source={require('./img_blue/time.png')} 
    style={{ borderWidth: 1, borderColor: 'black', width: 15, height: 15}}
                />
                </View>
            </View>
            
            {/* значения */}
            <View style={{ borderWidth: 1, borderColor: 'black', height: '100%' }}>   
                <View style={{height:'50%', justifyContent: 'center' }}><Text> 8 : 15</Text></View>
                <View style={{height:'50%', justifyContent: 'center' }}><Text> 60 : 15</Text></View>
            </View>
             
     </View> 

<Text style={styles.text}>Основное задание</Text>
  
<View style={{ borderWidth: 1, borderColor: 'black', padding: 8, height:50 }}>
                <View><Text style={styles.text}>подходы</Text></View>
                
            </View>  

<View style={{ borderWidth: 1, borderColor: 'black', padding: 8, height: 50 }}>
                <View><Text style={styles.text}>повторения</Text></View>
                
            </View>

       <View style={{ 
        borderWidth: 1, 
        borderColor: 'black', 
        padding: 8,
        flexDirection: 'row', // Это ключевое изменение
        justifyContent: 'left', // Равномерное распределение
        alignItems: 'center' // Выравнивание по центру по вертикали
                    }}>

            {/* палочка */}
            <View style={{ borderWidth: 1, borderColor: 'black', padding: 8, height:'100%' }}>
                <View><Text style={styles.text}>палочка 2</Text></View>
                
            </View>
            
            {/* иконки */}
            <View style={{ borderWidth: 1, borderColor: 'black', padding: 8 }}>
                <View><Text style={styles.text}>иконки 2</Text></View>
                <View><Text style={styles.text}>иконки 2</Text></View>
            </View>
            
            {/* значения */}
            <View style={{ borderWidth: 1, borderColor: 'black', padding: 8 }}>   
                <View><Text style={styles.text}>Значения 2</Text></View>
                <View><Text style={styles.text}>Значения 2</Text></View>
            </View>
             
     </View> 



       <View style={{ 
        borderWidth: 1, 
        borderColor: 'black', 
        padding: 8,
        flexDirection: 'row', // Это ключевое изменение
        justifyContent: 'left', // Равномерное распределение
        alignItems: 'center' // Выравнивание по центру по вертикали
                    }}>

            {/* палочка */}
            <View style={{ borderWidth: 1, borderColor: 'black', padding: 8, height:'100%' }}>
                <View><Text style={styles.text}>палочка 3</Text></View>
                
            </View>
            
            {/* иконки */}
            <View style={{ borderWidth: 1, borderColor: 'black', padding: 8 }}>
                <View><Text style={styles.text}>иконки 3</Text></View>
                <View><Text style={styles.text}>иконки</Text></View>
            </View>
            
            {/* значения */}
            <View style={{ borderWidth: 1, borderColor: 'black', padding: 8 }}>   
                <View><Text style={styles.text}>Значения 3</Text></View>
                <View><Text style={styles.text}>Значения</Text></View>
            </View>
             
     </View> 

<View style={{ borderWidth: 1, borderColor: 'black', padding: 8, height: 50 }}>
                <View><Text style={styles.text}>повторения</Text></View>
                
            </View>

          
      <Text style={styles.text}>ЗАМИНКАЕ</Text>
  
    
<View style={{ 
        borderWidth: 1, 
        borderColor: 'black', 
        padding: 8,
        flexDirection: 'row', // Это ключевое изменение
        justifyContent: 'flex-start', // Равномерное распределение
        alignItems: 'center' // Выравнивание по центру по вертикали
                    }}>

            {/* палочка */}
            <View style={{ borderWidth: 1, borderColor: 'black', padding: 8, height:'100%' }}>
                <View><Text style={styles.text}>палочка</Text></View>
                
            </View>
            
            {/* иконки */}
            <View style={{ borderWidth: 1, borderColor: 'black', padding: 8 }}>
                <View><Text style={styles.text}>иконки</Text></View>
                <View><Text style={styles.text}>иконки</Text></View>
            </View>
            
            {/* значения */}
            <View style={{ borderWidth: 1, borderColor: 'black', padding: 8 }}>   
                <View><Text style={styles.text}>Значения</Text></View>
                <View><Text style={styles.text}>Значения</Text></View>
            </View>
             
     </View>       

 
    </View>
  );
};


export default WorckOutMain;