import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
export default function HomeScreen ()
{
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={ false } >
        <Text>Home</Text>
      </ScrollView>
    </SafeAreaView>
  )
}