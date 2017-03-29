import React from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';
import SetPanel from '../../components/SetPanel';
import sets from '../../services/sets';
import styles from './styles';

export default class Home extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {sets.map(e => <SetPanel
          name={e.name}
          navigation={navigation}
          set={e}
        />)}
        {/*<Button
          onPress={() => navigate('Calculator')}
          title="test"
        />*/}
      </View>
    )
  }
}

