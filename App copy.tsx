// import {StyleSheet} from 'react-native';

// import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//   container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// backgroundColor: '#F5FCFF'
//   },
//   text: {
// fontSize: 20,
// textAlign: 'center',
// margin: 10,
//   },
// });


// import React from 'react';
// import {Text, View} from 'react-native';

// export default function App() {
// return(
// <View style={styles.container}>
//   <Text style={styles.text}>My first conpornent</Text>
// </View>
// );
// }


// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';


// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// },
// common: {
// fontSize: 14,
// textAlign: 'center',
// },
// strong: {
// color: 'red',
// fontSize: 20,
// fontWeight: 'bold',
// },
// });


// export default function CascadedStyleComponent() {
//   return(
// <View style={styles.container}>
// <Text style={styles.common}>common only</Text>
// <Text style={styles.strong}>strong only</Text>
// <Text style={[styles.common, styles.strong]}>common & strong</Text>
// </View>
//   );
// }




// import React from 'react';
// import {Text, View, ViewStyle} from 'react-native';

// export default function App() {
// const containerStyle: ViewStyle = {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// };
// return(
// <View style={containerStyle}>
// <Text>Hello</Text>
// </View>
// );
// }


// import React from 'react';
// import {StyleSheet, View} from 'react-native';

// const style =StyleSheet.create({
// box1: {
// // flex: 1,
// backgroundColor: 'red',
// },
// });

// export default function App() {
// return <View style={style.box1}></View>
// }


// import React from 'react';
// import {StyleSheet, View} from 'react-native';

// const styles = StyleSheet.create({
// box1: {
// flex: 1,
// backgroundColor: 'red',
// },
// box2: {
// flex: 1,
// backgroundColor: 'blue',
// },
// });

// export default function App() {
// return(
// <>
// <View style={styles.box1} />
// <View style={styles.box2} />
// </>
// );
// }


// import React from 'react';
// import {StyleSheet, View} from 'react-native';

// const styles = StyleSheet.create({
// box1: {
// flex: 3,
// backgroundColor: 'red',
// },
// box2: {
//   flex: 1,
//   backgroundColor: 'blue',
// },
// });

// export default function App() {
// return(
// <>
// <View style={styles.box1}></View>
// <View style={styles.box2}></View>
// </>
// );
// }


// import React from 'react';
// import {StyleSheet, View} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// flexDirection: 'row',
// },
// box1: {
// flex: 3,
// backgroundColor: 'red',
// },
// box2: {
//   flex: 1,
//   backgroundColor: 'blue',
// },
// });

// export default function App() {
// return(
// <View style={styles.container}>
//   <View style={styles.box1}></View>
//   <View style={styles.box2}></View>
// </View>
// );
// }


// import React from 'react';
// import {StyleSheet, View} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// // justifyContent: 'space-evenly',
// alignItems: 'stretch',
// },
// box: {
// // width: 100,
// height: 100,
// borderWidth: 1,
// backgroundColor: 'blue',
// },
// });

// export default function App() {
// return(
// <View style={styles.container}>
//   <View style={styles.box}></View>
//   <View style={styles.box}></View>
//   <View style={styles.box}></View>
// </View>
// );
// }


// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// const styles = StyleSheet.create({
//   container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
//   },
//   texts: {
// flexDirection: 'row',
// alignItems: 'baseline',
//   },
//   text1: {
// fontSize: 16,
//   },
// text2: {
//   fontSize: 32,
// },
// text3: {
//   fontSize: 16,
// },
// });

// export default function App() {
// return(
// <View style={styles.container}>
// <View style={styles.texts}>
// <Text style={styles.text1}>tax</Text>
// <Text style={styles.text2}>10</Text>
// <Text style={styles.text3}>%</Text>
// </View>
// </View>
// );
// }


// import React from 'react';
// import {Text, View} from 'react-native';

// interface Props {
// color: string;
// children: ReactNode;
// label: string;
// }

// function MyCompornent(props: Props) {
// const{color, children, label} = props;

// return(
// <View>
// <Text style={{color}}>{label}</Text>
// {children}
// </View>
// );
// }

// export default function App() {
// return(
// <MyCompornent color='red' label='new'>
//   <Text>Hello</Text>
// </MyCompornent>
// );
// }



// import React from 'react';
// import {StyleSheet, Text, ViewStyle} from 'react-native';

