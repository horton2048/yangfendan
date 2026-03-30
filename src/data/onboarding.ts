import type { ImageSourcePropType } from 'react-native';

export type LanguageCode = 'zh' | 'en' | 'system';

export type PillItem = {
  id?: LanguageCode;
  label: string;
  highlighted?: boolean;
  displayFont?: boolean;
};

export type StackLayer = {
  title: string;
  body: string;
  tone: 'light' | 'muted' | 'accent';
};

export type OnboardingStep = {
  key: 'warm' | 'transparent-ai' | 'language';
  title: string;
  subtitle: string;
  ctaLabel: string;
  pageLabel: string;
  note: string;
  pills: PillItem[];
  card: {
    title: string;
    body: string;
  };
  hero: {
    kind: 'photo' | 'stack' | 'brand';
    image?: ImageSourcePropType;
    badge?: string;
    layers?: StackLayer[];
    brandTitle?: string;
    brandSubtitle?: string;
    brandNote?: string;
  };
};

export const languageLabels: Record<LanguageCode, string> = {
  zh: '中文',
  en: 'English',
  system: '跟随系统',
};

export const onboardingSteps: OnboardingStep[] = [
  {
    key: 'warm',
    title: '不是来刷信息的。',
    subtitle: '这里更像一个慢一点认识匠人的地方。',
    ctaLabel: '继续',
    pageLabel: '1 / 3',
    note: '没有热搜，没有催促，只留下值得继续看的东西。',
    pills: [
      { label: '真实的人', highlighted: true },
      { label: '真实的话' },
      { label: '真实素材' },
    ],
    card: {
      title: '你会慢慢靠近她。',
      body: '先看到匠人动态，再听她说过的话，也能知道这些内容从哪里来。',
    },
    hero: {
      kind: 'photo',
      image: require('../../assets/branding/weaver-hero.jpg'),
    },
  },
  {
    key: 'transparent-ai',
    title: 'AI 不是替她发声。',
    subtitle: '它只整理她说过的话，也保留每句话的出处。',
    ctaLabel: '继续',
    pageLabel: '2 / 3',
    note: '每次回答都应该回到原始录音、逐字翻译或整理稿。',
    pills: [
      { label: '可追溯', highlighted: true },
      { label: '不编造' },
      { label: '人工审核' },
    ],
    card: {
      title: '回答有边界',
      body: '如果素材里没有，她会直接说“这个她没说过，我不知道”。',
    },
    hero: {
      kind: 'stack',
      badge: '可追溯回答',
      layers: [
        {
          title: 'L1 原始录音 / 视频',
          body: '第一层素材，不被跳过。',
          tone: 'light',
        },
        {
          title: 'L2 逐字翻译稿',
          body: '整理之前，先保留她本来的说法。',
          tone: 'muted',
        },
        {
          title: 'L3 AI 整理稿',
          body: '没有的内容，就直接说不知道。',
          tone: 'accent',
        },
      ],
    },
  },
  {
    key: 'language',
    title: '先选你习惯的语言。',
    subtitle: '界面一次只显示一种语言，原帖保留原文，需要时再看翻译。',
    ctaLabel: '开始看看',
    pageLabel: '3 / 3',
    note: '默认跟随系统语言，也可以随时在设置中切换。',
    pills: [
      { id: 'zh', label: '中文', highlighted: true },
      { id: 'en', label: 'English', displayFont: true },
      { id: 'system', label: '跟随系统' },
    ],
    card: {
      title: '准备好了',
      body: '进入 Young Fun Damn 之后，你会看到匠人动态、AI 对话和一个低噪音的论坛社区。',
    },
    hero: {
      kind: 'brand',
      brandTitle: 'Young Fun Damn',
      brandSubtitle: '让生活慢一点。',
      brandNote: '先选语言，再慢慢认识一个人、一门手艺和一片地方。',
    },
  },
];
