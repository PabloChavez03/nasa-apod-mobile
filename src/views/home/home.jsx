import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Header from '../../components/header'
import fetchApi from '../../lib/fetch'

export default function Home () {
  const [toDaysImage, setToDaysImage] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchApi()

        setToDaysImage(data)
      } catch (error) {
        console.error(error)

        setToDaysImage(null)
      }
    }
    loadData()
  }, [])

  console.log(toDaysImage)
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  }
})