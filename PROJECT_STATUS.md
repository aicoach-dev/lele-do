# 株式会社レレ堂 Webサイト — プロジェクト引き継ぎメモ

> 最終更新：2026年4月30日  
> 担当：Cowork（Claude）

---

## 1. 完成ファイル一覧

```
website/
├── index.html          ✅ TOPページ
├── service.html        ✅ サービス案内
├── company.html        ✅ 会社概要
├── recruit.html        ✅ 採用情報（★最重要）
├── contact.html        ✅ お問い合わせ
├── PROJECT_STATUS.md   📄 本ファイル
├── css/
│   └── style.css       ✅ 全ページ共通スタイル（31,917 bytes）
├── js/
│   └── main.js         ✅ 共通JS（8,274 bytes）
└── images/
    ├── lele-do_logo.png   元画像（1024×1536）
    ├── logo_full.png      ✅ ヘッダー・フッター用（704×320 / 透過PNG）
    ├── logo_text.png      ✅ テキストのみ（478×247 / 透過PNG）
    └── logo_icon.png      ✅ アイコンのみ・favicon用（244×252 / 透過PNG）
```

### 各ファイルの概要

| ファイル | サイズ | 主な内容 |
|---|---|---|
| index.html | 9,279 bytes | ヒーロー / QSC特徴3点 / サービス概要6カード / 採用バナー / 会社概要簡易 |
| recruit.html | 16,943 bytes | 採用ヒーロー / 働く魅力4カード / 募集要項テーブル / FAQアコーディオン6問 / エントリーフォーム（Formspree）/ フローティングCTAボタン |
| contact.html | 11,985 bytes | 2カラムレイアウト / 会社情報 / お問い合わせフォーム（Formspree）/ 個人情報同意チェック / プライバシーポリシー |
| company.html | 12,944 bytes | 会社情報テーブル / QSCカード / 代表メッセージ / 方針タブ5種 / Googleマップ |
| service.html | 12,437 bytes | サービス詳細カード6枚 / ご利用の流れ（5ステップ）/ FC加盟店表記 / 料金案内 |
| css/style.css | 31,917 bytes | CSS変数 / 共通コンポーネント / 全ページスタイル / レスポンシブ3段階対応 |
| js/main.js | 8,274 bytes | ハンバーガーメニュー / フェードインアニメ / FAQアコーディオン / ポリシータブ / Formspreeフォーム制御 / フローティングCTA / ヘッダー影 |

### 実装済み機能チェックリスト

- [x] レスポンシブ対応（モバイル〜デスクトップ 3段階）
- [x] ハンバーガーメニュー（767px以下）
- [x] スクロールフェードインアニメーション（IntersectionObserver）
- [x] FAQアコーディオン（recruit.html）
- [x] 方針タブ切り替え（company.html）
- [x] フローティングCTAボタン（recruit.html）
- [x] Formspreeフォーム送信 + サンクスメッセージ表示
- [x] favicon 設定（logo_icon.png）
- [x] ロゴ3分割（logo_full / logo_text / logo_icon）
- [x] 透過PNG化（白背景除去済み）

---

## 2. 【要確認】プレースホルダー一覧

次のステップで、以下の箇所を社長に確認して埋めてください。  
ファイル内を `【要確認】` で検索するとすべてヒットします（計19箇所）。

### ① 電話番号・メールアドレス（全ページ共通）

| ファイル | 行番号 | 内容 |
|---|---|---|
| index.html | 190行 | フッター：TEL / MAIL |
| recruit.html | 405行 | フッター：TEL / MAIL |
| contact.html | 67〜68行 | 会社情報欄：電話番号・受付時間 |
| contact.html | 76行 | 会社情報欄：メールアドレス |
| contact.html | 297行 | フッター：TEL / MAIL |
| company.html | 79行 | 会社情報テーブル：電話番号 |
| company.html | 83行 | 会社情報テーブル：メールアドレス |
| company.html | 274行 | フッター：TEL / MAIL |
| service.html | 319行 | フッター：TEL / MAIL |

