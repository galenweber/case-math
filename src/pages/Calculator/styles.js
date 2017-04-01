import { StyleSheet } from 'react-native';

const styles = {
  container: {
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor: 'white',
  },
  problemAnswerRow: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: '#d9d9de',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  redBox: {
    backgroundColor: 'red',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 0,
    top: 0,
    flex: 1,
  },
  problemRow: {
    flex: 1,
    textAlign: 'right',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.54)',
    fontFamily: 'Montserrat-Light',
  },
  answerPlaceholder: {
    fontSize: 30,
    opacity: 0,
    fontFamily: 'Montserrat-Light',
  },

  answerRow: {
    flex: 1,
    textAlign: 'right',
    //color: 'rgba(0, 0, 0, 0.87)',
    color: '#00C853',
    fontWeight: '700',
    fontFamily: 'Montserrat-Medium',
    fontSize: 30,
  },
  row: {
    padding: 5,
    flexDirection: 'row',
  },
  streakLabel: {
    width: 50,
    textAlign: 'center',
    fontFamily: 'Montserrat-Light',
    alignSelf: 'flex-end',
  },
  streakValue: {
    width: 50,
    textAlign: 'center',
    fontFamily: 'Montserrat-Light',
    alignSelf: 'flex-start',
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
    //fontWeight: '200',
    fontFamily: 'Montserrat-Light',
    color: 'rgba(0, 0, 0, 0.87)',
  },

  clrBtn: {
  },

  clrImg: {
    width: 30,
    height: 30,
  },

  enterBtn: {
    backgroundColor: '#00C853',
  },

  viewAnimated: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },


  viewAnimatedRed: {
    backgroundColor: '#FF8A80',
  },

  viewAnimatedGold: {
    backgroundColor: '#FFE57F',
  },


}

export default StyleSheet.create(styles);
