import React, {useEffect, useState, Component} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from 'react-native-material-design-searchbar';
import { RFValue } from "react-native-responsive-fontsize";
import { Icon } from 'react-native-elements';
import { ProfilePicture } from "../../Components/ProfilePicture.tsx";


export const HomeScreen = (token) => {

    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [jsonStringArray, setJsonStringArray] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [id, setId] = React.useState(null);

    useEffect(() => {
        async function fetchData(token) {
            const response = await fetch('https://masurao.fr/api/employees/me', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "X-Group-Authorization": "Xqkwp3zjCVdV0fBhfzMASBwnK9DcE4xW",
                    Authorization: "Bearer " + token.route.params.token,
                }
            })
            const json = await response.json();
            const userId = json.id;
            setId(userId);
        }
        fetchData(token);
    }, []);
    useEffect(() => {
        fetchData("https://masurao.fr/api/employees", token.route.params.token);
    }, []);

    const fetchData = async (url, token) => {
        try {
            const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-group-authorization': 'Xqkwp3zjCVdV0fBhfzMASBwnK9DcE4xW',
                        'Authorization': 'Bearer '+ token,
                    },}
            );
            const json = await response.json();
            const jsonStringArray = json.map((obj) => JSON.stringify(obj));
            setData(json);
            setJsonStringArray(jsonStringArray)
            setFilteredData(jsonStringArray);
        } catch (error) {
            console.error(error);
        }

        };

    const parseJsonString = (jsonString) => {
        const data = JSON.parse(jsonString);
        return `${data.name} ${data.surname}`;
      };

    const parseJsonId = (jsonString) => {
        const data = JSON.parse(jsonString);
        return `${data.id}`;
    }


    const handleSearch = (text) => {
    	const filtered = jsonStringArray.filter((item) =>
       	parseJsonString(item).toLowerCase().includes(text.toLowerCase())
        );
        setFilteredData(filtered);
    };

       return (
         <View style={styles.container}>
         	<Image
                 source={require('../../Assets/background2.png')}
                 style={styles.backgroundImage}
                 resizeMode="cover"
               />
            <TouchableOpacity onPress={() => navigation.navigate('Profile', { token: token.route.params.token })}>
                <ProfilePicture id={id} token={token} />
            </TouchableOpacity>
           <View style={styles.searchContainer}>
             <SearchBar
             	inputStyle={{backgroundColor: 'white'}}
               	containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
               	inputContainerStyle={{backgroundColor: 'white'}}
               	placeholderTextColor={'#g5g5g5'}
               	onSearchChange={handleSearch}
               	height={50}
               	placeholder={'Search...'}
               	autoCorrect={false}
               	returnKeyType={'search'}
             />
           </View>
           <View style={styles.flatListContainer}>
             <FlatList
               data={filteredData}
               keyExtractor={(item, index) => index.toString()}
               renderItem={({ item }) => (
                 <View style={styles.itemContainer}>
                   <ProfilePicture id={parseJsonId(item)} token={token.route.params.token} imageStyle={styles.image} containerStyle={styles.imageContainer} />
                   <Text style={styles.text}>{parseJsonString(item)}</Text>
                 </View>
               )}
             />
           </View>
         </View>
       );
     };


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: RFValue(1),
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // You can change the background color and opacity here
    padding: RFValue(10),
  },
  searchContainer: {
    flex: 1,
    width: '75%',
    justifyContent: 'center',
    left: '10%',

    // ... your other styles ...
  },
  flatListContainer: {
    flex: RFValue(7),
    // ... your other styles ...
  },
  itemContainer: {
    marginBottom: RFValue(10),
    marginLeft: '25%',
    flexDirection: 'row',

  },
  text: {
    marginTop: RFValue(10),
    fontSize: RFValue(16),
    left: '6%',
    marginTop: '5%',
    marginBottom: 20,
    alignItems: 'center',
  },
  imageContainer: {
    margin: 0,
    padding: 0,
    marginTop: 0,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 400,
  },
});