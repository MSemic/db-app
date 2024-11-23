import { Dimensions, StyleSheet, View, Text } from "react-native";
import { useEffect, useState } from "react";
import { useSQLiteContext } from "expo-sqlite/next";
import { Chapter } from "@/types";
import ChaptersList from "@/components/chapters-list";
import { Picker } from "@react-native-picker/picker";
import { chapters_data } from "@/constants/data_chapters";
import ReadingView from "@/components/reading-view";
import QuranApp from "@/components/reading-v0-test";

export default function Home() {
  const width = Dimensions.get("window").width;

  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [chapter, setChapter] = useState<String>("1");

  const db = useSQLiteContext();

  async function getData(chapter: string) {
    const result = await db.getAllAsync<Chapter>(
      `SELECT * FROM "quran_text" where sura = ?`,
      chapter as string
    );

    setChapters(result);
    // console.log(result);
  }

  useEffect(() => {
    db.withTransactionAsync(async () => {
      await getData(chapter as string);
    });
  }, [db]);

  return (
    <View style={styles.container}>
      {/* <ChaptersList chapters={chapters} /> */}
      <ReadingView chapters={chapters} />
      {/* <QuranApp /> */}

      <View style={[{ width: width }]}>
        <Picker
          selectedValue={chapter}
          onValueChange={(itemValue, itemIndex) => {
            setChapter(itemValue);
            getData(itemValue as string);
          }}
        >
          {chapters_data.map((c, i) => {
            return (
              <Picker.Item
                key={i}
                label={c.name_simple}
                value={c.id.toString()}
              />
            );
          })}

          {/* <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="114" value="114" /> */}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
