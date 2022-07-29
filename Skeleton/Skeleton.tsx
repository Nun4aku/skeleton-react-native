import { COLOR_GRAY } from 'native/styles';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  Linking,
  Animated
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Skeleton = ({
  width,
  height,
  style,
  backgroundColor,
  highlightColor,
  borderRadius
}) => {
  const translateX = useRef(new Animated.Value(-width * 3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        useNativeDriver: true,
        duration: 1300
      })
    ).start();
  }, [width]);

  return (
    <View
      style={StyleSheet.flatten([
        {
          width: width,
          height: height,
          backgroundColor: backgroundColor,
          overflow: 'hidden',
          borderRadius: borderRadius
        },
        style
      ])}
    >
      <Animated.View
        style={{
          width: '100%',
          height: '100%',
          transform: [{ translateX: translateX }]
        }}
      >
        <LinearGradient
          colors={['#fff0', highlightColor, '#fff0']}
          style={{ width: '300%', height: '100%' }}
          start={{ x: 1, y: 1 }}
        />
      </Animated.View>
    </View>
  );
};

export default Skeleton;