// interface Props {
// children: React.ReactNode;
// style: ViewStyle;
// onPress: () => void;
// }

// function ChildCompornent(props: Props) {
// const {children, style, onPress} = props;

// return(
//   <Text style={style} onPress={onPress}>
//   {children}
//   </Text>
// );
// }

// const styles = StyleSheet.create({
// button: {
// borderWidth: 1,
// // color: 'red',
// },
// });

// export default function App() {
// return(
// <ChildCompornent onPress={() => {console.log('Hello')}} style={styles.button}>
// Press Me!
// </ChildCompornent>
// );
// }


// import React from 'react';
// import {Text, StyleSheet} from 'react-native';

// const styles = StyleSheet.create({
// label: {
// marginTop: 100,
// padding: 8,
// fontSize: 24,
// },
// });

// interface Props {
// backgroundColor: string;
// color: string;
// label: string;
// }

// export default function CustomLabel(props: Props) {
// const {backgroundColor, color, label} = props;

// return <Text style={[styles.label, {backgroundColor, color}]}>{label}</Text>;
// }

// CustomLabel.defaultProps = {
// backgroundColor: '#008080',
// color: 'white',
// label: 'hello',
// };


// import React from 'react';
// import {StyleSheet, Text} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// marginTop: 100,
// },
// });

// export default function App() {
// const [state, setState] = React.useState(true);

// return(
// <Text style={styles.container}
//      onPress={() => {
//       setState(!state);
//      }}
//      >
//        state is {state.toString()}
//      </Text>
// );
// }


// import React from 'react';
// import {Alert, StyleSheet, Text, View} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// label: {
// fontSize: 32,
// },
// });

// export default function App() {
// const [count1, setCount1] = React.useState(0);
// const [count2, setCount2] = React.useState(0);

// React.useEffect(() => {
// Alert.alert(`count1 is incremented.`);
// }, [count1]);

// React.useEffect(() => {
// Alert.alert(`count1 or count2 is incremented.`);
// }, [count1, count2]);

// React.useEffect(() => {
// Alert.alert(`initial rendering is complated.`);
// }, []);

// return(
// <View style={styles.container}>
//   <Text
//   onPress={() => {
//     setCount1(count1 + 1);
//   }}
//   style={styles.label}>
//   {count1}
//   </Text>
//   <Text
//   onPress={() => {
//     setCount2(count2 + 1);
//   }}
//   style={styles.label}>
//   {count2}
//   </Text>
// </View>
// );
// }


// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// });

// function A() {
// React.useEffect(() => {
// console.log('A effct');
// return() => {
//   console.log('A cleanup');
// }
// })
// return <Text>A</Text>;
// }

// function B() {
// React.useEffect(() => {
// console.log('B effect');
// return () => {
// console.log('B cleanup');
// }
// })
// return <Text>B</Text>;
// }

// export default function App() {
// const [needsToShowA, setNeedsToShowA] = React.useState(true);

// return(
// <View style={styles.container}>
// <Text onPress={() => {
// setNeedsToShowA(!needsToShowA);
// }}
// >
//   切り替え
// </Text>
// {needsToShowA ? <A/> : <B/>}
// </View>
// );
// }


// import React from 'react';
// import {openWebRtc, closeWebRtc} from 'some-webrtc-library';

// interface Props {
// id: string;
// }

// export default function MyCompornent(props: Props) {
// React.useEffect(() => {
// openWebRtc(props.id);
// return() => {
// closeWebRt(props.id);
// }
// }, [props.id]);

// return(

// )
// }


// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// const lightTheme = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// backgroundColor: 'white',
// color: 'black',
// },
// label: {
// backgroundColor: 'white',
// color: 'black',
// },
// });

// const darkTheme = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// backgroundColor: 'black',
// color: 'white',
// },
// label: {
// backgroundColor: 'black',
// color: 'white',
// },
// });

// type Theme = typeof lightTheme | typeof darkTheme;
// interface Context {
// theme: Theme;
// setTheme: (newTheme: Theme) => void;
// }

// const ThemeContext = React.createContext<Context>({
// theme: lightTheme,
// setTheme: (_: typeof lightTheme | typeof darkTheme) => {},
// });

// export default function App() {
// const [theme, setTheme] = React.useState(lightTheme);

