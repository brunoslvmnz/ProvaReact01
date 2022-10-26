import { FlatList, Text, View, StyleSheet } from "react-native";
import { numberFormat } from "../services/numberFormat";

export const Cart = ({ items, getTotalPrice }) => {
  return <FlatList
    data={items}
    renderItem={({ item }) =>
    <View style={styles.flexcard}>
        <Text style={styles.name}>{item.product.name} x {item.qty}</Text>
        <Text style={styles.bold}>{numberFormat(item.qty * item.product.price)}</Text>
      </View>}

    ListFooterComponent={() =>
      <View style={styles.upperline}>
        <Text style={styles.bold}>Total</Text>
        <Text style={styles.bold}>{numberFormat(getTotalPrice())}</Text>
      </View>}
  />;
};
const styles = StyleSheet.create({
  name: {
    fontSize: 20,
  },
  bold: {
    fontSize: 20,
    fontWeight: "bold",
  },
  flexcard: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    margin: 7,
  },
  upperline: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    margin: 7,
    borderTopColor: '#999',
    borderTopWidth:1,
  }
});