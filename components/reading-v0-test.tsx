import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';

export default function QuranApp() {
  const [fontSize, setFontSize] = useState(20);

  const verses = [
    { text: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', number: 1 },
    { text: 'الرَّحْمَٰنِ الرَّحِيمِ', number: 2 },
    { text: 'مَالِكِ يَوْمِ الدِّينِ', number: 3 },
    { text: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', number: 4 },
    { text: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', number: 5 },
    {
      text: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
      number: 6,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.bismillah}>
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </Text>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.versesContainer}
      >
        {verses.map((verse, index) => (
          <View key={index} style={styles.verseContainer}>
            <Text style={[styles.verseText, { fontSize }]}>
              {verse.text}
              <Text style={styles.verseNumber}>﴿{verse.number}﴾</Text>
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Font Size: {fontSize}px</Text>
        <Slider
          style={styles.slider}
          minimumValue={12}
          maximumValue={40}
          step={1}
          value={fontSize}
          onValueChange={setFontSize}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  bismillah: {
    fontFamily: 'hafs',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
    color: '#1f2937',
  },
  scrollView: {
    flex: 1,
  },
  versesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    backgroundColor: 'red',
  },
  verseContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginBottom: 8,
    backgroundColor: 'purple',
  },
  verseText: {
    fontFamily: 'hafs',
    textAlign: 'right',
    lineHeight: 40,
    color: '#1f2937',
  },
  verseNumber: {
    fontSize: 12,
    color: '#92400e',
    textAlignVertical: 'top',
    marginLeft: 4,
  },
  sliderContainer: {
    marginTop: 16,
  },
  sliderLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#4b5563',
  },
  slider: {
    width: '100%',
    height: 40,
  },
});
