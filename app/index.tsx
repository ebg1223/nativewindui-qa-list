import { Icon } from '@roninoss/icons';
import { Stack } from 'expo-router';
import * as React from 'react';
import { Platform, View } from 'react-native';

import {
  ESTIMATED_ITEM_HEIGHT,
  List,
  ListDataItem,
  ListItem,
  ListSectionHeader,
  getStickyHeaderIndices,
} from '~/components/nativewindui/List';
import { Text } from '~/components/nativewindui/Text';
import { useColorScheme } from '~/lib/useColorScheme';

export default function FullWidthListScreen() {
  const { colors } = useColorScheme();

  return (
    <>
      <Stack.Screen options={{ title: 'Full Width', headerShadowVisible: false }} />
      <List
        variant="full-width"
        data={DATA}
        estimatedItemSize={ESTIMATED_ITEM_HEIGHT.withSubTitle}
        renderItem={(info) => {
          if (typeof info.item === 'string') {
            return <ListSectionHeader {...info} />;
          }
          return (
            <ListItem
              leftView={
                <View className="flex-1 justify-center px-4">
                  <Icon name="bell-outline" color={colors.primary} />
                </View>
              }
              rightView={
                <View className="flex-1 flex-row items-center px-4">
                  <Text className="ios:opacity-100 text-muted-foreground opacity-0">Detail</Text>
                  <Icon
                    ios={{ name: 'chevron.right' }}
                    materialIcon={{ type: 'MaterialIcons', name: 'arrow-right' }}
                    color={colors.grey}
                    size={Platform.OS === 'ios' ? 18 : 21}
                  />
                </View>
              }
              {...info}
              onPress={() => console.log('onPress')}
            />
          );
        }}
        keyExtractor={keyExtractor}
        stickyHeaderIndices={getStickyHeaderIndices(DATA)}
      />
    </>
  );
}

function keyExtractor(item: (Omit<ListDataItem, string> & { id: string }) | string) {
  return typeof item === 'string' ? item : item.id;
}

const DATA = [
  'Sticky header',
  {
    id: '1',
    title: 'Hello',
    subTitle: 'World',
  },
  {
    id: '2',
    title: 'Hello',
    subTitle: 'World',
  },

  {
    id: '3',
    title: 'Hello',
    subTitle: 'World',
  },
  {
    id: '4',
    title: 'Hello',
    subTitle: 'World',
  },
  {
    id: '5',
    title: 'Hello',
    subTitle: 'World',
  },
  {
    id: '6',
    title: 'Hello',
    subTitle: 'World',
  },
  'Sticky header 2',
  {
    id: '7',
    title: 'Hello',
    subTitle: 'World',
  },
  {
    id: '8',
    title: 'Hello',
    subTitle: 'World',
  },
  {
    id: '9',
    title: 'Hello',
    subTitle: 'World',
  },
  {
    id: '10',
    title: 'Hello',
    subTitle: 'World',
  },
  'Sticky header 3',
  {
    id: '11',
    title: 'Hello',
    subTitle: 'World',
  },
  {
    id: '12',
    title: 'Hello',
    subTitle: 'World',
  },
  {
    id: '13',
    title: 'Hello',
    subTitle: 'World',
  },
  {
    id: '14',
    title: 'Hello',
    subTitle: 'World',
  },
  {
    id: '15',
    title: 'Hello',
    subTitle: 'World',
  },
  {
    id: '16',
    title: 'Hello',
    subTitle: 'World',
  },
  {
    id: '17',
    title: 'Hello',
    subTitle: 'World',
  },
  {
    id: '18',
    title: 'Hello',
    subTitle: 'World',
  },
];