// return(
// <ThemeContext.Provider value={{theme, setTheme}}>
// <View style={theme.container}>
//   <Text
//   onPress = {() => {
// setTheme(theme === lightTheme ? darkTheme : lightTheme);
//   }}
//   style={theme.label}>
//     切り替え
//   </Text>
// <Profile name="januswel" />
// </View>
// </ThemeContext.Provider>
// );
// }

// interface Props {
// name: string;
// }

// function Profile(props: Props) {
// const {theme} = React.useContext(ThemeContext)
// return <Text style={theme.label}>{props.name}</Text>
// }



// import React from 'react';
// import {Text, TextInput, View, StyleSheet} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// input: {
// width: 160,
// height: 32,
// borderWidth: 1,
// padding: 4,
// },
// });

// export default function App() {
// const ref = React.useRef<TextInput>(null);

// return(
//   <View style={styles.container}>
//     <TextInput ref={ref} style={styles.input} />
//     <Text
//     onPress={() => {
// ref?.current?.focus();
//     }}>
//       focus
//     </Text>
//   </View>
// );
// }


// import React from 'react';
// import {StyleSheet, View, Text} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// backgroundColor: 'red',
// },
// txt: {
// color: 'black',
// },
// });

// export default function App() {
//   return(
//     <View style={styles.container}>
//       <Text style={styles.txt}>一行目</Text>
//       <Text styles={styles.txt}>二行目</Text>
//     </View>
//   );
// }


// import React from 'react';
// import {StyleSheet, View, Text} from 'react-native';

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   justifyContent: 'space-evenly',
//   alignItems: 'center',
//   backgroundColor: 'gray',
// },
// txt: {
//   fontSize: 46,
//   fontWeight: 'bold',
//   color: 'white',
// },
// });

// export default function App() {
// return(
// <View style={styles.container}>
// <Text style={styles.txt}>一行目</Text>
// <Text style={styles.txt}>二行目</Text>
// </View>
// );
// }


// import React from 'react';
// import {StyleSheet, View, Text} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'space-evenly',
// alignItems: 'center',
// },
// })

// export default function App() {
// return(
//   <View style={styles.container}>
//     <Text>エラーとならない文字列</Text>
//   </View>
// );
// }


// import React from 'react';
// import {View, Text} from 'react-native';

// interface Props {
//   name: string;
// }

// export default function MyCompornent(props: Props) {

// return <View>{!!props.name && <Text>{props.name}</Text>}</View>;
// }


// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// base: {
//   fontSize: 24,
// },
// bold: {
//   fontWeight: 'bold',
// },
// red: {
// color: 'red',
// },
// });

// export default function App() {
// return(
// <View style={styles.container}>
//   <Text style={styles.base}>
//     一部だけ<Text style={styles.bold}>太さ
//     や<Text style={styles.red}>色</Text>
//     </Text>
//     を変えられます。
//   </Text>
// </View>
// )
// }

// export default function App() {
//   return(
//     <View style={styles.container}>

//         <Text>最初の一行目</Text>
//         <Text>改行したい二行目</Text>

//     </View>
//   );
// }


// import React from 'react';
// import {StyleSheet, View, Image} from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// console.warn(PixcelRatio.get());

// export default function App() {
//   return(
//     <View style={styles.container}>
//     <Image source={require('./logo.png')}/>
//   </View>
//     );
// }

// export default function App() {
// return(
// <View style={styles.container}>
//   <Image source={{uri: 'logo'}} style={{width: 300, height: 300}}/>
// </View>
// );
// }


// import React from 'react';
// import {ImageBackground, StyleSheet, Text, View} from 'react-native';

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// image: {
// justifyContent: 'center',
// alignItems: 'center',
// width: 400,
// height: 400,
// },
// label: {
// color: 'blue',
// fontSize: 64,
// },
// });

// export default function App() {
// return(
// <View style={styles.container}>
//   <ImageBackground source={require('./logo.png')} style={styles.image}>
//     <Text style={styles.label}>React Native</Text>
//   </ImageBackground>
// </View>
// );
// }


// import React from 'react';
// import {StyleSheet, Text} from 'react-native';

// const styles = StyleSheet.create({
//   block: {
// width: 414,
// height: 400,
//   },
// });

