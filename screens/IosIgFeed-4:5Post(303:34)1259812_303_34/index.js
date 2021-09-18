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
      <View style={styles.View_303_35}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed8a/ad17/03cf3fc166a5bc15641f26989f9dcdcf"
          }}
          style={styles.ImageBackground_303_36}
        />
        <View style={styles.View_303_40}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/898b/ec5a/efd4cee444808e926a7d4d3a21e47ab7"
            }}
            style={styles.ImageBackground_303_41}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9ba/0f79/30d8c73e9014233ca98a2f85e22df576"
            }}
            style={styles.ImageBackground_303_42}
          />
        </View>
        <View style={styles.View_303_43}>
          <Text style={styles.Text_303_43}>Ruffles</Text>
        </View>
      </View>
      <View style={styles.View_303_180}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7228/0713/89213f04868a501b8d691440acbb5b80"
          }}
          style={styles.ImageBackground_303_181}
        />
      </View>
      <View style={styles.View_303_1619}>
        <View style={styles.View_303_1620}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3831/252e/a5977f756b377007a3ea9456f5725b3c"
            }}
            style={styles.ImageBackground_303_1621}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbf8/9399/384e18d8f3e74f94d58c79544e7ea61f"
            }}
            style={styles.ImageBackground_303_1623}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d4b/fa1d/8886c2e007b51f472490a4594c3b0c52"
            }}
            style={styles.ImageBackground_303_1625}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c31d/c1bf/ad4bc25bae2038c5aa7601805a6a381f"
            }}
            style={styles.ImageBackground_303_1627}
          />
          <View style={styles.View_303_1629}>
            <Text style={styles.Text_303_1629}>100 Likes</Text>
          </View>
          <View style={styles.View_303_1630}>
            <View style={styles.View_303_1631}>
              <Text style={styles.Text_303_1631}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt... more{" "}
              </Text>
            </View>
            <View style={styles.View_303_1632}>
              <View style={styles.View_303_1633}>
                <Text style={styles.Text_303_1633}>Add comment...</Text>
              </View>
              <View style={styles.View_303_1634}>
                <Text style={styles.Text_303_1634}>😍</Text>
              </View>
              <View style={styles.View_303_1635}>
                <Text style={styles.Text_303_1635}>😭</Text>
              </View>
              <View style={styles.View_303_1636}>
                <Text style={styles.Text_303_1636}>10 minutes ago</Text>
              </View>
              <View style={styles.View_303_1637}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dfd/8a72/1f7f67ec588656b6ead848df9eff5354"
                  }}
                  style={styles.ImageBackground_303_1638}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50ba/71be/e39de56454a702814c851622d2c507c0"
                  }}
                  style={styles.ImageBackground_303_1639}
                />
              </View>
              <View style={styles.View_303_1640}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17e6/1632/7082d5d0d4b2cc9ab38901345228e2ac"
                  }}
                  style={styles.ImageBackground_303_1641}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b39b/f79d/b46be8f9f64bfc037f8a7b5cc0c3ee7b"
                  }}
                  style={styles.ImageBackground_303_1642}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_303_1645}>
            <Text style={styles.Text_303_1645}>userna</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e868/0874/20990ec1cf10525a8bc811c59b25eca7"
            }}
            style={styles.ImageBackground_303_1646}
          />
        </View>
      </View>
      <View style={styles.View_303_82}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e2b/cceb/f891ac9e685d4a9c7e1e2198b61684de"
          }}
          style={styles.ImageBackground_303_83}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4119/f4d3/86797f1ea228640a30dab0332eea0cb0"
          }}
          style={styles.ImageBackground_303_84}
        />
        <View style={styles.View_303_86}>
          <View style={styles.View_303_87} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/339c/d14a/8f1a16b2e81c133c7bd2997aeaaf693d"
            }}
            style={styles.ImageBackground_303_88}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8b3/a150/d513ac51033382a17165d64a64320d86"
          }}
          style={styles.ImageBackground_303_91}
        />
      </View>
      <View style={styles.View_303_94}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07c0/fc3f/f98b87a4293b39066b80ad69301f3c5a"
          }}
          style={styles.ImageBackground_303_95}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e9a/d69a/ebe65787e96dde22c553293435a24118"
          }}
          style={styles.ImageBackground_303_96}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7082/63eb/84b7e74d5bb2a42c41a21fa42d913bd6"
          }}
          style={styles.ImageBackground_303_98}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f0/bcb4/ecf8c6e91d673a9b86770ebdd3a0c2df"
          }}
          style={styles.ImageBackground_303_104}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb8e/5a4e/f72aac15ba6f77df079d2a86287bf8d9"
          }}
          style={styles.ImageBackground_303_108}
        />
        <View style={styles.View_303_110}>
          <View style={styles.View_303_112}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cfe/0013/295987d46ad9fe8458041d478a18c9a0"
              }}
              style={styles.ImageBackground_303_113}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a46/6845/2d27784e7d115377306e1204ce0242a6"
              }}
              style={styles.ImageBackground_303_114}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_303_115}>
        <View style={styles.View_303_116}>
          <View style={styles.View_303_117} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_303_118}
          />
          <View style={styles.View_303_119} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ae/1e0b/4731e12bfefcb531c8633d285348e403"
          }}
          style={styles.ImageBackground_303_120}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_303_124}
        />
        <View style={styles.View_303_129}>
          <View style={styles.View_303_130}>
            <Text style={styles.Text_303_130}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_303_131}>
        <View style={styles.View_303_132} />
        <View style={styles.View_303_133}>
          <View style={styles.View_303_134}>
            <View style={styles.View_303_135}>
              <View style={styles.View_303_136}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5251/1056/d29bb0f107502bff1eaaac475a3d4a5c"
                  }}
                  style={styles.ImageBackground_303_137}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4757/b1e5/be04712272a7d5f00bf75b71a8a8ec13"
                  }}
                  style={styles.ImageBackground_303_142}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fd2/167f/4cc94a021c874cf493abc7cf91459e78"
                }}
                style={styles.ImageBackground_303_143}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db05/bb2e/7ce47601b7ba2e44646b579f679c830b"
                }}
                style={styles.ImageBackground_303_144}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
            }}
            style={styles.ImageBackground_303_145}
          />
          <View style={styles.View_303_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
              }}
              style={styles.ImageBackground_303_147}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c5b/a199/b847e9cf8d46289592eb6d13dfaae474"
              }}
              style={styles.ImageBackground_303_148}
            />
          </View>
          <View style={styles.View_303_149}>
            <Text style={styles.Text_303_149}>Your Story</Text>
          </View>
        </View>
        <View style={styles.View_303_150}>
          <View style={styles.View_303_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
              }}
              style={styles.ImageBackground_303_152}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c91d/3e43/10e0df45e92789b5830af2e9aa0e67d2"
              }}
              style={styles.ImageBackground_303_153}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
            }}
            style={styles.ImageBackground_303_154}
          />
          <View style={styles.View_303_155}>
            <Text style={styles.Text_303_155}>HypeSun_98</Text>
          </View>
        </View>
        <View style={styles.View_303_156}>
          <View style={styles.View_303_157}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
              }}
              style={styles.ImageBackground_303_158}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d88c/5ed0/e5566df9c44e78658e50b9310b0b69cf"
              }}
              style={styles.ImageBackground_303_159}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
            }}
            style={styles.ImageBackground_303_160}
          />
          <View style={styles.View_303_161}>
            <Text style={styles.Text_303_161}>KarolBary</Text>
          </View>
        </View>
        <View style={styles.View_303_162}>
          <View style={styles.View_303_163}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
              }}
              style={styles.ImageBackground_303_164}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfa8/74fc/29cbfbdab6a89278f46cab83a1f2670f"
              }}
              style={styles.ImageBackground_303_165}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
            }}
            style={styles.ImageBackground_303_166}
          />
          <View style={styles.View_303_167}>
            <Text style={styles.Text_303_167}>Waggles</Text>
          </View>
        </View>
        <View style={styles.View_303_168}>
          <View style={styles.View_303_169}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
              }}
              style={styles.ImageBackground_303_170}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a0d/517f/7e62a3549997e91c21d572306667b288"
              }}
              style={styles.ImageBackground_303_171}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
            }}
            style={styles.ImageBackground_303_172}
          />
          <View style={styles.View_303_173}>
            <Text style={styles.Text_303_173}>Cherine_001</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07c0/fc3f/f98b87a4293b39066b80ad69301f3c5a"
          }}
          style={styles.ImageBackground_303_174}
        />
      </View>
      <View style={styles.View_303_175} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 0.5)" },
  View_2: { height: hp("110.92896174863387%") },
  View_303_35: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_303_36: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.47994791666667%"),
    top: hp("3.1420765027322375%")
  },
  View_303_40: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("1.366120218579237%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_303_41: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_42: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_303_43: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333333%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_303_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_180: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("64.03688524590164%"),
    minHeight: hp("64.03688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.693989071038253%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_303_181: {
    width: wp("107.0370361328125%"),
    height: hp("82.29927104678961%"),
    top: hp("-9.154906559511613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.203702799479167%"),
    resizeMode: "cover"
  },
  View_303_1619: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("31.284153005464482%"),
    minHeight: hp("31.284153005464482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("95.73087431693989%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_303_1620: {
    width: wp("94.39999999999999%"),
    minWidth: wp("94.39999999999999%"),
    height: hp("18.71584699453552%"),
    minHeight: hp("18.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("1.2295081967213122%")
  },
  ImageBackground_303_1621: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_1623: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.466666666666665%"),
    top: hp("0%")
  },
  ImageBackground_303_1625: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("0%")
  },
  ImageBackground_303_1627: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%")
  },
  View_303_1629: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595636%"),
    justifyContent: "flex-start"
  },
  Text_303_1629: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_1630: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_303_1631: {
    width: wp("92.26666666666667%"),
    minWidth: wp("92.26666666666667%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333337%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_303_1631: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_1632: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.73770491803279%")
  },
  View_303_1633: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.8%"),
    top: hp("0.2732240437158566%"),
    justifyContent: "flex-start"
  },
  Text_303_1633: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_1634: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.86666666666667%"),
    top: hp("1.2295081967213122%"),
    justifyContent: "center"
  },
  Text_303_1634: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_1635: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.06666666666666%"),
    top: hp("1.2295081967213122%"),
    justifyContent: "center"
  },
  Text_303_1635: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_1636: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568305994%"),
    justifyContent: "flex-start"
  },
  Text_303_1636: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_1637: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_1638: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_1639: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_303_1640: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.66666666666666%"),
    top: hp("1.0928961748633839%")
  },
  ImageBackground_303_1641: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_1642: {
    width: wp("1.6%"),
    minWidth: wp("1.6%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.2732240437158424%")
  },
  View_303_1645: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%"),
    justifyContent: "flex-start"
  },
  Text_303_1645: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_303_1646: {
    width: wp("13.653333536783855%"),
    minWidth: wp("13.653333536783855%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("1.0928961748633839%")
  },
  View_303_82: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.0109289617486334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_303_83: {
    width: wp("27.73333333333333%"),
    height: hp("4.098360655737705%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_303_84: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("0.8196721311475423%")
  },
  View_303_86: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.8196721311475423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.4%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_303_87: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.40983606557376895%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.7999999523162842
  },
  ImageBackground_303_88: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999943%"),
    top: hp("0.8196721311475406%")
  },
  ImageBackground_303_91: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.8196721311475423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.86666666666666%")
  },
  View_303_94: {
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
  ImageBackground_303_95: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_96: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%")
  },
  ImageBackground_303_98: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.53333333333333%")
  },
  ImageBackground_303_104: {
    width: wp("4.821315002441406%"),
    height: hp("2.991804789975693%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.53333333333333%")
  },
  ImageBackground_303_108: {
    width: wp("5.6052495320638025%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53333333333333%")
  },
  View_303_110: {
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
  View_303_112: {
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
  ImageBackground_303_113: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_114: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_303_115: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_303_116: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68888346354167%"),
    top: hp("2.367947270961407%")
  },
  View_303_117: {
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
  ImageBackground_303_118: {
    width: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5009051880549862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_303_119: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.27322404371584685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_303_120: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_303_124: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413473494065915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_303_129: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_303_130: {
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475409%"),
    justifyContent: "flex-start"
  },
  Text_303_130: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_303_131: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.792349726775956%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_303_132: {
    width: wp("100%"),
    height: hp("14.344262295081966%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_303_133: {
    width: wp("18.086785888671876%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%")
  },
  View_303_134: {
    width: wp("12.473644002278645%"),
    minWidth: wp("12.473644002278645%"),
    height: hp("1.2100916742627086%"),
    minHeight: hp("1.2100916742627086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8734049479166663%"),
    top: hp("3.997585942836407%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_303_135: {
    width: wp("12.473644002278645%"),
    height: hp("1.2100918045460853%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_303_136: {
    width: wp("7.996993001302083%"),
    height: hp("1.210088677745048%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.47666015625%")
  },
  ImageBackground_303_137: {
    width: wp("7.996993001302083%"),
    height: hp("1.210088677745048%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_142: {
    width: wp("0.6100397745768229%"),
    height: hp("0.21868559832129972%"),
    top: hp("0.35980724897541094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7473795572916657%")
  },
  ImageBackground_303_143: {
    width: wp("2.0632611592610677%"),
    height: hp("1.1173729036675124%"),
    top: hp("0.04696038251366019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2204345703124995%")
  },
  ImageBackground_303_144: {
    width: wp("2.1335782368977863%"),
    height: hp("1.1588858776405209%"),
    top: hp("0.02619842362534186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_145: {
    width: wp("18.086785888671876%"),
    minWidth: wp("18.086785888671876%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_303_146: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666829427083333%"),
    top: hp("0.5464480874316937%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_303_147: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_148: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_303_149: {
    width: wp("15.90389607747396%"),
    minWidth: wp("15.90389607747396%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.314208984375%"),
    top: hp("9.274458754909494%"),
    justifyContent: "flex-start"
  },
  Text_303_149: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_150: {
    width: wp("20.269669596354166%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.652734374999998%")
  },
  View_303_151: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.013956705729168%")
  },
  ImageBackground_303_152: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_153: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_303_154: {
    width: wp("18.086785888671876%"),
    minWidth: wp("18.086785888671876%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9472737630208385%"),
    top: hp("0%")
  },
  View_303_155: {
    width: wp("20.269669596354166%"),
    minWidth: wp("20.269669596354166%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.274458754909494%"),
    justifyContent: "flex-start"
  },
  Text_303_155: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_156: {
    width: wp("18.086781819661457%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.06666666666666%")
  },
  View_303_157: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06668294270834%")
  },
  ImageBackground_303_158: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_159: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_303_160: {
    width: wp("18.086781819661457%"),
    minWidth: wp("18.086781819661457%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_303_161: {
    width: wp("14.968365478515624%"),
    minWidth: wp("14.968365478515624%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4688964843750014%"),
    top: hp("9.274458754909494%"),
    justifyContent: "flex-start"
  },
  Text_303_161: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_162: {
    width: wp("18.086785888671876%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.26666666666667%")
  },
  View_303_163: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666829427083258%")
  },
  ImageBackground_303_164: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_165: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_303_166: {
    width: wp("18.086785888671876%"),
    minWidth: wp("18.086785888671876%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_303_167: {
    width: wp("13.721007283528646%"),
    minWidth: wp("13.721007283528646%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2806966145833343%"),
    top: hp("9.274458754909494%"),
    justifyContent: "flex-start"
  },
  Text_303_167: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_168: {
    width: wp("19.64598388671875%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.12884114583333%")
  },
  View_303_169: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.67117513020834%")
  },
  ImageBackground_303_170: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_171: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_303_172: {
    width: wp("18.086794026692708%"),
    minWidth: wp("18.086794026692708%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6045084635416629%"),
    top: hp("0%")
  },
  View_303_173: {
    width: wp("19.64598388671875%"),
    minWidth: wp("19.64598388671875%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.274458754909494%"),
    justifyContent: "flex-start"
  },
  Text_303_173: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_303_174: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("14.344262295081968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_303_175: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("109.42622950819671%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
