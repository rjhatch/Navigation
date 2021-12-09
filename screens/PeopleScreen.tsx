import * as React from 'react';
import { StyleSheet } from 'react-native';
import DisplayTable from '../components/DisplayTable';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function PeopleScreen({ navigation }: RootTabScreenProps<'TabPeople'>) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>People</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
      <DisplayTable headers={['First Name', 'Last Name']} values={
        [
          ['Richie', 'Hatch'],
          ['Shelly', 'Hatch']
        ]
      } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
