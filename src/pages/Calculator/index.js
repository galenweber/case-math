import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

export default class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = { answer: '\t' };
  }

  onPress(e) {
    console.log('event is ', e.timeStamp);
  }

  render() {

    const {
      leftOperand,
      rightOperand,
      operator,
    } = this.props.navigation.state.params;

    const {
      answer
    } = this.state;

    return (
      <View
        style={styles.container}
      >
        <View
          style={styles.problemAnswerRow}
        >
          <Text
            style={[
              styles.row,
              styles.problemRow
            ]}
          >{`${leftOperand()} ${operator} ${rightOperand()}`}</Text>
          <Text
            style={[
              styles.row,
              styles.answerRow
            ]}
          >{answer}</Text>
        </View>
        <View
          style={styles.numPad}
        >
          <View
            style={styles.numRow}
          >
            {[7,8,9].map(e => (
              <TouchableOpacity
                onPress={() => this.setState({ answer: answer + e})}
                style={styles.numSquare}
              >
                <Text style={styles.numText}>{e}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={styles.numRow}
          >
            <TouchableOpacity
              style={styles.numSquare}
            >
              <Text style={styles.numText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.numSquare}
            >
              <Text style={styles.numText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.numSquare}
            >
              <Text style={styles.numText}>6</Text>
            </TouchableOpacity>

          </View>
          <View
            style={styles.numRow}
          >
            <TouchableOpacity
              style={styles.numSquare}
            >
              <Text style={styles.numText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.numSquare}
            >
              <Text style={styles.numText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.numSquare}
            >
              <Text style={styles.numText}>3</Text>
            </TouchableOpacity>

          </View>
          <View
            style={styles.numRow}
          >
            <TouchableOpacity
              style={styles.numSquare}
            >
              <Text style={styles.numText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              underlayColor='#9C27B0'
              style={[
                styles.numSquare,
                styles.clrBtn,
              ]}
            >
              <Image
                source={require('./ic_backspace_black_24px.png')}
                style={styles.clrImg}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.numSquare,
                styles.enterBtn,
              ]}
            >
              <Image
                source={require('./ic_publish_white_3x.png')}
                style={styles.clrImg}
              />
            </TouchableOpacity>

          </View>

        </View>
      </View>
    )
  }
}

