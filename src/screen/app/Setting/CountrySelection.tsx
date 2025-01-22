import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import typography from '../../../style/typography';
import Check from '../../../logo/Check.svg';
import BottomBarView from '../../../component/BottomBarView';

type CountrySelectionRouteProp = RouteProp<
  {params: {setCountry: (country: string) => void; country: string}},
  'params'
>;

const countries = [
  {
    letter: 'A',
    data: [
      'Afghanistan',
      'Albania',
      'Algeria',
      'Andorra',
      'Angola',
      'Antigua and Barbuda',
      'Argentina',
      'Armenia',
      'Australia',
      'Austria',
      'Azerbaijan',
    ],
  },
  {
    letter: 'B',
    data: [
      'Bahamas',
      'Bahrain',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'Belgium',
      'Belize',
      'Benin',
      'Bhutan',
      'Bolivia',
      'Bosnia and Herzegovina',
      'Botswana',
      'Brazil',
      'Brunei',
      'Bulgaria',
      'Burkina Faso',
      'Burundi',
    ],
  },
  {
    letter: 'C',
    data: [
      'Cabo Verde',
      'Cambodia',
      'Cameroon',
      'Canada',
      'Central African Republic',
      'Chad',
      'Chile',
      'China',
      'Colombia',
      'Comoros',
      'Congo',
      'Costa Rica',
      'Croatia',
      'Cuba',
      'Cyprus',
      'Czech Republic',
    ],
  },
  {
    letter: 'D',
    data: ['Denmark', 'Djibouti', 'Dominica', 'Dominican Republic'],
  },
  {
    letter: 'E',
    data: [
      'Ecuador',
      'Egypt',
      'El Salvador',
      'Equatorial Guinea',
      'Eritrea',
      'Estonia',
      'Eswatini',
      'Ethiopia',
    ],
  },
  {letter: 'F', data: ['Fiji', 'Finland', 'France']},
  {
    letter: 'G',
    data: [
      'Gabon',
      'Gambia',
      'Georgia',
      'Germany',
      'Ghana',
      'Greece',
      'Grenada',
      'Guatemala',
      'Guinea',
      'Guinea-Bissau',
      'Guyana',
    ],
  },
  {letter: 'H', data: ['Haiti', 'Honduras', 'Hungary']},
  {
    letter: 'I',
    data: [
      'Iceland',
      'India',
      'Indonesia',
      'Iran',
      'Iraq',
      'Ireland',
      'Israel',
      'Italy',
    ],
  },
  {letter: 'J', data: ['Jamaica', 'Japan', 'Jordan']},
  {
    letter: 'K',
    data: [
      'Kazakhstan',
      'Kenya',
      'Kiribati',
      'Korea',
      'Kosovo',
      'Kuwait',
      'Kyrgyzstan',
    ],
  },
  {
    letter: 'L',
    data: [
      'Laos',
      'Latvia',
      'Lebanon',
      'Lesotho',
      'Liberia',
      'Libya',
      'Liechtenstein',
      'Lithuania',
      'Luxembourg',
    ],
  },
  {
    letter: 'M',
    data: [
      'Madagascar',
      'Malawi',
      'Malaysia',
      'Maldives',
      'Mali',
      'Malta',
      'Marshall Islands',
      'Mauritania',
      'Mauritius',
      'Mexico',
      'Micronesia',
      'Moldova',
      'Monaco',
      'Mongolia',
      'Montenegro',
      'Morocco',
      'Mozambique',
      'Myanmar',
    ],
  },
  {
    letter: 'N',
    data: [
      'Namibia',
      'Nauru',
      'Nepal',
      'Netherlands',
      'New Zealand',
      'Nicaragua',
      'Niger',
      'Nigeria',
      'North Macedonia',
      'Norway',
    ],
  },
  {letter: 'O', data: ['Oman']},
  {
    letter: 'P',
    data: [
      'Pakistan',
      'Palau',
      'Palestine',
      'Panama',
      'Papua New Guinea',
      'Paraguay',
      'Peru',
      'Philippines',
      'Poland',
      'Portugal',
    ],
  },
  {letter: 'Q', data: ['Qatar']},
  {letter: 'R', data: ['Romania', 'Russia', 'Rwanda']},
  {
    letter: 'S',
    data: [
      'Saint Kitts and Nevis',
      'Saint Lucia',
      'Saint Vincent and the Grenadines',
      'Samoa',
      'San Marino',
      'Sao Tome and Principe',
      'Saudi Arabia',
      'Senegal',
      'Serbia',
      'Seychelles',
      'Sierra Leone',
      'Singapore',
      'Slovakia',
      'Slovenia',
      'Solomon Islands',
      'Somalia',
      'South Africa',
      'South Korea',
      'South Sudan',
      'Spain',
      'Sri Lanka',
      'Sudan',
      'Suriname',
      'Sweden',
      'Switzerland',
      'Syria',
    ],
  },
  {
    letter: 'T',
    data: [
      'Tajikistan',
      'Tanzania',
      'Thailand',
      'Timor-Leste',
      'Togo',
      'Tonga',
      'Trinidad and Tobago',
      'Tunisia',
      'Turkey',
      'Turkmenistan',
      'Tuvalu',
    ],
  },
  {
    letter: 'U',
    data: [
      'Uganda',
      'Ukraine',
      'United Arab Emirates',
      'United Kingdom',
      'United States',
      'Uruguay',
      'Uzbekistan',
    ],
  },
  {letter: 'V', data: ['Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam']},
  {letter: 'Y', data: ['Yemen']},
  {letter: 'Z', data: ['Zambia', 'Zimbabwe']},
];

