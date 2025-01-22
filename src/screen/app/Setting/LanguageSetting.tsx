import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Check from '../../../logo/Check.svg';
import typography from '../../../style/typography';

const LANGUAGES = [
  {id: 'en', label: 'English'},
  {id: 'fr', label: 'Français'},
  {id: 'ru', label: 'Русский'},
  {id: 'vi', label: 'Tiếng Việt'},
];

const LanguageSetting: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const renderItem = ({item}: {item: {id: string; label: string}}) => (
    <TouchableOpacity
    activeOpacity={1}
      style={[
        styles.languageOption,
        item.id === selectedLanguage && styles.selectedOption,
      ]}
      onPress={() => setSelectedLanguage(item.id)}>
      <Text style={styles.languageText}>{item.label}</Text>
      <View
        style={{
          height: 24,
          width: 24,
          backgroundColor: '#F8CECE',
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
            borderColor: 'white',
        }}>
        {item.id === selectedLanguage && <Check />}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 20}}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Language</Text>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <FlatList
          data={LANGUAGES}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    ...typography.RaleWay700,
    marginBottom: 7,
    // color: '#000',
  },
  subtitle: {
    fontSize: 16,
    ...typography.RaleWay500,
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  languageOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:40,
    paddingLeft: 20,
    paddingRight: 10,
    borderRadius: 9,
    backgroundColor: '#F9F9F9',
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#E5EBFC',
  },
  languageText: {
    fontSize: 16,
    ...typography.Nunito600,
  },
});

export default LanguageSetting;
