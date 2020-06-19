const ap = new APlayer({
    container: document.getElementById('aplayer'),
	autoplay: true, //自动播放
    listFolded: true,//列表默认折叠
    listMaxHeight: 90,//列表最大高度
    lrcType: 3, //此为歌词格式，没有歌词可以直接删掉这一行
    audio: [
        {
            name: '如约而至',
            artist: '许嵩',
            url: 'https://sharefs.yun.kugou.com/202006191117/186eca0823694bd4e40356dd6016c319/G123/M09/19/00/G4cBAFsnQUeAMrb5AD5yEvBAAJY536.mp3',
            cover: 'https://p3fx.kgimg.com/stdmusic/20180612/20180612032745754576.jpg',
            lrc: 'https://hexo-weste99.obs.cn-southwest-2.myhuaweicloud.com/%E8%AE%B8%E5%B5%A9-%E5%A6%82%E7%BA%A6%E8%80%8C%E8%87%B3.lrc',
            theme: '#ebd0c2'
        },
		{
            name: '最佳歌手',
            artist: '许嵩',
            url: 'https://sharefs.yun.kugou.com/202006191402/6c8c67c587dff1d7345d082894acbadb/G064/M09/10/08/IJQEAFc-aueAZCXaAEFnB1LjkYU037.mp3',
            cover: 'http://i2.tiimg.com/721551/a32fbf3cd9595eef.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/snowmoonflowers.lrc',
            theme: '#ebd0c2'
        },
		{
            name: 'DAN DAN心魅かれてく（渐渐被你吸引）',
            artist: 'ZARD',
            url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_7604493&response=res&type=convert_url&',
            cover: 'http://i2.tiimg.com/721551/83b3377ef16499d6.jpg',
            lrc: 'lrc1.lrc',
            theme: '#ebd0c2'
        },
		{
            name: '负けないで（不要认输）',
            artist: 'ZARD',
            url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_28685072&response=res&type=convert_url&',
            cover: 'http://i2.tiimg.com/721551/83b3377ef16499d6.jpg',
            lrc: 'lrc1.lrc',
            theme: '#ebd0c2'
        },
		{
            name: 'I Burn (Yellow Trailer)',
            artist: 'Jeff Williams (杰夫·威廉姆斯)、Casey Lee Williams',
            url: 'https://sharefs.yun.kugou.com/202006191357/d4690b88cddea0599947728aa6ff2391/G034/M09/01/04/Yg0DAFWhQ7OAVk7JAFDGDL2ffBY854.mp3',
            cover: 'http://i2.tiimg.com/721551/8119ef3654908761.png',
            lrc: 'lrc1.lrc',
            theme: '#ebd0c2'
        },
	    {
            name: 'Shine',
            artist: 'Jeff Williams (杰夫·威廉姆斯)、Casey Lee Williams',
            url: 'https://sharefs.yun.kugou.com/202006191418/c4983b3ae6df4dc52478d5a4997aea8f/G204/M06/17/13/rJQEAF50Ni-AStuQAD977NpPlzA483.mp3',
            cover: 'http://i1.fuimg.com/721551/6374c1d333b87e84.jpg',
            lrc: 'lrc1.lrc',
            theme: '#ebd0c2'
        },
        {
            name: 'Bmblb',
            artist: 'Jeff Williams (杰夫·威廉姆斯)、Casey Lee Williams',
            url: 'https://sharefs.yun.kugou.com/202006191323/adb94f04a79d152fc59b25b57a18d37a/G111/M02/16/00/D4cBAFlEXo-AStsxADEXr1sKdUg397.mp3',
            cover: 'http://i1.fuimg.com/721551/e823f59c04111e6a.png',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        }
    ]
});