/**
 * ===========================================================
 *  事業化活動ページ(事業化プラン・メンバー紹介)
 * ===========================================================
 *
 * 書き方のルールは research.ts と同じです(ja と en を両方書く、一覧は上が先、など)。
 * 写真は public/images/ に入れ、image / photo に '/images/ファイル名' と書きます。
 * 一覧が空のときは、その見出しは表示されません。
 *
 * 書き方の例(事業化プラン 1件分):
 *    {
 *      title: { ja: 'プランの名前', en: 'Plan title' },
 *      body: [
 *        { ja: '1つ目の段落です。', en: 'First paragraph.' },
 *      ],
 *      image: '/images/business-1.jpg',
 *    },
 *
 * 書き方の例(メンバー 1人分。顔写真がない人は photo の行を消す):
 *    {
 *      name: { ja: '山田 太郎', en: 'Taro Yamada' },
 *      affiliation: { ja: '○○大学 ○○研究科', en: '○○ University' },
 *      career: [
 *        { ja: '2020年 ○○大学 卒業', en: '2020: B.Eng., ○○ University' },
 *      ],
 *      photo: '/images/member-1.jpg',
 *    },
 *
 * ※ メンバーの顔写真・経歴は、本人の掲載許可を得てから載せてください。
 */
import type { Bi } from '../i18n/bi';

export interface BusinessItem {
  title: Bi;
  body: Bi[];
  image?: string;
}

export interface Member {
  name: Bi;
  affiliation: Bi;
  career: Bi[];
  photo?: string;
}

export const business = {
  // TODO: 本人から文面が届くまで、仮の表示にしています。
  intro: {
    ja: '事業化活動は準備中です。',
    en: 'Business activities are under preparation.',
  } as Bi,

  // --- 事業化プラン ---------------------------------------------
  plans: [] as BusinessItem[],

  // --- メンバー紹介(上にある人が先に、左から右へ並びます) -------------
  members: [] as Member[],
};
