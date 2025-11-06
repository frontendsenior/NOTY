export enum MessageRole {
  USER = 'user',
  EXPERT = 'expert',
}

export enum MessageTone {
  SARCASTIC = 'sarcastic',
  NEUTRAL = 'neutral',
  FRIENDLY = 'friendly',
}

export enum MessageExcuse {
  EXCUSE = 'excuse',
  NORMAL = 'normal',
}

export interface MessageType {
  id: string;
  tone: MessageTone;
  role: MessageRole;
  content: string;
  createdAt: Date;
}
