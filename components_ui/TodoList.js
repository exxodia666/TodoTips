import React, { Component, useState } from 'react'
import Item from './Item'
import { View, ScrollView, TextInput, Button, Text, Alert } from 'react-native';
import styles from './styles'

const TodoList = props => {
    //console.warn(props.store);

const listItems   = props.store.map(item => {return <Item itemId = {props.store.indexOf(item)} actions={props.actions} itemProps = {item}/>});

    //console.warn(listItems);props.itemProps.id
    const [input, onChangeText] = useState();

    return (<View style={{paddingTop: 30}}>
                  <TextInput placeholder='Type your task' 
                             onChangeText={text => onChangeText(text)}
                             value={input}
                  />
                  <Button title = "Add" onPress = { () => { if(input) {
                                        //aconsole.warn(input);
                                        props.actions.addTodo(input);
                                        onChangeText('');
                                        } else { 
                                          Alert.alert('Type your task !!!');
                                        }
                                      }
                                    }
                  />
              <ScrollView>
                  {listItems}
              </ScrollView>
           </View>);
  }

export default TodoList;