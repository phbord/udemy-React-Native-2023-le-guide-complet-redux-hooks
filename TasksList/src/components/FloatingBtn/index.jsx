import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native';

export default function FloatingBtn({toggle, isOpen}) {
  return (
    <>
      <Pressable onPress={toggle} style={styles.btn}>
        <Text style={styles.text}>{isOpen ? 'X' : '+'}</Text>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    borderRadius: 40,
    height: 40,
    width: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
