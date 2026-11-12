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
  // TODO: 本人に確認する(論文 Adv. Intell. Syst. 7, 2400640 (2025) と、物理リザバーコンピューティングのレビュー論文をもとに作った仮の文章です)
  intro: {
    ja: 'センサ自体が情報処理を行う「インセンサコンピューティング」と、物理リザバーコンピューティングの研究を紹介します。',
    en: 'An overview of my research on in-sensor computing and physical reservoir computing.',
  } as Bi,

  // --- 研究紹介 -------------------------------------------------
  // 写真は論文 Kimizuka et al., Adv. Intell. Syst. 7, 2400640 (2025)(CC BY 4.0)の図を使用しています。
  projects: [
    {
      title: {
        ja: '物理リザバーコンピューティングとは',
        en: 'What is physical reservoir computing?',
      },
      body: [
        {
          ja: 'リザバーコンピューティングは、時間とともに変化するデータ(音、振動、触覚など)を処理するための機械学習の枠組みです。入力を、ランダムにつながった動的なシステム(リザバー)に与えると、その状態が、高次元で複雑なパターンに変換されます。学習するのは、その状態を読み出す最後の部分(読み出し層)だけで、多くの場合は線形回帰で済みます。リザバー自体は学習しないため、一般的なリカレントニューラルネットワークに比べて、学習が速く、計算コストも小さくなります。',
          en: 'Reservoir computing is a machine-learning framework for processing time-varying data such as sound, vibration and touch. The input is fed into a randomly connected dynamical system (the reservoir), which transforms it into rich, high-dimensional patterns of states. Only the final readout layer is trained, usually with simple linear regression. Because the reservoir itself is never trained, learning is fast and computationally cheap compared with ordinary recurrent neural networks.',
        },
        {
          ja: '物理リザバーコンピューティングでは、このリザバーを、ソフトウェアではなく、実際の物理系(電子素子、光、スピン、柔らかい材料など)で実現します。物質そのものの応答が計算を行うため、専用の計算回路を減らせ、低消費電力でリアルタイムな処理ができます。\nリザバーとして働くには、入力に対して非線形に応答すること、過去の入力の影響が時間とともに薄れていく「短期記憶」を持つこと、多くの独立した出力が得られること、異なる入力を区別できることが必要です。',
          en: 'In physical reservoir computing, the reservoir is realized not in software but by a real physical system, such as electronic devices, light, spins or soft materials. Since the material\'s own response does the computation, dedicated computing circuits can be reduced, enabling low-power, real-time processing.\nTo work as a reservoir, a system needs a nonlinear response to inputs, a short-term memory in which the influence of past inputs fades over time, many independent outputs, and the ability to tell different inputs apart.',
        },
        {
          ja: 'この研究では、CNT/PDMSナノ複合材料の、力を加えたときの非線形な抵抗変化と、時間応答を、リザバーとして利用しています。',
          en: 'In this research, the nonlinear resistance change and time response of a CNT/PDMS nanocomposite under applied force serve as the reservoir.',
        },
      ],
    },
    {
      title: {
        ja: '触覚インセンサコンピューティング',
        en: 'Haptic in-sensor computing',
      },
      body: [
        {
          ja: 'カーボンナノチューブ(CNT)とシリコーンゴム(PDMS)からなる柔らかいナノ複合材料を、触覚センサとして使うだけでなく、情報処理を行う「物理リザバー」としても利用しています。\nセンサの出力(時間とともに変わる非線形な応答)を、線形回帰という簡単な学習で読み出すだけで、物体を識別できます。',
          en: 'A soft CNT/PDMS nanocomposite is used not only as a tactile sensor but also as a physical reservoir that performs information processing.\nObjects are identified by reading out the sensor\'s nonlinear, time-dependent response with simple linear regression.',
        },
        {
          ja: 'センサと計算を分けずに一体で行うため、データの受け渡しが減り、消費電力と計算コストを抑えられます。ロボットに触覚を与える、小型・低消費電力なエッジAIへの応用を目指しています。',
          en: 'Because sensing and computing are integrated, less data is shuttled between components, which reduces power consumption and computational cost. The goal is small, low-power edge AI that gives robots a sense of touch.',
        },
      ],
      image: '/images/research-1.jpg',
    },
    {
      title: {
        ja: 'ロボットハンドによる物体認識',
        en: 'Object recognition with a robotic hand',
      },
      body: [
        {
          ja: '作製したセンサ(16出力)をロボットハンドに取り付け、日用品9種類(箱、洗剤、容器、カップ、サイコロなど)を把持して認識する実験を行いました。',
          en: 'The fabricated sensor (16 outputs) was attached to a robotic hand to grasp and recognize nine everyday objects, such as boxes, a detergent bottle, a cup and a dice.',
        },
        {
          ja: '9種類すべてで、認識精度は80%を超えました(9種類の混同行列で83.5%)。把持した直後の約10ステップのデータだけでも認識できるため、リアルタイムな認識が可能です。',
          en: 'Accuracy exceeded 80% even for all nine objects (83.5% in the nine-object confusion matrix). Recognition works with only about 10 time steps right after contact, enabling real-time classification.',
        },
      ],
      image: '/images/research-2.jpg',
    },
    {
      title: {
        ja: '多孔質CNT/PDMSセンサの作製',
        en: 'Fabrication of porous CNT/PDMS sensors',
      },
      body: [
        {
          ja: '砂糖の粒を型として使う「犠牲テンプレート法」で、スポンジ状の多孔質構造を持つCNT/PDMSセンサを作製しています。特別な装置を必要とせず、低コストで作れます。',
          en: 'Sponge-like porous CNT/PDMS sensors are made by the sacrificial template method, using sugar particles as the template. No special equipment is required, so the process is low-cost.',
        },
        {
          ja: 'CNTの量を変えると感度が変わり、少ないほど柔らかく高感度で、応答も速くなります。1万回を超える繰り返し測定でも、出力は安定していました。',
          en: 'The sensitivity depends on the CNT content: less CNT gives a softer, more sensitive and faster-responding sensor. The output remained stable over more than 10,000 loading cycles.',
        },
      ],
    },
  ] as ResearchItem[],

  // --- 設備紹介 -------------------------------------------------
  // TODO: 本人から設備の写真・説明が届いたら追加する
  facilities: [] as ResearchItem[],
};
