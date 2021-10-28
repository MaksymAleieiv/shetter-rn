import React, { useMemo } from 'react';
import { View, StyleSheet,  } from 'react-native';
import { AssetsSelector } from 'expo-images-picker';
import { Ionicons } from '@expo/vector-icons';
import { MediaType } from 'expo-media-library';
import SelectImagesScreenHeader from './SelectImagesScreenHeader'

export default function SelectImagesScreen({route, navigation}) {

  const onSuccess = (data) => {
    if(route.params?.single) route.params?.setImages(data[0])
    else route.params?.setImages(p => p.concat(data))
    navigation.goBack()
  };

  const widgetErrors = useMemo(
    () => ({
      errorTextColor: '#242426',
      errorMessages: {
        hasErrorWithPermissions: 'Please Allow media gallery permissions.',
        hasErrorWithLoading: 'There was error while loading images.',
        hasErrorWithResizing: 'There was error while loading images.',
        hasNoAssets: 'No images found.',
      },
    }),
    []
  );

  const widgetSettings = useMemo(
    () => ({
      getImageMetaData: false, // true might perform slower results
      initialLoad: 50,
      assetsType: [MediaType.photo],
      minSelection: 1,
      maxSelection: route.params?.maxSelection || 6,
      portraitCols: 4,
      landscapeCols: 4,
    }),
    []
  );

  const widgetStyles = useMemo(
    () => ({
      margin: 2,
      bgColor: 'white',
      spinnerColor: 'blue',
      widgetWidth: 99,
      videoIcon: {
        Component: Ionicons,
        iconName: 'ios-videocam',
        color: 'tomato',
        size: 20,
      },
      selectedIcon: {
        Component: Ionicons,
        iconName: 'ios-checkmark-circle-outline',
        color: 'white',
        bg: '#0eb14970',
        size: 26,
      },
    }),
    []
  );

  return (
        <View style={styles.container}>
          <AssetsSelector
            Settings={widgetSettings}
            Errors={widgetErrors}
            Styles={widgetStyles}
            CustomNavigator={{
              Component : SelectImagesScreenHeader,
              props : {
                onSuccess : (data) => onSuccess(data),
                maxSelection : route.params?.maxSelection || 6
              }
            }}
          />
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
