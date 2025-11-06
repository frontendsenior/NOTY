import Crypto from 'react-native-quick-crypto';
import { MessageType, MessageRole, MessageTone } from '@/interfaces';

export function buildMessage(
  role: MessageRole,
  tone: MessageTone,
  content: string,
): MessageType {
  return {
    id: Crypto.randomUUID(),
    role,
    content,
    createdAt: new Date(),
    tone,
  };
}
