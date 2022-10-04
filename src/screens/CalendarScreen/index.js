import React from "react";
import { View, Text } from "react-native";
import { theme } from "../../core/colors";
import { Calendar } from "react-native-calendars";
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";

const CalendarScreen = () => {
  const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];
  const barData = [
    { value: 250, label: "M" },
    { value: 500, label: "T", frontColor: "#177AD5" },
    { value: 745, label: "W", frontColor: "#177AD5" },
    { value: 320, label: "T" },
    { value: 600, label: "F", frontColor: "#177AD5" },
    { value: 256, label: "S" },
    { value: 300, label: "S" }
  ];
  return (
    <View
      style={{
        backgroundColor: theme.background,
        flex: 1
      }}>
      <BarChart
        barWidth={22}
        noOfSections={3}
        barBorderRadius={4}
        frontColor="lightgray"
        data={barData}
        yAxisThickness={0}
        xAxisThickness={0}
      />
    </View>
  );
};
export default CalendarScreen;
