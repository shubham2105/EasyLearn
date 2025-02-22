import { SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import { getFontFamily } from '../utils/fontFamily';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.headerText, {fontFamily:getFontFamily(true,'bold')}]}>HomeScreen</Text>
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