// export default function App() {
// return(
// <>
// <Text style={[styles.block, {backgroundColor: 'red'}]}>RED</Text>
// <Text style={[styles.block, {backgroundColor: 'green'}]}>GREEN</Text>
// <Text style={[styles.block, {backgroundColor: 'blue'}]}>BLUE</Text>
// <Text style={[styles.block, {backgroundColor: 'yellow'}]}>YELLOW</Text>
// </>
// );
// }


// import React from 'react';
// import {StyleSheet, ScrollView, Text} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// margin: 32,
//   },
// block: {
// width: '100%',
// height: 400,
// },
// });

// export default function App() {
// return(
// <ScrollView contentContainerStyle={styles.container}>
// <Text style={[styles.block, {backgroundColor: 'red'}, {color: 'white'}]}>RED</Text>
// <Text style={[styles.block, {backgroundColor: 'blue'}]}>BLUE</Text>
// <Text style={[styles.block, {backgroundColor: 'green'}]}>GREEN</Text>
// <Text style={[styles.block, {backgroundColor: 'yellow'}]}>YELLOW</Text>
// </ScrollView>
// );
// }


// import React from 'react';
// import {ScrollView, StyleSheet, Text} from 'react-native';

// const styles = StyleSheet.create({
// container: {
//   // marginTop: 46,
//   flex: 1,
//   // justifyContent: 'center',
//   alignItems: 'center',
// },
// label: {
//   paddingTop: 46,
//   // marginTop: 46,
// height: 400,
// },
// });

// const data = [
// {id: 'first', title: 'ひとつ目'},
// {id: 'second', title: 'ふたつ目'},
// {id: 'third', title: 'みっつ目'},
// ];

// export default function App() {
// return(
// <ScrollView contentContainerStyle={styles.container}>
//   {data.map(item => (
//   <Text style={styles.label}>{item.title}</Text>
//   ))}
// </ScrollView>
// );
// }


// import React from 'react';
// import {FlatList, StyleSheet, Text} from 'react-native';

// const styles = StyleSheet.create({
// label: {
// height: 400,
// },
// });

// const data = [
// {id: 'first', title: 'ひとつ目'},
// {id: 'second', title: 'ふたつ目'},
// {id: 'third', title: 'みっつ目'},
// ];


// export default function App() {
// return <FlatList data={data} renderItem={({item}) => <Text style={styles.label}>{item.title}</Text>}/>;
// }



// import React from 'react';
// import {FlatList, StyleSheet, Text, View} from 'react-native';

// const styles = StyleSheet.create({
// label: {
//   paddingTop: 100,
//   height: 400,
// },
// separator: {
// height: 1,
// backgroundColor: 'gray',
// },
// });

// const data = [
//   {id: 'first', title: 'ひとつ目'},
//   {id: 'second', title: 'ふたつ目'},
//   {id: 'third', title: 'みっつ目'},
// ];

// export default function App() {
// return(
// <FlatList data={data} renderItem={({item}) => <Text style={styles.label}>{item.title}</Text>}
// ItemSeparatorComponent= {() => <View style={styles.separator}/>}
// />
// );
// }


// import React from 'react';
// import {FlatList, StyleSheet, Text, View} from 'react-native';

// const styles = StyleSheet.create({
// label: {
// height: 400,
// color: 'white',
// },
// separator: {
// height: 4.6,
// backgroundColor: 'black',
// fontWeight: 'bold',
// },
// container: {
//   backgroundColor: 'gray',
// },
// header: {
//   backgroundColor: 'black',
//   height: 120,
//   color: 'white',
//   fontSize: 46,
//   flex: 1,
//   textAlign: 'center',
//   paddingTop: 46,
// },
// footer: {
//   backgroundColor: 'blue',
//   height: 100,
// },
// });

// const data = [
//   {id: 'first', title: 'ひとつ目'},
//   {id: 'second', title: 'ふたつ目'},
//   {id: 'third', title: 'みっつ目'},
// ];

// // export default function App() {
// // return(
// // <FlatList
// // data={data}
// // renderItem={({item}) => <Text style={styles.label}>{item.title}</Text>}
// // ItemSeparatorComponent= {() => <View style={styles.separator}/>}
// // />
// // );
// // }


// export default function App() {
// return(
//   <FlatList
//   style={styles.container}
//   data={data}
//   renderItem={({item}) => <Text style={styles.label}>{item.title}</Text>}
//   ListHeaderComponent={() => <Text style={styles.header}>Nogizaka46</Text>}
//   ListFooterComponent={() => <Text style={styles.footer}>フッター</Text>}
//   ItemSeparatorComponent={() => <View style={styles.separator}/>}
//   />
// );
// }



