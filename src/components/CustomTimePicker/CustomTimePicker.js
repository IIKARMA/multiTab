import React, { useEffect } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CustomTimePicker = ({
  closeModal,
  setSelectTime,
  isDatePickerVisible,
  setDatePickerVisibility
}) => {
  const handleConfirm = (date) => {
    setSelectTime(date);
    closeModal();
    hideDatePicker();
  };

  function showDatePicker() {
    setDatePickerVisibility(true);
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  useEffect(() => {
    setDatePickerVisibility(true);
  }, []);

  return (
    <DateTimePickerModal
      display='default'
      isVisible={isDatePickerVisible}
      mode='time'
      onConfirm={handleConfirm}
      onCancel={hideDatePicker}
      is24Hour={true}
    />
  );
};
export default CustomTimePicker;
