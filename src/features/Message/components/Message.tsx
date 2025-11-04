import { useMemo } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

import { MessageType, MessageRole } from '@/interfaces';
import { colors } from '@/ui/theme';

import { MessageAvatar } from './MessageAvatar';
import { MessageEmotion } from './MessageEmotion';
import { MessageLeftArrow } from './MessageLeftArrow';
import { MessageRightArrow } from './MessageRightArrow';

export function Message({ item }: { item: MessageType }) {
  const dynamicContainerStyles = useMemo<ViewStyle>(() => {
    if (item.role === MessageRole.USER) {
      return {
        alignSelf: 'flex-end',
      };
    }

    return {
      alignSelf: 'flex-start',
    };
  }, [item.role]);

  return (
    <View style={[styles.container, dynamicContainerStyles]}>
      {item.role === MessageRole.EXPERT && <MessageEmotion tone={item.tone} />}

      <View style={styles.messageWrapper}>
        {item.role === MessageRole.EXPERT && <MessageLeftArrow />}

        <View style={styles.content}>
          <Text>{item.content}</Text>
        </View>

        {item.role === MessageRole.USER && <MessageRightArrow />}
      </View>

      {item.role === MessageRole.USER && <MessageAvatar />}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    width: '70%',
    gap: 4,
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  messageWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  content: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.secondary,
    borderRadius: 16,
  },
});
