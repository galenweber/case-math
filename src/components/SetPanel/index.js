import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

export default function SetPanel(props) {
  const { navigate } = props.navigation;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: props.color }
      ]}
      onPress={() => navigate('Calculator',props.set)}
    >
      <Text style={styles.title}>
        {props.name}
      </Text>
    </TouchableOpacity>
  )
}