// import React from 'react';
// import {FlatList, StyleSheet, Text, View} from 'react-native';

// const styles = StyleSheet.create({
// container: {
//   marginTop: 44,
// },
// label: {
// width: 200,
// textAlign: 'center',
// },
// separator: {
//   width: 3,
//   backgroundColor: 'black',
// },
// });

// const data = [
//   {id: 'first', title: 'ひとつ目'},
//   {id: 'scond', title: 'ふたつ目'},
//   {id: 'third', title: 'みっつ目'},
// ];

// export default function App() {
// return(
//   <FlatList
//   style={styles.container}
//   data={data}
// renderItem={({item}) => <Text style={styles.label}>{item.title}</Text>}
// horizontal

// ItemSeparatorComponent={() => <View style={styles.separator}/>}
// />
// );
// }


// import React from 'react';
// import {FlatList, StyleSheet, Text, View} from 'react-native';

// const styles = StyleSheet.create({
// container: {
//   marginTop: 44,
// },
// label: {
// width: 207,
// height: 200,
// },
// separator: {
//   width: 1,
//   height: 1,
//   backgroundColor: 'black',
// },
// });

// const data = [
//   {id: 'first', title: 'ひとつ目'},
//   {id: 'second', title: 'ふたつ目'},
//   {id: 'third', title: 'みっつ目'},
// ];

// export default function App() {
// return(
// <FlatList
// style={styles.container}
// data={data}
// renderItem={({item}) => <Text style={styles.label}>{item.title}</Text>}
// numColumns={2}
// ItemSeparatorComponent={() => <View style={styles.separator}/>}
// />
// );
// }



// import React from 'react';
// import {FlatList, StyleSheet, Text} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// marginTop: 44,
// },
// label: {
//   height: 400,
// },
// });

// const data = [
// {id: 'first', title: 'ひとつ目'},
// {id: 'second', title: 'ふたつ目'},
// {id: 'third', title: 'みっつ目'},
// ];

// export default function App() {
// const [refreshing, setRefreshing] =React.useState(false)
// const onRefresh = React.useCallback(() => {
// try {
//   setRefreshing(true)
//   setTimeout(() => {
//     data.unshift({
//       id: new Data().getTime().toString(),
//       title: 'foo',
//     });
//   }, 200);
// } finally {
//   setRefreshing(false);
// }
// }, []);

// return(
//   <FlatList
//   style={styles.container}
//   data={data}
// renderItem={({item}) => <Text style={styles.label}>{item.title}</Text>}
// refreshing={refreshing}
// onRefresh={onRefresh}
// />
// );
// }


// import React from 'react';
// import {FlatList, StyleSheet, Text} from 'react-native';

// const styles = StyleSheet.create({
//   container: {
// marginTop: 44,
//   },
//   label: {
//     height: 400,
//   },
// });

// const data = [
// {id: 'first', title: 'ひとつ目'},
// {id: 'second', title: 'ふたつ目'},
// {id: 'third', title: 'みっつ目'},
// ];

// export default function App() {
// const onEndReached = React.useCallback(() => {
// setTimeout(() => {
// data.push({
//   id: new Data().getTime().toString(),
//   title: 'foo',
// });
// }, 200);
// }, []);

// return(
//   <FlatList
//   style={styles.container}
//   data={data}
// renderItem={({item}) => <Text style={styles.label}>{item.title}</Text>}
// onEndReached={onEndReached}
// />
// );
// }



// import React from 'react';
// import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// const styles = StyleSheet.create({
// container: {
//   marginTop: 44,
// },
// label: {
//   height:400,
// },
// });

// interface Item {
//   id: string;
//   title: string;
// }

// const data = [
//   {id: 'first', title: 'ひとつ目'},
//   {id: 'second', title: 'ふたつ目'},
//   {id: 'third', title: 'みっつ目'},
//   {id: 'fourth', title: 'よっつ目'},
//   {id: 'fifth', title: 'いつつ目'},
//   {id: 'sixth', title: 'むっつ目'},
//   {id: 'seventh', title: 'ななつ目'},
// ];

