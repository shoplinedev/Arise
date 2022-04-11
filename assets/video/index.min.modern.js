"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "video" ], {
    "./src/assets/stage/video/index.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        var sectionsLoad = __webpack_require__("../shared/browser/utils/sectionsLoad/index.js");
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
        const LibraryLoader = {
            load
        };
        const utils_LibraryLoader = LibraryLoader;
        if ("undefined" === typeof window.__YOUTUBE_IFRAME_API_LOADED__) window.__YOUTUBE_IFRAME_API_LOADED__ = false;
        const prevOnYouTubeIframeAPIReady = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function() {
            if ("function" === typeof prevOnYouTubeIframeAPIReady) prevOnYouTubeIframeAPIReady();
            if (!window.__YOUTUBE_IFRAME_API_LOADED__) {
                window.SL_EventBus.emit("stage:youTubeReady");
                window.__YOUTUBE_IFRAME_API_LOADED__ = true;
            }
        };
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
                rel: 0
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
                this.containerId = containerId;
                this.options = {
                    ...videoOptions,
                    ...options
                };
                if (window.__YOUTUBE_IFRAME_API_LOADED__) this.init(); else {
                    utils_LibraryLoader.load("youtubeSdk");
                    window.SL_EventBus.on("stage:youTubeReady", this.init.bind(this));
                }
            }
            init() {
                window.__YOUTUBE_IFRAME_API_LOADED__ = true;
                this.player = new window.YT.Player(this.containerId, this.options);
            }
            playVideo() {
                var _this$player;
                null === (_this$player = this.player) || void 0 === _this$player ? void 0 : _this$player.playVideo();
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
            }
        }
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
                this.el = $(containerId).get(0);
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
        function _defineProperty(obj, key, value) {
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
                _defineProperty(this, "container", null);
                _defineProperty(this, "sectionId", "");
                _defineProperty(this, "config", {
                    id: ""
                });
                _defineProperty(this, "settings", {});
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
                        events
                    });
                    break;

                  case "vimeo":
                    this.initVimeoVideo(dataDiv.attr("id"), {
                        videoId,
                        ratio: aspectRatios[0] / aspectRatios[1],
                        autoplay: !!settings.autoplay,
                        muted: !!settings.quiet,
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
        _defineProperty(Video, "type", "video");
        (0, sectionsLoad.registrySectionConstructor)(Video.type, Video);
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_exec__("./src/assets/stage/video/index.js");
} ]);