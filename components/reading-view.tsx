import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Chapter } from "@/types";
import { page_data } from "@/constants/page_data";
import { line_data } from "@/constants/line_data";

type ChapterListProps = {
  chapters: Chapter[];
};

export default function ReadingView({ chapters }: ChapterListProps) {
  const arr: string[][] = [];

  // line_data.map((p, index) => {
  //   return arr.push(p.verse.map((word) => word.uthmani));
  // });

  page_data.map((p, index) => {
    return arr.push(p.w.map((word) => word.uthmani));
  });

  return (
    <View
      style={[
        styles.container,
        {
          padding: 8,
        },
      ]}
    >
      {/* <Text style={[styles.text, { borderWidth: 1, borderColor: "purple" }]}>
        {arr}
      </Text> */}

      {line_data.map((p, index) => {
        console.log(p.verse.map((word) => word.uthmani));

        return (
          <View style={{ flexWrap: "wrap", flexDirection: "row" }} key={index}>
            {p.verse.map((word, i) => (
              <Text
                key={i}
                style={[
                  styles.text,
                  {
                    borderWidth: 1,
                    borderColor: "purple",
                    marginHorizontal: 2,
                  },
                ]}
              >
                {word.uthmani + " "}
              </Text>
            ))}
          </View>
        );
      })}
    </View>
  );

  //   {words.map((word: { text_uthmani: string }, wordIndex) => (
  //     <QuranText key={`page${page}-line${lineNumber}-word${wordIndex}`} text={word.text_uthmani} />
  // ))}
  //   console.log(page_data[0].w[0].uthmani);
}

const styles = StyleSheet.create({
  // Used to center surah in the first 2 pages of the mushaf
  page1: {
    flex: 1,
    flexGrow: 3,
  },

  container: {
    width: "100%",
    direction: "rtl",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "stretch",

    // justifyContent: 'center',
  },
  text: {
    color: "#000E11",
    fontSize: 28,
    fontFamily: "hafs",
    fontWeight: "400",
    textAlign: "left",
    // textAlign: 'right',
    // textAlign: 'center',
    // lineHeight: 49,
  },
});