// export default function App() {
//   const list = React.useRef<FlatList<Item>>(null);
//   const scrollToThird = React.useCallback(() => {
//     list?.current?.scrollToIndex({index: 2});
//   }, [list]);

//   return(
//     <View style={styles.container}>
//   <TouchableOpacity onPress={scrollToThird}>
//     <Text>Scroll to Third</Text>
//   </TouchableOpacity>
// <FlatList ref={list} data={data} renderItem={({item}) => <Text style={styles.label}>{item.title}</Text>}/>
// </View>
// );
// }



// import React from 'react';
// import {SectionList, StyleSheet, Text, View, BackHandler} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// marginTop: 44,
// },
// label: {
// color: 'black',
// backgroundColor: 'white',
// },
// sectionHeader: {
// color: 'white',
// backgroundColor: 'black',
// },
// });


// const sections = [
// {title: 'basic', data:['View','Text', 'Image']},
// {title: 'list', data:['FlatList', 'SectionList']},
// {title: 'interction', data:['Touchable', 'TextInput']},
// ];

// export default function App() {
// return(
// <SectionList
// style={styles.container}
// sections={sections}
// renderItem={({item}) => <Text style={styles.label}>{item}</Text>}
// keyExtractor={(_,index) => index.toString()}
// renderSectionHeader={({section: {title}}) => <Text style={styles.sectionHeader}>{title}</Text>}
// />
// );
// }


// import React from 'react';
// import {StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// button: {
// backgroundColor: 'red',
// width: 300,
// height: 150,
// justifyContent: 'center',
// alignItems: 'center',
// margin: 8,
// },
// });

// export default function App() {
// return(
// <View style={styles.container}>
//   <TouchableOpacity
//   onPress={() => {
// console.log('TouchableOpacity')
//   }}
//   >
//     <View style={styles.button}>
//       <Text>TouchableOpacity</Text>
//     </View>
//   </TouchableOpacity>
// <TouchableHighlight
// disabled={true}
// onPress={() => {
// console.log('TouchableHighLight')
// }}
// >
//   <View style={styles.button}>
//     <Text>TouchableHighlight</Text>
//   </View>
// </TouchableHighlight>
// </View>
// );
// }


// import React from 'react';
// import {StyleSheet, TextInput, View} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// input: {
// borderWidth: 1,
// width: 256,
// paddingTop: 4,
// },
// });

// export default function App() {
// const [value, setValue] = React.useState('');
// return(
// <View style={styles.container}>
// <TextInput style={styles.input}
// value={value}
// onChangeText={newValue => {
// setValue(newValue)
// }}
// />
// </View>
// );
// }



// import React from 'react';
// import {StatusBar, StyleSheet, View} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// backgroundColor: 'black',
// },
// });

// export default function App() {
// return(
// <View style={styles.container}>
// <StatusBar barStyle='light-content'/>
// </View>
// );
// }



// import React from 'react';
// import {ActivityIndicator, StyleSheet, View} from 'react-native';

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: 'black',
// },
// });

// export default function App() {
// return(
// <View style={styles.container}>
//   <ActivityIndicator size='large' color='yellow'/>
// </View>
// );
// }


// import React from 'react';
// import {StyleSheet, Switch, View} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// });

// export default function App() {
// const [value, setValue] = React.useState(false);
// function onValueChange(newValue: boolean) {
// setValue(newValue)
// };
// return(
//   <View style={styles.container}>
//     <Switch value={value} onValueChange={onValueChange}/>
//   </View>
// );
// }


// import {Alert} from 'react-native';

// Alert.alert('I am a man.');


// import React from 'react';
// import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// });

// export default function App() {
// function onPress() {
// Alert.alert('乃木坂46', 'あなたの推しメンは大園桃子ですか？', [
// {
//   text: 'Of Couse !',
//   onPress: () => {
// console.warn('ok')
//   },
//   style: 'default',
// },
// {
// text: 'Not that',
// onPress: () => {
// console.warn('cencel')
// },
// style: 'cencel',
// },
// ]);
// }
// return (
// <View style={styles.container}>
// <TouchableOpacity onPress={onPress}>
//   <Text>Alert</Text>
// </TouchableOpacity>
// </View>
// );
// }



// import React from 'react';
// import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// });

