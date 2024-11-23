import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Chapter } from '@/types';

type ChapterListProps = {
  chapters: Chapter[];
};

export default function ChaptersList({ chapters }: ChapterListProps) {
  const arabicUnicodes =
    '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';

  return (
    <View style={[styles.container]}>
      {/* {chapters.map((chapter) => (
        <Text style={[styles.text]} key={chapter.aya}>
          {chapter.text}{' '}
          {String(chapter.aya).replace(/[0123456789]/g, (n) => {
            return arabicUnicodes[parseInt(n)];
          })}
        </Text>
      ))} */}

      <Text style={[styles.text, { textAlign: 'center' }]}>
        بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ
      </Text>

      <FlatList
        keyExtractor={(chapter) => chapter.aya}
        contentContainerStyle={styles.listContent}
        horizontal
        inverted={true}
        scrollEnabled={true}
        data={chapters}
        renderItem={({ item: chapter }) => (
          <Text style={[styles.text]}>
            {' '}
            {chapter.sura !== '1'
              ? String(chapter.text).replace(
                  'بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ',
                  ''
                )
              : chapter.text}{' '}
            {String(chapter.aya).replace(/[0123456789]/g, (n) => {
              return arabicUnicodes[parseInt(n)];
            })}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   // flexDirection: 'column',
  //   flexShrink: 1,
  //   width: '100%',
  //   // justifyContent: 'center',
  //   padding: 20,
  // },
  text: {
    color: '#000E11',
    fontSize: 28,
    fontFamily: 'hafs',
    fontWeight: '400',
    textAlign: 'right',
    // textAlign: 'center',
    lineHeight: 49,
  },

  container: {
    flexShrink: 1,
    margin: 5,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#fffffa',
  },

  listContent: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    // alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
});
