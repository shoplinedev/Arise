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
                }
            }
            initYoutubeVideo(videoId, options) {
                this.player = new YouTube(videoId, options);
            }
            initVimeoVideo(videoId, options) {
                this.player = new VimeoPlayer(`#${videoId}`, options);
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