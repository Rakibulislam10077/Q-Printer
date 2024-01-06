import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { modalStyle } from "./ModalContentStyle";
import { Close, Dropdown } from "../../../constants/allSvg/AllSvg";

const ModalContent = () => {
  const [isBrandClicked, setIsBrandClicked] = useState<boolean>(false);
  const [isSeriesClicked, setIsSeriesClicked] = useState<boolean>(false);
  const [isModelClicked, setIsModelClicked] = useState<boolean>(false);

  //   brand function
  const brandFunction = () => {
    setIsBrandClicked(true);
    setIsModelClicked(false);
    setIsSeriesClicked(false);
  };
  const seriesFunction = () => {
    setIsSeriesClicked(true);
    setIsBrandClicked(false);
    setIsModelClicked(false);
  };
  const modelFunction = () => {
    setIsModelClicked(true);
    setIsBrandClicked(false);
    setIsSeriesClicked(false);
  };
  //   useEffect(() => {
  //     if (isBrandClicked === true) {
  //       setIsSeriesClicked(false);
  //       setIsModelClicked(false);
  //     } else if (isSeriesClicked === true) {
  //       setIsBrandClicked(false);
  //       setIsModelClicked(false);
  //     } else if (isModelClicked === true) {
  //       setIsBrandClicked(false);
  //       setIsSeriesClicked(false);
  //     }
  //   }, []);

  return (
    <View style={modalStyle.container}>
      {/* modal indicator */}
      <View style={modalStyle.modalIndicator} />
      <Text style={modalStyle.title}>Find perfect Cartridge</Text>
      <Text style={modalStyle.subTitle}>
        You can find the right Cartridges for your Printer
      </Text>
      {/* printer Brand container */}
      <View style={[isBrandClicked === true && modalStyle.inputBoxMainCon]}>
        <TouchableOpacity
          onPress={() => brandFunction()}
          activeOpacity={0.7}
          style={[
            isBrandClicked === true
              ? modalStyle.activeInputBox
              : modalStyle.inputBox,
          ]}
        >
          <Text>Printer Brand</Text>
          {isBrandClicked === true ? (
            <TouchableOpacity onPress={() => setIsBrandClicked(false)}>
              <Close />
            </TouchableOpacity>
          ) : (
            <Dropdown />
          )}
        </TouchableOpacity>
        {isBrandClicked === true && (
          <View>
            <TextInput style={modalStyle.input} placeholder="Search" />
            <View style={{ height: 210 }}>
              <ScrollView>
                <TouchableOpacity style={modalStyle.filteredItem}>
                  <Text>hello</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modalStyle.filteredItem}>
                  <Text>hello</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modalStyle.filteredItem}>
                  <Text>hello</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modalStyle.filteredItem}>
                  <Text>hello</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modalStyle.filteredItem}>
                  <Text>hello</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modalStyle.filteredItem}>
                  <Text>hello</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modalStyle.filteredItem}>
                  <Text>hello</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modalStyle.filteredItem}>
                  <Text>hello</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modalStyle.filteredItem}>
                  <Text>hello</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modalStyle.filteredItem}>
                  <Text>hello</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modalStyle.filteredItem}>
                  <Text>hello</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modalStyle.filteredItem}>
                  <Text>hello</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        )}
      </View>
      {/* ======================== */}
      <View style={[isSeriesClicked === true && modalStyle.inputBoxMainCon]}>
        <TouchableOpacity
          onPress={() => seriesFunction()}
          activeOpacity={0.7}
          style={[
            isSeriesClicked === true
              ? modalStyle.activeInputBox
              : modalStyle.inputBox,
          ]}
        >
          <Text>Printer Brand</Text>
          {isSeriesClicked === true ? (
            <TouchableOpacity onPress={() => setIsSeriesClicked(false)}>
              <Close />
            </TouchableOpacity>
          ) : (
            <Dropdown />
          )}
        </TouchableOpacity>
        {isSeriesClicked === true && (
          <View>
            <TextInput style={modalStyle.input} placeholder="Search" />
            <TouchableOpacity style={modalStyle.filteredItem}>
              <Text>hello</Text>
            </TouchableOpacity>
            <TouchableOpacity style={modalStyle.filteredItem}>
              <Text>hello</Text>
            </TouchableOpacity>
            <TouchableOpacity style={modalStyle.filteredItem}>
              <Text>hello</Text>
            </TouchableOpacity>
            <TouchableOpacity style={modalStyle.filteredItem}>
              <Text>hello</Text>
            </TouchableOpacity>
            <TouchableOpacity style={modalStyle.filteredItem}>
              <Text>hello</Text>
            </TouchableOpacity>
            <TouchableOpacity style={modalStyle.filteredItem}>
              <Text>hello</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {/* ===================== */}

      <View style={[isModelClicked === true && modalStyle.inputBoxMainCon]}>
        <TouchableOpacity
          onPress={() => modelFunction()}
          activeOpacity={0.7}
          style={[
            isModelClicked === true
              ? modalStyle.activeInputBox
              : modalStyle.inputBox,
          ]}
        >
          <Text>Printer Brand</Text>
          {isModelClicked === true ? (
            <TouchableOpacity onPress={() => setIsModelClicked(false)}>
              <Close />
            </TouchableOpacity>
          ) : (
            <Dropdown />
          )}
        </TouchableOpacity>
        {isModelClicked === true && (
          <View>
            <TextInput style={modalStyle.input} placeholder="Search" />
            <TouchableOpacity style={modalStyle.filteredItem}>
              <Text>hello</Text>
            </TouchableOpacity>
            <TouchableOpacity style={modalStyle.filteredItem}>
              <Text>hello</Text>
            </TouchableOpacity>
            <TouchableOpacity style={modalStyle.filteredItem}>
              <Text>hello</Text>
            </TouchableOpacity>
            <TouchableOpacity style={modalStyle.filteredItem}>
              <Text>hello</Text>
            </TouchableOpacity>
            <TouchableOpacity style={modalStyle.filteredItem}>
              <Text>hello</Text>
            </TouchableOpacity>
            <TouchableOpacity style={modalStyle.filteredItem}>
              <Text>hello</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default ModalContent;
