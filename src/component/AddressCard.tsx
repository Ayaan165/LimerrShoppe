import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import typography from '../style/typography';
import EditIcon from '../logo/EditIcon.svg';

const AddressCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={{width: '85%', gap: 10}}>
        <Text style={styles.title}>Shipping Address</Text>
        <Text style={styles.address}>
          26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh city
        </Text>
      </View>
      <View
        style={{
          width: '15%',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity>
          <EditIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    margin: 20,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    ...typography.RaleWay700,
    lineHeight: 18,
  },
  address: {
    fontSize: 12,
    ...typography.Nunito400,
    lineHeight: 15,
  },
});

export default AddressCard;
