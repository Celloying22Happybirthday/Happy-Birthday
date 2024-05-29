// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "亲爱的伽颖同学", 
        "生日快乐呀！",
        "愿你笑容永远灿烂", 
        "22岁，新的开始新的希望", 
        "愿你梦想成真，未来可期", //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "愿你雨天有伞，晴天有风",  // 同上...
        "愿你的每一天比春天还温暖",
        "愿你做过的美梦都不会忘记",
        "愿你永远平安喜乐美丽动人",
        "愿你生活明朗、一路追光",
        "愿你被这个世界温柔以待",
        "愿你的一生幸运、一生被爱",
        "初识你名，久居我心",
        "人间有趣，因为有你",
        "认识的111天，每一瞬间都感到幸福",
        "纵使时光流逝",
        "那份心情却不曾改变",
        "感谢你带给我的每一天❤",
        "祝你快乐，不止生日！❤",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        //"在遠方送上最近的祝福": "./imgs/1.png",
        //"願你下雨時身邊有傘": "./imgs/2.png",  
        //"願你每次跑圖都炸花": "./imgs/3.png",
        //"願你抬頭便有美麗的天空": "./imgs/4.png",
        //"願你烤的每一片土司都剛剛好": "./imgs/5.png",
        "初识你名，久居我心": "./imgs/7.png",
        "人间有趣，因为有你": "./imgs/9.png",
        "认识的111天，每一瞬间都感到幸福": "./imgs/6.png",
        "那份心情却不曾改变": "./imgs/1.png",
        //"人间有趣，因为有你": "./imgs/9.png",
        "祝你快乐，不止生日！❤": "./imgs/xiaokeai.png",

        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点我，点我💢",
        play: "music🎵",
        bannar_coming: "开始啦~",
        balloons_flying: "好像少点东西...",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "伽颖同学,生日快乐呀！",
        story: "A MESSAGE FOR YOU👇",
    }
};
