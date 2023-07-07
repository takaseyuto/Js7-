// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "画面に文章が60秒間表示されます。　　　　　　　　　　\nその後、画面が自動で切り替わり、その文章に関する問題が5問出題されますので、回答して下さい。　　　　　　　\n問題の回答に時間制限はありません。　　　　　　　　　回答がわからない場合は、適当に埋めておいて下さい。　　\n上記の課題を2回行うため、文章は2つ、合計10問に回答して頂きます。\n実験にかかる時間は5～6分です。"
        },
        {
          "required": true,
          "type": "text",
          "content": "下にある「実験スタート」ボタンを押すと「クリックすると一つ目の文章が表示されます」という画面に切り替わります。\nそこでマウス左クリックを押すと、文章が表示され実験開始となります。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "実験スタート→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Page"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 640,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "クリックすると一つ目の文章が表示されます",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "click": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Screen"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -115,
          "angle": 0,
          "width": 2,
          "height": 33.9,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "30",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 2,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 649.35,
          "height": 211.5,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"ストロマトライト　BIZ UD.png\"] }"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "0a89fa4aa971bb0a0375b8e249a4b047-1-1200x600.png": "embedded\u002F46df3c767e7b7d2968a8799c36d127fcd78052f20f68dcd722e4a52bc285efc9.png",
        "隱咲衍遘大ｭｦ縺ｯ1024_1.jpg": "embedded\u002Ffec0702be794d0f45f00a32af24faeded76d70386a184f5ec1fd1aeef626701e.jpg",
        "認知科学は.svg": "embedded\u002Fd15d55ab7608877a2883034d999c6a85fcf7f6a36fe3ee17a354eb9b931b2904.svg",
        "スクリーンショット (38).png": "embedded\u002Fc559c433cffd1be6e5bb3dcc413c47e3bebb404e3df8bed361fec8a36832e5ea.png",
        "認知科学BIZ UD.png": "embedded\u002F58e3d3ef094ec989765f8a876f78fc74d5dcb6feead3fe464097f35ff1f5e926.png",
        "モラルBIZ UD.png": "embedded\u002Fd1c4a84909426a43732c304d30afedf06f20d998bfc4b5ab95236c8f56800971.png",
        "ストロマトライト　BIZ UD.png": "embedded\u002Fa5a96e5b329b067facd101c23e1998ab4620f8e5ec08ef3370588ceb36f7b542.png"
      },
      "responses": {
        "undefined": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Screen",
      "timeout": "60000"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "以下の問いに答えなさい",
          "content": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "問１：何について説明している文章でしたか？"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Ctextarea id=\"textarea\" name=\"ANS\" cols=\"60\" rows=\"1\" placeholder=\" \" required maxlength=\"100\" minlength=\"1\"\u003E\u003C\u002Ftextarea\u003E",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "問２：［問１の答え］は地球上で最も古い何ですか？"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Ctextarea id=\"textarea2\" name=\"ANS2\" cols=\"60\" rows=\"1\" placeholder=\" \" required maxlength=\"100\" minlength=\"1\"\u003E\u003C\u002Ftextarea\u003E",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "問３：次の文章は本文の一部を抜き出したものである。空欄を埋めなさい。　　\nこれは、35億年前から存在し始めた微生物（主に（　　）や藻類）が形成したもので…"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Ctextarea id=\"textarea3\" name=\"ANS3\" cols=\"60\" rows=\"1\" placeholder=\" \" required maxlength=\"100\" minlength=\"1\"\u003E\u003C\u002Ftextarea\u003E",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "問４：現代においても［問１の答え］の形成が見られる場所はどこですか？"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Ctextarea id=\"textarea4\" name=\"ANS4\" cols=\"60\" rows=\"1\" placeholder=\" \" required maxlength=\"100\" minlength=\"1\"\u003E\u003C\u002Ftextarea\u003E",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "問５：次の文章は本文の一部を抜き出したものである。空欄を埋めなさい。　　\nその独特な構造と生物学的意義から、この岩石は地球の歴史と（　　）における重要な存在とされています。"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Ctextarea id=\"textarea5\" name=\"ANS5\" cols=\"60\" rows=\"1\" placeholder=\" \" required maxlength=\"100\" minlength=\"1\"\u003E\u003C\u002Ftextarea\u003E",
          "name": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cbutton type=\"submit\" \u003E次の文章へ\u003C\u002Fbutton\u003E\u003C\u002Fmain\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Page",
      "width": "l"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 640,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "クリックすると二つ目の文章が表示されます",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "click": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Screen"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "image",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 456,
          "height": 147.52,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"ポラリスポップ.png\"] }"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "ポラリスHGS創英角ﾎﾟｯﾌﾟ体.png": "embedded\u002Fcbccfc8db6694ada856da94c69a123bc8ef176df2b031a99f46e15aa1a125a30.png",
        "ポラリス　ポップ.png": "embedded\u002Fb4551f767e62fb9fb787c5e6e9ddde8755b4ecb1f1f82678e5276771f2a19dd6.png",
        "ポラリスポップ.png": "embedded\u002F4f195e04c053e0fb9469c316cfbc0a37c7351c65c88cd5e27513010c80625ae1.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Screen",
      "timeout": "60000"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "以下の問いに答えなさい",
          "content": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "問１：北極星として知られる星の名前は何ですか？"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Ctextarea id=\"textarea\" name=\"RES\" cols=\"60\" rows=\"1\" placeholder=\"　\" required maxlength=\"100\" minlength=\"1\"\u003E\u003C\u002Ftextarea\u003E",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "問２：次の文章は本文の一部を抜き出したものである。空欄を埋めなさい。　　\n夜空で確認しやすく、古代から（　　）において重要な役割を果たしてきました。"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Ctextarea id=\"textarea2\" name=\"RES2\" cols=\"60\" rows=\"1\" placeholder=\"　\" required maxlength=\"100\" minlength=\"1\"\u003E\u003C\u002Ftextarea\u003E",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "問３：地球とポラリスの距離は何光年ですか？"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Ctextarea id=\"textarea3\" name=\"RES4\" cols=\"60\" rows=\"1\" placeholder=\"　\" required maxlength=\"100\" minlength=\"1\"\u003E\u003C\u002Ftextarea\u003E",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "問４：ポラリスの明るさと安定性は、［問２の答え］と何に大いに役立っていますか？"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Ctextarea id=\"textarea4\" name=\"RES4\" cols=\"60\" rows=\"1\" placeholder=\"　\" required maxlength=\"100\" minlength=\"1\"\u003E\u003C\u002Ftextarea\u003E",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "問５：次の文章は本文の一部を抜き出したものである。空欄を埋めなさい。\n航海者や冒険者にとって（　　）や安心の象徴とされてきました。"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Ctextarea id=\"textarea5\" name=\"RES5\" cols=\"60\" rows=\"1\" placeholder=\"　\" required maxlength=\"100\" minlength=\"1\"\u003E\u003C\u002Ftextarea\u003E",
          "name": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cbutton type=\"submit\" \u003E回答を終える\u003C\u002Fbutton\u003E\u003C\u002Fmain\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Page",
      "width": "l"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "実験は終了です"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "このボタンを押した後、画面の上に出るDownload dataを押してください",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Page"
    }
  ]
})

// Let's go!
study.run()