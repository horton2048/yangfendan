import type { ImageSourcePropType } from 'react-native';

const exportedAssets = {
  authHero: require('../../assets/v12-exports/WNOTq.png'),
  detailHero: require('../../assets/v12-exports/yuC6w.png'),
  feedSystem: require('../../assets/v12-exports/aHUsz.png'),
  logoPanel: require('../../assets/v12-exports/6ob7M.png'),
  makerHero: require('../../assets/v12-exports/iDE9P.png'),
  makerWorkThumb: require('../../assets/v12-exports/nZmoh.png'),
  onboardingOne: require('../../assets/v12-exports/ZfsTc.png'),
  onboardingTwo: require('../../assets/v12-exports/AlcdX.png'),
  sharePreview: require('../../assets/v12-exports/3Z7xd.png'),
  userArrivedThumb: require('../../assets/v12-exports/7AMlo.png'),
  wantedThumb: require('../../assets/v12-exports/4FfYx.png'),
  workAlt: require('../../assets/v12-exports/PJmhg.png'),
  workMain: require('../../assets/v12-exports/Ucw9F.png'),
  brandLogo: require('../../assets/branding/young-fun-damn-logo-optimized.jpg'),
} as const;

export type OnboardingSlide = {
  body: string;
  ctaLabel: string;
  footnote?: string;
  hero: ImageSourcePropType;
  key: 'belief' | 'agent' | 'feed';
  previewChips?: string[];
  quote?: string;
  showSkip?: boolean;
  stepLabel: string;
  subtitle?: string;
  title: string;
};

export const onboardingSlides: OnboardingSlide[] = [
  {
    key: 'belief',
    stepLabel: '第一步',
    title: '这里不是商店',
    body: '先认识她们，再认识她们做的东西。这里没有出价，也不催着你做决定。',
    quote: '先让用户认识匠人，再谈后续一切。',
    ctaLabel: '下一步',
    hero: exportedAssets.onboardingOne,
    showSkip: true,
  },
  {
    key: 'agent',
    stepLabel: '第二步',
    title: '可以问问她',
    body: '她不用手机。这里的话，是从她说过的东西里整理出来的。我们尽量不改她的意思。',
    subtitle: '她说的，智能整理',
    quote: '石榴不是为了热闹，是为了让中间那团红像慢慢长出来的。',
    previewChips: ['问做法', '问图案来意'],
    ctaLabel: '下一步',
    hero: exportedAssets.onboardingTwo,
  },
  {
    key: 'feed',
    stepLabel: '第三步',
    title: '从流动开始',
    body: '先看看她，再慢慢记住她。',
    footnote: '她今天在做什么，也会知道为什么。',
    previewChips: ['今天在做什么', '为什么会这样做'],
    ctaLabel: '进入流动',
    hero: exportedAssets.logoPanel,
  },
];

export const authOptions = ['微信登录', 'Apple ID 登录', 'Google 登录'] as const;

export const feedCircles = ['全部', '新疆', '在看的', '它到家了'] as const;

export type WorkCardItem = {
  id: string;
  image: ImageSourcePropType;
  maker: string;
  meta: string;
  name: string;
  status: string;
  statusTone: 'olive' | 'terracotta';
};

export const workCards: WorkCardItem[] = [
  {
    id: 'pomegranate',
    image: exportedAssets.workMain,
    maker: '热依拉',
    meta: '用了 18 天 · 棉线 / 羊毛 · 就这一件',
    name: '石榴纹绣片',
    status: '展示中',
    statusTone: 'olive',
  },
  {
    id: 'wood-bowl',
    image: exportedAssets.workAlt,
    maker: '阿不都热合曼',
    meta: '用了 9 天 · 胡杨木 · 5件里的第3件',
    name: '胡杨木小碗',
    status: '已找到人',
    statusTone: 'terracotta',
  },
];

export const worksFilters = ['全部', '展示中', '已找到人'] as const;

export const worksTopTabs = [
  { key: 'works', label: '作品' },
  { key: 'messages', label: '消息', unread: true },
] as const;

