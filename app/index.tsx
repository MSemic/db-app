import { SQLiteProvider } from 'expo-sqlite';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import { Suspense, useEffect, useState } from 'react';
import Home from './home';

export default function HomeScreen() {
  const loadDb = async () => {
    const dbName = 'qr_data.db';
    const dbAsset = require('../assets/qr_data.db');
    const dbUri = Asset.fromModule(dbAsset).uri;
    const dbPath = `${FileSystem.documentDirectory}SQLite/${dbName}`;

    const dbFileInfo = await FileSystem.getInfoAsync(dbPath);

    if (!dbFileInfo.exists) {
      await FileSystem.makeDirectoryAsync(
        `${FileSystem.documentDirectory}SQLite`,
        { intermediates: true }
      );
      await FileSystem.downloadAsync(dbUri, dbPath);
    }

    return dbPath;
  };

  const [dbLoaded, setDbLoaded] = useState<boolean>(false);

  useEffect(() => {
    loadDb()
      .then(() => {
        setDbLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!dbLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Suspense>
        <SQLiteProvider
          useSuspense
          databaseName="qr_data.sqlite"
          assetSource={{ assetId: require('../assets/qr_data.db') }}
        >
          <Home />
        </SQLiteProvider>
      </Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
