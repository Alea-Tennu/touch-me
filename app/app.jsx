import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const Game = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(0);

  const obstacleRefs = useRef([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setGameOver(true);
      if (score > highScore) {
        setHighScore(score);
      }
    }
  }, [timeLeft, score]);

  const generateObstacle = () => {
    const obstacle = {
      x: Math.random() * 300,
      y: Math.random() * 600,
      size: Math.random() * 50 + 50,
    };

    obstacleRefs.current.push(obstacle);

    setTimeout(() => {
      obstacleRefs.current = obstacleRefs.current.filter((o) => o !== obstacle);
    }, 3000);
  };

  useEffect(() => {
    generateObstacle();

    const interval = setInterval(() => {
      generateObstacle();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleTouch = (event) => {
    const { translationX, translationY } = event.nativeEvent;

    obstacleRefs.current.forEach((obstacle) => {
      const dx = obstacle.x - translationX;
      const dy = obstacle.y - translationY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < obstacle.size) {
        setGameOver(true);
        if (score > highScore) {
          setHighScore(score);
        }
      }
    });

    setScore(score + 1);
  };

  return (
    <View style={styles.container}>
      {gameOver && (
        <View style={styles.gameOverContainer}>
          <Text style={styles.gameOverText}>Game Over</Text>
          <Text style={styles.scoreText}>Score: {score}</Text>
          <Text style={styles.highScoreText}>High Score: {highScore}</Text>
          <TouchableOpacity style={styles.restartButton} onPress={() => setGameOver(false)}>
            <Text style={styles.restartButtonText}>Restart</Text>
          </TouchableOpacity>
        </View>
      )}
      {!gameOver && (
        <View style={styles.gameContainer}>
          <Text style={styles.timeLeftText}>Time Left: {timeLeft}</Text>
          <Animated.View
            style={[
              styles.touchArea,
              {
                transform: [{ translateX: translationX }, { translateY: translationY }],
              },
            ]}
            onTouchStart={(event) => {
              handleTouch(event);
            }}
            onTouchMove={(event) => {
              handleTouch(event);
            }}
          />
          {obstacleRefs.current.map((obstacle, index) => (
            <View
              key={index}
              style={[
                styles.obstacle,
                {
                  width: obstacle.size,
                  height: obstacle.size,
                  left: obstacle.x - obstacle.size / 2,
                  top: obstacle.y - obstacle.size / 2,
                },
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  gameContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchArea: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 50,
    position: 'absolute',
  },
  obstacle: {
    position: 'absolute',
    backgroundColor: 'blue',
    borderRadius: 50,
  },
  gameOverContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameOverText: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  scoreText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
  },
  highScoreText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
  },
  restartButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  restartButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  timeLeftText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Game;