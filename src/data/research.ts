/**
 * ===========================================================
 *  研究内容ページ(研究紹介・設備紹介)
 * ===========================================================
 *
 * 書き方のルール(profile.ts と同じです)
 *  - 日本語は ja、英語は en に書きます。両方そろえてください。
 *  - 文字列は "..." または '...' で囲み、行の最後に , を付けます。
 *  - 一覧は上にあるものが先に表示されます。
 *  - 1件を増やすときは、下の「書き方の例」をコピーして、projects または facilities の
 *    [ ] の中に貼り付け、// を外して書き換えます。
 *  - 一覧が空のときは、その見出しは表示されません。
 *
 * 写真について
 *  - 写真は、プロジェクトの public/images/ フォルダに入れます
 *    (GitHub の画面なら「Add file」→「Upload files」)。
 *  - image には '/images/ファイル名' と書きます。写真がない項目は、image の行を消せば文章だけになります。
 *  - 写真は横長(3:2 くらい)で、1枚 1MB 以下が目安です。
 *
 * 書き方の例(1件分):
 *    {
 *      title: { ja: '研究テーマの名前', en: 'Research topic' },
 *      body: [
 *        { ja: '1つ目の段落です。', en: 'First paragraph.' },
 *        { ja: '2つ目の段落です。', en: 'Second paragraph.' },
 *      ],
 *      image: '/images/research-1.jpg',
 *    },
 */
import type { Bi } from '../i18n/bi';

export interface ResearchItem {
  title: Bi;
  body: Bi[]; // 段落ごとに { ja, en } を1つ追加
  image?: string;
}

export const research = {
  // ページ上部の導入文
  // TODO: 本人から文面が届くまで、仮の表示にしています。
  intro: {
    ja: '研究内容は準備中です。',
    en: 'Research content is under preparation.',
  } as Bi,

  // --- 研究紹介 -------------------------------------------------
  projects: [] as ResearchItem[],

  // --- 設備紹介 -------------------------------------------------
  facilities: [] as ResearchItem[],
};
