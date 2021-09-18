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
      <View style={styles.View_278_1322}>
        <View style={styles.View_278_1323}>
          <View style={styles.View_278_1324}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58f9/fb04/d1daf6b0a1620b2db60f5622b1720aa7"
              }}
              style={styles.ImageBackground_278_1325}
            />
            <View style={styles.View_278_1326}>
              <View style={styles.View_278_1327} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                }}
                style={styles.ImageBackground_278_1328}
              />
            </View>
          </View>
          <View style={styles.View_278_1329}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/392a/536f/10b102cc70c747b12ed54a76bd0fb5b3"
              }}
              style={styles.ImageBackground_278_1330}
            />
          </View>
          <View style={styles.View_278_1331}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c3b/6527/b0f5b093aacbdd8993b309c086540bbe"
              }}
              style={styles.ImageBackground_278_1332}
            />
          </View>
        </View>
        <View style={styles.View_278_1333}>
          <View style={styles.View_278_1334}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00a0/a780/eb9cc07d5a70ff90b743522e4b015216"
              }}
              style={styles.ImageBackground_278_1335}
            />
          </View>
          <View style={styles.View_278_1336}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fe6/3262/ea715981a9a8b44dcc53495257afcc5c"
              }}
              style={styles.ImageBackground_278_1337}
            />
          </View>
          <View style={styles.View_278_1338}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edde/36ac/5dd9349d502ee2ca349afb0cc282c380"
              }}
              style={styles.ImageBackground_278_1339}
            />
          </View>
        </View>
        <View style={styles.View_278_1340}>
          <View style={styles.View_278_1341}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94fb/5bf5/02bef3093d69233f62d093c98583f97e"
              }}
              style={styles.ImageBackground_278_1342}
            />
          </View>
          <View style={styles.View_278_1343}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f859/05f2/6d375b063975e2da4ce2dd6d89fea784"
              }}
              style={styles.ImageBackground_278_1344}
            />
            <View style={styles.View_278_1345}>
              <View style={styles.View_278_1346} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                }}
                style={styles.ImageBackground_278_1347}
              />
            </View>
          </View>
          <View style={styles.View_278_1348}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fe3/bde0/77fe7e11fb4352a511259af12b6ec37f"
              }}
              style={styles.ImageBackground_278_1349}
            />
          </View>
        </View>
        <View style={styles.View_278_1350}>
          <View style={styles.View_278_1351}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8468/7066/24fab43d1206360d5da10368e07a6574"
              }}
              style={styles.ImageBackground_278_1352}
            />
            <View style={styles.View_278_1353}>
              <View style={styles.View_278_1354} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                }}
                style={styles.ImageBackground_278_1355}
              />
            </View>
          </View>
          <View style={styles.View_278_1356}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49e5/c7d5/9d66f1812f0c4fb89ec89aca2a2191d3"
              }}
              style={styles.ImageBackground_278_1357}
            />
          </View>
          <View style={styles.View_278_1358}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64e6/027c/f71daefac8525a6c022cb6cd27f7af89"
              }}
              style={styles.ImageBackground_278_1359}
            />
          </View>
        </View>
        <View style={styles.View_278_1360}>
          <View style={styles.View_278_1361}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91a2/c190/93140c329095d000b60dd11e3e9ea392"
              }}
              style={styles.ImageBackground_278_1362}
            />
          </View>
          <View style={styles.View_278_1363}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b31/d332/3fd349dc3bf09f19815f4996ccce5ab4"
              }}
              style={styles.ImageBackground_278_1364}
            />
          </View>
          <View style={styles.View_278_1365}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386c/fb78/9ff840f8389bfe3c5498a82a3ad5a3ef"
              }}
              style={styles.ImageBackground_278_1366}
            />
            <View style={styles.View_278_1367}>
              <View style={styles.View_278_1368} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                }}
                style={styles.ImageBackground_278_1369}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_278_1379}>
        <View style={styles.View_278_1380}>
          <View style={styles.View_278_1381}>
            <Text style={styles.Text_278_1381}>Story 1</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
            }}
            style={styles.ImageBackground_278_1382}
          />
          <View style={styles.View_278_1383}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
              }}
              style={styles.ImageBackground_278_1384}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a3c/3e36/f6870eb42a9bf0be3240c7d13e6a56a7"
              }}
              style={styles.ImageBackground_278_1385}
            />
          </View>
        </View>
        <View style={styles.View_278_1386}>
          <View style={styles.View_278_1387}>
            <Text style={styles.Text_278_1387}>Story 2</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
            }}
            style={styles.ImageBackground_278_1388}
          />
          <View style={styles.View_278_1389}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
              }}
              style={styles.ImageBackground_278_1390}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f4a/d9f3/d0eeec9a22ee7f2836cc5e429b927800"
              }}
              style={styles.ImageBackground_278_1391}
            />
          </View>
        </View>
        <View style={styles.View_278_1392}>
          <View style={styles.View_278_1393}>
            <Text style={styles.Text_278_1393}>Story 3</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
            }}
            style={styles.ImageBackground_278_1394}
          />
          <View style={styles.View_278_1395}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
              }}
              style={styles.ImageBackground_278_1396}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d4/a961/f70db3c03fac5bd1a241b372ea0c047d"
              }}
              style={styles.ImageBackground_278_1397}
            />
          </View>
        </View>
        <View style={styles.View_278_1398}>
          <View style={styles.View_278_1399}>
            <Text style={styles.Text_278_1399}>Story 4</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
            }}
            style={styles.ImageBackground_278_1400}
          />
          <View style={styles.View_278_1401}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
              }}
              style={styles.ImageBackground_278_1402}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c691/31ab/cdd131dd977eb065464885dc3aab53e9"
              }}
              style={styles.ImageBackground_278_1403}
            />
          </View>
        </View>
        <View style={styles.View_278_1404}>
          <View style={styles.View_278_1405}>
            <Text style={styles.Text_278_1405}>Story 5</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
            }}
            style={styles.ImageBackground_278_1406}
          />
          <View style={styles.View_278_1407}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
              }}
              style={styles.ImageBackground_278_1408}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/564b/fec2/70f9ae4d93767dbe5cd100cacda38cfa"
              }}
              style={styles.ImageBackground_278_1409}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_278_1410}>
        <View style={styles.View_278_1411}>
          <View style={styles.View_278_1412}>
            <Text style={styles.Text_278_1412}>Username</Text>
          </View>
          <View style={styles.View_278_1413}>
            <Text style={styles.Text_278_1413}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt #hashtag
            </Text>
          </View>
          <View style={styles.View_278_1414}>
            <Text style={styles.Text_278_1414}>Link goes here</Text>
          </View>
          <View style={styles.View_278_1415}>
            <Text style={styles.Text_278_1415}>
              Followed by username and username
            </Text>
          </View>
        </View>
        <View style={styles.View_278_1416}>
          <View style={styles.View_278_1421}>
            <View style={styles.View_278_1422}>
              <Text style={styles.Text_278_1422}>Message</Text>
            </View>
          </View>
          <View style={styles.View_278_1491}>
            <View style={styles.View_278_1492}>
              <Text style={styles.Text_278_1492}>Following</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad6d/903f/8cd927efa55bd3623fc46448b823f03c"
              }}
              style={styles.ImageBackground_278_1493}
            />
          </View>
          <View style={styles.View_278_1423}>
            <View style={styles.View_278_1424}>
              <Text style={styles.Text_278_1424}>Email</Text>
            </View>
          </View>
          <View style={styles.View_278_1425}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad6d/903f/8cd927efa55bd3623fc46448b823f03c"
              }}
              style={styles.ImageBackground_278_1426}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_278_1819}>
        <View style={styles.View_278_1820}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2010/7d2a/bd8ce15feaf2ae5758ba6f73669d0ccc"
            }}
            style={styles.ImageBackground_278_1821}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1152/9052/39bd981d4686a6df7ae0be5bd5b907b0"
            }}
            style={styles.ImageBackground_278_1822}
          />
        </View>
        <View style={styles.View_278_1823}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9291/5109/a09c61a2738673fc0964a89609c3ed74"
            }}
            style={styles.ImageBackground_278_1824}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6f3/c692/20b01dc94df60a4f98db1d04c3e03ad5"
            }}
            style={styles.ImageBackground_278_1825}
          />
        </View>
        <View style={styles.View_278_1831}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9291/5109/a09c61a2738673fc0964a89609c3ed74"
            }}
            style={styles.ImageBackground_278_1832}
          />
          <View style={styles.View_278_1833}>
            <View style={styles.View_278_1834} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4211/de12/8d604adb1f7060ebe294d666bb20745e"
              }}
              style={styles.ImageBackground_278_1835}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6188/f1df/63f9d6f2329b38e6c9cd1c43b320f2d4"
              }}
              style={styles.ImageBackground_278_1836}
            />
          </View>
        </View>
        <View style={styles.View_278_1837}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/582f/cffd/e90cf50461a78b9ca0aeede46973e2b3"
            }}
            style={styles.ImageBackground_278_1838}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9291/5109/a09c61a2738673fc0964a89609c3ed74"
            }}
            style={styles.ImageBackground_278_1842}
          />
        </View>
      </View>
      <View style={styles.View_279_673}>
        <View style={styles.View_279_674}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96f4/d3e8/6035d4c5950756e22d9c654f6a9f6a40"
            }}
            style={styles.ImageBackground_279_675}
          />
          <View style={styles.View_279_676}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f8e/deb0/a79f2111ee839d37bba8ed9e088afc3f"
              }}
              style={styles.ImageBackground_279_677}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fc/3b7b/98a2874679a82ef5f943b09c031dd682"
              }}
              style={styles.ImageBackground_279_678}
            />
          </View>
        </View>
        <View style={styles.View_279_679}>
          <Text style={styles.Text_279_679}>0,000</Text>
        </View>
        <View style={styles.View_279_680}>
          <Text style={styles.Text_279_680}>0,000</Text>
        </View>
        <View style={styles.View_279_681}>
          <Text style={styles.Text_279_681}>0,000</Text>
        </View>
        <View style={styles.View_279_682}>
          <Text style={styles.Text_279_682}>Posts</Text>
        </View>
        <View style={styles.View_279_683}>
          <Text style={styles.Text_279_683}>Followers</Text>
        </View>
        <View style={styles.View_279_684}>
          <Text style={styles.Text_279_684}>Following</Text>
        </View>
      </View>
      <View style={styles.View_278_1440}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05b9/413e/3aa06023371a2724121fd2ffcf3d6cd3"
          }}
          style={styles.ImageBackground_278_1441}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfd6/d82e/27a3170f6dc3f21770c73b6290ce0fee"
          }}
          style={styles.ImageBackground_278_1442}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7082/63eb/84b7e74d5bb2a42c41a21fa42d913bd6"
          }}
          style={styles.ImageBackground_278_1444}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f0/bcb4/ecf8c6e91d673a9b86770ebdd3a0c2df"
          }}
          style={styles.ImageBackground_278_1450}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb8e/5a4e/f72aac15ba6f77df079d2a86287bf8d9"
          }}
          style={styles.ImageBackground_278_1454}
        />
        <View style={styles.View_278_1456}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/408f/0f54/95b65a7db60497214c2bdf1e7289e8ca"
            }}
            style={styles.ImageBackground_278_1457}
          />
          <View style={styles.View_278_1458}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cfe/0013/295987d46ad9fe8458041d478a18c9a0"
              }}
              style={styles.ImageBackground_278_1459}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a46/6845/2d27784e7d115377306e1204ce0242a6"
              }}
              style={styles.ImageBackground_278_1460}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_278_1461}>
        <View style={styles.View_278_1462}>
          <View style={styles.View_278_1463} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_278_1464}
          />
          <View style={styles.View_278_1465} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ae/1e0b/4731e12bfefcb531c8633d285348e403"
          }}
          style={styles.ImageBackground_278_1466}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_278_1470}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b350/590a/12424c812875b64bdc194585840c74dc"
          }}
          style={styles.ImageBackground_278_1475}
        />
        <View style={styles.View_278_1909}>
          <View style={styles.View_278_1910}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed8a/ad17/03cf3fc166a5bc15641f26989f9dcdcf"
              }}
              style={styles.ImageBackground_278_1911}
            />
          </View>
          <View style={styles.View_278_1915}>
            <Text style={styles.Text_278_1915}>username</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0546/e0e8/384daac273b4b58499f4355d157e5bad"
            }}
            style={styles.ImageBackground_278_1916}
          />
          <View style={styles.View_278_1918}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb70/af7a/e096e6a588fb6195c352d34525cc4d2e"
              }}
              style={styles.ImageBackground_278_1919}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5d/e42c/7085ce6f0afbf2ffc407a55fff482ba8"
              }}
              style={styles.ImageBackground_278_1922}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/ae31/3546677126368da2335b65446c9c4e6a"
              }}
              style={styles.ImageBackground_278_1923}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_278_1490} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_278_1322: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("84.97267759562843%"),
    minHeight: hp("84.97267759562843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61.885245901639344%")
  },
  View_278_1323: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.07045858414449%")
  },
  View_278_1324: {
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
  ImageBackground_278_1325: {
    width: wp("35.99740804036458%"),
    height: hp("27.481760744188655%"),
    top: hp("-5.289771908619372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0144449869791667%"),
    resizeMode: "cover"
  },
  View_278_1326: {
    width: wp("2.833656819661458%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.465926106770834%")
  },
  View_278_1327: {
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
  ImageBackground_278_1328: {
    width: wp("2.1496765136718747%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.298471919825829%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6839762369791664%")
  },
  View_278_1329: {
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
  ImageBackground_278_1330: {
    width: wp("33.93777872721354%"),
    height: hp("24.0387129653347%"),
    top: hp("-7.136493953850774%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.8607421875000014%"),
    resizeMode: "cover"
  },
  View_278_1331: {
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
  ImageBackground_278_1332: {
    width: wp("36.765926106770834%"),
    height: hp("28.045166515913166%"),
    top: hp("-5.571475836748647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.1681477864583343%"),
    resizeMode: "cover"
  },
  View_278_1333: {
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
  View_278_1334: {
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
  ImageBackground_278_1335: {
    width: wp("54.318888346354164%"),
    height: hp("20.78347127945697%"),
    top: hp("-1.9406261339865125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.544075520833335%"),
    resizeMode: "cover"
  },
  View_278_1336: {
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
  ImageBackground_278_1337: {
    width: wp("51.89037272135417%"),
    height: hp("17.60647883180712%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9.345182291666667%"),
    resizeMode: "cover"
  },
  View_278_1338: {
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
  ImageBackground_278_1339: {
    width: wp("49.73851725260416%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.2403645833333385%"),
    resizeMode: "cover"
  },
  View_278_1340: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.04878710137039%")
  },
  View_278_1341: {
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
  ImageBackground_278_1342: {
    width: wp("33.2%"),
    height: hp("25.35333268629397%"),
    top: hp("-7.574696358435787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1343: {
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
  ImageBackground_278_1344: {
    width: wp("53.98074137369792%"),
    height: hp("18.310738652130294%"),
    top: hp("-1.4085196406463467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.594816080729167%"),
    resizeMode: "cover"
  },
  View_278_1345: {
    width: wp("2.833656819661458%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.46591796875%")
  },
  View_278_1346: {
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
  ImageBackground_278_1347: {
    width: wp("2.1496765136718747%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.298463581689731%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6839843750000014%")
  },
  View_278_1348: {
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
  ImageBackground_278_1349: {
    width: wp("33.2%"),
    height: hp("25.35333268629397%"),
    top: hp("-4.0690521073471615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1350: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.024389381617148%")
  },
  View_278_1351: {
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
  ImageBackground_278_1352: {
    width: wp("36.673701985677084%"),
    height: hp("28.029515834453978%"),
    top: hp("-11.12729265390199%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.7522216796875%"),
    resizeMode: "cover"
  },
  View_278_1353: {
    width: wp("2.833656819661458%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.465926106770834%")
  },
  View_278_1354: {
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
  ImageBackground_278_1355: {
    width: wp("2.1496765136718747%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.29846358168971676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6839762369791664%")
  },
  View_278_1356: {
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
  ImageBackground_278_1357: {
    width: wp("32.86185302734375%"),
    height: hp("25.400280561603484%"),
    top: hp("-2.6292311037824447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15370279947916288%"),
    resizeMode: "cover"
  },
  View_278_1358: {
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
  ImageBackground_278_1359: {
    width: wp("48.41666666666667%"),
    height: hp("32.74022920535562%"),
    top: hp("-0.7512076956326865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.31814778645834%"),
    resizeMode: "cover"
  },
  View_278_1360: {
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
  View_278_1361: {
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
  ImageBackground_278_1362: {
    width: wp("35.567036946614586%"),
    height: hp("27.168757537675038%"),
    top: hp("-3.7560509853675654%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.1988850911458333%"),
    resizeMode: "cover"
  },
  View_278_1363: {
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
  ImageBackground_278_1364: {
    width: wp("33.78407389322916%"),
    height: hp("25.791537175413037%"),
    top: hp("-1.5650181171021131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.30740559895833286%"),
    resizeMode: "cover"
  },
  View_278_1365: {
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
  ImageBackground_278_1366: {
    width: wp("49.03148193359375%"),
    height: hp("37.43528772573002%"),
    top: hp("-9.139718644605956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.56591796875%"),
    resizeMode: "cover"
  },
  View_278_1367: {
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
  View_278_1368: {
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
  ImageBackground_278_1369: {
    width: wp("2.1496765136718747%"),
    height: hp("1.0944005570125057%"),
    top: hp("0.29846358168972387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6839843750000085%")
  },
  View_278_1379: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("44.12568306010929%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1380: {
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
  View_278_1381: {
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
  Text_278_1381: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1382: {
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
  View_278_1383: {
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
  ImageBackground_278_1384: {
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
  ImageBackground_278_1385: {
    width: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1386: {
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
  View_278_1387: {
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
  Text_278_1387: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1388: {
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
  View_278_1389: {
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
  ImageBackground_278_1390: {
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
  ImageBackground_278_1391: {
    width: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1392: {
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
  View_278_1393: {
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
  Text_278_1393: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1394: {
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
  View_278_1395: {
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
  ImageBackground_278_1396: {
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
  ImageBackground_278_1397: {
    width: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1398: {
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
  View_278_1399: {
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
  Text_278_1399: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1400: {
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
  View_278_1401: {
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
  ImageBackground_278_1402: {
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
  ImageBackground_278_1403: {
    width: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1404: {
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
  View_278_1405: {
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
  Text_278_1405: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1406: {
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
  View_278_1407: {
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
  ImageBackground_278_1408: {
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
  ImageBackground_278_1409: {
    width: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1410: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("17.89617486338798%"),
    minHeight: hp("17.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("25.273224043715846%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_1411: {
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
  View_278_1412: {
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
  Text_278_1412: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_1413: {
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
  Text_278_1413: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_1414: {
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
  Text_278_1414: {
    color: "rgba(0, 76, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_1415: {
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
  Text_278_1415: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_1416: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.797814207650273%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1421: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_1422: {
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
  Text_278_1422: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_1491: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_1492: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666677%"),
    top: hp("0.9562841530054627%"),
    justifyContent: "flex-start"
  },
  Text_278_1492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1493: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.9562841530054627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333334%")
  },
  View_278_1423: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_1424: {
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
  Text_278_1424: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_1425: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_278_1426: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.9562841530054627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%")
  },
  View_278_1819: {
    width: wp("100.26666666666667%"),
    height: hp("5.737704918032787%"),
    top: hp("56.14754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    backgroundColor: "rgba(239, 172, 89, 1)"
  },
  View_278_1820: {
    width: wp("25.066666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1821: {
    width: wp("4.317460123697916%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.4%"),
    top: hp("1.775956284152997%")
  },
  ImageBackground_278_1822: {
    width: wp("25.066666666666666%"),
    height: hp("0%"),
    top: hp("5.737704918032783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_1823: {
    width: wp("25.333333333333336%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1824: {
    width: wp("25.066666666666666%"),
    height: hp("0%"),
    top: hp("5.737704918032783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%")
  },
  ImageBackground_278_1825: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.86666666666667%")
  },
  View_278_1831: {
    width: wp("24.8%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.4%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1832: {
    width: wp("25.066666666666666%"),
    height: hp("0%"),
    top: hp("5.737704918032783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_1833: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600000000000009%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1834: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666586%"),
    top: hp("0.4098360655737707%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.7999999523162842
  },
  ImageBackground_278_1835: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0133300781249943%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_278_1836: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%"),
    top: hp("1.3661202185792334%")
  },
  View_278_1837: {
    width: wp("25.066666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.19999999999999%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1838: {
    width: wp("5.059600321451823%"),
    height: hp("2.7179259420092636%"),
    minHeight: hp("2.7179259420092636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.13336588541668%"),
    top: hp("1.5027489167093577%")
  },
  ImageBackground_278_1842: {
    width: wp("25.066666666666666%"),
    height: hp("0%"),
    top: hp("5.737704918032783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_279_673: {
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
  View_279_674: {
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
  ImageBackground_279_675: {
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
  View_279_676: {
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
  ImageBackground_279_677: {
    width: wp("20.739666748046876%"),
    height: hp("10.624829276663359%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_279_678: {
    width: wp("20.739666748046876%"),
    height: hp("10.624829276663359%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_279_679: {
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
  Text_279_679: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_680: {
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
  Text_279_680: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_681: {
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
  Text_279_681: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_682: {
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
  Text_279_682: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_683: {
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
  Text_279_683: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_684: {
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
  Text_279_684: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_1440: {
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
  ImageBackground_278_1441: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_1442: {
    width: wp("5.854545593261719%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%")
  },
  ImageBackground_278_1444: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.53333333333333%")
  },
  ImageBackground_278_1450: {
    width: wp("4.821315002441406%"),
    height: hp("2.991804789975693%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.53333333333333%")
  },
  ImageBackground_278_1454: {
    width: wp("5.6052495320638025%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53333333333333%")
  },
  View_278_1456: {
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
  ImageBackground_278_1457: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_1458: {
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
  ImageBackground_278_1459: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_1460: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1461: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_1462: {
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
  View_278_1463: {
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
  ImageBackground_278_1464: {
    width: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5009103993900488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%")
  },
  View_278_1465: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.27322404371584685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.44446614583333144%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_278_1466: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675783084389943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_278_1470: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.41347974766799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  ImageBackground_278_1475: {
    width: wp("7.628312174479166%"),
    height: hp("1.5148725665983607%"),
    top: hp("2.34528421704235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.85693359375%")
  },
  View_278_1909: {
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
  View_278_1910: {
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
  ImageBackground_278_1911: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.9562841530054653%")
  },
  View_278_1915: {
    width: wp("22.400000000000002%"),
    top: hp("1.502732240437159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    justifyContent: "flex-start"
  },
  Text_278_1915: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1916: {
    width: wp("6.400000508626302%"),
    height: hp("3.278688785156917%"),
    top: hp("1.3661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_278_1918: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.3661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_278_1919: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4000000000000057%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_278_1922: {
    width: wp("1.6%"),
    minWidth: wp("1.6%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("3.005464480874317%")
  },
  ImageBackground_278_1923: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0%")
  },
  View_278_1490: {
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
