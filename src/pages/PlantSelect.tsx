import React, { useEffect, useState } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { color } from 'react-native-reanimated';
import { EnvironmentButton } from '../components/EnvironmentButton';
import { Header } from '../components/Header';
import { Load } from '../components/Load';
import { PrimaryPlantCard } from '../components/PrimaryPlantCard';
import api from '../services/api';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantEnvironment {
  key: string;
  title: string;
}

interface Plant {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  }  
}

export function PlantSelect(){
  const [environments, setEnvironments] = useState<PlantEnvironment[]>([]);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);


  useEffect(() => {
    async function fetchEnvironment() {
      const {data} = await api.get('plants_environments?_sort=title&_order=asc');
      setEnvironments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data]);
    }

    fetchEnvironment()
  }, [])

  useEffect(() => {
    fetchPlants()
  }, [])  

  async function fetchPlants() {
    const {data} = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

    if (!data) {
      return setLoading(true);
    }

    if (page > 1){
      setPlants(oldValue => [...oldValue, ...data])
      setFilteredPlants(oldValue => [...oldValue, ...data])
    } else {
      setPage(1);
      setPlants(data);
      setFilteredPlants(data);
    }    
    setLoading(false);
    setLoadingMore(false);
  }  

  async function handleFetchMore(distance: number){
    if (distance < 1)
      return;
    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    fetchPlants();
  }

  function handleEnvironmentSelected(environment: string){
    setEnvironmentSelected(environment);

    if (environment === 'all')
      return setFilteredPlants(plants);
    
    const filtered = plants.filter( plant => 
    plant.environments.includes(environment)
    )
    setFilteredPlants(filtered);
  }

  if (loading) {
    return (
      <Load  />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>      
        <Header name={'Alexandre'} ></Header>
        <Text style={styles.title} >
        Em qual hambiente
        </Text>
        <Text style={styles.subtitle} >
        você quer colocar sua planta?
        </Text>
      </View>        
      <View>
        <FlatList 
          data={environments} 
          renderItem={ ({ item }) => (
            <EnvironmentButton 
            title={item.title} 
            active={item.key === environmentSelected}
            onPress={() => handleEnvironmentSelected(item.key)} 
            />
          )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.environmentList}
        keyExtractor={(item, index) => index.toString() }
        >          
        </FlatList>
      </View>
      <View style={styles.plants}>                
        <FlatList 
          data={filteredPlants} 
          renderItem={({ item }) => 
            (<PrimaryPlantCard data={item} ></PrimaryPlantCard>)
          }
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={ ({ distanceFromEnd }) => 
            handleFetchMore(distanceFromEnd)
          }
          keyExtractor={(item, index) => index.toString() }
          ListFooterComponent={
            loadingMore ? 
            <ActivityIndicator color={colors.green} />: 
            <></>
          }
        >          
        </FlatList>
      </View>        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    paddingHorizontal: 32
  },
  title: {
    fontFamily: fonts.heading,
    color: colors.body,
    fontSize: 17,
  },
  subtitle: {
    fontFamily: fonts.text,
    color: colors.body,
    fontSize: 17
  },
  environmentList: {
    paddingHorizontal: 32
  },
  plants: {
    flex: 1,
    justifyContent: 'center',

  }
})