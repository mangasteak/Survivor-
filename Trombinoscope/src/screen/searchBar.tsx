import React, {useEffect, useState, Component} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from 'react-native-material-design-searchbar';

export const HomeScreen = () => {

    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetchData("https://masurao.fr/api/employees");
    }, []);

    class Test extends Component {
           render() {
            return(
            <SearchBar
                onSearchChange={() => console.log("On Search Change")}
                height={50}
                placeholder={'Search...'}
                autoCorrect={false}
                padding={5}
                returnKeyType={'search'}/>
            );
         }
         };

    const fetchData = async (url, token) => {
        headers: {
        'Content-Type': 'application/json',
        'X-group-authorization': 'Xqkwp3zjCVdV0fBhfzMASBwnK9DcE4xW',
        'Authorization': token},

        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
            setFilteredData(json.results);
            console.log(json.results);
        } catch (error) {
            console.error(error);
        }
    };

    const searchFilterFunction = (text) => {
        if(text){
            const newData = data.filter(item => {
                const itemData = item.name.first ? item.name.first.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setFilteredData(newData);
        } else {
            setFilteredData(data);
        }
    }

    return (
        <ScrollView>
            <Text style={styles.textFriends}>{filteredData.length} Friends</Text>
            {
                filteredData.map((item, index) => {
                    return (
                        <View key={index} style={styles.itemContainer}>
                            <Image
                                source={{ uri: item.picture.large }}
                                style={styles.image}
                            />
                            <View>
                                <Text style={styles.textName}>{item.name.first} {item.name.last}</Text>
                                <Text style={styles.textEmail}>{item.login.username}</Text>
                            </View>
                        </View>
                    )
                })
            }
        </ScrollView>
    );
  }


const styles = StyleSheet.create({
    textFriends: {
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 10,
        fontWeight: 'bold',
        marginTop: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    textName: {
        fontSize: 17,
        marginLeft: 10,
        fontWeight: "600",
    },
    textEmail: {
        fontSize: 14,
        marginLeft: 10,
        color: "grey",
    },
});