// function useErrorModelDialog(initialErrors: Array<string>) {
// const [needsToShow, setNeedsToShow] =React.useState(true);
// const [errors, setNeedsToShow] = React.useState(initialErrors);
// React.useEffect(() => {
// if(0 < errors.length && needsToShow) {
// setNeedsToShow(false);
// Alert.alert(errors[0], undefined, [
// {
//   text: 'OK',
//   onPress: () => {
// setErrors(errors.filter((_, index) => index ! == 0))
// setNeedsToShow(true)
//   },
// },
// ]);
// }
// }, [needsToShow, errors])
// function addError(newError: string) {
// setErrors([...errors, newError]);
// }
// return addError;
// }

// export default function App(){
// const addError = userErrorModelDialog(['1st', '2nd', '3rd']);

// return(
// <View style={styles.container}>
// <TouchableOpacity
// onPress = {() => {
// addError('new error');
// }}
// >
// <Text>generate error</Text>
// </TouchableOpacity>
// </View>
// );
// }


// import React from 'react';
// import {Alert, AppState, StyleSheet, Text, View} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// });

// export default function App() {
// const [state, setState] =React.useState<string>(AppState.currentState);
// function setAppState(newState: string) {
// setState(newState)
// if(newState === 'active') {
// Alert.alert('active');
// }
// }
// React.useEffect(() => {
// AppState.addEventListener('change', setAppState);
// return() => {
// AppState.removeEventListener('change', setAppState);
// }
// },[]);

// return(
//   <View style={styles.container}>
// <Text>{state}</Text>
// </View>
// );
// }



// import React from 'react';
// import {Dimensions, ScaledSize, StyleSheet, Text, View} from 'react-native';


// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// });

// interface NewSizes {
//   window: ScaledSize;
//   screen: ScaledSize;
// }

// export default function App() {
// const [windowSize, setWindowSize] = React.useState(Dimensions.get('window'));
// const [screenSize, setScreenSize] = React.useState(Dimensions.get('screen'));

// function setSize(newSizes: NewSizes) {
// setWindowSize(newSizes.window);
// setScreenSize(newSizes.screen);
// }
// React.useEffect(() => {
// Dimensions.addEventListener('change', setSize);
// return() => {
// Dimensions.removeEventListener('change', setSize);
// };
// });

// return(
// <View style={styles.container}>
// <Text>
//   Window ({windowSize.width}, {windowSize.height})
// </Text>
// <Text>
// Screen ({screenSize.width}, {screenSize.height})
// </Text>
// </View>
// );
// }


// import React from 'react';
// import {Alert, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// });

// export default function App() {
// const onPress = React.useCallback(async() => {
// try {
// const URl = 'https://example.com';
// const isSupported =await Linking.canOpenURL(URl);
// if(!isSupported) {
// Alert.alert('can not handle: ${URL}');
// return;
// }
// Linking.openURL(URl);
// } catch(e) {
//   Alert.alert('unknown error: ${e.message}');
// }
// }, []);
// return(
// <View style={styles.container}>
// <TouchableOpacity onPress={onPress}>
//   <Text>open link</Text>
// </TouchableOpacity>
// </View>
// );
// }


// import React from 'react';
// import {Share, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import { loadOptions } from '@babel/core';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// });

// async function onShare() {
// try {
// await Share.share({
// title: 'タイトル',
// message: '共有したいメッセージ',
// })
// } catch(e) {
// console.log(e);
// }
// }

// export default function App() {
// return(
// <View style={styles.container}>
//   <TouchableOpacity onPress={onShare}>
//     <Text>Share</Text>
//   </TouchableOpacity>
// </View>
// );
// }



// import React  from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// });

// interface Data {
// count: number;
// }

// async function hydrate() {
// try {
// const data = await AsyncStorage.getItem('keyForData')
// if(data === null) {
// return {count: 0};
// }
// return JSON.parse(data);
// } catch {
// return {count: 0};
// }
// }

// async function persist(data: Data) {
// await AsyncStorage.setItem('keyForData', JSON.stringify(data));
// }

// export default function App() {
// const [count, setCount] =React.useState<number | null>(null)
// async function loadCount() {
// const data = await hydrate();
// const newCount = data.count + 1;
// setCount(newCount);
// persist({count: newCount});
// }

// React.useEffect(() => {
// loadCount();
// },[]);

// const onPress = React.useCallback(async() => {
// AsyncStorage.clear();
// loadCount();
// },[]);

// if(count === null) {
// return <View />;
// }

