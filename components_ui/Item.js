import React, { Component, useState } from 'react'
//import '../styles/style.css'
import { View, Button, Text ,CheckBox} from 'react-native';

const Item = props => {
    /*const appState    = props.store;
    const addTodo     = props.actions.addTodo;
    const reverseTodo = props.actions.reverseTodo;
    const deleteTodo  = props.actions.deleteTodo;
/*
    const listItems   = appState.map((item) => {
      if(item.completed === true) { var liStyle = { 'textDecoration': 'line-through' }};
      if(item.completed === true) { alert(document.getElementsByClassName('check').checked)};
      return (<li className = 'todo'>
                              <a className = 'delete' onClick = { () => { deleteTodo(appState.indexOf(item))} }> Delete </a> 
                              <input className='check' type='checkbox' onClick = { () => { reverseTodo({ completed: item.completed, id: appState.indexOf(item) });}}/>
                              <div style = { liStyle }> {item.text} </div>
              </li>);
    });
<li className = 'todo'>
                              <a className = 'delete' onClick = { () => { deleteTodo(appState.indexOf(item))} }> Delete </a> 
                              <input className='check' type='checkbox' onClick = { () => { reverseTodo({ completed: item.completed, id: appState.indexOf(item) });}}/>
                              <div style = { liStyle }> {item.text} </div>
              </li>);
    let input = '';
*/
const [checked, setChecked] = useState(props.itemProps.checked);
    return (<View>
                    <Button title   = "Delete" 
                            onPress = { () => {console.warn(props.itemId);
                                               props.actions.deleteTodo(props.itemProps.id)} } 
                    />
                    <CheckBox
                      checked={checked}
                      onPress={() => setChecked(!!checked)}
                    />
                    <Text>{props.itemProps.id.toString()}</Text>
                    <Text>{props.itemProps.text.toString()}</Text>
           </View>);
};
export default Item;