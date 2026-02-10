const parts_data = [
    {
        name: "PRパート",
        desc: "PRパートとは、来場者の方々に菁々祭を最大限楽しんでもらうため、グッズ販売や案内業務を行うパートです。",
        sections: [
            {
                name: "製作セクション",
                desc: "あらゆるもののデザインをしています。",
                details: [
                    "全ての仕事がリモートワークで行われます｡夏休みに登校する必要がないです！また、PCを使ったデザインの作成･動画編集などを通じ､菁々祭だけで終わらない､将来にも役立つスキルをたくさん身につけることが出来ます。<br>※このセクションでは、Adobeソフト(有料)の購入が必須になります。",
                    "パンフレットの制作、グッズのデザイン、X･Instagramで行われるカウントダウン企画の制作など、業務は多岐にわたります。",
                    "な　い　で　す　！ ぜひ､めいっぱい菁々祭を楽しんで下さい！！",
                    '菁々祭を"デザイン"したい人、夏休みは家から出たくないという人、ぜひ製作セクションへ！！',
                ],
                status: { 技術: 80, 達成感: 100, セクションへの愛: 100 },
            },
            {
                name: "技術セクション",
                desc: "主にWebサイトを製作し、情報面で菁々祭を支えています。",
                details: [
                    "基本的にパソコン上での作業になり、会議などもリモートで行うのがほとんどなので、学校に行く必要は全くありません。アットホームです！",
                    "特に大きな仕事としてWebサイトのコーディングがあります。菁々祭に来る人が快適に使えるようなかっこいいサイトをHTMLやCSS、JavaScriptなどを書いて製作します！実はこのパート員募集サイトを作っているのも技術セクションです！",
                    "ありません！",
                    "最初は知識がなくても全く問題ないです。全面的にサポートをするつもりなのでご安心ください！自らの手でWebサイトを少しづつ作り上げていくのはとても楽しい体験になるはずですので、Webサイトを作りたい人・技術に詳しい人・詳しくなくても学んでみたい人はぜひ技術セクションへ！",
                ],
                status: { 難しさ: 100, 学び: 100, 楽しさ: 100 },
            },
            {
                name: "運営セクション",
                desc: "夏休みから一ヶ月後の菁々祭当日に向けて、準備・運営をするセクションです。",
                details: [
                    "菁々祭を実行するうえで必要不可欠な業務を担当しています。",
                    "①校内案内板(サインシステム)の制作・設置<br>②整理券の制作<br>③クラブ看板の設置<br>④転身殿前インフォメーションの設営<br>⑤カウントダウンオブジェ(転身殿前のオブジェ)の制作<br>⑥Youtubeなどに投稿する動画の企画・撮影",
                    "転身殿前インフォメーションの運営（放送・整理券配布・落とし物管理など）",
                    "どうしてもたくさんの人手が必要となるセクションです。そのため、もし少しでも気になれば、兼セクションも可能なのでたくさんのご応募をお待ちしています！",
                ],
                status: { 時間: 50, 難しさ: 30, 楽しさ: 100 },
            },
            {
                name: "販売セクション",
                desc: "グッズ販売に特化したセクションです。",
                details: [
                    "実際の商品やお金を扱います。社会経験が積めます。",
                    "グッズの事前販売、在庫確認などです。",
                    "グッズ販売のスタッフをやってもらいます。",
                    "和気あいあいとした雰囲気です！ぜひ入ってください！<br>※バザーパートの販売セクションとは異なります。ご注意ください。",
                ],
                status: {},
            },
        ],
    },
    {
        name: "イベントパート",
        desc: "菁々祭のイベント事のすべてを管轄しているパートです。",
        sections: [
            {
                name: "ステージセクション",
                desc: "舞台でのイベントを統括し運営するセクションです。",
                details: [
                    "イベントパート内で最も規模の大きいセクションです。",
                    "夏休み中はステージの制作や事前の音響・照明の設定をします。特に人数が必要なのはステージの作成で、セクション員のほとんどがこれに携わっています。",
                    "当日はスポットライトや音響機材を扱ったり、機動隊としてステージ周辺の安全確保を務めています。",
                    "やりがいのあるお仕事です！",
                ],
                status: { 技術: 60, 時間: 60, やりがい: 100 },
            },
            {
                name: "お化け屋敷セクション",
                desc: "演習室でのお化け屋敷を作成、運営するセクションです。",
                details: ["このセクションは代々学年関係なく仲良くワイワイやっています。", "夏休み中はお化け屋敷を設計・製作します。", '当日は"おばけになれます！"', "君もお化けにならないか？"],
                status: { 楽しさ: 80, 友達: 100, 技術: 20 },
            },
            {
                name: "映画セクション",
                desc: "小講堂で放映される映画を撮影・編集しているセクションです。",
                details: [
                    "思い出に残る映画を作ることができます。",
                    "映画の脚本や撮影、映像の編集を行います。",
                    "映画祭の運営を行います。",
                    "人が少なく一人で複数の役をしている作品もあるとのこと。何より精鋭揃いな為、自分がやりたいことをして、複数の仕事を兼任することもできます。現在編集できる者が少ないので、編集ソフトを扱える方が来てくれると助かります。",
                ],
                status: { 楽しさ: 100, やりがい: 100, 体力: 10 },
            },
        ],
    },
    {
        name: "バザーパート",
        desc: "バザーパートが担う役割は、バザー店舗の運営です。仕事内容は接客がメインとなります。",
        sections: [
            {
                name: "販売セクション",
                desc: "バザーパートとしての食品・飲料の販売を担当します。",
                details: [
                    "毎年志望者が多い人気セクションの一つです！",
                    "菁々祭で販売する商品を調べ、当日に売る量を仕入れます。",
                    "当日には、バザーを立てて、生徒や一般の方に商品を販売します。",
                    "食べ物が好きな人や、文化祭で接客をしたい人におすすめです。",
                ],
                status: { 難しさ: 20, 楽しさ: 90, 達成感: 100 },
            },
            {
                name: "金券セクション",
                desc: "菁々祭で使用される金券の販売や売上集計を担当します。",
                details: [
                    "販売セクションと同じく、接客を通して来校者と交流できるセクションです！",
                    "事前販売などをします。",
                    "金券販売とその集計をします。",
                    "お金を扱うので責任は伴いますが、そんなに気張らなくて大丈夫です！やりがいを感じられます！",
                ],
                status: { 楽しさ: 100, やりがい: 100, 友達: 90 },
            },
        ],
    },
    {
        name: "装飾パート",
        desc: "校内のさまざまな場所を飾り付けしていくパートです。",
        sections: [
            {
                name: "門セクション",
                desc: "円形広場に門を建てます。大変な作業が多いですが、やりがいがあり完成した時の達成感は格別です。",
                details: [
                    "門の建設はかなり大変なお仕事ですが、大きな作品を仕上げるので達成感は物凄いです。木材を切ったりトンカチしたりしたい！という方は是非。",
                    "門の建設をしてもらいます。木材が届いてからのお仕事がメインなので、主に夏休みや9月の初めのお仕事になります。",
                    "基本的にありません。文化祭終了後に解体があるので忘れずに！",
                    "我らが門セクの魅力と言えば｢やりがい｣と｢達成感｣、仲間と一緒に作り上げる門は一生の思い出になるはずです!! ぜひ私たちと一緒に完成の感動を味わいましょう!!",
                ],
                status: { やりがい: 100, 技術: 60, 時間: 80 },
            },
            {
                name: "ロゴモニュメント<br>セクション",
                desc: "文化祭のシンボルであるロゴを形にする作業は楽しいこと間違いなし。",
                details: [
                    "木材等を使ってロゴを立体化！ロゴモニュメントは文化祭の顔になりうるものですので、やりがいに溢れたお仕事です！※ロゴのデザインはしません。",
                    "夏休み中に数日間活動する予定です。木材等を切り、塗り、組み立てるなど、比較的簡単な仕事内容です。",
                    "なし！",
                    "やはり来場者の皆さんの目に留まるし、フォトスポットにもなるかもしれない展示ですので、大きな達成感を得られること間違いなし。ロゴを三次元に！と思っている方は是非。",
                ],
                status: { やりがい: 100, 難しさ: 20, 計画性: 90 },
            },
            {
                name: "階段絵セクション",
                desc: "階段に一枚の大きな絵が描かれた紙を貼っていきます。描きたい絵がある人におすすめ。",
                details: [
                    "自由な活動期間とテーマ選択。好みの絵をチョイスして好きな時に描いてもらって構いません。",
                    "デカい紙に自分の好きな絵を描いてもらいます。主に夏休み中の個人活動が中心ですが、文化祭前に尻に火がついて9月から焦って仕上げる人も存在します。",
                    "基本ゼロ。朝に貼り付けをすることもあります。",
                    "校内に自分の描いた絵が大きく展示されるので物凄い満足感のあるお仕事です。描き上がった時の達成感も半端じゃないっ！絵心の有無は問いません、描きたい人は是非お入りください。",
                ],
                status: { 楽しさ: 100, 難しさ: 30, 時間: 60 },
            },
            {
                name: "切り絵セクション",
                desc: "切り絵を作って校舎内の窓に貼ります。",
                details: ["基本他のセクションと掛け持ちになります。", "", "", ""],
                status: {},
            },
        ],
    },
    {
        name: "校舎統括パート",
        desc: "菁々祭を支える裏方的なパートです。",
        sections: {
            details: [
                "備品の貸し出しなどの文化祭準備のサポートや備品移動の指示などを行います。<br>基本的には屋内での作業です。",
                "",
                "",
                "文化祭当日のシフトがなくパートの掛け持ちもしやすいので、文化祭の準備も楽しみたいという方はぜひ入ってみてください。",
            ],
            status: { やりがい: 100, 友達: 90, 楽しさ: 60 },
        },
    },
    {
        name: "会計パート",
        desc: "文化祭のお金を管轄し、文化祭を根底から支えるパートです。",
        sections: {
            details: [
                "主な業務は予算折衝や決算書類の確認作業です。決算書類の確認作業は文化祭の終了した後に行うのでご留意ください。",
                "予算折衝の立ち会いや、領収書の確認などの書類作業です。すべて室内での作業なので、力仕事に自信がない方にもおすすめです。",
                "ありません。",
                "何もわからなくても大丈夫です。お金の流れに興味がある人はぜひ入ってみてください！",
            ],
            status: { 時間: 20, 難しさ: 20, やりがい: 100 },
        },
    },
];
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("parts").insertAdjacentHTML(
        "beforeend",
        `
${parts_data
    .map(({ name, desc, sections }) =>
        Array.isArray(sections)
            ? `
<div class="part_container">
    <div class="part_box show_left">
        <h2 class="part_name">${name}</h2>
        <p class="part_desc">${desc}</p>
    </div>
    <div class="sections">
${sections
    .map(
        ({ name, desc, details, status }) => `
<div class="section_container">
    <div class="section_branch"></div>
    <div class="section_box show_right">
        <div class="section_button" onclick="openAccordion(this)">
            <div class="section_name_box">
                <div class="section_name">${name}</div>
                <div class="section_arrow"></div>
            </div>
            <p class="section_desc">${desc}</p>
        </div>
        <div class="section_detail">
            ${
                details[0] !== ""
                    ? `<h4 class="section_detail_title">セクションの特徴</h4>
            <p class="section_detail_desc">${details[0]}</p>`
                    : ""
            }
            ${
                details[1] !== ""
                    ? `<h4 class="section_detail_title">菁々祭当日までの仕事</h4>
            <p class="section_detail_desc">${details[1]}</p>`
                    : ""
            }
            ${
                details[2] !== ""
                    ? `<h4 class="section_detail_title">当日の仕事</h4>
            <p class="section_detail_desc">${details[2]}</p>`
                    : ""
            }
            ${
                details[3] !== ""
                    ? `<h4 class="section_detail_title">セクションから一言</h4>
            <p class="section_detail_desc">${details[3]}</p>`
                    : ""
            }
            <div class="section_status_container">
                ${Object.entries(status)
                    .map(
                        ([name, ratio]) => `
<div class="section_status" style="--bar-width: ${ratio}%">
    <h5 class="section_status_name">${name}</h5>
    <div class="section_status_bar"><div class="section_status_inner_bar"></div></div>
</div>
`,
                    )
                    .join("")}
            </div>
        </div>
    </div>
</div>
`,
    )
    .join("")}
    </div>
</div>
`
            : `
<div class="part_container part_container_with_mergin">
    <div class="part_box show_left">
        <div class="section_button" onclick="openAccordion(this)">
            <div class="part_name_box">
                <h2 class="part_name">${name}</h2>
                <div class="section_arrow"></div>
            </div>
            <p class="part_desc">${desc}</p>
        </div>
        <div class="part_detail">
            ${
                sections.details[0] !== ""
                    ? `<h4 class="section_detail_title">パートの特徴</h4>
            <p class="section_detail_desc">${sections.details[0]}</p>`
                    : ""
            }
            ${
                sections.details[1] !== ""
                    ? `<h4 class="section_detail_title">菁々祭当日までの仕事</h4>
            <p class="section_detail_desc">${sections.details[1]}</p>`
                    : ""
            }
            ${
                sections.details[2] !== ""
                    ? `<h4 class="section_detail_title">当日の仕事</h4>
            <p class="section_detail_desc">${sections.details[2]}</p>`
                    : ""
            }
            ${
                sections.details[3] !== ""
                    ? `<h4 class="section_detail_title">パートから一言</h4>
            <p class="section_detail_desc">${sections.details[3]}</p>`
                    : ""
            }
            <div class="section_status_container">
                ${Object.entries(sections.status)
                    .map(
                        ([name, ratio]) => `
<div class="section_status" style="--bar-width: ${ratio}%">
    <h5 class="section_status_name">${name}</h5>
    <div class="section_status_bar"><div class="section_status_inner_bar"></div></div>
</div>
`,
                    )
                    .join("")}
            </div>
        </div>
    </div>
</div>
`,
    )
    .join("")}`,
    );
    const header = document.getElementById("header");
    const background = document.querySelector(".background");
    let ticking = false;
    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY < window.innerHeight / 3) {
                    if (!header.classList.contains("hidden_header")) header.classList.add("hidden_header");
                } else {
                    header.classList.remove("hidden_header");
                }
                background.style.transform = `translateY(${Math.round(-window.scrollY * 0.5)}px)`;
                ticking = false;
            });
            ticking = true;
        }
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.classList.contains("activated")) {
                entry.target.classList.add("activated");
            }
        });
    });
    document.querySelectorAll(".show_up").forEach((element) => {
        observer.observe(element);
    });
    document.querySelectorAll(".show_right").forEach((element) => {
        observer.observe(element);
    });
    document.querySelectorAll(".show_left").forEach((element) => {
        observer.observe(element);
    });
    document.querySelectorAll(".section_branch").forEach((element) => {
        observer.observe(element);
    });
    document.querySelectorAll(".foot_logo").forEach((element) => {
        observer.observe(element);
    });
});
function openAccordion(element) {
    if (element.parentNode.classList.contains("opened")) {
        element.parentNode.classList.remove("opened");
    } else {
        document.querySelectorAll(".section_button").forEach((e) => {
            e.parentNode.classList.remove("opened");
        });
        element.parentNode.classList.add("opened");
    }
}