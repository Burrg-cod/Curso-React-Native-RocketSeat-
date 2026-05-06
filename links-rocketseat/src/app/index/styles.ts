import {StyleSheet} from 'react-native';
import {color} from '@/styles/color';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.gray[100],
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: color.gray[900],
    }
});
export default styles;
