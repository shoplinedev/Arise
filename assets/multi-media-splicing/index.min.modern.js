"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "multi-media-splicing" ], {
    "./src/assets/stage/multi-media-splicing/index.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        var _yy_sl_theme_shared_utils_sectionsLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/sectionsLoad/index.js");
        var _video_utils_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/stage/video/utils/video.js");
        __webpack_require__("./src/assets/product/commons/js/product-item.js");
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        class MultiMediaSplicing {
            constructor(container) {
                _defineProperty(this, "instances", []);
                const $videos = container.find(`[data-block-type='video']`);
                if (!$videos.length) return;
                $videos.each(((_, video) => {
                    this.instances.push(new _video_utils_video__WEBPACK_IMPORTED_MODULE_1__["default"](__SL_$__(video), {
                        clickCallback: () => {
                            container.find(".video__controll").toggleClass("d-none", false);
                        }
                    }));
                }));
            }
            onUnload() {
                if (this.instances.length) this.instances.forEach((instance => {
                    instance.onUnload();
                }));
            }
        }
        _defineProperty(MultiMediaSplicing, "type", "multi-media-splicing");
        (0, _yy_sl_theme_shared_utils_sectionsLoad__WEBPACK_IMPORTED_MODULE_0__.registrySectionConstructor)(MultiMediaSplicing.type, MultiMediaSplicing);
    },
    "./src/assets/stage/video/utils/video.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
            default: () => Video
        });
        class Player {}
        const libraries = {
            youtubeSdk: {
                tagId: "youtube-sdk",
                src: "https://www.youtube.com/iframe_api",
                type: "script"
            },
            vimeo: {
                tagId: "vimeo-api",
                src: "https://player.vimeo.com/api/player.js",
                type: "script"
            }
        };
        const LibraryLoader_status = {
            requested: "requested",
            loaded: "loaded"
        };
        function createScriptTag(library, callback) {
            const tag = document.createElement("script");
            tag.src = library.src;
            tag.addEventListener("load", (function() {
                Object.assign(library, {
                    status: LibraryLoader_status.loaded
                });
                callback();
            }));
            return tag;
        }
        function load(libraryName, _callback) {
            const library = libraries[libraryName];
            if (!library) return;
            if (library.status === LibraryLoader_status.requested) return;
            const callback = _callback || function() {};
            if (library.status === LibraryLoader_status.loaded) {
                callback();
                return;
            }
            library.status = LibraryLoader_status.requested;
            const tag = createScriptTag(library, callback);
            tag.id = library.tagId;
            library.element = tag;
            const firstScriptTag = document.getElementsByTagName(library.type)[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
        function allLoad() {
            const p1 = new Promise((r => load("youtubeSdk", r)));
            const p2 = new Promise((r => load("vimeo", r)));
            return Promise.all([ p1, p2 ]);
        }
        const LibraryLoader = {
            load,
            allLoad
        };
        const video_LibraryLoader = LibraryLoader;
        const playerState = {
            ended: "ENDED",
            playing: "PLAYING",
            paused: "PAUSED",
            buffering: "BUFFERING"
        };
        const state = playerState;
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        class YoutubeReadyWatcher {
            constructor() {
                _defineProperty(this, "ready", false);
                const _ = this;
                const prevOnYouTubeIframeAPIReady = window.onYouTubeIframeAPIReady;
                window.onYouTubeIframeAPIReady = function() {
                    window.SL_EventBus.emit("stage:youTubeReady");
                    _.ready = true;
                    if ("function" === typeof prevOnYouTubeIframeAPIReady) prevOnYouTubeIframeAPIReady();
                };
            }
            $ready() {
                this.ready = true;
            }
            static getInstance() {
                if (!YoutubeReadyWatcher.instance) YoutubeReadyWatcher.instance = new YoutubeReadyWatcher;
                return YoutubeReadyWatcher.instance;
            }
        }
        _defineProperty(YoutubeReadyWatcher, "instance", null);
        const video_YoutubeReadyWatcher = YoutubeReadyWatcher;
        const ytReadyWatcher = video_YoutubeReadyWatcher.getInstance();
        const videoOptions = {
            ratio: 16 / 9,
            scrollAnimationDuration: 400,
            playerVars: {
                autohide: 0,
                autoplay: void 0,
                cc_load_policy: 0,
                controls: 1,
                fs: 0,
                iv_load_policy: 3,
                modestbranding: 1,
                playsinline: 1,
                rel: 0,
                loop: false
            },
            events: {
                onReady: event => {
                    console.log(event);
                },
                onStateChange: event => {
                    console.log("change", event);
                },
                onError: event => {
                    console.log("onError", event);
                }
            }
        };
        class YouTube extends Player {
            constructor(containerId, options = {}) {
                super();
                this.player = null;
                this.loopTimer = null;
                this.readyPromise = null;
                this.containerId = containerId;
                this.options = {
                    ...videoOptions,
                    ...options
                };
                this.options.playerVars.loop = options.loop;
                this.rewriteEvent();
                if (window.YT && window.YT.Player) ytReadyWatcher.$ready();
                if (ytReadyWatcher.ready) this.init(); else {
                    video_LibraryLoader.load("youtubeSdk");
                    window.SL_EventBus.on("stage:youTubeReady", this.init.bind(this));
                }
            }
            init() {
                new window.YT.Player(this.containerId, this.options);
            }
            playVideo() {
                if (this.readyPromise) this.readyPromise.then((() => {
                    var _this$player;
                    null === (_this$player = this.player) || void 0 === _this$player ? void 0 : _this$player.playVideo();
                }));
            }
            mute() {
                var _this$player2;
                null === (_this$player2 = this.player) || void 0 === _this$player2 ? void 0 : _this$player2.mute();
            }
            unMute() {
                var _this$player3;
                null === (_this$player3 = this.player) || void 0 === _this$player3 ? void 0 : _this$player3.unMute();
            }
            destroy() {
                var _this$player4;
                null === (_this$player4 = this.player) || void 0 === _this$player4 ? void 0 : _this$player4.destroy();
                this.readyPromise = null;
            }
            rewriteEvent() {
                const self = this;
                const {onReady, onStateChange} = this.options.events;
                this.readyPromise = new Promise((r => {
                    this.options.events.onReady = event => {
                        r();
                        this.player = event.target;
                        if (onReady) onReady(event);
                    };
                }));
                this.options.events.onStateChange = event => {
                    let status = "";
                    switch (event.data) {
                      case 1:
                        status = state.playing;
                        break;

                      case 2:
                        status = state.paused;
                        break;

                      case 3:
                        status = state.buffering;
                        break;

                      default:
                        status = state.ended;
                    }
                    if (status === state.playing && this.options.playerVars.loop) {
                        clearTimeout(this.loopTimer);
                        const finalSecond = event.target.getDuration() - 1;
                        if (finalSecond > 2) {
                            function loopTheVideo() {
                                if (event.target.getCurrentTime() > finalSecond) event.target.seekTo(0);
                                self.loopTimer = setTimeout(loopTheVideo, 500);
                            }
                            loopTheVideo();
                        }
                    }
                    if (status === state.paused && this.loopTimer) clearTimeout(this.loopTimer);
                    if (onStateChange) onStateChange(event);
                };
            }
        }
        const LibraryLoader_libraries = {
            youtubeSdk: {
                tagId: "youtube-sdk",
                src: "https://www.youtube.com/iframe_api",
                type: "script"
            },
            vimeo: {
                tagId: "vimeo-api",
                src: "https://player.vimeo.com/api/player.js",
                type: "script"
            }
        };
        const utils_LibraryLoader_status = {
            requested: "requested",
            loaded: "loaded"
        };
        function LibraryLoader_createScriptTag(library, callback) {
            const tag = document.createElement("script");
            tag.src = library.src;
            tag.addEventListener("load", (function() {
                Object.assign(library, {
                    status: utils_LibraryLoader_status.loaded
                });
                callback();
            }));
            return tag;
        }
        function LibraryLoader_load(libraryName, _callback) {
            const library = LibraryLoader_libraries[libraryName];
            if (!library) return;
            if (library.status === utils_LibraryLoader_status.requested) return;
            const callback = _callback || function() {};
            if (library.status === utils_LibraryLoader_status.loaded) {
                callback();
                return;
            }
            library.status = utils_LibraryLoader_status.requested;
            const tag = LibraryLoader_createScriptTag(library, callback);
            tag.id = library.tagId;
            library.element = tag;
            const firstScriptTag = document.getElementsByTagName(library.type)[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
        const LibraryLoader_LibraryLoader = {
            load: LibraryLoader_load
        };
        const utils_LibraryLoader = LibraryLoader_LibraryLoader;
        let vimeoReady = false;
        const defaults = {
            byline: false,
            controls: true,
            loop: false,
            muted: true,
            playsinline: true,
            portrait: false,
            responsive: true,
            transparent: false,
            title: "vedio",
            autoplay: false
        };
        class VimeoPlayer extends Player {
            constructor(containerId, options) {
                super();
                this.el = __SL_$__(containerId).get(0);
                this.options = {
                    ...defaults,
                    ...options,
                    id: options.videoId
                };
                if (vimeoReady) this.init(); else {
                    utils_LibraryLoader.load("vimeo", window.vimeoApiReady);
                    window.SL_EventBus.on("stage:vimeoReady", this.init.bind(this));
                }
            }
            init() {
                vimeoReady = true;
                console.log(this.options);
                this.player = new window.Vimeo.Player(this.el, this.options);
                this.player.ready().then(this.playerReady.bind(this));
            }
            playVideo() {
                this.player.play();
            }
            mute() {
                this.player.setMuted(true);
            }
            unMute() {
                this.player.setMuted(false);
            }
            destroy() {
                this.player.destroy();
            }
            playerReady() {
                this.options.events.onReady();
            }
        }
        const MUTE_DELAY_PORTION = 25;
        function isAutoplaySupported(callback, timeout) {
            let called = false;
            if (!callback) return;
            if (!isPlaysinline()) return callback({
                autoplay: false,
                muted: false
            });
            checkAutoplay(false, (function() {
                testHandler(false);
            }));
            setTimeout((function() {
                checkAutoplay(true, (function() {
                    testHandler(true);
                }));
            }), timeout / MUTE_DELAY_PORTION);
            function testHandler(mute) {
                if (!called) {
                    called = true;
                    callback({
                        autoplay: true,
                        muted: mute
                    });
                }
            }
            setTimeout((function() {
                if (!called) {
                    called = true;
                    callback({
                        autoplay: false,
                        muted: false
                    });
                }
            }), timeout);
        }
        async function checkAutoplay(mute, callback) {
            const video = document.createElement("video");
            video.ontimeupdate = function() {
                if (0 !== video.currentTime) return callback();
            };
            video.autoplay = true;
            video.muted = mute;
            video.setAttribute("webkit-playsinline", "webkit-playsinline");
            video.setAttribute("playsinline", "playsinline");
            video.src = "data:audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";
            video.style.display = "none";
            video.load();
            try {
                await video.play();
            } catch (err) {}
            return video;
        }
        function isPlaysinline() {
            return navigator.userAgent.match(/(iPhone|iPod)/g) ? "playsInline" in document.createElement("video") : true;
        }
        class CheckVideoCanAutoPlay {
            constructor() {
                this.instance = null;
                this.supportState = {};
                this.completed = false;
                isAutoplaySupported((result => {
                    console.log(result);
                    this.supportState = result;
                    this.completed = true;
                    window.SL_EventBus.emit("stage:checkAutoplayComplete", this.supportState);
                }), 400);
            }
            static getInstance() {
                if (!CheckVideoCanAutoPlay.instance) CheckVideoCanAutoPlay.instance = new CheckVideoCanAutoPlay;
                return CheckVideoCanAutoPlay.instance;
            }
        }
        const autoplayChecker = CheckVideoCanAutoPlay.getInstance();
        function isHTMLElement(obj) {
            if (obj.nodeType) return 1 === obj.nodeType;
        }
        const defaultVars = {
            controls: 1,
            muted: false,
            controlsList: "nodownload",
            autoplay: false,
            preload: "auto",
            loop: false,
            autoplayAsPossible: false
        };
        const defaultEvents = {
            onReady() {},
            onStateChange(e) {
                console.log("onStateChange", e.data);
            },
            onPlaybackRateChange() {},
            onError() {},
            onTimeupdate() {},
            onVolumechange() {},
            onProgress() {}
        };
        class VideoJs {
            constructor(containerId, {events = {}, ...otherOpts}) {
                console.log(containerId, events, otherOpts);
                let $el = null;
                const $video = document.createElement("video");
                $video.style.width = "100%";
                $video.style.height = "100%";
                $video.style.objectFit = "cover";
                if ("object" === typeof containerId && isHTMLElement(containerId)) $el = containerId; else $el = document.querySelector(containerId);
                this._$video = $video;
                const mergeVars = {
                    ...defaultVars,
                    ...otherOpts
                };
                const mergeEvents = {
                    ...defaultEvents,
                    ...events
                };
                this.options = {
                    ...mergeVars,
                    ...mergeEvents
                };
                this.eventBus = {};
                const sourceFragment = this._renderSource(mergeVars.src);
                $video.appendChild(sourceFragment);
                delete mergeVars.src;
                for (const key in mergeVars) if ("autoplay" !== key) {
                    $video[key] = mergeVars[key];
                    $video.setAttribute(key, mergeVars[key]);
                    $video[key] = mergeVars[key];
                }
                this.addPresetListener();
                $el.appendChild($video);
            }
            usePresetConfig(el, config) {
                el.autoplay = config.autoplay;
            }
            addPresetListener() {
                this._$video.addEventListener("loadstart", this.readyHandler.bind(this));
                this._$video.addEventListener("canplay", (() => {}));
                this._$video.addEventListener("play", this.playHandler.bind(this));
                this._$video.addEventListener("waiting", this.waitingHandler.bind(this));
                this._$video.addEventListener("pause", this.pauseHandler.bind(this));
                this._$video.addEventListener("ended", this.endedHandler.bind(this));
                this._$video.addEventListener("error", this.errorHandler.bind(this));
                this._$video.addEventListener("ratechange", this.onPlaybackRateChange.bind(this));
                this._$video.addEventListener("volumechange", this.onVolumechange.bind(this));
                this._$video.addEventListener("timeupdate", this.onProgress.bind(this));
            }
            removePresetlistener() {
                this._$video.removeEventListener("loadstart", this.readyHandler.bind(this));
                this._$video.removeEventListener("play", this.playHandler.bind(this));
                this._$video.removeEventListener("waiting", this.waitingHandler.bind(this));
                this._$video.removeEventListener("pause", this.pauseHandler.bind(this));
                this._$video.removeEventListener("ended", this.endedHandler.bind(this));
                this._$video.removeEventListener("error", this.errorHandler.bind(this));
                this._$video.removeEventListener("ratechange", this.onPlaybackRateChange.bind(this));
                this._$video.removeEventListener("volumechange", this.onVolumechange.bind(this));
                this._$video.removeEventListener("timeupdate", this.onProgress.bind(this));
            }
            readyHandler(e) {
                console.log("readyHandler");
                this.loadDataHandler(e);
            }
            autoplayAsPossible() {
                const {autoplay, muted} = autoplayChecker.supportState;
                if (this.options.muted) this.mute(); else this.unMute();
                if (autoplay && muted) {
                    console.log("命中：只有静音才能自动播放视频~");
                    this.mute();
                }
                this.playVideo();
            }
            loadDataHandler(e) {
                this.options.onReady(e);
                this.options.onStateChange({
                    data: state.unstarted,
                    target: e.target
                });
                if (this.options.autoplay) if (this.options.autoplayAsPossible) if (autoplayChecker && autoplayChecker.completed) this.autoplayAsPossible(); else window.Shopline.event.on("stage:checkAutoplayComplete", this.autoplayAsPossible.bind(this)); else this.playVideo();
            }
            playHandler(e) {
                this.options.onStateChange({
                    data: state.playing,
                    target: e.target
                });
            }
            pauseHandler(e) {
                this.options.onStateChange({
                    data: state.paused,
                    target: e.target
                });
            }
            endedHandler(e) {
                this.options.onStateChange({
                    data: state.ended,
                    target: e.target
                });
            }
            waitingHandler(e) {
                this.options.onStateChange({
                    data: state.buffering,
                    target: e.target
                });
            }
            errorHandler(e) {
                this.options.onError({
                    data: e.target.error.code,
                    target: e.target
                });
            }
            onPlaybackQualityChange() {
                this.options.onPlaybackQualityChange();
            }
            onPlaybackRateChange(e) {
                this.options.onPlaybackRateChange({
                    data: e.target.playbackRate,
                    target: e.target
                });
            }
            onVolumechange(e) {
                this.options.onVolumechange({
                    target: e.target,
                    data: e.target.volume
                });
            }
            onProgress(e) {
                this.options.onProgress({
                    data: e.target.currentTime,
                    target: e.target
                });
            }
            on(eventType, listener) {
                if (this.eventBus[eventType]) this.eventBus[eventType] = [];
                this.eventBus[eventType].push(listener);
            }
            _emit(eventType, ...args) {
                if (this.eventBus[eventType] && this.eventBus[eventType].length) this.eventBus[eventType].forEach((listener => listener(...args)));
            }
            _renderSource(sources) {
                let arr = [];
                if (Array.isArray(sources)) arr = sources.map((src => {
                    const fileType = this._findFileType(src);
                    return {
                        fileType,
                        src
                    };
                })); else if ("string" === typeof sources) arr.push({
                    fileType: this._findFileType(sources),
                    src: sources
                });
                const fragment = document.createDocumentFragment();
                arr.forEach((item => {
                    const $source = document.createElement("source");
                    $source.setAttribute("type", `video/${item.fileType}`);
                    $source.setAttribute("src", item.src);
                    $source.innerHTML = `浏览器暂不支持播放${item.fileType}格式`;
                    fragment.append($source);
                }));
                return fragment;
            }
            _findFileType(src) {
                if (src.indexOf(".mp4") > -1) return "mp4";
                if (src.indexOf(".webm") > -1) return "webm";
                if (src.indexOf(".ogg") > -1) return "ogg";
            }
            playVideo() {
                if (this._$video.paused) this._$video.play();
            }
            pauseVideo() {
                if (!this._$video.paused) this._$video.pause();
            }
            seekTo(seconds) {
                this._$video.currentTime(seconds);
            }
            mute() {
                this._$video.muted = true;
            }
            unMute() {
                this._$video.muted = false;
            }
            destroy() {
                this.removePresetlistener();
                if (this.$el && this._$video) this.$el.removeChild(this._$video);
            }
            getCurrentTime() {
                return this._$video.currentTime;
            }
            getDuration() {
                return this._$video.duration;
            }
        }
        function initWhenVisible(options) {
            const threshold = options.threshold ? options.threshold : 0;
            const observer = new IntersectionObserver(((entries, _observer) => {
                entries.forEach((entry => {
                    if (entry.isIntersecting) if ("function" === typeof options.callback) {
                        options.callback();
                        _observer.unobserve(entry.target);
                    }
                }));
            }), {
                rootMargin: `0px 0px ${threshold}px 0px`
            });
            observer.observe(options.element[0]);
        }
        function video_defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        window.vimeoApiReady = function() {
            window.SL_EventBus.emit("stage:vimeoReady");
        };
        const selectors = {
            playVideoBtn: ".video-overlay__button",
            videoData: ".video-data"
        };
        const classes = {
            playing: "video--playing"
        };
        class Video {
            constructor(container, options = {}) {
                video_defineProperty(this, "container", null);
                video_defineProperty(this, "sectionId", "");
                video_defineProperty(this, "config", {
                    id: ""
                });
                video_defineProperty(this, "settings", {});
                this.container = container;
                this.options = options;
                this.sectionId = container.data("id");
                try {
                    this.settings = JSON.parse(container.find(`#Video-data-${this.sectionId}`).text());
                } catch (err) {}
                this.initEvent();
                initWhenVisible({
                    element: container,
                    callback: this.init.bind(this),
                    threshold: 500
                });
            }
            init() {
                var _dataDiv$data;
                const {container: video} = this;
                const {settings} = this;
                this.config = {
                    id: video.attr("id"),
                    videoKey: `Video-${video.data("id")}`,
                    videoId: video.data("id")
                };
                const dataDiv = this.container.find(selectors.videoData);
                const type = dataDiv.data("type");
                const videoId = dataDiv.data("video-id");
                const videoUrl = dataDiv.data("url");
                const aspectRatios = (null === (_dataDiv$data = dataDiv.data("aspect-ratio")) || void 0 === _dataDiv$data ? void 0 : _dataDiv$data.split(":")) || [ 16, 9 ];
                const events = {
                    onReady: this.onVideoPlayerReady.bind(this)
                };
                switch (type) {
                  case "youtube":
                    this.initYoutubeVideo(dataDiv.attr("id"), {
                        videoId,
                        ratio: aspectRatios[0] / aspectRatios[1],
                        autoplay: settings.autoplay ? 1 : 0,
                        muted: !!settings.quiet,
                        loop: settings.loop,
                        events
                    });
                    break;

                  case "vimeo":
                    this.initVimeoVideo(dataDiv.attr("id"), {
                        videoId,
                        ratio: aspectRatios[0] / aspectRatios[1],
                        autoplay: !!settings.autoplay,
                        muted: !!settings.quiet,
                        loop: settings.loop,
                        events
                    });
                    break;

                  case "slvideo":
                    this.initSlVideo(dataDiv[0], {
                        src: videoUrl,
                        ratio: aspectRatios[0] / aspectRatios[1],
                        autoplay: !!settings.autoplay,
                        muted: !!settings.quiet,
                        loop: !!settings.loop,
                        events
                    });
                }
            }
            initYoutubeVideo(videoId, options) {
                this.player = new YouTube(videoId, options);
            }
            initVimeoVideo(videoId, options) {
                this.player = new VimeoPlayer(`#${videoId}`, options);
            }
            initSlVideo(videoEl, options) {
                this.player = new VideoJs(videoEl, options);
            }
            initEvent() {
                this.container.find(selectors.playVideoBtn).on("click", (() => {
                    var _this$options, _this$options$clickCa;
                    this.startVideoOnClick();
                    null === (_this$options = this.options) || void 0 === _this$options ? void 0 : null === (_this$options$clickCa = _this$options.clickCallback) || void 0 === _this$options$clickCa ? void 0 : _this$options$clickCa.call(_this$options);
                }));
            }
            onVideoPlayerReady() {
                if (this.settings.autoplay) {
                    this.player.playVideo();
                    if (this.settings.quiet) this.player.mute(); else {
                        this.player.unMute();
                        this.player.playVideo();
                    }
                }
            }
            initAutoplay() {}
            startVideoOnClick() {
                this.container.addClass(classes.playing);
                const {player} = this;
                player.playVideo();
            }
            onUnload() {
                var _this$player, _this$player$destroy;
                null === (_this$player = this.player) || void 0 === _this$player ? void 0 : null === (_this$player$destroy = _this$player.destroy) || void 0 === _this$player$destroy ? void 0 : _this$player$destroy.call(_this$player);
            }
        }
        video_defineProperty(Video, "type", "video");
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/stage/multi-media-splicing/index.js")));
    __webpack_require__.O();
} ]);