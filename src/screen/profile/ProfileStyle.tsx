import { Platform, StyleSheet } from "react-native";
import { Color, Font } from "../../constants/GlobalStyle";

export const profileStyle = StyleSheet.create({
  headerContainer: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: Font.Font_X,
    marginLeft: 20,
    color: Color.C_white,
  },
  profileCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  userImg: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderColor: Color.C_white,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  userName: {
    fontSize: Font.Font_X,
    fontWeight: "600",
    color: Color.C_white,
    alignSelf: "center",
    marginTop: 10,
  },
  bodyCon: {
    backgroundColor: Color.C_white,
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 25,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  routeItemCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    marginBottom: 5,
  },
  iconAndTitleCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: Font.Font_L,
    marginLeft: 10,
  },
  reviewBaseStyle: {
    marginLeft: 10,
  },
  modal: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#fff",
    // height: Platform.OS === 'ios' ? 400 : 380,
    paddingHorizontal: 50,
    paddingTop: 30,
  },
});