export const workDetail = {
  askChips: ['这个图案是什么意思', '跟她说句话'],
  detailLines: ['用了 18 天', '棉线 / 羊毛', '38 × 24 cm', '新疆 · 和田洛浦县'],
  hero: exportedAssets.detailHero,
  maker: '热依拉 · 可进入匠人主页',
  story:
    '她说石榴不是用来讨喜的图案，是一种会慢慢长出来的耐心。线要一根根压住，不能急，也不能太满。整块布看上去安静，但手一直在里面走。',
  title: '石榴纹绣片',
};

export const feedCards = {
  agent: {
    avatar: '热',
    badge: '蓝色认证',
    name: '热依拉 · 匠人分身',
    quote: '今天缝石榴纹的时候，想起母亲说，针脚要留一点呼吸。',
    status: '她现在可能在工作',
  },
  arrived: {
    badge: '认证买家',
    city: '林棠 · 上海',
    thumb: exportedAssets.userArrivedThumb,
    title: '石榴纹绣片',
    body: '它到家以后更安静了，挂在窗边时，线会在下午一点点变暖。',
  },
  system: {
    image: exportedAssets.feedSystem,
    meta: '预计 4月上旬上架 · 新疆刺绣',
    state: '新品预告',
    subtitle: '热依拉 · 石榴纹绣片',
    title: '快要出来了',
  },
};

export const messageGroups = {
  agent: {
    body: '你问她为什么会反复做石榴纹。她回了一段很短的话，说这是会慢慢长出来的耐心。',
    time: '刚刚',
    title: '她的回答整理好了',
  },
  system: [
    {
      body: '你记着的石榴纹绣片有新内容了。热依拉补了一段关于图案来历的口述。',
      time: '2小时前',
      title: '作品更新',
    },
    {
      body: '你关注的胡杨木小碗已经在线下找到它的人。作品页现在可以看到它去了哪里。',
      time: '昨天',
      title: '它找到人了',
    },
  ],
};

export const profileSummary = {
  avatar: '林',
  city: '上海',
  makerCount: '在看的 12',
  name: '林棠',
  shareBody: '深色极简风格，聚焦作品和匠人故事。',
  shareTime: '昨天 21:18 分享到站外',
  wantedCount: '想要的 28',
};

export const makerProfile = {
  description:
    '古丽娜不用手机。这里的字，是AI从她说过的话里整理出来的。尽量没有改她的意思。',
  hero: exportedAssets.makerHero,
  meta: '新疆 · 和田洛浦县 · 刺绣 · 从业 27 年',
  name: '古丽娜 · Gulina',
  post: '今天把最后一圈叶子补完了。花纹不是为了热闹，是为了让中间那团红看起来像慢慢长出来的。',
  workThumb: exportedAssets.makerWorkThumb,
};

export const shareCard = {
  channels: ['微信', '微博', 'Instagram', '保存图片'] as const,
  image: exportedAssets.sharePreview,
  makerMeta: '热依拉 · 用了 18 天',
  styles: ['深色极简', '浅色留白', '原色质感'] as const,
  subtitle: '来自羊粪蛋 · 新疆手工艺',
  title: '石榴纹绣片',
};

export const screenCopy = {
  auth: {
    heroNote: '新疆手工艺的入口',
    heroSub: '先到这里，再去看她们和她们做的东西。',
    subtitle: '先用手机号或邮箱进来，再慢慢认识这里的人和东西。',
    title: '进入这里',
  },
  feed: {
    eyebrow: '流动首页',
    subtitle: '匠人、作品和到家的故事，都在这里慢慢流动。',
    title: '流动',
  },
  maker: {
    subtitle: '匠人主页',
  },
  messages: {
    subtitle: '系统更新和匠人来信，都在这里。',
    title: '消息',
  },
  mine: {
    subtitle: '在看的、记着的、分享过的，都收在这里。',
    title: '我的',
  },
  share: {
    subtitle: '先选风格，再把作品带出去。',
    title: '分享卡',
  },
  works: {
    subtitle: '每件东西背后，都有人和时间。',
    title: '作品',
  },
};

export function getStatusTone(statusTone: WorkCardItem['statusTone']) {
  return statusTone;
}
