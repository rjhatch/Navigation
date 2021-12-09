import * as React from 'react';
import { StyleSheet } from 'react-native';
import DisplayTable from '../components/DisplayTable';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function PaymentsScreen({ navigation }: RootTabScreenProps<'TabPayments'>) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Payments</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
      <DisplayTable headers={['Person', 'Description', 'Amount', 'Paid', 'Date']} values={
        [
          ['Richie', 'Membership', '99', 'Yes', 'Nov 1, 2020'],
          ['Shelly', 'Membership', '99', 'Yes', 'Nov 1, 2020'],
          ['Richie', 'Membership', '99', 'No', ''],
          ['Shelly', 'Membership', '99', 'No', ''],
          ['Richie', 'Membership', '99', 'No', ''],
          ['Shelly', 'Membership', '99', 'Yes', 'Oct 1, 2020'],
          ['Richie', 'Membership', '99', 'Yes', 'Oct 1, 2020'],
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
