import { MessageExcuse, MessageTone } from '@/interfaces';

export const MESSAGE_TONES_LABELS = {
  [MessageTone.SARCASTIC]: 'Sarcastic',
  [MessageTone.NEUTRAL]: 'Neutral',
  [MessageTone.FRIENDLY]: 'Friendly',
};

export const MESSAGE_EXCUSES_LABELS = {
  [MessageExcuse.EXCUSE]: 'Excuse',
  [MessageExcuse.NORMAL]: 'Normal',
};

export const MESSAGE_TONES_IMAGES = {
  [MessageTone.SARCASTIC]: require('@/assets/images/emotions/sarcastic.png'),
  [MessageTone.NEUTRAL]: require('@/assets/images/emotions/neutral.png'),
  [MessageTone.FRIENDLY]: require('@/assets/images/emotions/friendly.png'),
};
