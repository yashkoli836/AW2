import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [ {
        uid: 1,
        name: 'Gojo Saturo',
        status: 'Just an extra ordinary teacher',
        imageUrl: '',
      },
      {
        uid: 2,
        name: 'Itadori Yuji',
        status: 'Alive',
        imageUrl: '',
      },
      {
        uid: 3,
        name: 'Toji Zenin',
        status: 'Dead',
        imageUrl: '',
      },
      {
        uid: 4,
        name: 'Ryomen Sukuna',
        status: 'In Heian Era',
        imageUrl: '',
      },];
       

  return (
    <View>
      <Text>ContactList</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})