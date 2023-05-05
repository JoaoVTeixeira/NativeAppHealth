import React from "react";
import { StyleSheet,View, Text } from "react-native";
export default function Title() {
    return (
        <View>
            <Text style={styles.title}>
                App Health
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize:28,
    }


})