→ **確認先：** 池田社長  
→ **対応方法：** 決定後、`css/style.css` のフッタースタイルと上記9箇所を一括置換

### ② Formspree エンドポイント

| ファイル | 行番号 | 内容 |
|---|---|---|
| recruit.html | 289行 | `action="https://formspree.io/f/【要設定】"` |
| contact.html | 113行 | `action="https://formspree.io/f/【要設定】"` |

→ **取得方法：** https://formspree.io でアカウント作成 → 新規フォーム作成 → IDをコピー  
→ 採用用・問い合わせ用で**2つ別々に**作成すること（通知先メールアドレスが異なるため）

### ③ 採用条件（recruit.html）

| 行番号 | 内容 |
|---|---|
| 125行 | 雇用形態（アルバイト・パート・業務委託・正社員など） |
| 129行 | 給与・報酬（時給・日給・月給など） |
| 138行 | 勤務地（対応エリア） |
| 146行 | 勤務時間（シフト例） |
| 172行 | 待遇・福利厚生 |

→ **確認先：** 池田社長

### ④ FAQ「車は必要ですか？」（recruit.html）

| 行番号 | 内容 |
|---|---|
| 229行 | FAQの回答本文（車の必要性） |

→ **確認先：** 池田社長（現場への移動手段を確認）

### ⑤ 代表メッセージ（company.html）

| 行番号 | 内容 |
|---|---|
| 136行 | 代表メッセージ本文（現状はプレースホルダー） |

→ **確認先：** 池田社長に文章を執筆いただくか、インタビューして代筆

---

## 3. 次フェーズ TODO

### 🔴 公開前に必須

- [ ] **【要確認】を全て埋める**（上記19箇所）
- [ ] **Formspree IDを取得・設定**（採用用・問い合わせ用の2つ）
- [ ] **フォームの動作テスト**（実際に送信して受信確認）
- [ ] **ドメイン取得**（例：lele-do.co.jp）— 確認先：池田社長
- [ ] **ホスティング設定**（Netlify or GitHub Pages 推奨）

### 🟡 公開前に推奨

- [ ] **写真素材の用意**  
  - ヒーロー背景（index / recruit）用のハウスクリーニング写真  
  - Unsplash（無料）で "house cleaning" 検索、または池田社長から実績写真を入手  
- [ ] **OGP画像設定**（SNSシェア時のプレビュー画像）  
  `<meta property="og:image" content="...">` を全ページ追加
- [ ] **Google Analytics 設定**（トラッキングID追加）
- [ ] **ブラウザ表示確認**（Chrome / Safari / Firefox / iOS Safari / Android Chrome）

### 🟢 中期フェーズ（公開後）

- [ ] **Google Search Console 登録**（インデックス促進・SEO）
- [ ] **サービス料金の掲載検討**（目安料金があるとCVRが上がる）
- [ ] **施工事例・実績写真の追加**（信頼性向上）
- [ ] **LINE公式アカウントとの連携**（問い合わせ導線の多様化）
- [ ] **求人媒体（Indeed / バイトル等）との連携**（採用強化）

---

## 4. ファイル操作メモ

### 【要確認】を一括置換する方法

VS Code を使う場合：
1. `website/` フォルダを開く
2. `Ctrl+Shift+H`（検索と置換）
3. 検索欄に `【要確認】` と入力
4. 「ファイル全体で置換」

コマンドラインの場合：
```bash
# 例：電話番号を置換
find website/ -name "*.html" -exec sed -i 's/【要確認】/03-XXXX-XXXX/g' {} \;
```

### ロゴ画像の使い分け

| 用途 | ファイル |
|---|---|
| ヘッダー・フッター（現在適用済み） | `images/logo_full.png` |
| ブラウザタブ favicon（現在適用済み） | `images/logo_icon.png` |
| SNS OGP / テキスト強調 | `images/logo_text.png` |
| OGP / ソーシャルシェア用 | `images/lele-do_logo.png`（元画像） |

---

*本ファイルは Cowork（Claude）が自動生成しました。*  
*内容の追記・修正は直接このファイルに行ってください。*
