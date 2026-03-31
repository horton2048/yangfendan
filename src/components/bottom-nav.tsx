import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { colors, radii } from '@/theme/tokens';

type BottomNavProps = {
  active: 'feed' | 'works' | 'mine';
};

const items = [
  { key: 'feed', icon: 'home', href: '/feed' },
  { key: 'works', icon: 'grid-view', href: '/works' },
  { key: 'mine', icon: 'person', href: '/mine' },
] as const;

export function BottomNav({ active }: BottomNavProps) {
  return (
    <View style={styles.shell}>
      <View style={styles.pill}>
        {items.map((item) => {
          const selected = item.key === active;

          return (
            <Pressable
              key={item.key}
              onPress={() => router.replace(item.href as never)}
              style={[styles.item, selected ? styles.itemActive : null]}>
              <MaterialIcons
                color={selected ? colors.textInverse : colors.textMuted}
                name={item.icon}
                size={24}
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    alignItems: 'center',
    paddingBottom: 16,
    paddingHorizontal: 21,
    paddingTop: 10,
  },
  pill: {
    alignItems: 'center',
    backgroundColor: colors.surfaceGlass,
    borderColor: colors.border,
    borderRadius: 32,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 4,
    minHeight: 56,
    padding: 4,
    width: '100%',
  },
  item: {
    alignItems: 'center',
    borderRadius: 24,
    flex: 1,
    justifyContent: 'center',
    minHeight: 48,
  },
  itemActive: {
    backgroundColor: colors.olive,
    borderRadius: radii.card,
  },
});
