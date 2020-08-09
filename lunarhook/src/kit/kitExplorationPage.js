

import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, Clipboard, Alert, Linking, NativeModules, Platform } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Grid, Accordion, WhiteSpace, Tabs, List } from '@ant-design/react-native';
import RouteConfig from '../config/RouteConfig';
import ScreenConfig from '../config/ScreenConfig';
import { StyleConfig, FontStyleConfig } from '../config/StyleConfig';
var w = ScreenConfig.__screenW()
var H = ScreenConfig.__screenH()
var coln = 3
if (w > 320 && Platform.OS === 'ios') {
  coln = 4
}
var kitlist = new Array();
const data = [
  { icon: RouteConfig['SixrandomNewPage'].icon, text: RouteConfig['SixrandomNewPage'].name, url: RouteConfig['SixrandomNewPage'].route },
  { icon: RouteConfig['EightrandomNewPage'].icon, text: RouteConfig['EightrandomNewPage'].name, url: RouteConfig['EightrandomNewPage'].route },
  { icon: RouteConfig['NumberMainPage'].icon, text: RouteConfig['NumberMainPage'].name, url: RouteConfig['NumberMainPage'].route },
  { icon: RouteConfig['SixCourseNewPage'].icon, text: RouteConfig['SixCourseNewPage'].name, url: RouteConfig['SixCourseNewPage'].route },
  { icon: RouteConfig['qimenNewPage'].icon, text: RouteConfig['qimenNewPage'].name, url: RouteConfig['qimenNewPage'].route },
  { icon: RouteConfig['taiyiNewPage'].icon, text: RouteConfig['taiyiNewPage'].name, url: RouteConfig['taiyiNewPage'].route },
  { icon: RouteConfig['ziweiNewPage'].icon, text: RouteConfig['ziweiNewPage'].name, url: RouteConfig['ziweiNewPage'].route },
  { icon: RouteConfig['TrackStarPage'].icon, text: RouteConfig['TrackStarPage'].name, url: RouteConfig['TrackStarPage'].route },
]
const Tarot = [
  { icon: RouteConfig['TarotPage'].icon, text: RouteConfig['TarotPage'].name, url: RouteConfig['TarotPage'].route },
  { icon: RouteConfig['TarotVenusPage'].icon, text: RouteConfig['TarotVenusPage'].name, url: RouteConfig['TarotVenusPage'].route },
  { icon: RouteConfig['TarotStarofDavidPage'].icon, text: RouteConfig['TarotStarofDavidPage'].name, url: RouteConfig['TarotStarofDavidPage'].route },
  { icon: RouteConfig['TarotCeltsPage'].icon, text: RouteConfig['TarotCeltsPage'].name, url: RouteConfig['TarotCeltsPage'].route },
]
const data1 = [
  { icon: RouteConfig['ChangesuniversePage'].icon, text: RouteConfig['ChangesuniversePage'].name, url: RouteConfig['ChangesuniversePage'].route },
  { icon: RouteConfig['GamblePage'].icon, text: RouteConfig['GamblePage'].name, url: RouteConfig['GamblePage'].route },
  { icon: RouteConfig['StarInfoPage'].icon, text: RouteConfig['StarInfoPage'].name, url: RouteConfig['StarInfoPage'].route },
]
const consultants = [
  { icon: RouteConfig['malecall'].icon, text: "刘老师", url: "tel:18911832827" },
  { icon: RouteConfig['femalecall'].icon, text: "郑老师", url: "tel:13391909968" },
  { icon: RouteConfig['femalecall'].icon, text: "菅老师", url: "tel:15330231513" },
  { icon: RouteConfig['business'].icon, text: "郑女士（商务）", url: "tel:13391909968" },
  { icon: RouteConfig['business'].icon, text: "菅女士（商务）", url: "tel:15330231513" },
  { icon: RouteConfig['email'].icon, text: RouteConfig['email'].name, url: "mailto:1140669231@qq.com" },
  { icon: RouteConfig['wechat'].icon, text: RouteConfig['wechat'].name, url: "wechat" },
  { icon: RouteConfig['qrcode'].icon, text: RouteConfig['qrcode'].name, url: "openqrcode" },
]
kitlist["tools"] = [
  { icon: RouteConfig['NamePage'].icon, text: RouteConfig['NamePage'].name, url: RouteConfig['NamePage'].route },
  { icon: RouteConfig['NameModule'].icon, text: RouteConfig['NameModule'].name, url: RouteConfig['NameModule'].route },
  { icon: RouteConfig['NumberMotionNewPage'].icon, text: RouteConfig['NumberMotionNewPage'].name, url: RouteConfig['NumberMotionNewPage'].route },
  { icon: RouteConfig['SloganShare'].icon, text: RouteConfig['SloganShare'].name, url: RouteConfig['SloganShare'].route },
  { icon: RouteConfig['MORALSModule'].icon, text: RouteConfig['MORALSModule'].name, url: RouteConfig['MORALSModule'].route },

]
const data2 = [
  { icon: RouteConfig['MBTIModule'].icon, text: RouteConfig['MBTIModule'].name, url: RouteConfig['MBTIModule'].route },
  { icon: RouteConfig['EnneagramModule'].icon, text: RouteConfig['EnneagramModule'].name, url: RouteConfig['EnneagramModule'].route },
  { icon: RouteConfig['HollandModule'].icon, text: RouteConfig['HollandModule'].name, url: RouteConfig['HollandModule'].route },
  { icon: RouteConfig['BIGFIVEModule'].icon, text: RouteConfig['BIGFIVEModule'].name, url: RouteConfig['BIGFIVEModule'].route },
  { icon: RouteConfig['DISCModule'].icon, text: RouteConfig['DISCModule'].name, url: RouteConfig['DISCModule'].route },
  { icon: RouteConfig['AMSModule'].icon, text: RouteConfig['AMSModule'].name, url: RouteConfig['AMSModule'].route },
  { icon: RouteConfig['SADModule'].icon, text: RouteConfig['SADModule'].name, url: RouteConfig['SADModule'].route },
  { icon: RouteConfig['EPQModule'].icon, text: RouteConfig['EPQModule'].name, url: RouteConfig['EPQModule'].route },
  { icon: RouteConfig['PDPModule'].icon, text: RouteConfig['PDPModule'].name, url: RouteConfig['PDPModule'].route },
]
const datadepress = [
  { icon: RouteConfig['SCL90Module'].icon, text: RouteConfig['SCL90Module'].name, url: RouteConfig['SCL90Module'].route },
  { icon: RouteConfig['SDSModule'].icon, text: RouteConfig['SDSModule'].name, url: RouteConfig['SDSModule'].route },
  { icon: RouteConfig['SASModule'].icon, text: RouteConfig['SASModule'].name, url: RouteConfig['SASModule'].route },
  { icon: RouteConfig['SESModule'].icon, text: RouteConfig['SESModule'].name, url: RouteConfig['SESModule'].route },
  { icon: RouteConfig['PLCCModule'].icon, text: RouteConfig['PLCCModule'].name, url: RouteConfig['PLCCModule'].route },
  { icon: RouteConfig['IASModule'].icon, text: RouteConfig['IASModule'].name, url: RouteConfig['IASModule'].route },
  { icon: RouteConfig['PANASModule'].icon, text: RouteConfig['PANASModule'].name, url: RouteConfig['PANASModule'].route },
]
const relation = [
  { icon: RouteConfig['LASModule'].icon, text: RouteConfig['LASModule'].name, url: RouteConfig['LASModule'].route },
  { icon: RouteConfig['OlsonModule'].icon, text: RouteConfig['OlsonModule'].name, url: RouteConfig['OlsonModule'].route },
  { icon: RouteConfig['FESModule'].icon, text: RouteConfig['FESModule'].name, url: RouteConfig['FESModule'].route },
  { icon: RouteConfig['ECRModule'].icon, text: RouteConfig['ECRModule'].name, url: RouteConfig['ECRModule'].route },
  { icon: RouteConfig['ITSModule'].icon, text: RouteConfig['ITSModule'].name, url: RouteConfig['ITSModule'].route },
  { icon: RouteConfig['FADModule'].icon, text: RouteConfig['FADModule'].name, url: RouteConfig['FADModule'].route },
  { icon: RouteConfig['EMBUFemaleModule'].icon, text: RouteConfig['EMBUFemaleModule'].name, url: RouteConfig['EMBUFemaleModule'].route },
  { icon: RouteConfig['EMBUMaleModule'].icon, text: RouteConfig['EMBUMaleModule'].name, url: RouteConfig['EMBUMaleModule'].route },
]
const child = [
  { icon: RouteConfig['CARSModule'].icon, text: RouteConfig['CARSModule'].name, url: RouteConfig['CARSModule'].route },
  { icon: RouteConfig['GATBModule'].icon, text: RouteConfig['GATBModule'].name, url: RouteConfig['GATBModule'].route },
  { icon: RouteConfig['PROFModule'].icon, text: RouteConfig['PROFModule'].name, url: RouteConfig['PROFModule'].route },
  { icon: RouteConfig['MHTModule'].icon, text: RouteConfig['MHTModule'].name, url: RouteConfig['MHTModule'].route },
  { icon: RouteConfig['MHRSPModule'].icon, text: RouteConfig['MHRSPModule'].name, url: RouteConfig['MHRSPModule'].route },
]

