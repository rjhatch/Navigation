import React from 'react';
import { StyleSheet } from 'react-native';
import DisplayRow from './DisplayRow';
import { Text, View } from './Themed';

export default function DisplayTable(props: any) {
  //makes a 'table' and displays each row of data.
  return (
    <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
      <DisplayRow values={ props.headers } />
      {
        props.values.map((v: any) => {
          return (
            <DisplayRow values={ v } key={ v }/>
          );
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  cell1: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'lightblue'
  },
  cell2: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'lightgreen'
  },
});
