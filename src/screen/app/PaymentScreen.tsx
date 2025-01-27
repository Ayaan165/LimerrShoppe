import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Button,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import typography from '../../style/typography';
import AddressCard, {
  AddressdEditModal,
  ContectCard,
} from '../../component/AddressCard';
import BottomBarView from '../../component/BottomBarView';
import { TouchableButton } from '../../component/Button';
import { COLORS } from '../../consts/COLOR';
import PhotoFrame from '../../component/PhotoFrame';
import EditIcon from '../../logo/EditIcon.svg';
import TintedButton from '../../component/TintedButton';
import Check from '../../logo/Check.svg';
import {
  PaymentFailed,
  PaymentProgress,
  PaymentSucess,
} from '../../component/Models';
import { AddCardModal } from './Setting/PaymentSetting';
import { BlurView } from '@react-native-community/blur';
import { windowHeight } from '../../style/commonStyle';

interface PaymentScreenProps {
  navigation: NavigationProp<any>;
  route: any;
}

const shippingOptions = [
  { id: 1, title: 'Standard Shipping', price: 0, time: '5-7 days' },
  { id: 2, title: 'Express Shipping', price: 12, time: '1-2 days' },
];

const PaymentScreen: React.FC<PaymentScreenProps> = ({ navigation, route }) => {
  const [cardInfo] = useState([
    {
      id: '1',
      cardType: 'Mastercard',
      cardNumber: ['****', '****', '****', '1579'],
      cardHolder: 'AMANDA MORGAN',
      expiry: '12/22',
    },
  ]);
  const { cartItem, totalPrice } = route.params;
  const [selectedShipping, setSelectedShipping] = useState<number>(1);
  const [isVisiblePaymentProgress, setIsVisiblePaymentProgress] = useState(false);
  const [isVisiblePaymentSuccess, setIsVisiblePaymentSuccess] = useState(false);
  const [isVisiblePaymentFailed, setIsVisiblePaymentFailed] = useState(false);
  const [isOpenEditAddress, setIsOpenEditAddress] = useState(false);
  const [isOpenEditContact, setIsOpenEditContact] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Modals */}
      <Modal visible={isVisiblePaymentProgress} transparent={true}>
        <PaymentProgress />
      </Modal>
      <Modal visible={isVisiblePaymentSuccess} transparent={true}>
        <PaymentSucess ontrackPress={() => setIsVisiblePaymentSuccess(false)} />
      </Modal>
      <Modal visible={isVisiblePaymentFailed} transparent={true}>
        <PaymentFailed
          onChangePress={() => setIsVisiblePaymentFailed(false)}
          onTryAgainPress={() => setIsVisiblePaymentFailed(false)}
        />
      </Modal>
      <Modal visible={isOpenEditAddress} transparent={true}>
        <AddressdEditModal
          onSaveChanges={() => setIsOpenEditAddress(false)}
        />
      </Modal>

      <ScrollView>
        <Text style={styles.text}>Payment</Text>

        {/* Address and Contact Cards */}
        <AddressCard onPress={() => setIsOpenEditAddress(true)} />
        <ContectCard onPress={() => setIsOpenEditContact(true)} />

        {/* Items Section */}
        <View>
          <View style={styles.sectionHeaderContainer}>
            <View style={styles.itemsHeaderContainer}>
              <Text style={styles.subTitle}>Items</Text>
              <View style={styles.counterContainer}>
                <Text style={styles.counter}>{cartItem.length}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.addVoucher}>Add Voucher</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginHorizontal: 20, gap: 10 }}>
            {cartItem.map((item, index) => (
              <View key={item.id}>
                <View style={styles.itemContainer}>
                  <View style={styles.itemDetailsContainer}>
                    <View style={{ width: 58 }}>
                      <PhotoFrame size={50} url={item.image} />
                      <View style={styles.quantityBadge}>
                        <Text style={{ fontSize: 13, ...typography.RaleWay700 }}>
                          {item.quantity}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.itemDescriptionContainer}>
                      <Text style={{ fontSize: 14, ...typography.Nunito400 }}>
                        {item.details}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.itemPrice}>
                    $
                    {(
                      item.discountedPrice * item.quantity ||
                      item.price * item.quantity
                    ).toFixed(2)}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Shipping Options */}
        <View>
          <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
            <Text style={{ fontSize: 21, ...typography.RaleWay700 }}>
              Shipping Options
            </Text>
          </View>
          {shippingOptions.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => setSelectedShipping(item.id)}
              style={styles.shippingOption}
            >
              <View style={styles.shippingOptionDetails}>
                <View style={styles.shippingOptionCheck}>
                  {selectedShipping === item.id && <Check />}
                </View>
                <Text style={{ fontSize: 16, ...typography.RaleWay600 }}>
                  {item.title}
                </Text>
                <Text style={styles.shippingOptionTime}>{item.time}</Text>
              </View>
              <Text style={{ fontSize: 16, ...typography.RaleWay700 }}>
                {item.price === 0 ? 'Free' : `$${item.price.toFixed(2)}`}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Payment Method */}
        <View>
          <View style={styles.paymentMethodHeader}>
            <Text style={{ fontSize: 21, ...typography.RaleWay700 }}>
              Payment Method
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('CardSelectModal')}>
              <EditIcon />
            </TouchableOpacity>
          </View>
          <View style={{ alignSelf: 'flex-start', paddingHorizontal: 20 }}>
            <TintedButton
              title="Card"
              onPress={() => {}}
              TextStyle={styles.tintedButtonText}
            />
          </View>
        </View>

        {/* BottomBar and Debug Buttons */}
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
      </ScrollView>

      {/* Checkout Box */}
      <View style={styles.cheackOutBox}>
        <View style={styles.checkoutContainer}>
          <Text style={styles.totalText}>
            Total
            <Text style={styles.totalAmountText}>${totalPrice.toFixed(2)}</Text>
          </Text>
          <TouchableButton
            disable={cartItem.length === 0}
            title="Pay"
            style={styles.payButton}
            TextStyle={styles.payButtonText}
            onPress={() => {}}
          />
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
    marginVertical: 15,
  },
  counter: {
    textAlign: 'center',
    fontSize: 18,
    ...typography.RaleWay700,
  },
  counterContainer: {
    height: 30,
    width: 30,
    backgroundColor: '#E5EBFC',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
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
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemDetailsContainer: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
  },
  itemDescriptionContainer: {
    width: '80%',
    marginHorizontal: 5,
  },
  itemPrice: {
    fontSize: 18,
    ...typography.RaleWay700,
  },
  quantityBadge: {
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
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  itemsHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shippingOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: '#E5EBFC',
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  shippingOptionDetails: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  shippingOptionCheck: {
    height: 24,
    width: 24,
    backgroundColor: '#E5EBFC',
    borderRadius: 12,
    borderColor: COLORS.white ,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shippingOptionTime: {
    fontSize: 13,
    ...typography.RaleWay500,
    backgroundColor: '#F5F8FF',
    color: COLORS.primaryButton,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
  paymentMethodHeader: {
    marginHorizontal: 20,
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tintedButtonText: {
    color: COLORS.primaryButton,
    fontSize: 15,
    ...typography.RaleWay700,
  },
  cheackOutBox: {
    padding: 10,
    width: '100%',
    position: 'absolute',
    backgroundColor: '#F9F9F9',
    bottom: 0,
  },
  checkoutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalText: {
    ...typography.RaleWay800,
    ...typography.font20,
  },
  totalAmountText: {
    ...typography.font18,
    ...typography.RaleWay700,
  },
  payButton:{
    width: 140,
    height: 40,
    borderRadius: 11,
    paddingHorizontal: 20,
    backgroundColor: COLORS.black,
  },
  payButtonText: {
    ...typography.Nunito300,
    ...typography.font16,
    color: 'white' ,
  },
});

export default PaymentScreen;

