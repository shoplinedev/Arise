"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "order-tracking" ], {
    "./src/assets/stage/order-tracking/index.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        var sectionsLoad = __webpack_require__("../shared/browser/utils/sectionsLoad/index.js");
        var get_env = __webpack_require__("../shared/browser/utils/get-env.js");
        var utils_form = __webpack_require__("../shared/browser/utils/form/index.js");
        var form_form = __webpack_require__("../shared/browser/utils/form/form.js");
        var i18n = __webpack_require__("../shared/browser/utils/i18n.js");
        const allCountries = [ [ "Afghanistan (‫افغانستان‬‎)", "af", "93" ], [ "Albania (Shqipëri)", "al", "355" ], [ "Algeria (‫الجزائر‬‎)", "dz", "213" ], [ "American Samoa", "as", "1", 5, [ "684" ] ], [ "Andorra", "ad", "376" ], [ "Angola", "ao", "244" ], [ "Anguilla", "ai", "1", 6, [ "264" ] ], [ "Antigua and Barbuda", "ag", "1", 7, [ "268" ] ], [ "Argentina", "ar", "54" ], [ "Armenia (Հայաստան)", "am", "374" ], [ "Aruba", "aw", "297" ], [ "Australia", "au", "61", 0 ], [ "Austria (Österreich)", "at", "43" ], [ "Azerbaijan (Azərbaycan)", "az", "994" ], [ "Bahamas", "bs", "1", 8, [ "242" ] ], [ "Bahrain (‫البحرين‬‎)", "bh", "973" ], [ "Bangladesh (বাংলাদেশ)", "bd", "880" ], [ "Barbados", "bb", "1", 9, [ "246" ] ], [ "Belarus (Беларусь)", "by", "375" ], [ "Belgium (België)", "be", "32" ], [ "Belize", "bz", "501" ], [ "Benin (Bénin)", "bj", "229" ], [ "Bermuda", "bm", "1", 10, [ "441" ] ], [ "Bhutan (འབྲུག)", "bt", "975" ], [ "Bolivia", "bo", "591" ], [ "Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387" ], [ "Botswana", "bw", "267" ], [ "Brazil (Brasil)", "br", "55" ], [ "British Indian Ocean Territory", "io", "246" ], [ "British Virgin Islands", "vg", "1", 11, [ "284" ] ], [ "Brunei", "bn", "673" ], [ "Bulgaria (България)", "bg", "359" ], [ "Burkina Faso", "bf", "226" ], [ "Burundi (Uburundi)", "bi", "257" ], [ "Cambodia (កម្ពុជា)", "kh", "855" ], [ "Cameroon (Cameroun)", "cm", "237" ], [ "Canada", "ca", "1", 1, [ "204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905" ] ], [ "Cape Verde (Kabu Verdi)", "cv", "238" ], [ "Caribbean Netherlands", "bq", "599", 1, [ "3", "4", "7" ] ], [ "Cayman Islands", "ky", "1", 12, [ "345" ] ], [ "Central African Republic (République centrafricaine)", "cf", "236" ], [ "Chad (Tchad)", "td", "235" ], [ "Chile", "cl", "56" ], [ "China (中国)", "cn", "86" ], [ "Christmas Island", "cx", "61", 2, [ "89164" ] ], [ "Cocos (Keeling) Islands", "cc", "61", 1, [ "89162" ] ], [ "Colombia", "co", "57" ], [ "Comoros (‫جزر القمر‬‎)", "km", "269" ], [ "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243" ], [ "Congo (Republic) (Congo-Brazzaville)", "cg", "242" ], [ "Cook Islands", "ck", "682" ], [ "Costa Rica", "cr", "506" ], [ "Côte d’Ivoire", "ci", "225" ], [ "Croatia (Hrvatska)", "hr", "385" ], [ "Cuba", "cu", "53" ], [ "Curaçao", "cw", "599", 0 ], [ "Cyprus (Κύπρος)", "cy", "357" ], [ "Czech Republic (Česká republika)", "cz", "420" ], [ "Denmark (Danmark)", "dk", "45" ], [ "Djibouti", "dj", "253" ], [ "Dominica", "dm", "1", 13, [ "767" ] ], [ "Dominican Republic (República Dominicana)", "do", "1", 2, [ "809", "829", "849" ] ], [ "Ecuador", "ec", "593" ], [ "Egypt (‫مصر‬‎)", "eg", "20" ], [ "El Salvador", "sv", "503" ], [ "Equatorial Guinea (Guinea Ecuatorial)", "gq", "240" ], [ "Eritrea", "er", "291" ], [ "Estonia (Eesti)", "ee", "372" ], [ "Ethiopia", "et", "251" ], [ "Falkland Islands (Islas Malvinas)", "fk", "500" ], [ "Faroe Islands (Føroyar)", "fo", "298" ], [ "Fiji", "fj", "679" ], [ "Finland (Suomi)", "fi", "358", 0 ], [ "France", "fr", "33" ], [ "French Guiana (Guyane française)", "gf", "594" ], [ "French Polynesia (Polynésie française)", "pf", "689" ], [ "Gabon", "ga", "241" ], [ "Gambia", "gm", "220" ], [ "Georgia (საქართველო)", "ge", "995" ], [ "Germany (Deutschland)", "de", "49" ], [ "Ghana (Gaana)", "gh", "233" ], [ "Gibraltar", "gi", "350" ], [ "Greece (Ελλάδα)", "gr", "30" ], [ "Greenland (Kalaallit Nunaat)", "gl", "299" ], [ "Grenada", "gd", "1", 14, [ "473" ] ], [ "Guadeloupe", "gp", "590", 0 ], [ "Guam", "gu", "1", 15, [ "671" ] ], [ "Guatemala", "gt", "502" ], [ "Guernsey", "gg", "44", 1, [ "1481", "7781", "7839", "7911" ] ], [ "Guinea (Guinée)", "gn", "224" ], [ "Guinea-Bissau (Guiné Bissau)", "gw", "245" ], [ "Guyana", "gy", "592" ], [ "Haiti", "ht", "509" ], [ "Honduras", "hn", "504" ], [ "Hong Kong (香港)", "hk", "852" ], [ "Hungary (Magyarország)", "hu", "36" ], [ "Iceland (Ísland)", "is", "354" ], [ "India (भारत)", "in", "91" ], [ "Indonesia", "id", "62" ], [ "Iran (‫ایران‬‎)", "ir", "98" ], [ "Iraq (‫العراق‬‎)", "iq", "964" ], [ "Ireland", "ie", "353" ], [ "Isle of Man", "im", "44", 2, [ "1624", "74576", "7524", "7924", "7624" ] ], [ "Israel (‫ישראל‬‎)", "il", "972" ], [ "Italy (Italia)", "it", "39", 0 ], [ "Jamaica", "jm", "1", 4, [ "876", "658" ] ], [ "Japan (日本)", "jp", "81" ], [ "Jersey", "je", "44", 3, [ "1534", "7509", "7700", "7797", "7829", "7937" ] ], [ "Jordan (‫الأردن‬‎)", "jo", "962" ], [ "Kazakhstan (Казахстан)", "kz", "7", 1, [ "33", "7" ] ], [ "Kenya", "ke", "254" ], [ "Kiribati", "ki", "686" ], [ "Kosovo", "xk", "383" ], [ "Kuwait (‫الكويت‬‎)", "kw", "965" ], [ "Kyrgyzstan (Кыргызстан)", "kg", "996" ], [ "Laos (ລາວ)", "la", "856" ], [ "Latvia (Latvija)", "lv", "371" ], [ "Lebanon (‫لبنان‬‎)", "lb", "961" ], [ "Lesotho", "ls", "266" ], [ "Liberia", "lr", "231" ], [ "Libya (‫ليبيا‬‎)", "ly", "218" ], [ "Liechtenstein", "li", "423" ], [ "Lithuania (Lietuva)", "lt", "370" ], [ "Luxembourg", "lu", "352" ], [ "Macau (澳門)", "mo", "853" ], [ "Macedonia (FYROM) (Македонија)", "mk", "389" ], [ "Madagascar (Madagasikara)", "mg", "261" ], [ "Malawi", "mw", "265" ], [ "Malaysia", "my", "60" ], [ "Maldives", "mv", "960" ], [ "Mali", "ml", "223" ], [ "Malta", "mt", "356" ], [ "Marshall Islands", "mh", "692" ], [ "Martinique", "mq", "596" ], [ "Mauritania (‫موريتانيا‬‎)", "mr", "222" ], [ "Mauritius (Moris)", "mu", "230" ], [ "Mayotte", "yt", "262", 1, [ "269", "639" ] ], [ "Mexico (México)", "mx", "52" ], [ "Micronesia", "fm", "691" ], [ "Moldova (Republica Moldova)", "md", "373" ], [ "Monaco", "mc", "377" ], [ "Mongolia (Монгол)", "mn", "976" ], [ "Montenegro (Crna Gora)", "me", "382" ], [ "Montserrat", "ms", "1", 16, [ "664" ] ], [ "Morocco (‫المغرب‬‎)", "ma", "212", 0 ], [ "Mozambique (Moçambique)", "mz", "258" ], [ "Myanmar (Burma) (မြန်မာ)", "mm", "95" ], [ "Namibia (Namibië)", "na", "264" ], [ "Nauru", "nr", "674" ], [ "Nepal (नेपाल)", "np", "977" ], [ "Netherlands (Nederland)", "nl", "31" ], [ "New Caledonia (Nouvelle-Calédonie)", "nc", "687" ], [ "New Zealand", "nz", "64" ], [ "Nicaragua", "ni", "505" ], [ "Niger (Nijar)", "ne", "227" ], [ "Nigeria", "ng", "234" ], [ "Niue", "nu", "683" ], [ "Norfolk Island", "nf", "672" ], [ "North Korea (조선 민주주의 인민 공화국)", "kp", "850" ], [ "Northern Mariana Islands", "mp", "1", 17, [ "670" ] ], [ "Norway (Norge)", "no", "47", 0 ], [ "Oman (‫عُمان‬‎)", "om", "968" ], [ "Pakistan (‫پاکستان‬‎)", "pk", "92" ], [ "Palau", "pw", "680" ], [ "Palestine (‫فلسطين‬‎)", "ps", "970" ], [ "Panama (Panamá)", "pa", "507" ], [ "Papua New Guinea", "pg", "675" ], [ "Paraguay", "py", "595" ], [ "Peru (Perú)", "pe", "51" ], [ "Philippines", "ph", "63" ], [ "Poland (Polska)", "pl", "48" ], [ "Portugal", "pt", "351" ], [ "Puerto Rico", "pr", "1", 3, [ "787", "939" ] ], [ "Qatar (‫قطر‬‎)", "qa", "974" ], [ "Réunion (La Réunion)", "re", "262", 0 ], [ "Romania (România)", "ro", "40" ], [ "Russia (Россия)", "ru", "7", 0 ], [ "Rwanda", "rw", "250" ], [ "Saint Barthélemy", "bl", "590", 1 ], [ "Saint Helena", "sh", "290" ], [ "Saint Kitts and Nevis", "kn", "1", 18, [ "869" ] ], [ "Saint Lucia", "lc", "1", 19, [ "758" ] ], [ "Saint Martin (Saint-Martin (partie française))", "mf", "590", 2 ], [ "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508" ], [ "Saint Vincent and the Grenadines", "vc", "1", 20, [ "784" ] ], [ "Samoa", "ws", "685" ], [ "San Marino", "sm", "378" ], [ "São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239" ], [ "Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966" ], [ "Senegal (Sénégal)", "sn", "221" ], [ "Serbia (Србија)", "rs", "381" ], [ "Seychelles", "sc", "248" ], [ "Sierra Leone", "sl", "232" ], [ "Singapore", "sg", "65" ], [ "Sint Maarten", "sx", "1", 21, [ "721" ] ], [ "Slovakia (Slovensko)", "sk", "421" ], [ "Slovenia (Slovenija)", "si", "386" ], [ "Solomon Islands", "sb", "677" ], [ "Somalia (Soomaaliya)", "so", "252" ], [ "South Africa", "za", "27" ], [ "South Korea (대한민국)", "kr", "82" ], [ "South Sudan (‫جنوب السودان‬‎)", "ss", "211" ], [ "Spain (España)", "es", "34" ], [ "Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94" ], [ "Sudan (‫السودان‬‎)", "sd", "249" ], [ "Suriname", "sr", "597" ], [ "Svalbard and Jan Mayen", "sj", "47", 1, [ "79" ] ], [ "Swaziland", "sz", "268" ], [ "Sweden (Sverige)", "se", "46" ], [ "Switzerland (Schweiz)", "ch", "41" ], [ "Syria (‫سوريا‬‎)", "sy", "963" ], [ "Taiwan (台灣)", "tw", "886" ], [ "Tajikistan", "tj", "992" ], [ "Tanzania", "tz", "255" ], [ "Thailand (ไทย)", "th", "66" ], [ "Timor-Leste", "tl", "670" ], [ "Togo", "tg", "228" ], [ "Tokelau", "tk", "690" ], [ "Tonga", "to", "676" ], [ "Trinidad and Tobago", "tt", "1", 22, [ "868" ] ], [ "Tunisia (‫تونس‬‎)", "tn", "216" ], [ "Turkey (Türkiye)", "tr", "90" ], [ "Turkmenistan", "tm", "993" ], [ "Turks and Caicos Islands", "tc", "1", 23, [ "649" ] ], [ "Tuvalu", "tv", "688" ], [ "U.S. Virgin Islands", "vi", "1", 24, [ "340" ] ], [ "Uganda", "ug", "256" ], [ "Ukraine (Україна)", "ua", "380" ], [ "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971" ], [ "United Kingdom", "gb", "44", 0 ], [ "United States", "us", "1", 0 ], [ "Uruguay", "uy", "598" ], [ "Uzbekistan (Oʻzbekiston)", "uz", "998" ], [ "Vanuatu", "vu", "678" ], [ "Vatican City (Città del Vaticano)", "va", "39", 1, [ "06698" ] ], [ "Venezuela", "ve", "58" ], [ "Vietnam (Việt Nam)", "vn", "84" ], [ "Wallis and Futuna (Wallis-et-Futuna)", "wf", "681" ], [ "Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, [ "5288", "5289" ] ], [ "Yemen (‫اليمن‬‎)", "ye", "967" ], [ "Zambia", "zm", "260" ], [ "Zimbabwe", "zw", "263" ], [ "Åland Islands", "ax", "358", 1, [ "18" ] ] ];
        const countries = allCountries.map((([name, iso2, dialCode, priority, areaCodes]) => ({
            name: name.replace(/\s*\([^()]+?\)$/, ""),
            iso2,
            dialCode,
            priority: priority || 0,
            areaCodes: areaCodes || null
        })));
        const countriesCodeMap = countries.reduce(((res, {iso2, dialCode}) => {
            res[iso2] = `+${dialCode}`;
            return res;
        }), {});
        countries.reduce(((res, {iso2, dialCode}) => {
            res[dialCode] = iso2;
            return res;
        }), {});
        const EMAIL_PATTERN = /^([\w-.+]+)@([\w-.]+)\.([\w-.]+)$/;
        const PHONE_PATTERN = {
            "+86": /^1[3-9]\d{9}$/,
            "+886": /^0?9\d{8}$/,
            "+852": /^(5|6|7|9)\d{7}$/
        };
        const pattern_CODE_PHONE_PATTERN = /^(\w+(\+\d+))-(.*)$/;
        const INTERNATIONAL_PHONE_PATTERN = /^(00|\+)[1-9]{1}([0-9]){9,16}$/;
        const LANGUAGE_MAP = {
            emailError: "customer.general.email_error_hint",
            phoneError: "customer.general.phone_error_message"
        };
        const DEFAULT_LANGUAGE = "en";
        const formatPhone = phone => {
            const result = {};
            if (phone) {
                const exec = pattern_CODE_PHONE_PATTERN.exec(phone);
                if (exec) {
                    result.phone = `${exec[2]}${exec[3]}`.replace("+", "00");
                    result._code = exec[1].slice(0, -exec[2].length);
                }
            }
            return result;
        };
        const phoneNumberValidator = value => new Promise(((resolve, reject) => {
            if (pattern_CODE_PHONE_PATTERN.test(value)) {
                const {$2, $3} = RegExp;
                if (INTERNATIONAL_PHONE_PATTERN.test(`${$2}${$3}`) && (!PHONE_PATTERN[$2] || PHONE_PATTERN[$2].test($3))) resolve();
            }
            reject(LANGUAGE_MAP.phoneError);
        }));
        const emailValidator = value => new Promise(((resolve, reject) => {
            EMAIL_PATTERN.test(value) && value.length <= 50 ? resolve() : reject(LANGUAGE_MAP.emailError);
        }));
        const usernameValidator = value => {
            if (pattern_CODE_PHONE_PATTERN.test(value) && RegExp.$3) return phoneNumberValidator(value);
            return emailValidator(value);
        };
        const UDB_RESPONSE_LANGUAGE_ERROR_CODES = [ -1, -4, -5, -13, -999, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1020, 1021, 1022, 1023, 1024, 1035, 2001, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2016, 3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 3014, 3019, 2014 ];
        const keyMaps = {
            "-1": "2",
            "-13": "3",
            "-4": "4",
            "-5": "5",
            "-999": "6"
        };
        const getUdbResponseLanguageErrorKey = rescode => {
            if (UDB_RESPONSE_LANGUAGE_ERROR_CODES.indexOf(Number(rescode)) > -1) return `customer.general.error_message_${keyMaps[rescode] || rescode}`;
            return;
        };
        function getUdbErrorMessage(res) {
            const errorKey = getUdbResponseLanguageErrorKey(res.rescode);
            return errorKey ? (0, i18n.t)(errorKey) : res.message || (0, i18n.t)("general.order_tracking.form_error");
        }
        function getLanguage() {
            return window && window.SL_State && window.SL_State.get("request.cookie.lang") || DEFAULT_LANGUAGE;
        }
        const CODE_SELECT_CLASS = "form-item__codeSelect";
        const getCodeSelect = defaultIso2 => {
            const optionStr = countries.map((({name, iso2, dialCode}) => `\n      <option value="${iso2}" label="${name}(+${dialCode})" ${iso2 === defaultIso2 ? 'selected="selected"' : ""}>${name}(+${dialCode})</option>\n    `)).join("");
            return `\n    <div class="code-select__container">\n      <div class="code-select__value-wrapper">\n        <span class="code-select__value">${countriesCodeMap[defaultIso2]}</span>\n        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M1.5 1.5L5 5L8.5 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n      </div>\n      <select class="form-item__select ${CODE_SELECT_CLASS}" autocomplete="off">\n        ${optionStr}\n      </select>\n    </div>\n  `;
        };
        const DEFAULT_PHONE_CODE = "cn+86";
        const DEFAULT_PHONE_ISO2 = "cn";
        const CODE_SELECT_CONTAINER_CLASS = "code-select__container";
        const username_CODE_SELECT_CLASS = "form-item__codeSelect";
        class Username {
            constructor({form, formId, value, iso2}) {
                this.form = form;
                this.formId = formId;
                this.$username = __SL_$__(`#${formId} [sl-form-item-name="username"] .sl-input`);
                this.$input = this.$username.find(".sl-input__inpEle");
                const originValue = value || "";
                if (iso2) {
                    this.iso2 = iso2;
                    if (/^\d+$/.test(value)) this.createCodeSelect();
                } else {
                    const countryCodeOriginal = window && window.SL_State && window.SL_State.get("customer_address.countryCode");
                    const countryCode = countryCodeOriginal && countryCodeOriginal.toLowerCase();
                    this.iso2 = iso2 || countryCode;
                }
                const code = countriesCodeMap[this.iso2];
                if (code) this.code = `${this.iso2}${code}`; else {
                    this.iso2 = DEFAULT_PHONE_ISO2;
                    this.code = DEFAULT_PHONE_CODE;
                }
                this.value = this.changeValue(this.code, originValue);
                this.inputValue = originValue;
                this.init();
            }
            init() {
                this.bindEvents();
            }
            install() {
                return {
                    rules: [ {
                        validator: value => {
                            const val = this.changeValue(this.code, value);
                            return usernameValidator(val).catch((err => Promise.reject((0, i18n.t)(err))));
                        }
                    } ]
                };
            }
            changeValue(code, inputValue) {
                const value = inputValue && inputValue.trim();
                const val = /^\d+$/.test(value) ? `${code}-${value}` : value;
                this.code = code;
                this.value = val;
                this.inputValue = value;
                return val;
            }
            changeCodeValue(iso2) {
                const $codeValue = this.$username.find(`.code-select__value`);
                const $select = this.$username.find(`.${username_CODE_SELECT_CLASS}`);
                $codeValue.text(countriesCodeMap[iso2]);
                if ($select.val() !== iso2) $select.val(iso2);
            }
            getValue() {
                const $select = this.$username.find(`.${username_CODE_SELECT_CLASS}`);
                return {
                    username: this.inputValue || this.$input && this.$input.val() || "",
                    code: this.code,
                    iso2: this.iso2 || $select.val() || ""
                };
            }
            getFormValue() {
                const value = this.value || this.changeValue(this.code, this.$input && this.$input.val());
                if (pattern_CODE_PHONE_PATTERN.test(value)) {
                    const val = formatPhone(value);
                    return {
                        username: val.phone,
                        _code: val._code
                    };
                }
                return {
                    username: value
                };
            }
            createCodeSelect() {
                const selectElementStr = getCodeSelect(this.iso2);
                this.$username.append(selectElementStr);
                const $container = this.$username.find(`.${CODE_SELECT_CONTAINER_CLASS}`);
                const $select = $container.find(`.${username_CODE_SELECT_CLASS}`);
                $select && $select.val(this.iso2);
                this.bindSelectCodeEvent($select);
                return $container;
            }
            bindEvents() {
                let $container = this.$username.find(`.${CODE_SELECT_CONTAINER_CLASS}`);
                const $select = $container.find(`.${username_CODE_SELECT_CLASS}`);
                let selectElementHasMounted = $select && $select.length > 0;
                this.$input.off("input");
                this.$input.on("input", (e => {
                    const val = this.changeValue(this.code, e.target.value);
                    const phoneInputMode = !(!pattern_CODE_PHONE_PATTERN.test(val || "") || !RegExp.$3);
                    if (phoneInputMode) {
                        if (!selectElementHasMounted) {
                            $container = this.createCodeSelect();
                            selectElementHasMounted = true;
                            return;
                        }
                        $container && $container.show();
                    }
                    if (!phoneInputMode && selectElementHasMounted) $container && $container.hide();
                }));
            }
            bindSelectCodeEvent($select) {
                $select.on("change", (() => {
                    const iso2 = $select.val();
                    const val = countriesCodeMap[iso2];
                    this.iso2 = iso2;
                    this.code = `${iso2}${val}`;
                    this.changeCodeValue(iso2);
                    this.changeValue(this.code, this.inputValue);
                    if (this.inputValue) {
                        this.form.validateFields("username");
                        this.form.setLocalsValue("username", this.$input.val());
                    }
                }));
                $select.on("input", (e => e.stopPropagation()));
            }
        }
        const username = Username;
        const BUTTON_LOADING_CLASS = "btn--loading";
        class Verifycode {
            constructor({form, formId, value, on, immediate, watch}) {
                this.countDown = 60;
                this.countDownTimeout = null;
                this.watch = watch;
                this.form = form;
                this.formId = formId;
                this.on = on;
                this.$item = __SL_$__(`#${formId} [sl-form-item-name="verifycode"] .sl-input`);
                this.$input = this.$item.find(".sl-input__inpEle");
                this.$send = this.$item.find(`.order-tracking__send-btn`);
                const originValue = value || this.$input && this.$input.val();
                this.value = originValue;
                this.inputValue = originValue;
                this.immediate = immediate;
                this.dependFormItemName = null;
                this.init();
            }
            $$watch({name, value}) {
                this.changeSendButtonStatus(name, value);
            }
            changeSendButtonStatus(name, value) {
                if (this.countDownTimeout) return;
                if (void 0 === value) return;
                const {$send} = this;
                if (value) {
                    this.dependFormItemName = name;
                    this.form.validateFields([ name ]).then((res => {
                        if (res.pass) $send.removeAttr("disabled"); else $send.attr("disabled", true);
                    })).catch((() => {
                        $send.attr("disabled", true);
                    }));
                } else $send.attr("disabled", true);
            }
            init() {
                this.bindSendCodeEvent();
            }
            getValue() {
                return {
                    verifycode: this.inputValue || this.$input.val() || ""
                };
            }
            getFormValue() {
                const value = this.inputValue || this.$input.val() || "";
                this.value = value;
                return {
                    verifycode: value
                };
            }
            setCountDown() {
                if (this.countDown > 0) {
                    this.$send.attr("disabled", true);
                    this.$send.text(`${(0, i18n.t)("customer.general.resend")}(${this.countDown})`);
                    this.countDown -= 1;
                    this.countDownTimeout = window.setTimeout((() => {
                        this.setCountDown();
                    }), 1e3);
                } else this.clearCountDown();
            }
            clearCountDown() {
                this.$send.removeAttr("disabled");
                this.$send.html(`${(0, i18n.t)("customer.general.send")}<div class='btn-loading__spinner'></div>`);
                window.clearTimeout(this.countDownTimeout);
                this.countDownTimeout = null;
                this.countDown = 60;
            }
            bindSendCodeEvent() {
                const {$send} = this;
                let loading = false;
                $send.off("click").on("click", (async e => {
                    e.preventDefault();
                    if (loading) return false;
                    this.clearCountDown();
                    try {
                        loading = true;
                        __SL_$__(e.target).addClass(BUTTON_LOADING_CLASS);
                        await (this.on && this.on.send());
                        this.form.removeErrList([ this.dependFormItemName || "verifycode" ]);
                        this.setCountDown();
                    } catch (error) {
                        this.clearCountDown();
                        if (error && (error.rescode || error.message)) this.form.setErrMsgIntoDom([ {
                            name: this.dependFormItemName || "verifycode",
                            messages: [ getUdbErrorMessage(error) ]
                        } ]);
                    }
                    loading = false;
                    __SL_$__(e.target).removeClass(BUTTON_LOADING_CLASS);
                }));
                if (this.immediate) this.triggerSendCode();
                if (this.watch && this.watch.length) {
                    const val = this.form.getFieldValue(this.watch[0]);
                    if (val) this.changeSendButtonStatus(this.watch[0], val); else this.$send.attr("disabled", true);
                }
            }
            triggerSendCode() {
                const {$send} = this;
                $send.removeAttr("disabled");
                $send.trigger("click");
            }
            reset() {
                this.clearCountDown();
            }
        }
        const verifycode = Verifycode;
        const map = {
            username,
            verifycode
        };
        const install = (formInstance, fields, defaultFormValue = {}) => {
            const formItems = {};
            const initFields = fields.map((({type, name, value, dependencies, rules = [], on = {}, ...args}) => {
                const Constructor = map[type];
                const dependenciesValue = dependencies && dependencies.reduce(((values, key) => {
                    values[key] = defaultFormValue[key];
                    return values;
                }), {});
                if (Constructor) {
                    const instance = new Constructor({
                        name,
                        form: formInstance,
                        formId: formInstance.fid,
                        value,
                        on,
                        ...args,
                        ...dependenciesValue
                    });
                    if (defaultFormValue[name]) __SL_$__(formInstance.el).find(`input[name=${name}]`).val(defaultFormValue[name]);
                    const {rules: defaultRules = []} = instance && instance.install && instance.install() || {};
                    formItems[name] = instance;
                    return {
                        name,
                        value,
                        rules: rules.concat(defaultRules)
                    };
                }
                return {
                    name,
                    value,
                    rules
                };
            }));
            initFields.forEach((({name, value, rules}) => {
                formInstance.setRule(rules, name);
                if (value) formInstance.setLocalsValue(name, value);
            }));
            formInstance.on("valuesChange", (({changedValue}) => {
                const keys = Object.keys(changedValue);
                const key = keys && keys[0];
                const subscriptField = fields.filter((item => item && item.watch && item.watch.includes(key))) || [];
                subscriptField && subscriptField.forEach((field => {
                    const currentInstance = formItems[field && field.type];
                    const $$watch = currentInstance && currentInstance.$$watch;
                    if ("function" === typeof $$watch) $$watch && $$watch.call(currentInstance, {
                        name: key,
                        value: changedValue[key]
                    }); else if ("object" === typeof $$watch) $$watch && $$watch[key] && $$watch[key].call(currentInstance, changedValue[key]);
                }));
            }));
            return formItems;
        };
        var toast = __webpack_require__("../shared/browser/components/hbs/shared/components/toast/index.js");
        const form_BUTTON_LOADING_CLASS = "btn--loading";
        class PageOrderTrackingForm {
            constructor({id, fields, formValue = {}, onSubmit, onValidate}) {
                this.formId = id;
                this.fields = fields;
                this.formInstance = null;
                this.onSubmit = onSubmit;
                this.onValidate = onValidate;
                this.formItemInstances = {};
                this.defaultFormValue = formValue;
                this.init();
            }
            init() {
                this.formInstance = this.initForm();
                this.setFormFields(this.fields);
                this.bindEvents();
            }
            initForm() {
                const formInstance = utils_form["default"].takeForm(this.formId);
                formInstance.init({
                    validateTriggerAfterValidationFailed: form_form.ValidateTrigger.MANUAL
                });
                return formInstance;
            }
            setFormFields(fields) {
                this.formItemInstances = install(this.formInstance, fields, this.defaultFormValue);
            }
            bindEvents() {
                this.bindFormSubmit();
            }
            bindFormSubmit() {
                let isLoading = false;
                const $submitBtn = __SL_$__(`#${this.formId} .submit-button`);
                $submitBtn.off("click");
                $submitBtn.on("click", (async e => {
                    if (isLoading) return;
                    if (!(window && window.navigator && window.navigator.onLine)) {
                        toast["default"].init({
                            content: (0, i18n.t)("customer.general.network_error_message")
                        });
                        return;
                    }
                    e.preventDefault();
                    try {
                        await this.validateForm();
                        const data = this.getFormValue();
                        isLoading = true;
                        __SL_$__(e.target).addClass(form_BUTTON_LOADING_CLASS);
                        await (this.onSubmit && this.onSubmit(data));
                    } catch (err) {
                        const lastField = this.fields[this.fields.length - 1];
                        if (lastField.name && this.formInstance.setErrMsgIntoDom) this.formInstance.setErrMsgIntoDom([ {
                            name: lastField.name,
                            messages: [ getUdbErrorMessage(err) ]
                        } ]);
                    }
                    isLoading = false;
                    __SL_$__(e.target).removeClass(form_BUTTON_LOADING_CLASS);
                }));
            }
            getValue() {
                const fieldsValue = this.formInstance.getFieldsValue();
                return Object.keys(fieldsValue).reduce(((values, key) => {
                    const itemValue = this.formItemInstances[key] && this.formItemInstances[key].getValue();
                    if (itemValue) return {
                        ...values,
                        ...itemValue
                    };
                    return {
                        ...values,
                        [key]: fieldsValue[key]
                    };
                }), {});
            }
            getFormValue() {
                const fieldsValue = this.formInstance.getFieldsValue();
                return fieldsValue;
            }
            async validateForm() {
                const validateFields = [];
                this.fields.forEach((item => {
                    validateFields.push(this.formInstance.validateFields(item.name));
                }));
                if ("function" === typeof this.onValidate) validateFields.push(this.onValidate());
                const res = await Promise.all(validateFields);
                const failRes = res.filter((item => !item.pass));
                if (failRes.length > 0) {
                    const lastField = failRes[failRes.length - 1].errFields[0];
                    if (lastField && lastField.name) throw new Error(lastField.messages);
                }
                return true;
            }
            bindInputActive() {
                __SL_$__(this.formInstance.el).find(".placeholder").one("transitionend", (e => {
                    __SL_$__(e.target).addClass("active");
                    setTimeout((() => __SL_$__(e.target).removeClass("active")), 100);
                }));
            }
            destroy() {
                Object.keys(this.formItemInstances).forEach((instance => {
                    this.formItemInstances[instance] && this.formItemInstances[instance].reset && this.formItemInstances[instance].reset();
                }));
                this.formItemInstances = {};
                this.formInstance && this.formInstance.resetErrStatus();
                this.formInstance && this.formInstance.destroy();
                this.formInstance = null;
            }
        }
        const orderTracking_form = PageOrderTrackingForm;
        const formFields = {
            email(config = {}) {
                return {
                    name: "email",
                    type: "email",
                    value: "",
                    rules: [ {
                        message: (0, i18n.t)("customer.general.email_empty_hint"),
                        required: true
                    }, {
                        message: (0, i18n.t)("customer.general.email_error_hint"),
                        validator: value => emailValidator(value)
                    } ],
                    ...config
                };
            },
            phone(config = {}) {
                return {
                    name: "phone",
                    type: "phone",
                    value: "",
                    dependencies: [ "iso2" ],
                    rules: [ {
                        message: (0, i18n.t)("customer.general.phone_empty_message"),
                        required: true
                    } ],
                    ...config
                };
            },
            username(config = {}) {
                return {
                    name: "username",
                    type: "username",
                    value: "",
                    dependencies: [ "iso2" ],
                    rules: [ {
                        message: (0, i18n.t)("customer.general.username_empty_hint"),
                        required: true
                    } ],
                    ...config
                };
            },
            verifycode(configs = {}) {
                return {
                    name: "verifycode",
                    type: "verifycode",
                    value: "",
                    rules: [ {
                        message: (0, i18n.t)("customer.general.enter_verification_code"),
                        required: true
                    } ],
                    ...configs
                };
            },
            orderId(configs = {}) {
                return {
                    name: "orderId",
                    type: "orderId",
                    value: "",
                    rules: [ {
                        message: (0, i18n.t)("general.order_tracking.orderId_error"),
                        required: true
                    } ],
                    ...configs
                };
            }
        };
        const getFormFieldsHelper = (types = []) => types.filter((type => !!type)).map((item => {
            if ("string" === typeof item) return formFields[item] && formFields[item]();
            const {type, ...args} = item;
            return formFields[type](args);
        }));
        const getFormFields = getFormFieldsHelper;
        var modal = __webpack_require__("../shared/browser/components/hbs/shared/components/modal/index.js");
        const loadScript = url => {
            if (loadScript.instance && loadScript.instance[url]) return loadScript.instance[url];
            const scriptRequest = new Promise(((resolve, reject) => {
                const scriptElement = document.createElement("script");
                scriptElement.src = url;
                scriptElement.type = "text/javascript";
                scriptElement.async = true;
                scriptElement.crossOrigin = "anonymous";
                scriptElement.onload = () => resolve();
                scriptElement.onerror = err => {
                    if (loadScript.instance && loadScript.instance[url]) delete loadScript.instance[url];
                    reject(err);
                };
                document.body.appendChild(scriptElement);
            }));
            if (!loadScript.instance) loadScript.instance = {
                [url]: scriptRequest
            }; else loadScript.instance[url] = scriptRequest;
            return scriptRequest;
        };
        loadScript.instance = {};
        const config = {
            SDK_URL_OSS: "r2cdn.myshopline.cn/static/rs/acuf/prod/latest/bundle.iife.js",
            SDK_URL_S3: "https://r2cdn.myshopline.com/static/rs/acuf/prod/latest/bundle.iife.js",
            IS_MAINLAND: false,
            APP_ENV: (0, get_env["default"])().APP_ENV || "product",
            APP_CODE: "m3tdgo"
        };
        const CAPTCHA_CONTROL_URL = config.IS_MAINLAND ? config.SDK_URL_OSS : config.SDK_URL_S3;
        let captchaInstance = null;
        const loadArmorCaptcha = ({wrapId = "content", lang, onSuccess, onFail, onClose}) => {
            if (captchaInstance) return Promise.resolve(captchaInstance);
            return loadScript(CAPTCHA_CONTROL_URL).then((() => {
                const {ArmorCaptcha} = window;
                captchaInstance = new ArmorCaptcha({
                    wrapId,
                    lang,
                    onSuccess,
                    onFail,
                    onClose,
                    origin: window.location.origin,
                    appCode: config.APP_CODE,
                    captchaScene: "user"
                });
                return captchaInstance;
            }));
        };
        let cacheModal = null;
        let cacheArmorCaptcha = null;
        let lang = null;
        const contentId = `captcha-content`;
        const openCaptchaModal = async ({onSuccess}) => {
            if (cacheModal) {
                cacheModal.show();
                cacheArmorCaptcha && cacheArmorCaptcha.reset();
                if (lang !== getLanguage()) cacheArmorCaptcha.changeLanguage(getLanguage());
                return;
            }
            cacheModal = new modal.ModalWithHtml({
                zIndex: 1e3,
                containerClassName: "captcha-modal-container",
                closable: false,
                maskClosable: true,
                bodyClassName: "captcha-modal-body",
                content: `<div id="${contentId}" class="captcha-content"></div>`,
                destroyedOnClosed: false
            });
            cacheModal.show();
            __SL_$__(`#${cacheModal.modalId}`).find(".mp-modal__mask").addClass("captcha-transparent");
            __SL_$__(`#${cacheModal.modalId}`).on("click", ".captcha-modal-container", (e => {
                const $target = __SL_$__(e.target).parents(".captcha-content");
                if ($target.length < 1) cacheModal.hide();
            }));
            lang = getLanguage();
            cacheArmorCaptcha = await loadArmorCaptcha({
                wrapId: contentId,
                lang,
                onSuccess: token => {
                    cacheModal.hide();
                    onSuccess && onSuccess(token);
                }
            });
        };
        let captchaToken = null;
        const isFunction = fn => "function" === typeof fn;
        const CAPTCHA_CODE = [ "2019", "2020", "3018", "3021", "1015" ];
        const wrapArmorCaptcha = async ({beforeSendCode, onSendCode, onCaptchaVerifySuccess}) => {
            if (!captchaToken) isFunction(beforeSendCode) && await beforeSendCode();
            try {
                isFunction(onSendCode) && await onSendCode(captchaToken);
                captchaToken = null;
            } catch (e) {
                captchaToken = null;
                if (CAPTCHA_CODE.includes(e.rescode)) {
                    openCaptchaModal({
                        onSuccess: async token => {
                            captchaToken = token;
                            isFunction(onCaptchaVerifySuccess) && await onCaptchaVerifySuccess(token);
                        }
                    });
                    return Promise.reject(false);
                }
                return Promise.reject(e);
            }
        };
        const getCaptchaToken = () => captchaToken;
        const captcha_modal = openCaptchaModal;
        const DF_ENV = {
            develop: "dev",
            staging: "test",
            preview: "pre",
            product: "pro"
        };
        const riskControl_config = {
            DF_SDK_URL_OSS: "https://r2cdn.myshopline.cn/static/rs/adff/prod/latest/bundle.iife.js",
            DF_SDK_URL_S3: "https://r2cdn.myshopline.com/static/rs/adff/prod/latest/bundle.iife.js",
            IS_MAINLAND: false,
            APP_ENV: (0, get_env["default"])().APP_ENV || "product",
            DF_APP_CODE: "m3tdgo",
            PUBLICKEY: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDFOkIm2U9Gn1fMq3cA5RUB9dG7LTIjt8lC3udJL75EzuclO2/GhHLVnVIbXnaBhBkCvYqDmwWJDyzWh2Uaor1VFeAtOuFAmqFWFc/JXS1MosLusO8HSHT1qUWLmkefU+BCf77rVPD7kBdXgWds2pLhB0sijpP6QdaFZNiVcTuetQIDAQAB"
        };
        const RISK_CONTROL_URL = riskControl_config.IS_MAINLAND ? riskControl_config.DF_SDK_URL_OSS : riskControl_config.DF_SDK_URL_S3;
        const riskHumanToken = {
            codeBtnToken: null,
            orderBtnToken: null
        };
        let dfInstance = null;
        const initRiskHumanToken = () => {
            const checker = window.DeviceFingerprint.mmc({
                env: DF_ENV[riskControl_config.APP_ENV || "prd"],
                publicKey: riskControl_config.PUBLICKEY,
                timeout: 500
            });
            checker.listen("JsendCode", (token => {
                riskHumanToken.codeBtnToken = token;
            }));
            checker.listen("JorderView", (token => {
                riskHumanToken.orderBtnToken = token;
            }));
        };
        const loadRiskControl = () => {
            if (dfInstance) return Promise.resolve(dfInstance);
            return loadScript(RISK_CONTROL_URL).then((() => {
                dfInstance = window.DeviceFingerprint && window.DeviceFingerprint({
                    env: DF_ENV[riskControl_config.APP_ENV || "prd"],
                    appCode: riskControl_config.DF_APP_CODE
                });
                initRiskHumanToken();
                return dfInstance;
            }));
        };
        const getRiskHumanToken = () => new Promise((resolve => {
            setTimeout((() => {
                resolve(riskHumanToken);
            }), 600);
        }));
        const getRiskControlToken = () => loadRiskControl().then((df => df && df.getToken()));
        var request = __webpack_require__("../shared/browser/utils/request.js");
        const udbRequest = {
            get(url, options = {}) {
                return (0, request["default"])({
                    method: "GET",
                    baseURL: "/leproxy",
                    url,
                    ...options
                });
            }
        };
        const request_request = request["default"];
        const initUdbLogin = params => udbRequest.get("/udb/lgn/login/init.do", {
            params
        });
        const sendEmailCode = params => udbRequest.get("/udb/lgn/login/sendEmail.do", {
            params
        });
        const verifyEmailLogin = params => udbRequest.get("/udb/lgn/login/verifyEmail.do", {
            params
        });
        const checkOrder = data => request_request.post("/site/check/order/query", data);
        const appidJson = {
            develop: 1163336839,
            staging: 1163336839,
            preview: 1165600903,
            product: 1165600903
        };
        class OrderTrackingForm {
            constructor(dom) {
                this.formDom = dom;
                this.isHistoryOrder = false;
                this.verify = true;
                this.formId = "JorderTrackingForm";
                this.initChangeForm();
            }
            init() {
                this.orderTrackingFormInstance && this.orderTrackingFormInstance.destroy();
                this.orderTrackingFormInstance = new orderTracking_form({
                    id: this.formId,
                    fields: this.getFieldConfigs(),
                    onSubmit: async data => {
                        if (this.isHistoryOrder) await this.onHistoryOrderSubmit(data); else await this.onViewSubmit(data);
                    }
                });
            }
            async initChangeForm() {
                this.dfptoken = await getRiskControlToken();
                this.formDom.find(".order-tracking__change-form-btn").click((() => {
                    if (this.isHistoryOrder) {
                        this.formDom.find(".JfindOrder").show();
                        this.formDom.find(".JhistoryOrder").hide();
                    } else {
                        this.formDom.find(".JfindOrder").hide();
                        this.formDom.find(".JhistoryOrder").show();
                    }
                    this.isHistoryOrder = !this.isHistoryOrder;
                    this.init();
                }));
                this.init();
            }
            getFieldConfigs() {
                const fieldTypes = this.isHistoryOrder ? [ "email", {
                    type: "verifycode",
                    on: {
                        send: () => this.sendVerifyCode()
                    },
                    watch: [ "email" ]
                } ] : [ "username", "orderId" ];
                return getFormFields(fieldTypes);
            }
            async onViewSubmit(data) {
                try {
                    const tokenObj = await getRiskHumanToken();
                    const newData = {
                        ...data,
                        dfpToken: this.dfptoken,
                        msToken: tokenObj.orderBtnToken
                    };
                    newData.email = null;
                    newData.phone = null;
                    if (data.username.includes("@")) newData.email = data.username; else {
                        const itemValue = this.orderTrackingFormInstance.formItemInstances.username.getFormValue();
                        newData.phone = itemValue.username;
                    }
                    const res = await checkOrder(newData);
                    if (res.data && res.data.riskCheck) this.orderCaptcha(data);
                    if (res.data && res.data.orderUrl) window.location.href = res.data.orderUrl;
                } catch (error) {
                    if ("SLE1101" === error.code) this.onError({
                        message: (0, i18n.t)("general.order_tracking.risk_black_user")
                    }); else if ("SLE1102" === error.code) this.onError({
                        message: (0, i18n.t)("general.order_tracking.risk_interception")
                    }); else if ("SLE1103" === error.code) this.onError({
                        message: (0, i18n.t)("general.order_tracking.query_illegal")
                    }); else this.onError(error);
                }
            }
            async onHistoryOrderSubmit(data) {
                try {
                    if (!this.stoken) {
                        const loginRes = await this.initUdbLoginFun();
                        if (loginRes && loginRes.stoken) this.stoken = loginRes.stoken;
                    }
                    const res = await verifyEmailLogin({
                        appid: appidJson[(0, get_env["default"])().APP_ENV || "product"],
                        code: data.verifycode,
                        stoken: this.stoken,
                        acct: data.email,
                        captcha: getCaptchaToken()
                    });
                    if ("0" === res.rescode) window.location.href = "/user/orders";
                } catch (error) {
                    this.onError(error);
                }
            }
            async orderCaptcha(data) {
                captcha_modal({
                    onSuccess: async token => {
                        const newData = {
                            ...data,
                            token
                        };
                        this.onViewSubmit(newData);
                    }
                });
            }
            initUdbLoginFun() {
                return initUdbLogin({
                    appid: appidJson[(0, get_env["default"])().APP_ENV || "product"],
                    subappid: window.Shopline.storeId,
                    type: "email",
                    dfptoken: this.dfptoken,
                    lang: window.SL_State.get("request.locale")
                });
            }
            async sendVerifyCode() {
                try {
                    await wrapArmorCaptcha({
                        beforeSendCode: async () => {
                            const res = await this.orderTrackingFormInstance.formInstance.validateFields([ "email" ]);
                            if (res.pass) {
                                const loginRes = await this.initUdbLoginFun();
                                if (loginRes && loginRes.stoken) this.stoken = loginRes.stoken;
                                if ("0" !== loginRes.rescode) return Promise.reject(loginRes);
                                return Promise.resolve();
                            }
                            return Promise.reject();
                        },
                        onSendCode: async captchaToken => {
                            const formValue = this.orderTrackingFormInstance && this.orderTrackingFormInstance.getFormValue();
                            const acct = formValue.email;
                            const tokenObj = await getRiskHumanToken();
                            const res = await sendEmailCode({
                                appid: appidJson[(0, get_env["default"])().APP_ENV || "product"],
                                acct,
                                stoken: this.stoken,
                                captcha: captchaToken,
                                mtoken: tokenObj.codeBtnToken
                            }).catch((err => {
                                if (err && err.stoken) this.stoken = err.stoken;
                                return err;
                            }));
                            if (res && res.stoken) this.stoken = res.stoken;
                            if ("0" !== res.rescode) return Promise.reject(res);
                            return Promise.resolve();
                        },
                        onCaptchaVerifySuccess: async () => {
                            this.orderTrackingFormInstance.formItemInstances.verifycode.triggerSendCode();
                        }
                    });
                } catch (e) {
                    e && this.onError(e);
                    if (e) return Promise.reject();
                }
            }
            onError(e) {
                const fields = this.getFieldConfigs();
                const lastField = fields[fields.length - 1];
                if (lastField && lastField.name) this.orderTrackingFormInstance && this.orderTrackingFormInstance.formInstance.setErrMsgIntoDom([ {
                    name: lastField.name,
                    messages: [ getUdbErrorMessage(e) ]
                } ]);
            }
            onUnload() {
                this.orderTrackingFormInstance.destroy();
            }
        }
        const orderTracking = OrderTrackingForm;
        (0, sectionsLoad.registrySectionConstructor)("order-tracking", orderTracking);
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/stage/order-tracking/index.js")));
    __webpack_require__.O();
} ]);