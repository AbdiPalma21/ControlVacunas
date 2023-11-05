import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { Dimensions, Text, TextStyle, View, ViewStyle } from 'react-native'
import { AppStackScreenProps } from 'app/navigators'
import { Screen } from 'app/components'
import { colors, palette, poppins, spaceGrotesk } from 'app/theme'
import { Icon } from '@rneui/base'

interface Card {
  title: string
  description: string
  icon: {
    name: string
    type: string
  }
  onPress: () => void
}

export const HomeScreen: FC<AppStackScreenProps<'Home'>> = observer(({ route, navigation }) => {
  const cards: Card[] = [
    {
      title: 'Registrar empleado',
      description: 'Registra a un nuevo empleado en el sistema.',
      icon: {
        name: 'person',
        type: 'octicon',
      },
      onPress: () => console.log('Registrar empleado'),
    },
    {
      title: 'Consultar',
      description: 'Consulta el registro de empleados.',
      icon: {
        name: 'search',
        type: 'octicon',
      },
      onPress: () => console.log('Consultar'),
    },
  ]
  console.log("🚀 ~ file: HomeScreen.tsx:39 ~ constHomeScreen:FC<AppStackScreenProps<'Home'>>=observer ~ cards:", cards)

  return (
    <Screen style={$root} preset="scroll" safeAreaEdges={['bottom']} backgroundColor="#FFFFFF">
      <View style={$containerBackground}>
        <View style={$background} />
      </View>

      <View style={$contentWrapper}>
        <Text style={$welcomeHeading}>!BIENVENIDO!</Text>
        <Text style={$welcomeSubheading}>Selecciona la operación que deseas realizar.</Text>

        <View style={$cardWrapper}>
          {cards.map((card, index) => (
            <View key={index} style={$card}>
              <Icon name={card.icon.name} type={card.icon.type} size={50} color={palette.primary500} />
            </View>
          ))}
        </View>
      </View>
    </Screen>
  )
})

const $text: TextStyle = {
  fontFamily: poppins['400_regular'],
  color: colors.text,
}

const $lightText: TextStyle = {
  fontFamily: poppins['300_light'],
  color: colors.text,
}

const $welcomeHeading: TextStyle = {
  ...$text,
  fontFamily: spaceGrotesk['500_medium'],
  fontSize: 40,
  textAlign: 'left',
  color: colors.text,
}

const $welcomeSubheading: TextStyle = {
  ...$lightText,
  fontSize: 16,
  textAlign: 'left',
  color: colors.text,
  marginBottom: 200,
}

const $root: ViewStyle = {
  flex: 1,
}

const $containerBackground: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: Dimensions.get('window').height * 0.2,
}

const $background: ViewStyle = {
  width: Dimensions.get('window').width * 2.5,
  height: Dimensions.get('window').height * 0.7,
  borderBottomLeftRadius: 1000,
  borderBottomRightRadius: 1000,
  backgroundColor: palette.primary500,
}

const $contentWrapper: ViewStyle = {
  padding: 20,
  marginTop: Dimensions.get('window').height * 0.2,
}

const $cardWrapper: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 5,
}

const $card: ViewStyle = {
  width: (Dimensions.get('window').width - 45) / 2,
  flexShrink: 1,
  padding: 10,
  backgroundColor: palette.primary300,
  borderRadius: 10,

  shadowColor: '#091638',
  shadowOffset: { width: 10, height: 4 },
  shadowOpacity: 0.15,
  shadowRadius: 40,
  elevation: 5,
}
