import React from "react";
import { StyleSheet, Text, Platform, ScrollView } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30,
  },
  heading: {
    textAlign: "center",
    margin: 20,
    fontSize: 36,
    ...Platform.select({
      ios: { fontFamily: "Courier" },
      android: { fontFamily: "Space Mono" },
    }),
    fontWeight: "bold",
  },
  titles: {
    textAlign: "center",
    fontSize: 16,
    ...Platform.select({
      ios: { fontFamily: "Courier" },
      android: { fontFamily: "Space Mono" },
    }),
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    margin: 10,
    marginHorizontal: 20,
    ...Platform.select({
      ios: { fontFamily: "System" },
      android: { fontFamily: "Roboto" },
    }),
  },
});

const Rules = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <Text style={styles.heading}>Regler</Text>
      <Text style={styles.titles}>Pekeleken 👉🏻</Text>
      <Text style={styles.text}>
        {" "}
        Appen stiller et spørsmål med setningen «Pek på den som...», og etter
        tre sekunder peker alle spillerene på den personen de tror det gjelder.
        Personene som blir pekt på må drikke antall pek de har mottatt.
      </Text>
      <Text style={styles.titles}>Miming 🎭</Text>
      <Text style={styles.text}>
        {" "}
        Appen sier noe en person må mime. Den som har telefonen må ikke lese det
        høyt, men gi det til den som skal mime. Den første som gjetter mimingen
        deler ut 5 slurker.
      </Text>
      <Text style={styles.titles}>Tommel opp eller ned 🤔</Text>
      <Text style={styles.text}>
        {" "}
        Appen stiller et spørsmål om de andre spillerne heller vil det ene eller
        det andre. Ta tommel opp for det første alternativet, og tommel ned for
        det andre. Mindretallet drikker.
      </Text>
      <Text style={styles.titles}>Regler 👮🏽‍♀️</Text>
      <Text style={styles.text}>
        {" "}
        Appen gir dere en regel dere må følge til spillet er over, eller så
        lenge dere gidder.
      </Text>
      <Text style={styles.titles}>Jeg har aldri ✋🏻</Text>
      <Text style={styles.text}>
        {" "}
        Appen sier noe den aldri har gjort og de som har gjort det må drikke.
      </Text>
    </ScrollView>
  );
};

export default Rules;
