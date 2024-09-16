import React from 'react';
import { useRef, useEffect } from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { styled } from 'nativewind';

// const StyledView = styled(View);
// const StyledImage = styled(Image);
// const StyledText = styled(Text);
// const StyledPressable = styled(Pressable);

export const GameCard = ({ game }) => {
  return (
    <View
      className="bg-gray-300 p-3 rounded-lg m-4"
      key={game.slug}>
      <Image
        source={{ uri: game.image }}
        style={styles.image}
      />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.score}>{game.score}</Text>
      <Text style={styles.description}>{game.description.slice(0,200)}...</Text>
      <Pressable
        style={styles.details}
        onPress={() => console.log('Pressed')}>
        <Text style={styles.textDetails}>Details</Text>
      </Pressable>
    </View>
  );
};

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    color: '#000',
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  score: { color: '#000', fontSize: 12, marginTop: 5, fontSize: 14 },
  details: {
    backgroundColor: '#2f2f2f',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  textDetails: {
    color: '#fff',
    textAlign: 'center',
  },
});
