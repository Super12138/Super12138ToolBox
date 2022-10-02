let url = document.getElementById('url').value;
function play() {
    if (url == 'null') {
        mdui.dialog({
            title: '无法播放',
            content: '请输入 URL 后再来播放哦',
            buttons: [
                {
                    text: '确认'
                }
            ]
        });
    }
    else {
        console.log(document.getElementById('url').value);
        const dp = new DPlayer({
            container: document.getElementById('dplayer'),
            autoplay: false,
            theme: '#FADFA3',
            loop: true,
            lang: 'zh-cn',
            screenshot: true,
            hotkey: true,
            preload: 'auto',
            volume: 1,
            mutex: true,
            video: {
                url: document.getElementById('url').value,
                type: 'hls',
            },
            contextmenu: [
                {
                    text: 'Super12138',
                    link: 'https://github.com/Super12138',
                }
            ]
        });
    }
}
