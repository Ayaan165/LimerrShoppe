import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Modal,
  PanResponder,
  Animated,
  Pressable,
} from 'react-native';
import {COLORS} from '../../consts/COLOR';
import ArrowButton from '../../component/ArrowButton';
import commonStyle, {windowHeight, windowWidth} from '../../style/commonStyle';
import Share from '../../logo/Share.svg';
import STAR from '../../logo/STAR.svg';
import STAR2 from '../../logo/STAR2.svg';
import MostPopular from '../../component/MostPopular.';
import JustForYou from '../../component/JustForYou';
import {NavigationProp} from '@react-navigation/native';
import {BlackButton, TouchableButton} from '../../component/Button';
import GestureRecognizer from 'react-native-swipe-gestures';
import {BlurView} from '@react-native-community/blur';
import typography from '../../style/typography';
import More from '../../logo/More.svg';
import Less from '../../logo/Less.svg';
import Heart from '../../logo/Heart.svg';
import Check from '../../logo/Check.svg';
interface ProductFullProps {
  navigation: NavigationProp<any>;
}

const {width} = Dimensions.get('window');

const ProductFull: React.FC<ProductFullProps> = ({navigation}) => {
  const increaseRef = useRef(null);
  const decreaseRef = useRef(null);
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [Quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const Size = [
    {id: 1, size: 'S', status: 'available'},
    {id: 2, size: 'M', status: 'available'},
    {id: 3, size: 'L', status: 'available'},
    {id: 4, size: 'XL', status: 'available'},
    {id: 5, size: 'XXL', status: 'unavailable'},
    {id: 6, size: 'XXXL', status: 'unavailable'},
  ];

  const productDetails = {
    price: '$17.00',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
    variations: {
      color: 'Pink',
      size: 'M',
      images: [
        {
          id: 1,
          color: 'Pink',
          Url: require('../../assets/image/FS1.png'),
        },
        {
          id: 2,
          color: 'Blue',
          Url: require('../../assets/image/FS2.png'),
        },
        {
          id: 3,
          color: 'Yellow',
          Url: require('../../assets/image/FS3.png'),
        },
      ],
    },
    specifications: {
      material: [
        {type: 'Cotton', percentage: '95%'},
        {type: 'Nylon', percentage: '5%'},
      ],
      origin: 'EU',
    },
    delivery: [
      {type: 'Standard', duration: '5-7 days', cost: '$3.00'},
      {type: 'Express', duration: '1-2 days', cost: '$12.00'},
    ],
    ratingAndReviews: {
      overallRating: '4/5',
      stars: 4,
      reviews: [
        {
          reviewerName: 'Veronika',
          rating: 5,
          comment:
            'Lorem ipsum dolor sit amet, consectetur sadipscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed ...',
          reviewerImage: require('../../assets/image/FS1.png'),
        },
      ],
    },
  };

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };
  const IncreaseItem = () => {
    if (Quantity < 10) {
      setQuantity(Quantity + 1);
    }
  };
  const DecreaaseItem = () => {
    if (Quantity > 1) {
      setQuantity(Quantity - 1);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <GestureRecognizer onSwipeDown={() => setIsVisible(false)}>
        <Modal transparent animationType="slide" visible={isVisible}>
          <View style={styles.modalContent}>
            <View>
              <View style={styles.modalHeader}>
                <View>
                  <Image
                    source={require('../../assets/image/NI1.png')}
                    style={styles.modalImage}
                  />
                </View>
                <View style={styles.modalHeaderContent}>
                  <View>
                    <Text style={styles.price}>{productDetails.price}</Text>
                  </View>
                  <View style={styles.modalVariationContainer}>
                    <Text style={styles.modalVariationText}>
                      {selectedColor || productDetails.variations.color}
                    </Text>
                    <Text style={styles.modalVariationText}>
                      {selectedSize || productDetails.variations.size}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.colorOptionsContainer}>
                <Text style={styles.colorOptionsTitle}>Color Options</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {productDetails.variations.images.map((item, index) => (
                    <Pressable
                      key={index}
                      style={styles.colorOptionItem}
                      onPress={() => setSelectedColor(item.color)}>
                      <Image
                        source={item.Url}
                        style={styles.colorOptionImage}
                      />
                      {selectedColor === item.color && (
                        <Check style={styles.checkforSelectedColor} />
                      )}
                    </Pressable>
                  ))}
                </ScrollView>
              </View>
              <View style={styles.sizeContainer}>
                <Text style={styles.sizeTitle}>Size</Text>
                <View style={styles.sizeOptionsContainer}>
                  {Size.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        if (item.status === 'available') {
                          setSelectedSize(item.size);
                        }
                      }}
                      disabled={item.status === 'unavailable'}
                      style={[
                        styles.sizeOption,
                        {
                          backgroundColor:
                            item.status === 'unavailable'
                              ? '#E5EBFC'
                              : item.size === selectedSize
                              ? '#E5EBFC'
                              : '#F8FAFF',
                          borderColor:
                            item.size === selectedSize
                              ? COLORS.primaryButton
                              : '#F8FAFF',
                        },
                      ]}>
                      <Text
                        style={[
                          styles.sizeOptionText,
                          {
                            color:
                              item.status === 'unavailable'
                                ? '#BEC8E5'
                                : '#000',
                          },
                        ]}>
                        {item.size}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={styles.quantityContainer}>
                  <View>
                    <Text style={styles.quantityTitle}>Quantity</Text>
                  </View>
                  <View style={styles.quantityControls}>
                    <Pressable
                      onPress={DecreaaseItem}
                      ref={decreaseRef}
                      style={({pressed}) => [
                        styles.quantityButton,
                        {
                          backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white',
                        },
                      ]}>
                      <Less />
                    </Pressable>
                    <View style={styles.quantityDisplay}>
                      <Text style={styles.quantityText}>{Quantity}</Text>
                    </View>
                    <Pressable
                      onPress={IncreaseItem}
                      ref={increaseRef}
                      style={({pressed}) => [
                        styles.quantityButton,
                        {
                          backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white',
                        },
                      ]}>
                      <More />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.bottomActions}>
              <View style={styles.heartButtonContainer}>
                <View style={styles.heartButton}>
                  <TouchableOpacity>
                    <Heart />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.actionButtons}>
                <BlackButton
                  title="Add to Cart"
                  onPress={() => {
                    setIsVisible(false);
                  }}
                  style={styles.actionButton}
                />
                <TouchableButton
                  title="Buy Now"
                  onPress={() => {
                    setIsVisible(false);
                  }}
                  style={styles.actionButton}
                />
              </View>
            </View>
          </View>
        </Modal>
      </GestureRecognizer>
      <ScrollView>
        {/* Slider Section */}
        <View>
          <FlatList
            ref={flatListRef}
            data={productDetails.variations.images}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            renderItem={({item}) => (
              <View style={styles.sliderItem}>
                <Image source={item.Url} style={styles.sliderImage} />
              </View>
            )}
          />
          <View style={styles.pagination}>
            {productDetails.variations.images.map((_, index) => (
              <View
                key={index}
                style={[styles.dot, activeIndex === index && styles.activeDot]}
              />
            ))}
          </View>
        </View>

        {/* Product Details */}
        <View style={styles.details}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              //   backgroundColor: 'red',
              marginBottom: 10,
            }}>
            <Text style={styles.price}>{productDetails.price}</Text>
            <Share />
          </View>
          <Text style={styles.description}>{productDetails.description}</Text>

          {/* Variations */}
          <View
            style={{
              marginBottom: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.sectionTitle}>Variations</Text>
            <View style={styles.variationsContainer}>
              <View style={{flexDirection: 'row', marginLeft: 10}}>
                <TouchableOpacity style={styles.variation}>
                  <Text style={styles.variationText}>
                    {productDetails.variations.color}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.variation}>
                  <Text style={styles.variationText}>
                    {productDetails.variations.size}
                  </Text>
                </TouchableOpacity>
              </View>
              <ArrowButton
                onPress={() => {
                  setIsVisible(true);
                }}
              />
            </View>
          </View>
          <View style={{marginBottom: 20}}>
            <FlatList
              data={productDetails.variations.images}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View style={styles.thumbnailWrapper}>
                  <Image source={item.Url} style={styles.thumbnail} />
                </View>
              )}
            />
          </View>
          {/* Specifications */}
          <Text style={[commonStyle.mb10, styles.sectionTitle]}>
            Specifications
          </Text>
          <Text style={styles.spec}>Material</Text>
          <View style={styles.materialContainer}>
            {productDetails.specifications.material.map((mat, index) => (
              <TouchableOpacity key={index} style={styles.material}>
                <Text style={styles.materialText}>
                  {mat.type} {mat.percentage}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.spec}>Origin</Text>
          <TouchableOpacity style={styles.origin}>
            <Text style={[styles.materialText]}>
              {productDetails.specifications.origin}
            </Text>
          </TouchableOpacity>
          <View style={styles.sizeGuide}>
            <Text style={styles.sizeGuideText}>Size guide </Text>
            <ArrowButton onPress={() => {}} />
          </View>

          {/* Delivery */}
          <Text style={[styles.sectionTitle, {marginBottom: 10}]}>
            Delivery
          </Text>
          {productDetails.delivery.map((item, index) => (
            <View key={index} style={styles.deliveryRow}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                <Text style={styles.deliveryText1}>{item.type}</Text>
                <View
                  style={{
                    backgroundColor: '#F5F8FF',
                    padding: 5,
                    borderRadius: 5,
                  }}>
                  <Text style={styles.deliveryText2}>{item.duration}</Text>
                </View>
              </View>
              <Text style={styles.deliveryText3}>{item.cost}</Text>
            </View>
          ))}

          {/* Rating & Reviews */}
          <Text style={[styles.sectionTitle, {marginTop: 15}]}>
            Rating & Reviews
          </Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingStars}>
              {Array(productDetails.ratingAndReviews.stars)
                .fill(null)
                .map((_, index) => (
                  <STAR key={index} />
                ))}
              {Array(5 - productDetails.ratingAndReviews.stars)
                .fill(null)
                .map((_, index) => (
                  <STAR2 key={index} />
                ))}
            </Text>
            <Text style={styles.ratingOverall}>
              {productDetails.ratingAndReviews.overallRating}
            </Text>
          </View>
          {productDetails.ratingAndReviews.reviews.map((review, index) => (
            <View key={index} style={styles.review}>
              <View style={{width: '15%'}}>
                <Image
                  source={review.reviewerImage}
                  style={styles.reviewerImage}
                />
              </View>
              <View
                style={{
                  width: '85%',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Text style={styles.reviewerName}>{review.reviewerName}</Text>
                <View>
                  <Text style={styles.ratingStars}>
                    {Array(productDetails.ratingAndReviews.stars)
                      .fill(null)
                      .map((_, index) => (
                        <STAR key={index} height={15} width={15} />
                      ))}
                    {Array(5 - productDetails.ratingAndReviews.stars)
                      .fill(null)
                      .map((_, index) => (
                        <STAR2 key={index} height={15} width={15} />
                      ))}
                  </Text>
                </View>
                <Text style={styles.reviewerComment}>{review.comment}</Text>
              </View>
            </View>
          ))}
          <TouchableButton
            title="View All Reviews"
            onPress={() => {navigation.navigate('ReviewScreen')}}
            style={{width: '100%', height: 40, borderRadius: 10}}
            TextStyle={{fontWeight: 300, fontSize: 16, fontFamily: 'Nunito'}}
          />
        </View>
        <MostPopular />
        <JustForYou title="You Might Like" navigation={navigation} />
      </ScrollView>
      <View></View>
      {isVisible && (
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={7}
          // reducedTransparencyFallbackColor="rgba(36, 110, 73, 0.57)"
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    flexDirection: 'row',
    backgroundColor: '#F8FAFF',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalImage: {
    height: 75,
    width: 75,
    borderRadius: 5,
  },
  modalHeaderContent: {
    gap: 5,
    marginLeft: 10,
    justifyContent: 'flex-end',
  },
  modalVariationContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  modalVariationText: {
    width: 75,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Raleway',
    backgroundColor: '#E5EBFC',
    padding: 6,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  colorOptionsContainer: {
    marginLeft: 10,
  },
  colorOptionsTitle: {
    marginLeft: 10,
    fontFamily: 'Raleway',
    fontSize: 17,
    fontWeight: '700',
    marginVertical: 10,
  },
  colorOptionItem: {
    alignItems: 'center',
  },
  colorOptionImage: {
    height: 80,
    width: 80,
    borderRadius: 5,
    margin: 5,
  },
  checkforSelectedColor: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  sizeContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  sizeTitle: {
    fontFamily: 'Raleway700',
    fontSize: 17,
    fontWeight: '700',
  },
  sizeOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    gap: 5,
  },
  sizeOption: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    borderRadius: 5,
    height: 35,
    flex: 1,
    borderWidth: 1,
  },
  sizeOptionText: {
    fontFamily: 'Raleway500',
    fontSize: 14,
  },
  quantityContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityTitle: {
    fontFamily: 'Raleway',
    fontSize: 17,
    fontWeight: '700',
  },
  quantityControls: {
    gap: 10,
    flexDirection: 'row',
  },
  quantityButton: {
    borderRadius: 25,
  },
  quantityDisplay: {
    backgroundColor: '#E5EBFC',
    height: 50,
    width: 75,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 29,
    fontFamily: 'Raleway',
    fontWeight: '500',
  },
  bottomActions: {
    margin: 20,
    width: '100%',
    flexDirection: 'row',
  },
  heartButtonContainer: {
    width: windowWidth * 0.2 - 20,
    justifyContent: 'center',
  },
  heartButton: {
    height: 45,
    width: 50,
    borderRadius: 15,
    backgroundColor: COLORS.inputBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtons: {
    width: windowWidth * 0.8 - 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '49%',
    height: 50,
  },
  sliderItem: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderImage: {
    width: '100%',
    height: 450,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#0042E033',
    borderRadius: 5,
    margin: 5,
  },
  activeDot: {
    backgroundColor: COLORS.primaryButton,
    width: 30,
  },
  details: {
    padding: 20,
  },
  price: {
    fontSize: 26,
    fontWeight: 800,
    fontFamily: 'Raleway',
    // marginBottom: 10,
  },
  description: {
    fontSize: 15,
    fontWeight: 400,
    color: '000',
    marginBottom: 20,
    fontFamily: 'Nunito',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 800,
    fontFamily: 'Raleway',
  },
  variationsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  variation: {
    paddingHorizontal: 15,
    paddingVertical: 3,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: 10,
  },
  variationText: {
    fontSize: 14,
    fontWeight: 500,
    fontFamily: 'Raleway',
  },
  arrowButton: {
    marginLeft: 'auto',
  },
  arrow: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  thumbnailWrapper: {
    marginRight: 10,
  },
  thumbnail: {
    width: 75,
    height: 75,
    borderRadius: 5,
  },
  spec: {
    fontSize: 17,
    fontWeight: 700,
    fontFamily: 'Raleway',
    marginVertical: 5,
    marginBottom: 10,
  },
  materialContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  material: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#FFEBEB',
    borderRadius: 5,
    marginRight: 10,
  },
  materialText: {
    fontSize: 14,
    fontWeight: 500,
    fontFamily: 'Raleway',
    color: '#000',
  },
  origin: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#E5EBFC',
    borderRadius: 5,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
  },
  sizeGuide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  sizeGuideText: {
    fontSize: 17,
    fontWeight: 700,
    color: '##202020',
    fontFamily: 'Raleway',
  },
  deliveryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: COLORS.primaryButton,
    height: 40,
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  deliveryText1: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Raleway',
    fontWeight: 500,
  },
  deliveryText2: {
    fontSize: 13,
    color: COLORS.primaryButton,
    fontFamily: 'Raleway',
    fontWeight: 500,
  },
  deliveryText3: {
    fontSize: 16,
    color: '#000',
    fontWeight: 700,
    fontFamily: 'Raleway',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  ratingStars: {
    fontSize: 20,
    color: '#FFD700',
    marginRight: 10,
  },
  ratingOverall: {
    backgroundColor: '#DFE9FF',
    fontSize: 14,
    color: '#000',
    fontWeight: 700,
    fontFamily: 'Raleway',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  review: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
  },
  reviewerImage: {
    marginTop: 10,
    marginLeft: 10,
    width: 44,
    height: 44,
    borderRadius: 20,
    marginRight: 10,
    borderColor: 'white',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Raleway',
    lineHeight: 20,
    marginBottom: 5,
  },
  reviewerComment: {
    fontSize: 12,
    color: '#000',
    fontWeight: 400,
    fontFamily: 'Nunito',
    lineHeight: 18,
    marginTop: 10,
  },
  viewAllButton: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
  },
  viewAllText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // padding: 20,
    marginTop: windowHeight < 800 ? windowHeight * 0.2 : windowHeight * 0.33,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});

export default ProductFull;
