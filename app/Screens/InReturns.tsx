import React, {
    useContext,
    useState
} from 'react'
import { Image, Text, TextInput, View, StyleSheet, FlatList, TouchableOpacity, KeyboardAvoidingView, ScrollView, SafeAreaView } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import { ThemeContext } from '../Contexts/ThemeContext';


const dropDownOptions = [
    {
        key: '1',
        option: 'Off'
    },
    {
        key: '2',
        option: 'Standby'
    },
    {
        key: '3',
        option: 'Flight'
    },
    {
        key: '4',
        option: 'Specific Flight'
    }
]



export default function InReturns({ navigation }: any) {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [dropDownOpen, setDropDownOpen] = useState(false)
    const [selectDropDownKey, setSelectedDropDownKey] = useState('null')

    const { isDark } = useContext(ThemeContext)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? COLORS.bgBlack : COLORS.gray, paddingTop: SIZES.padding * 3, }}>
            <View style={{ marginHorizontal: SIZES.padding, }}>
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={isDark ? icons.ic_back_dark : icons.ic_back_light}
                            style={{ width: 28, height: 28 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Image
                            source={isDark ? icons.ic_check_dark : icons.ic_check_light}
                            style={{ width: 28, height: 28 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: SIZES.padding }}>
                    <Text style={{ ...FONTS.h1, color: isDark ? COLORS.golden : COLORS.black }}>In Return</Text>
                    <Text style={{ ...FONTS.body4, color: isDark ? COLORS.golden : COLORS.black }}>Tuesday, 18th October 2022</Text>
                </View>
            </View>
            <View style={styles.midPart}>
                <View style={styles.form}>

                    <TouchableOpacity
                        onPress={() => { setDropDownOpen(!dropDownOpen) }}
                        style={{ ...styles.inputFieldComponent, alignItems: 'center' }}>
                        <Image
                            source={isDark ? icons.ic_duty_dark : icons.ic_duty_light}
                            style={{ width: 27, height: 27 }}
                        />
                        <Text style={{ color: isDark ? COLORS.lightGolden : COLORS.darkGray, ...FONTS.h3, ...styles.inputField }}>Duty Type</Text>
                        <Image
                            source={isDark ? icons.ic_down_dark : icons.ic_down_light}
                            style={{ marginHorizontal: SIZES.padding * 2, width: 16, height: 16 }}
                        />

                    </TouchableOpacity>
                    {
                        dropDownOpen && (
                            <View>
                                <FlatList
                                    data={dropDownOptions}
                                    keyExtractor={(i) => i.key}
                                    renderItem={({ item }) => {
                                        return (
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: SIZES.padding / 2 }}>
                                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black, ...FONTS.h3, marginLeft: SIZES.padding + 27 }}>{item.option}</Text>
                                                <TouchableOpacity onPress={() => setSelectedDropDownKey(item.key)}>
                                                    <Image style={{ width: 27, height: 27 }} source={selectDropDownKey !== item.key ? (isDark ? icons.ic_check_off_dark : icons.ic_check_off_light) : (isDark ? icons.ic_check_on_dark : icons.ic_check_on_light)} />
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                        )
                    }


                </View>

            </View>
            {/* <View style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
                marginVertical: SIZES.padding
            }}>
                <View style={{
                    marginVertical: SIZES.padding / 2,

                    flexDirection: 'row',
                }}>
                    <View>
                        <Image
                            source={isDark ? icons.ic_planline_dark : icons.ic_planline_light}
                            style={{ width: 27, height: 27 }}
                        />
                    </View>
                    <View style={{
                        marginHorizontal: SIZES.padding
                    }}>
                        <View>
                            <Text style={{
                                fontSize: SIZES.h3,
                                color: isDark ? COLORS.golden : COLORS.black,
                                fontWeight: '500'
                            }}>FR8249</Text>
                        </View>
                        <View style={{ marginVertical: SIZES.padding / 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black, fontWeight: '500' }}>FAO</Text>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black }}>13:05z</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: isDark ? COLORS.lightGolden : COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={isDark ? icons.ic_logo_icon_dark : icons.ic_logo_icon_light}
                                    style={{ width: 18, height: 18 }}
                                />
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black }}>Duration: 2:35h</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: isDark ? COLORS.lightGolden : COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black, fontWeight: '500' }}>BRS</Text>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black }}>15:40z</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    marginVertical: SIZES.padding / 2,

                    flexDirection: 'row',
                }}>
                    <View>
                        <Image
                            source={isDark ? icons.ic_planline_dark : icons.ic_planline_light}
                            style={{ width: 27, height: 27 }}
                        />
                    </View>
                    <View style={{
                        marginHorizontal: SIZES.padding
                    }}>
                        <View>
                            <Text style={{
                                fontSize: SIZES.h3,
                                color: isDark ? COLORS.golden : COLORS.black,
                                fontWeight: '500'
                            }}>FR8248</Text>
                        </View>
                        <View style={{ marginVertical: SIZES.padding / 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black, fontWeight: '500' }}>BRS</Text>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black }}>16:05z</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: isDark ? COLORS.lightGolden : COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={isDark ? icons.ic_logo_icon_dark : icons.ic_logo_icon_light}
                                    style={{ width: 18, height: 18 }}
                                />
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black }}>Duration: 2:35h</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: isDark ? COLORS.lightGolden : COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black, fontWeight: '500' }}>FAO</Text>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black }}>18:40z</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    marginVertical: SIZES.padding / 2,

                    flexDirection: 'row',
                }}>
                    <View>
                        <Image
                            source={isDark ? icons.ic_planline_dark : icons.ic_planline_light}
                            style={{ width: 27, height: 27 }}
                        />
                    </View>
                    <View style={{
                        marginHorizontal: SIZES.padding
                    }}>
                        <View>
                            <Text style={{
                                fontSize: SIZES.h3,
                                color: isDark ? COLORS.golden : COLORS.black,
                                fontWeight: '500'
                            }}>FR8930</Text>
                        </View>
                        <View style={{ marginVertical: SIZES.padding / 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black, fontWeight: '500' }}>FAO</Text>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black }}>19:05z</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: isDark ? COLORS.lightGolden : COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={isDark ? icons.ic_logo_icon_dark : icons.ic_logo_icon_light}
                                    style={{ width: 18, height: 18 }}
                                />
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black }}>Duration: 2:35h</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: isDark ? COLORS.lightGolden : COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black, fontWeight: '500' }}>VLC</Text>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black }}>20:30z</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    marginVertical: SIZES.padding / 2,

                    flexDirection: 'row',
                }}>
                    <View>
                        <Image
                            source={isDark ? icons.ic_planline_dark : icons.ic_planline_light}
                            style={{ width: 27, height: 27 }}
                        />
                    </View>
                    <View style={{
                        marginHorizontal: SIZES.padding
                    }}>
                        <View>
                            <Text style={{
                                fontSize: SIZES.h3,
                                color: isDark ? COLORS.lightGolden : COLORS.darkGray,
                            }}>4th Sector Flight Number</Text>
                        </View>

                    </View>
                </View>
            </View> */}
            <View style={{ marginHorizontal: SIZES.padding, flexDirection: 'row', position: 'absolute', bottom: SIZES.padding * 2, alignItems: 'center', flex: 1 }}>
                <Image
                    source={isDark ? icons.ic_comment_dark : icons.ic_comment_light}
                    style={{ width: 27, height: 27 }}
                />
                <TextInput
                    placeholder="Comment"
                    style={{ ...FONTS.h3, marginLeft: SIZES.padding }}
                    placeholderTextColor={isDark ? COLORS.golden : COLORS.black}
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    midPart: {
        flexDirection: 'row',
    },
    form: {
        flex: 1,
        marginHorizontal: SIZES.padding,
    },
    inputFieldComponent: {
        marginVertical: SIZES.padding / 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputField: {
        marginLeft: SIZES.padding,
        ...FONTS.h3,
    },
    elipsPart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    elips: {
        marginVertical: SIZES.padding
    },
    bottomPart: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    horizontalElips: {
        marginHorizontal: SIZES.padding
    },


    checkBoxContainer: {
        marginTop: SIZES.padding / 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})


