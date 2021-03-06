/**atul15r
 * React Native Music Player
 * https://github.com/atul15r
 *7 Aug 2020
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import {EventRegister} from 'react-native-event-listeners';
import Menu from 'react-native-vector-icons/Feather';
import {withTheme} from 'styled-components/native';
import * as actions from '../redux/actions';
import {connect} from 'react-redux';

import Songs from '../components/Songs';
import Details from '../components/Details';
import {Banner} from 'react-native-paper';

function MainScreen(props) {
  const [info, setInfo] = React.useState(false);
  React.useEffect(() => {
    EventRegister.emit('shift', false);
  }, []);
  const {theme} = useSelector((state) => state.settings);
  const navigate = (path) => {
    setModalVisible(false);

    props.navigation.navigate(path);
  };

  const {header, bg, bg2, border} = props.theme;

  return (
    <View style={[styles.container, {backgroundColor: bg2}]}>
      <View
        style={[
          styles.header,
          {
            backgroundColor: header,
            borderColor: 'transparent',
            borderBottomColor: border,
            borderWidth: 0.5,
          },
        ]}>
        <TouchableOpacity
          onPress={() => props.navigation.openDrawer()}
          style={{
            width: '10%',

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Menu name="menu" size={27} color={bg} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            width: '80%',

            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setInfo(!info)}>
          <Text
            style={{
              width: '100%',
              textAlign: 'center',
              fontSize: 30,
              color: bg,
              fontFamily: 'Monoton',
            }}>
            vion
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: '10%',
            justifyContent: 'center',
            alignItems: 'center',
          }}></View>
      </View>

      <View
        style={{
          marginTop: 64,
          width: '100%',
          height: '100%',
        }}>
        <Banner
          visible={info}
          actions={[]}
          style={{
            borderColor: 'transparent',
            width: Dimensions.get('screen').width,
            backgroundColor: '#ecf1f7',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Details />
        </Banner>
        <Songs />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    top: 0,
    height: 64,
    borderWidth: 0.5,
    borderColor: 'transparent',
    borderBottomColor: '#ccc',
  },
  item: {
    height: 60,
    backgroundColor: '#fff',
    borderWidth: 0.7,
    borderColor: 'transparent',
    borderBottomColor: '#ecf1f7',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  cover: {
    width: 45,
    height: 45,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  left: {
    width: '20%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    width: '80%',
    height: 60,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default connect('', actions)(withTheme(React.memo(MainScreen)));
