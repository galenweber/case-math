import React from 'react';
import {
  Animated,
  Easing,
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

    const operands = this.props.navigation.state.params.genOperands();

    this.state = {
      input: '\t',
      leftOperand: operands[0],
      rightOperand: operands[1],
      fadeRedAnim: new Animated.Value(0),
      fadeGoldAnim: new Animated.Value(0),
    };
  }

  submit() {
        console.log('submit runs');
    const {
      answer,
      genOperands,
    } = this.props.navigation.state.params;

    const {
      leftOperand,
      rightOperand,
      input,
    } = this.state;

    if (answer(leftOperand, rightOperand) === Number(input)) {
      Animated.sequence([
        Animated.timing(          // Uses easing functions
           this.state.fadeGoldAnim,    // The value to drive
          {
            toValue: 1,
            easing: Easing.cubic,
            duration: 150,
          }            // Configuration
        ),
        Animated.timing(          // Uses easing functions
           this.state.fadeGoldAnim,    // The value to drive
          {
            toValue: 0,
            easing: Easing.cubic,
            duration: 150,
          }            // Configuration
        )
      ]).start();
      const operands = genOperands();
      this.setState({
        input: '\t',
        leftOperand: operands[0],
        rightOperand: operands[1],
      });
    } else {
      Animated.sequence([
        Animated.timing(          // Uses easing functions
           this.state.fadeRedAnim,    // The value to drive
          {
            toValue: 1,
            easing: Easing.cubic,
            duration: 150,
          }            // Configuration
        ),
        Animated.timing(          // Uses easing functions
           this.state.fadeRedAnim,    // The value to drive
          {
            toValue: 0,
            easing: Easing.cubic,
            duration: 150,
          }            // Configuration
        )
      ]).start();
    }

  }

  render() {

    const {
      operator,
    } = this.props.navigation.state.params;

    const {
      input,
      leftOperand,
      rightOperand,
    } = this.state;

    return (
      <View
        style={[
          styles.container
        ]}
      >
        <View
          style={styles.problemAnswerRow}
        >
          <Animated.View
            style={[
              {opacity: this.state.fadeRedAnim},
              styles.viewAnimated,
              styles.viewAnimatedRed,
            ]}>
          </Animated.View>

          <Animated.View
            style={[
              {opacity: this.state.fadeGoldAnim},
              styles.viewAnimated,
              styles.viewAnimatedGold,
            ]}>
         </Animated.View>

         <View
           style={styles.row}
          >
            <Text
              style={styles.streakLabel}
            >Streak</Text>
            <Text
              style={[
                styles.problemRow
              ]}
            >
              {`${leftOperand} ${operator} ${rightOperand}`}
            </Text>
          </View>
         <View
           style={styles.row}
          >
            <Text
              style={styles.streakValue}
            >13</Text>
            <Text
              style={[
                styles.answerRow
              ]}
            >{input}</Text>
          </View>
        </View>
        <View
          style={styles.numPad}
        >
          <View
            style={styles.numRow}
          >
            {[7,8,9].map(e => (
              <TouchableOpacity
                onPress={() => this.setState({ input: input + e})}
                style={styles.numSquare}
              >
                <Text style={styles.numText}>{e}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={styles.numRow}
          >
            {[4,5,6].map(e => (
              <TouchableOpacity
                onPress={() => this.setState({ input: input + e})}
                style={styles.numSquare}
              >
                <Text style={styles.numText}>{e}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={styles.numRow}
          >
            {[1,2,3].map(e => (
              <TouchableOpacity
                onPress={() => this.setState({ input: input + e})}
                style={styles.numSquare}
              >
                <Text style={styles.numText}>{e}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={styles.numRow}
          >
            {[0].map(e => (
              <TouchableOpacity
                onPress={() => this.setState({ input: input + e})}
                style={styles.numSquare}
              >
                <Text style={styles.numText}>{e}</Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              onPress={() => this.setState({ input: input.slice(0,-1) })}
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
              onPress={this.submit.bind(this)}
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

