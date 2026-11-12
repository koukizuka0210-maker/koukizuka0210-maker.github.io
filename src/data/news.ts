/**
 * ===========================================================
 *  ニュース(新しい順に自動で並びます。書く順番は自由です)
 * ===========================================================
 *
 * 1件を増やすときは、下の「書き方の例」をコピーして、news の [ ] の中に貼り付け、
 * // を外して書き換えます。
 *  - slug: その記事のURLに使う名前。半角の英数字とハイフンだけ。他の記事と重ならないこと。
 *          例: slug: '2026-05-award' → https://〜/news/2026-05-award
 *  - date: 日付。必ず '2026-05-20' のように「年-月-日」(半角、ゼロ埋め)で書きます。
 *  - title / summary: 一覧に出る題名と、1〜2行の要約。
 *  - body: クリックしたあとの詳細ページの本文(段落ごとに { ja, en } を1つ追加)。
 *  - image: 写真(任意)。public/images/ に入れて '/images/ファイル名' と書きます。不要なら行ごと削除。
 *
 * 日本語は ja、英語は en に書きます。両方そろえてください。
 *
 * 書き方の例(1件分):
 *    {
 *      slug: '2026-05-example',
 *      date: '2026-05-20',
 *      title: { ja: 'ニュースの題名', en: 'News title' },
 *      summary: { ja: '一覧に出る短い要約です。', en: 'A short summary shown in the list.' },
 *      body: [
 *        { ja: '詳細ページの本文です。', en: 'Body text of the detail page.' },
 *      ],
 *      image: '/images/news-1.jpg',
 *    },
 */
import type { Bi } from '../i18n/bi';

export interface NewsItem {
  slug: string;
  date: string;
  title: Bi;
  summary: Bi;
  body: Bi[];
  image?: string;
}

export const news: NewsItem[] = [];
