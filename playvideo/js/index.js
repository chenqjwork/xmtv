$('#select').click(function () {
    var sel = $(this).text()
    if (sel == 'MP4') {
        $(this).text('M3U8')
        $('#url').attr('placeholder', '请输入M3U8视频链接')
    } else {
        $(this).text('MP4')
        $('#url').attr('placeholder', '请输入MP4视频链接')
    }
})
$('#play').click(function () {
    var url = $('#url').val()
    if (url != '') {
        var sel = $('#select').text()
        if (sel == 'MP4') {
            $('#videoBox').html('').html('<video class="mt-2 rounded" controls="controls" width="100%" src="' + url + '"></video>')
        } else {
            $('#videoBox').html('').html('<video id="video" class="mt-2 rounded" controls="controls" width="100%" src="' + url + '"></video>')
            var video = document.getElementById('video');
            if (Hls.isSupported()) {
                var hls = new Hls();
                hls.loadSource(url);
                hls.attachMedia(video);
            }
            else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = url;
            }
        }
    }
})
$('body').fadeIn()