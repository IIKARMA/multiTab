import React, { useEffect, useState, useRef } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Icon, IconButton, HStack, Button } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { CustomModal } from "../";
import { BlurView } from "expo-blur";
import { theme } from "../../core/colors";
import { setIsDone } from "../../redux/reducers/directoryReducer";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import moment from "moment";

const icons = [
  {
    name: "tag",
    id: 1
  },
  {
    name: "palette",
    id: 3
  },
  {
    name: "calendar-clock",
    id: 2
  },
  {
    name: "clock",
    id: 4
  }
];

const CreateNotes = () => {
  return <View></View>;
};
export default CreateNotes;
