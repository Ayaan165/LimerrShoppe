import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Clock from '../logo/Clock.svg'
import { COLORS } from "../consts/COLOR";

// Define the type for the time object
interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer: React.FC = () => {
  const [time, setTime] = useState<Time>({ hours: 0, minutes: 36, seconds: 58 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(interval);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Clock fill={COLORS.primaryButton} />
      </View>
      <View style={styles.timeContainer}>
        <View style={styles.timeBox}>
          <Text style={styles.timeText}>{formatNumber(time.hours)}</Text>
        </View>
        <View style={styles.timeBox}>
          <Text style={styles.timeText}>{formatNumber(time.minutes)}</Text>
        </View>
        <View style={styles.timeBox}>
          <Text style={styles.timeText}>{formatNumber(time.seconds)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "#1E4FFF",
    padding: 20,
    borderRadius: 10,

  },
  iconContainer: {
    marginRight: 8,
  },
  timeContainer: {
    flexDirection: "row",
    gap:4
  },
  timeBox: {
    height:27,
    width:30,
    backgroundColor: "#fff",
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 8,
  },
  timeText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000",
    fontFamily:'Raleway'
  },
});

export default Timer;