// Flatten data for FlatList
const flattenedData = countries.reduce(
  (acc, {letter, data}) => [
    ...acc,
    {type: 'header' as const, letter},
    ...data.map(country => ({type: 'country' as const, name: country})),
  ],
  [] as {type: 'header' | 'country'; letter?: string; name?: string}[],
);

const CountrySelection: React.FC = () => {
  const route = useRoute<CountrySelectionRouteProp>();
  const {setCountry, country} = route.params;
  const navigation = useNavigation();

  const renderItem = ({
    item,
  }: {
    item: {type: string; letter?: string; name?: string};
  }) => {
    if (item.type === 'header') {
      return (
        <View style={{marginHorizontal: 20, margin: 10, flexDirection: 'row'}}>
          <Text style={styles.header}>{item.letter}</Text>
        </View>
      );
    }
    return (
      <TouchableOpacity
        onPress={() => {
          setCountry(item.name!);
          navigation.goBack();
        }}>
        <Text style={styles.item}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 20}}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Country</Text>
      </View>
      <FlatList
        data={flattenedData}
        ListFooterComponent={<BottomBarView/>}
        ListHeaderComponent={
          country === 'Choose your country' ? (
            <Text style={styles.item}>Choose your country</Text>
          ) : (
            <View
              style={{
                marginHorizontal: 20,
                marginVertical: 10,
                height: 40,
                backgroundColor: '#E5EBFC',
                alignItems: 'center',
                borderRadius: 9,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 20,
                paddingRight: 10,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  ...typography.Nunito300,
                  color: '#0042E0',
                }}>
                {country}
              </Text>
              <View>
                <Check />
              </View>
            </View>
          )
        }
        keyExtractor={(item, index) =>
          `${item.type}-${
            item.type === 'header' ? item.letter : item.name
          }-${index}`
        }
        renderItem={renderItem}
        
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 16,
    ...typography.Nunito600,
    backgroundColor: '#F9F9F9',
    // lineHeight:22,
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  item: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    ...typography.RaleWay700,
    marginBottom: 7,
  },
  subtitle: {
    fontSize: 16,
    ...typography.RaleWay500,
    marginBottom: 20,
  },
});

export default CountrySelection;
