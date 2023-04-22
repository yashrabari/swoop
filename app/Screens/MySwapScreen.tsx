import React, { useContext, useState, useEffect } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View, ActivityIndicator, Alert, FlatList } from 'react-native';
import { icons, COLORS, SIZES, FONTS } from '../constants';
import { ThemeContext } from '../Contexts/ThemeContext';
import { AuthContext } from '../Contexts/AuthContext';
import OneSwap from '../Components/OneSwap';

const MySwapScreen = ({ navigation }: any) => {
    const [isOpen, setIsOpen] = useState(false)
    const [swaps, setSwaps] = useState([])
    const [loading, setLoading] = useState(false)
    const { isDark } = useContext(ThemeContext)

    const { user } = useContext(AuthContext)



    useEffect(() => {
        getAllSwaps();
    }, [])

    const getAllSwaps = async () => {
        setLoading(true)
        try {
            var myHeaders = new Headers();
            myHeaders.append("key", "2b223e5cee713615ha54ac203b24e9a123754yuVT");
            myHeaders.append("token", "PmUYTPFGbtehfbKt7WekfgRQS5UpVBPo");
            myHeaders.append("Authorization", `Bearer ${user?.token} `);

            var formdata = new FormData();
            formdata.append("user_id", user.user_id);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            var res = await fetch("https://client.appmania.co.in/Swoop/api/mySwap", requestOptions).then(async (res) => await res.json())
            setLoading(false)
            if (res.ResponseCode == 0) return Alert.alert('Error', res.ResponseMsg);

            if (res.ResponseCode == 9) {
                Alert.alert('Error', res.ResponseMsg);
                return navigation.navigate('Login')
            }

            if (res.ResponseCode == 1) {
                setSwaps(res.data)
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
            Alert.alert('Error', "Something went wrong");
        }

    }




    if (loading) return <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isDark ? COLORS.bgBlack : COLORS.gray,
    }}><ActivityIndicator size={'large'} color={isDark ? COLORS.golden : COLORS.black} /></View>



    return (
        <View style={{ flex: 1, backgroundColor: isDark ? COLORS.bgBlack : COLORS.gray, paddingTop: SIZES.padding * 3 }}>
            <View style={{ marginHorizontal: SIZES.padding }}>
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate('MySwapScreen')}>
                        <Image
                            source={isDark ? icons.ic_swoop_icon_dark : icons.ic_swoop_icon_light}
                            style={{ width: 28, height: 28 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CreateSwapScreen')}>
                        <Image
                            source={isDark ? icons.ic_plus_dark : icons.ic_plus_light}
                            style={{ width: 28, height: 28 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: SIZES.padding }}>
                    <Text style={{ ...FONTS.h1, color: isDark ? COLORS.golden : COLORS.black }}>My Swaps</Text>
                    <Text style={{ ...FONTS.body4, color: isDark ? COLORS.golden : COLORS.black }}>Tuesday, 18th October 2022</Text>
                </View>




                <FlatList
                    data={swaps}
                    keyExtractor={(item: any) => item.swap_id}
                    renderItem={({ item }) => <OneSwap item={item} />}
                />








            </View>
        </View>
    );
};

export default MySwapScreen;
