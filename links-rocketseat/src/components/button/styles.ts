import {StyleSheet} from "react-native";
import {colors} from "@/styles/color";

export const styles = StyleSheet.create({

    container: {
        height: 52,
        width: '100%',
        borderRadius: 8,
        backgroundColor: colors.green[300],
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        color: colors.green[900],
        fontSize: 16,
        fontWeight: 600,
    },

});
    export default styles;
