import { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { FlashList } from '@shopify/flash-list';

import {
  MessageInput,
  Message,
  MessageEmotionToggle,
  buildMessage,
  MessageExcuseToggle,
} from '@/features';
import {
  MessageExcuse,
  MessageTone,
  MessageRole,
  MessageType,
} from '@/interfaces';
import { generateRejection } from '@/services/ai';
import { Layout } from '@/ui/layout';

const maintainVisibleContentParams = {
  autoscrollToBottomThreshold: 0.2,
  startRenderingFromBottom: true,
};

export function Main() {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const [isPending, setIsPending] = useState(false);

  const [tone, setTone] = useState<MessageTone>(MessageTone.NEUTRAL);
  const [excuse, setExcuse] = useState<MessageExcuse>(MessageExcuse.EXCUSE);

  const handleGenerateRejection = useCallback(
    async (
      inputMessage: string,
      inputTone: MessageTone,
      inputExcuse: MessageExcuse,
    ) => {
      const response = await generateRejection(
        inputMessage,
        inputTone,
        inputExcuse,
      );

      return buildMessage(MessageRole.EXPERT, inputTone, response);
    },
    [],
  );

  const handleSubmit = useCallback(
    async (message: string) => {
      const msg = message.trim();
      if (!msg) {
        return;
      }

      setIsPending(true);
      const newMessage = buildMessage(MessageRole.USER, tone, msg);
      setMessages(prevMessages => [...prevMessages, newMessage]);

      try {
        const rejection = await handleGenerateRejection(msg, tone, excuse);
        setMessages(prevMessages => [...prevMessages, rejection]);
      } catch (error) {
        if (error instanceof Error && error.message === 'NOT_A_REQUEST') {
          const err = "Hmm, this doesn't look like a request to me...";
          const systemMessage = buildMessage(MessageRole.EXPERT, tone, err);
          setMessages(prevMessages => [...prevMessages, systemMessage]);
          return;
        }

        const err = 'Oops, something went wrong. Try again!';
        const systemMessage = buildMessage(MessageRole.EXPERT, tone, err);
        setMessages(prevMessages => [...prevMessages, systemMessage]);
      } finally {
        setIsPending(false);
      }
    },
    [tone, excuse, handleGenerateRejection],
  );

  return (
    <Layout.Body>
      <Layout.Header />
      <View style={styles.content}>
        <FlashList
          data={messages}
          keyExtractor={item => item.id}
          getItemType={item => item.role}
          renderItem={({ item }) => <Message item={item} />}
          maintainVisibleContentPosition={maintainVisibleContentParams}
        />

        <View style={styles.controls}>
          <MessageInput onSubmit={handleSubmit} isDisabled={isPending} />

          <View style={styles.controlsRow}>
            <MessageEmotionToggle
              tone={tone}
              onToggle={setTone}
              isDisabled={isPending}
            />

            <MessageExcuseToggle
              excuse={excuse}
              onToggle={setExcuse}
              isDisabled={isPending}
            />
          </View>
        </View>
      </View>
    </Layout.Body>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  controls: {
    padding: 16,
    gap: 8,
  },
  controlsRow: {
    flexDirection: 'row',
    gap: 8,
  },
});