// return(
// <View style={styles.container}>
// <Text onPress={onPress}>{count}</Text>
// </View>
// );
// }


// import React from 'react';
// import {Dimensions, View, StyleSheet} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// block: {
//     backgroundColor: 'black',
//     height: 46,
// },
// });

// const {width: screenWidth} = Dimensions.get('screen');

// export default function App() {
// const [width, setWidth] = React.useState(1);

// React.useEffect(() => {
// const id = setInterval(() => {
// if(width < screenWidth - 64) {
// setWidth(width + 1);
// } else {
// clearInterval(id);
// }
// }, 1000/60);
// return() => {
// clearInterval(id);
// };
// }, []);

// return(
// <View style={styles.container}>
//     <View style={[styles.block, {width}]}/>
// </View>
// );
// }



// import React from 'react';
// import {Animated, View, StyleSheet} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// block: {
// backgroundColor: 'black',
// height: 32,
// },
// });

// const MSEC_IN_FRAME = 1000/60;

// export default function App() {
// const [width] = React.useState(new Animated.Value(0));

// React.useEffect(() => {
// Animated.timing(width, {
//     toValue: 300,
//     duration: MSEC_IN_FRAME*350,
// }).start();
// }, []);
// return(
//     <View style={styles.container}>
//         <Animated.View style={[styles.block, {width}]}/>
//     </View>
// );
// }


// import React from 'react';
// import {Animated, ViewStyle} from 'react-native';
// import {ProgressView} from '@react-native-community/progress-view';

// interface Props {
// progress: number;
// color: string;
// style: ViewStyle;
// }

// const AnimatedProgressView = Animated.createAnimatedComponent(
// ProgressView,
// );

// export default function Progress(props: Props) {
// const [progress] = React.useState(new Animated.Value(0));

// React.useEffect(() => {
// Animated.spring(progress, {
//     toValue: props.progress,
//     friction: 4,
// }).start();
// }, [props.progress]);

// return(
// <AnimatedProgressView
// progress={progress}
// style={props.style}
// progressTintColor={props.color}
// />
// );
// }

// Progress.defaultProps = {
// color: '#0a7ffb',
// };


// import React from 'react';
// import {Animated, View, StyleSheet, Easing} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// block: {
//     height: 32,
// },
// });

// export default function App() {
// const [width] = React.useState(new Animated.Value(0));
// const [color] = React.useState(new Animated.Value(0));

// React.useEffect(() => {
// Animated.parallel({
// Animated.timing(color, {
// toValue: 100,
// duration: 2500,
// }),
// Animated.sequence({
//     Animated.spring(width, {
// toValue: 256,
// friction: 4,
//     }),
// Animated.timing(width, {
// toValue: 0,
// duration: 1500,
// easing: Easing.bounce,
// }),
// }),
// }).start() => {
// setTimeout(() => {
//     width.setValue(0)
//     color.setValue(0)
// }, 100)
// });
// }, []);
// const backgroundColor = color.interpolate({
// inputRange: [0, 100],
// outputRange:['rgb(0, 128, 128)', 'rgb(128, 0, 128)'],
// });

// return(
// <View style={styles.container}>
// <Animated.View style={[styles.block, {width, backgroundColor}]}/>
// </View>
// );
// }



// import React from 'react';
// import {Animated, View, StyleSheet, Easing} from 'react-native';

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// block: {
// height: 32,
// },
// });

// export default function App() {
// const [width] = React.useState(new Animated.Value(0));
// const [color] = React.useState(new Animated.Value(0));

// React.useEffect(() =>  {
// Animated.parallel([
// Animated.timing(color, {
// toValue: 100,
// duration: 2500,
// }),
// Animated.sequence([
// Animated.spring(width, {
// toValue: 256,
// friction: 4,
// }),
// Animated.timing(width, {
// toValue: 0,
// duration: 1500,
// easing: Easing.bounce,
// }),
// ]),
// ]).start(() => {
// setTimeout(() => {
// width.setValue(0)
// color.setValue(0)
// }, 100)
// });
// }, []);

// const backgroundColor = color.interpolate({
// inputRange: [0, 100],
// outputRange: ['rgb(0, 128, 128)', 'rgb(128, 0, 128)'],
// });

// return(
// <View style={styles.container}>
// <Animated.View style={[styles.block, {width, backgroundColor}]}/>
// </View>
// );
// }