// import React from "react";
// import { Text } from "react-native";

// export default function Hello() {
//   return <Text>Hello, world!</Text>;
// }

import React from "react";
import { Text, View } from "react-native";

export default function Hello({ name }) {
  return (
    <View>
      <Text>Hello, {name}!</Text>
    </View>
  );
}
