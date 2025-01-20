import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, StatusBar} from 'react-native';
import {windowHeight, windowWidth} from '../../style/commonStyle';
import {SafeAreaView} from 'react-native-safe-area-context';
import typography from '../../style/typography';
import STAR from '../../logo/STAR.svg';
import STAR2 from '../../logo/STAR2.svg';
import PhotoFrame from '../../component/PhotoFrame';

const ReviewScreen: React.FC = () => {
  const reviews = [
    {
      id: 1,
      reviewerName: 'Veronika',
      rating: 5,
      comment:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
      reviewerImage: require('../../assets/image/FS1.png'),
    },
    {
      id: 2,
      reviewerName: 'Veronika',
      rating: 2,
      comment:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
      reviewerImage: require('../../assets/image/FS1.png'),
    },
    {
      id: 3,
      reviewerName: 'Veronika',
      rating: 4,
      comment:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
      reviewerImage: require('../../assets/image/FS1.png'),
    },
    {
      id: 4,
      reviewerName: 'Veronika',
      rating: 5,
      comment:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
      reviewerImage: require('../../assets/image/FS1.png'),
    },
    {
      id: 5,
      reviewerName: 'Veronika',
      rating: 4,
      comment:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
      reviewerImage: require('../../assets/image/FS1.png'),
    },
    {
      id: 6,
      reviewerName: 'Veronika',
      rating: 3,
      comment:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
      reviewerImage: require('../../assets/image/FS1.png'),
    },
    {
      id: 7,
      reviewerName: 'Veronika',
      rating: 2,
      comment:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
      reviewerImage: require('../../assets/image/FS1.png'),
    },
  ];
  const renderReview = (review: any) => (
    <View style={styles.review}>
      <View style={{width: '15%', alignItems: 'center', paddingTop: 5}}>
        {/* <Image source={review.reviewerImage} style={styles.reviewerImage} />
         */}
        <PhotoFrame url={review.reviewerImage} size={40} />
      </View>
      <View
        style={{
          width: '85%',
          padding: 10,
          borderRadius: 10,
        }}>
        <Text style={styles.reviewerName}>{review.reviewerName}</Text>
        <View style={{flexDirection: 'row', gap: 3}}>
          {Array(review.rating)
            .fill(null)
            .map((_, index) => (
              <STAR key={index} height={15} width={15} />
            ))}
          {Array(5 - review.rating)
            .fill(null)
            .map((_, index) => (
              <STAR2 key={index} height={15} width={15} />
            ))}
        </View>
        <Text style={styles.reviewerComment}>{review.comment}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Reviews</Text>
      </View>
      <FlatList
        data={reviews}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => renderReview(item)}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    width: windowWidth,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  text: {
    ...typography.RaleWay700,
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: -0.28,
  },
  review: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 5,
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
  },
  reviewerName: {
    fontSize: 16,
    ...typography.RaleWay600,
    lineHeight: 20,
    marginBottom: 5,
  },
  reviewerComment: {
    fontSize: 12,
    color: '#000',
    ...typography.Nunito400,
    lineHeight: 18,
    marginTop: 10,
  },
  ratingStars: {
    fontSize: 20,
    color: '#FFD700',
    marginRight: 10,
  },
});

export default ReviewScreen;
