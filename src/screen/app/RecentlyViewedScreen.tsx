import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import typography from '../../style/typography';
import OPENCAL from '../../logo/OPENCAL.svg';
import Check from '../../logo/Check.svg';
import DOWNARROW from '../../logo/DOWNARROW.svg';
import {Calendar} from 'react-native-calendars';
import {COLORS} from '../../consts/COLOR';
import {Platform} from 'react-native';
import {platform} from 'os';
import JustForYou from '../../component/JustForYou';

interface Item {
  id: string;
  title: string;
  price: string;
  image: string;
}

const items = [
  {
    id: '1',
    title: 'Lorem ipsum dolor sit amet',
    price: '$17.00',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    date: '2025-01-27',
  },
  {
    id: '2',
    title: 'Consectetur adipiscing elit',
    price: '$20.00',
    image: 'https://via.placeholder.com/150',
    date: '2025-01-26',
  },
  // Add more items as needed
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
import {NavigationProp} from '@react-navigation/native';

interface RecentlyViewedScreenProps {
  navigation: NavigationProp<any>;
}
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = months[date.getMonth()];
  const day = date.getDate();
  return `${month}, ${day}`;
};

const RecentlyViewedScreen: React.FC<RecentlyViewedScreenProps> = ({
  navigation,
}) => {
  const [selectedTab, setSelectedTab] = useState<string>('Today');
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date(new Date().setDate(new Date().getDate() - 1))
      .toISOString()
      .split('T')[0],
  );
  const [isCalendarVisible, setIsCalendarVisible] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[typography.PageTitle]}>Recently Viewed</Text>
      {!isCalendarVisible && (
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === 'Today' && styles.activeTab,
            ]}
            onPress={() => {
              setSelectedTab('Today');
              setSelectedDate(new Date().toISOString().split('T')[0]);
              setIsCalendarVisible(false);
            }}>
            <Text
              style={[
                styles.tabText,
                selectedTab === 'Today' && styles.activeTabText,
              ]}>
              Today
            </Text>
            {selectedTab === 'Today' && (
              <Check
                height={25}
                width={25}
                style={{position: 'absolute', right: 5}}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === 'Yesterday' && styles.activeTab,
            ]}
            onPress={() => {
              setSelectedTab('Yesterday');
              setSelectedDate(
                new Date(new Date().setDate(new Date().getDate() - 1))
                  .toISOString()
                  .split('T')[0],
              );
              setIsCalendarVisible(false);
            }}>
            <Text
              style={[
                styles.tabText,
                selectedTab === 'Yesterday' && styles.activeTabText,
              ]}>
              {selectedDate === new Date().toISOString().split('T')[0]
                ? 'Yesterday'
                : selectedDate ===
                  new Date(new Date().setDate(new Date().getDate() - 1))
                    .toISOString()
                    .split('T')[0]
                ? 'Yesterday'
                : formatDate(selectedDate)}
            </Text>
            {selectedTab === 'Yesterday' && (
              <Check
                height={25}
                width={25}
                style={{position: 'absolute', right: 5}}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsCalendarVisible(!isCalendarVisible)}>
            <OPENCAL />
          </TouchableOpacity>
        </View>
      )}
      {isCalendarVisible && (
        <Animated.View style={styles.calendarContainer}>
          <Calendar
            onDayPress={(day: {dateString: React.SetStateAction<string>}) => {
              setSelectedDate(day.dateString);
              setSelectedTab('Yesterday');
              setIsCalendarVisible(false);
            }}
            headerStyle={styles.headerstyle}
            renderHeader={(date: {getMonth: () => number}) => (
              <View style={styles.monthHeader}>
                <Text style={styles.monthText}>{months[date.getMonth()]}</Text>
              </View>
            )}
            hideExtraDays={true}
            renderArrow={(direction: 'left' | 'right') => (
              <View style={styles.calendarButton}>
                <DOWNARROW
                  style={{
                    transform: [
                      {rotate: direction === 'left' ? '270deg' : '90deg'},
                    ],
                  }}
                />
              </View>
            )}
            markedDates={{
              [selectedDate]: {
                selected: true,
              },
            }}
            markingType="custom"
            hideDayNames={true} // Hide the weekdays row
            dayComponent={({
              date,
              state,
            }: {
              date: {dateString: string; day: number};
              state: string;
            }) => {
              const isSelected = date.dateString === selectedDate;
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedDate(date.dateString);
                    setSelectedTab('Yesterday');
                    setIsCalendarVisible(false);
                  }}
                  style={[
                    styles.dayContainer,
                    isSelected && styles.selectedDay,
                  ]}>
                  <Text
                    style={[
                      styles.dayText,
                      state === 'disabled' && styles.disabledDayText,
                      isSelected && styles.selectedDayText,
                    ]}>
                    {date.day}
                  </Text>
                </TouchableOpacity>
              );
            }}
            theme={{
              backgroundColor: 'white',
              calendarBackground: 'white',
              todayTextColor: 'black',
              dayTextColor: 'black',
              textDisabledColor: 'gray',
              monthTextColor: '#004CFF',
              monthTextFontWeight: '500',
              textDayFontWeight: Platform.OS === 'ios' ? '700' : 'Raleway500',
              textDayFontFamily:
                Platform.OS === 'ios' ? 'raleway' : 'Raleway700',
              textMonthFontWeight: '500',
              textMonthFontFamily:
                Platform.OS === 'ios' ? 'raleway' : 'Raleway500',
              textDayFontSize: 16,
              textMonthFontSize: 18,
              textDayHeaderFontSize: 0,
            }}
            style={styles.calendar}
          />
          <TouchableOpacity
            onPress={() => setIsCalendarVisible(false)}
            style={styles.collapseButton}>
            <Text style={styles.collapseArrow}>
              <DOWNARROW />
            </Text>
          </TouchableOpacity>
        </Animated.View>
      )}
      <JustForYou title="" navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
  dayContainer: {
    width: 43, // Fixed width for each date
    height: 30, // Fixed height for each date
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9', // Default background color for dates
    borderRadius: 18, // Rounded corners to make it circular
    margin: -5,
  },
  headerstyle: {
    // backgroundColor: '#E5EBFC',
  },
  selectedDay: {
    backgroundColor: '#E5EBFC', // Selected date background color
  },
  dayText: {
    fontSize: 15,
    // fontWeight: '600',
    ...typography.RaleWay700,
    color: 'black', // Default text color
  },
  selectedDayText: {
    color: COLORS.primaryButton, // Selected date text color
  },
  disabledDayText: {
    color: 'gray', // Text color for disabled dates
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 20,
    gap: 10,
    marginTop: 10,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 34,
    borderRadius: 20,
    backgroundColor: '#F9F9F9',
  },
  monthHeader: {
    flexDirection: 'row',
    justifyContent: 'center', // Center align the month text
    alignItems: 'center',
    // marginBottom: 10, // Add spacing below the month
    backgroundColor: '#E5EBFC', // Background color for the header
    // paddingVertical: 5, // Padding
    paddingHorizontal: 50, // Padding
    height: 30,
    borderRadius: 15,
  },
  monthText: {
    fontSize: 15, // Font size for the month
    ...typography.RaleWay500, // Font weight for the month
    color: COLORS.primaryButton, // Font color for the month
  },
  activeTab: {
    backgroundColor: '#E5EBFC',
  },
  tabText: {
    fontSize: 15,
    ...typography.RaleWay500,
  },
  activeTabText: {
    color: '#004CFF',
    fontSize: 15,
    ...typography.RaleWay700,
  },
  calendarButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#E5EBFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarText: {
    color: '#333',
    fontSize: 16,
  },
  list: {
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 2,
  },
  itemImage: {
    width: 100,
    height: 100,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    color: '#666',
  },
  itemDetails: {
    flex: 1,
    padding: 8,
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
  },
  calendarContainer: {
    borderRadius: 20, // Rounded corners
    backgroundColor: 'white', // Calendar container background
    marginHorizontal: 16, // Space from edges
    marginTop: 8,
    // padding: , // Padding inside the container
    // Text color
    paddingBottom: 20,
    shadowColor: '#000', // Shadow color
    shadowOpacity: 0.1, // Shadow opacity
    shadowOffset: {width: 0, height: 4}, // Shadow offset
    shadowRadius: 6, // Shadow blur radius
    elevation: 4, // Android shadow\
    marginBottom: 20,
  },
  calendar: {
    borderRadius: 20, // Match container border radius
    overflow: 'hidden', // Clip content inside rounded corners
  },
  collapseButton: {
    alignItems: 'center',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: -15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 2,
  },
  collapseArrow: {},
});

export default RecentlyViewedScreen;
