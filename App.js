import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

const currentValue = { 
  DOLLAR: 0.014,
  RUPEE: 1,
  CAD: 0.017,
  GBP: 0.01,
  BITCOIN: 0.000014
};

export default class CurrenyConverter extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
                        inputValue: '',
                        resultValue: '0.0'
                     };
     };

     buttonTapped = (currency) =>
     {
       if(this.state.inputValue === "")
       {
         alert('Enter some currency');
       }
       let results = parseFloat(this.state.inputValue) * currentValue[currency];
       this.setState({resultValue: results.toFixed(3)});
     };

     

    render()
    {
        return (
          <SafeAreaView style={styles.container}>
                <Text style={styles.labelText}>
                  Currency Converter
                </Text>
              

              <View style={styles.resultView}>
                  <Text style={styles.resultText}>
                    {this.state.resultValue}
                  </Text>
              </View>

              <View style={styles.inputView}>
                <TextInput 
                  style={styles.inputText}
                  placeholder='Enter Currency'
                  onChangeText={(inputValue)=>{this.setState({inputValue})}}
                  value={this.state.inputValue}
                />
              </View>


              <View style={styles.buttonView}>
                
                <TouchableOpacity 
                  style={styles.button}
                  onPress={(value)=>{this.buttonTapped('DOLLAR')}}
                >
                  <Text style={styles.buttonText}> $ </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={(value)=>{this.buttonTapped('CAD')}}
                >
                  <Text style={styles.buttonText}> CAD </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={(value)=>{this.buttonTapped('GBP')}}
                >
                  <Text style={styles.buttonText}> GBP </Text>
                </TouchableOpacity>
              
                 

              </View>






          </SafeAreaView>

        );
    };
};


const styles = StyleSheet.create(
{
    container: 
    {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    labelText:
    {
        fontSize: 40,
        color:'lightgreen',
        marginBottom: 30
    },
    resultView:
    {
      borderRadius: 10,
      backgroundColor: 'lightgreen',
      alignSelf:'stretch',
      marginHorizontal: 20,
      

    },
    resultText:
    {
      fontSize: 30,
      paddingVertical: 20,
      color:'white',
      alignSelf:'center',

    },
    inputView:
    {
      borderRadius: 10,
      borderWidth:0.5,
      borderColor:'lightgray',
      marginHorizontal: 20,
      marginVertical: 40

    },
    inputText:
    {
      fontSize: 30,
      paddingVertical: 20,
      paddingHorizontal: 10,
      alignSelf:'center',
      width: 300
    },
    buttonView:
    {
      borderColor: 'lightgray',
      borderWidth: 0.5,
      borderRadius: 10,
      alignSelf:'stretch',
      flexDirection:'row',
      marginHorizontal: 20


    },
    buttonText:
    {
      fontSize: 25,
      alignSelf:'center',
    }, 
    button:
    {
      backgroundColor:'lightblue',
      paddingVertical: 20,
      paddingHorizontal: 30,
      borderRadius: 10,
      width: '33.3%'

      //flex: 3,

    } ,

});