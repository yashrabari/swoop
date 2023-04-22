import React, { useContext, useState } from 'react';
import { Image, FlatList, Text, TouchableOpacity, View } from 'react-native';

import { icons, COLORS, SIZES, FONTS } from '../constants';
import { ThemeContext } from '../Contexts/ThemeContext';







const AllSwapScreen = ({ navigation }: any) => {


    const [isOpen, setIsOpen] = useState(false)

    const { isDark } = useContext(ThemeContext)



    return (
        <View style={{ flex: 1, backgroundColor: isDark ? COLORS.bgBlack : COLORS.gray, paddingTop: SIZES.padding * 3 }}>
            <View style={{ marginHorizontal: SIZES.padding }}>
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate("MySwapScreen")}>
                        <Image
                            source={isDark ? icons.ic_swoop_icon_dark : icons.ic_swoop_icon_light}
                            style={{ width: 28, height: 28 }}
                        />
                    </TouchableOpacity>

                </View>
                <View style={{ marginVertical: SIZES.padding }}>
                    <Text style={{ ...FONTS.h1, color: isDark ? COLORS.golden : COLORS.black }}>All Swaps</Text>
                    <Text style={{ ...FONTS.body4, color: isDark ? COLORS.golden : COLORS.black }}>Tuesday, 18th October 2022</Text>
                </View>




                <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <View style={{}}>
                            <Text style={{ ...FONTS.h4, marginVertical: SIZES.padding / 8, color: isDark ? COLORS.lightGolden : COLORS.darkGray }}>Sat, 22nd Oct 2022</Text>
                            <View style={{
                                width: SIZES.width * .9,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Text style={{ ...FONTS.h3, marginVertical: SIZES.padding / 8, color: isDark ? COLORS.golden : COLORS.black, fontWeight: '600' }}>
                                    FA0 - BRS - FAO - VLC - FAO
                                </Text>
                                <View style={{
                                    marginLeft: SIZES.padding / 2,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{ fontSize: SIZES.h4, color: isDark ? COLORS.lightGolden : COLORS.black }}>13:05z</Text>
                                    <Image
                                        source={isDark ? icons.ic_plan_dark : icons.ic_logo_icon_light}
                                        style={{ width: 16, height: 16, marginHorizontal: SIZES.padding / 4 }}
                                    />
                                    <Text style={{ color: isDark ? COLORS.lightGolden : COLORS.black }}>22:25z</Text>

                                </View>
                            </View>
                            <Image
                                source={isDark ? icons.ic_exchange_dark : icons.ic_exchange_light}
                                style={{ width: 16, height: 16, marginVertical: SIZES.padding / 8 }}
                            />

                            <Text style={{ ...FONTS.h4, marginVertical: SIZES.padding / 8, color: isDark ? COLORS.golden : COLORS.black, }}>
                                OFF
                            </Text>
                        </View>

                    </View>
                </TouchableOpacity>

                {
                    isOpen && (
                        <View style={{
                            width: SIZES.width * .9,
                            marginVertical: SIZES.padding,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <TouchableOpacity>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <Text style={{ ...FONTS.h3, color: isDark ? COLORS.lightGolden : COLORS.black, fontWeight: '500', }}>DECLINE</Text>
                                    <Image
                                        source={isDark ? icons.ic_close_dark : icons.ic_close_light}
                                        style={{ width: 27, height: 27, marginHorizontal: SIZES.padding }}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <Text style={{ ...FONTS.h3, color: isDark ? COLORS.lightGolden : COLORS.black, fontWeight: '500' }}>ACCEPT</Text>
                                    <Image
                                        source={isDark ? icons.ic_check_light_dark : icons.ic_check_light}
                                        style={{ width: 27, height: 27, marginLeft: SIZES.padding }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }

                <View style={{
                    borderWidth: .5,
                    borderColor: COLORS.darkGray,
                    marginVertical: SIZES.padding / 2
                }}></View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <View>
                        <Text style={{ ...FONTS.h4, marginVertical: SIZES.padding / 8, color: isDark ? COLORS.lightGolden : COLORS.darkGray }}>Sat, 22nd Oct 2022</Text>
                        <View style={{
                            width: SIZES.width * .9,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Text style={{ ...FONTS.h4, marginVertical: SIZES.padding / 8, color: isDark ? COLORS.golden : COLORS.black, fontWeight: '600' }}>
                                FA0 - BRS - FAO - VLC - FAO
                            </Text>
                            <View style={{
                                marginLeft: SIZES.padding / 2,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Text style={{ color: isDark ? COLORS.lightGolden : COLORS.black }}>13:05z</Text>
                                <Image
                                    source={isDark ? icons.ic_plan_dark : icons.ic_logo_icon_light}
                                    style={{ width: 16, height: 16, marginHorizontal: SIZES.padding / 4 }}
                                />
                                <Text style={{ color: isDark ? COLORS.lightGolden : COLORS.black }}>22:25z</Text>

                            </View>
                        </View>
                        <Image
                            source={isDark ? icons.ic_exchange_dark : icons.ic_exchange_light}
                            style={{ width: 16, height: 16, marginVertical: SIZES.padding / 8 }}
                        />
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Text style={{ ...FONTS.h4, marginVertical: SIZES.padding / 8, color: isDark ? COLORS.golden : COLORS.black, fontWeight: '600' }}>
                                FA0 - BRS - FAO - VLC - FAO
                            </Text>
                            <View style={{
                                marginLeft: SIZES.padding / 2,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{ color: isDark ? COLORS.lightGolden : COLORS.black }}>13:05z</Text>
                                <Image
                                    source={isDark ? icons.ic_plan_dark : icons.ic_logo_icon_light}
                                    style={{ width: 16, height: 16, marginHorizontal: SIZES.padding / 4 }}
                                />
                                <Text style={{ color: isDark ? COLORS.lightGolden : COLORS.black }}>22:25z</Text>

                            </View>
                        </View>
                    </View>

                </View>






            </View>
        </View >
    );
};

export default AllSwapScreen;
