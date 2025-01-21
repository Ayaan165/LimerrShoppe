import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  GestureResponderEvent,
  Modal,
  Button,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import typography from '../../style/typography';
import AddressCard, {AddressdEditModal, ContectCard} from '../../component/AddressCard';
import BottomBarView from '../../component/BottomBarView';
import {TouchableButton} from '../../component/Button';
import {COLORS} from '../../consts/COLOR';
import PhotoFrame from '../../component/PhotoFrame';
import EditIcon from '../../logo/EditIcon.svg';
import TintedButton from '../../component/TintedButton';
import Check from '../../logo/Check.svg';
import {time} from 'console';
import {PaymentFailed, PaymentProgress, PaymentSucess} from '../../component/Models';

interface PaymentScreenProps {
  navigation: NavigationProp<any>;
  route: any;
}

const shippingOptions = [
  {id: 1, title: 'Standard Shipping', price: 0, time: '5-7 days'},
  {id: 2, title: 'Express Shipping', price: 12, time: '1-2 days'},
  // {id: 3, title: 'Next Day Shipping', price: 20, time: 'Next day'},
];

const PaymentScreen: React.FC<PaymentScreenProps> = ({navigation, route}) => {
  const {cartItem, totalPrice} = route.params;
  const [selectedShipping, setSelectedShipping] = useState<number>(1);
  const [isVisiblePaymentProgress, setIsVisiblePaymentProgress] =
    useState<boolean>(false);
  const [isVisiblePaymentSuccess, setIsVisiblePaymentSuccess] =
    useState<boolean>(false);
  const [isVisiblePaymentFailed, setIsVisiblePaymentFailed] =
    useState<boolean>(false);
  const [isVisiblePaymentError, setIsVisiblePaymentError] =
    useState<boolean>(false);
  const [isVisibleAddVoucher, setIsVisibleAddVoucher] = useState<boolean>(false);
  const [isOpenEditAddress, setIsOpenEditAddress] = useState<boolean>(false);
  const [isOpenEditContact, setIsOpenEditContact] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.container}>
      <Modal visible={isVisiblePaymentProgress} transparent={true}>
        <PaymentProgress />
      </Modal>
      <Modal visible={isVisiblePaymentSuccess} transparent={true}>
        <PaymentSucess
          ontrackPress={() => setIsVisiblePaymentSuccess(false)}
        />
      </Modal>
      <Modal visible={isVisiblePaymentFailed} transparent={true}>
        <PaymentFailed
          onChangePress={() => setIsVisiblePaymentFailed(false)}
          onTryAgainPress={() => {
            setIsVisiblePaymentFailed(false);
          }}
        />
      </Modal>
      <Modal visible={isOpenEditAddress} transparent={true}>
          <AddressdEditModal onSaveChanges={()=>{setIsOpenEditAddress(false)}}/>
      </Modal>
      <ScrollView>
        <Text style={styles.text}>Payment</Text>
        <AddressCard onPress={()=>{setIsOpenEditAddress(true)}}/>
        <ContectCard onPress={()=>{setIsOpenEditContact(true)}}/>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.subTitle}>Items</Text>
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: '#E5EBFC',
                  borderRadius: 15,
                  marginHorizontal: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.counter}>{cartItem.length}</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.addVoucher}>Add Voucher</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginHorizontal: 20, gap: 10}}>
            {cartItem.map(
              (
                item: {
                  id: number;
                  image: string;
                  quantity: number;
                  details: string;
                  discountedPrice: number;
                  price: number;
                },
                index: number,
              ) => (
                <View key={item.id}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '80%',
                        alignItems: 'center',
                      }}>
                      <View style={{width: 58}}>
                        <PhotoFrame size={50} url={item.image} />
                        <View
                          style={{
                            justifyContent: 'center',
                            position: 'absolute',
                            height: 22,
                            width: 22,
                            borderRadius: 11,
                            borderColor: '#fff',
                            borderWidth: 2,
                            backgroundColor: '#E5EBFC',
                            alignItems: 'center',
                            right: 0,
                          }}>
                          <Text
                            style={{fontSize: 13, ...typography.RaleWay700}}>
                            {item.quantity}
                          </Text>
                        </View>
                      </View>
                      <View style={{width: '80%', marginHorizontal: 5}}>
                        <Text style={{fontSize: 14, ...typography.Nunito400}}>
                          {item.details}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text style={{fontSize: 18, ...typography.RaleWay700}}>
                        $
                        {(
                          item.discountedPrice * item.quantity ||
                          item.price * item.quantity
                        ).toFixed(2)}
                      </Text>
                    </View>
                  </View>
                </View>
              ),
            )}
          </View>
        </View>
        <View>
          <View style={{marginHorizontal: 20, marginVertical: 15}}>
            <Text style={{fontSize: 21, ...typography.RaleWay700}}>
              Shipping Options
            </Text>
          </View>
          <View>
            {shippingOptions.map((item, index) => (
              <TouchableOpacity
                onPress={() => setSelectedShipping(item.id)}
                key={item.id}
                activeOpacity={1}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: 20,
                  marginVertical: 5,
                  backgroundColor: '#E5EBFC',
                  paddingVertical: 7,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    width: '80%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                  }}>
                  <View
                    style={{
                      height: 24,
                      width: 24,
                      backgroundColor: '#E5EBFC',
                      borderRadius: 12,
                      borderColor: COLORS.white,
                      borderWidth: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {selectedShipping === item.id && <Check />}
                  </View>
                  <Text style={{fontSize: 16, ...typography.RaleWay600}}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      ...typography.RaleWay500,
                      backgroundColor: '#F5F8FF',
                      color: COLORS.primaryButton,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 4,
                    }}>
                    {item.time}
                  </Text>
                </View>
                <View>
                  <Text style={{fontSize: 16, ...typography.RaleWay700}}>
                    {item.price === 0 ? 'Free' : `$${item.price.toFixed(2)}`}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View>
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 21, ...typography.RaleWay700}}>
              Payment Method
            </Text>
            <EditIcon />
          </View>
          <View style={{alignSelf: 'flex-start', paddingHorizontal: 20}}>
            <TintedButton
              title="Card"
              onPress={() => {}}
              style={{}}
              TextStyle={{
                color: COLORS.primaryButton,
                fontSize: 15,
                ...typography.RaleWay700,
              }}
            />
          </View>
        </View>
        <BottomBarView />
        <View>
          <Button
            title="Payment Failed"
            onPress={() => setIsVisiblePaymentFailed(true)}
          />
          <Button
            title="Payment Success"
            onPress={() => setIsVisiblePaymentSuccess(true)}
          />
          <Button
            title="Payment Progress"
            onPress={() => setIsVisiblePaymentProgress(true)}
          />
        </View>
        <BottomBarView />
        <BottomBarView />
      </ScrollView>
      <View style={styles.cheackOutBox}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Text style={{...typography.RaleWay800, ...typography.font20}}>
              Total
              <Text style={[typography.font18, typography.RaleWay700]}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
            }}>
            <TouchableButton
              disable={cartItem.length === 0 ? true : false}
              title="Pay"
              style={{
                width: 140,
                height: 40,
                borderRadius: 11,
                paddingHorizontal: 20,
                backgroundColor: cartItem.length === 0 ? 'white' : COLORS.black,
              }}
              TextStyle={{
                ...typography.Nunito300,
                ...typography.font16,
                color: cartItem.length === 0 ? 'black' : 'white',
              }}
              onPress={() => {
                // setIsVisiblePaymentProgress(true);
              }}
            />
          </View>
        </View>
        <BottomBarView />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 28,
    ...typography.RaleWay700,
    paddingHorizontal: 20,
  },
  subTitle: {
    fontSize: 21,
    ...typography.RaleWay700,
    // paddingHorizontal: 20,
    marginVertical: 15,
  },
  counter: {
    textAlign: 'center',
    fontSize: 18,
    ...typography.RaleWay700,
    // paddingHorizontal: 20,
    // marginVertical: 15,
  },
  addVoucher: {
    fontSize: 13,
    ...typography.Nunito400,
    color: COLORS.primaryButton,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderColor: COLORS.primaryButton,
    borderWidth: 1,
    borderRadius: 10,
  },
  cheackOutBox: {
    padding: 10,
    width: '100%',
    position: 'absolute',
    backgroundColor: '#F9F9F9',
    bottom: 0,
  },
});

export default PaymentScreen;
