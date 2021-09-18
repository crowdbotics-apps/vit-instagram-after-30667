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
      <View style={styles.View_278_639}>
        <View style={styles.View_278_640}>
          <View style={styles.View_278_641}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58f9/fb04/d1daf6b0a1620b2db60f5622b1720aa7"
              }}
              style={styles.ImageBackground_278_642}
            />
            <View style={styles.View_278_643}>
              <View style={styles.View_278_644} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                }}
                style={styles.ImageBackground_278_645}
              />
            </View>
          </View>
          <View style={styles.View_278_646}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/392a/536f/10b102cc70c747b12ed54a76bd0fb5b3"
              }}
              style={styles.ImageBackground_278_647}
            />
          </View>
          <View style={styles.View_278_648}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c3b/6527/b0f5b093aacbdd8993b309c086540bbe"
              }}
              style={styles.ImageBackground_278_649}
            />
          </View>
        </View>
        <View style={styles.View_278_650}>
          <View style={styles.View_278_651}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00a0/a780/eb9cc07d5a70ff90b743522e4b015216"
              }}
              style={styles.ImageBackground_278_652}
            />
          </View>
          <View style={styles.View_278_653}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fe6/3262/ea715981a9a8b44dcc53495257afcc5c"
              }}
              style={styles.ImageBackground_278_654}
            />
          </View>
          <View style={styles.View_278_655}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edde/36ac/5dd9349d502ee2ca349afb0cc282c380"
              }}
              style={styles.ImageBackground_278_656}
            />
          </View>
        </View>
        <View style={styles.View_278_657}>
          <View style={styles.View_278_658}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94fb/5bf5/02bef3093d69233f62d093c98583f97e"
              }}
              style={styles.ImageBackground_278_659}
            />
          </View>
          <View style={styles.View_278_660}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f859/05f2/6d375b063975e2da4ce2dd6d89fea784"
              }}
              style={styles.ImageBackground_278_661}
            />
            <View style={styles.View_278_662}>
              <View style={styles.View_278_663} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                }}
                style={styles.ImageBackground_278_664}
              />
            </View>
          </View>
          <View style={styles.View_278_665}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fe3/bde0/77fe7e11fb4352a511259af12b6ec37f"
              }}
              style={styles.ImageBackground_278_666}
            />
          </View>
        </View>
        <View style={styles.View_278_667}>
          <View style={styles.View_278_668}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8468/7066/24fab43d1206360d5da10368e07a6574"
              }}
              style={styles.ImageBackground_278_669}
            />
            <View style={styles.View_278_670}>
              <View style={styles.View_278_671} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                }}
                style={styles.ImageBackground_278_672}
              />
            </View>
          </View>
          <View style={styles.View_278_673}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49e5/c7d5/9d66f1812f0c4fb89ec89aca2a2191d3"
              }}
              style={styles.ImageBackground_278_674}
            />
          </View>
          <View style={styles.View_278_675}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64e6/027c/f71daefac8525a6c022cb6cd27f7af89"
              }}
              style={styles.ImageBackground_278_676}
            />
          </View>
        </View>
        <View style={styles.View_278_677}>
          <View style={styles.View_278_678}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91a2/c190/93140c329095d000b60dd11e3e9ea392"
              }}
              style={styles.ImageBackground_278_679}
            />
          </View>
          <View style={styles.View_278_680}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b31/d332/3fd349dc3bf09f19815f4996ccce5ab4"
              }}
              style={styles.ImageBackground_278_681}
            />
          </View>
          <View style={styles.View_278_682}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386c/fb78/9ff840f8389bfe3c5498a82a3ad5a3ef"
              }}
              style={styles.ImageBackground_278_683}
            />
            <View style={styles.View_278_684}>
              <View style={styles.View_278_685} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                }}
                style={styles.ImageBackground_278_686}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_278_687}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e45/220b/881c97ce927b849d0ce6d3fbc32680cb"
          }}
          style={styles.ImageBackground_278_688}
        />
        <View style={styles.View_278_691}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/582f/cffd/e90cf50461a78b9ca0aeede46973e2b3"
            }}
            style={styles.ImageBackground_278_692}
          />
        </View>
      </View>
      <View style={styles.View_278_696}>
        <View style={styles.View_278_697}>
          <View style={styles.View_278_699}>
            <Text style={styles.Text_278_699}>Story 1</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
            }}
            style={styles.ImageBackground_278_700}
          />
          <View style={styles.View_278_701}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
              }}
              style={styles.ImageBackground_278_702}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a3c/3e36/f6870eb42a9bf0be3240c7d13e6a56a7"
              }}
              style={styles.ImageBackground_278_703}
            />
          </View>
        </View>
        <View style={styles.View_278_704}>
          <View style={styles.View_278_706}>
            <Text style={styles.Text_278_706}>Story 2</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
            }}
            style={styles.ImageBackground_278_707}
          />
          <View style={styles.View_278_708}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
              }}
              style={styles.ImageBackground_278_709}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f4a/d9f3/d0eeec9a22ee7f2836cc5e429b927800"
              }}
              style={styles.ImageBackground_278_710}
            />
          </View>
        </View>
        <View style={styles.View_278_711}>
          <View style={styles.View_278_713}>
            <Text style={styles.Text_278_713}>Story 3</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
            }}
            style={styles.ImageBackground_278_714}
          />
          <View style={styles.View_278_715}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
              }}
              style={styles.ImageBackground_278_716}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d4/a961/f70db3c03fac5bd1a241b372ea0c047d"
              }}
              style={styles.ImageBackground_278_717}
            />
          </View>
        </View>
        <View style={styles.View_278_718}>
          <View style={styles.View_278_720}>
            <Text style={styles.Text_278_720}>Story 4</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
            }}
            style={styles.ImageBackground_278_721}
          />
          <View style={styles.View_278_722}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
              }}
              style={styles.ImageBackground_278_723}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c691/31ab/cdd131dd977eb065464885dc3aab53e9"
              }}
              style={styles.ImageBackground_278_1288}
            />
          </View>
        </View>
        <View style={styles.View_278_725}>
          <View style={styles.View_278_727}>
            <Text style={styles.Text_278_727}>Story 5</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
            }}
            style={styles.ImageBackground_278_728}
          />
          <View style={styles.View_278_729}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
              }}
              style={styles.ImageBackground_278_730}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/564b/fec2/70f9ae4d93767dbe5cd100cacda38cfa"
              }}
              style={styles.ImageBackground_278_1289}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_278_732}>
        <View style={styles.View_278_733}>
          <View style={styles.View_278_734}>
            <Text style={styles.Text_278_734}>Username</Text>
          </View>
          <View style={styles.View_278_735}>
            <Text style={styles.Text_278_735}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt #hashtag
            </Text>
          </View>
          <View style={styles.View_278_736}>
            <Text style={styles.Text_278_736}>Link goes here</Text>
          </View>
          <View style={styles.View_278_737}>
            <Text style={styles.Text_278_737}>
              Followed by username and username
            </Text>
          </View>
        </View>
        <View style={styles.View_278_738}>
          <View style={styles.View_278_739}>
            <View style={styles.View_278_740}>
              <Text style={styles.Text_278_740}>Button</Text>
            </View>
          </View>
          <View style={styles.View_278_741}>
            <View style={styles.View_278_742}>
              <Text style={styles.Text_278_742}>Follow</Text>
            </View>
          </View>
          <View style={styles.View_278_743}>
            <View style={styles.View_278_744}>
              <Text style={styles.Text_278_744}>Message</Text>
            </View>
          </View>
          <View style={styles.View_278_745}>
            <View style={styles.View_278_746}>
              <Text style={styles.Text_278_746}>Email</Text>
            </View>
          </View>
          <View style={styles.View_278_747}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad6d/903f/8cd927efa55bd3623fc46448b823f03c"
              }}
              style={styles.ImageBackground_278_748}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_279_661}>
        <View style={styles.View_279_662}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96f4/d3e8/6035d4c5950756e22d9c654f6a9f6a40"
            }}
            style={styles.ImageBackground_279_663}
          />
          <View style={styles.View_279_664}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f8e/deb0/a79f2111ee839d37bba8ed9e088afc3f"
              }}
              style={styles.ImageBackground_279_665}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fc/3b7b/98a2874679a82ef5f943b09c031dd682"
              }}
              style={styles.ImageBackground_279_666}
            />
          </View>
        </View>
        <View style={styles.View_279_667}>
          <Text style={styles.Text_279_667}>0,000</Text>
        </View>
        <View style={styles.View_279_668}>
          <Text style={styles.Text_279_668}>0,000</Text>
        </View>
        <View style={styles.View_279_669}>
          <Text style={styles.Text_279_669}>0,000</Text>
        </View>
        <View style={styles.View_279_670}>
          <Text style={styles.Text_279_670}>Posts</Text>
        </View>
        <View style={styles.View_279_671}>
          <Text style={styles.Text_279_671}>Followers</Text>
        </View>
        <View style={styles.View_279_672}>
          <Text style={styles.Text_279_672}>Following</Text>
        </View>
      </View>
      <View style={styles.View_278_762}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05b9/413e/3aa06023371a2724121fd2ffcf3d6cd3"
          }}
          style={styles.ImageBackground_278_763}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f35/d549/905d7f57b0cb6371a16153a7f6493400"
          }}
          style={styles.ImageBackground_278_764}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7082/63eb/84b7e74d5bb2a42c41a21fa42d913bd6"
          }}
          style={styles.ImageBackground_278_766}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f0/bcb4/ecf8c6e91d673a9b86770ebdd3a0c2df"
          }}
          style={styles.ImageBackground_278_772}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb8e/5a4e/f72aac15ba6f77df079d2a86287bf8d9"
          }}
          style={styles.ImageBackground_278_776}
        />
        <View style={styles.View_278_778}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/408f/0f54/95b65a7db60497214c2bdf1e7289e8ca"
            }}
            style={styles.ImageBackground_278_779}
          />
          <View style={styles.View_278_780}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cfe/0013/295987d46ad9fe8458041d478a18c9a0"
              }}
              style={styles.ImageBackground_278_781}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a46/6845/2d27784e7d115377306e1204ce0242a6"
              }}
              style={styles.ImageBackground_278_782}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_278_1867}>
        <View style={styles.View_278_1868}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed8a/ad17/03cf3fc166a5bc15641f26989f9dcdcf"
            }}
            style={styles.ImageBackground_278_1869}
          />
        </View>
        <View style={styles.View_278_1877}>
          <Text style={styles.Text_278_1877}>username</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0546/e0e8/384daac273b4b58499f4355d157e5bad"
          }}
          style={styles.ImageBackground_278_1878}
        />
      </View>
      <View style={styles.View_278_783}>
        <View style={styles.View_278_784}>
          <View style={styles.View_278_785} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_278_786}
          />
          <View style={styles.View_278_787} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ae/1e0b/4731e12bfefcb531c8633d285348e403"
          }}
          style={styles.ImageBackground_278_788}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_278_792}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b350/590a/12424c812875b64bdc194585840c74dc"
          }}
          style={styles.ImageBackground_278_797}
        />
      </View>
      <View style={styles.View_278_812} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_278_639: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("84.97267759562843%"),
    minHeight: hp("84.97267759562843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("67.21311475409836%")
  },
  View_278_640: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.07045858414448%")
  },
  View_278_641: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_642: {
    width: wp("35.99740804036458%"),
    height: hp("27.481760744188655%"),
    top: hp("-5.289771908619372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0144368489583333%"),
    resizeMode: "cover"
  },
  View_278_643: {
    width: wp("2.833656819661458%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.46591796875%")
  },
  View_278_644: {
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
  ImageBackground_278_645: {
    width: wp("2.1496765136718747%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.29847191982580057%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6839843750000014%")
  },
  View_278_646: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.46666666666667%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_647: {
    width: wp("33.93777872721354%"),
    height: hp("24.0387129653347%"),
    top: hp("-7.13649395385076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.8607421875000014%"),
    resizeMode: "cover"
  },
  View_278_648: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_649: {
    width: wp("36.765926106770834%"),
    height: hp("28.045166515913166%"),
    top: hp("-5.571475836748647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.1681477864583343%"),
    resizeMode: "cover"
  },
  View_278_650: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.046069202527335%")
  },
  View_278_651: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.46666666666667%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_652: {
    width: wp("54.318888346354164%"),
    height: hp("20.78347127945697%"),
    top: hp("-1.9406261339865125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.544075520833335%"),
    resizeMode: "cover"
  },
  View_278_653: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_654: {
    width: wp("51.89037272135417%"),
    height: hp("17.60647883180712%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9.345182291666667%"),
    resizeMode: "cover"
  },
  View_278_655: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_656: {
    width: wp("49.73851725260416%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.2403645833333385%"),
    resizeMode: "cover"
  },
  View_278_657: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.048787101370394%")
  },
  View_278_658: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_659: {
    width: wp("33.2%"),
    height: hp("25.35333268629397%"),
    top: hp("-7.574696358435801%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_660: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.46666666666667%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_661: {
    width: wp("53.98074137369792%"),
    height: hp("18.310738652130294%"),
    top: hp("-1.4085196406463467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.594807942708336%"),
    resizeMode: "cover"
  },
  View_278_662: {
    width: wp("2.833656819661458%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.46591796875%")
  },
  View_278_663: {
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
  ImageBackground_278_664: {
    width: wp("2.1496765136718747%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.298463581689731%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6839843750000014%")
  },
  View_278_665: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_666: {
    width: wp("33.2%"),
    height: hp("25.35333268629397%"),
    top: hp("-4.069052107347176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_667: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.02438938161714%")
  },
  View_278_668: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_669: {
    width: wp("36.673701985677084%"),
    height: hp("28.029515834453978%"),
    top: hp("-11.127292653901975%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.7522298177083333%"),
    resizeMode: "cover"
  },
  View_278_670: {
    width: wp("2.833656819661458%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.46591796875%")
  },
  View_278_671: {
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
  ImageBackground_278_672: {
    width: wp("2.1496765136718747%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.298463581689731%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6839843750000014%")
  },
  View_278_673: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.46666666666667%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_674: {
    width: wp("32.86185302734375%"),
    height: hp("25.400280561603484%"),
    top: hp("-2.6292311037824305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15371093750000142%"),
    resizeMode: "cover"
  },
  View_278_675: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_676: {
    width: wp("48.41666666666667%"),
    height: hp("32.74022920535562%"),
    top: hp("-0.7512076956326723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.31814778645834%"),
    resizeMode: "cover"
  },
  View_278_677: {
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
  View_278_678: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_679: {
    width: wp("35.567036946614586%"),
    height: hp("27.168757537675038%"),
    top: hp("-3.7560468162995164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.1988932291666667%"),
    resizeMode: "cover"
  },
  View_278_680: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.46666666666667%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_681: {
    width: wp("33.78407389322916%"),
    height: hp("25.791537175413037%"),
    top: hp("-1.5650181171021131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.30740559895833286%"),
    resizeMode: "cover"
  },
  View_278_682: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_683: {
    width: wp("49.03148193359375%"),
    height: hp("37.43528772573002%"),
    top: hp("-9.13971864460595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.56591796875%"),
    resizeMode: "cover"
  },
  View_278_684: {
    width: wp("2.833660888671875%"),
    minWidth: wp("2.833660888671875%"),
    height: hp("1.3928673957866398%"),
    minHeight: hp("1.3928673957866398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.46591796874999%"),
    top: hp("0.9233651916837431%")
  },
  View_278_685: {
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
  ImageBackground_278_686: {
    width: wp("2.1496765136718747%"),
    height: hp("1.0944005570125057%"),
    top: hp("0.298463581689731%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6839843750000085%")
  },
  View_278_687: {
    width: wp("100.26666666666667%"),
    height: hp("5.737704918032787%"),
    top: hp("61.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_278_688: {
    width: wp("50.13333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_691: {
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
  ImageBackground_278_692: {
    width: wp("5.059600321451823%"),
    height: hp("2.7179259420092636%"),
    top: hp("1.5027489167093506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.666699218750004%")
  },
  View_278_696: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("49.45355191256831%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_697: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_699: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333334%"),
    top: hp("8.196721311475407%"),
    justifyContent: "flex-start"
  },
  Text_278_699: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_700: {
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
  View_278_701: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0.5464480874316919%")
  },
  ImageBackground_278_702: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_703: {
    width: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_704: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.666666666666664%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_706: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666665%"),
    top: hp("8.196721311475407%"),
    justifyContent: "flex-start"
  },
  Text_278_706: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_707: {
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
  View_278_708: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06666666666667%"),
    top: hp("0.5464480874316919%")
  },
  ImageBackground_278_709: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_710: {
    width: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_711: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.333333333333336%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_713: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%"),
    top: hp("8.196721311475407%"),
    justifyContent: "flex-start"
  },
  Text_278_713: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_714: {
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
  View_278_715: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.5464480874316919%")
  },
  ImageBackground_278_716: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_717: {
    width: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_718: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_720: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%"),
    top: hp("8.196721311475407%"),
    justifyContent: "flex-start"
  },
  Text_278_720: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_721: {
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
  View_278_722: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06666666666667%"),
    top: hp("0.5464480874316919%")
  },
  ImageBackground_278_723: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_1288: {
    width: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_725: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66666666666666%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_727: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666828%"),
    top: hp("8.196721311475407%"),
    justifyContent: "flex-start"
  },
  Text_278_727: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_728: {
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
  View_278_729: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.5464480874316919%")
  },
  ImageBackground_278_730: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_1289: {
    width: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_732: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("25.273224043715846%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_733: {
    width: wp("91.7341064453125%"),
    minWidth: wp("91.7341064453125%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_734: {
    width: wp("91.7341064453125%"),
    minWidth: wp("91.7341064453125%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_278_734: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_735: {
    width: wp("91.7341064453125%"),
    minWidth: wp("91.7341064453125%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005456%"),
    justifyContent: "flex-start"
  },
  Text_278_735: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_736: {
    width: wp("91.7341064453125%"),
    minWidth: wp("91.7341064453125%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.3770491803278695%"),
    justifyContent: "flex-start"
  },
  Text_278_736: {
    color: "rgba(0, 76, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_737: {
    width: wp("91.7341064453125%"),
    minWidth: wp("91.7341064453125%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.972677595628415%"),
    justifyContent: "flex-start"
  },
  Text_278_737: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_738: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.797814207650273%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_739: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_740: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0.9562841530054627%"),
    justifyContent: "flex-start"
  },
  Text_278_740: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_741: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.327868852459019%"),
    backgroundColor: "rgba(31, 161, 255, 1)"
  },
  View_278_742: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.866666666666667%"),
    top: hp("0.9562841530054627%"),
    justifyContent: "flex-start"
  },
  Text_278_742: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_743: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("5.327868852459019%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_744: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0.9562841530054627%"),
    justifyContent: "flex-start"
  },
  Text_278_744: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_745: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.266666666666666%"),
    top: hp("5.327868852459019%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_746: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999997%"),
    top: hp("0.9562841530054627%"),
    justifyContent: "flex-start"
  },
  Text_278_746: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_747: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("5.327868852459019%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_278_748: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.9562841530054627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%")
  },
  View_279_661: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.021857923497267%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_279_662: {
    width: wp("23.444620768229164%"),
    minWidth: wp("23.444620768229164%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0.13661202185792476%")
  },
  ImageBackground_279_663: {
    width: wp("23.444620768229164%"),
    minWidth: wp("23.444620768229164%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_279_664: {
    width: wp("20.739666748046876%"),
    minWidth: wp("20.739666748046876%"),
    height: hp("10.624829276663359%"),
    minHeight: hp("10.624829276663359%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3826171875000002%"),
    top: hp("0.7083392534099637%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_279_665: {
    width: wp("20.739666748046876%"),
    height: hp("10.624829276663359%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_279_666: {
    width: wp("20.739666748046876%"),
    height: hp("10.624829276663359%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_279_667: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("3.415300546448089%"),
    justifyContent: "flex-start"
  },
  Text_279_667: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_668: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.13333333333333%"),
    top: hp("3.415300546448089%"),
    justifyContent: "flex-start"
  },
  Text_279_668: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_669: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    top: hp("3.415300546448089%"),
    justifyContent: "flex-start"
  },
  Text_279_669: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_670: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.86666666666667%"),
    top: hp("6.147540983606559%"),
    justifyContent: "flex-start"
  },
  Text_279_670: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_671: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.06666666666666%"),
    top: hp("6.147540983606559%"),
    justifyContent: "flex-start"
  },
  Text_279_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_672: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333333%"),
    top: hp("6.147540983606559%"),
    justifyContent: "flex-start"
  },
  Text_279_672: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_762: {
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
  ImageBackground_278_763: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_764: {
    width: wp("5.854545593261719%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%")
  },
  ImageBackground_278_766: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.53333333333333%")
  },
  ImageBackground_278_772: {
    width: wp("4.821315002441406%"),
    height: hp("2.991804789975693%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.53333333333333%")
  },
  ImageBackground_278_776: {
    width: wp("5.6052495320638025%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53333333333333%")
  },
  View_278_778: {
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
  ImageBackground_278_779: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_780: {
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
  ImageBackground_278_781: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_782: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1867: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_278_1868: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.46666666666667%"),
    top: hp("1.7759562841530059%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_278_1869: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.9562841530054653%")
  },
  View_278_1877: {
    width: wp("22.400000000000002%"),
    top: hp("1.502732240437159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    justifyContent: "flex-start"
  },
  Text_278_1877: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1878: {
    width: wp("6.400000508626302%"),
    height: hp("3.278688785156917%"),
    top: hp("1.3661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_278_783: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_784: {
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
  View_278_785: {
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
  ImageBackground_278_786: {
    width: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5009103993900488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%")
  },
  View_278_787: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.27322404371584685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.44446614583333144%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_278_788: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675783084389943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_278_792: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.41347974766799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  ImageBackground_278_797: {
    width: wp("7.628312174479166%"),
    height: hp("1.5148725665983607%"),
    top: hp("2.34528421704235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.85693359375%")
  },
  View_278_812: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    top: hp("109.42622950819671%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
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
