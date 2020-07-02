import React, { useState, useEffect } from 'react';
import { SafeAreaView,  FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setProjects(response.data); 
    }); 
  }, []);

  async function handleAddProject() {
    const response = await api.post('repositories', {
      title: `Novo projeto ${Date.now()}`
    });

    const project = response.data;
    console.log(project);
    
    setProjects([...projects, project]);
  }
  
  return (
    <>
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={projects}
        keyExtractor={project => project.id}
        renderItem={({ item: project }) => (
          <Text style={styles.project}>{project.title}</Text>
        )}
      />

      <TouchableOpacity 
      activeOpacity={0.6} 
      style={styles.button} 
      onPress={handleAddProject}
      > 
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#321',
  },
  project: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
