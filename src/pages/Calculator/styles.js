import { StyleSheet } from 'react-native';

const styles = {
  container: {
    alignSelf: 'stretch',
    flex: 1,
  },
  problemAnswerRow: {
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderColor: '#d9d9de',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  problemRow: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.54)',
  },
  answerRow: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 30,
  },
  row: {
    textAlign: 'right',
    padding: 10,
  },

  numPad: {
    flex: 1,
    flexDirection: 'column',
  },

  numRow: {
    flex: 1,
    flexDirection: 'row',
    borderStyle: 'solid',
    borderBottomColor: '#d9d9de',
    borderBottomWidth: 1,

  },

  numSquare: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderRightColor: '#d9d9de',
    borderRightWidth: 1,
  },

  numText: {
    fontSize: 25,
    fontWeight: '200',
    color: 'rgba(0, 0, 0, 0.87)',
  },

  clrBtn: {
  },

  clrImg: {
    width: 30,
    height: 30,
  },

  enterBtn: {
    backgroundColor: '#B39DDB',
  },

}

export default StyleSheet.create(styles);
