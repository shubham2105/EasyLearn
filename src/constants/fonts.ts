import { Platform } from 'react-native';


export const fontFamilies = {
  POPPINS: {
    normal: Platform.OS === 'ios' ? 'Poppins-Regular' : 'PoppinsRegular',
    medium: Platform.OS === 'ios' ? 'Poppins-Medium' : 'PoppinsMedium',
    bold: Platform.OS === 'ios' ? 'Poppins-Bold' : 'PoppinsBold',
    italic: Platform.OS === 'ios' ? 'Poppins-Italic' : 'PoppinsItalic',
    thin: Platform.OS === 'ios' ? 'Poppins-Thin'  : 'PoppinsThin',
    blackItalic: Platform.OS === 'ios' ? 'Poppins-blackItalic' : 'PoppinsBlackItalic',
  },
};
