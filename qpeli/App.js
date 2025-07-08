import React, { useState } from 'react';
import {
  SafeAreaView, View, Text, TextInput, FlatList, Image,
  ActivityIndicator, StyleSheet, TouchableOpacity
} from 'react-native';

const API_KEY = 'cb1d3857dca56f795d2525071f570c91'; // 🔑 Reemplaza con tu propia API Key de TMDB

const App = () => {
  const [query, setQuery] = useState('');
  const [exactSearch, setExactSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
      );
      const data = await response.json();

      const filteredResults = exactSearch
        ? data.results.filter(movie => movie.title.toLowerCase() === query.toLowerCase())
        : data.results;

      setResults(filteredResults);
    } catch (error) {
      console.error('Error al buscar:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {item.poster_path ? (
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
          style={styles.image}
        />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={{ color: '#ccc' }}>Sin imagen</Text>
        </View>
      )}
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.details}>📅 {item.release_date?.split('-')[0] || 'N/A'}  ⭐ {item.vote_average}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>🎬 Buscador de Películas</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresa el nombre de la película"
        value={query}
        onChangeText={setQuery}
      />

      <View style={styles.options}>
        <TouchableOpacity
          onPress={() => setExactSearch(false)}
          style={[styles.optionButton, !exactSearch && styles.selected]}
        >
          <Text>Aproximada</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setExactSearch(true)}
          style={[styles.optionButton, exactSearch && styles.selected]}
        >
          <Text>Exacta</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Text style={styles.searchText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#ff4500" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={results}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 10,
    borderRadius: 8, marginBottom: 10,
  },
  options: {
    flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15,
  },
  optionButton: {
    padding: 10, borderRadius: 8, borderWidth: 1, borderColor: '#aaa',
  },
  selected: { backgroundColor: '#ffcccb' },
  searchButton: {
    backgroundColor: '#ff4500', paddingHorizontal: 16, paddingVertical: 10,
    borderRadius: 8,
  },
  searchText: { color: '#fff', fontWeight: 'bold' },
  card: {
    flexDirection: 'row', backgroundColor: '#f9f9f9',
    marginVertical: 5, padding: 10, borderRadius: 8,
  },
  image: {
    width: 100, height: 150, borderRadius: 8, marginRight: 10,
  },
  placeholder: {
    backgroundColor: '#eee', alignItems: 'center', justifyContent: 'center',
  },
  info: { flex: 1, justifyContent: 'space-around' },
  title: { fontSize: 16, fontWeight: 'bold' },
  details: { color: '#666' },
});

export default App;
