# 在线视频播放器

> 支持MP4和M3U8视频在线播放

## 功能特点

* 支持MP4和M3U8视频在线播放
* 支持MP4视频下载（需浏览器支持）

## 站点预览

* http://ouyangpeng.top/app/videoPlayer/

## 用到的库

* Bootstrap
* jQuery.js
* hls.js

## 代码片段

### M3U8视频播放

```javascript
$('#player').html('').html('<video id="video" class="rounded" controls="controls" width="100%" src="' + url + '"></video>')
var video = document.getElementById('video');
if (Hls.isSupported()) {
    var hls = new Hls();
  hls.loadSource(url1);
  hls.attachMedia(video);
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  video.src = url;
}
```

## 作者

* 欧阳鹏

## 开发时间

* 2021年9月20日