import React, { useState, useCallback, useMemo } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Modal, HStack, Button, Icon } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import CustomButton from "../CustomButton";
import { Calendar, CalendarUtils } from "react-native-calendars";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import moment from "moment";
import { styles } from "./style";

const CustomCalendar = ({
  closeModal,
  theme,
  selectDate,
  setSelectTime,
  setSelectDate
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectTime(moment(date).format("HH:mm"));
    hideDatePicker();
  };

  const onDayPress = (day) => {
    setSelectDate(day.dateString);
  };
  const fastSelectDate = (type) => {
    type == "today"
      ? setSelectDate(
          CalendarUtils.getCalendarDateString(
            moment().add(0, "day").format("L")
          )
        )
      : setSelectDate(
          CalendarUtils.getCalendarDateString(
            moment().add(1, "day").format("L")
          )
        );

    closeModal();
  };
  return (
    <>
      <Modal.Body style={{ paddingTop: 30 }}>
        <Calendar
          hideArrows={true}
          disableMonthChange={true}
          markingType={"custom"}
          markedDates={{
            [selectDate]: {
              selected: true,
              textColor: "green",
              date: "2022-10-20"
            }
          }}
          onDayPress={onDayPress}
          theme={styles.calendar}
          style={{
            backgroundColor: theme.card
          }}
        />
        <View style={styles.footerCalendar}>
          <HStack
            paddingY={3}
            alignSelf={"center"}
            w={"100%"}
            flexDirection={"row"}
            justifyContent='space-between'>
            <Button
              style={styles.borderLeftButton}
              onPress={() => fastSelectDate("today")}
              bg={"#444"}
              leftIcon={
                <Icon
                  as={MaterialCommunityIcons}
                  _dark={{
                    color: "yellow.800"
                  }}
                  color='text.300'
                  size='6'
                  name='calendar-today'
                />
              }>
              <Text style={styles.text}>На сегодня</Text>
            </Button>
            <Button
              onPress={showDatePicker}
              bg={"#444"}
              leftIcon={
                <Icon
                  as={MaterialCommunityIcons}
                  _dark={{
                    color: "yellow.800"
                  }}
                  color='#138382'
                  size='6'
                  name='clock-plus'
                />
              }></Button>
            <Button
              onPress={() => fastSelectDate("tomorrow")}
              style={styles.borderRightButton}
              bg={"#444"}
              leftIcon={
                <Icon
                  as={MaterialCommunityIcons}
                  _dark={{
                    color: "yellow.800"
                  }}
                  color='text.300'
                  size='6'
                  name='calendar-plus'
                />
              }>
              <Text style={styles.text}>На завтра</Text>
            </Button>
          </HStack>
        </View>
        <DateTimePickerModal
          display='default'
          isVisible={isDatePickerVisible}
          mode='time'
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          is24Hour={true}
        />
        <CustomButton closeModal={closeModal} />
      </Modal.Body>
    </>
  );
};
export default CustomCalendar;
