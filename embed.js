(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/tubular/",
    "verprefix": "",
    "workerjs": "/tubular/worker.js",
    "monacoworkerjs": "/tubular/monacoworker.js",
    "gifworkerjs": "/tubular/gifjs/gif.worker.js",
    "serviceworkerjs": "/tubular/serviceworker.js",
    "pxtVersion": "6.2.23",
    "pxtRelId": "",
    "pxtCdnUrl": "/tubular/",
    "commitCdnUrl": "/tubular/",
    "blobCdnUrl": "/tubular/",
    "cdnUrl": "/tubular/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "sample",
    "simUrl": "/tubular/simulator.html",
    "simserviceworkerUrl": "/tubular/simulatorserviceworker.js",
    "simworkerconfigUrl": "/tubular/workerConfig.js",
    "partsUrl": "/tubular/siminstructions.html",
    "runUrl": "/tubular/run.html",
    "docsUrl": "/tubular/docs.html",
    "multiUrl": "/tubular/multi.html",
    "asseteditorUrl": "/tubular/asseteditor.html",
    "isStatic": true
};

    var scripts = [
        "/tubular/highlight.js/highlight.pack.js",
        "/tubular/bluebird.min.js",
        "/tubular/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/tubular/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/tubular/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/tubular/target.js");
    scripts.push("/tubular/pxtembed.js");

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
