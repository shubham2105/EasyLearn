import { fontFamilies } from "../constants/fonts";

export const getFontFamily = (
    isLTR: boolean,
    weight: 'normal' | 'medium' | 'bold' |'italic'|'thin'|'blackItalic',
)=>{
    const selectedFontFamily = isLTR?  fontFamilies.POPPINS : fontFamilies.POPPINS;
    return  selectedFontFamily[weight] || selectedFontFamily.normal;
};
