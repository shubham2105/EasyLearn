import { SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import { getFontFamily } from '../utils/fontFamily';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.headerText, {fontFamily:getFontFamily(true,'medium')}]}>HomeScreen</Text>
      <Icon name="close" size= {30}/>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText:{
        // fontSize: 16,
    },
});
