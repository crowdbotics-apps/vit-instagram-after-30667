import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_278_530}>
        <View style={styles.View_278_531}>
          <View style={styles.View_278_532}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58f9/fb04/d1daf6b0a1620b2db60f5622b1720aa7"
              }}
              style={styles.ImageBackground_278_533}
            />
            <View style={styles.View_278_534}>
              <View style={styles.View_278_535} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                }}
                style={styles.ImageBackground_278_536}
              />
            </View>
          </View>
          <View style={styles.View_278_537}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/392a/536f/10b102cc70c747b12ed54a76bd0fb5b3"
              }}
              style={styles.ImageBackground_278_538}
            />
          </View>
          <View style={styles.View_278_539}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c3b/6527/b0f5b093aacbdd8993b309c086540bbe"
              }}
              style={styles.ImageBackground_278_540}
            />
          </View>
        </View>
        <View style={styles.View_278_541}>
          <View style={styles.View_278_542}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00a0/a780/eb9cc07d5a70ff90b743522e4b015216"
              }}
              style={styles.ImageBackground_278_543}
            />
          </View>
          <View style={styles.View_278_544}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fe6/3262/ea715981a9a8b44dcc53495257afcc5c"
              }}
              style={styles.ImageBackground_278_545}
            />
          </View>
          <View style={styles.View_278_546}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edde/36ac/5dd9349d502ee2ca349afb0cc282c380"
              }}
              style={styles.ImageBackground_278_547}
            />
          </View>
        </View>
        <View style={styles.View_278_548}>
          <View style={styles.View_278_549}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94fb/5bf5/02bef3093d69233f62d093c98583f97e"
              }}
              style={styles.ImageBackground_278_550}
            />
          </View>
          <View style={styles.View_278_551}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f859/05f2/6d375b063975e2da4ce2dd6d89fea784"
              }}
              style={styles.ImageBackground_278_552}
            />
            <View style={styles.View_278_553}>
              <View style={styles.View_278_554} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                }}
                style={styles.ImageBackground_278_555}
              />
            </View>
          </View>
          <View style={styles.View_278_556}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fe3/bde0/77fe7e11fb4352a511259af12b6ec37f"
              }}
              style={styles.ImageBackground_278_557}
            />
          </View>
        </View>
        <View style={styles.View_278_558}>
          <View style={styles.View_278_559}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8468/7066/24fab43d1206360d5da10368e07a6574"
              }}
              style={styles.ImageBackground_278_560}
            />
            <View style={styles.View_278_561}>
              <View style={styles.View_278_562} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                }}
                style={styles.ImageBackground_278_563}
              />
            </View>
          </View>
          <View style={styles.View_278_564}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f75/4789/c7f894efe921f3140246312c9e8c4e05"
              }}
              style={styles.ImageBackground_278_565}
            />
          </View>
          <View style={styles.View_278_566}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64e6/027c/f71daefac8525a6c022cb6cd27f7af89"
              }}
              style={styles.ImageBackground_278_567}
            />
          </View>
        </View>
        <View style={styles.View_278_568}>
          <View style={styles.View_278_569}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91a2/c190/93140c329095d000b60dd11e3e9ea392"
              }}
              style={styles.ImageBackground_278_570}
            />
          </View>
          <View style={styles.View_278_571}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b31/d332/3fd349dc3bf09f19815f4996ccce5ab4"
              }}
              style={styles.ImageBackground_278_572}
            />
          </View>
          <View style={styles.View_278_573}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386c/fb78/9ff840f8389bfe3c5498a82a3ad5a3ef"
              }}
              style={styles.ImageBackground_278_574}
            />
            <View style={styles.View_278_575}>
              <View style={styles.View_278_576} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                }}
                style={styles.ImageBackground_278_577}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_278_578}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05b9/413e/3aa06023371a2724121fd2ffcf3d6cd3"
          }}
          style={styles.ImageBackground_278_579}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4094/b947/465fc9dffd3578b469db874e48603d73"
          }}
          style={styles.ImageBackground_278_580}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7082/63eb/84b7e74d5bb2a42c41a21fa42d913bd6"
          }}
          style={styles.ImageBackground_278_582}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f0/bcb4/ecf8c6e91d673a9b86770ebdd3a0c2df"
          }}
          style={styles.ImageBackground_278_588}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb8e/5a4e/f72aac15ba6f77df079d2a86287bf8d9"
          }}
          style={styles.ImageBackground_278_592}
        />
        <View style={styles.View_278_594}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/408f/0f54/95b65a7db60497214c2bdf1e7289e8ca"
            }}
            style={styles.ImageBackground_278_595}
          />
          <View style={styles.View_278_596}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cfe/0013/295987d46ad9fe8458041d478a18c9a0"
              }}
              style={styles.ImageBackground_278_597}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a46/6845/2d27784e7d115377306e1204ce0242a6"
              }}
              style={styles.ImageBackground_278_598}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_278_599}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e45/220b/881c97ce927b849d0ce6d3fbc32680cb"
          }}
          style={styles.ImageBackground_278_600}
        />
        <View style={styles.View_278_603}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/582f/cffd/e90cf50461a78b9ca0aeede46973e2b3"
            }}
            style={styles.ImageBackground_278_604}
          />
        </View>
      </View>
      <View style={styles.View_278_608}>
        <View style={styles.View_278_609}>
          <View style={styles.View_278_610} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_278_611}
          />
          <View style={styles.View_278_612} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ae/1e0b/4731e12bfefcb531c8633d285348e403"
          }}
          style={styles.ImageBackground_278_613}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_278_617}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b350/590a/12424c812875b64bdc194585840c74dc"
          }}
          style={styles.ImageBackground_278_622}
        />
      </View>
      <View style={styles.View_278_623} />
      <View style={styles.View_278_624}>
        <View style={styles.View_278_625}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79e3/c1aa/dde52f3ed4d35a98ef2e760067ac20e6"
            }}
            style={styles.ImageBackground_278_626}
          />
        </View>
        <View style={styles.View_278_634}>
          <View style={styles.View_278_635}>
            <Text style={styles.Text_278_635}>username</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/607e/9471/a1fb9afcb528c5e35a52d30bac18af2b"
            }}
            style={styles.ImageBackground_278_636}
          />
        </View>
        <View style={styles.View_279_578}>
          <View style={styles.View_279_579} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/339c/d14a/8f1a16b2e81c133c7bd2997aeaaf693d"
            }}
            style={styles.ImageBackground_279_580}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_278_530: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("84.97267759562843%"),
    minHeight: hp("84.97267759562843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.256830601092894%")
  },
  View_278_531: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.07047526041666%")
  },
  View_278_532: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_533: {
    width: wp("35.99740804036458%"),
    height: hp("27.481760744188655%"),
    top: hp("-5.2897802467554556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0144449869791667%"),
    resizeMode: "cover"
  },
  View_278_534: {
    width: wp("2.833656819661458%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.465926106770834%")
  },
  View_278_535: {
    width: wp("2.149674479166667%"),
    height: hp("1.0944021204130245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_536: {
    width: wp("2.1496765136718747%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.2984719198258148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6839803059895857%")
  },
  View_278_537: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.46666666666667%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_538: {
    width: wp("33.93777872721354%"),
    height: hp("24.0387129653347%"),
    top: hp("-7.13647727757855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.860741170247401%"),
    resizeMode: "cover"
  },
  View_278_539: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_540: {
    width: wp("36.765926106770834%"),
    height: hp("28.045166515913166%"),
    top: hp("-5.571475836748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.1681477864583343%"),
    resizeMode: "cover"
  },
  View_278_541: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.04606920252733%")
  },
  View_278_542: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.46666666666667%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_543: {
    width: wp("54.318888346354164%"),
    height: hp("20.78347127945697%"),
    top: hp("-1.9406177958504145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.544074503580731%"),
    resizeMode: "cover"
  },
  View_278_544: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_545: {
    width: wp("51.89037272135417%"),
    height: hp("17.60647883180712%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9.345186360677085%"),
    resizeMode: "cover"
  },
  View_278_546: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_547: {
    width: wp("49.73851725260416%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.240370686848962%"),
    resizeMode: "cover"
  },
  View_278_548: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.048778763234296%")
  },
  View_278_549: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_550: {
    width: wp("33.2%"),
    height: hp("25.35333268629397%"),
    top: hp("-7.574696358435801%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_551: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.46666666666667%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_552: {
    width: wp("53.98074137369792%"),
    height: hp("18.310738652130294%"),
    top: hp("-1.4085113025102487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.5948145548502595%"),
    resizeMode: "cover"
  },
  View_278_553: {
    width: wp("2.833656819661458%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.46592610677083%")
  },
  View_278_554: {
    width: wp("2.149674479166667%"),
    height: hp("1.0944021204130245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_555: {
    width: wp("2.1496765136718747%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.2984719198258148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6839803059895857%")
  },
  View_278_556: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_557: {
    width: wp("33.2%"),
    height: hp("25.35333268629397%"),
    top: hp("-4.069043769211071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_558: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.024406057889344%")
  },
  View_278_559: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_560: {
    width: wp("36.673701985677084%"),
    height: hp("28.029515834453978%"),
    top: hp("-11.127309330174178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.7522216796875%"),
    resizeMode: "cover"
  },
  View_278_561: {
    width: wp("2.833656819661458%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.465926106770834%")
  },
  View_278_562: {
    width: wp("2.149674479166667%"),
    height: hp("1.0944021204130245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_563: {
    width: wp("2.1496765136718747%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.2984719198258219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6839803059895857%")
  },
  View_278_564: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.46666666666667%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_565: {
    width: wp("32.86185302734375%"),
    height: hp("25.400280561603484%"),
    top: hp("-2.6292477800546443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15370381673177036%"),
    resizeMode: "cover"
  },
  View_278_566: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_567: {
    width: wp("48.41666666666667%"),
    height: hp("32.74022920535562%"),
    top: hp("-0.7511993574965814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.31814778645834%"),
    resizeMode: "cover"
  },
  View_278_568: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_569: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_570: {
    width: wp("35.567036946614586%"),
    height: hp("27.168757537675038%"),
    top: hp("-3.7560634925717196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.19888916015625%"),
    resizeMode: "cover"
  },
  View_278_571: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.46666666666667%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_572: {
    width: wp("33.78407389322916%"),
    height: hp("25.791537175413037%"),
    top: hp("-1.5650347933743127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.30740737915039773%"),
    resizeMode: "cover"
  },
  View_278_573: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_574: {
    width: wp("49.03148193359375%"),
    height: hp("37.43528772573002%"),
    top: hp("-9.139714475537907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.5659261067708385%"),
    resizeMode: "cover"
  },
  View_278_575: {
    width: wp("2.833660888671875%"),
    minWidth: wp("2.833660888671875%"),
    height: hp("1.3928673957866398%"),
    minHeight: hp("1.3928673957866398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.46591796874999%"),
    top: hp("0.9233651916837466%")
  },
  View_278_576: {
    width: wp("2.149674479166667%"),
    height: hp("1.0944022506964013%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_577: {
    width: wp("2.1496765136718747%"),
    height: hp("1.0944005570125057%"),
    top: hp("0.29847191982581833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6839843750000085%")
  },
  View_278_578: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.699453551912567%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101.22950819672131%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_278_579: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_580: {
    width: wp("5.854545593261719%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%")
  },
  ImageBackground_278_582: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.53333333333333%")
  },
  ImageBackground_278_588: {
    width: wp("4.821315002441406%"),
    height: hp("2.991804789975693%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.53333333333333%")
  },
  ImageBackground_278_592: {
    width: wp("5.6052495320638025%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53333333333333%")
  },
  View_278_594: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.73333333333333%"),
    top: hp("1.3661202185792263%")
  },
  ImageBackground_278_595: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_596: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_278_597: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_598: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_599: {
    width: wp("100.26666666666667%"),
    height: hp("5.737704918032787%"),
    top: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_278_600: {
    width: wp("50.13333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_603: {
    width: wp("50.13333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_604: {
    width: wp("5.059600321451823%"),
    height: hp("2.7179259420092636%"),
    top: hp("1.5027655929815573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.666699218750004%")
  },
  View_278_608: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_609: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.86666666666666%"),
    top: hp("2.3679305946892075%")
  },
  View_278_610: {
    width: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_278_611: {
    width: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5009051880549862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%")
  },
  View_278_612: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.27322404371584685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.44446614583333144%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_278_613: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_278_617: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413473494065915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  ImageBackground_278_622: {
    width: wp("7.628312174479166%"),
    height: hp("1.5148725665983607%"),
    top: hp("2.34528421704235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.856937662760417%")
  },
  View_278_623: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    top: hp("109.42622950819671%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_278_624: {
    width: wp("100%"),
    height: hp("4.918032786885246%"),
    top: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_278_625: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.46666666666667%"),
    top: hp("1.2295081967213113%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_278_626: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  View_278_634: {
    width: wp("35.46666666666667%"),
    minWidth: wp("35.46666666666667%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_635: {
    width: wp("29.86666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_278_635: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_636: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.887978142076502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.2%")
  },
  View_279_578: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_279_579: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000114%"),
    top: hp("0.40983606557376984%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.7999999523162842
  },
  ImageBackground_279_580: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%"),
    top: hp("0.8196721311475406%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