let kitExplorationPageController = null
class kitExplorationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Channel: ""
    };
    kitExplorationPageController = this
  };

  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      title: RouteConfig["kitExplorationPage"].titlename,
    }
  };
  componentDidMount() {
    var NativePlumber = NativeModules.NativePlumber;
    NativePlumber.PlumberGetChannel((error, events) => {
      console.log('error', error);
      console.log('events', events);
      this.setState({ Channel: events })
      this.render()
    })
  }
  keyExtractor = (item, index) => item.id
  onBussion(el, navigate) {
    if ("service" == el) {
      var url = "mqqapi://card/show_pslcard?src_type=internal&version=1&uin=" + 775931827 + "&card_type=group&source=external"
      Linking.canOpenURL(url).then(supported => {
        if (supported) {
          Linking.openURL(url);
        }
        else {
          Alert.alert('需要安装QQ', '', [
            { text: '取消', onPress: () => { } }
          ])
        }
      });
    }
    /*
    else if ("wechat" == el.url) {
      Alert.alert('请关注公众号\n大道易德\n', '', [
        //{text: '打开微信', onPress: () =>{}},
        { text: '复制名称并打开微信', onPress: () => { Clipboard.setString("北京大道易德文化传媒有限公司"), WechatShare.openWechat() } },
        { text: '取消', onPress: () => { } }
      ])
    }
    */
    else if ("openqrcode" == el.url) {
      this.setState({ shareimage: true == this.state.shareimage ? false : true })
    }
    else if (-1 != el.url.indexOf("mailto")) {
      Alert.alert('1140669231@qq.com\n联系' + el.text + '\n', '', [
        //{text: '打开微信', onPress: () =>{}},
        { text: '复制', onPress: () => { Clipboard.setString("1140669231@qq.com") } },
        { text: '确定', onPress: () => Linking.openURL(el.url) },
        { text: '取消', onPress: () => { } }
      ])
    }
    else {
      Alert.alert('联系' + el.text + '\n', '', [
        { text: '确定', onPress: () => Linking.openURL(el.url) },
        { text: '取消', onPress: () => { } }
      ])
    }
  }
  onPress(el, navigate) {
    var datahistory = this.state.datahistory
    while (datahistory.length > 5) {
      datahistory.pop()
    }
    datahistory.reverse()
    datahistory.push({ icon: el.icon, text: el.text, url: el.url })
    datahistory.reverse()
    tabs = this.state.tabs
    if (datahistory.length > 0) {
      if (tabs[1].title === "关注") { } else { tabs.splice(1, 0, { title: '关注' }) }

    }
    this.setState({ datahistory: datahistory, tabs: tabs })
    this.props.navigation.setParams({ text: "refresh" })
    navigate(el.url)
  }
  renderItemel(el, index) {
    return (<View style={{ alignItems: "center", flex: 1, justifyContent: 'center', }}>
      {el.icon}
      <Text style={{ textAlign: "center", fontSize: FontStyleConfig.getFontApplySize() + 14 }}>{el.text}</Text>
    </View>)
  }
  render() {
    /*
    if ("" == this.state.Channel) {
      return (<View></View>)
    }
    */
    const { navigate } = this.props.navigation;
    return (
      <View style={Styles.container}>
        <View>

        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        </View>

          <TabNavigator style={{ height: ScreenConfig.getTabBarHeight() }} tabBarStyle={{ height: ScreenConfig.getTabBarHeight(), backgroundColor: '#ffffff', }}>
            {function () {
              if (Platform.OS === 'android' || Platform.OS === 'ios') {
                return (<TabNavigator.Item
                  title={RouteConfig["service"].name}
                  renderIcon={() => RouteConfig["service"].icon}
                  //renderSelectedIcon={() => IconConfig.IconDvinationSel}
                  onPress={() => kitExplorationPageController.onBussion("service", navigate)}
                  titleStyle={StyleConfig.menufont}>
                </TabNavigator.Item>)
              }
            }()
            }
          </TabNavigator >
      </View>)
  }
};
var Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',

  },
});
module.exports = kitExplorationPage;  