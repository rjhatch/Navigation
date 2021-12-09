import * as React from 'react';
import { StyleSheet } from 'react-native';
import DisplayTable from '../components/DisplayTable';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function ScheduleScreen({ navigation }: RootTabScreenProps<'TabSchedule'>) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Schedule</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
      <DisplayTable headers={['Class Name', 'Start Time (Hour)', 'Duration (Minutes)']} values={
        [
          ['Krav Maga Level 1', '16', '60'],
          ['Krav Maga Level 2', '17', '60'],
          ['Krav Maga Level 3', '18', '60'],
          ['Krav Maga Level 4', '19', '60'],
          ['Krav Maga Level 5', '20', '60']
        ]
      } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
