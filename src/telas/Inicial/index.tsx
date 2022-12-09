import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export function Inicial(){

    return(
        
        <View>
            <Text>Login:</Text>
            <TextInput testID="input-edv" value="92897398"/> 
            <TextInput testID="input-password" value="1L0V3Chocol@te"/>
            <Button title="Login" onPress={() => {}} />"
        </View> 
    )
}