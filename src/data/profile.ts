/**
 * ===========================================================
 *  プロフィール情報(このファイルだけ編集すれば、サイトの文章が変わります)
 * ===========================================================
 *
 * 書き方のルール
 *  - 日本語は ja、英語は en に書きます。両方そろえてください。
 *  - 文字列は必ず "..." または '...' で囲み、行の最後に , を付けます。
 *  - // から行末まではメモ(コメント)です。サイトには表示されません。
 *  - 一覧(education, awards など)は、上にあるものが先に表示されます。
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
  education: { period: Bi; title: Bi; org: Bi }[];
  awards: { date: Bi; title: Bi; org: Bi }[];
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
    // TODO: 英語の正式名称を本人に確認する(以下は仮の訳です)
    en: 'Center for Future-Oriented Demonstration / Research Center for Neuromorphic AI Hardware',
  },

  // トップページの大きな見出し(短く、1〜2文)。共有時の説明文にも使われます。
  // TODO: 本人から文面が届くまで、仮の表示にしています。
  headline: {
    ja: '準備中です。',
    en: 'Coming soon.',
  },

  // --- 自己紹介(段落ごとに { ja, en } を1つ追加) ----------------
  // TODO: 本人から文面が届いたら差し替えます。
  bio: [
    {
      ja: '自己紹介は準備中です。',
      en: 'Profile text is under preparation.',
    },
  ],

  // --- 研究分野(キーワード。空のままにすると、この欄は表示されません) ---
  interests: [
    // { ja: '研究分野の例', en: 'Example research field' },
  ],

  // --- 連絡先 ---------------------------------------------------
  // TODO: 本人のメールアドレスに差し替える(いまは、誰も使えないダミーです)
  email: 'xxxx@example.com',
  links: [
    // { label: 'Google Scholar', url: 'https://scholar.google.com/' },
  ],

  // --- 学歴(新しいものを上に。空のままにすると、この欄は表示されません) ---
  education: [
    // {
    //   period: { ja: '2020年4月 - 2023年3月', en: 'Apr. 2020 - Mar. 2023' },
    //   title: { ja: '博士後期課程', en: 'Ph.D. program' },
    //   org: { ja: '○○大学 大学院○○研究科', en: 'Graduate School of ○○, ○○ University' },
    // },
  ],

  // --- 受賞歴(新しいものを上に。空のままにすると、この欄は表示されません) ---
  awards: [
    // {
    //   date: { ja: '2025年11月', en: 'Nov. 2025' },
    //   title: { ja: '賞の名前', en: 'Name of the award' },
    //   org: { ja: '授与した団体', en: 'Awarding organization' },
    // },
  ],

  // --- 注意書き(公開するときは、この項目ごと削除してください) ------
  notice: {
    ja: 'このページは準備中です。内容は順次更新します。',
    en: 'This page is under construction. The content will be updated progressively.',
  },
};
