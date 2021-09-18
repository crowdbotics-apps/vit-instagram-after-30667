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
      <View style={styles.View_278_392}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed8a/ad17/03cf3fc166a5bc15641f26989f9dcdcf"
          }}
          style={styles.ImageBackground_278_393}
        />
        <View style={styles.View_278_944}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/898b/ec5a/efd4cee444808e926a7d4d3a21e47ab7"
            }}
            style={styles.ImageBackground_278_945}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9ba/0f79/30d8c73e9014233ca98a2f85e22df576"
            }}
            style={styles.ImageBackground_278_946}
          />
        </View>
        <View style={styles.View_278_398}>
          <Text style={styles.Text_278_398}>Ruffles</Text>
        </View>
      </View>
      <View style={styles.View_278_399}>
        <View style={styles.View_278_400}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3831/252e/a5977f756b377007a3ea9456f5725b3c"
            }}
            style={styles.ImageBackground_278_401}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbf8/9399/384e18d8f3e74f94d58c79544e7ea61f"
            }}
            style={styles.ImageBackground_278_403}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d4b/fa1d/8886c2e007b51f472490a4594c3b0c52"
            }}
            style={styles.ImageBackground_278_405}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c31d/c1bf/ad4bc25bae2038c5aa7601805a6a381f"
            }}
            style={styles.ImageBackground_278_407}
          />
          <View style={styles.View_278_409}>
            <Text style={styles.Text_278_409}>100 Likes</Text>
          </View>
          <View style={styles.View_278_410}>
            <Text style={styles.Text_278_410}>userna</Text>
          </View>
          <View style={styles.View_278_411}>
            <View style={styles.View_278_412}>
              <Text style={styles.Text_278_412}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt... more{" "}
              </Text>
            </View>
            <View style={styles.View_278_413}>
              <View style={styles.View_278_414}>
                <Text style={styles.Text_278_414}>Add comment...</Text>
              </View>
              <View style={styles.View_278_415}>
                <Text style={styles.Text_278_415}>😍</Text>
              </View>
              <View style={styles.View_278_416}>
                <Text style={styles.Text_278_416}>😭</Text>
              </View>
              <View style={styles.View_278_417}>
                <Text style={styles.Text_278_417}>10 minutes ago</Text>
              </View>
              <View style={styles.View_278_418}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dfd/8a72/1f7f67ec588656b6ead848df9eff5354"
                  }}
                  style={styles.ImageBackground_278_419}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50ba/71be/e39de56454a702814c851622d2c507c0"
                  }}
                  style={styles.ImageBackground_278_420}
                />
              </View>
              <View style={styles.View_278_421}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17e6/1632/7082d5d0d4b2cc9ab38901345228e2ac"
                  }}
                  style={styles.ImageBackground_278_422}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b39b/f79d/b46be8f9f64bfc037f8a7b5cc0c3ee7b"
                  }}
                  style={styles.ImageBackground_278_423}
                />
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e868/0874/20990ec1cf10525a8bc811c59b25eca7"
            }}
            style={styles.ImageBackground_278_426}
          />
        </View>
      </View>
      <View style={styles.View_278_431}>
        <View style={styles.View_278_942}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f08b/e0be/2088692f5783a30ea2760cb8779507ff"
            }}
            style={styles.ImageBackground_278_943}
          />
        </View>
        <View style={styles.View_278_433}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a98f/9521/52bad4cf80bd88424cc7e1fd30104076"
            }}
            style={styles.ImageBackground_278_434}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33f5/f53b/38e7ccb63f5d282872efb02079153078"
            }}
            style={styles.ImageBackground_278_435}
          />
        </View>
      </View>
      <View style={styles.View_279_780}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e2b/cceb/f891ac9e685d4a9c7e1e2198b61684de"
          }}
          style={styles.ImageBackground_279_781}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4119/f4d3/86797f1ea228640a30dab0332eea0cb0"
          }}
          style={styles.ImageBackground_279_782}
        />
        <View style={styles.View_279_784}>
          <View style={styles.View_279_785} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/339c/d14a/8f1a16b2e81c133c7bd2997aeaaf693d"
            }}
            style={styles.ImageBackground_279_786}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8b3/a150/d513ac51033382a17165d64a64320d86"
          }}
          style={styles.ImageBackground_279_789}
        />
      </View>
      <View style={styles.View_278_436}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07c0/fc3f/f98b87a4293b39066b80ad69301f3c5a"
          }}
          style={styles.ImageBackground_278_437}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e9a/d69a/ebe65787e96dde22c553293435a24118"
          }}
          style={styles.ImageBackground_278_438}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7082/63eb/84b7e74d5bb2a42c41a21fa42d913bd6"
          }}
          style={styles.ImageBackground_278_440}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f0/bcb4/ecf8c6e91d673a9b86770ebdd3a0c2df"
          }}
          style={styles.ImageBackground_278_446}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb8e/5a4e/f72aac15ba6f77df079d2a86287bf8d9"
          }}
          style={styles.ImageBackground_278_450}
        />
        <View style={styles.View_278_452}>
          <View style={styles.View_278_454}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cfe/0013/295987d46ad9fe8458041d478a18c9a0"
              }}
              style={styles.ImageBackground_278_455}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a46/6845/2d27784e7d115377306e1204ce0242a6"
              }}
              style={styles.ImageBackground_278_456}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_278_457}>
        <View style={styles.View_278_458}>
          <View style={styles.View_278_459} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_278_460}
          />
          <View style={styles.View_278_461} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ae/1e0b/4731e12bfefcb531c8633d285348e403"
          }}
          style={styles.ImageBackground_278_462}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_278_466}
        />
        <View style={styles.View_278_471}>
          <View style={styles.View_278_472}>
            <Text style={styles.Text_278_472}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_278_484}>
        <View style={styles.View_278_485} />
        <View style={styles.View_278_486}>
          <View style={styles.View_278_487}>
            <View style={styles.View_278_488}>
              <View style={styles.View_278_489}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5251/1056/d29bb0f107502bff1eaaac475a3d4a5c"
                  }}
                  style={styles.ImageBackground_278_490}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4757/b1e5/be04712272a7d5f00bf75b71a8a8ec13"
                  }}
                  style={styles.ImageBackground_278_495}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fd2/167f/4cc94a021c874cf493abc7cf91459e78"
                }}
                style={styles.ImageBackground_278_496}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db05/bb2e/7ce47601b7ba2e44646b579f679c830b"
                }}
                style={styles.ImageBackground_278_497}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
            }}
            style={styles.ImageBackground_278_498}
          />
          <View style={styles.View_278_499}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
              }}
              style={styles.ImageBackground_278_500}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c5b/a199/b847e9cf8d46289592eb6d13dfaae474"
              }}
              style={styles.ImageBackground_278_501}
            />
          </View>
          <View style={styles.View_278_502}>
            <Text style={styles.Text_278_502}>Your Story</Text>
          </View>
        </View>
        <View style={styles.View_278_503}>
          <View style={styles.View_278_504}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
              }}
              style={styles.ImageBackground_278_505}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c91d/3e43/10e0df45e92789b5830af2e9aa0e67d2"
              }}
              style={styles.ImageBackground_278_506}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
            }}
            style={styles.ImageBackground_278_507}
          />
          <View style={styles.View_278_508}>
            <Text style={styles.Text_278_508}>HypeSun_98</Text>
          </View>
        </View>
        <View style={styles.View_278_509}>
          <View style={styles.View_278_510}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
              }}
              style={styles.ImageBackground_278_511}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d88c/5ed0/e5566df9c44e78658e50b9310b0b69cf"
              }}
              style={styles.ImageBackground_278_512}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
            }}
            style={styles.ImageBackground_278_513}
          />
          <View style={styles.View_278_514}>
            <Text style={styles.Text_278_514}>KarolBary</Text>
          </View>
        </View>
        <View style={styles.View_278_515}>
          <View style={styles.View_278_516}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
              }}
              style={styles.ImageBackground_278_517}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfa8/74fc/29cbfbdab6a89278f46cab83a1f2670f"
              }}
              style={styles.ImageBackground_278_518}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
            }}
            style={styles.ImageBackground_278_519}
          />
          <View style={styles.View_278_520}>
            <Text style={styles.Text_278_520}>Waggles</Text>
          </View>
        </View>
        <View style={styles.View_278_521}>
          <View style={styles.View_278_522}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
              }}
              style={styles.ImageBackground_278_523}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a0d/517f/7e62a3549997e91c21d572306667b288"
              }}
              style={styles.ImageBackground_278_524}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
            }}
            style={styles.ImageBackground_278_525}
          />
          <View style={styles.View_278_526}>
            <Text style={styles.Text_278_526}>Cherine_001</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07c0/fc3f/f98b87a4293b39066b80ad69301f3c5a"
          }}
          style={styles.ImageBackground_278_527}
        />
      </View>
      <View style={styles.View_278_528} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 0.5)" },
  View_2: { height: hp("110.92896174863387%") },
  View_278_392: {
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
  ImageBackground_278_393: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.47994791666667%"),
    top: hp("3.1420765027322375%")
  },
  View_278_944: {
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
  ImageBackground_278_945: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_946: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_398: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333333%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_278_398: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_399: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("31.284153005464482%"),
    minHeight: hp("31.284153005464482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("82.92349726775956%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_400: {
    width: wp("94.39999999999999%"),
    minWidth: wp("94.39999999999999%"),
    height: hp("18.71584699453552%"),
    minHeight: hp("18.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("1.2295081967213264%")
  },
  ImageBackground_278_401: {
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
  ImageBackground_278_403: {
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
  ImageBackground_278_405: {
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
  ImageBackground_278_407: {
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
  View_278_409: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595621%"),
    justifyContent: "flex-start"
  },
  Text_278_409: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_410: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.2404371584699305%"),
    justifyContent: "flex-start"
  },
  Text_278_410: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_411: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.2404371584699305%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_278_412: {
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
  Text_278_412: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_413: {
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
  View_278_414: {
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
  Text_278_414: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_415: {
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
  Text_278_415: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_416: {
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
  Text_278_416: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_417: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060224%"),
    justifyContent: "flex-start"
  },
  Text_278_417: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_418: {
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
  ImageBackground_278_419: {
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
  ImageBackground_278_420: {
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
  View_278_421: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.66666666666666%"),
    top: hp("1.092896174863398%")
  },
  ImageBackground_278_422: {
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
  ImageBackground_278_423: {
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
  ImageBackground_278_426: {
    width: wp("13.653333536783855%"),
    minWidth: wp("13.653333536783855%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("1.0928961748633697%")
  },
  View_278_431: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51.229508196721305%"),
    minHeight: hp("51.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.693989071038253%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_942: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51.229508196721305%"),
    minHeight: hp("51.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 37, 37, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_943: {
    width: wp("106.85187988281251%"),
    height: hp("82.10951174543204%"),
    top: hp("-30.69027759989754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.425925699869792%"),
    resizeMode: "cover"
  },
  View_278_433: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    height: hp("3.369763118973195%"),
    minHeight: hp("3.369763118973195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.13333333333333%"),
    top: hp("1.3661202185792334%")
  },
  ImageBackground_278_434: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    height: hp("3.369763118973195%"),
    minHeight: hp("3.369763118973195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_435: {
    width: wp("4.369010416666667%"),
    minWidth: wp("4.369010416666667%"),
    height: hp("1.291410519125683%"),
    minHeight: hp("1.291410519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.773177083333337%"),
    top: hp("1.091211871371243%")
  },
  View_279_780: {
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
  ImageBackground_279_781: {
    width: wp("27.73333333333333%"),
    height: hp("4.098360655737705%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_279_782: {
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
  View_279_784: {
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
  View_279_785: {
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
  ImageBackground_279_786: {
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
  ImageBackground_279_789: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.8196721311475423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.86666666666666%")
  },
  View_278_436: {
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
  ImageBackground_278_437: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_438: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%")
  },
  ImageBackground_278_440: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.53333333333333%")
  },
  ImageBackground_278_446: {
    width: wp("4.821315002441406%"),
    height: hp("2.991804789975693%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.53333333333333%")
  },
  ImageBackground_278_450: {
    width: wp("5.6052495320638025%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53333333333333%")
  },
  View_278_452: {
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
  View_278_454: {
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
  ImageBackground_278_455: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_456: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_457: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_458: {
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
  View_278_459: {
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
  ImageBackground_278_460: {
    width: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5009051880549862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_278_461: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.27322404371584685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_278_462: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_278_466: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413473494065915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_278_471: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_472: {
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475409%"),
    justifyContent: "flex-start"
  },
  Text_278_472: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_278_484: {
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
  View_278_485: {
    width: wp("100%"),
    height: hp("14.344262295081966%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_486: {
    width: wp("18.086785888671876%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%")
  },
  View_278_487: {
    width: wp("12.473644002278645%"),
    minWidth: wp("12.473644002278645%"),
    height: hp("1.2100916742627086%"),
    minHeight: hp("1.2100916742627086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.873409016927083%"),
    top: hp("3.997585942836407%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_488: {
    width: wp("12.473644002278645%"),
    height: hp("1.2100918045460853%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_489: {
    width: wp("7.996993001302083%"),
    height: hp("1.210088677745048%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.476658121744792%")
  },
  ImageBackground_278_490: {
    width: wp("7.996993001302083%"),
    height: hp("1.210088677745048%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_495: {
    width: wp("0.6100397745768229%"),
    height: hp("0.21868559832129972%"),
    top: hp("0.35980724897541094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7473775227864579%")
  },
  ImageBackground_278_496: {
    width: wp("2.0632611592610677%"),
    height: hp("1.1173729036675124%"),
    top: hp("0.04696038251366019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2204325358072916%")
  },
  ImageBackground_278_497: {
    width: wp("2.1335782368977863%"),
    height: hp("1.1588858776405209%"),
    top: hp("0.02619842362534186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_498: {
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
  View_278_499: {
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
  ImageBackground_278_500: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_501: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_502: {
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
  Text_278_502: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_503: {
    width: wp("20.269669596354166%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.652734374999998%")
  },
  View_278_504: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0139600118001333%")
  },
  ImageBackground_278_505: {
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
  ImageBackground_278_506: {
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
  ImageBackground_278_507: {
    width: wp("18.086785888671876%"),
    minWidth: wp("18.086785888671876%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9472778320312507%"),
    top: hp("0%")
  },
  View_278_508: {
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
  Text_278_508: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_509: {
    width: wp("18.086781819661457%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.06666666666666%")
  },
  View_278_510: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06668294270834%")
  },
  ImageBackground_278_511: {
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
  ImageBackground_278_512: {
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
  ImageBackground_278_513: {
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
  View_278_514: {
    width: wp("14.968365478515624%"),
    minWidth: wp("14.968365478515624%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4689005533854171%"),
    top: hp("9.274458754909494%"),
    justifyContent: "flex-start"
  },
  Text_278_514: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_515: {
    width: wp("18.086785888671876%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.26666666666667%")
  },
  View_278_516: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666829427083258%")
  },
  ImageBackground_278_517: {
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
  ImageBackground_278_518: {
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
  ImageBackground_278_519: {
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
  View_278_520: {
    width: wp("13.721007283528646%"),
    minWidth: wp("13.721007283528646%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2806925455729186%"),
    top: hp("9.274458754909494%"),
    justifyContent: "flex-start"
  },
  Text_278_520: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_521: {
    width: wp("19.64598388671875%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.12884114583333%")
  },
  View_278_522: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6711832682291714%")
  },
  ImageBackground_278_523: {
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
  ImageBackground_278_524: {
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
  ImageBackground_278_525: {
    width: wp("18.086794026692708%"),
    minWidth: wp("18.086794026692708%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6045003255208314%"),
    top: hp("0%")
  },
  View_278_526: {
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
  Text_278_526: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_527: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("14.344262295081968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_528: {
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
