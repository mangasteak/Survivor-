import React, {useEffect, useState, Component} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from 'react-native-material-design-searchbar';
import { Icon } from 'react-native-elements';


export const HomeScreen = (token) => {

    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [jsonStringArray, setJsonStringArray] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

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
            console.log(json);
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


    const handleSearch = (text) => {
    	const filtered = jsonStringArray.filter((item) =>
       	parseJsonString(item).toLowerCase().includes(text.toLowerCase())
        );
        setFilteredData(filtered);
    };

       return (
         <View style={styles.container}>
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
    padding: 10,
  },
  searchContainer: {
    flex: 1,
  },
  flatListContainer: {
    flex: 6,
  },
  itemContainer: {
    marginBottom: 20,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
  },
});