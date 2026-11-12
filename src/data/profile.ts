/**
 * ===========================================================
 *  プロフィール情報(このファイルだけ編集すれば、サイトの文章が変わります)
 * ===========================================================
 *
 * 書き方のルール
 *  - 日本語は ja、英語は en に書きます。両方そろえてください。
 *  - 文字列は必ず "..." または '...' で囲み、行の最後に , を付けます。
 *  - // から行末まではメモ(コメント)です。サイトには表示されません。
 *  - 一覧(career, education, awards など)は、上にあるものが先に表示されます。
 *    新しいものを上に追加してください。
 *
 * 業績(論文・学会発表)はこのファイルではなく、プロジェクト直下の
 * citations.bib に書きます。
 */
import type { ImageMetadata } from 'astro';
import photo from '../assets/avatar-placeholder.png';
import type { Bi } from '../i18n/bi';

export interface Profile {
  photo: ImageMetadata;
  name: Bi;
  role: Bi;
  university: Bi;
  department: Bi;
  headline: Bi;
  bio: Bi[];
  interests: Bi[];
  email: string;
  links: { label: string; url: string }[];
  career: { period: Bi; title: Bi; org: Bi }[];
  education: { period: Bi; title: Bi; org: Bi }[];
  awards: { date: Bi; title: Bi; org?: Bi }[];
  funding: { period: Bi; title: Bi; org: Bi; detail?: Bi }[];
  notice?: Bi;
}

