import React from 'react';
import { StyleSheet} from 'react-native';
import { Text, View } from './Themed';

export default function DisplayRow({ values }: { values: string[] }) {
  //returns each row of values.
  return (
    <View style={styles.row}>
      {
        values.map((v, index) => {
          return (
            <View style={index % 2 === 0 ? styles.cell1 : styles.cell2} key={ index }>
              <Text>{v}</Text>
            </View>
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