export const profile: Profile = {
  // 写真: src/assets/ に画像を置いて、ファイル名をここに合わせます(正方形が目安)。
  // いまは仮の画像です。本人の写真が届いたら差し替えます。
  photo,

  // --- 基本情報 -------------------------------------------------
  name: { ja: '君塚 紘喜', en: 'Kouki Kimizuka' },
  role: { ja: '博士研究員', en: 'Postdoctoral Researcher' },
  university: { ja: '九州工業大学', en: 'Kyushu Institute of Technology' },
  department: {
    ja: '未来思考実証センター / ニューロモルフィックAIハードウェア研究センター',
    // TODO: 「未来思考実証センター」の英語の正式名称を本人に確認する(以下の前半は仮の訳です)
    en: 'Center for Future-Oriented Demonstration / Research Center for Neuromorphic AI Hardware',
  },

  // トップの大きな見出し(短く、1〜2文)。共有時の説明文にも使われます。
  // TODO: 本人に確認する(LinkedIn の経歴と、受賞した発表題目から作った仮の文です)
  headline: {
    ja: 'ニューロモルフィックAIハードウェアの研究をしています。',
    en: 'Researching neuromorphic AI hardware.',
  },

  // --- 自己紹介(段落ごとに { ja, en } を1つ追加) ----------------
  // TODO: 本人に確認する(LinkedIn の経歴と、受賞した発表題目から作った仮の文です)
  bio: [
    {
      ja: '九州工業大学 ニューロモルフィックAIハードウェア研究センターの博士研究員です。\n2026年3月に同大学院の博士後期課程を修了し、同年4月から現職にあります。',
      en: 'I am a postdoctoral researcher at the Research Center for Neuromorphic AI Hardware, Kyushu Institute of Technology.\nI completed my Ph.D. at the same university in March 2026 and started my current position in April 2026.',
    },
    {
      // 文ごとに改行(\n)を入れています。段落の間の空行は入りません。
      // TODO: 「1/10〜1/100」の数値と表現は、本人に確認する(元の文は「1/10〜1/100以下」)
      ja: '研究と事業化の両面から、ナノ材料を用いた「AI機能を内蔵した柔軟触覚センサ」の実現を目指しています。\nセンサ自体が情報処理を行う独自の物理リザバーコンピューティング技術により、従来のAIシステムと比べて消費電力を1/10〜1/100に抑えながら、リアルタイムな触覚認識を実現します。\nこれにより、小型・低消費電力・低遅延なエッジAIを可能にし、農業・物流ロボットや宇宙分野など、さまざまな分野への展開を目指しています。',
      en: 'Through both research and commercialization, I am working to realize an \"AI-integrated flexible tactile sensor\" based on nanomaterials.\nOur original physical reservoir computing technology lets the sensor itself process information, achieving real-time tactile recognition while reducing power consumption to 1/10-1/100 of conventional AI systems.\nThis enables compact, low-power, low-latency edge AI, and we aim to apply it to agricultural and logistics robots, space, and many other fields.',
    },
  ],

  // --- 研究分野(キーワード。空のままにすると、この欄は表示されません) ---
  // TODO: 本人に確認する(仮のキーワードです)
  interests: [
    { ja: 'ニューロモルフィックAIハードウェア', en: 'Neuromorphic AI hardware' },
    { ja: 'リザバーコンピューティング', en: 'Reservoir computing' },
    { ja: 'インセンサコンピューティング', en: 'In-sensor computing' },
    { ja: 'ナノ複合材料', en: 'Nanocomposites' },
  ],

  // --- 連絡先 ---------------------------------------------------
  // 本人から受け取った連絡先(大学のメールアドレス)。公開してよいか、最終確認する。
  email: 'kimizuka.kouki349@mail.kyutech.jp',
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kouki-kimizuka-9321b7257/' },
    // { label: 'Google Scholar', url: 'https://scholar.google.com/' },
  ],

  // --- 職歴(新しいものを上に) ---------------------------------
  career: [
    {
      period: { ja: '2026年4月 - 現在', en: 'Apr. 2026 - present' },
      title: { ja: '博士研究員', en: 'Postdoctoral Researcher' },
      org: {
        ja: '九州工業大学 ニューロモルフィックAIハードウェア研究センター',
        en: 'Research Center for Neuromorphic AI Hardware, Kyushu Institute of Technology',
      },
    },
    {
      period: { ja: '2024年9月 - 2025年3月', en: 'Sep. 2024 - Mar. 2025' },
      title: { ja: '研究インターン', en: 'Research Intern' },
      org: {
        ja: 'トゥウェンテ大学(オランダ)',
        en: "University of Twente, The Netherlands (Prof. Wilfred G. van der Wiel's group)",
      },
    },
  ],

  // --- 学歴(新しいものを上に) -----------------------------------
  // TODO: 研究科・専攻名の正式な表記を本人に確認する
  education: [
    {
      period: { ja: '2023年4月 - 2026年3月', en: 'Apr. 2023 - Mar. 2026' },
      title: { ja: '博士後期課程(修了)', en: "Ph.D. program (completed)" },
      org: {
        ja: '九州工業大学 大学院 生命体工学研究科 生命体工学専攻',
        en: 'Graduate School of Life Science and Systems Engineering, Kyushu Institute of Technology',
      },
    },
    {
      period: { ja: '2021年4月 - 2023年3月', en: 'Apr. 2021 - Mar. 2023' },
      title: { ja: '博士前期課程(修士)', en: "Master's program" },
      org: {
        ja: '九州工業大学 大学院',
        en: 'Kyushu Institute of Technology',
      },
    },
    {
      period: { ja: '2017年4月 - 2021年3月', en: 'Apr. 2017 - Mar. 2021' },
      title: { ja: '学士', en: "Bachelor's program" },
      org: {
        ja: '福岡大学(物理学)',
        en: 'Fukuoka University (Physics)',
      },
    },
  ],

  // --- 受賞(業績の中に表示。新しいものを上に。org は任意) ---------
  // 出典: 本人の資料(「業績」のスライド)。年は、資料の年のとおりです。
  // TODO: 次を本人に確認する
  //   - 各賞の正式名称と、英語表記(下の英語は仮の訳です)
  //   - 「MNC2022」「MNC2023」の賞の年(資料では 2023年、2024年。学会の開催年とずれている可能性)
  //   - 授与団体(org)。分かるものは追記する
  awards: [
    {
      date: { ja: '2025年', en: '2025' },
      title: { ja: 'NOLTA Presentation Award', en: 'NOLTA Presentation Award' },
    },
    {
      date: { ja: '2024年', en: '2024' },
      title: { ja: 'Nature Conference Best Presentation Award', en: 'Nature Conference Best Presentation Award' },
    },
    {
      date: { ja: '2024年', en: '2024' },
      title: { ja: 'MNC2023 Young\'s Author Presentation Award', en: 'MNC2023 Young\'s Author Presentation Award' },
    },
    {
      date: { ja: '2023年', en: '2023' },
      title: { ja: 'ロボカップジャパンOPL2023 優勝', en: 'RoboCup Japan OPL 2023, Winner' },
    },
    {
      date: { ja: '2023年', en: '2023' },
      title: { ja: '第55回秋季応用物理学会 講演奨励賞', en: 'The 55th JSAP Autumn Meeting, Young Scientist Presentation Award' },
      org: { ja: '応用物理学会', en: 'The Japan Society of Applied Physics' },
    },
    {
      date: { ja: '2023年', en: '2023' },
      title: { ja: 'MNC2022 Young\'s Author Presentation Award', en: 'MNC2022 Young\'s Author Presentation Award' },
    },
  ],

  // --- 競争的資金獲得実績(新しいものを上に。空のままにすると、この欄は表示されません) ---
  //   detail は、研究課題名など(任意。不要なら行ごと削除)
  funding: [
    {
      // TODO: 採択の時期・支援の内容(期間・金額など)は、本人に確認して、必要なら書き足す
      period: { ja: '2026年度', en: 'FY2026' },
      title: {
        ja: 'PARKS 起業活動支援プログラム Step1 採択',
        en: 'Selected for PARKS Startup Activity Support Program, Step 1',
      },
      org: {
        ja: 'PARKS(Platform for All Regions of Kyushu & Okinawa for Startup-ecosystem)',
        en: 'PARKS (Platform for All Regions of Kyushu & Okinawa for Startup-ecosystem)',
      },
      detail: {
        ja: 'テーマ: 小型化・省電力化・高機能化を両立可能かつ接触面が柔らかい“AI機能を内蔵したスマートな触覚センサ”の開発',
        en: 'Theme: Development of an AI-Integrated Smart Tactile Sensor with a Soft Interface: Achieving Simultaneous Miniaturization, Low Power Consumption, and High Functionality',
      },
    },
    {
      // 出典: KAKEN(KAKENHI-PROJECT-24KJ1817)。研究期間は 2024年4月23日 〜 2026年3月31日。
      // TODO: 英語の課題名は仮の訳です(KAKEN に英語名の記載なし)。本人に確認する。
      period: { ja: '2024年4月 - 2026年3月', en: 'Apr. 2024 - Mar. 2026' },
      title: {
        ja: '日本学術振興会 特別研究員奨励費(DC2)',
        en: 'JSPS Research Fellowship for Young Scientists (DC2), Grant-in-Aid for JSPS Fellows',
      },
      org: {
        ja: '日本学術振興会(九州工業大学 大学院生命体工学研究科)',
        en: 'Japan Society for the Promotion of Science (JSPS)',
      },
      detail: {
        ja: '課題名: ナノ材料を用いたリザバー素子によるインセンサーコンピューティング(課題番号 24KJ1817)',
        en: 'Project: In-sensor computing with reservoir devices using nanomaterials (KAKENHI 24KJ1817)',
      },
    },
  ],

  // --- 注意書き(公開するときは、この項目ごと削除してください) ------
  notice: {
    ja: 'このページは準備中です。内容は順次更新します。',
    en: 'This page is under construction. The content will be updated progressively.',
  },
};
