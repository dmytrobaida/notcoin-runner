import {
    j as jsxRuntimeExports,
    r as reactExports,
    c as cn,
    R as React,
    m as motion,
    a as reactDomExports,
    k as ky,
    T as TonConnect,
    b as create,
    S as Swiper,
    d as SwiperSlide,
    u as useNavigate,
    A as AnimatePresence,
    e as useLocation,
    f as useParams,
    J as JSConfetti,
    B as BrowserRouter,
    g as Routes,
    h as Route,
    i as client
} from "./vendor-28842ac8.js";
(function() {
    const s = document.createElement("link").relList;
    if (s && s.supports && s.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
    new MutationObserver(o => {
        for (const r of o)
            if (r.type === "childList")
                for (const a of r.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function t(o) {
        const r = {};
        return o.integrity && (r.integrity = o.integrity), o.referrerPolicy && (r.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? r.credentials = "include" : o.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
    }

    function n(o) {
        if (o.ep) return;
        o.ep = !0;
        const r = t(o);
        fetch(o.href, r)
    }
})();
const Fragment = jsxRuntimeExports.Fragment,
    jsx = jsxRuntimeExports.jsx,
    jsxs = jsxRuntimeExports.jsxs,
    devConfig = {
        isDev: !0,
        apiHost: "https://clicker-api.joincommunity.xyz",
        tonConnectManifestUrl: "https://cdn.joincommunity.xyz/assets/manifest.json",
        tonConnectWalletsListSource: "https://cdn.joincommunity.xyz/assets/wallets.json",
        botLink: "https://t.me/notcoin_bot",
        accessToken: {}.VITE_ACCESS_TOKEN
    },
    prodConfig = {
        isProd: !0,
        apiHost: "https://clicker-api.joincommunity.xyz",
        tonConnectManifestUrl: "https://cdn.joincommunity.xyz/assets/manifest.json",
        tonConnectWalletsListSource: "https://cdn.joincommunity.xyz/assets/wallets.json",
        botLink: "https://t.me/notcoin_bot"
    };
let config;
switch ("production") {
    case "production":
        config = { ...prodConfig
        };
        break;
    default:
        config = { ...devConfig
        }
}
const config$1 = config,
    backdrop$a = "_backdrop_19oqi_1",
    opened$3 = "_opened_19oqi_15",
    root$v = "_root_19oqi_27",
    actionGroup = "_actionGroup_19oqi_46",
    actionGroupTitle = "_actionGroupTitle_19oqi_76",
    button$7 = "_button_19oqi_93",
    destructive = "_destructive_19oqi_141",
    styles$1j = {
        backdrop: backdrop$a,
        opened: opened$3,
        root: root$v,
        actionGroup,
        actionGroupTitle,
        button: button$7,
        destructive
    },
    root$u = "_root_1dmmg_1",
    size24$1 = "_size-24_1dmmg_12",
    size112$1 = "_size-112_1dmmg_18",
    radius32$1 = "_radius-32_1dmmg_24",
    styles$1i = {
        root: root$u,
        "size-24": "_size-24_1dmmg_12",
        size24: size24$1,
        "size-112": "_size-112_1dmmg_18",
        size112: size112$1,
        "radius-32": "_radius-32_1dmmg_24",
        radius32: radius32$1
    },
    BackButton = ({
        onClick: e = () => {},
        hidden: s
    }) => {
        var o;
        const t = (o = window == null ? void 0 : window.Telegram) == null ? void 0 : o.WebApp,
            n = t ? t.BackButton : null;
        return reactExports.useEffect(() => {
            n && n.show()
        }, []), reactExports.useEffect(() => {
            s && n && n.hide()
        }, [s]), reactExports.useEffect(() => (t == null || t.onEvent("backButtonClicked", e), () => {
            t == null || t.offEvent("backButtonClicked", e)
        }), [e]), null
    },
    root$t = "_root_wsv3x_1",
    green = "_green_wsv3x_16",
    blue = "_blue_wsv3x_20",
    orange = "_orange_wsv3x_24",
    gray = "_gray_wsv3x_28",
    styles$1h = {
        root: root$t,
        green,
        blue,
        orange,
        gray
    },
    root$s = "_root_j8rcd_1",
    disabled = "_disabled_j8rcd_28",
    typeBasic = "_type-basic_j8rcd_35",
    typeDanger = "_type-danger_j8rcd_40",
    typeBlue$1 = "_type-blue_j8rcd_44",
    typeOrange$1 = "_type-orange_j8rcd_48",
    typeInlineLink = "_type-inline-link_j8rcd_52",
    fixedBottom = "_fixedBottom_j8rcd_68",
    styles$1g = {
        root: root$s,
        disabled,
        "type-basic": "_type-basic_j8rcd_35",
        typeBasic,
        "type-danger": "_type-danger_j8rcd_40",
        typeDanger,
        "type-blue": "_type-blue_j8rcd_44",
        typeBlue: typeBlue$1,
        "type-orange": "_type-orange_j8rcd_48",
        typeOrange: typeOrange$1,
        "type-inline-link": "_type-inline-link_j8rcd_52",
        typeInlineLink,
        fixedBottom
    },
    Button$1 = ({
        children: e,
        onClick: s,
        disabled: t,
        prefix: n,
        type: o = "basic",
        className: r,
        fixedBottom: a
    }) => jsxs("div", {
        className: cn(styles$1g.root, styles$1g[`type-${o}`], t && styles$1g.disabled, a && styles$1g.fixedBottom, r),
        onClick: () => {
            !t && s && s()
        },
        children: [n ? jsx("div", {
            className: styles$1g.prefix,
            children: n
        }) : null, e]
    }),
    padding0 = "_padding-0_goxyy_1",
    padding48 = "_padding-4-8_goxyy_5",
    padding6Body = "_padding-6-body_goxyy_9",
    padding60 = "_padding-6-0_goxyy_13",
    padding120 = "_padding-12-0_goxyy_17",
    padding10 = "_padding-10_goxyy_21",
    padding16 = "_padding-16_goxyy_25",
    padding1016 = "_padding-10-16_goxyy_29",
    padding1416 = "_padding-14-16_goxyy_33",
    padding160 = "_padding-16-0_goxyy_37",
    padding200 = "_padding-20-0_goxyy_41",
    padding240 = "_padding-24-0_goxyy_45",
    padding328 = "_padding-32-8_goxyy_49",
    padding004 = "_padding-0-0-4_goxyy_53",
    padding008 = "_padding-0-0-8_goxyy_57",
    padding0010 = "_padding-0-0-10_goxyy_61",
    padding0012 = "_padding-0-0-12_goxyy_65",
    padding0014 = "_padding-0-0-14_goxyy_69",
    padding0016 = "_padding-0-0-16_goxyy_73",
    padding0018 = "_padding-0-0-18_goxyy_77",
    padding0020 = "_padding-0-0-20_goxyy_81",
    padding0024 = "_padding-0-0-24_goxyy_85",
    padding01624 = "_padding-0-16-24_goxyy_89",
    padding0032 = "_padding-0-0-32_goxyy_93",
    padding8024 = "_padding-8-0-24_goxyy_97",
    padding8012 = "_padding-8-0-12_goxyy_101",
    padding808 = "_padding-8-0-8_goxyy_105",
    padding8020 = "_padding-8-0-20_goxyy_109",
    padding10016 = "_padding-10-0-16_goxyy_113",
    padding1200 = "_padding-12-0-0_goxyy_117",
    padding1208 = "_padding-12-0-8_goxyy_121",
    padding12024 = "_padding-12-0-24_goxyy_125",
    padding1600 = "_padding-16-0-0_goxyy_129",
    padding16012 = "_padding-16-0-12_goxyy_133",
    padding16032 = "_padding-16-0-32_goxyy_137",
    padding16048 = "_padding-16-0-48_goxyy_141",
    padding22164 = "_padding-22-16-4_goxyy_145",
    padding2400 = "_padding-24-0-0_goxyy_149",
    padding2408 = "_padding-24-0-8_goxyy_153",
    padding24032 = "_padding-24-0-32_goxyy_157",
    padding24030 = "_padding-24-0-30_goxyy_161",
    padding24012 = "_padding-24-0-12_goxyy_165",
    padding24016 = "_padding-24-0-16_goxyy_169",
    padding26024 = "_padding-26-0-24_goxyy_173",
    padding26032 = "_padding-26-0-32_goxyy_177",
    padding26048 = "_padding-26-0-48_goxyy_181",
    padding26040 = "_padding-26-0-40_goxyy_185",
    padding3200 = "_padding-32-0-0_goxyy_189",
    padding32012 = "_padding-32-0-12_goxyy_193",
    padding32016 = "_padding-32-0-16_goxyy_197",
    padding32024 = "_padding-32-0-24_goxyy_201",
    padding32168 = "_padding-32-16-8_goxyy_205",
    padding00320 = "_padding-0-0-32-0_goxyy_209",
    padding00032 = "_padding-0-0-0-32_goxyy_213",
    padding0800 = "_padding-0-8-0-0_goxyy_217",
    padding02400 = "_padding-0-24-0-0_goxyy_221",
    padding2416168 = "_padding-24-16-16-8_goxyy_225",
    padding40016 = "_padding-40-0-16_goxyy_229",
    directionRow = "_direction-row_goxyy_233",
    directionColumn = "_direction-column_goxyy_238",
    grow1 = "_grow-1_goxyy_243",
    grow2 = "_grow-2_goxyy_247",
    justifyStart = "_justify-start_goxyy_251",
    justifyEnd = "_justify-end_goxyy_255",
    justifyCenter = "_justify-center_goxyy_259",
    justifyBetween = "_justify-between_goxyy_263",
    justifyStretch = "_justify-stretch_goxyy_267",
    alignStart = "_align-start_goxyy_271",
    alignEnd = "_align-end_goxyy_275",
    alignCenter$1 = "_align-center_goxyy_279",
    alignBetween = "_align-between_goxyy_283",
    alignStretch = "_align-stretch_goxyy_287",
    alignSelfStart = "_align-self-start_goxyy_291",
    alignSelfEnd = "_align-self-end_goxyy_295",
    wrap = "_wrap_goxyy_299",
    shadow$1 = "_shadow_goxyy_303",
    spacingBottom4 = "_spacing-bottom-4_goxyy_307",
    spacingBottom8 = "_spacing-bottom-8_goxyy_311",
    spacingBottom16 = "_spacing-bottom-16_goxyy_315",
    spacingChildBottom2 = "_spacing-child-bottom-2_goxyy_319",
    spacingChildRight2 = "_spacing-child-right-2_goxyy_326",
    spacingChildBottom4 = "_spacing-child-bottom-4_goxyy_333",
    spacingChildRight4 = "_spacing-child-right-4_goxyy_340",
    spacingChildBottom8 = "_spacing-child-bottom-8_goxyy_347",
    spacingChildRight8 = "_spacing-child-right-8_goxyy_354",
    spacingChildBottom10 = "_spacing-child-bottom-10_goxyy_361",
    spacingChildRight10 = "_spacing-child-right-10_goxyy_368",
    spacingChildBottom12 = "_spacing-child-bottom-12_goxyy_375",
    spacingChildRight12 = "_spacing-child-right-12_goxyy_382",
    spacingChildBottom16 = "_spacing-child-bottom-16_goxyy_389",
    spacingChildRight16 = "_spacing-child-right-16_goxyy_396",
    spacingChildBottom18 = "_spacing-child-bottom-18_goxyy_403",
    spacingChildRight18 = "_spacing-child-right-18_goxyy_410",
    spacingChildBottom24 = "_spacing-child-bottom-24_goxyy_417",
    spacingChildRight24 = "_spacing-child-right-24_goxyy_424",
    spacingChildBottom32 = "_spacing-child-bottom-32_goxyy_431",
    spacingChildRight32 = "_spacing-child-right-32_goxyy_438",
    spacingChildBottom40 = "_spacing-child-bottom-40_goxyy_445",
    spacingChildRight40 = "_spacing-child-right-40_goxyy_452",
    borderRadius0 = "_border-radius-0_goxyy_459",
    borderRadius8 = "_border-radius-8_goxyy_463",
    borderRadius12 = "_border-radius-12_goxyy_467",
    borderRadius13 = "_border-radius-13_goxyy_471",
    borderRadius16 = "_border-radius-16_goxyy_475",
    borderRadius20 = "_border-radius-20_goxyy_479",
    borderColorSeparator = "_border-color-separator_goxyy_483",
    backgroundPrimary = "_background-primary_goxyy_487",
    backgroundSecondary = "_background-secondary_goxyy_491",
    backgroundTertiary = "_background-tertiary_goxyy_495",
    backgroundFourth = "_background-fourth_goxyy_499",
    backgroundFifth = "_background-fifth_goxyy_503",
    backgroundButtonTertiary = "_background-button-tertiary_goxyy_507",
    backgroundLightGreen = "_background-light-green_goxyy_511",
    fullWidth = "_fullWidth_goxyy_515",
    growChild = "_growChild_goxyy_521",
    rippleEffect$6 = "_rippleEffect_goxyy_525",
    willChange = "_willChange_goxyy_540",
    styles$1f = {
        "padding-0": "_padding-0_goxyy_1",
        padding0,
        "padding-4-8": "_padding-4-8_goxyy_5",
        padding48,
        "padding-6-body": "_padding-6-body_goxyy_9",
        padding6Body,
        "padding-6-0": "_padding-6-0_goxyy_13",
        padding60,
        "padding-12-0": "_padding-12-0_goxyy_17",
        padding120,
        "padding-10": "_padding-10_goxyy_21",
        padding10,
        "padding-16": "_padding-16_goxyy_25",
        padding16,
        "padding-10-16": "_padding-10-16_goxyy_29",
        padding1016,
        "padding-14-16": "_padding-14-16_goxyy_33",
        padding1416,
        "padding-16-0": "_padding-16-0_goxyy_37",
        padding160,
        "padding-20-0": "_padding-20-0_goxyy_41",
        padding200,
        "padding-24-0": "_padding-24-0_goxyy_45",
        padding240,
        "padding-32-8": "_padding-32-8_goxyy_49",
        padding328,
        "padding-0-0-4": "_padding-0-0-4_goxyy_53",
        padding004,
        "padding-0-0-8": "_padding-0-0-8_goxyy_57",
        padding008,
        "padding-0-0-10": "_padding-0-0-10_goxyy_61",
        padding0010,
        "padding-0-0-12": "_padding-0-0-12_goxyy_65",
        padding0012,
        "padding-0-0-14": "_padding-0-0-14_goxyy_69",
        padding0014,
        "padding-0-0-16": "_padding-0-0-16_goxyy_73",
        padding0016,
        "padding-0-0-18": "_padding-0-0-18_goxyy_77",
        padding0018,
        "padding-0-0-20": "_padding-0-0-20_goxyy_81",
        padding0020,
        "padding-0-0-24": "_padding-0-0-24_goxyy_85",
        padding0024,
        "padding-0-16-24": "_padding-0-16-24_goxyy_89",
        padding01624,
        "padding-0-0-32": "_padding-0-0-32_goxyy_93",
        padding0032,
        "padding-8-0-24": "_padding-8-0-24_goxyy_97",
        padding8024,
        "padding-8-0-12": "_padding-8-0-12_goxyy_101",
        padding8012,
        "padding-8-0-8": "_padding-8-0-8_goxyy_105",
        padding808,
        "padding-8-0-20": "_padding-8-0-20_goxyy_109",
        padding8020,
        "padding-10-0-16": "_padding-10-0-16_goxyy_113",
        padding10016,
        "padding-12-0-0": "_padding-12-0-0_goxyy_117",
        padding1200,
        "padding-12-0-8": "_padding-12-0-8_goxyy_121",
        padding1208,
        "padding-12-0-24": "_padding-12-0-24_goxyy_125",
        padding12024,
        "padding-16-0-0": "_padding-16-0-0_goxyy_129",
        padding1600,
        "padding-16-0-12": "_padding-16-0-12_goxyy_133",
        padding16012,
        "padding-16-0-32": "_padding-16-0-32_goxyy_137",
        padding16032,
        "padding-16-0-48": "_padding-16-0-48_goxyy_141",
        padding16048,
        "padding-22-16-4": "_padding-22-16-4_goxyy_145",
        padding22164,
        "padding-24-0-0": "_padding-24-0-0_goxyy_149",
        padding2400,
        "padding-24-0-8": "_padding-24-0-8_goxyy_153",
        padding2408,
        "padding-24-0-32": "_padding-24-0-32_goxyy_157",
        padding24032,
        "padding-24-0-30": "_padding-24-0-30_goxyy_161",
        padding24030,
        "padding-24-0-12": "_padding-24-0-12_goxyy_165",
        padding24012,
        "padding-24-0-16": "_padding-24-0-16_goxyy_169",
        padding24016,
        "padding-26-0-24": "_padding-26-0-24_goxyy_173",
        padding26024,
        "padding-26-0-32": "_padding-26-0-32_goxyy_177",
        padding26032,
        "padding-26-0-48": "_padding-26-0-48_goxyy_181",
        padding26048,
        "padding-26-0-40": "_padding-26-0-40_goxyy_185",
        padding26040,
        "padding-32-0-0": "_padding-32-0-0_goxyy_189",
        padding3200,
        "padding-32-0-12": "_padding-32-0-12_goxyy_193",
        padding32012,
        "padding-32-0-16": "_padding-32-0-16_goxyy_197",
        padding32016,
        "padding-32-0-24": "_padding-32-0-24_goxyy_201",
        padding32024,
        "padding-32-16-8": "_padding-32-16-8_goxyy_205",
        padding32168,
        "padding-0-0-32-0": "_padding-0-0-32-0_goxyy_209",
        padding00320,
        "padding-0-0-0-32": "_padding-0-0-0-32_goxyy_213",
        padding00032,
        "padding-0-8-0-0": "_padding-0-8-0-0_goxyy_217",
        padding0800,
        "padding-0-24-0-0": "_padding-0-24-0-0_goxyy_221",
        padding02400,
        "padding-24-16-16-8": "_padding-24-16-16-8_goxyy_225",
        padding2416168,
        "padding-40-0-16": "_padding-40-0-16_goxyy_229",
        padding40016,
        "direction-row": "_direction-row_goxyy_233",
        directionRow,
        "direction-column": "_direction-column_goxyy_238",
        directionColumn,
        "grow-1": "_grow-1_goxyy_243",
        grow1,
        "grow-2": "_grow-2_goxyy_247",
        grow2,
        "justify-start": "_justify-start_goxyy_251",
        justifyStart,
        "justify-end": "_justify-end_goxyy_255",
        justifyEnd,
        "justify-center": "_justify-center_goxyy_259",
        justifyCenter,
        "justify-between": "_justify-between_goxyy_263",
        justifyBetween,
        "justify-stretch": "_justify-stretch_goxyy_267",
        justifyStretch,
        "align-start": "_align-start_goxyy_271",
        alignStart,
        "align-end": "_align-end_goxyy_275",
        alignEnd,
        "align-center": "_align-center_goxyy_279",
        alignCenter: alignCenter$1,
        "align-between": "_align-between_goxyy_283",
        alignBetween,
        "align-stretch": "_align-stretch_goxyy_287",
        alignStretch,
        "align-self-start": "_align-self-start_goxyy_291",
        alignSelfStart,
        "align-self-end": "_align-self-end_goxyy_295",
        alignSelfEnd,
        wrap,
        shadow: shadow$1,
        "spacing-bottom-4": "_spacing-bottom-4_goxyy_307",
        spacingBottom4,
        "spacing-bottom-8": "_spacing-bottom-8_goxyy_311",
        spacingBottom8,
        "spacing-bottom-16": "_spacing-bottom-16_goxyy_315",
        spacingBottom16,
        "spacing-child-bottom-2": "_spacing-child-bottom-2_goxyy_319",
        spacingChildBottom2,
        "spacing-child-right-2": "_spacing-child-right-2_goxyy_326",
        spacingChildRight2,
        "spacing-child-bottom-4": "_spacing-child-bottom-4_goxyy_333",
        spacingChildBottom4,
        "spacing-child-right-4": "_spacing-child-right-4_goxyy_340",
        spacingChildRight4,
        "spacing-child-bottom-8": "_spacing-child-bottom-8_goxyy_347",
        spacingChildBottom8,
        "spacing-child-right-8": "_spacing-child-right-8_goxyy_354",
        spacingChildRight8,
        "spacing-child-bottom-10": "_spacing-child-bottom-10_goxyy_361",
        spacingChildBottom10,
        "spacing-child-right-10": "_spacing-child-right-10_goxyy_368",
        spacingChildRight10,
        "spacing-child-bottom-12": "_spacing-child-bottom-12_goxyy_375",
        spacingChildBottom12,
        "spacing-child-right-12": "_spacing-child-right-12_goxyy_382",
        spacingChildRight12,
        "spacing-child-bottom-16": "_spacing-child-bottom-16_goxyy_389",
        spacingChildBottom16,
        "spacing-child-right-16": "_spacing-child-right-16_goxyy_396",
        spacingChildRight16,
        "spacing-child-bottom-18": "_spacing-child-bottom-18_goxyy_403",
        spacingChildBottom18,
        "spacing-child-right-18": "_spacing-child-right-18_goxyy_410",
        spacingChildRight18,
        "spacing-child-bottom-24": "_spacing-child-bottom-24_goxyy_417",
        spacingChildBottom24,
        "spacing-child-right-24": "_spacing-child-right-24_goxyy_424",
        spacingChildRight24,
        "spacing-child-bottom-32": "_spacing-child-bottom-32_goxyy_431",
        spacingChildBottom32,
        "spacing-child-right-32": "_spacing-child-right-32_goxyy_438",
        spacingChildRight32,
        "spacing-child-bottom-40": "_spacing-child-bottom-40_goxyy_445",
        spacingChildBottom40,
        "spacing-child-right-40": "_spacing-child-right-40_goxyy_452",
        spacingChildRight40,
        "border-radius-0": "_border-radius-0_goxyy_459",
        borderRadius0,
        "border-radius-8": "_border-radius-8_goxyy_463",
        borderRadius8,
        "border-radius-12": "_border-radius-12_goxyy_467",
        borderRadius12,
        "border-radius-13": "_border-radius-13_goxyy_471",
        borderRadius13,
        "border-radius-16": "_border-radius-16_goxyy_475",
        borderRadius16,
        "border-radius-20": "_border-radius-20_goxyy_479",
        borderRadius20,
        "border-color-separator": "_border-color-separator_goxyy_483",
        borderColorSeparator,
        "background-primary": "_background-primary_goxyy_487",
        backgroundPrimary,
        "background-secondary": "_background-secondary_goxyy_491",
        backgroundSecondary,
        "background-tertiary": "_background-tertiary_goxyy_495",
        backgroundTertiary,
        "background-fourth": "_background-fourth_goxyy_499",
        backgroundFourth,
        "background-fifth": "_background-fifth_goxyy_503",
        backgroundFifth,
        "background-button-tertiary": "_background-button-tertiary_goxyy_507",
        backgroundButtonTertiary,
        "background-light-green": "_background-light-green_goxyy_511",
        backgroundLightGreen,
        fullWidth,
        growChild,
        rippleEffect: rippleEffect$6,
        willChange
    },
    transition$1 = {
        ease: "easeInOut",
        duration: .35
    },
    fadeInVariants = {
        initial: {
            opacity: 0,
            transition: transition$1
        },
        enter: {
            opacity: 1,
            transition: transition$1
        }
    },
    fadeOutVariants = {
        initial: {
            opacity: 1
        },
        leave: {
            opacity: 0,
            transition: transition$1
        }
    },
    Content = React.forwardRef(({
        as: e = "div",
        children: s,
        className: t,
        padding: n = "0",
        align: o,
        alignSelf: r,
        justify: a,
        grow: c = !1,
        row: i,
        column: l,
        spacingBottom: d,
        wrap: _,
        background: p,
        spacingChild: u,
        shadow: m,
        fullWidth: x,
        growChild: f,
        borderRadius: g,
        borderColor: C,
        fadeIn: h,
        fadeOut: y,
        ripple: k,
        onClick: b,
        ...$
    }, I) => {
        const S = i === !0 ? "row" : l === !0 ? "column" : "row",
            L = S === "row" ? "spacing-child-right" : "spacing-child-bottom";
        e = h || y ? motion.div : e;
        let T = h ? {
            initial: "initial",
            animate: "enter",
            variants: fadeInVariants
        } : {};
        return T = y ? {
            initial: "initial",
            animate: "exit",
            variants: fadeOutVariants
        } : T, jsx(e, {
            onClick: b,
            className: cn(t, n && styles$1f[`padding-${n}`], d && styles$1f[`spacing-bottom-${d}`], S && styles$1f[`direction-${S}`], c && styles$1f[`grow-${Number(c)}`], a && styles$1f[`justify-${a}`], o && styles$1f[`align-${o}`], r && styles$1f[`align-self-${r}`], _ && styles$1f.wrap, g && styles$1f[`border-radius-${g}`], C && styles$1f[`border-color-${C}`], p && styles$1f[`background-${p}`], u && styles$1f[`${L}-${u}`], m && styles$1f.shadow, x && styles$1f.fullWidth, f && styles$1f.growChild, T.animate && styles$1f.willChange, k && styles$1f.rippleEffect),
            ref: I,
            ...$,
            ...T,
            children: s
        })
    }),
    backdrop$9 = "_backdrop_1l3ii_1",
    opened$2 = "_opened_1l3ii_16",
    dialog = "_dialog_1l3ii_21",
    body$8 = "_body_1l3ii_51",
    title$n = "_title_1l3ii_72",
    content$5 = "_content_1l3ii_79",
    buttons$1 = "_buttons_1l3ii_86",
    button$6 = "_button_1l3ii_86",
    styles$1e = {
        backdrop: backdrop$9,
        opened: opened$2,
        dialog,
        body: body$8,
        title: title$n,
        content: content$5,
        buttons: buttons$1,
        button: button$6
    };

function Dialog({
    className: e,
    title: s,
    content: t,
    opened: n,
    onClose: o,
    buttons: r
}) {
    return jsxs(Fragment, {
        children: [jsx("div", {
            className: cn(styles$1e.backdrop, n && styles$1e.opened),
            onClick: o
        }), jsxs("div", {
            className: cn(styles$1e.dialog, e, n && styles$1e.opened),
            children: [jsxs("div", {
                className: styles$1e.body,
                children: [jsx("div", {
                    className: styles$1e.title,
                    children: s
                }), t ? jsx("div", {
                    className: styles$1e.content,
                    children: t
                }) : null]
            }), r ? jsx("div", {
                className: styles$1e.buttons,
                children: r
            }) : null]
        })]
    })
}

function DialogButton({
    className: e,
    children: s,
    onClick: t
}) {
    return jsx("button", {
        className: cn(styles$1e.button, e),
        onClick: t,
        children: s
    })
}
const root$r = "_root_1ogsm_1",
    styles$1d = {
        root: root$r
    },
    root$q = "_root_18ifw_1",
    size12 = "_size-12_18ifw_8",
    size16 = "_size-16_18ifw_14",
    size28 = "_size-28_18ifw_20",
    size30$1 = "_size-30_18ifw_26",
    size40$1 = "_size-40_18ifw_32",
    size48$2 = "_size-48_18ifw_38",
    colorFillPrimary = "_color-fill-primary_18ifw_44",
    colorFillSecondary = "_color-fill-secondary_18ifw_48",
    colorFillTertiary = "_color-fill-tertiary_18ifw_52",
    colorFillAccent = "_color-fill-accent_18ifw_56",
    colorFillTelegram = "_color-fill-telegram_18ifw_60",
    colorFillWhite = "_color-fill-white_18ifw_64",
    colorStrokePrimary = "_color-stroke-primary_18ifw_68",
    colorStrokeSecondary = "_color-stroke-secondary_18ifw_72",
    colorStrokeTertiary = "_color-stroke-tertiary_18ifw_76",
    colorStrokeAccent = "_color-stroke-accent_18ifw_80",
    colorStrokeTelegram = "_color-stroke-telegram_18ifw_84",
    colorStrokeWhite = "_color-stroke-white_18ifw_88",
    colorStrokeGreen = "_color-stroke-green_18ifw_92",
    styles$1c = {
        root: root$q,
        "size-12": "_size-12_18ifw_8",
        size12,
        "size-16": "_size-16_18ifw_14",
        size16,
        "size-28": "_size-28_18ifw_20",
        size28,
        "size-30": "_size-30_18ifw_26",
        size30: size30$1,
        "size-40": "_size-40_18ifw_32",
        size40: size40$1,
        "size-48": "_size-48_18ifw_38",
        size48: size48$2,
        "color-fill-primary": "_color-fill-primary_18ifw_44",
        colorFillPrimary,
        "color-fill-secondary": "_color-fill-secondary_18ifw_48",
        colorFillSecondary,
        "color-fill-tertiary": "_color-fill-tertiary_18ifw_52",
        colorFillTertiary,
        "color-fill-accent": "_color-fill-accent_18ifw_56",
        colorFillAccent,
        "color-fill-telegram": "_color-fill-telegram_18ifw_60",
        colorFillTelegram,
        "color-fill-white": "_color-fill-white_18ifw_64",
        colorFillWhite,
        "color-stroke-primary": "_color-stroke-primary_18ifw_68",
        colorStrokePrimary,
        "color-stroke-secondary": "_color-stroke-secondary_18ifw_72",
        colorStrokeSecondary,
        "color-stroke-tertiary": "_color-stroke-tertiary_18ifw_76",
        colorStrokeTertiary,
        "color-stroke-accent": "_color-stroke-accent_18ifw_80",
        colorStrokeAccent,
        "color-stroke-telegram": "_color-stroke-telegram_18ifw_84",
        colorStrokeTelegram,
        "color-stroke-white": "_color-stroke-white_18ifw_88",
        colorStrokeWhite,
        "color-stroke-green": "_color-stroke-green_18ifw_92",
        colorStrokeGreen
    },
    libraryStyles = {},
    SvgArrowRightUp = e => reactExports.createElement("svg", {
        width: 29,
        height: 28,
        viewBox: "0 0 29 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20.8638 6.63597C21.4161 6.63597 21.8638 7.08369 21.8638 7.63597L21.8638 18.2426C21.8638 18.7949 21.4161 19.2426 20.8638 19.2426C20.3116 19.2426 19.8638 18.7949 19.8638 18.2426L19.8638 10.0502L8.84303 21.071C8.45251 21.4615 7.81934 21.4615 7.42882 21.071C7.03829 20.6805 7.03829 20.0473 7.42882 19.6568L18.4496 8.63597L10.2572 8.63597C9.70496 8.63597 9.25725 8.18826 9.25725 7.63597C9.25725 7.08369 9.70496 6.63597 10.2572 6.63597L20.8638 6.63597Z",
        fill: "white"
    })),
    SvgCheckmark = e => reactExports.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        ...e
    }, reactExports.createElement("path", {
        d: "M7.5 15.5L11.8318 20.7944C11.9147 20.8958 12.0726 20.8866 12.1432 20.7762L20 8.5",
        stroke: "#007AFF",
        strokeOpacity: .3,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })),
    SvgCheckmarkRound = e => reactExports.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        ...e
    }, reactExports.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 25C20.0751 25 25 20.0751 25 14C25 7.92487 20.0751 3 14 3C7.92487 3 3 7.92487 3 14C3 20.0751 7.92487 25 14 25ZM19.1826 9.91716C19.413 9.54016 19.2942 9.04777 18.9172 8.81737C18.5402 8.58698 18.0478 8.70584 17.8174 9.08284L12.8851 17.1538L10.1021 13.9732C9.81112 13.6407 9.30571 13.607 8.9732 13.8979C8.64069 14.1889 8.60699 14.6943 8.89794 15.0268L12.3979 19.0268C12.5656 19.2184 12.8144 19.3188 13.068 19.2971C13.3217 19.2755 13.5499 19.1344 13.6826 18.9172L19.1826 9.91716Z",
        fill: "#30D158"
    })),
    SvgChevronRight = e => reactExports.createElement("svg", {
        width: 7,
        height: 12,
        viewBox: "0 0 7 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        d: "M1 1L6 6L1 11",
        stroke: "#C8C7CB",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })),
    SvgChevronRightLarge = e => reactExports.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        ...e
    }, reactExports.createElement("path", {
        d: "M17.0858 14L11.2929 19.7929C10.9024 20.1834 10.9024 20.8166 11.2929 21.2071C11.6834 21.5976 12.3166 21.5976 12.7071 21.2071L19.2071 14.7071C19.5976 14.3166 19.5976 13.6834 19.2071 13.2929L12.7071 6.79289C12.3166 6.40237 11.6834 6.40237 11.2929 6.79289C10.9024 7.18342 10.9024 7.81658 11.2929 8.20711L17.0858 14Z",
        fill: "white",
        fillOpacity: .3
    })),
    SvgCoins = e => reactExports.createElement("svg", {
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("g", {
        clipPath: "url(#clip0_560_3553)"
    }, reactExports.createElement("path", {
        d: "M14.1633 13.545C19.5533 12.6 23.5433 9.64833 23.065 6.95333C22.5866 4.25833 17.8266 2.84668 12.4366 3.79168C7.04658 4.73668 3.05665 7.68833 3.53498 10.3833C4.01332 13.0783 8.76163 14.49 14.1633 13.545Z",
        stroke: "black",
        strokeWidth: 1.6,
        strokeMiterlimit: 10,
        strokeLinecap: "round"
    }), reactExports.createElement("path", {
        d: "M4.92325 12.3783C4.74825 13.685 5.62326 15.0617 7.12826 16.205C9.1116 17.5817 11.3749 18.4917 13.7549 18.865C17.9083 19.5884 21.6766 18.9234 23.415 17.36C23.9166 16.94 24.255 16.3567 24.3833 15.715C24.6633 14.0467 23.2633 12.285 20.86 10.9667",
        stroke: "black",
        strokeWidth: 1.6,
        strokeMiterlimit: 10,
        strokeLinecap: "round"
    }), reactExports.createElement("path", {
        d: "M23.4966 17.3484C23.7999 17.6284 24.0449 17.9667 24.2199 18.3517C24.3949 18.7251 24.4882 19.1451 24.4999 19.5534C24.4999 22.2834 20.0782 24.5001 14.5482 24.5001C9.01819 24.5001 4.59656 22.2951 4.59656 19.5534C4.59656 18.2817 5.5532 17.1267 7.1282 16.2517",
        stroke: "black",
        strokeWidth: 1.6,
        strokeMiterlimit: 10,
        strokeLinecap: "round"
    })), reactExports.createElement("defs", null, reactExports.createElement("clipPath", {
        id: "clip0_560_3553"
    }, reactExports.createElement("rect", {
        width: 28,
        height: 28,
        fill: "white"
    })))),
    SvgEyes = e => reactExports.createElement("svg", {
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        d: "M8.38379 21.8281C11.2051 21.8281 13.3672 18.5234 13.3672 13.6543C13.3672 8.77637 11.2051 5.48926 8.38379 5.48926C5.5625 5.48926 3.40039 8.77637 3.40039 13.6543C3.40039 18.5234 5.5625 21.8281 8.38379 21.8281ZM19.6074 21.8281C22.4287 21.8281 24.5908 18.5234 24.5908 13.6543C24.5908 8.77637 22.4287 5.48926 19.6074 5.48926C16.7949 5.48926 14.624 8.77637 14.624 13.6543C14.624 18.5234 16.7949 21.8281 19.6074 21.8281ZM6.61719 16.6777C8.09375 16.6777 9.07812 15.6582 9.07812 14.1113C9.07812 12.582 8.09375 11.5449 6.61719 11.5449C6.01074 11.5449 5.49219 11.7207 5.08789 12.0283C5.43945 9.02246 6.79297 7.0625 8.38379 7.05371C10.2646 7.04492 11.7939 9.7168 11.7939 13.6543C11.7939 17.5654 10.2646 20.2549 8.38379 20.2637C6.97754 20.2725 5.76465 18.752 5.25488 16.3174C5.63281 16.5547 6.08984 16.6777 6.61719 16.6777ZM17.8408 16.6777C19.3086 16.6777 20.3018 15.6582 20.3018 14.1113C20.3018 12.582 19.3086 11.5449 17.8408 11.5449C17.2256 11.5449 16.707 11.7207 16.2939 12.0283C16.6543 9.02246 18.0078 7.0625 19.6074 7.0625C21.4795 7.0625 23.0088 9.73438 23.0088 13.6543C23.0088 17.5742 21.4795 20.2549 19.6074 20.2549C18.2012 20.2549 16.9795 18.7432 16.4697 16.3174C16.8477 16.5547 17.3135 16.6777 17.8408 16.6777ZM5.92285 13.8037C5.61523 13.751 5.41309 13.3818 5.4834 12.9951C5.5625 12.6084 5.87012 12.3359 6.16895 12.3887C6.48535 12.4502 6.66992 12.8193 6.59082 13.1973C6.52051 13.584 6.23047 13.8564 5.92285 13.8037ZM17.1465 13.8037C16.8301 13.7422 16.6367 13.3818 16.707 12.9951C16.7861 12.6084 17.0762 12.3359 17.3838 12.3887C17.709 12.4414 17.8936 12.8193 17.8145 13.1973C17.7354 13.584 17.4541 13.8564 17.1465 13.8037Z",
        fill: "#1C1C1E"
    })),
    SvgFragment = e => reactExports.createElement("svg", {
        width: 28,
        height: 29,
        viewBox: "0 0 28 29",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        d: "M23.0812 7.5H4.8355C4.55234 7.5 4.47321 7.90083 4.73381 8.0151L13.8566 12.0154C13.9216 12.0439 13.995 12.0439 14.06 12.0154L23.1829 8.0151C23.4434 7.90083 23.3643 7.5 23.0812 7.5Z",
        fill: "white"
    }), reactExports.createElement("path", {
        d: "M4.04387 9.73904L12.7009 23.3782C12.8424 23.6012 13.1784 23.4978 13.1784 23.2313L13.1784 13.5752C13.1784 13.4693 13.118 13.3734 13.0243 13.3302L4.36725 9.34712C4.1303 9.23809 3.90174 9.51511 4.04387 9.73904Z",
        fill: "white"
    }), reactExports.createElement("path", {
        d: "M15.2991 23.3782L23.9561 9.73904C24.0983 9.51511 23.8697 9.23809 23.6327 9.34712L14.9757 13.3302C14.882 13.3734 14.8216 13.4693 14.8216 13.5752L14.8216 23.2313C14.8216 23.4978 15.1576 23.6012 15.2991 23.3782Z",
        fill: "white"
    })),
    SvgGear = e => reactExports.createElement("svg", {
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("g", {
        id: "gearshape"
    }, reactExports.createElement("path", {
        id: "gearshape_2",
        d: "M13.1035 23.208H14.8877C15.6172 23.208 16.1885 22.751 16.3643 22.0479L16.7158 20.5098L16.9443 20.4219L18.2891 21.2568C18.9043 21.6436 19.6338 21.5381 20.1523 21.0195L21.3828 19.7891C21.9102 19.2617 21.998 18.541 21.6113 17.9346L20.7764 16.5898L20.8643 16.3789L22.4023 16.0186C23.0967 15.8428 23.5537 15.2715 23.5537 14.542V12.8105C23.5537 12.0811 23.1055 11.5098 22.4023 11.334L20.873 10.9648L20.7852 10.7363L21.6201 9.40039C22.0068 8.79395 21.9189 8.07324 21.3916 7.53711L20.1611 6.30664C19.6514 5.78809 18.9219 5.69141 18.3066 6.06934L16.9619 6.89551L16.7158 6.80762L16.3643 5.26074C16.1885 4.55762 15.6172 4.10938 14.8877 4.10938H13.1035C12.3652 4.10938 11.7939 4.55762 11.627 5.26074L11.2754 6.80762L11.0293 6.89551L9.68457 6.06934C9.06055 5.69141 8.33984 5.78809 7.83008 6.30664L6.59082 7.53711C6.07227 8.07324 5.97559 8.79395 6.3623 9.40039L7.19727 10.7363L7.10938 10.9648L5.58887 11.334C4.88574 11.5098 4.4375 12.0811 4.4375 12.8105V14.542C4.4375 15.2715 4.89453 15.8428 5.58887 16.0186L7.12695 16.3789L7.20605 16.5898L6.37109 17.9346C5.98438 18.541 6.08105 19.2617 6.59961 19.7891L7.83887 21.0195C8.34863 21.5381 9.07812 21.6436 9.69336 21.2568L11.0381 20.4219L11.2754 20.5098L11.627 22.0479C11.7939 22.751 12.3652 23.208 13.1035 23.208ZM13.332 21.5908C13.1826 21.5908 13.1035 21.5293 13.0859 21.3975L12.5586 19.2354C12.0049 19.1035 11.4688 18.875 11.0381 18.6025L9.13965 19.7715C9.02539 19.8418 8.91992 19.833 8.81445 19.7275L7.8916 18.8047C7.78613 18.708 7.78613 18.6025 7.85645 18.4883L9.02539 16.5898C8.7793 16.168 8.55078 15.6406 8.41895 15.0869L6.24805 14.5684C6.11621 14.5508 6.0459 14.4717 6.0459 14.3223V13.0215C6.0459 12.8633 6.10742 12.8018 6.24805 12.7666L8.41016 12.2568C8.54199 11.668 8.79688 11.123 9.0166 10.7275L7.84766 8.84668C7.77734 8.72363 7.77734 8.61816 7.87402 8.5127L8.80566 7.59863C8.91113 7.50195 9.00781 7.48438 9.13965 7.56348L11.0205 8.71484C11.416 8.46875 12.0049 8.22266 12.5674 8.08203L13.0859 5.91992C13.1035 5.78809 13.1826 5.71777 13.332 5.71777H14.6592C14.8086 5.71777 14.8789 5.7793 14.9053 5.91992L15.4326 8.09082C16.0039 8.23145 16.5225 8.46875 16.9619 8.71484L18.8428 7.56348C18.9746 7.49316 19.0713 7.50195 19.1768 7.60742L20.1084 8.52148C20.2139 8.61816 20.2139 8.72363 20.1348 8.84668L18.9746 10.7275C19.1855 11.123 19.4492 11.668 19.5811 12.2568L21.7432 12.7666C21.8838 12.8018 21.9365 12.8633 21.9365 13.0215V14.3223C21.9365 14.4717 21.875 14.5508 21.7432 14.5684L19.5723 15.0869C19.4404 15.6406 19.2031 16.1768 18.957 16.5898L20.126 18.4795C20.1963 18.6025 20.1963 18.6992 20.0908 18.7959L19.168 19.7275C19.0625 19.833 18.957 19.8418 18.8428 19.7715L16.9531 18.6025C16.5137 18.875 16.0127 19.0947 15.4326 19.2354L14.9053 21.3975C14.8789 21.5293 14.8086 21.5908 14.6592 21.5908H13.332ZM14 16.9941C15.8281 16.9941 17.3311 15.4912 17.3311 13.6543C17.3311 11.835 15.8281 10.332 14 10.332C12.1631 10.332 10.6514 11.835 10.6514 13.6543C10.6514 15.4912 12.1631 16.9941 14 16.9941ZM14 15.4736C12.998 15.4736 12.1807 14.6562 12.1807 13.6543C12.1807 12.6699 13.0068 11.8525 14 11.8525C14.9756 11.8525 15.793 12.6699 15.793 13.6543C15.793 14.6475 14.9756 15.4736 14 15.4736Z",
        fill: "#1C1C1E"
    }))),
    SvgGetgems = e => reactExports.createElement("svg", {
        width: 28,
        height: 29,
        viewBox: "0 0 28 29",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.00336 14.5C9.97238 14.4982 14 10.4694 14 5.5C9.02944 5.5 5 9.52944 5 14.5C5 19.4706 9.02944 23.5 14 23.5C18.9706 23.5 23 19.4706 23 14.5C18.0299 14.5 14.0007 18.5287 14 23.4987C13.9993 18.5298 9.97194 14.5018 5.00336 14.5ZM22.25 6.24998C22.25 10.3921 18.8921 13.75 14.75 13.75C14.75 9.60785 18.1079 6.24998 22.25 6.24998Z",
        fill: "white"
    })),
    SvgGift = e => reactExports.createElement("svg", {
        width: 30,
        height: 30,
        viewBox: "0 0 30 30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        d: "M4.28571 12.8571C4.28571 9.85686 4.28571 8.35672 4.8696 7.21076C5.38321 6.20275 6.20275 5.38321 7.21076 4.86961C8.35671 4.28571 9.85685 4.28571 12.8571 4.28571H14.1428V10.4263C13.9587 10.1158 13.7473 9.82632 13.5009 9.58008C12.8673 8.94691 11.972 8.38027 10.9921 8.17295C9.97812 7.95839 8.84098 8.13139 7.92749 9.04476C7.45793 9.51425 7.19483 10.0731 7.13743 10.6736C7.0816 11.2577 7.22562 11.8175 7.45731 12.3093C7.77936 12.993 8.3057 13.6223 8.90184 14.1429H4.28571V12.8571Z",
        fill: "#ccc"
    }), reactExports.createElement("path", {
        d: "M4.28571 15.8571V17.1429C4.28571 20.1431 4.28571 21.6433 4.8696 22.7892C5.38321 23.7972 6.20275 24.6168 7.21076 25.1304C8.35671 25.7143 9.85685 25.7143 12.8571 25.7143H14.1428V18.1644C12.6907 20.0557 10.9028 21.3553 8.75003 21.7859C8.25682 21.8845 7.77703 21.5647 7.67839 21.0715C7.57975 20.5783 7.89961 20.0985 8.39281 19.9998C10.3601 19.6064 12.0831 18.212 13.509 15.8674C13.4777 15.8641 13.4462 15.8607 13.4144 15.8571H4.28571Z",
        fill: "#ccc"
    }), reactExports.createElement("path", {
        d: "M16.5856 15.8571C16.5538 15.8607 16.5222 15.8641 16.491 15.8674C17.9168 18.212 19.6399 19.6064 21.6072 19.9998C22.1004 20.0985 22.4202 20.5783 22.3216 21.0715C22.2229 21.5647 21.7432 21.8845 21.25 21.7859C19.0972 21.3553 17.3092 20.0557 15.8571 18.1644V25.7143H17.1428C20.1431 25.7143 21.6433 25.7143 22.7892 25.1304C23.7972 24.6168 24.6168 23.7972 25.1304 22.7892C25.7143 21.6433 25.7143 20.1431 25.7143 17.1429V15.8571H16.5856Z",
        fill: "#ccc"
    }), reactExports.createElement("path", {
        d: "M25.7143 14.1429V12.8571C25.7143 9.85686 25.7143 8.35672 25.1304 7.21076C24.6168 6.20275 23.7972 5.38321 22.7892 4.86961C21.6433 4.28571 20.1431 4.28571 17.1428 4.28571H15.8571V10.4263C16.0413 10.1158 16.2527 9.82632 16.4991 9.58008C17.1327 8.94691 18.028 8.38027 19.0078 8.17295C20.0219 7.95839 21.159 8.13139 22.0725 9.04476C22.542 9.51425 22.8051 10.0731 22.8626 10.6736C22.9184 11.2577 22.7744 11.8175 22.5427 12.3093C22.2206 12.993 21.6943 13.6223 21.0981 14.1429H25.7143Z",
        fill: "#ccc"
    }), reactExports.createElement("path", {
        d: "M19.3849 9.95492C18.8172 10.075 18.2244 10.4309 17.7866 10.8685C17.4152 11.2396 17.1076 11.9098 16.7886 12.819C16.7153 13.0279 16.6406 13.2528 16.5636 13.4847C16.5022 13.6694 16.4392 13.8591 16.3745 14.048C16.476 14.0367 16.5807 14.0241 16.6877 14.0098C17.6736 13.8784 18.6981 13.6295 19.3162 13.2174C20.0296 12.7418 20.6219 12.1127 20.8949 11.5331C21.0278 11.251 21.0661 11.022 21.0494 10.847C21.0342 10.6884 20.9699 10.518 20.7846 10.3328C20.3884 9.93665 19.9184 9.84203 19.3849 9.95492Z",
        fill: "#ccc"
    }), reactExports.createElement("path", {
        d: "M12.2134 10.8685C11.7755 10.4309 11.1828 10.075 10.6151 9.95492C10.0815 9.84203 9.61154 9.93665 9.21535 10.3328C9.03007 10.518 8.96575 10.6884 8.95059 10.847C8.93386 11.022 8.97214 11.251 9.10506 11.5331C9.37807 12.1127 9.97037 12.7418 10.6837 13.2174C11.3019 13.6295 12.3264 13.8784 13.3123 14.0098C13.4193 14.0241 13.524 14.0367 13.6255 14.048C13.5608 13.8591 13.4979 13.6699 13.4366 13.4852C13.3596 13.2533 13.2847 13.0279 13.2114 12.819C12.8924 11.9098 12.5848 11.2396 12.2134 10.8685Z",
        fill: "#ccc"
    })),
    SvgGiftOutline = e => reactExports.createElement("svg", {
        width: 29,
        height: 28,
        viewBox: "0 0 29 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        d: "M5.57497 13.9999H23.425V20.9999C23.425 22.9366 21.8617 24.4999 19.925 24.4999H9.07497C7.13831 24.4999 5.57497 22.9366 5.57497 20.9999V13.9999Z",
        stroke: "white",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), reactExports.createElement("path", {
        d: "M23.8333 9.79988H5.16667C4.52233 9.79988 4 10.3222 4 10.9665V12.8332C4 13.4776 4.52233 13.9999 5.16667 13.9999H23.8333C24.4777 13.9999 25 13.4776 25 12.8332V10.9665C25 10.3222 24.4777 9.79988 23.8333 9.79988Z",
        stroke: "white",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), reactExports.createElement("path", {
        d: "M16.3434 13.9999H12.6683V24.4999H16.3434V13.9999Z",
        stroke: "white",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), reactExports.createElement("path", {
        d: "M11.8867 9.64823C14.4067 10.1382 15.0366 9.53156 14.5583 6.97656C13.9983 3.98989 11.0467 2.4849 9.24999 4.2699C7.42999 6.0549 8.92333 9.07657 11.8867 9.64823Z",
        stroke: "white",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), reactExports.createElement("path", {
        d: "M17.5217 9.64823C15.0017 10.1382 14.3716 9.53156 14.85 6.97656C15.41 3.98989 18.3616 2.4849 20.1583 4.2699C21.9783 6.0549 20.485 9.07657 17.5217 9.64823Z",
        stroke: "white",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })),
    SvgGroup = e => reactExports.createElement("svg", {
        width: 28,
        height: 29,
        viewBox: "0 0 28 29",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        d: "M5.29004 19.4189H6.9248V20.7461C6.9248 22.627 7.91797 23.6113 9.8252 23.6113H22.7012C24.5996 23.6113 25.6016 22.627 25.6016 20.7461V11.7725C25.6016 9.8916 24.5996 8.90723 22.7012 8.90723H21.0664V7.58887C21.0664 5.70801 20.0732 4.72363 18.1748 4.72363H5.29004C3.38281 4.72363 2.39844 5.70801 2.39844 7.58887V16.5537C2.39844 18.4434 3.38281 19.4189 5.29004 19.4189ZM5.4043 17.6699C4.5957 17.6699 4.14746 17.248 4.14746 16.3955V7.74707C4.14746 6.89453 4.5957 6.48145 5.4043 6.48145H18.0605C18.8604 6.48145 19.3174 6.89453 19.3174 7.74707V8.90723H9.8252C7.91797 8.90723 6.9248 9.8916 6.9248 11.7725V17.6699H5.4043ZM9.93945 21.8535C9.12207 21.8535 8.68262 21.4316 8.68262 20.5879V11.9307C8.68262 11.0869 9.12207 10.665 9.93945 10.665H22.5869C23.3955 10.665 23.8438 11.0869 23.8438 11.9307V20.5879C23.8438 21.4316 23.3955 21.8535 22.5869 21.8535H9.93945Z",
        fill: "#1C1C1E"
    })),
    SvgLaurel = e => reactExports.createElement("svg", {
        width: 14,
        height: 28,
        viewBox: "0 0 14 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.8779 0.908541C11.8779 0.617669 11.7042 0.443147 11.4146 0.478051C10.5574 0.54786 9.57285 1.00162 8.94736 1.61827C8.33345 2.24655 7.90487 3.23551 7.87012 4.09649C7.85854 4.35246 7.99754 4.51534 8.25237 4.51534C9.16744 4.53861 10.1636 4.09649 10.7775 3.42167C11.3798 2.79339 11.82 1.79279 11.8779 0.908541ZM5.48398 1.58336C5.27548 1.37393 5.03224 1.38557 4.85849 1.60663C4.31408 2.30472 3.96658 3.36349 4.01292 4.24774C4.0245 5.14363 4.49941 6.13259 5.20599 6.71433C5.4029 6.88885 5.63456 6.85395 5.78515 6.65616C6.32956 5.9697 6.66547 4.9342 6.58439 4.06158C6.52647 3.18897 6.08631 2.20001 5.48398 1.58336ZM11.1134 5.89989C10.3605 5.48104 9.29486 5.30651 8.4377 5.4694C7.58054 5.63229 6.66547 6.22567 6.14423 6.94703C6.00523 7.14482 6.05156 7.36588 6.24847 7.5055C6.9898 8.02907 8.06704 8.2385 8.94736 7.98253C9.80452 7.79637 10.7196 7.20299 11.2408 6.5049C11.4146 6.27221 11.3682 6.02787 11.1134 5.89989ZM2.7156 5.55085C2.49552 5.38796 2.24069 5.44613 2.10169 5.69046C1.64994 6.44673 1.47619 7.52877 1.63836 8.38975C1.80052 9.29727 2.40285 10.2164 3.19051 10.6818C3.41059 10.8214 3.6075 10.7633 3.73492 10.5422C4.17508 9.77429 4.34883 8.69225 4.1635 7.85455C3.96658 6.98193 3.38742 6.07441 2.7156 5.55085ZM8.88944 9.02966C8.07862 8.72716 7.00138 8.71552 6.19056 9.00639C5.36815 9.28563 4.53416 9.98372 4.11716 10.7516C4.00133 10.9727 4.08241 11.1937 4.27933 11.2985C5.09015 11.7289 6.19056 11.7871 7.04772 11.4381C7.87012 11.1123 8.70411 10.3909 9.10953 9.59977C9.24852 9.35544 9.15586 9.13438 8.88944 9.02966ZM1.01287 11.089C0.734869 10.996 0.514788 11.1239 0.468455 11.4148C0.317874 12.2758 0.514788 13.3462 0.966533 14.1257C1.40669 14.9169 2.31018 15.5801 3.20209 15.743C3.44534 15.7895 3.63067 15.6615 3.677 15.4172C3.816 14.5679 3.6075 13.4974 3.14418 12.7412C2.7156 12.0315 1.85844 11.3799 1.01287 11.089ZM8.00912 12.2292C7.1288 12.206 6.09789 12.5783 5.46082 13.1251C4.75424 13.6952 4.22141 14.6377 4.11716 15.4986C4.08241 15.743 4.22141 15.9175 4.45308 15.9524C5.35657 16.0571 6.41064 15.7313 7.09405 15.1031C7.76587 14.5213 8.28712 13.5673 8.41453 12.6946C8.4377 12.4038 8.27553 12.2292 8.00912 12.2292ZM8.35662 16.1967C8.33345 15.9175 8.12495 15.7779 7.85854 15.8477C7.01297 16.0455 6.12106 16.6389 5.6114 17.3486C5.10174 18.0699 4.83532 19.1287 4.93957 19.9897C4.95116 20.2457 5.14807 20.3736 5.39132 20.3504C6.30639 20.2108 7.23305 19.629 7.70796 18.8495C8.21762 18.1514 8.48403 17.081 8.35662 16.1967ZM0.815951 16.5341C0.537954 16.5225 0.364206 16.697 0.37579 16.9763C0.456872 17.8605 0.908617 18.8611 1.53411 19.4661C2.1596 20.1293 3.17893 20.5249 4.094 20.4667C4.34883 20.4551 4.49941 20.2806 4.46466 20.0246C4.40674 19.1287 3.93183 18.163 3.29476 17.5929C2.68085 16.9995 1.68469 16.569 0.815951 16.5341ZM9.9551 18.3492C9.8161 18.0932 9.56127 18.0467 9.34119 18.2328C8.68095 18.7448 8.10179 19.6639 7.91646 20.5133C7.71954 21.3742 7.89329 22.4446 8.34503 23.2009C8.46087 23.422 8.69253 23.4801 8.90103 23.3405C9.66552 22.8635 10.291 21.956 10.43 21.0485C10.5922 20.1758 10.3953 19.0938 9.9551 18.3492ZM12.3297 20.6878C12.1212 20.4784 11.8663 20.5016 11.6926 20.7343C11.1945 21.4324 10.8702 22.4563 10.9165 23.3173C10.9744 24.2131 11.403 25.2137 12.0169 25.7955C12.1791 25.97 12.4107 25.97 12.5729 25.7955C13.21 25.1556 13.5806 24.0968 13.4764 23.166C13.4185 22.2934 12.9667 21.3044 12.3297 20.6878ZM7.9512 23.4452C7.55738 22.6541 6.72339 21.9443 5.87781 21.6651C5.07857 21.3859 4.01292 21.3975 3.17893 21.7116C2.91251 21.8164 2.83143 22.0374 2.95884 22.2934C3.38742 23.0729 4.22141 23.8059 5.04382 24.1084C5.86623 24.4575 6.95505 24.3993 7.78904 23.9688C7.99754 23.8525 8.06704 23.6547 7.9512 23.4452ZM11.6926 26.1213C11.0787 25.4697 10.0941 25.0043 9.22536 24.9461C8.39137 24.8763 7.36046 25.1672 6.6423 25.6675C6.42222 25.842 6.38747 26.098 6.58439 26.3074C7.18671 26.9473 8.17129 27.4244 9.04003 27.5058C9.94352 27.6105 10.986 27.2964 11.6694 26.703C11.8547 26.5285 11.8547 26.2958 11.6926 26.1213Z",
        fill: "white",
        fillOpacity: .5
    })),
    SvgLaurelBig = e => reactExports.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 40,
        viewBox: "0 0 20 40",
        fill: "none",
        ...e
    }, reactExports.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.6824 1.29857C17.6824 0.883043 17.4342 0.633725 17.0205 0.683589C15.796 0.783316 14.3894 1.43154 13.4959 2.31247C12.6189 3.21001 12.0066 4.62282 11.957 5.85279C11.9404 6.21845 12.139 6.45115 12.503 6.45115C13.8103 6.48439 15.2334 5.85279 16.1104 4.88875C16.9708 3.99121 17.5996 2.56179 17.6824 1.29857ZM8.5482 2.2626C8.25035 1.96342 7.90285 1.98004 7.65464 2.29585C6.87691 3.29312 6.38048 4.80565 6.44667 6.06886C6.46322 7.34869 7.14167 8.7615 8.15106 9.59256C8.43237 9.84188 8.76332 9.79201 8.97843 9.50945C9.75616 8.5288 10.236 7.04951 10.1202 5.80292C10.0375 4.55633 9.40867 3.14353 8.5482 2.2626ZM16.5903 8.42907C15.5147 7.83071 13.9923 7.58139 12.7678 7.81409C11.5433 8.04678 10.236 8.89447 9.4914 9.92498C9.29283 10.2075 9.35902 10.5233 9.64033 10.7228C10.6994 11.4708 12.2383 11.7699 13.4959 11.4043C14.7204 11.1383 16.0276 10.2906 16.7723 9.29338C17.0205 8.96095 16.9543 8.61191 16.5903 8.42907ZM4.59336 7.93044C4.27896 7.69774 3.91492 7.78085 3.71635 8.12989C3.071 9.21027 2.82279 10.756 3.05445 11.986C3.28611 13.2825 4.14658 14.5955 5.27181 15.2604C5.58621 15.4598 5.86751 15.3767 6.04954 15.0609C6.67834 13.9639 6.92655 12.4182 6.66179 11.2214C6.38049 9.97484 5.55311 8.67839 4.59336 7.93044ZM13.4131 12.9002C12.2548 12.468 10.7159 12.4514 9.55759 12.8669C8.38272 13.2658 7.19131 14.2631 6.5956 15.3601C6.43013 15.6759 6.54596 15.9917 6.82727 16.1413C7.98559 16.7563 9.55759 16.8394 10.7821 16.3408C11.957 15.8754 13.1484 14.8449 13.7275 13.7146C13.9261 13.3656 13.7937 13.0498 13.4131 12.9002ZM2.16089 15.8421C1.76375 15.7092 1.44935 15.892 1.38316 16.3075C1.16804 17.5375 1.44935 19.0666 2.0947 20.1803C2.7235 21.3105 4.0142 22.2579 5.28835 22.4906C5.63585 22.5571 5.90061 22.3743 5.9668 22.0252C6.16537 20.8119 5.86751 19.2827 5.20562 18.2023C4.59336 17.1884 3.36885 16.2577 2.16089 15.8421ZM12.1555 17.471C10.8979 17.4378 9.42521 17.9696 8.5151 18.7508C7.50571 19.5653 6.74453 20.9116 6.5956 22.1416C6.54596 22.4906 6.74453 22.7399 7.07548 22.7898C8.36618 22.9394 9.87199 22.474 10.8483 21.5765C11.808 20.7454 12.5527 19.3824 12.7347 18.1359C12.7678 17.7203 12.5361 17.471 12.1555 17.471ZM12.652 23.1388C12.6189 22.7399 12.321 22.5405 11.9404 22.6402C10.7325 22.9228 9.45831 23.7704 8.73022 24.7843C8.00213 25.8149 7.62154 27.3274 7.77047 28.5574C7.78702 28.923 8.06832 29.1059 8.41582 29.0726C9.72307 28.8732 11.0469 28.0421 11.7253 26.9285C12.4534 25.9312 12.834 24.4021 12.652 23.1388ZM1.87958 23.6209C1.48244 23.6042 1.23423 23.8536 1.25078 24.2525C1.36661 25.5157 2.01196 26.9451 2.90552 27.8094C3.79908 28.7568 5.25526 29.3219 6.56251 29.2388C6.92655 29.2222 7.14167 28.9729 7.09202 28.6072C7.00929 27.3274 6.33084 25.9478 5.42073 25.1334C4.54372 24.2857 3.12064 23.6707 1.87958 23.6209ZM14.9355 26.2138C14.7369 25.8481 14.3729 25.7816 14.0585 26.0476C13.1153 26.7789 12.2879 28.092 12.0232 29.3053C11.7419 30.5353 11.9901 32.0644 12.6354 33.1448C12.8009 33.4606 13.1318 33.5437 13.4297 33.3443C14.5218 32.6628 15.4154 31.3663 15.614 30.0699C15.8456 28.8233 15.5643 27.2775 14.9355 26.2138ZM18.3277 29.5546C18.0299 29.2554 17.6658 29.2887 17.4176 29.6211C16.7061 30.6184 16.2428 32.0811 16.3089 33.311C16.3917 34.5909 17.0039 36.0203 17.881 36.8513C18.1126 37.1007 18.4436 37.1007 18.6752 36.8513C19.5853 35.9372 20.1149 34.4246 19.9659 33.0949C19.8832 31.8484 19.2378 30.4356 18.3277 29.5546ZM12.0728 33.4939C11.5102 32.3636 10.3188 31.3497 9.11081 30.9508C7.96904 30.5519 6.44667 30.5685 5.25526 31.0173C4.87467 31.1669 4.75884 31.4827 4.94086 31.8484C5.55311 32.962 6.74453 34.0091 7.9194 34.4413C9.09426 34.9399 10.6497 34.8568 11.8411 34.2418C12.139 34.0756 12.2383 33.793 12.0728 33.4939ZM17.4176 37.3167C16.5406 36.3859 15.1341 35.7211 13.893 35.638C12.7016 35.5383 11.2289 35.9538 10.2029 36.6685C9.88854 36.9178 9.8389 37.2835 10.1202 37.5827C10.9807 38.4968 12.3872 39.1783 13.6283 39.2947C14.919 39.4442 16.4082 38.9955 17.3845 38.1478C17.6493 37.8985 17.6493 37.5661 17.4176 37.3167Z",
        fill: "white",
        fillOpacity: .4
    })),
    SvgLink = e => reactExports.createElement("svg", {
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        d: "M13.5869 17.3018L14.9316 15.9395C13.8945 15.8516 13.1475 15.5088 12.6113 14.9727C11.126 13.4873 11.126 11.3867 12.6025 9.91895L15.5205 6.99219C17.0059 5.51563 19.0977 5.50684 20.583 6.99219C22.0771 8.48633 22.0596 10.5781 20.5918 12.0547L19.0977 13.54C19.3789 14.1904 19.4756 14.9814 19.3174 15.667L21.8311 13.1621C23.9932 11.0088 24.002 7.93262 21.8223 5.75293C19.6338 3.56445 16.5752 3.58203 14.4131 5.74414L11.3545 8.80274C9.19238 10.9648 9.18359 14.0322 11.3633 16.2119C11.873 16.7305 12.5762 17.1172 13.5869 17.3018ZM14.4043 9.875L13.0596 11.2373C14.0967 11.334 14.8438 11.668 15.3799 12.2041C16.874 13.6895 16.8652 15.79 15.3887 17.2666L12.4707 20.1846C10.9854 21.6699 8.89355 21.6699 7.41699 20.1846C5.92285 18.6904 5.93164 16.6074 7.4082 15.1309L8.89355 13.6367C8.6123 12.9951 8.52441 12.2041 8.67383 11.5098L6.16016 14.0234C3.99805 16.1768 3.98926 19.2441 6.16895 21.4238C8.35742 23.6123 11.416 23.5947 13.5781 21.4414L16.6367 18.374C18.7988 16.2119 18.8076 13.1445 16.6279 10.9648C16.1182 10.4551 15.4238 10.0684 14.4043 9.875Z",
        fill: "#1C1C1E"
    })),
    SvgLinkOuter = e => reactExports.createElement("svg", {
        width: 24,
        height: 25,
        viewBox: "0 0 24 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        d: "M20 16.5V17.5C20 19.1569 18.6569 20.5 17 20.5H7C5.34315 20.5 4 19.1569 4 17.5V7.5C4 5.84315 5.34315 4.5 7 4.5H8",
        stroke: "#EBEBF5",
        strokeOpacity: .6,
        strokeWidth: 2,
        strokeLinecap: "round"
    }), reactExports.createElement("path", {
        d: "M13 4.5H16H19.999C19.9996 4.5 20 4.50045 20 4.501V8.5V11.5",
        stroke: "#EBEBF5",
        strokeOpacity: .6,
        strokeWidth: 2,
        strokeLinecap: "round"
    }), reactExports.createElement("path", {
        d: "M11.2929 11.7929C10.9024 12.1834 10.9024 12.8166 11.2929 13.2071C11.6834 13.5976 12.3166 13.5976 12.7071 13.2071L11.2929 11.7929ZM19.2929 3.79289L11.2929 11.7929L12.7071 13.2071L20.7071 5.20711L19.2929 3.79289Z",
        fill: "#EBEBF5",
        fillOpacity: .6
    })),
    SvgLock = e => reactExports.createElement("svg", {
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("g", {
        id: "lock.circle.fill"
    }, reactExports.createElement("path", {
        id: "lock.circle.fill_2",
        d: "M13.9942 26C20.5713 26 26 20.5713 26 13.9942C26 7.42871 20.5597 2 13.9826 2C7.41711 2 2 7.42871 2 13.9942C2 20.5713 7.42871 26 13.9942 26ZM9.66747 18.5413V13.855C9.66747 13.0314 10.0039 12.6022 10.6767 12.5326V11.187C10.6767 8.95988 12.0222 7.47511 13.9826 7.47511C15.9662 7.47511 17.3001 8.95988 17.3001 11.187V12.5326C17.9729 12.6022 18.3093 13.0314 18.3093 13.855V18.5413C18.3093 19.4693 17.8917 19.8869 17.0449 19.8869H10.9319C10.0851 19.8869 9.66747 19.4693 9.66747 18.5413ZM12.115 12.5094H15.8618V11.0594C15.8618 9.73707 15.1078 8.86709 13.9826 8.86709C12.8574 8.86709 12.115 9.74867 12.115 11.0594V12.5094Z",
        fill: "#1C1C1E"
    }))),
    SvgLockOutline = e => reactExports.createElement("svg", {
        width: 29,
        height: 29,
        viewBox: "0 0 29 29",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        d: "M10.2518 23.5H18.7482C19.9219 23.5 20.5 22.9003 20.5 21.5737V14.768C20.5 13.5687 20.027 12.9599 19.046 12.8599V10.6156C19.046 7.1628 16.8299 5.5 14.5 5.5C12.1701 5.5 9.95401 7.1628 9.95401 10.6156V12.8872C9.04307 13.0326 8.5 13.6323 8.5 14.768V21.5737C8.5 22.9003 9.0781 23.5 10.2518 23.5ZM11.6358 10.452C11.6358 8.33493 12.9321 7.17188 14.5 7.17188C16.0591 7.17188 17.3642 8.33493 17.3642 10.452V12.8417L11.6358 12.8508V10.452Z",
        fill: "white"
    })),
    SvgPencil = e => reactExports.createElement("svg", {
        width: 25,
        height: 24,
        viewBox: "0 0 25 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("g", {
        opacity: .8
    }, reactExports.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.6484 6.18643C16.3871 5.44632 17.5756 5.44632 18.3143 6.18643C19.055 6.92848 19.0519 8.11483 18.3165 8.84578L18.315 8.84724L17.6585 9.50334C17.6279 9.45283 17.5907 9.40517 17.5471 9.36154L15.01 6.82442L15.6477 6.18709L15.6484 6.18643ZM13.949 7.88473L6.80396 15.0251C6.63627 15.1979 6.54117 15.398 6.51428 15.5985L6.51348 15.6044L6.51346 15.6044L6.11822 18.3827L8.90272 17.9894L8.90909 17.9885L8.90909 17.9885C9.10668 17.9624 9.30057 17.8648 9.45319 17.7037L9.46759 17.6889L16.6278 10.5333C16.5775 10.5028 16.5299 10.4657 16.4864 10.4222L13.949 7.88473ZM19.376 5.12675C18.0513 3.79959 15.9116 3.79955 14.5869 5.12661L14.5867 5.12675L5.74004 13.9677L5.74 13.9677L5.73362 13.9742C5.35466 14.3622 5.1014 14.8545 5.02803 15.3958L4.5708 18.6099L4.57078 18.6099L4.57016 18.6145C4.52206 18.9682 4.61892 19.3435 4.89708 19.6166C5.17291 19.8874 5.54514 19.9774 5.89015 19.9298L5.89249 19.9295L9.10965 19.4751C9.65578 19.4019 10.1564 19.139 10.5346 18.7432L19.3738 9.90971L19.3747 9.90889C20.7018 8.589 20.6985 6.45173 19.376 5.12675Z",
        fill: "black"
    }))),
    SvgPicture = e => reactExports.createElement("svg", {
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("g", {
        clipPath: "url(#clip0_560_2446)"
    }, reactExports.createElement("path", {
        d: "M22.1042 24H5.22192C4.05555 24 3.11084 23.0553 3.11084 21.8889V7.11133C3.11084 5.94495 4.05555 5.00024 5.22192 5.00024H22.1042C23.2706 5.00024 24.2153 5.94495 24.2153 7.11133V21.8889C24.2153 23.0553 23.2696 24 22.1042 24Z",
        stroke: "black",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), reactExports.createElement("path", {
        d: "M10.9337 9.84061C11.7581 10.665 11.7581 12.0017 10.9337 12.8261C10.1092 13.6506 8.77259 13.6506 7.94816 12.8261C7.12373 12.0017 7.12373 10.665 7.94816 9.84061C8.77258 9.01618 10.1092 9.01618 10.9337 9.84061",
        stroke: "black",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), reactExports.createElement("path", {
        d: "M24.2187 18.7225L19.7654 15.16C19.3105 14.7959 18.6455 14.8698 18.2813 15.3247L14.76 19.7263C14.3959 20.1812 13.7319 20.2551 13.2759 19.891L11.3042 18.3129C10.8556 17.954 10.2022 18.0195 9.83382 18.4618L5.21899 24.0002",
        stroke: "black",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })), reactExports.createElement("defs", null, reactExports.createElement("clipPath", {
        id: "clip0_560_2446"
    }, reactExports.createElement("rect", {
        width: 28,
        height: 28,
        fill: "white"
    })))),
    SvgPlace = e => reactExports.createElement("svg", {
        width: 31,
        height: 30,
        viewBox: "0 0 31 30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("g", {
        clipPath: "url(#clip0_394_5544)"
    }, reactExports.createElement("path", {
        d: "M15.5 13.0001C18.0474 13.0001 20.1125 10.8679 20.1125 8.2376C20.1125 5.60734 18.0474 3.4751 15.5 3.4751C12.9526 3.4751 10.8875 5.60734 10.8875 8.2376C10.8875 10.8679 12.9526 13.0001 15.5 13.0001Z",
        stroke: "#007AFF",
        strokeWidth: 1.6,
        strokeMiterlimit: 10,
        strokeLinecap: "round"
    }), reactExports.createElement("path", {
        d: "M15.5 20.95V13",
        stroke: "#007AFF",
        strokeWidth: 1.6,
        strokeMiterlimit: 10,
        strokeLinecap: "round"
    }), reactExports.createElement("path", {
        d: "M21.75 16.5127C24.7625 17.4377 26.75 19.0127 26.75 20.8002C26.75 23.6502 21.7125 25.9627 15.5 25.9627C9.2875 25.9627 4.25 23.6502 4.25 20.8002C4.25 19.0127 6.2375 17.4252 9.25 16.5127",
        stroke: "#007AFF",
        strokeWidth: 1.6,
        strokeMiterlimit: 10,
        strokeLinecap: "round"
    })), reactExports.createElement("defs", null, reactExports.createElement("clipPath", {
        id: "clip0_394_5544"
    }, reactExports.createElement("rect", {
        width: 30,
        height: 30,
        fill: "white",
        transform: "translate(0.5)"
    })))),
    SvgPlus = e => reactExports.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        ...e
    }, reactExports.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 24C13.4477 24 13 23.5523 13 23L13 15H5C4.44772 15 4 14.5523 4 14C4 13.4477 4.44772 13 5 13H13V5C13 4.44772 13.4477 4 14 4C14.5523 4 15 4.44772 15 5V13L23 13C23.5523 13 24 13.4477 24 14C24 14.5523 23.5523 15 23 15L15 15L15 23C15 23.5523 14.5523 24 14 24Z",
        fill: "#007AFF"
    })),
    SvgPremium = e => reactExports.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "none",
        ...e
    }, reactExports.createElement("g", {
        clipPath: "url(#clip0_4980_40501)"
    }, reactExports.createElement("g", {
        filter: "url(#filter0_i_4980_40501)"
    }, reactExports.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.3431 6.98609L19.3431 6.98611L16.8928 12.8773C16.5587 13.6807 16.3916 14.0824 16.1223 14.3875C15.8842 14.6573 15.5896 14.8713 15.2594 15.0144C14.8861 15.1762 14.4524 15.211 13.5851 15.2805H13.5851L7.22501 15.7904C3.53762 16.086 1.69393 16.2338 0.896189 17.0325C0.20396 17.7256 -0.115188 18.7078 0.0374783 19.6754C0.213415 20.7904 1.61811 21.9937 4.42751 24.4002C5.04698 24.9309 5.35672 25.1962 5.67594 25.4215C7.21536 26.508 9.07761 27.0405 10.9587 26.9322C11.3488 26.9098 11.752 26.8483 12.5583 26.7255L24.8388 24.8539C25.52 24.7501 25.8276 25.6758 25.2198 26.0003L15.064 31.4225C13.7881 32.1036 13.1502 32.4442 12.6018 32.8665C11.3897 33.7997 10.458 35.0487 9.90874 36.4765C9.66026 37.1225 9.51557 37.831 9.22617 39.2481C8.52406 42.6861 8.173 44.4051 8.6946 45.3801C9.14763 46.2269 9.97153 46.8123 10.9203 46.9615C12.0126 47.1333 13.5204 46.2362 16.536 44.4421L21.8643 41.272C22.5937 40.838 22.9584 40.621 23.3473 40.5362C23.6914 40.4612 24.0476 40.4612 24.3917 40.5362C24.7807 40.621 25.1454 40.838 25.8748 41.272L31.2031 44.4421C34.2187 46.2362 35.7265 47.1333 36.8188 46.9615C37.7675 46.8123 38.5914 46.2269 39.0445 45.3801C39.5661 44.4051 39.215 42.6861 38.5129 39.2481L37.1085 32.3711L37.1084 32.371C36.9404 31.548 36.8563 31.1364 36.9027 30.7446C36.9437 30.398 37.0582 30.0641 37.2386 29.7654C37.4426 29.4276 37.7616 29.1544 38.3996 28.6078L43.3116 24.4002C46.121 21.9937 47.5257 20.7904 47.7016 19.6754C47.8543 18.7078 47.5351 17.7256 46.8429 17.0325C46.0451 16.2338 44.2014 16.086 40.5141 15.7904L34.154 15.2805C33.2867 15.211 32.853 15.1762 32.4797 15.0144C32.1495 14.8713 31.8549 14.6573 31.6167 14.3875C31.3475 14.0824 31.1804 13.6807 30.8463 12.8773L28.396 6.98611C26.9754 3.57053 26.2651 1.86274 25.259 1.35084C24.3859 0.906653 23.3531 0.906653 22.4801 1.35084C21.474 1.86274 20.7637 3.57052 19.3431 6.98609Z",
        fill: "url(#paint0_linear_4980_40501)"
    }))), reactExports.createElement("defs", null, reactExports.createElement("filter", {
        id: "filter0_i_4980_40501",
        x: 0,
        y: 1.0177,
        width: 47.7393,
        height: 45.9646,
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB"
    }, reactExports.createElement("feFlood", {
        floodOpacity: 0,
        result: "BackgroundImageFix"
    }), reactExports.createElement("feBlend", {
        mode: "normal",
        in: "SourceGraphic",
        in2: "BackgroundImageFix",
        result: "shape"
    }), reactExports.createElement("feColorMatrix", { in: "SourceAlpha",
        type: "matrix",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
        result: "hardAlpha"
    }), reactExports.createElement("feOffset", {
        dx: -.416559,
        dy: .416559
    }), reactExports.createElement("feComposite", {
        in2: "hardAlpha",
        operator: "arithmetic",
        k2: -1,
        k3: 1
    }), reactExports.createElement("feColorMatrix", {
        type: "matrix",
        values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.64 0"
    }), reactExports.createElement("feBlend", {
        mode: "soft-light",
        in2: "shape",
        result: "effect1_innerShadow_4980_40501"
    })), reactExports.createElement("linearGradient", {
        id: "paint0_linear_4980_40501",
        x1: 36.2817,
        y1: 9.83371,
        x2: 10.8029,
        y2: 46.8081,
        gradientUnits: "userSpaceOnUse"
    }, reactExports.createElement("stop", {
        stopColor: "#DD62D5"
    }), reactExports.createElement("stop", {
        offset: .190813,
        stopColor: "#8C55FE"
    }), reactExports.createElement("stop", {
        offset: .857272,
        stopColor: "#43B1FF"
    })), reactExports.createElement("clipPath", {
        id: "clip0_4980_40501"
    }, reactExports.createElement("rect", {
        width: 48,
        height: 48,
        fill: "white"
    })))),
    SvgQuestion = e => reactExports.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 25,
        height: 24,
        viewBox: "0 0 25 24",
        fill: "none",
        ...e
    }, reactExports.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.5001 3.90001C8.02659 3.90001 4.4001 7.5265 4.4001 12C4.4001 16.4735 8.02659 20.1 12.5001 20.1C16.9736 20.1 20.6001 16.4735 20.6001 12C20.6001 7.5265 16.9736 3.90001 12.5001 3.90001ZM2.6001 12C2.6001 6.53239 7.03248 2.10001 12.5001 2.10001C17.9677 2.10001 22.4001 6.53239 22.4001 12C22.4001 17.4676 17.9677 21.9 12.5001 21.9C7.03248 21.9 2.6001 17.4676 2.6001 12Z",
        fill: "white",
        fillOpacity: .3
    }), reactExports.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.3394 9.20892C13.0955 8.99211 12.7757 8.88056 12.4499 8.89861C12.4209 8.90021 12.3918 8.90041 12.3628 8.89921C12.0647 8.88684 11.7716 8.97897 11.5342 9.15971C11.2968 9.34044 11.1299 9.59841 11.0625 9.88907C10.9501 10.3733 10.4665 10.6747 9.98235 10.5624C9.49816 10.45 9.19671 9.96643 9.30906 9.48224C9.4713 8.78295 9.87269 8.1623 10.4439 7.72748C11.0035 7.30146 11.6917 7.08004 12.3939 7.09926C13.1792 7.06707 13.947 7.3407 14.5352 7.86358C15.1344 8.39613 15.4985 9.14401 15.5484 9.94406C15.5495 9.96268 15.5501 9.98133 15.5501 9.99998C15.5501 11.2242 14.6557 11.9703 14.1429 12.3873C14.0716 12.4452 14.0064 12.4975 13.9464 12.5457C13.7448 12.7075 13.6021 12.8221 13.4863 12.9431C13.4365 12.9951 13.411 13.0294 13.3988 13.0479C13.3739 13.5227 12.9811 13.9 12.5001 13.9C12.003 13.9 11.6001 13.497 11.6001 13C11.6001 12.4043 11.9253 11.9708 12.1858 11.6986C12.3923 11.4828 12.6583 11.2702 12.8724 11.099C12.9204 11.0607 12.9658 11.0244 13.0073 10.9906C13.5523 10.5476 13.7387 10.2954 13.7496 10.0257C13.7223 9.71139 13.5757 9.419 13.3394 9.20892Z",
        fill: "white",
        fillOpacity: .3
    }), reactExports.createElement("path", {
        d: "M13.5001 15.75C13.5001 16.3023 13.0524 16.75 12.5001 16.75C11.9478 16.75 11.5001 16.3023 11.5001 15.75C11.5001 15.1977 11.9478 14.75 12.5001 14.75C13.0524 14.75 13.5001 15.1977 13.5001 15.75Z",
        fill: "white",
        fillOpacity: .3
    })),
    SvgReload = e => reactExports.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 25,
        height: 24,
        viewBox: "0 0 25 24",
        fill: "none",
        ...e
    }, reactExports.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.9881 3.73898C20.4852 3.73898 20.8881 4.14192 20.8881 4.63898V8.17498C20.8881 8.67203 20.4852 9.07498 19.9881 9.07498H16.4531C15.956 9.07498 15.5531 8.67203 15.5531 8.17498C15.5531 7.67792 15.956 7.27498 16.4531 7.27498H19.0881V4.63898C19.0881 4.14192 19.491 3.73898 19.9881 3.73898Z",
        fill: "white"
    }), reactExports.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.6001 12C3.6001 7.08492 7.58504 3.09998 12.5001 3.09998C15.8747 3.09998 18.8089 4.9797 20.3171 7.7439C20.5552 8.18023 20.3945 8.72694 19.9582 8.96502C19.5218 9.2031 18.9751 9.04238 18.7371 8.60605C17.5313 6.39625 15.1895 4.89998 12.5001 4.89998C8.57915 4.89998 5.4001 8.07903 5.4001 12C5.4001 15.9209 8.57915 19.1 12.5001 19.1C16.421 19.1 19.6001 15.9209 19.6001 12C19.6001 11.5029 20.003 11.1 20.5001 11.1C20.9972 11.1 21.4001 11.5029 21.4001 12C21.4001 16.915 17.4152 20.9 12.5001 20.9C7.58504 20.9 3.6001 16.915 3.6001 12Z",
        fill: "white"
    })),
    SvgSend = e => reactExports.createElement("svg", {
        width: 28,
        height: 29,
        viewBox: "0 0 28 29",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("g", {
        clipPath: "url(#clip0_1507_2400)"
    }, reactExports.createElement("path", {
        d: "M21.9872 6.50943L16.54 22.8646C16.2756 23.6573 15.19 23.7234 14.8312 22.9778L11.8008 16.7019L21.9872 6.51887V6.50943Z",
        stroke: "white",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), reactExports.createElement("path", {
        d: "M21.9868 6.50944L11.8004 16.6925L5.52237 13.6536C4.77657 13.295 4.84265 12.2002 5.63566 11.936L21.9962 6.5L21.9868 6.50944Z",
        stroke: "white",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })), reactExports.createElement("defs", null, reactExports.createElement("clipPath", {
        id: "clip0_1507_2400"
    }, reactExports.createElement("rect", {
        width: 28,
        height: 28,
        fill: "white",
        transform: "translate(0 0.5)"
    })))),
    SvgSmile = e => reactExports.createElement("svg", {
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        d: "M11.4424 12.8457C11.9609 12.8457 12.4004 12.3887 12.4004 11.7471C12.4004 11.1055 11.9609 10.6484 11.4424 10.6484C10.9326 10.6484 10.502 11.1055 10.502 11.7471C10.502 12.3887 10.9326 12.8457 11.4424 12.8457ZM16.5664 12.8457C17.085 12.8457 17.5244 12.3887 17.5244 11.7471C17.5244 11.1055 17.085 10.6484 16.5664 10.6484C16.0479 10.6484 15.626 11.1055 15.626 11.7471C15.626 12.3887 16.0479 12.8457 16.5664 12.8457ZM10.9062 16.1592C10.9062 16.748 12.1455 17.9697 13.9824 17.9697C15.8281 17.9697 17.0674 16.748 17.0674 16.1592C17.0674 15.9482 16.8564 15.8428 16.6631 15.9395C16.0215 16.2734 15.2656 16.6689 13.9824 16.6689C12.708 16.6689 11.9521 16.2734 11.3105 15.9395C11.1172 15.8428 10.9062 15.9482 10.9062 16.1592Z",
        fill: "#1C1C1E"
    }), reactExports.createElement("path", {
        d: "M14 23C18.9706 23 23 18.9706 23 14C23 9.02944 18.9706 5 14 5C9.02944 5 5 9.02944 5 14C5 18.9706 9.02944 23 14 23Z",
        stroke: "black",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })),
    SvgStar = e => reactExports.createElement("svg", {
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("g", {
        clipPath: "url(#clip0_10_507)"
    }, reactExports.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.9531 4.34604C13.8608 4.44062 13.7314 4.63021 13.6005 4.96095L13.5994 4.96383L11.2427 10.8555C11.1614 11.0588 11.0004 11.2198 10.7971 11.3011L4.91234 13.6551C4.61217 13.782 4.44196 13.9064 4.35749 13.9941C4.34175 14.0104 4.33019 14.0241 4.32178 14.035C4.33019 14.046 4.34175 14.0597 4.35749 14.076C4.44196 14.1637 4.61217 14.288 4.91234 14.415L10.7971 16.7689C11.0004 16.8503 11.1614 17.0113 11.2427 17.2146L13.5966 23.0993C13.7236 23.3995 13.848 23.5697 13.9356 23.6542C13.952 23.6699 13.9657 23.6815 13.9766 23.6899C13.9876 23.6815 14.0013 23.6699 14.0176 23.6542C14.1053 23.5697 14.2296 23.3995 14.3566 23.0993L16.7105 17.2146C16.7918 17.0113 16.9529 16.8503 17.1562 16.7689L23.0488 14.4119C23.3762 14.2814 23.5636 14.1524 23.6569 14.0606C23.6666 14.0512 23.6747 14.0427 23.6816 14.035C23.6747 14.0274 23.6666 14.0189 23.6569 14.0095C23.5636 13.9177 23.3762 13.7887 23.0488 13.6582L17.1562 11.3011C16.9529 11.2198 16.7918 11.0588 16.7105 10.8555L14.3539 4.96383L14.3527 4.96095C14.2219 4.63021 14.0924 4.44062 14.0001 4.34604C13.9915 4.33723 13.9837 4.32965 13.9766 4.32313C13.9695 4.32965 13.9617 4.33723 13.9531 4.34604ZM15.8399 4.37092C15.6617 3.92064 15.434 3.52455 15.1453 3.22864C14.8525 2.92856 14.4556 2.69421 13.9766 2.69421C13.4977 2.69421 13.1007 2.92856 12.8079 3.22864C12.5192 3.52455 12.2916 3.92064 12.1133 4.37092C12.1131 4.37144 12.1129 4.37196 12.1127 4.37248L9.88451 9.94292L4.31119 12.1723L4.29813 12.1776C3.50724 12.5103 2.70581 13.109 2.70581 14.035C2.70581 14.9611 3.50724 15.5598 4.29813 15.8925L9.88452 18.1272L12.1138 23.7005L12.1192 23.7136C12.4519 24.5045 13.0506 25.3059 13.9766 25.3059C14.9027 25.3059 15.5014 24.5045 15.8341 23.7136L18.0687 18.1272L23.6411 15.8982C23.6409 15.8983 23.6413 15.8981 23.6411 15.8982C24.0893 15.7195 24.4842 15.4911 24.7786 15.2016C25.0771 14.9082 25.3087 14.5118 25.3087 14.035C25.3087 13.5583 25.0771 13.1619 24.7786 12.8685C24.4842 12.579 24.0899 12.3508 23.6417 12.1721C23.6415 12.172 23.6418 12.1722 23.6417 12.1721L18.0687 9.94292L15.8406 4.37248C15.8404 4.37196 15.8401 4.37144 15.8399 4.37092Z",
        fill: "black"
    })), reactExports.createElement("defs", null, reactExports.createElement("clipPath", {
        id: "clip0_10_507"
    }, reactExports.createElement("rect", {
        width: 28,
        height: 28,
        fill: "white"
    })))),
    SvgSticker = e => reactExports.createElement("svg", {
        width: 31,
        height: 30,
        viewBox: "0 0 31 30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("g", {
        clipPath: "url(#clip0_394_5485)"
    }, reactExports.createElement("path", {
        d: "M26.75 7.12483V16.7373C26.5875 17.2873 26.3 17.7873 25.8875 18.1998L18.7125 25.3748C18.3 25.7873 17.8 26.0873 17.25 26.2373H7.62502C5.77502 26.2373 4.25 24.7123 4.25 22.8623V7.11232C4.25 5.24982 5.77502 3.7373 7.62502 3.7373H23.375C25.225 3.7373 26.75 5.24982 26.75 7.11232V7.12483Z",
        stroke: "#007AFF",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), reactExports.createElement("path", {
        d: "M9.57501 10.7251C9.57501 11.9126 10.5375 12.8626 11.7125 12.8626C12.8875 12.8626 13.85 11.9126 13.85 10.7251",
        stroke: "#007AFF",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), reactExports.createElement("path", {
        d: "M16.5375 10.7251C16.5375 11.9126 17.4875 12.8626 18.675 12.8626C19.8625 12.8626 20.8125 11.9126 20.8125 10.7251",
        stroke: "#007AFF",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), reactExports.createElement("path", {
        d: "M26.75 16.7374C26.5875 17.2874 26.3 17.7874 25.8875 18.1999L18.7125 25.3749C18.3 25.7874 17.8 26.0874 17.25 26.2374C16.2625 25.0624 15.6625 23.5499 15.6625 21.8999C15.6625 21.8499 15.6625 21.8249 15.6625 21.7749C15.6625 20.3624 16.1375 19.0374 16.9125 17.9749C18.1375 16.2624 20.1375 15.1499 22.4 15.1499C24.05 15.1499 25.575 15.7499 26.7375 16.7374H26.75Z",
        stroke: "#007AFF",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), reactExports.createElement("path", {
        d: "M16.9125 17.975C16.1375 19.05 15.675 20.3625 15.6625 21.775C15.075 21.8375 14.4875 21.8 13.925 21.6375C12.175 21.1625 10.775 19.725 10.2 17.85C10.1375 17.6875 10.2625 17.5 10.4375 17.5C12.5625 18.0125 14.75 18.1625 16.9 17.975H16.9125Z",
        stroke: "#007AFF",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })), reactExports.createElement("defs", null, reactExports.createElement("clipPath", {
        id: "clip0_394_5485"
    }, reactExports.createElement("rect", {
        width: 30,
        height: 30,
        fill: "white",
        transform: "translate(0.5)"
    })))),
    SvgStonfi = e => reactExports.createElement("svg", {
        width: 30,
        height: 30,
        viewBox: "0 0 30 30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        d: "M17.4722 19.8378C17.6249 19.7317 17.8364 19.7998 17.8991 19.9753L20.2743 26.6205C20.3507 26.8342 20.1582 27.0467 19.9388 26.991L11.1938 24.7687C10.9586 24.709 10.9028 24.3993 11.1023 24.2608L17.4722 19.8378Z",
        fill: "#007AFF"
    }), reactExports.createElement("path", {
        d: "M19.0062 18.3711C18.9953 18.3404 18.9897 18.308 18.9897 18.2754V11.5782C18.9897 11.3887 18.808 11.2526 18.6269 11.3063L11.1333 13.5274C10.9522 13.5811 10.7706 13.445 10.7706 13.2555V8.92729C10.7706 8.83882 10.8117 8.75541 10.8819 8.70178L20.647 1.23786C20.7827 1.13413 20.9784 1.17374 21.0634 1.32214L26.9624 11.622C27.0042 11.695 27.0115 11.7828 26.9824 11.8617L22.0159 25.3128C21.9243 25.5609 21.5737 25.5591 21.4847 25.3099L19.0062 18.3711Z",
        fill: "#007AFF"
    }), reactExports.createElement("path", {
        d: "M8.27014 1.81836C8.3173 1.77204 8.37914 1.74373 8.44493 1.73835L17.4578 1.00106C17.7393 0.978025 17.8767 1.33776 17.6519 1.5093L9.96979 7.37091C9.89869 7.42516 9.8062 7.44251 9.72036 7.41769L4.66164 5.95509C4.45356 5.89493 4.38744 5.63205 4.54216 5.48008L8.27014 1.81836Z",
        fill: "#007AFF"
    }), reactExports.createElement("path", {
        d: "M3.25349 7.42683C3.27504 7.25389 3.44557 7.14121 3.61249 7.18962L8.97377 8.7444C9.0947 8.77946 9.17793 8.89051 9.17793 9.01677V15.3117C9.17793 15.5013 9.35973 15.6374 9.54089 15.5836L16.9825 13.3723C17.1636 13.3185 17.3454 13.4546 17.3454 13.6441V17.6426C17.3454 17.7354 17.3001 17.8224 17.2241 17.8754L8.87741 23.6944C8.76856 23.7703 8.62175 23.7602 8.52434 23.67L2.09093 17.7125C2.02392 17.6505 1.99087 17.5598 2.00219 17.469L3.25349 7.42683Z",
        fill: "#007AFF"
    })),
    SvgTelegram = e => reactExports.createElement("svg", {
        width: 29,
        height: 28,
        viewBox: "0 0 29 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.87446 12.9603C10.2414 10.622 13.8202 9.08043 15.6108 8.33568C20.7235 6.20917 21.7859 5.83975 22.4783 5.82752C22.6306 5.82486 22.9711 5.86262 23.1916 6.04161C23.5189 6.30712 23.5207 6.88344 23.4844 7.26488C23.2073 10.176 22.0085 17.2404 21.3986 20.5008C21.1405 21.8804 20.6324 22.343 20.1405 22.3883C19.0714 22.4867 18.2595 21.6817 17.224 21.003C15.6037 19.9408 14.6883 19.2796 13.1155 18.2432C11.2979 17.0454 12.4762 16.3871 13.512 15.3112C13.7831 15.0296 18.4936 10.745 18.5848 10.3563C18.5962 10.3077 18.6068 10.1265 18.4992 10.0309C18.3915 9.93521 18.2326 9.96785 18.118 9.99389C17.9555 10.0308 15.367 11.7417 10.3525 15.1266C9.61779 15.6311 8.95229 15.8769 8.35605 15.8641C7.69868 15.8499 6.43428 15.4924 5.49429 15.1868C4.34136 14.8121 3.42502 14.6139 3.50485 13.9774C3.54641 13.6458 4.00293 13.3068 4.87446 12.9603Z",
        fill: "white"
    })),
    SvgTgCheckmark = e => reactExports.createElement("svg", {
        width: 13,
        height: 14,
        viewBox: "0 0 13 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.38264 0.615993C8.80895 0.412288 9.35083 0.647722 9.51684 1.09047C9.72866 1.65541 10.0757 2.36779 10.605 2.89769C11.1343 3.42759 11.8459 3.775 12.4102 3.98706C12.8524 4.15326 13.0876 4.69574 12.8841 5.12253C12.6099 5.69779 12.3127 6.4485 12.3127 7.0009C12.3127 7.57986 12.6391 8.37666 12.9235 8.96098C13.1186 9.36195 12.9251 9.86932 12.517 10.0483C11.9381 10.3022 11.1683 10.7111 10.605 11.2751C10.0932 11.7874 9.75181 12.4278 9.5383 12.9404C9.35886 13.3712 8.8226 13.5971 8.4022 13.3952C7.82514 13.1181 7.06444 12.8138 6.50637 12.8138C5.92975 12.8138 5.13704 13.1385 4.55392 13.4225C4.15163 13.6185 3.62615 13.4271 3.43034 13.0244C3.17494 12.4992 2.77715 11.8158 2.23698 11.2751C1.68655 10.724 0.988288 10.321 0.45985 10.066C0.0661915 9.87597 -0.115062 9.37835 0.0772716 8.9855C0.364357 8.39911 0.699998 7.588 0.699998 7.0009C0.699998 6.44221 0.396053 5.68066 0.119243 5.10294C-0.0824128 4.68208 0.143154 4.14522 0.5735 3.96557C1.08556 3.75182 1.72518 3.41007 2.23698 2.89769C2.80029 2.33375 3.20876 1.56313 3.46238 0.983507C3.64116 0.574959 4.14796 0.38123 4.54848 0.576582C5.13215 0.86126 5.92806 1.18802 6.50637 1.18802C7.05815 1.18802 7.80803 0.890554 8.38264 0.615993ZM9.42292 4.74968C9.23555 4.55438 8.93178 4.55438 8.74442 4.74968L5.48195 8.1575L4.23454 6.85723C4.04718 6.66193 3.7434 6.66193 3.55604 6.85723C3.36867 7.05253 3.36867 7.36918 3.55604 7.56449L5.18045 9.25773C5.28095 9.35775 5.53953 9.49778 5.76982 9.25773L9.42292 5.44983C9.61028 5.25453 9.61028 4.94498 9.42292 4.74968Z",
        fill: "#1B84FD"
    })),
    SvgTon = e => reactExports.createElement("svg", {
        width: 20,
        height: 19,
        viewBox: "0 0 20 19",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        id: "Vector",
        d: "M10 1V18L1.70312 3.7976C1.5599 3.51127 1.49055 3.19458 1.50103 2.8755C1.51152 2.55642 1.60154 2.24482 1.76326 1.96823C1.92498 1.69163 2.15339 1.45858 2.4282 1.2897C2.70302 1.12081 3.01566 1.02136 3.33877 1H10Z",
        stroke: "#007AFF",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), reactExports.createElement("path", {
        id: "Vector_2",
        d: "M10 18L18.2967 3.7976C18.4399 3.51127 18.5095 3.19458 18.499 2.8755C18.4885 2.55642 18.3982 2.24482 18.2365 1.96823C18.0748 1.69163 17.8466 1.45858 17.5718 1.2897C17.297 1.12081 16.9841 1.02136 16.661 1H10V18Z",
        stroke: "#007AFF",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })),
    SvgTonstarter = e => reactExports.createElement("svg", {
        width: 28,
        height: 29,
        viewBox: "0 0 28 29",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        d: "M22.7716 8.33119C22.467 7.80386 21.8998 7.47632 21.2908 7.47632H8.66626L10.3057 10.3159H19.3338L14.8198 18.1346L16.4592 20.9742L22.7716 10.0409C23.0761 9.5136 23.0761 8.85852 22.7716 8.33119Z",
        fill: "white"
    }), reactExports.createElement("path", {
        d: "M13.9999 19.5543L8.66609 10.3159H8.67101L7.0319 7.47626H6.70911C6.10024 7.47626 5.53285 7.8038 5.22832 8.33113C4.9238 8.85846 4.92398 9.51354 5.22832 10.0409L12.5191 22.6689C12.8234 23.1962 13.3908 23.5238 13.9997 23.5238C14.6085 23.5238 15.1759 23.1962 15.4805 22.6689L15.6409 22.3911L14.0016 19.5511L13.9999 19.5543ZM13.0213 21.2491C13.0216 21.2484 13.0222 21.2477 13.0225 21.247C13.0222 21.2477 13.0218 21.2484 13.0213 21.2491Z",
        fill: "white"
    })),
    SvgTrash = e => reactExports.createElement("svg", {
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        d: "M9.96582 22.7686H18.043C19.3965 22.7686 20.2666 21.9512 20.3369 20.5977L20.9258 7.94141H21.8926C22.3408 7.94141 22.6836 7.58984 22.6836 7.15039C22.6836 6.71094 22.332 6.37695 21.8926 6.37695H17.9902V5.05859C17.9902 3.70508 17.1289 2.91406 15.6611 2.91406H12.3213C10.8535 2.91406 9.99219 3.70508 9.99219 5.05859V6.37695H6.10742C5.66797 6.37695 5.31641 6.71973 5.31641 7.15039C5.31641 7.59863 5.66797 7.94141 6.10742 7.94141H7.07422L7.66309 20.5977C7.7334 21.96 8.59473 22.7686 9.96582 22.7686ZM11.6357 5.1377C11.6357 4.68945 11.9521 4.39941 12.4355 4.39941H15.5469C16.0303 4.39941 16.3467 4.68945 16.3467 5.1377V6.37695H11.6357V5.1377ZM10.1416 21.1953C9.6582 21.1953 9.30664 20.835 9.28027 20.3164L8.69141 7.94141H19.2822L18.7109 20.3164C18.6934 20.8438 18.3506 21.1953 17.8496 21.1953H10.1416ZM11.4072 19.7803C11.7852 19.7803 12.0225 19.543 12.0137 19.1914L11.75 9.99805C11.7412 9.64648 11.4951 9.41797 11.1348 9.41797C10.7656 9.41797 10.5283 9.65527 10.5371 10.0068L10.8008 19.2002C10.8096 19.5518 11.0557 19.7803 11.4072 19.7803ZM14 19.7803C14.3691 19.7803 14.624 19.5518 14.624 19.2002V10.0068C14.624 9.65527 14.3691 9.41797 14 9.41797C13.6309 9.41797 13.3848 9.65527 13.3848 10.0068V19.2002C13.3848 19.5518 13.6309 19.7803 14 19.7803ZM16.5928 19.7891C16.9443 19.7891 17.1904 19.5518 17.1992 19.2002L17.4629 10.0068C17.4717 9.65527 17.2344 9.42676 16.8652 9.42676C16.5049 9.42676 16.2588 9.65527 16.25 10.0068L15.9863 19.2002C15.9775 19.543 16.2148 19.7891 16.5928 19.7891Z",
        fill: "#FF5A50"
    })),
    SvgTwitter = e => reactExports.createElement("svg", {
        width: 29,
        height: 29,
        viewBox: "0 0 29 29",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        d: "M22.7094 11.244C22.7094 11.413 22.7094 11.5821 22.7094 11.7271C22.7094 16.7271 18.893 22.5 11.9365 22.5C9.78673 22.5 7.80606 21.872 6.11523 20.8092C6.40509 20.8333 6.7191 20.8575 7.00895 20.8575C8.77224 20.8575 10.4148 20.2536 11.7191 19.2391C10.0524 19.215 8.65147 18.1039 8.19253 16.6063C8.43407 16.6546 8.65147 16.6787 8.91717 16.6787C9.25533 16.6787 9.59349 16.6304 9.9075 16.5338C8.16837 16.1957 6.86403 14.6739 6.86403 12.8382C6.86403 12.814 6.86403 12.814 6.86403 12.7899C7.37127 13.0797 7.95098 13.2488 8.579 13.2729C7.56451 12.5966 6.88818 11.4372 6.88818 10.1087C6.88818 9.40821 7.08142 8.75604 7.39543 8.20048C9.25533 10.4952 12.0573 11.9928 15.1974 12.1618C15.1249 11.8961 15.1007 11.5821 15.1007 11.2923C15.1007 9.19082 16.7916 7.5 18.893 7.5C19.98 7.5 20.9703 7.95894 21.6466 8.68357C22.5162 8.51449 23.3133 8.20048 24.0621 7.7657C23.7722 8.65942 23.1684 9.38406 22.3954 9.86715C23.1684 9.77053 23.893 9.57729 24.5693 9.26329C24.0862 10.0362 23.4582 10.7126 22.7094 11.244Z",
        fill: "white"
    })),
    SvgVerificationSign = e => reactExports.createElement("svg", {
        width: 13,
        height: 13,
        viewBox: "0 0 13 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("path", {
        id: "Vector",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.38264 0.115993C8.80895 -0.0877122 9.35083 0.147722 9.51684 0.590474C9.72866 1.15541 10.0757 1.86779 10.605 2.39769C11.1343 2.92759 11.8459 3.275 12.4102 3.48706C12.8524 3.65326 13.0876 4.19574 12.8841 4.62253C12.6099 5.19779 12.3127 5.9485 12.3127 6.5009C12.3127 7.07986 12.6391 7.87666 12.9235 8.46098C13.1186 8.86195 12.9251 9.36932 12.517 9.54829C11.9381 9.8022 11.1683 10.2111 10.605 10.7751C10.0932 11.2874 9.75181 11.9278 9.5383 12.4404C9.35886 12.8712 8.8226 13.0971 8.4022 12.8952C7.82514 12.6181 7.06444 12.3138 6.50637 12.3138C5.92975 12.3138 5.13704 12.6385 4.55392 12.9225C4.15163 13.1185 3.62615 12.9271 3.43034 12.5244C3.17494 11.9992 2.77715 11.3158 2.23698 10.7751C1.68655 10.224 0.988288 9.82099 0.45985 9.56596C0.0661915 9.37597 -0.115062 8.87835 0.0772716 8.4855C0.364357 7.89911 0.699998 7.088 0.699998 6.5009C0.699998 5.94221 0.396053 5.18066 0.119243 4.60294C-0.0824128 4.18208 0.143154 3.64522 0.5735 3.46557C1.08556 3.25182 1.72518 2.91007 2.23698 2.39769C2.80029 1.83375 3.20876 1.06313 3.46238 0.483507C3.64116 0.0749591 4.14796 -0.11877 4.54848 0.0765824C5.13215 0.36126 5.92806 0.688024 6.50637 0.688024C7.05815 0.688024 7.80803 0.390554 8.38264 0.115993ZM9.42292 4.24968C9.23555 4.05438 8.93178 4.05438 8.74442 4.24968L5.48195 7.6575L4.23454 6.35723C4.04718 6.16193 3.7434 6.16193 3.55604 6.35723C3.36867 6.55253 3.36867 6.86918 3.55604 7.06449L5.18045 8.75773C5.28095 8.85775 5.53953 8.99778 5.76982 8.75773L9.42292 4.94983C9.61028 4.75453 9.61028 4.44498 9.42292 4.24968Z",
        fill: "#1B84FD"
    })),
    SvgVerified = e => reactExports.createElement("svg", {
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, reactExports.createElement("g", {
        clipPath: "url(#clip0_10_532)"
    }, reactExports.createElement("path", {
        d: "M17.3134 5.88H21.5951V10.4417L24.5117 14L21.5951 17.5583V22.12H17.3134L14.0001 24.5L10.6401 22.12H6.33505V17.5583L3.51172 14.0117L6.33505 10.465V5.89165H10.6401L14.0117 3.52332L17.3251 5.90333L17.3134 5.88Z",
        stroke: "black",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), reactExports.createElement("path", {
        d: "M10.8501 14L12.9501 16.1L17.1501 11.9",
        stroke: "black",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })), reactExports.createElement("defs", null, reactExports.createElement("clipPath", {
        id: "clip0_10_532"
    }, reactExports.createElement("rect", {
        width: 28,
        height: 28,
        fill: "white"
    })))),
    SvgWallet = e => reactExports.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        ...e
    }, reactExports.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 12.68C3 9.99175 3 8.64763 3.52317 7.62085C3.98336 6.71767 4.71767 5.98336 5.62085 5.52317C6.64763 5 7.99175 5 10.68 5H16.92C19.6083 5 20.9524 5 21.9792 5.52317C22.8824 5.98336 23.6167 6.71767 24.0769 7.62085C24.1692 7.80212 24.2453 7.99329 24.3079 8.2H21C19.5116 8.2 18.7674 8.2 18.1604 8.37823C16.7236 8.80009 15.6001 9.92366 15.1782 11.3604C15 11.9674 15 12.7116 15 14.2C15 15.6884 15 16.4326 15.1782 17.0396C15.6001 18.4763 16.7236 19.5999 18.1604 20.0218C18.7674 20.2 19.5116 20.2 21 20.2H24.3079C24.2453 20.4067 24.1692 20.5979 24.0769 20.7792C23.6167 21.6823 22.8824 22.4166 21.9792 22.8768C20.9524 23.4 19.6083 23.4 16.92 23.4H10.68C7.99175 23.4 6.64763 23.4 5.62085 22.8768C4.71767 22.4166 3.98336 21.6823 3.52317 20.7792C3 19.7524 3 18.4082 3 15.72V12.68ZM16.6 14.1999C16.6 12.7072 16.6 11.9608 16.8772 11.385C17.1525 10.8135 17.6136 10.3524 18.1851 10.0772C18.7609 9.7999 19.5072 9.7999 21 9.7999H22.6C24.0927 9.7999 24.8391 9.7999 25.4148 10.0772C25.9864 10.3524 26.4475 10.8135 26.7227 11.385C27 11.9608 27 12.7072 27 14.1999C27 15.6926 27 16.439 26.7227 17.0148C26.4475 17.5863 25.9864 18.0474 25.4148 18.3226C24.8391 18.5999 24.0927 18.5999 22.6 18.5999H21C19.5072 18.5999 18.7609 18.5999 18.1851 18.3226C17.6136 18.0474 17.1525 17.5863 16.8772 17.0148C16.6 16.439 16.6 15.6926 16.6 14.1999ZM21.8 14.1999C21.8 15.0836 21.0836 15.7999 20.2 15.7999C19.3163 15.7999 18.6 15.0836 18.6 14.1999C18.6 13.3162 19.3163 12.5999 20.2 12.5999C21.0836 12.5999 21.8 13.3162 21.8 14.1999Z",
        fill: "#0099FF"
    })),
    SvgX = e => reactExports.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 25,
        height: 25,
        viewBox: "0 0 25 25",
        fill: "none",
        ...e
    }, reactExports.createElement("path", {
        d: "M14.0222 11.2749L19.9785 4.5H18.5671L13.3952 10.3826L9.26437 4.5H4.5L10.7466 13.3955L4.5 20.5H5.91155L11.3732 14.2878L15.7356 20.5H20.5L14.0218 11.2749H14.0222ZM12.0889 13.4738L11.456 12.5881L6.42015 5.53974H8.5882L12.6522 11.228L13.2851 12.1137L18.5677 19.5075H16.3997L12.0889 13.4742V13.4738Z",
        fill: "black"
    })),
    svgs = Object.freeze(Object.defineProperty({
        __proto__: null,
        ArrowRightUp: SvgArrowRightUp,
        Checkmark: SvgCheckmark,
        CheckmarkRound: SvgCheckmarkRound,
        ChevronRight: SvgChevronRight,
        ChevronRightLarge: SvgChevronRightLarge,
        Coins: SvgCoins,
        Eyes: SvgEyes,
        Fragment: SvgFragment,
        Gear: SvgGear,
        Getgems: SvgGetgems,
        Gift: SvgGift,
        GiftOutline: SvgGiftOutline,
        Group: SvgGroup,
        Laurel: SvgLaurel,
        LaurelBig: SvgLaurelBig,
        Link: SvgLink,
        LinkOuter: SvgLinkOuter,
        Lock: SvgLock,
        LockOutline: SvgLockOutline,
        Pencil: SvgPencil,
        Picture: SvgPicture,
        Place: SvgPlace,
        Plus: SvgPlus,
        Premium: SvgPremium,
        Question: SvgQuestion,
        Reload: SvgReload,
        Send: SvgSend,
        Smile: SvgSmile,
        Star: SvgStar,
        Sticker: SvgSticker,
        Stonfi: SvgStonfi,
        Telegram: SvgTelegram,
        TgCheckmark: SvgTgCheckmark,
        Ton: SvgTon,
        Tonstarter: SvgTonstarter,
        Trash: SvgTrash,
        Twitter: SvgTwitter,
        VerificationSign: SvgVerificationSign,
        Verified: SvgVerified,
        Wallet: SvgWallet,
        X: SvgX
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    normalizeName = e => e.split("-").map(s => `${s.charAt(0).toUpperCase()}${s.slice(1)}`).join("");

function Icon({
    colorStroke: e,
    colorFill: s,
    color: t = "primary",
    name: n,
    width: o,
    height: r,
    className: a,
    isDisabled: c,
    style: i,
    src: l,
    element: d,
    emoji: _,
    size: p,
    ...u
}) {
    const m = cn(styles$1c.root, p && styles$1c[`size-${p}`], e && styles$1c[`color-stroke-${e}`], s && styles$1c[`color-fill-${s}`], n && libraryStyles[`icon-${n}`], a);
    if (l !== void 0) return jsx("img", {
        className: m,
        src: l
    });
    if (_) return jsx("span", {
        className: m,
        children: _
    });
    const f = n ? svgs[normalizeName(n)] : d;
    return React.createElement(f, {
        className: m
    })
}
const root$p = "_root_76zp5_1",
    size24 = "_size-24_76zp5_9",
    size30 = "_size-30_76zp5_15",
    size40 = "_size-40_76zp5_21",
    placeholder$2 = "_placeholder_76zp5_26",
    size44 = "_size-44_76zp5_31",
    size48$1 = "_size-48_76zp5_41",
    size72 = "_size-72_76zp5_47",
    size92 = "_size-92_76zp5_54",
    size100 = "_size-100%_76zp5_77",
    size112 = "_size-112_76zp5_71",
    radius12 = "_radius-12_76zp5_83",
    radius32 = "_radius-32_76zp5_87",
    rounded = "_rounded_76zp5_91",
    skeleton = "_skeleton_76zp5_95",
    cover = "_cover_76zp5_109",
    styles$1b = {
        root: root$p,
        "size-24": "_size-24_76zp5_9",
        size24,
        "size-30": "_size-30_76zp5_15",
        size30,
        "size-40": "_size-40_76zp5_21",
        size40,
        placeholder: placeholder$2,
        "size-44": "_size-44_76zp5_31",
        size44,
        "size-48": "_size-48_76zp5_41",
        size48: size48$1,
        "size-72": "_size-72_76zp5_47",
        size72,
        "size-92": "_size-92_76zp5_54",
        size92,
        "size-100": "_size-100_76zp5_65",
        size100,
        "size-112": "_size-112_76zp5_71",
        size112,
        "size-100%": "_size-100%_76zp5_77",
        "radius-12": "_radius-12_76zp5_83",
        radius12,
        "radius-32": "_radius-32_76zp5_87",
        radius32,
        rounded,
        skeleton,
        cover
    },
    Image = reactExports.forwardRef(({
        src: e = "",
        className: s,
        alt: t,
        lazy: n,
        size: o,
        width: r,
        height: a,
        minHeight: c,
        minWidth: i,
        asDataSrc: l,
        borderRadius: d,
        rounded: _,
        skeleton: p,
        placeholder: u,
        cover: m
    }, x) => {
        const f = !e && !l;
        return jsx(f ? "div" : "img", {
            src: l ? void 0 : e,
            "data-src": l ? e : void 0,
            className: cn(styles$1b.root, f && styles$1b.placeholder, o && styles$1b[`size-${o}`], d && styles$1b[`radius-${d}`], _ && styles$1b.rounded, p && styles$1b.skeleton, m && styles$1b.cover, s && s),
            alt: t,
            ref: x,
            loading: n ? "lazy" : void 0,
            style: {
                width: r,
                height: a,
                minHeight: c,
                minWidth: i
            },
            children: f ? u : null
        })
    }),
    root$o = "_root_rxjtx_1",
    item = "_item_rxjtx_6",
    highlighted$1 = "_highlighted_rxjtx_10",
    listInner$1 = "_listInner_rxjtx_14",
    title$m = "_title_rxjtx_18",
    avatar$2 = "_avatar_rxjtx_22",
    medal$1 = "_medal_rxjtx_30",
    delimeter$3 = "_delimeter_rxjtx_34",
    score$a = "_score_rxjtx_50",
    styles$1a = {
        root: root$o,
        item,
        highlighted: highlighted$1,
        listInner: listInner$1,
        title: title$m,
        avatar: avatar$2,
        medal: medal$1,
        delimeter: delimeter$3,
        score: score$a
    },
    root$n = "_root_1ck1j_1",
    separate$2 = "_separate_1ck1j_8",
    inset$1 = "_inset_1ck1j_13",
    spacingChild8 = "_spacing-child-8_1ck1j_28",
    spacingChild12 = "_spacing-child-12_1ck1j_35",
    styles$19 = {
        root: root$n,
        separate: separate$2,
        inset: inset$1,
        "spacing-child-8": "_spacing-child-8_1ck1j_28",
        spacingChild8,
        "spacing-child-12": "_spacing-child-12_1ck1j_35",
        spacingChild12
    };

function List({
    className: e,
    children: s,
    type: t = "basic",
    spacingChild: n
}) {
    const o = s.length ? s.length : 1,
        r = reactExports.useMemo(() => React.Children.map(s, (a, c) => {
            const i = a;
            return i === null ? null : React.cloneElement(i, {
                index: c,
                separate: t === "separate",
                divider: i.props.divider === !1 ? !1 : c < o - 1 && t !== "separate"
            })
        }), [s]);
    return jsx("div", {
        className: cn(styles$19.root, e, styles$19[t], n && styles$19[`spacing-child-${n}`]),
        children: r
    })
}
const root$m = "_root_idmys_1",
    before$2 = "_before_idmys_12",
    inner$1 = "_inner_idmys_26",
    inputWrapper = "_inputWrapper_idmys_32",
    withDivider$2 = "_withDivider_idmys_42",
    control = "_control_idmys_63",
    clearButton = "_clearButton_idmys_83",
    visible = "_visible_idmys_106",
    details$2 = "_details_idmys_112",
    label$1 = "_label_idmys_119",
    styles$18 = {
        root: root$m,
        before: before$2,
        inner: inner$1,
        inputWrapper,
        withDivider: withDivider$2,
        control,
        clearButton,
        visible,
        details: details$2,
        label: label$1
    },
    root$l = "_root_luci1_1",
    large$1 = "_large_luci1_9",
    medium = "_medium_luci1_16",
    innerWrapper$3 = "_innerWrapper_luci1_24",
    before$1 = "_before_luci1_31",
    innerContent$3 = "_innerContent_luci1_51",
    content$4 = "_content_luci1_59",
    header$2 = "_header_luci1_63",
    footer$3 = "_footer_luci1_72",
    title$l = "_title_luci1_82",
    withDivider$1 = "_withDivider_luci1_95",
    link$4 = "_link_luci1_116",
    prefix$4 = "_prefix_luci1_121",
    beforeSize40$1 = "_before-size-40_luci1_147",
    after$2 = "_after_luci1_151",
    button$5 = "_button_luci1_159",
    optionButton$1 = "_option-button_luci1_160",
    chevron$4 = "_chevron_luci1_183",
    checkmark$1 = "_checkmark_luci1_194",
    separate$1 = "_separate_luci1_198",
    rippleEffect$5 = "_rippleEffect_luci1_203",
    details$1 = "_details_luci1_218",
    styles$17 = {
        root: root$l,
        large: large$1,
        medium,
        innerWrapper: innerWrapper$3,
        before: before$1,
        innerContent: innerContent$3,
        content: content$4,
        header: header$2,
        footer: footer$3,
        title: title$l,
        withDivider: withDivider$1,
        link: link$4,
        prefix: prefix$4,
        "before-size-40": "_before-size-40_luci1_147",
        beforeSize40: beforeSize40$1,
        after: after$2,
        button: button$5,
        "option-button": "_option-button_luci1_160",
        optionButton: optionButton$1,
        chevron: chevron$4,
        checkmark: checkmark$1,
        separate: separate$1,
        rippleEffect: rippleEffect$5,
        details: details$1
    };

function getComponentByType(e) {
    return e === "link" ? "a" : e === "button" || e === "option-button" ? "button" : "div"
}

function ListItem({
    className: e,
    title: s,
    divider: t = !0,
    ripple: n = !0,
    type: o = "text",
    to: r = "",
    prefix: a,
    before: c,
    beforeSize: i,
    after: l,
    header: d,
    footer: _,
    details: p,
    active: u,
    hideChevron: m,
    large: x,
    medium: f,
    target: g,
    onClick: C,
    separate: h,
    chevron: y = !1
}) {
    const k = "light",
        b = o === "link",
        $ = getComponentByType(o),
        I = L => {
            C && C(L)
        },
        S = (b || y) && !m;
    return jsxs($, {
        className: cn(styles$17.root, e, styles$17[k], styles$17[o], h && styles$17.separate, n && styles$17.rippleEffect, x && styles$17.large, f && styles$17.medium),
        ...r ? {
            href: r,
            target: g
        } : {},
        onClick: I,
        children: [p ? jsx("div", {
            className: styles$17.details,
            children: p
        }) : null, jsxs("div", {
            className: cn(styles$17.innerWrapper),
            children: [a ? jsx("div", {
                className: styles$17.prefix,
                children: a
            }) : null, c ? jsx("div", {
                className: cn(styles$17.before, i && styles$17[`before-size-${i}`]),
                children: c
            }) : null, jsxs("div", {
                className: cn(styles$17.innerContent, t && styles$17.withDivider),
                children: [jsxs("div", {
                    className: styles$17.content,
                    children: [d ? jsx("div", {
                        className: styles$17.header,
                        children: d
                    }) : null, jsx("div", {
                        className: styles$17.title,
                        children: s
                    }), _ ? jsx("div", {
                        className: styles$17.footer,
                        children: _
                    }) : null]
                }), l ? jsx("div", {
                    className: styles$17.after,
                    children: l
                }) : null, u ? jsx(Icon, {
                    name: "checkmark",
                    className: styles$17.checkmark
                }) : null, S ? jsx(Icon, {
                    name: x ? "chevron-right-large" : "chevron-right",
                    className: styles$17.chevron
                }) : null]
            })]
        })]
    })
}
const root$k = "_root_15t8r_1",
    colorAccent$1 = "_color-accent_15t8r_14",
    colorTertiary$2 = "_color-tertiary_15t8r_19",
    styles$16 = {
        root: root$k,
        "color-accent": "_color-accent_15t8r_14",
        colorAccent: colorAccent$1,
        "color-tertiary": "_color-tertiary_15t8r_19",
        colorTertiary: colorTertiary$2
    },
    MainButton = ({
        disabled: e,
        color: s,
        textColor: t,
        text: n,
        onClick: o,
        progress: r,
        hidden: a
    }) => {
        const c = window.Telegram.WebApp,
            i = c ? c.MainButton : null,
            l = () => {
                if (i) {
                    const {
                        button_color: d,
                        button_text_color: _
                    } = c.themeParams;
                    e ? i.disable() : i.enable(), i.hideProgress(), i.setParams({
                        color: d,
                        text_color: _
                    })
                }
            };
        return reactExports.useEffect(() => {
            l()
        }, []), reactExports.useEffect(() => {
            a && i && (i.hide(), l())
        }, [a]), reactExports.useEffect(() => {
            i && (typeof r == "boolean" && (r ? (i.showProgress(), i.disable()) : i.hideProgress()), typeof e == "boolean" && (e || r ? i.disable() : i.enable()))
        }, [e, r]), reactExports.useEffect(() => {
            if (i) {
                if ((s || t) && i.setParams({
                        color: s,
                        text_color: t
                    }), !s) {
                    const {
                        button_color: d
                    } = c.themeParams;
                    i.setParams({
                        color: d
                    })
                }
                if (!t) {
                    const {
                        button_text_color: d
                    } = c.themeParams;
                    i.setParams({
                        text_color: d
                    })
                }
            }
        }, [s, t]), reactExports.useEffect(() => {
            i && (n ? (i.setText(n), !i.isVisible && i.show()) : i.isVisible && i.hide())
        }, [n]), reactExports.useEffect(() => {
            if (i && o) return i.onClick(o), () => {
                i && i.offClick(o)
            }
        }, [o]), null
    },
    icon$4 = "_icon_sfea9_1",
    iconWrapper = "_iconWrapper_sfea9_13",
    iconSize24 = "_icon-size-24_sfea9_19",
    iconSize40 = "_icon-size-40_sfea9_25",
    iconSize48 = "_icon-size-48_sfea9_31",
    iconSize72 = "_icon-size-72_sfea9_37",
    iconRadius12 = "_icon-radius-12_sfea9_43",
    iconRadius4 = "_icon-radius-4_sfea9_47",
    iconRadius0 = "_icon-radius-0_sfea9_51",
    iconImageSize24 = "_icon-image-size-24_sfea9_55",
    iconImageSize26 = "_icon-image-size-26_sfea9_64",
    iconImageSize32 = "_icon-image-size-32_sfea9_69",
    iconImageSize36 = "_icon-image-size-36_sfea9_78",
    iconImageSize48 = "_icon-image-size-48_sfea9_87",
    iconImageSize40 = "_icon-image-size-40_sfea9_96",
    iconImageSize72 = "_icon-image-size-72_sfea9_109",
    iconColorPaleGrey = "_icon-color-pale-grey_sfea9_118",
    iconColorGrey = "_icon-color-grey_sfea9_121",
    iconColorCompleted = "_icon-color-completed_sfea9_124",
    iconColorMildBlue = "_icon-color-mild-blue_sfea9_127",
    iconColorPaleOrange = "_icon-color-pale-orange_sfea9_130",
    iconColorColdMorning = "_icon-color-cold-morning_sfea9_133",
    iconColorLightLatte = "_icon-color-light-latte_sfea9_136",
    iconColorMildPink = "_icon-color-mild-pink_sfea9_139",
    iconColorYoungPeach = "_icon-color-young-peach_sfea9_142",
    iconColorPaleMint = "_icon-color-pale-mint_sfea9_145",
    iconColorDark = "_icon-color-dark_sfea9_148",
    iconColorBrand = "_icon-color-brand_sfea9_151",
    styles$15 = {
        icon: icon$4,
        iconWrapper,
        "icon-size-24": "_icon-size-24_sfea9_19",
        iconSize24,
        "icon-size-40": "_icon-size-40_sfea9_25",
        iconSize40,
        "icon-size-48": "_icon-size-48_sfea9_31",
        iconSize48,
        "icon-size-72": "_icon-size-72_sfea9_37",
        iconSize72,
        "icon-radius-12": "_icon-radius-12_sfea9_43",
        iconRadius12,
        "icon-radius-4": "_icon-radius-4_sfea9_47",
        iconRadius4,
        "icon-radius-0": "_icon-radius-0_sfea9_51",
        iconRadius0,
        "icon-image-size-24": "_icon-image-size-24_sfea9_55",
        iconImageSize24,
        "icon-image-size-26": "_icon-image-size-26_sfea9_64",
        iconImageSize26,
        "icon-image-size-32": "_icon-image-size-32_sfea9_69",
        iconImageSize32,
        "icon-image-size-36": "_icon-image-size-36_sfea9_78",
        iconImageSize36,
        "icon-image-size-48": "_icon-image-size-48_sfea9_87",
        iconImageSize48,
        "icon-image-size-40": "_icon-image-size-40_sfea9_96",
        iconImageSize40,
        "icon-image-size-72": "_icon-image-size-72_sfea9_109",
        iconImageSize72,
        "icon-color-pale-grey": "_icon-color-pale-grey_sfea9_118",
        iconColorPaleGrey,
        "icon-color-grey": "_icon-color-grey_sfea9_121",
        iconColorGrey,
        "icon-color-completed": "_icon-color-completed_sfea9_124",
        iconColorCompleted,
        "icon-color-mild-blue": "_icon-color-mild-blue_sfea9_127",
        iconColorMildBlue,
        "icon-color-pale-orange": "_icon-color-pale-orange_sfea9_130",
        iconColorPaleOrange,
        "icon-color-cold-morning": "_icon-color-cold-morning_sfea9_133",
        iconColorColdMorning,
        "icon-color-light-latte": "_icon-color-light-latte_sfea9_136",
        iconColorLightLatte,
        "icon-color-mild-pink": "_icon-color-mild-pink_sfea9_139",
        iconColorMildPink,
        "icon-color-young-peach": "_icon-color-young-peach_sfea9_142",
        iconColorYoungPeach,
        "icon-color-pale-mint": "_icon-color-pale-mint_sfea9_145",
        iconColorPaleMint,
        "icon-color-dark": "_icon-color-dark_sfea9_148",
        iconColorDark,
        "icon-color-brand": "_icon-color-brand_sfea9_151",
        iconColorBrand
    },
    MediaIcon = ({
        media: e,
        size: s = "40",
        borderRadius: t = "8",
        hollow: n,
        imageSize: o,
        className: r
    }) => {
        let a = null;
        const c = {};
        e.type && (e.type === "cover-emoji" && (c.emoji = e.value), e.type === "cover-src" && (c.src = e.value), e.type === "cover-library" && (c.name = e.value), e.colorFill && (c.colorFill = e.colorFill), e.colorStroke && (c.colorStroke = e.colorStroke), a = jsx(Icon, { ...c
        }));
        const i = e != null && e.color ? e.color : "mild-blue";
        return jsx("div", {
            className: cn(styles$15.icon, n !== !0 && styles$15[`icon-color-${i}`], styles$15[`icon-size-${s}`], o && styles$15[`icon-image-size-${o}`], t && styles$15[`icon-radius-${t}`], r && r),
            children: jsx("div", {
                className: styles$15.iconWrapper,
                children: a
            })
        })
    },
    root$j = "_root_17cng_1",
    backdrop$8 = "_backdrop_17cng_12",
    modal$7 = "_modal_17cng_26",
    body$7 = "_body_17cng_41",
    header$1 = "_header_17cng_49",
    backButton$5 = "_backButton_17cng_54",
    styles$14 = {
        root: root$j,
        backdrop: backdrop$8,
        modal: modal$7,
        body: body$7,
        header: header$1,
        backButton: backButton$5
    },
    root$i = "_root_17t9n_1",
    inner = "_inner_17t9n_13",
    topPadding = "_topPadding_17t9n_17",
    fullSpace = "_fullSpace_17t9n_21",
    styles$13 = {
        root: root$i,
        inner,
        topPadding,
        fullSpace
    },
    Page = ({
        className: e,
        children: s,
        fullSpace: t,
        hasNotch: n,
        ...o
    }) => {
        var r, a, c, i, l, d, _, p;
        return n !== !1 && (n = ((a = (r = window == null ? void 0 : window.Telegram) == null ? void 0 : r.WebApp) == null ? void 0 : a.platform) === "macos" || ((i = (c = window == null ? void 0 : window.Telegram) == null ? void 0 : c.WebApp) == null ? void 0 : i.platform) === "windows" || ((d = (l = window == null ? void 0 : window.Telegram) == null ? void 0 : l.WebApp) == null ? void 0 : d.platform) === "android" || ((p = (_ = window == null ? void 0 : window.Telegram) == null ? void 0 : _.WebApp) == null ? void 0 : p.platform) === "unknown"), jsx("div", {
            id: "page",
            className: cn(styles$13.root, t && styles$13.fullSpace, e),
            ...o,
            children: s
        })
    },
    root$h = "_root_15817_1",
    solid = "_solid_15817_6",
    inset = "_inset_15817_14",
    styles$12 = {
        root: root$h,
        solid,
        inset
    },
    backdrop$7 = "_backdrop_w3ao9_1",
    opened$1 = "_opened_w3ao9_15",
    content$3 = "_content_w3ao9_27",
    contentInner = "_contentInner_w3ao9_49",
    title$k = "_title_w3ao9_56",
    cross = "_cross_w3ao9_68",
    styles$11 = {
        backdrop: backdrop$7,
        opened: opened$1,
        content: content$3,
        contentInner,
        title: title$k,
        cross
    };

function Sheet({
    children: e,
    backdropClassName: s,
    contentClassName: t,
    opened: n,
    onClose: o,
    onBackdropClick: r,
    title: a,
    cross: c = !0
}) {
    const i = jsxs(Fragment, {
        children: [jsx("div", {
            className: cn(styles$11.backdrop, s && s, n && styles$11.opened),
            onClick: r
        }), jsxs("div", {
            className: cn(styles$11.content, t && t, n && styles$11.opened),
            children: [a || c ? jsxs("div", {
                className: styles$11.title,
                children: [a, " ", c ? jsx("div", {
                    className: styles$11.cross,
                    onClick: o,
                    children: jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4.36321 4.3637C4.71469 4.01223 5.28453 4.01223 5.63601 4.3637L11.9996 10.7273L18.3632 4.3637C18.7147 4.01223 19.2845 4.01223 19.636 4.3637C19.9875 4.71517 19.9875 5.28502 19.636 5.63649L13.2724 12.0001L19.636 18.3637C19.9875 18.7152 19.9875 19.285 19.636 19.6365C19.2845 19.988 18.7147 19.988 18.3632 19.6365L11.9996 13.2729L5.63601 19.6365C5.28453 19.988 4.71469 19.988 4.36321 19.6365C4.01174 19.285 4.01174 18.7152 4.36321 18.3637L10.7268 12.0001L4.36321 5.63649C4.01174 5.28502 4.01174 4.71517 4.36321 4.3637Z",
                            fill: "white"
                        })
                    })
                }) : null]
            }) : null, jsx("div", {
                className: styles$11.contentInner,
                children: e
            })]
        })]
    });
    return reactDomExports.createPortal(i, document.body)
}
const root$g = "_root_mhvp0_1",
    padding = "_padding_mhvp0_9",
    image$8 = "_image_mhvp0_13",
    line$2 = "_line_mhvp0_21",
    thickLine$1 = "_thickLine_mhvp0_27",
    height12$1 = "_height12_mhvp0_32",
    height24$2 = "_height24_mhvp0_36",
    height36$2 = "_height36_mhvp0_40",
    height48$1 = "_height48_mhvp0_44",
    line20$1 = "_line20_mhvp0_48",
    line40$1 = "_line40_mhvp0_52",
    line50$1 = "_line50_mhvp0_56",
    mb16$1 = "_mb16_mhvp0_60",
    mb28$1 = "_mb28_mhvp0_64",
    mb48$1 = "_mb48_mhvp0_68",
    listItem$2 = "_listItem_mhvp0_72",
    listItemMedia$1 = "_listItemMedia_mhvp0_78",
    listItemLine$1 = "_listItemLine_mhvp0_85",
    listItemSeparate$1 = "_listItemSeparate_mhvp0_113",
    listItemLarge$1 = "_listItemLarge_mhvp0_122",
    marginBottom9$1 = "_margin-bottom-9_mhvp0_131",
    marginBottom12$1 = "_margin-bottom-12_mhvp0_138",
    styles$10 = {
        root: root$g,
        padding,
        image: image$8,
        line: line$2,
        thickLine: thickLine$1,
        height12: height12$1,
        height24: height24$2,
        height36: height36$2,
        height48: height48$1,
        line20: line20$1,
        line40: line40$1,
        line50: line50$1,
        mb16: mb16$1,
        mb28: mb28$1,
        mb48: mb48$1,
        listItem: listItem$2,
        listItemMedia: listItemMedia$1,
        listItemLine: listItemLine$1,
        listItemSeparate: listItemSeparate$1,
        listItemLarge: listItemLarge$1,
        "margin-bottom-9": "_margin-bottom-9_mhvp0_131",
        marginBottom9: marginBottom9$1,
        "margin-bottom-12": "_margin-bottom-12_mhvp0_138",
        marginBottom12: marginBottom12$1
    },
    solidRoot$1 = "_solidRoot_1aach_1",
    activeBar$2 = "_activeBar_1aach_20",
    tabPanel$2 = "_tabPanel_1aach_41",
    tabPanelActive$2 = "_tabPanelActive_1aach_44",
    solidTabButton$1 = "_solidTabButton_1aach_48",
    flatRoot$1 = "_flatRoot_1aach_89",
    flatTabButton$1 = "_flatTabButton_1aach_112",
    isActive$6 = "_isActive_1aach_138",
    styles$$ = {
        solidRoot: solidRoot$1,
        activeBar: activeBar$2,
        tabPanel: tabPanel$2,
        tabPanelActive: tabPanelActive$2,
        solidTabButton: solidTabButton$1,
        flatRoot: flatRoot$1,
        flatTabButton: flatTabButton$1,
        isActive: isActive$6
    };

function Tabs$1({
    flat: e,
    onChange: s,
    children: t,
    className: n,
    activeIndex: o
}) {
    const r = p => {
            s(p)
        },
        [a, c] = reactExports.useState({
            transform: "",
            width: ""
        }),
        i = React.Children.map(t, (p, u) => React.cloneElement(p, {
            index: u,
            activeIndex: o,
            onClick: r
        })),
        l = "4px",
        d = e ? "0px" : "2px",
        _ = i ? i.length : 0;
    return reactExports.useEffect(() => {
        c({
            transform: `translateX(calc(${o} * 100% + ${o} * ${l}))`,
            width: `calc((100% - ${d} * 2 - ${l} * (${_} - 1)) / ${_})`
        })
    }, [o]), jsxs("div", {
        className: cn(e && styles$$.flatRoot, !e && styles$$.solidRoot, n),
        children: [i, jsx("div", {
            className: cn(styles$$.activeBar),
            style: a
        })]
    })
}
Tabs$1.displayName = "Tabs";
const Tab$1 = ({
    label: e,
    onClick: s,
    index: t,
    className: n,
    activeIndex: o,
    flat: r = !1
}) => {
    const a = i => s && s(i),
        c = o === t;
    return jsx("button", {
        className: cn(styles$$.tabButton, r && styles$$.flatTabButton, !r && styles$$.solidTabButton, c && styles$$.isActive, n && n),
        onClick: () => a(t || 0),
        type: "button",
        role: "tab",
        "aria-selected": "false",
        tabIndex: -1,
        children: e
    })
};
Tab$1.displayName = "Tab";
const root$f = "_root_1ii32_1",
    alignLeft = "_align-left_1ii32_10",
    alignCenter = "_align-center_1ii32_14",
    alignRight = "_align-right_1ii32_18",
    noWrap = "_noWrap_1ii32_22",
    uppercase = "_uppercase_1ii32_26",
    weightBold = "_weight-bold_1ii32_30",
    strike = "_strike_1ii32_38",
    sfRounded = "_sfRounded_1ii32_42",
    margin0 = "_margin-0_1ii32_46",
    margin0020 = "_margin-0-0-2-0_1ii32_50",
    margin0040 = "_margin-0-0-4-0_1ii32_54",
    margin0060 = "_margin-0-0-6-0_1ii32_58",
    margin0080 = "_margin-0-0-8-0_1ii32_62",
    margin00100 = "_margin-0-0-10-0_1ii32_66",
    margin00120 = "_margin-0-0-12-0_1ii32_70",
    margin00140 = "_margin-0-0-14-0_1ii32_74",
    margin00160 = "_margin-0-0-16-0_1ii32_78",
    margin00180 = "_margin-0-0-18-0_1ii32_82",
    margin00200 = "_margin-0-0-20-0_1ii32_86",
    margin00240 = "_margin-0-0-24-0_1ii32_90",
    margin160 = "_margin-16-0_1ii32_94",
    margin24020 = "_margin-24-0-2-0_1ii32_98",
    margin24040 = "_margin-24-0-4-0_1ii32_102",
    margin24060 = "_margin-24-0-6-0_1ii32_106",
    margin24080 = "_margin-24-0-8-0_1ii32_110",
    margin240100 = "_margin-24-0-10-0_1ii32_114",
    margin240120 = "_margin-24-0-12-0_1ii32_118",
    colorPrimary = "_color-primary_1ii32_122",
    colorSecondary = "_color-secondary_1ii32_126",
    colorTertiary$1 = "_color-tertiary_1ii32_130",
    colorFourth = "_color-fourth_1ii32_134",
    colorRed = "_color-red_1ii32_138",
    colorGreen = "_color-green_1ii32_142",
    colorWhite = "_color-white_1ii32_146",
    colorLink = "_color-link_1ii32_150",
    colorDark = "_color-dark_1ii32_154",
    typefaceTitleLarge = "_typeface-title-large_1ii32_158",
    typefaceTitle0 = "_typeface-title-0_1ii32_164",
    typefaceTitle1 = "_typeface-title-1_1ii32_170",
    typefaceTitle2 = "_typeface-title-2_1ii32_176",
    weightSemibold = "_weight-semibold_1ii32_181",
    typefaceTitle3 = "_typeface-title-3_1ii32_185",
    typefaceHeadline = "_typeface-headline_1ii32_197",
    typefaceBody = "_typeface-body_1ii32_203",
    weightLightbold = "_weight-lightbold_1ii32_208",
    typefaceCallout = "_typeface-callout_1ii32_215",
    typefaceSubheadline1 = "_typeface-subheadline-1_1ii32_224",
    typefaceSubheadline2 = "_typeface-subheadline-2_1ii32_233",
    typefaceFootnote = "_typeface-footnote_1ii32_242",
    typefaceCaption1 = "_typeface-caption-1_1ii32_248",
    typefaceCaption2 = "_typeface-caption-2_1ii32_254",
    typefaceLabel = "_typeface-label_1ii32_260",
    asLink = "_asLink_1ii32_268",
    styles$_ = {
        root: root$f,
        "align-left": "_align-left_1ii32_10",
        alignLeft,
        "align-center": "_align-center_1ii32_14",
        alignCenter,
        "align-right": "_align-right_1ii32_18",
        alignRight,
        noWrap,
        uppercase,
        "weight-bold": "_weight-bold_1ii32_30",
        weightBold,
        strike,
        sfRounded,
        "margin-0": "_margin-0_1ii32_46",
        margin0,
        "margin-0-0-2-0": "_margin-0-0-2-0_1ii32_50",
        margin0020,
        "margin-0-0-4-0": "_margin-0-0-4-0_1ii32_54",
        margin0040,
        "margin-0-0-6-0": "_margin-0-0-6-0_1ii32_58",
        margin0060,
        "margin-0-0-8-0": "_margin-0-0-8-0_1ii32_62",
        margin0080,
        "margin-0-0-10-0": "_margin-0-0-10-0_1ii32_66",
        margin00100,
        "margin-0-0-12-0": "_margin-0-0-12-0_1ii32_70",
        margin00120,
        "margin-0-0-14-0": "_margin-0-0-14-0_1ii32_74",
        margin00140,
        "margin-0-0-16-0": "_margin-0-0-16-0_1ii32_78",
        margin00160,
        "margin-0-0-18-0": "_margin-0-0-18-0_1ii32_82",
        margin00180,
        "margin-0-0-20-0": "_margin-0-0-20-0_1ii32_86",
        margin00200,
        "margin-0-0-24-0": "_margin-0-0-24-0_1ii32_90",
        margin00240,
        "margin-16-0": "_margin-16-0_1ii32_94",
        margin160,
        "margin-24-0-2-0": "_margin-24-0-2-0_1ii32_98",
        margin24020,
        "margin-24-0-4-0": "_margin-24-0-4-0_1ii32_102",
        margin24040,
        "margin-24-0-6-0": "_margin-24-0-6-0_1ii32_106",
        margin24060,
        "margin-24-0-8-0": "_margin-24-0-8-0_1ii32_110",
        margin24080,
        "margin-24-0-10-0": "_margin-24-0-10-0_1ii32_114",
        margin240100,
        "margin-24-0-12-0": "_margin-24-0-12-0_1ii32_118",
        margin240120,
        "color-primary": "_color-primary_1ii32_122",
        colorPrimary,
        "color-secondary": "_color-secondary_1ii32_126",
        colorSecondary,
        "color-tertiary": "_color-tertiary_1ii32_130",
        colorTertiary: colorTertiary$1,
        "color-fourth": "_color-fourth_1ii32_134",
        colorFourth,
        "color-red": "_color-red_1ii32_138",
        colorRed,
        "color-green": "_color-green_1ii32_142",
        colorGreen,
        "color-white": "_color-white_1ii32_146",
        colorWhite,
        "color-link": "_color-link_1ii32_150",
        colorLink,
        "color-dark": "_color-dark_1ii32_154",
        colorDark,
        "typeface-title-large": "_typeface-title-large_1ii32_158",
        typefaceTitleLarge,
        "typeface-title-0": "_typeface-title-0_1ii32_164",
        typefaceTitle0,
        "typeface-title-1": "_typeface-title-1_1ii32_170",
        typefaceTitle1,
        "typeface-title-2": "_typeface-title-2_1ii32_176",
        typefaceTitle2,
        "weight-semibold": "_weight-semibold_1ii32_181",
        weightSemibold,
        "typeface-title-3": "_typeface-title-3_1ii32_185",
        typefaceTitle3,
        "typeface-headline": "_typeface-headline_1ii32_197",
        typefaceHeadline,
        "typeface-body": "_typeface-body_1ii32_203",
        typefaceBody,
        "weight-lightbold": "_weight-lightbold_1ii32_208",
        weightLightbold,
        "typeface-callout": "_typeface-callout_1ii32_215",
        typefaceCallout,
        "typeface-subheadline-1": "_typeface-subheadline-1_1ii32_224",
        typefaceSubheadline1,
        "typeface-subheadline-2": "_typeface-subheadline-2_1ii32_233",
        typefaceSubheadline2,
        "typeface-footnote": "_typeface-footnote_1ii32_242",
        typefaceFootnote,
        "typeface-caption-1": "_typeface-caption-1_1ii32_248",
        typefaceCaption1,
        "typeface-caption-2": "_typeface-caption-2_1ii32_254",
        typefaceCaption2,
        "typeface-label": "_typeface-label_1ii32_260",
        typefaceLabel,
        asLink
    },
    Text = ({
        as: e = "div",
        children: s,
        type: t = "body",
        weight: n,
        color: o,
        noWrap: r,
        align: a,
        left: c,
        center: i,
        right: l,
        className: d,
        uppercase: _,
        margin: p,
        inset: u,
        sfRounded: m,
        semibold: x,
        lightbold: f,
        bold: g,
        medium: C,
        asLink: h,
        ...y
    }) => {
        let k = null;
        c && (k = "left"), i && (k = "center"), l && (k = "right"), a && (k = a);
        const b = cn(styles$_.root, t && styles$_[`typeface-${t}`], k && styles$_[`align-${k}`], p && styles$_[`margin-${p}`], n && styles$_[`weight-${n}`], x && styles$_["weight-semibold"], f && styles$_["weight-lightbold"], g && styles$_["weight-bold"], C && styles$_["weight-medium"], o && styles$_[`color-${o}`], m && styles$_.sfRounded, r && styles$_.noWrap, _ && styles$_.uppercase, u && styles$_.inset, h && styles$_.asLink, d);
        return jsx(e, {
            className: b,
            ...y,
            children: s
        })
    },
    root$e = "_root_oq8o0_1",
    styleTypeDecimal = "_style-type-decimal_oq8o0_14",
    styles$Z = {
        root: root$e,
        "style-type-decimal": "_style-type-decimal_oq8o0_14",
        styleTypeDecimal
    },
    root$d = "_root_10ow9_1",
    contentWrapper = "_contentWrapper_10ow9_9",
    opened = "_opened_10ow9_18",
    content$2 = "_content_10ow9_9",
    typeSuccess = "_type-success_10ow9_38",
    typeLoading = "_type-loading_10ow9_47",
    spin = "_spin_10ow9_1",
    styles$Y = {
        root: root$d,
        contentWrapper,
        opened,
        content: content$2,
        "type-success": "_type-success_10ow9_38",
        typeSuccess,
        "type-loading": "_type-loading_10ow9_47",
        typeLoading,
        spin
    },
    ToastElement = ({
        children: e,
        id: s,
        options: t
    }) => {
        const {
            time: n,
            type: o
        } = t, r = n || 4e3, {
            removeToast: a
        } = useToast(), [c, i] = reactExports.useState(!1);
        return reactExports.useEffect(() => {
            const l = setTimeout(() => {
                    a(s)
                }, r + 1e3),
                d = setTimeout(() => {
                    i(!1)
                }, r);
            return () => {
                clearTimeout(l), clearTimeout(d)
            }
        }, [s, a]), reactExports.useEffect(() => {
            setTimeout(() => {
                i(!0)
            }, 50)
        }, []), jsx("div", {
            className: cn(styles$Y.root),
            children: jsx("div", {
                className: cn(styles$Y.contentWrapper, c && styles$Y.opened, styles$Y[`type-${o||"success"}`]),
                children: jsxs("div", {
                    className: styles$Y.content,
                    children: [!o || o === "success" ? jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "28",
                        height: "28",
                        viewBox: "0 0 28 28",
                        fill: "none",
                        children: jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 25C20.0751 25 25 20.0751 25 14C25 7.92487 20.0751 3 14 3C7.92487 3 3 7.92487 3 14C3 20.0751 7.92487 25 14 25ZM19.1826 9.91716C19.413 9.54016 19.2942 9.04777 18.9172 8.81737C18.5402 8.58698 18.0478 8.70584 17.8174 9.08284L12.8851 17.1538L10.1021 13.9732C9.81112 13.6407 9.30571 13.607 8.9732 13.8979C8.64069 14.1889 8.60699 14.6943 8.89794 15.0268L12.3979 19.0268C12.5656 19.2184 12.8144 19.3188 13.068 19.2971C13.3217 19.2755 13.5499 19.1344 13.6826 18.9172L19.1826 9.91716Z",
                            fill: "white"
                        })
                    }) : null, o === "loading" ? jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "28",
                        height: "28",
                        viewBox: "0 0 28 28",
                        fill: "none",
                        children: jsx("path", {
                            d: "M23.165 14C23.165 12.4319 22.7626 10.89 21.9964 9.52179C21.2302 8.1536 20.1257 7.0049 18.7887 6.18555C17.4516 5.36621 15.9267 4.90363 14.3598 4.84207C12.7929 4.7805 11.2364 5.12201 9.83918 5.83393C8.44196 6.54584 7.25079 7.60435 6.37958 8.9082C5.50838 10.2121 4.98629 11.7176 4.86325 13.2809C4.74022 14.8442 5.02036 16.4129 5.67687 17.837C6.33338 19.2611 7.34431 20.4929 8.61295 21.4146",
                            stroke: "white",
                            strokeWidth: "2.33",
                            strokeLinecap: "round"
                        })
                    }) : null, o === "error" ? jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "28",
                        height: "28",
                        viewBox: "0 0 28 28",
                        fill: "none",
                        children: jsx("path", {
                            d: "M6 6L22 22M6 22L22 6",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        })
                    }) : null, e]
                })
            })
        }, s)
    },
    ToastContainer = ({
        toasts: e
    }) => reactDomExports.createPortal(e.map(s => jsx(ToastElement, {
        id: s.id,
        options: s.options,
        children: s.options.message
    }, s.id)), document.body),
    ToastContext = React.createContext({
        addToast: e => {},
        removeToast: e => {},
        hideToasts: () => {}
    });
let id = 1;

function ToastProvider({
    children: e
}) {
    const [s, t] = reactExports.useState([]), n = reactExports.useCallback(a => {
        t(c => [{
            id: id++,
            options: a
        }])
    }, [t]), o = reactExports.useCallback(a => {
        t(c => c.filter(i => i.id !== a))
    }, [t]), r = reactExports.useCallback(() => {
        t([])
    }, [t]);
    return jsxs(ToastContext.Provider, {
        value: {
            addToast: n,
            removeToast: o,
            hideToasts: r
        },
        children: [jsx(ToastContainer, {
            toasts: s
        }), e]
    })
}
const useToast = () => reactExports.useContext(ToastContext);

function useInterval(e, s) {
    const t = reactExports.useRef();
    reactExports.useEffect(() => {
        t.current = e
    }, [e]), reactExports.useEffect(() => {
        function n() {
            t.current && t.current()
        }
        if (s) {
            let o = setInterval(n, s);
            return () => clearInterval(o)
        }
    }, [s])
}
const useToggle = (e = !1) => {
    const [s, t] = reactExports.useState(e), n = reactExports.useCallback(() => t(o => !o), []);
    return [s, n, t]
};

function getTheme() {
    return navigator.userAgent.match(/iOS|iPhone OS|iPhone|iPod|iPad|Mac OS/i) ? "ios" : "material"
}
React.createContext({
    theme: getTheme(),
    mode: "dark"
});
const extractInitials = (e, s = "") => e ? e.split(/\s/).reduce((t, n) => t += n.slice(0, 1), "").toUpperCase() : s,
    index = "";
class LocalStorageService {
    static setItem(s, t, n = !0) {
        if (n && t == null) return localStorage.removeItem(s);
        localStorage.setItem(s, JSON.stringify(t))
    }
    static setItemWithExpiry(s, t, n) {
        const r = {
            value: t,
            expiry: new Date().getTime() + n
        };
        localStorage.setItem(s, JSON.stringify(r))
    }
    static getItemWithExpiry(s) {
        const t = localStorage.getItem(s);
        if (!t) return {
            value: null,
            isExpired: !1
        };
        const n = JSON.parse(t);
        return new Date().getTime() > n.expiry ? (localStorage.removeItem(s), {
            value: n.value,
            isExpired: !0
        }) : {
            value: n.value,
            isExpired: !1
        }
    }
    static getItem(s, t) {
        const n = localStorage.getItem(s);
        return n !== null ? JSON.parse(n) : t || null
    }
}
const accessTokenName = "access-token";
class AuthService {
    static setCredentials(s) {
        LocalStorageService.setItem(accessTokenName, s.accessToken)
    }
    static getCredentials() {
        return config$1.isDev && config$1.accessToken ? {
            accessToken: config$1.accessToken
        } : {
            accessToken: LocalStorageService.getItem(accessTokenName)
        }
    }
    static isAuth() {
        return !!AuthService.getCredentials().accessToken
    }
    static clearCredentials() {
        LocalStorageService.setItem(accessTokenName, null)
    }
}
const apiHost = config$1.apiHost,
    api = ky.extend({
        hooks: {
            beforeRequest: [e => {
                const {
                    accessToken: s
                } = AuthService.getCredentials();
                s && e.headers.set("Authorization", `Bearer ${s}`)
            }],
            afterResponse: [(e, s, t) => {
                t.status === 401 && ApiService.after401()
            }]
        }
    }),
    ApiService = {
        after401: () => {},
        get: async ({
            endpoint: e,
            options: s,
            host: t
        }) => await api.get(`${t||apiHost}${e}`, {
            searchParams: s,
            retry: 3,
            headers: {
                Auth: "6"
            }
        }).json(),
        post: async ({
            endpoint: e,
            options: s,
            data: t,
            formData: n
        }) => new Promise(async (o, r) => {
            const a = { ...s,
                retry: 3,
                headers: {
                    Auth: "6"
                }
            };
            t && (a.json = t), n && (a.body = n);
            const c = await api.post(`${apiHost}${e}`, a).json().catch(async i => {
                const l = await i.response;
                o(l)
            });
            o(c)
        }),
        delete: async ({
            endpoint: e
        }) => await api.delete(`${apiHost}${e}`).json(),
        postWithBodyResponse: async ({
            endpoint: e,
            options: s,
            data: t,
            formData: n
        }) => new Promise(async (o, r) => {
            const a = { ...s
            };
            t && (a.json = t), n && (a.body = n), a.throwHttpErrors = !1;
            const c = await api.post(`${apiHost}${e}`, a).json();
            return o(c)
        })
    };
new TonConnect({
    manifestUrl: config$1.tonConnectManifestUrl,
    walletsListSource: config$1.tonConnectWalletsListSource
});
const dailyTasksData = [{
        id: 3,
        title: "Turbo",
        description: jsxs(Fragment, {
            children: ["Get a Turbo boost now.", jsx("br", {}), " Be ready to catch the rocket!"]
        }),
        icon: "🚀",
        type: "oneTurbo",
        max: 3,
        completions: 0,
        isCompleted: !1
    }, {
        id: 2,
        title: "Full Energy",
        description: jsxs(Fragment, {
            children: ["Recharge your energy to the limit ", jsx("br", {}), "and do another round of mining"]
        }),
        icon: "⚡️",
        type: "fullEnergy",
        max: 3,
        completions: 0,
        isCompleted: !1
    }],
    leagueTasksData = [{
        id: 7,
        title: "Silver league bonus",
        icon: "🏆",
        type: "silverLeague",
        coins: 125e3,
        isCompleted: !1
    }, {
        id: 8,
        title: "Gold league bonus",
        icon: "🏆",
        type: "goldLeague",
        coins: 25e4,
        isCompleted: !1
    }, {
        id: 9,
        title: "Platinum league bonus",
        icon: "🏆",
        type: "platinumLeague",
        coins: 5e5,
        isCompleted: !1
    }, {
        id: 10,
        title: "Diamond league bonus",
        icon: "🏆",
        type: "diamondLeague",
        coins: 1e6,
        isCompleted: !1
    }],
    partnerTasksData = [{
        id: 27,
        type: "challengeCompleted",
        title: "Whale",
        icon: "https://cdn.joincommunity.xyz/clicker/task-whale.png",
        imageSize: "72",
        minLeagueId: 2,
        challengeId: 77,
        imageType: "cover-src",
        coins: 1e5,
        isCompleted: !1,
        exceptedLocale: ["fa", "id"]
    }, {
        id: 37,
        type: "challengeCompleted",
        title: "Tonstarter Launchpad",
        icon: "https://cdn.joincommunity.xyz/clicker/task-tonstarter.png?1",
        imageSize: "72",
        minLeagueId: 2,
        challengeId: 146,
        imageType: "cover-src",
        coins: 1e5,
        isCompleted: !1,
        exceptedLocale: ["fa", "id"]
    }, {
        id: 43,
        type: "challengeCompleted",
        title: "Poker competition",
        icon: "https://cdn.joincommunity.xyz/clicker/task-poker-competition.png",
        imageSize: "72",
        minLeagueId: 2,
        challengeId: 102,
        imageType: "cover-src",
        coins: 1e5,
        isCompleted: !1,
        exceptedLocale: ["fa", "id"]
    }, {
        id: 53,
        type: "challengeCompleted",
        title: "Notcoin Fam",
        icon: "https://cdn.joincommunity.xyz/clicker/task-notcoin.png",
        imageSize: "72",
        minLeagueId: 2,
        challengeId: 170,
        imageType: "cover-src",
        coins: 1e5,
        isCompleted: !1,
        locale: ["ru"]
    }, {
        id: 54,
        type: "challengeCompleted",
        title: "گروه ناتکوین Notcoin",
        icon: "https://cdn.joincommunity.xyz/clicker/task-notcoin.png",
        imageSize: "72",
        minLeagueId: 2,
        challengeId: 171,
        imageType: "cover-src",
        coins: 1e5,
        isCompleted: !1,
        locale: ["fa"]
    }, {
        id: 58,
        type: "challengeCompleted",
        title: "TON channels",
        icon: "🗂",
        imageSize: "36",
        minLeagueId: 2,
        challengeId: 168,
        imageType: "cover-emoji",
        coins: 0,
        isCompleted: !1,
        exceptedLocale: ["fa", "id", "ru", "be", "az", "kk", "tg", "tk", "uz", "uk", "ua"]
    }, {
        id: 59,
        type: "challengeCompleted",
        title: "TON каналы",
        icon: "🗂",
        imageSize: "36",
        minLeagueId: 2,
        challengeId: 169,
        imageType: "cover-emoji",
        coins: 0,
        isCompleted: !1,
        locale: ["ru", "be", "az", "kk", "tg", "tk", "uz", "uk", "ua"]
    }, {
        id: 62,
        type: "challengeCompleted",
        title: "Orbs Network",
        icon: "🌐",
        imageSize: "36",
        minLeagueId: 2,
        challengeId: 180,
        imageType: "cover-emoji",
        coins: 1e5,
        isCompleted: !1,
        exceptedLocale: ["fa", "id"]
    }],
    skinsData = {
        default: {
            title: "Basic",
            description: "Not all treasure is silver and gold, mate.",
            icon: "https://imagedelivery.net/B4lKhBZXBr2ZrOdPiT3vew/e79283e4-6b81-4398-805b-7b24df774900/public"
        },
        galleon: {
            title: "Galleon Coin",
            description: "The gold ones are Galleons. Seventeen silver Sickles to a Galleon and twenty-nine Knuts to a Sickle, it's easy enough.",
            icon: "https://cdn.joincommunity.xyz/clicker/skin-galleon.png"
        },
        fallout: {
            title: "Nuka-Cola Coin",
            description: jsxs(Fragment, {
                children: ["If we get out of this alive,", jsx("br", {}), " the Nuka-Cola's on me."]
            }),
            icon: "https://cdn.joincommunity.xyz/clicker/skin-fallout.png"
        },
        pirate: {
            title: "Pirates Skin",
            description: "Do you fancy sailing the high seas like a Pirates of the Caribbean character? Grab a skin!",
            icon: "https://cdn.joincommunity.xyz/clicker/skin-pirates.png"
        },
        vi: {
            title: "VI",
            description: "Do you fancy sailing the high seas like a Pirates of the Caribbean character? Grab a skin!",
            icon: "https://cdn.joincommunity.xyz/clicker/gta_notcoin.png"
        },
        eggs: {
            title: "Egg Fight Club",
            description: jsxs(Fragment, {
                children: ["You have an egg ", jsx("br", {}), "Or you are an egg"]
            }),
            icon: "https://cdn.joincommunity.xyz/clicker/task-egg-fight-club.png?1",
            challengeId: 111,
            isCompleted: !1,
            image: "eggs",
            price: 0,
            id: 42
        }
    },
    useBoostStore = create((e, s) => ({
        isLoaded: !1,
        partnerBoosts: [],
        classicBoosts: [],
        specialBoosts: [],
        leagueBoosts: [],
        skins: [],
        tasks: [],
        currentSkin: LocalStorageService.getItem("skin", "default"),
        fetchBoosts: async () => {
            const {
                ok: t,
                data: n
            } = await ApiService.get({
                endpoint: "/clicker/store/merged"
            });
            if (t && n && n.length) {
                const o = n.filter(i => i.isPartner && i.challengeId && [71, 68].indexOf(i.challengeId) === -1),
                    r = n.filter(i => !i.isPartner && i.type !== "skin"),
                    a = n.filter(i => i.type === "skin" && i.id !== 17 && i.id !== 24);
                a.push(skinsData.eggs);
                const c = n.filter(i => i.challengeId && [71, 68].indexOf(i.challengeId) !== -1);
                e({
                    partnerBoosts: o,
                    classicBoosts: r,
                    specialBoosts: c,
                    skins: a,
                    isLoaded: !0
                })
            } else console.error(n)
        },
        setCurrentSkin: t => {
            LocalStorageService.setItem("skin", t), e({
                currentSkin: t
            })
        }
    })),
    fetchBidsApi = async () => {
        const {
            ok: e,
            data: s
        } = await ApiService.get({
            endpoint: "/clicker/bid/board"
        });
        return {
            ok: e,
            data: s || []
        }
    },
    generateBidPaymentLinkApi = async (e, s) => {
        const {
            ok: t,
            data: n
        } = await ApiService.post({
            endpoint: `/clicker/bid/${e}/${s}`
        });
        return {
            ok: t,
            data: n
        }
    },
    fetchBidStatusApi = async () => {
        const {
            ok: e,
            data: s
        } = await ApiService.get({
            endpoint: "/clicker/bid/status"
        });
        return {
            ok: e,
            data: s
        }
    },
    leaderboardNormalizer = ({
        rawItem: e,
        time: s,
        type: t,
        teamId: n,
        userId: o
    }) => t === "referral" ? {
        id: e.profile.userId,
        userId: e.profile.userId,
        title: e.profile.user.firstName ? ? e.profile.user.username,
        points: e.count,
        bonus: e.bonus,
        img: e.profile.avatar
    } : t === "team" ? {
        id: e.id,
        title: e.name,
        points: e.lcoins,
        img: e.logo,
        link: `/clicker/squad/${e.id}`
    } : {
        id: e.user.id,
        title: e.user.firstName + " " + (e.user.lastName ? ? ""),
        points: e.lcoins,
        img: e.avatar,
        userId: e.userId
    },
    frensNormalizer = ({
        rawItem: e
    }) => ({
        id: e.userId,
        name: e.user.firstName + " " + (e.user.lastName ? ? ""),
        reward: e.reward,
        score: e.user.clickerProfile.totalCoins,
        leagueId: e.user.clickerProfile.leagueId,
        isPremium: e.user.isPremium,
        avatar: e.user.clickerProfile.avatar,
        link: e.user.username ? `https://t.me/${e.user.username}` : ""
    }),
    fetchLeaderboard = async ({
        type: e,
        league: s,
        time: t,
        squadId: n
    }) => {
        const o = {};
        n && (o.id = n);
        const {
            ok: r,
            data: a
        } = await ApiService.get({
            options: o,
            endpoint: `/clicker/league/leaderboard/public/${e}/${s}/${t}`
        });
        if (r) {
            const c = a.leaderboard.map(i => leaderboardNormalizer({
                rawItem: i,
                time: t,
                type: e,
                teamId: n
            }));
            return a.rank ? {
                ok: r,
                items: c,
                rank: a.rank,
                score: a.score
            } : {
                ok: r,
                items: c
            }
        }
        return {
            ok: r,
            items: []
        }
    },
    fetchReferralLeaderboardApi = async () => {
        const {
            ok: e,
            data: s
        } = await ApiService.get({
            endpoint: "/clicker/referral/private/leaderboard"
        }), t = await fetchFrensStatApi();
        if (e) {
            const n = s.map(o => leaderboardNormalizer({
                rawItem: o,
                type: "referral"
            }));
            return {
                ok: e,
                items: n,
                rank: t.data ? t.data.rank : 0,
                score: t.data ? t.data.count : 0,
                bonus: t.data ? t.data.bonus : 0
            }
        }
        return {
            ok: e,
            items: []
        }
    },
    activeTurboApi = async () => {
        const e = await ApiService.post({
            endpoint: "/clicker/core/active-turbo"
        });
        if (e.ok) return e.data[0];
        throw e.data
    },
    checkTurboApi = async () => {
        const e = await ApiService.post({
            endpoint: "/clicker/core/check-turbo"
        });
        if (e.ok) return e.data;
        throw e.data
    },
    saveClickerCountApi = async (count, hash, turbo) => {
        var e;
        const response = await ApiService.post({
            endpoint: "/clicker/core/click",
            data: {
                count,
                webAppData: (e = window == null ? void 0 : window.Telegram) == null ? void 0 : e.WebApp.initData,
                hash: hash ? eval(hash.map(s => atob(s)).join("+")) : void 0,
                turbo: turbo ? !0 : void 0
            }
        }).catch(s => {
            throw s
        });
        if (response.ok) return response.data[0];
        throw response.data
    },
    buyBoost = async e => await ApiService.postWithBodyResponse({
        endpoint: `/clicker/store/buy/${e}`
    }),
    claimPartnerReward = async e => await ApiService.postWithBodyResponse({
        endpoint: `/clicker/store/claim/${e}`
    }),
    fetchSquadInfo = async e => {
        const {
            ok: s,
            data: t
        } = await ApiService.get({
            endpoint: `/clicker/profile/team/${e}?count=1`
        });
        return s && t ? t[0] : null
    },
    fetchRobotBalance = async () => {
        const {
            ok: e,
            data: s
        } = await ApiService.get({
            endpoint: "/clicker/core/robot"
        });
        return {
            ok: e,
            data: s || 0
        }
    },
    claimRobotMinedCoins = async () => {
        const {
            ok: e,
            data: s
        } = await ApiService.post({
            endpoint: "/clicker/core/robot"
        });
        if (e && s) return s;
        throw new Error("Claim failed")
    },
    fetchFrens = async () => {
        const e = await ApiService.get({
            endpoint: "/clicker/referral/mine"
        });
        return e.ok ? e.data.map(t => frensNormalizer({
            rawItem: t
        })).sort((t, n) => Number(n.reward) - Number(t.reward)) : null
    },
    fetchFrensStatApi = async () => {
        const {
            ok: e,
            data: s
        } = await ApiService.get({
            endpoint: "/clicker/referral/private/position"
        });
        return {
            ok: e,
            data: s ? s[0] : {}
        }
    },
    leaveSquadApi = () => ApiService.post({
        endpoint: "/clicker/squad/leave"
    }),
    joinSquadApi = e => ApiService.post({
        endpoint: `/clicker/squad/join/${e}`
    }),
    fetchStatistics = async () => {
        const {
            ok: e,
            data: s
        } = await ApiService.get({
            endpoint: "/clicker/core/stat"
        });
        return {
            ok: e,
            data: s || []
        }
    },
    fetchAllCompletedTasksApi = async () => {
        const {
            ok: e,
            data: s
        } = await ApiService.get({
            endpoint: "/clicker/task/combine-completed"
        });
        return {
            ok: e,
            data: s || []
        }
    },
    completeTaskApi = async e => {
        const {
            ok: s,
            data: t
        } = await ApiService.post({
            endpoint: `/clicker/task/${e}`
        });
        return {
            ok: s,
            data: t || []
        }
    },
    checkCompletionTaskApi = async (e, s) => {
        const {
            ok: t,
            data: n
        } = await ApiService.get({
            endpoint: `/public/challenge/${e}/apply/${s}`,
            host: "https://api.joincommunity.xyz"
        });
        return {
            ok: t,
            data: n ? n[0] : []
        }
    },
    fetchUserProfileApi = async () => {
        const {
            ok: e,
            data: s
        } = await ApiService.get({
            endpoint: "/user/profile"
        });
        return {
            ok: e,
            data: s.length ? s[0] : {}
        }
    },
    fetchUserRankApi = async e => {
        const {
            ok: s,
            data: t
        } = await ApiService.get({
            endpoint: `/clicker/profile/board-rank/${e}`
        });
        return typeof t == "string" ? {
            ok: s,
            data: JSON.parse(t)
        } : {
            ok: s,
            data: t
        }
    },
    createSelectors = e => {
        let s = e;
        s.store = {};
        for (let t of Object.keys(s.getState())) s.store[t] = () => s(n => n[t]);
        return s
    },
    diffInSeconds = (e, s) => {
        const t = s.getTime() - e.getTime();
        return Math.floor(t / 1e3)
    },
    calculateAvailableClicks = (e, s) => {
        if (!e) return 0;
        const t = (e == null ? void 0 : e.miningPerTime) ? ? 1,
            o = diffInSeconds(new Date(s), new Date) * t + e.lastAvailableCoins;
        return o > e.limitCoins ? e.limitCoins : o
    },
    calculateClickValue = (e, s, t) => e && s && t ? Number(s.multiple) * Number(t) : t || 1,
    calculateAvailableToClick = (e, s, t) => {
        const n = e + s;
        return n > t ? t : n
    },
    calculateClicksThreshold = (e, s, t) => {
        const o = 159 * (calculateClickValue(s, t, e.multipleClicks) ? ? 1);
        return o > e.limitCoins ? e.limitCoins : o
    },
    LocalStorage = {
        setProfile: e => LocalStorageService.setItem("profile", e),
        getProfile: () => LocalStorageService.getItem("profile"),
        updateProfile: e => {
            const t = { ...LocalStorageService.getItem("profile"),
                ...e
            };
            return LocalStorageService.setItem("profile", t), t
        },
        addUnsaved: e => {
            const s = Number(localStorage.getItem("unsaved")) || 0;
            LocalStorageService.setItem("unsaved", String(s + e))
        },
        getUnsaved: () => Number(localStorage.getItem("unsaved")) || 0,
        reduceUnsaved: e => {
            const s = Number(localStorage.getItem("unsaved"));
            if (s <= 0) return 0;
            LocalStorageService.setItem("unsaved", String(s - e))
        },
        saveClicks: e => {
            const s = localStorage.getItem("profile");
            if (!s) return null;
            JSON.parse(s).balanceCoins
        }
    },
    NEWBIE_UNLOCK_SCORE = 14,
    useClickerStore = create((e, s) => ({
        userProfile: null,
        isLoading: !0,
        score: 0,
        unsavedClicks: 0,
        availableToClick: 0,
        lastTimeClicked: 0,
        lastMiningAt: "",
        robotMined: 0,
        cooldown: 0,
        hash: void 0,
        isTurboMode: !1,
        turboSettings: null,
        turboGift: !1,
        turboGiftExpire: 0,
        clicksThreshold: 0,
        clickValue: 0,
        turboTimes: 0,
        isSaving: !1,
        isSleep: !1,
        isNewbie: !0,
        clickerTeam: null,
        fetchClickerUserProfile: async () => {
            let t;
            const n = await ApiService.get({
                endpoint: "/clicker/profile"
            });
            return n.ok && (t = n.data[0]), t ? (s().setClickerProfile(t), t) : null
        },
        forceFetchAndUpdateClickerUserProfile: async () => {
            const t = await ApiService.get({
                endpoint: "/clicker/profile"
            });
            if (t.ok) {
                const n = t.data[0];
                s().setClickerProfile(n)
            }
            return null
        },
        setClickerProfile: t => {
            const n = LocalStorage.updateProfile(t);
            e({
                userProfile: n
            }), s().initClickerStore(n)
        },
        initClickerStore: async t => {
            const n = calculateAvailableClicks(t, t.lastMiningAt);
            e({
                userProfile: t,
                score: Number(t.balanceCoins),
                availableToClick: n,
                lastMiningAt: t.lastMiningAt,
                cooldown: 0,
                unsavedClicks: 0,
                clickValue: t.multipleClicks,
                clicksThreshold: calculateClicksThreshold(t, s().isTurboMode, s().turboSettings),
                turboTimes: t.turboTimes,
                isSaving: !1,
                isSleep: !1,
                isLoading: !1,
                isNewbie: t.balanceCoins < NEWBIE_UNLOCK_SCORE
            })
        },
        fetchTeam: async () => {
            var o;
            const t = (o = s().userProfile) == null ? void 0 : o.teamId,
                n = await ApiService.get({
                    endpoint: `/clicker/profile/team/${t}`
                });
            return n.ok ? (e({
                clickerTeam: n.data[0]
            }), n.data[0]) : null
        },
        click: () => {
            const t = s().isTurboMode,
                n = s().turboSettings,
                o = calculateClickValue(t, n, s().clickValue),
                r = t ? s().availableToClick : s().availableToClick - o;
            if (n && n.expire - 2e3 < Date.now() && (s().saveClicks(), s().switchTurbo(!1)), r <= 0) {
                const a = o + r;
                e({
                    unsavedClicks: s().unsavedClicks + a,
                    score: s().score + a,
                    lastTimeClicked: Date.now(),
                    availableToClick: 0,
                    cooldown: 10
                })
            } else {
                const a = s().score + o;
                e({
                    unsavedClicks: s().unsavedClicks + o,
                    score: a,
                    isNewbie: a < NEWBIE_UNLOCK_SCORE,
                    lastTimeClicked: Date.now(),
                    availableToClick: r
                })
            }
            s().unsavedClicks > 0 && s().unsavedClicks >= s().clicksThreshold && !s().isSaving && s().saveClicks()
        },
        restoreClicks: () => {
            const t = s().userProfile;
            if (!t) return;
            const n = s().cooldown;
            if (s().availableToClick < t.limitCoins) {
                const o = calculateAvailableToClick(s().availableToClick, t.miningPerTime, t.limitCoins),
                    r = n > 0 ? n - 1 : n;
                e({
                    availableToClick: o,
                    cooldown: r
                })
            } else n > 0 && e({
                cooldown: n - 1
            })
        },
        checkTurboGiftValidity: () => {
            const t = s().turboGift,
                n = s().turboGiftExpire;
            t && n && n < Date.now() && e({
                turboGift: !1,
                turboGiftExpire: 0
            })
        },
        tryToSaveClicks: async t => {
            Date.now() - s().lastTimeClicked > t && s().unsavedClicks > 0 && await s().saveClicks()
        },
        saveClicks: async () => {
            var n;
            if (s().isSaving) return;
            const t = s().unsavedClicks;
            e({
                isSaving: !0,
                unsavedClicks: 0
            });
            try {
                const o = await saveClickerCountApi(t, s().hash, s().isTurboMode);
                s().setClickerProfile(o), e({
                    hash: o.hash,
                    isSaving: !1
                }), s().isTurboMode || setTimeout(() => s().checkTurbo(), 1e4)
            } catch (o) {
                console.error(o), e({
                    isSaving: !1
                }), ((o == null ? void 0 : o.message) == "Try Later" || ((n = o == null ? void 0 : o.response) == null ? void 0 : n.status) === 502) && e({
                    unsavedClicks: s().unsavedClicks + t
                })
            }
        },
        checkTurbo: async () => {
            if (!(s().turboTimes > 0 || s().isTurboMode || s().turboGift)) try {
                const t = await checkTurboApi();
                t != null && t.turbo && e({
                    turboGift: !0,
                    turboGiftExpire: Date.now() + 6e3
                })
            } catch (t) {
                console.error(t)
            }
        },
        switchTurbo: t => {
            const n = s().userProfile;
            n && (t ? activeTurboApi().then(o => {
                e({
                    isTurboMode: !0,
                    turboSettings: o,
                    clicksThreshold: calculateClicksThreshold(n, !0, o),
                    cooldown: 0
                })
            }) : e({
                isTurboMode: !1,
                turboSettings: null,
                clicksThreshold: calculateClicksThreshold(n, !1, null)
            }))
        },
        fetchRobotBalance: async () => {
            const {
                ok: t,
                data: n
            } = await fetchRobotBalance();
            return t && n && e({
                robotMined: n
            }), n
        },
        claimRobotMinedCoins: async () => await claimRobotMinedCoins().then(t => (e({
            robotMined: 0,
            score: Number(t.balanceCoins),
            lastMiningAt: t.lastMiningAt
        }), t)).catch(t => {
            throw new Error(t)
        }),
        freeTurbo: () => {
            const t = s().turboTimes;
            e({
                turboTimes: t + 1
            })
        },
        freeEnergyRestore: () => {
            const t = s().userProfile;
            t && e({
                availableToClick: t.limitCoins
            })
        }
    })),
    useStatisticsStore = create((e, s) => ({
        isLoading: !0,
        isLoaded: !1,
        onlineUsers: 0,
        onlineToday: 0,
        totalUsers: 0,
        totalBalance: 0,
        totalMined: 0,
        totalBurned: 0,
        frensAmount: 0,
        all: null,
        fetchStatistics: async () => {
            e({
                isLoading: !0
            });
            const {
                ok: t,
                data: n
            } = await fetchStatistics();
            if (t && n) {
                const {
                    online: o,
                    users: r,
                    balanceCoins: a,
                    minedCoins: c,
                    burnedCoins: i,
                    onlineToday: l
                } = n;
                e({
                    totalBalance: parseInt(a, 10),
                    totalMined: parseInt(c, 10),
                    totalBurned: parseInt(i, 10),
                    onlineUsers: o,
                    onlineToday: l,
                    totalUsers: r,
                    isLoading: !1,
                    isLoaded: !0
                })
            }
        },
        fetchFrensStatistics: async () => {
            e({
                isLoading: !0
            });
            const {
                ok: t,
                data: n
            } = await fetchFrensStatApi();
            if (t && n) {
                const {
                    count: o
                } = n;
                e({
                    frensAmount: o
                })
            }
        }
    })),
    onboardingTasksData = [{
        id: 6,
        title: "Join Squad",
        icon: "🐤",
        type: "joinsquad",
        coins: 5e3,
        isCompleted: !1
    }, {
        id: 5,
        title: "Invite 10 frens",
        icon: "🐥",
        type: "10Referral",
        coins: 1e5,
        isCompleted: !1
    }, {
        id: 4,
        title: "Earn 1000 Notcoin",
        icon: "🐣",
        type: "1000Clicks",
        coins: 3e3,
        isCompleted: !1
    }],
    specialTasksData = [{
        id: 13,
        title: "Telegram Premium",
        icon: "⭐",
        type: "telegramPremium",
        coins: 1e5,
        isCompleted: !1,
        imageSize: "36",
        imageType: "cover-emoji",
        minLeagueId: 1,
        challengeId: 71
    }, {
        id: 4,
        title: "Welcome to TON NFT",
        icon: "🖼️",
        type: "welcomeToTon",
        coins: 1e5,
        isCompleted: !1,
        imageSize: "36",
        imageType: "cover-emoji",
        minLeagueId: 1,
        challengeId: 68
    }, {
        id: 42,
        type: "challengeCompleted",
        title: "Egg Fight Club",
        icon: "https://cdn.joincommunity.xyz/clicker/task-egg-fight-club.png",
        imageSize: "72",
        minLeagueId: 2,
        challengeId: 111,
        imageType: "cover-src",
        coins: 25e4,
        isCompleted: !1,
        exceptedLocale: ["fa", "id"]
    }, {
        id: 44,
        type: "challengeCompleted",
        title: "Create TON Space",
        icon: "https://cdn.joincommunity.xyz/clicker/task-wallet.png",
        imageSize: "72",
        minLeagueId: 2,
        challengeId: 106,
        imageType: "cover-src",
        coins: 15e4,
        isCompleted: !1,
        exceptedLocale: ["ru"]
    }, {
        id: 52,
        type: "challengeCompleted",
        title: "Создать TON Space",
        icon: "https://cdn.joincommunity.xyz/clicker/task-wallet.png",
        imageSize: "72",
        minLeagueId: 2,
        challengeId: 167,
        imageType: "cover-src",
        coins: 15e4,
        isCompleted: !1,
        locale: ["ru"]
    }, {
        id: 38,
        type: "challengeCompleted",
        title: "Follow Community",
        icon: "https://cdn.joincommunity.xyz/clicker/task-openbuilders.png?1",
        imageSize: "72",
        minLeagueId: 2,
        challengeId: 138,
        imageType: "cover-src",
        coins: 2e5,
        isCompleted: !1,
        exceptedLocale: ["fa", "id", "ru"]
    }, {
        id: 55,
        type: "challengeCompleted",
        title: "Tonstarter",
        icon: "https://cdn.joincommunity.xyz/clicker/task-tonstarter.png?1",
        imageSize: "72",
        minLeagueId: 2,
        challengeId: 172,
        imageType: "cover-src",
        coins: 2e5,
        isCompleted: !1,
        locale: ["ru", "az", "kk", "tg", "tk", "uz", "uk", "ua"]
    }, {
        id: 56,
        type: "challengeCompleted",
        title: "Follow Notcoin",
        icon: "https://cdn.joincommunity.xyz/clicker/task-notcoin.png",
        imageSize: "72",
        minLeagueId: 2,
        challengeId: 144,
        imageType: "cover-src",
        coins: 2e5,
        isCompleted: !1,
        exceptedLocale: ["fa", "id"]
    }, {
        id: 57,
        title: "Anonymous Numbers",
        icon: "🎱",
        type: "challengeCompleted",
        coins: 5e5,
        isCompleted: !1,
        imageSize: "36",
        imageType: "cover-emoji",
        minLeagueId: 2,
        challengeId: 48
    }],
    LeagueTypes = ["silverLeague", "goldLeague", "platinumLeague", "diamondLeague"],
    useTaskStore = create((e, s) => ({
        isLoaded: !1,
        dailyTasks: [],
        tasks: [],
        leagueTasks: [],
        specialTasks: [],
        partnerTasks: [],
        onboardingTasks: [],
        fetchTasks: async () => {
            const {
                ok: t,
                data: n
            } = await fetchAllCompletedTasksApi(), o = onboardingTasksData.map(l => n.find(d => d.task.type === l.type) ? { ...l,
                isCompleted: !0
            } : l), r = leagueTasksData.map(l => n.find(d => d.task.id === l.id) ? { ...l,
                isCompleted: !0
            } : l), a = specialTasksData, c = partnerTasksData, i = dailyTasksData.map(l => ({ ...l,
                completions: n.filter(d => d.taskId === l.id).length
            }));
            e({
                isLoaded: !0,
                dailyTasks: i,
                onboardingTasks: o,
                partnerTasks: c,
                specialTasks: a,
                leagueTasks: r
            })
        },
        completeTask: async t => await completeTaskApi(t)
    })),
    getScoreCache = () => {
        const e = LocalStorageService.getItemWithExpiry("user-daily-place").value,
            s = LocalStorageService.getItemWithExpiry("user-weekly-place").value;
        return {
            daily: e || {
                score: 0,
                rank: 0
            },
            weekly: s || {
                score: 0,
                rank: 0
            }
        }
    },
    useUserStoreBase = create((e, s) => ({
        profile: null,
        isAuth: AuthService.isAuth(),
        score: getScoreCache(),
        actions: {
            authorise: async () => {
                var o;
                const {
                    ok: t,
                    data: n
                } = await ApiService.post({
                    endpoint: "/auth/webapp-session",
                    data: {
                        webAppData: (o = window == null ? void 0 : window.Telegram) == null ? void 0 : o.WebApp.initData
                    }
                });
                if (t && n.accessToken) {
                    const {
                        accessToken: r
                    } = n;
                    AuthService.setCredentials({
                        accessToken: r
                    });
                    const a = !0;
                    e(() => ({
                        isAuth: a
                    }))
                }
            },
            fetchProfile: async () => {
                const {
                    ok: t,
                    data: n
                } = await fetchUserProfileApi();
                t && e(() => ({
                    profile: {
                        id: n.id,
                        telegramId: n.telegramId,
                        firstName: n.firstName,
                        username: n.username,
                        friendlyAddress: n.friendlyAddress,
                        role: n.role,
                        isSudo: () => n.role === "superadmin"
                    }
                }))
            },
            fetchUserRank: async t => {
                const n = `user-${t}-place`;
                let o = LocalStorageService.getItemWithExpiry(n);
                if (!o.value || o.isExpired) {
                    const {
                        data: r
                    } = await fetchUserRankApi(t), a = 1e3 * 60 * 3;
                    LocalStorageService.setItemWithExpiry(n, r, a);
                    const c = { ...s().score
                    };
                    return c[t] = r, e(() => ({
                        score: c
                    })), r
                }
                return o.value
            }
        }
    })),
    useUserActions = () => useUserStoreBase(e => e.actions),
    useUser = createSelectors(useUserStoreBase),
    Langs = ["en", "uk", "ru", "fr", "tr", "zh-hans"],
    getUserLang = (e = Langs) => {
        var n;
        const {
            userProfile: s
        } = useClickerStore(), t = (n = s == null ? void 0 : s.user) == null ? void 0 : n.locale;
        return !t || e.indexOf(t) < 0 ? "en" : t
    };
class MyErrorBoundary extends reactExports.Component {
    constructor(s) {
        super(s), this.state = {
            hasError: !1,
            error: null,
            errorInfo: null
        }
    }
    componentDidCatch(s, t) {
        this.setState({
            hasError: !0,
            error: s,
            errorInfo: t
        })
    }
    render() {
        var s, t;
        return this.state.hasError ? jsxs("div", {
            children: [jsx("h2", {
                children: "Something went wrong."
            }), jsx("p", {
                children: (s = this.state.error) == null ? void 0 : s.toString()
            }), jsx("div", {
                children: (t = this.state.errorInfo) == null ? void 0 : t.componentStack
            })]
        }) : this.props.children
    }
}
const background$1 = "_background_6spwk_1",
    backgroundTop = "_background-top_6spwk_8",
    backgroundBottom = "_background-bottom_6spwk_11",
    layer = "_layer_6spwk_16",
    shadow = "_shadow_6spwk_33",
    shadowVisible = "_shadowVisible_6spwk_38",
    themeBronze = "_theme-bronze_6spwk_44",
    themeSilver = "_theme-silver_6spwk_48",
    themeGold = "_theme-gold_6spwk_52",
    themePlatinum = "_theme-platinum_6spwk_56",
    themeDiamond = "_theme-diamond_6spwk_60",
    themeYellow = "_theme-yellow_6spwk_64",
    themeInfluencer = "_theme-influencer_6spwk_69",
    styles$X = {
        background: background$1,
        "background-top": "_background-top_6spwk_8",
        backgroundTop,
        "background-bottom": "_background-bottom_6spwk_11",
        backgroundBottom,
        layer,
        shadow,
        shadowVisible,
        "theme-bronze": "_theme-bronze_6spwk_44",
        themeBronze,
        "theme-silver": "_theme-silver_6spwk_48",
        themeSilver,
        "theme-gold": "_theme-gold_6spwk_52",
        themeGold,
        "theme-platinum": "_theme-platinum_6spwk_56",
        themePlatinum,
        "theme-diamond": "_theme-diamond_6spwk_60",
        themeDiamond,
        "theme-yellow": "_theme-yellow_6spwk_64",
        themeYellow,
        "theme-influencer": "_theme-influencer_6spwk_69",
        themeInfluencer
    },
    Background = ({
        type: e,
        position: s = "top"
    }) => {
        const [t, n] = reactExports.useState(e);
        reactExports.useEffect(() => {
            e !== t && (o(t, e), n(e))
        }, [e]), reactExports.useEffect(() => {
            a.current && a.current.classList.add(styles$X[`theme-${t}`])
        }, []);
        const o = (c, i) => {
                if (r.current && a.current) {
                    const l = a.current,
                        d = r.current;
                    d.style.display = "block", d.classList.add(styles$X[`theme-${c}`]), l.classList.forEach(_ => {
                        _.match(/theme-\S+/g) && l.classList.remove(_)
                    }), l.classList.add(styles$X[`theme-${i}`]), setTimeout(() => {
                        d.style.transition = "opacity 0.35s ease", d.style.opacity = "0"
                    }, 10), setTimeout(() => {
                        d.classList.forEach(_ => {
                            _.match(/theme-\S+/g) && d.classList.remove(_)
                        }), d.style.transition = "none", d.style.display = "none", d.style.opacity = "1"
                    }, 400)
                }
            },
            r = reactExports.useRef(null),
            a = reactExports.useRef(null);
        return jsxs(Content, {
            fadeIn: !0,
            className: cn(styles$X.background, s && styles$X[`background-${s}`]),
            children: [jsx("div", {
                ref: a,
                className: styles$X.layer
            }), jsx("div", {
                ref: r,
                className: cn(styles$X.layer, styles$X.shadow)
            })]
        })
    },
    bar$1 = "_bar_wqdor_1",
    fill = "_fill_wqdor_9",
    skinLeague1$1 = "_skin-league-1_wqdor_18",
    skinLeague2$1 = "_skin-league-2_wqdor_22",
    skinLeague3$1 = "_skin-league-3_wqdor_26",
    skinLeague4$1 = "_skin-league-4_wqdor_30",
    skinLeague5$1 = "_skin-league-5_wqdor_34",
    skinGalleon$2 = "_skin-galleon_wqdor_38",
    skinEggs$2 = "_skin-eggs_wqdor_42",
    skinFallout$2 = "_skin-fallout_wqdor_46",
    styles$W = {
        bar: bar$1,
        fill,
        "skin-league-1": "_skin-league-1_wqdor_18",
        skinLeague1: skinLeague1$1,
        "skin-league-2": "_skin-league-2_wqdor_22",
        skinLeague2: skinLeague2$1,
        "skin-league-3": "_skin-league-3_wqdor_26",
        skinLeague3: skinLeague3$1,
        "skin-league-4": "_skin-league-4_wqdor_30",
        skinLeague4: skinLeague4$1,
        "skin-league-5": "_skin-league-5_wqdor_34",
        skinLeague5: skinLeague5$1,
        "skin-galleon": "_skin-galleon_wqdor_38",
        skinGalleon: skinGalleon$2,
        "skin-eggs": "_skin-eggs_wqdor_42",
        skinEggs: skinEggs$2,
        "skin-fallout": "_skin-fallout_wqdor_46",
        skinFallout: skinFallout$2
    };

function Bar({
    current: e,
    limit: s,
    leagueId: t
}) {
    const o = {
            width: (e / s * 100 || 0) + "%"
        },
        {
            currentSkin: r
        } = useBoostStore(),
        {
            userProfile: a
        } = useClickerStore(),
        c = r === "default" ? `league-${a==null?void 0:a.leagueId}` : r;
    return jsx("div", {
        children: jsx("div", {
            className: cn(styles$W.bar),
            children: jsx("div", {
                className: cn(styles$W.fill, styles$W[`skin-${c}`]),
                style: o
            })
        })
    })
}
const beautifyMoney$2 = e => new Intl.NumberFormat("en-US").format(parseInt(e)),
    title$j = "_title_rnk1e_1",
    subtitle$6 = "_subtitle_rnk1e_10",
    image$7 = "_image_rnk1e_18",
    backButton$4 = "_backButton_rnk1e_25",
    modal$6 = "_modal_rnk1e_41",
    body$6 = "_body_rnk1e_49",
    backdrop$6 = "_backdrop_rnk1e_56",
    board$2 = "_board_rnk1e_60",
    card$3 = "_card_rnk1e_66",
    cardTitle$2 = "_cardTitle_rnk1e_69",
    cardSubtitle$2 = "_cardSubtitle_rnk1e_74",
    cardTextYellow$2 = "_cardTextYellow_rnk1e_79",
    score$9 = "_score_rnk1e_83",
    successIcon$2 = "_successIcon_rnk1e_107",
    squadIcon$2 = "_squadIcon_rnk1e_112",
    level$4 = "_level_rnk1e_117",
    styles$V = {
        title: title$j,
        subtitle: subtitle$6,
        image: image$7,
        backButton: backButton$4,
        modal: modal$6,
        body: body$6,
        backdrop: backdrop$6,
        board: board$2,
        card: card$3,
        cardTitle: cardTitle$2,
        cardSubtitle: cardSubtitle$2,
        cardTextYellow: cardTextYellow$2,
        score: score$9,
        successIcon: successIcon$2,
        squadIcon: squadIcon$2,
        level: level$4
    },
    BoostSheet = ({
        isOpened: e,
        onClose: s,
        boost: t,
        buyBoost: n
    }) => {
        const o = async r => {
            s(), await n(r)
        };
        return jsx(Sheet, {
            opened: e,
            onClose: s,
            onBackdropClick: s,
            contentClassName: styles$V.modal,
            backdropClassName: styles$V.backdrop,
            children: t ? jsxs("div", {
                className: styles$V.body,
                children: [jsx("div", {
                    className: styles$V.image,
                    children: getBoostDetails(t.type).icon
                }), jsx(Text, {
                    type: "title-0",
                    weight: "bold",
                    margin: "0-0-6-0",
                    align: "center",
                    color: "white",
                    children: getBoostDetails(t.type).title || t.name
                }), jsx(Text, {
                    type: "subheadline-1",
                    margin: "0-0-16-0",
                    align: "center",
                    color: "secondary",
                    children: getBoostDetails(t.type).description || t.description
                }), !!(t != null && t.price) && jsxs("div", {
                    className: styles$V.board,
                    children: [jsx("div", {
                        className: cn(styles$V.cardTitle, styles$V.score),
                        children: beautifyMoney$2(String(t.price))
                    }), jsxs("div", {
                        className: styles$V.level,
                        children: ["/ Level ", t.count]
                    })]
                }), jsx(Button, {
                    onClick: () => o(t == null ? void 0 : t.id),
                    children: "Get"
                })]
            }) : null
        })
    },
    taskCarousel$1 = "_taskCarousel_1gij5_1",
    styles$U = {
        taskCarousel: taskCarousel$1
    },
    BoostCarousel = ({
        onSuccess: e
    }) => {
        const {
            addToast: s,
            hideToasts: t
        } = useToast(), [n, o] = useToggle(!1), [r, a] = reactExports.useState(!1), [c, i] = reactExports.useState(null), {
            classicBoosts: l,
            fetchBoosts: d,
            isLoaded: _
        } = useBoostStore(), {
            userProfile: p,
            score: u,
            setClickerProfile: m
        } = useClickerStore(), x = C => {
            t(), i(C), o()
        }, f = async C => {
            r || (a(!0), s({
                message: "Buying...",
                type: "loading"
            }), await buyBoost(C).then(async h => {
                if (h != null && h.ok) await d(), m(h.data), e();
                else {
                    const y = h != null && h.data.message ? h == null ? void 0 : h.data.message : "¯_(ツ)_/¯ Buying error. Try again later.";
                    s({
                        message: y,
                        type: "error"
                    })
                }
            }), a(!1))
        }, g = l.sort((C, h) => C.id > h.id ? 1 : -1).sort(C => C.isCompleted ? 1 : -1);
        return _ ? jsxs(Fragment, {
            children: [jsx(BoostSheet, {
                isOpened: n,
                onClose: o,
                boost: c,
                buyBoost: f
            }), jsx(Content, {
                fadeIn: !0,
                className: styles$U.taskCarousel,
                children: jsx(Carousel, {
                    list: g.map((C, h) => jsx(BoostItemBoost, {
                        userLeagueId: p != null && p.leagueId ? p == null ? void 0 : p.leagueId : 0,
                        maxLevelAchieved: C.isCompleted,
                        currentLevel: C.count,
                        boost: C,
                        userBalance: u,
                        onClick: () => x(C)
                    }, `classic-boost-${C.id}-${h}`)),
                    slideSize: 4
                })
            })]
        }) : null
    },
    price$3 = "_price_dmcml_1",
    expire$1 = "_expire_dmcml_2",
    isCompleted$2 = "_isCompleted_dmcml_24",
    footer$2 = "_footer_dmcml_28",
    isLocked$2 = "_isLocked_dmcml_33",
    yellow$4 = "_yellow_dmcml_40",
    red$2 = "_red_dmcml_45",
    level$3 = "_level_dmcml_54",
    separator$5 = "_separator_dmcml_59",
    isActive$5 = "_isActive_dmcml_67",
    isCompletedIcon$2 = "_isCompletedIcon_dmcml_71",
    styles$T = {
        price: price$3,
        expire: expire$1,
        isCompleted: isCompleted$2,
        footer: footer$2,
        isLocked: isLocked$2,
        yellow: yellow$4,
        red: red$2,
        level: level$3,
        separator: separator$5,
        isActive: isActive$5,
        isCompletedIcon: isCompletedIcon$2
    },
    loader = "_loader_1urhx_1",
    rotation = "_rotation_1urhx_1",
    styles$S = {
        loader,
        rotation
    };

function BoostItemLoader() {
    return jsx(Content, {
        fadeIn: !0,
        className: styles$S.loader
    })
}

function BoostItem({
    isCompleted: e,
    onClick: s,
    isLoading: t,
    isDisabled: n,
    title: o,
    footer: r,
    before: a
}) {
    return jsx(ListItem, {
        onClick: i => {
            s(i)
        },
        divider: !1,
        title: jsx(Text, {
            color: "secondary",
            className: cn(n && styles$T.disabled, e && styles$T.isCompleted),
            children: o
        }),
        footer: r,
        before: a,
        after: t ? jsx(BoostItemLoader, {}) : e ? jsx(Icon, {
            name: "Checkmark",
            colorStroke: "secondary"
        }) : "",
        ripple: !n && !e && !t,
        large: !0,
        chevron: !n && !e && !t
    })
}
const LEAGUES = [{
    id: 1,
    tgName: "Bronze league 🥉",
    name: "Bronze",
    enum: "bronze",
    minProfile: 0,
    minTeam: 0
}, {
    id: 2,
    tgName: "Silver league 🥈",
    name: "Silver",
    enum: "silver",
    minProfile: 5e3,
    minTeam: 5e3 * 100
}, {
    id: 3,
    tgName: "Gold league 🥇",
    name: "Gold",
    enum: "gold",
    minProfile: 2e5,
    minTeam: 1e8
}, {
    id: 4,
    tgName: "Platinum league 💎",
    name: "Platinum",
    enum: "platinum",
    minProfile: 2e6,
    minTeam: 9e8
}, {
    id: 5,
    tgName: "Diamond league 💎💎💎",
    name: "Diamond",
    enum: "diamond",
    minProfile: 1e7,
    minTeam: 5e9
}, {
    id: 6,
    tgName: "Greatest Influencers",
    name: "Influencers",
    enum: "influencer",
    minProfile: 0,
    minTeam: 0
}, {
    id: 7,
    tgName: "Squad",
    name: "Squad",
    enum: "squad",
    minProfile: 0,
    minTeam: 0
}];

function getLeagueById(e) {
    return LEAGUES.find(s => s.id === e) || LEAGUES[0]
}

function getLeagueColor(e, s = LEAGUES[0].enum) {
    var t;
    return ((t = LEAGUES.find(n => n.id == e)) == null ? void 0 : t.enum) || s
}

function getLeagueMinById(e, s = "user") {
    var t, n;
    return s === "team" ? ((t = LEAGUES.find(o => o.id === e)) == null ? void 0 : t.minTeam) || 0 : ((n = LEAGUES.find(o => o.id === e)) == null ? void 0 : n.minProfile) || 0
}

function getLeagueLimitById(e, s = "user") {
    var t, n;
    return s === "team" ? ((t = LEAGUES.find(o => o.id === e + 1)) == null ? void 0 : t.minTeam) || 0 : ((n = LEAGUES.find(o => o.id === e + 1)) == null ? void 0 : n.minProfile) || 0
}
const beautifyMoney$1 = e => new Intl.NumberFormat("en-US").format(parseInt(e.toString())),
    beautifyLongNumber = (e = "", s = "compact", t = 1) => new Intl.NumberFormat("en-US", {
        notation: s,
        maximumFractionDigits: t
    }).format(parseInt(e.toString())),
    rankToString$1 = e => {
        const s = ["th", "st", "nd", "rd"],
            t = e % 100;
        return beautifyMoney$1(String(e)) + (s[(t - 20) % 10] || s[t] || s[0])
    },
    formatNumberAbbreviation = e => {
        const s = Math.abs(e);
        return s >= 1e6 ? (s / 1e6).toFixed() + "M" : s >= 1e3 ? (s / 1e3).toFixed() + "k" : e.toString()
    },
    nth = e => {
        if (e > 3 && e < 21) return "th";
        switch (e % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th"
        }
    },
    boostData = {
        multipleClicks: {
            title: "Multitap",
            description: jsxs(Fragment, {
                children: ["Increase amount of Notcoin", jsx("br", {}), " you can earn per one tap.", jsx("br", {}), jsx("br", {}), " +1 per tap for each level."]
            }),
            icon: "☝️"
        },
        increaseLimit: {
            icon: "🔋",
            title: "Energy Limit",
            description: jsxs(Fragment, {
                children: ["Increase your energy limit,", jsx("br", {}), " so you can mine more per session.", jsx("br", {}), jsx("br", {}), "+500 Notcoin for each level."]
            })
        },
        speedPerHour: {
            title: "Recharging speed",
            description: jsxs(Fragment, {
                children: ["Increase the energy recharging speed.", jsx("br", {}), jsx("br", {}), " +1 / sec for each level.", jsx("br", {}), "3 levels max limit."]
            }),
            icon: "⚡️"
        },
        robot: {
            title: "Tap bot",
            description: jsxs(Fragment, {
                children: ["Hi sir! I will earn Notcoin for you,", jsx("br", {}), "when you close the game.", jsx("br", {}), jsx("br", {}), "12 hours is my limit for auto-tap.", jsx("br", {}), jsx("br", {}), "You need to claim Notcoin at least every 12 hour to empty my storage, so I can earn more for you."]
            }),
            icon: "🤖"
        }
    };
var BoostStatusEnum = (e => (e[e.completed = 0] = "completed", e[e.lockedByPrice = 1] = "lockedByPrice", e[e.lockedByLeague = 2] = "lockedByLeague", e[e.available = 3] = "available", e))(BoostStatusEnum || {});
const getBoostDetails = e => boostData[e] ? boostData[e] : {
        title: "Boost",
        description: "Boost description",
        icon: "🎁"
    },
    renderFooterByStatus = e => {
        const {
            boost: s,
            boostStatus: t,
            currentLevel: n
        } = e;
        return t === BoostStatusEnum.available ? jsxs("div", {
            className: cn(styles$T.footer, styles$T.price),
            children: [beautifyMoney$1(String(s.price)), n !== null ? jsxs(Fragment, {
                children: [jsx("span", {
                    className: styles$T.separator,
                    children: "・"
                }), jsxs("span", {
                    className: styles$T.level,
                    children: [n, " lvl"]
                })]
            }) : null]
        }) : t === BoostStatusEnum.completed ? jsx("div", {
            className: cn(styles$T.footer, styles$T.isCompleted),
            children: "Max level reached"
        }) : t === BoostStatusEnum.lockedByPrice || t === BoostStatusEnum.lockedByLeague ? jsxs("div", {
            className: cn(styles$T.footer, styles$T.isLocked),
            children: [jsx("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: jsx("path", {
                    d: "M4.69554 15H11.3038C12.2167 15 12.6663 14.5336 12.6663 13.5018V8.20848C12.6663 7.27562 12.2985 6.80212 11.5354 6.72438V4.9788C11.5354 2.29329 9.81184 1 7.99968 1C6.18751 1 4.46391 2.29329 4.46391 4.9788V6.74558C3.75539 6.85866 3.33301 7.32509 3.33301 8.20848V13.5018C3.33301 14.5336 3.78264 15 4.69554 15ZM5.77194 4.85159C5.77194 3.20495 6.78021 2.30035 7.99968 2.30035C9.21233 2.30035 10.2274 3.20495 10.2274 4.85159V6.71025L5.77194 6.71731V4.85159Z",
                    fill: "#FEB803"
                })
            }), t === BoostStatusEnum.lockedByPrice ? beautifyMoney$1(String(s.price)) : null, t === BoostStatusEnum.lockedByLeague ? `${getLeagueById(s.minLeagueId).name} league` : null, n !== null ? jsxs(Fragment, {
                children: [jsx("span", {
                    className: styles$T.separator,
                    children: "・"
                }), jsxs("span", {
                    className: styles$T.level,
                    children: [n, " lvl"]
                })]
            }) : null]
        }) : null
    },
    BoostItemBoost = ({
        userLeagueId: e,
        boost: s,
        userBalance: t,
        currentLevel: n,
        onClick: o,
        maxLevelAchieved: r
    }) => {
        const {
            name: a,
            type: c,
            price: i,
            minLeagueId: l
        } = s, d = () => {
            m === BoostStatusEnum.available && o()
        }, _ = i && t >= i, p = r, u = l && e < l;
        let m = BoostStatusEnum.available;
        _ || (m = BoostStatusEnum.lockedByPrice), u && (m = BoostStatusEnum.lockedByLeague), p && (m = BoostStatusEnum.completed);
        const x = renderFooterByStatus({
                boost: s,
                boostStatus: m,
                currentLevel: n
            }),
            {
                title: f,
                icon: g
            } = getBoostDetails(c),
            C = {
                color: "pale-grey",
                type: "cover-emoji",
                value: g
            },
            h = jsx(MediaIcon, {
                className: cn(p && styles$T.isCompletedIcon),
                media: C,
                imageSize: "72",
                size: "72",
                borderRadius: "12"
            });
        return jsx(BoostItem, { ...s,
            onClick: d,
            isDisabled: m !== BoostStatusEnum.available,
            title: f || a,
            footer: x,
            before: h,
            isCompleted: p
        })
    },
    root$c = "_root_pl5tv_1",
    qrCodeImg = "_qrCodeImg_pl5tv_10",
    styles$R = {
        root: root$c,
        qrCodeImg
    },
    BoringDesktop = () => jsxs("div", {
        className: styles$R.root,
        children: [jsxs(Text, {
            type: "title-0",
            className: styles$R.title,
            center: !0,
            children: ["Desktop is boring.", jsx("br", {}), "Play on your mobile."]
        }), jsx("img", {
            src: "https://cdn.joincommunity.xyz/clicker/notcoin_qr.png",
            width: 220,
            className: styles$R.qrCodeImg,
            alt: "Notcoin bot QR"
        })]
    }),
    root$b = "_root_1unia_1",
    fullwidth = "_fullwidth_1unia_21",
    typeBlue = "_typeBlue_1unia_25",
    typeOrange = "_typeOrange_1unia_29",
    typeHollow = "_typeHollow_1unia_34",
    typeRounded = "_typeRounded_1unia_38",
    typeAlpha = "_typeAlpha_1unia_43",
    styles$Q = {
        root: root$b,
        fullwidth,
        typeBlue,
        typeOrange,
        typeHollow,
        typeRounded,
        typeAlpha
    },
    Button = ({
        fullwidth: e,
        className: s,
        type: t = "Blue",
        children: n,
        disabled: o = !1,
        onClick: r
    }) => {
        const a = e ? styles$Q.fullwidth : "";
        return jsx("button", {
            className: cn(styles$Q.root, s, styles$Q[`type${t}`], a),
            onClick: r,
            disabled: o,
            children: n
        })
    },
    carousel = "_carousel_1jmmj_1",
    itemWrap = "_itemWrap_1jmmj_56",
    itemWrapSmall = "_itemWrapSmall_1jmmj_60",
    itemWrapSmallFirst = "_itemWrapSmallFirst_1jmmj_64",
    itemWrapLast = "_itemWrapLast_1jmmj_68",
    itemWrapLastSmall = "_itemWrapLastSmall_1jmmj_72",
    styles$P = {
        carousel,
        itemWrap,
        itemWrapSmall,
        itemWrapSmallFirst,
        itemWrapLast,
        itemWrapLastSmall
    };

function Carousel({
    list: e,
    slideSize: s = 3,
    slidesPerView: t = 1.15,
    isDaily: n,
    onSlideChange: o = () => {}
}) {
    const r = e.reduce((a, c, i) => {
        const l = Math.floor(i / s);
        return a[l] = [].concat(a[l] || [], c), a
    }, []);
    return s >= e.length ? jsx(List, {
        type: "inset",
        children: e.map(a => a)
    }) : jsx("div", {
        className: styles$P.carousel,
        children: jsx(Swiper, {
            slidesPerView: t,
            initialSlide: 0,
            onSlideChange: a => o(a.activeIndex),
            children: r.map((a, c) => jsx(SwiperSlide, {
                children: jsx("div", {
                    className: cn(!n && styles$P.itemWrap, n && c === 0 && styles$P.itemWrapSmallFirst, n && c !== 0 && styles$P.itemWrapSmall, c === r.length - 1 && styles$P.itemWrapLast),
                    children: jsx(List, {
                        type: "inset",
                        children: a.map(i => i)
                    }, `${c}`)
                })
            }, c))
        })
    })
}
const root$a = "_root_19mhq_1",
    tabPanel$1 = "_tabPanel_19mhq_15",
    tabPanelActive$1 = "_tabPanelActive_19mhq_18",
    tabButton$1 = "_tabButton_19mhq_22",
    isActive$4 = "_isActive_19mhq_48",
    activeBar$1 = "_activeBar_19mhq_55",
    styles$O = {
        root: root$a,
        tabPanel: tabPanel$1,
        tabPanelActive: tabPanelActive$1,
        tabButton: tabButton$1,
        isActive: isActive$4,
        activeBar: activeBar$1
    },
    root$9 = "_root_4dk1f_1",
    innerWrapper$2 = "_innerWrapper_4dk1f_7",
    premium = "_premium_4dk1f_16",
    avatar$1 = "_avatar_4dk1f_25",
    imageContainer$1 = "_imageContainer_4dk1f_32",
    innerContent$2 = "_innerContent_4dk1f_41",
    title$i = "_title_4dk1f_46",
    score$8 = "_score_4dk1f_58",
    reward$1 = "_reward_4dk1f_68",
    broughtYou = "_broughtYou_4dk1f_84",
    rippleEffect$4 = "_rippleEffect_4dk1f_94",
    chevronWrap = "_chevronWrap_4dk1f_105",
    chevron$3 = "_chevron_4dk1f_105",
    styles$N = {
        root: root$9,
        innerWrapper: innerWrapper$2,
        premium,
        avatar: avatar$1,
        imageContainer: imageContainer$1,
        innerContent: innerContent$2,
        title: title$i,
        score: score$8,
        reward: reward$1,
        broughtYou,
        rippleEffect: rippleEffect$4,
        chevronWrap,
        chevron: chevron$3
    };

function FrenItem({
    id: e,
    name: s,
    score: t,
    reward: n,
    leagueId: o,
    isPremium: r,
    avatar: a,
    link: c
}) {
    var d;
    const i = _ => {
            c && window.Telegram.WebApp.openTelegramLink(c)
        },
        l = (d = getLeagueById(o)) == null ? void 0 : d.name;
    return jsx("div", {
        className: cn(styles$N.root, c && styles$N.rippleEffect),
        onClick: i,
        children: jsxs("div", {
            className: styles$N.innerWrapper,
            children: [jsx("div", {
                className: styles$N.imageContainer,
                children: jsx("img", {
                    className: styles$N.avatar,
                    src: a || `https://ui-avatars.com/api/?name=${encodeURIComponent(s)}&background=${(Number(e)+1235234).toString(16)}&color=fff`,
                    loading: "lazy"
                })
            }), jsxs("div", {
                className: styles$N.innerContent,
                children: [jsxs("div", {
                    className: styles$N.title,
                    children: [s, r && jsx("span", {
                        className: styles$N.premium
                    })]
                }), jsxs("div", {
                    className: styles$N.score,
                    children: [jsx("img", {
                        src: `https://cdn.joincommunity.xyz/clicker/league/${l}-95.png`,
                        height: "16",
                        alt: "League cup",
                        className: styles$N.leagueCup
                    }), jsx("div", {
                        className: styles$N.leagueName,
                        children: l
                    }), jsx("div", {
                        className: styles$N.dot,
                        children: "・"
                    }), jsx("p", {
                        className: styles$N.reward,
                        children: beautifyMoney$2(String(t))
                    })]
                })]
            }), jsxs("div", {
                className: styles$N.broughtYou,
                children: ["+", formatNumberAbbreviation(Number(n))]
            }), jsx("div", {
                className: styles$N.chevronWrap,
                children: c ? jsx(Icon, {
                    name: "ChevronRight",
                    className: styles$N.chevron
                }) : null
            })]
        })
    })
}
const goblet$1 = "_goblet_1k1n2_1",
    gobletInfluencer = "_goblet-influencer_1k1n2_8",
    image$6 = "_image_1k1n2_13",
    gobletSquad = "_goblet-squad_1k1n2_17",
    styles$M = {
        goblet: goblet$1,
        "goblet-influencer": "_goblet-influencer_1k1n2_8",
        gobletInfluencer,
        image: image$6,
        "goblet-squad": "_goblet-squad_1k1n2_17",
        gobletSquad
    },
    Goblet = ({
        type: e
    }) => jsx("div", {
        className: cn(styles$M.goblet, styles$M[`goblet-${e}`]),
        children: jsx(motion.img, {
            src: `https://cdn.joincommunity.xyz/clicker/league/${e}.png?1`,
            alt: "League cup",
            className: styles$M.image,
            initial: {
                opacity: 0,
                y: -10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .6
            }
        }, e)
    }),
    root$8 = "_root_i94gk_1",
    separator$4 = "_separator_i94gk_5",
    label = "_label_i94gk_22",
    helper = "_helper_i94gk_29",
    input = "_input_i94gk_36",
    styles$L = {
        root: root$8,
        separator: separator$4,
        label,
        helper,
        input
    };

function Input({
    onChange: e,
    className: s,
    placeholder: t = "",
    value: n = "",
    type: o = "text",
    helper: r,
    label: a
}) {
    const c = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };
    return jsxs("div", {
        className: cn(styles$L.root, s),
        children: [jsx("div", {
            className: styles$L.separator
        }), a ? jsx("div", {
            className: styles$L.label,
            children: a
        }) : null, jsx("input", {
            className: styles$L.input,
            type: o,
            placeholder: t,
            value: n,
            onChange: i => e(i.currentTarget.value),
            onBlur: c
        }), r ? jsx("div", {
            className: styles$L.helper,
            children: r
        }) : null]
    })
}
const leaderboard = "_leaderboard_x95tw_1",
    placeholder$1 = "_placeholder_x95tw_8",
    placeholderImage = "_placeholderImage_x95tw_13",
    placeholderText = "_placeholderText_x95tw_18",
    listInner = "_listInner_x95tw_25",
    styles$K = {
        leaderboard,
        placeholder: placeholder$1,
        placeholderImage,
        placeholderText,
        listInner
    },
    Leaderboard = ({
        list: e,
        tabs: s,
        highlightId: t,
        highlightText: n,
        boardType: o = "coins"
    }) => jsxs("div", {
        className: styles$K.leaderboard,
        children: [s || null, jsxs("div", {
            className: styles$K.listInner,
            children: [e === null ? jsxs(Content, {
                column: !0,
                fadeIn: !0,
                children: [jsx(Skeleton.LeaderboardItem, {}), jsx(Skeleton.LeaderboardItem, {}), jsx(Skeleton.LeaderboardItem, {}), jsx(Skeleton.LeaderboardItem, {}), jsx(Skeleton.LeaderboardItem, {})]
            }) : null, e !== null && e.length === 0 ? jsx(Content, {
                column: !0,
                fadeIn: !0,
                children: jsxs("div", {
                    className: styles$K.placeholder,
                    children: [jsx("div", {
                        className: styles$K.placeholderImage,
                        children: "🫧"
                    }), jsx("div", {
                        className: styles$K.placeholderText,
                        children: "There is nothing here"
                    })]
                })
            }) : null, e !== null && e.length > 0 ? jsx(Content, {
                column: !0,
                fadeIn: !0,
                children: e.map((r, a) => jsx(LeaderboardItem, {
                    boardType: o,
                    i: r.index ? r.index : a,
                    indexText: r.indexText,
                    id: r.id,
                    title: r.title,
                    points: r.points,
                    bonus: r.bonus,
                    avatar: r == null ? void 0 : r.img,
                    isSticked: t && e.length > 3 ? r.id.toString() === t.toString() : !1,
                    link: r.link,
                    after: r.id === t ? n : null
                }, r.id))
            }) : null]
        })]
    }),
    innerWrapper$1 = "_innerWrapper_1xln5_1",
    highlighted = "_highlighted_1xln5_9",
    prefix$3 = "_prefix_1xln5_21",
    medal = "_medal_1xln5_37",
    avatar = "_avatar_1xln5_41",
    imageContainer = "_imageContainer_1xln5_48",
    pulse$1 = "_pulse_1xln5_57",
    loadable = "_loadable_1xln5_61",
    innerContent$1 = "_innerContent_1xln5_74",
    title$h = "_title_1xln5_79",
    coins = "_coins_1xln5_91",
    points = "_points_1xln5_109",
    chevron$2 = "_chevron_1xln5_116",
    rippleEffect$3 = "_rippleEffect_1xln5_124",
    after$1 = "_after_1xln5_135",
    sticked = "_sticked_1xln5_143",
    stat = "_stat_1xln5_163",
    frenCoins = "_frenCoins_1xln5_167",
    delimeter$2 = "_delimeter_1xln5_185",
    styles$J = {
        innerWrapper: innerWrapper$1,
        highlighted,
        prefix: prefix$3,
        medal,
        avatar,
        imageContainer,
        pulse: pulse$1,
        loadable,
        innerContent: innerContent$1,
        title: title$h,
        coins,
        points,
        chevron: chevron$2,
        rippleEffect: rippleEffect$3,
        after: after$1,
        sticked,
        stat,
        frenCoins,
        delimeter: delimeter$2
    },
    getPrefix = e => e === 0 ? jsx("span", {
        className: styles$J.medal,
        children: "🥇"
    }) : e === 1 ? jsx("span", {
        className: styles$J.medal,
        children: "🥈"
    }) : e === 2 ? jsx("span", {
        className: styles$J.medal,
        children: "🥉"
    }) : e + 1;

function LeaderboardItem({
    i: e,
    indexText: s,
    id: t,
    title: n,
    points: o,
    avatar: r,
    isSticked: a,
    link: c,
    after: i,
    boardType: l,
    bonus: d
}) {
    const _ = useNavigate(),
        p = () => {
            c && _(c)
        };
    return jsxs(Content, {
        className: cn(styles$J.innerWrapper, a && styles$J.sticked),
        onClick: p,
        children: [jsx("div", {
            className: styles$J.prefix,
            children: s || (a && e > 100 ? beautifyLongNumber(getPrefix(e).toString()) : getPrefix(e))
        }), jsx("div", {
            className: styles$J.imageContainer,
            children: jsx("img", {
                className: styles$J.avatar,
                src: r || `https://ui-avatars.com/api/?name=${encodeURIComponent(n)}&background=${(Number(t)+1235234).toString(16)}&color=fff`,
                loading: "lazy"
            })
        }), jsx("div", {
            className: cn(styles$J.innerContent),
            children: jsxs("div", {
                className: styles$J.content,
                children: [jsx("div", {
                    className: styles$J.title,
                    children: n
                }), l === "coins" ? jsx("div", {
                    className: styles$J.coins,
                    children: beautifyMoney$2(String(o))
                }) : null, l === "frens" ? jsxs("div", {
                    className: styles$J.stat,
                    children: [jsxs("div", {
                        className: styles$J.points,
                        children: [beautifyMoney$2(String(o)), " frens"]
                    }), jsx("div", {
                        className: styles$J.delimeter,
                        children: "・"
                    }), jsxs("div", {
                        className: styles$J.frenCoins,
                        children: ["+", d ? formatNumberAbbreviation(d) : 0]
                    })]
                }) : null]
            })
        }), i ? jsx("div", {
            className: styles$J.after,
            children: i
        }) : null, c ? jsx(Icon, {
            name: "chevron-right",
            className: styles$J.chevron
        }) : null]
    })
}
const list = "_list_akfpt_1",
    styles$I = {
        list
    },
    root$7 = "_root_1luq8_1",
    large = "_large_1luq8_10",
    innerWrapper = "_innerWrapper_1luq8_18",
    before = "_before_1luq8_25",
    innerContent = "_innerContent_1luq8_35",
    content$1 = "_content_1luq8_43",
    header = "_header_1luq8_47",
    footer$1 = "_footer_1luq8_56",
    title$g = "_title_1luq8_66",
    withDivider = "_withDivider_1luq8_79",
    link$3 = "_link_1luq8_100",
    prefix$2 = "_prefix_1luq8_105",
    beforeSize40 = "_before-size-40_1luq8_131",
    after = "_after_1luq8_135",
    button$4 = "_button_1luq8_153",
    optionButton = "_option-button_1luq8_154",
    chevron$1 = "_chevron_1luq8_177",
    checkmark = "_checkmark_1luq8_189",
    separate = "_separate_1luq8_193",
    rippleEffect$2 = "_rippleEffect_1luq8_198",
    details = "_details_1luq8_209",
    styles$H = {
        root: root$7,
        large,
        innerWrapper,
        before,
        innerContent,
        content: content$1,
        header,
        footer: footer$1,
        title: title$g,
        withDivider,
        link: link$3,
        prefix: prefix$2,
        "before-size-40": "_before-size-40_1luq8_131",
        beforeSize40,
        after,
        button: button$4,
        "option-button": "_option-button_1luq8_154",
        optionButton,
        chevron: chevron$1,
        checkmark,
        separate,
        rippleEffect: rippleEffect$2,
        details
    },
    root$6 = "_root_15t8r_1",
    colorAccent = "_color-accent_15t8r_14",
    colorTertiary = "_color-tertiary_15t8r_19",
    styles$G = {
        root: root$6,
        "color-accent": "_color-accent_15t8r_14",
        colorAccent,
        "color-tertiary": "_color-tertiary_15t8r_19",
        colorTertiary
    },
    penny = "_penny_4gsi7_1",
    colorYellow = "_color-yellow_4gsi7_21",
    styles$F = {
        penny,
        "color-yellow": "_color-yellow_4gsi7_21",
        colorYellow
    };

function Penny({
    text: e,
    yellow: s = !1
}) {
    return jsx("span", {
        className: cn(styles$F.penny, s && styles$F["color-yellow"]),
        children: e
    })
}
const placeAndLeague = "_placeAndLeague_xg9t0_1",
    gridColumn = "_gridColumn_xg9t0_5",
    place$3 = "_place_xg9t0_1",
    league = "_league_xg9t0_11",
    laurelIconReversed$2 = "_laurelIconReversed_xg9t0_15",
    placeLabel = "_placeLabel_xg9t0_23",
    dot = "_dot_xg9t0_30",
    leagueName = "_leagueName_xg9t0_45",
    leagueChevron = "_leagueChevron_xg9t0_51",
    styles$E = {
        placeAndLeague,
        gridColumn,
        place: place$3,
        league,
        laurelIconReversed: laurelIconReversed$2,
        placeLabel,
        dot,
        leagueName,
        leagueChevron
    },
    PlaceAndLeague = ({
        grid: e = "row",
        leagueId: s,
        chevron: t = !0,
        placeLabel: n = "short",
        type: o = "user"
    }) => {
        var l;
        const r = (l = getLeagueById(s)) == null ? void 0 : l.name,
            a = useNavigate();
        useUserActions();
        const {
            score: c
        } = useUser();
        reactExports.useEffect(() => {}, [s]);
        const i = c.weekly.rank;
        return jsxs("div", {
            className: cn(styles$E.placeAndLeague, e === "column" && styles$E.gridColumn),
            onClick: () => t ? a(`/clicker/league/${s}/${o==="user"?"user":"team"}`) : () => {},
            children: [i ? jsxs("div", {
                className: styles$E.place,
                children: [jsx(Icon, {
                    name: "Laurel"
                }), jsxs("div", {
                    className: styles$E.placeLabel,
                    children: [rankToString$1(i) + " ", n === "full" ? " place" : ""]
                }), jsx(Icon, {
                    name: "Laurel",
                    className: styles$E.laurelIconReversed
                })]
            }) : null, i && e === "row" ? jsx("div", {
                className: styles$E.dot,
                children: "・"
            }) : null, jsxs("div", {
                className: styles$E.league,
                children: [jsx("img", {
                    src: `https://cdn.joincommunity.xyz/clicker/league/${r}-95.png`,
                    height: "24",
                    alt: "League cup",
                    className: styles$E.cup
                }), jsx("div", {
                    className: styles$E.leagueName,
                    children: r
                }), t ? jsx(Icon, {
                    name: "ChevronRight",
                    className: styles$E.leagueChevron,
                    size: "12"
                }) : null]
            })]
        })
    },
    progress = "_progress_m9ri7_1",
    line$1 = "_line_m9ri7_10",
    typeBronze = "_type-bronze_m9ri7_19",
    typeSilver = "_type-silver_m9ri7_23",
    typeGold = "_type-gold_m9ri7_27",
    typePlatinum = "_type-platinum_m9ri7_31",
    typeDiamond = "_type-diamond_m9ri7_35",
    styles$D = {
        progress,
        line: line$1,
        "type-bronze": "_type-bronze_m9ri7_19",
        typeBronze,
        "type-silver": "_type-silver_m9ri7_23",
        typeSilver,
        "type-gold": "_type-gold_m9ri7_27",
        typeGold,
        "type-platinum": "_type-platinum_m9ri7_31",
        typePlatinum,
        "type-diamond": "_type-diamond_m9ri7_35",
        typeDiamond
    },
    Progress$1 = ({
        value: e,
        maxValue: s,
        type: t,
        className: n
    }) => {
        const o = (e > 0 ? e : 1) / s * 100,
            r = o - o / 100 * 10;
        reactExports.useEffect(() => {
            setTimeout(() => {
                a && a.current && (a.current.style.width = `${o}%`, a.current.style.opacity = "1")
            }, 50)
        }, []);
        const a = reactExports.useRef(null);
        return jsx("div", {
            className: cn(styles$D.progress, styles$D[`type-${t}`], n),
            children: jsx("div", {
                ref: a,
                className: styles$D.line,
                style: {
                    width: `${r}%`
                }
            })
        })
    },
    star = "_star_cn5dv_1",
    glitter = "_glitter_cn5dv_1",
    styles$C = {
        star,
        glitter
    },
    delayStep = [.6, .4, .2],
    Stars = ({
        className: e,
        keyId: s,
        amount: t = 3
    }) => jsx("div", {
        className: e,
        children: [...Array(t).keys()].map(n => jsx(motion.svg, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                ease: "easeInOut",
                delay: 1 + delayStep[Math.floor(Math.random() * delayStep.length)] * n
            },
            xmlns: "http://www.w3.org/2000/svg",
            width: "10",
            height: "11",
            viewBox: "0 0 10 11",
            fill: "none",
            className: styles$C.star,
            children: jsx("path", {
                d: "M4.49419 0.881589C4.67056 0.383777 5.37562 0.386747 5.54778 0.886029L6.538 3.75766C6.59105 3.91149 6.70859 4.03451 6.85985 4.09449L9.65098 5.20141C10.1229 5.38856 10.1201 6.05747 9.6466 6.24063L6.84623 7.32399C6.69448 7.3827 6.5759 7.50472 6.52156 7.65809L5.50717 10.5213C5.3308 11.0191 4.62575 11.0161 4.45358 10.5168L3.46336 7.6452C3.41031 7.49137 3.29277 7.36836 3.14152 7.30837L0.350385 6.20145C-0.121519 6.0143 -0.1187 5.3454 0.354764 5.16223L3.15513 4.07888C3.30688 4.02017 3.42546 3.89815 3.4798 3.74477L4.49419 0.881589Z",
                fill: "white"
            })
        }, `${s}-${n}`))
    }),
    modal$5 = "_modal_1vlaf_1",
    body$5 = "_body_1vlaf_9",
    backdrop$5 = "_backdrop_1vlaf_16",
    image$5 = "_image_1vlaf_20",
    title$f = "_title_1vlaf_26",
    link$2 = "_link_1vlaf_34",
    subTitle$2 = "_subTitle_1vlaf_41",
    stars$8 = "_stars_1vlaf_45",
    buttons = "_buttons_1vlaf_65",
    buttonsRow = "_buttonsRow_1vlaf_71",
    isActive$3 = "_isActive_1vlaf_83",
    button$3 = "_button_1vlaf_65",
    styles$B = {
        modal: modal$5,
        body: body$5,
        backdrop: backdrop$5,
        image: image$5,
        title: title$f,
        link: link$2,
        subTitle: subTitle$2,
        stars: stars$8,
        buttons,
        buttonsRow,
        isActive: isActive$3,
        button: button$3
    },
    places = [1, 2, 3, 4, 5, 10, 15],
    priceStep = 1,
    getPlaces = (e, s) => {
        const t = [],
            n = e.find(c => c.team.id.toString() === s),
            o = n ? n.amount : 0,
            a = e.filter(c => c.amount >= o).map((c, i) => ({
                place: i + 1,
                value: c.amount - o + priceStep
            }));
        return places.forEach(c => {
            a[c - 1] && a[c - 1].value > priceStep && t.push(a[c - 1])
        }), t.length || t.push({
            place: 1,
            value: 100
        }), t
    },
    Promote = ({
        isOpen: e,
        onClose: s,
        squadId: t
    }) => {
        const {
            addToast: n,
            hideToasts: o
        } = useToast(), r = window.Telegram.WebApp, a = useNavigate(), [c, i] = reactExports.useState(!1), [l, d] = reactExports.useState(null), [_, p] = reactExports.useState(0), [u, m] = reactExports.useState([]), x = useClickerStore().userProfile;
        reactExports.useEffect(() => {
            e && f()
        }, [e]);
        const f = async () => {
            if (x) {
                const {
                    ok: h,
                    data: y
                } = await fetchBidsApi();
                h && m(getPlaces(y, t))
            }
        };
        reactExports.useEffect(() => () => {
            d(null)
        }, []);
        const g = async () => {
                if (!c && (i(!0), u[_] && u[_].value)) {
                    const {
                        ok: h,
                        data: y
                    } = await generateBidPaymentLinkApi(t, u[_].value);
                    h && r.openTelegramLink(y)
                }
            },
            C = async () => {
                const {
                    ok: h,
                    data: y
                } = await fetchBidStatusApi();
                h && (y.isPaid && (n({
                    type: "success",
                    message: "Payment is successfully done"
                }), d(null), i(!1)), y.isFalse && (n({
                    type: "success",
                    message: "Payment processing error"
                }), d(null), i(!1)))
            };
        return reactExports.useEffect(() => () => {
            d(null)
        }, []), reactExports.useEffect(() => {
            d(c ? 3e3 : null)
        }, [c]), useInterval(() => {
            C()
        }, l), jsx(Fragment, {
            children: jsx(Sheet, {
                opened: e,
                onClose: s,
                onBackdropClick: s,
                contentClassName: styles$B.modal,
                backdropClassName: styles$B.backdrop,
                children: jsxs("div", {
                    className: styles$B.body,
                    children: [jsx(Stars, {
                        className: styles$B.stars,
                        keyId: "stars",
                        amount: 3
                    }), jsx("img", {
                        className: styles$B.image,
                        src: "https://cdn.joincommunity.xyz/clicker/league/squad.png"
                    }), jsxs("div", {
                        className: styles$B.title,
                        children: ["Boost your Squad", jsx("br", {}), " for 24 hours"]
                    }), jsxs("div", {
                        className: styles$B.subTitle,
                        children: ["And recruit more people. Anyone can donate to boost the Squad to the top", " ", jsx("span", {
                            className: styles$B.link,
                            onClick: () => a("/clicker/league/squad"),
                            children: "of the list"
                        })]
                    }), jsx("div", {
                        className: styles$B.subTitle,
                        children: "The current price for a place on the list."
                    }), jsxs("div", {
                        className: styles$B.subTitle,
                        children: [jsx("b", {
                            children: "Auction style:"
                        }), " the squad with the higher bid goes to the higher position. Anyone can add bids to the same squad. Add more bids to move your squad to the top."]
                    }), jsxs("div", {
                        className: styles$B.buttons,
                        children: [u.length ? null : "Loading...", jsx("div", {
                            className: styles$B.buttonsRow,
                            children: u.map((h, y) => jsxs(Button$1, {
                                type: "basic",
                                className: cn(styles$B.button, _ === y && styles$B.isActive),
                                onClick: () => p(y),
                                children: [h.place, nth(h.place), " - $", h.value]
                            }, y))
                        })]
                    }), jsx(Button$1, {
                        type: "blue",
                        disabled: c,
                        onClick: g,
                        children: c ? "Processing..." : "Boost for 24 hours"
                    })]
                })
            })
        })
    },
    characters = "_characters_3nbxi_1",
    characterList = "_characterList_3nbxi_7",
    height24$1 = "_height-24_3nbxi_11",
    character = "_character_3nbxi_1",
    height36$1 = "_height-36_3nbxi_19",
    height40 = "_height-40_3nbxi_27",
    styles$A = {
        characters,
        characterList,
        "height-24": "_height-24_3nbxi_11",
        height24: height24$1,
        character,
        "height-36": "_height-36_3nbxi_19",
        height36: height36$1,
        "height-40": "_height-40_3nbxi_27",
        height40
    },
    durationStep = [.2, .4, .6, .8],
    generateDigitList = (e, s, t, n) => {
        const o = [];
        for (let a = 0; a < e; a++)[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(c => {
            o.push(jsx("div", {
                children: c
            }, `${a}_${c}`))
        });
        let r = s;
        return s === 0 ? r = 10 : s === 1 ? r = 11 : r = s, jsxs(motion.div, {
            className: styles$A.characterList,
            initial: {
                y: 0
            },
            animate: {
                y: r * -n
            },
            transition: {
                ease: "easeOut",
                duration: .5 + durationStep[Math.floor(Math.random() * durationStep.length)],
                delay: t * .1
            },
            children: [jsx("div", {
                children: " "
            }, "first"), o, jsx("div", {
                children: " "
            }, "last")]
        }, `${s}_${t}`)
    },
    generateLetterList = (e, s, t) => jsxs(motion.div, {
        className: styles$A.characterList,
        initial: {
            opacity: 0,
            y: 0
        },
        animate: {
            opacity: 1,
            y: -t
        },
        transition: {
            ease: "easeOut",
            duration: .7
        },
        children: [jsx("div", {
            children: " "
        }, "first"), jsx("div", {
            children: e
        }, "middle"), jsx("div", {
            children: " "
        }, "last")]
    }, `${e}_${s}`),
    RollingNumbers = ({
        value: e = "",
        height: s
    }) => {
        const t = e.toString().split("");
        return jsx("div", {
            className: cn(styles$A.characters, styles$A[`height-${s}`]),
            children: t.map((n, o) => n === "K" || n === "M" || n === "+" || n === "." ? generateLetterList(n, o, s) : generateDigitList(3, parseInt(n, 10), o, s))
        })
    },
    root$5 = "_root_j2say_5",
    pulse = "_pulse_j2say_1",
    line = "_line_j2say_15",
    thickLine = "_thickLine_j2say_21",
    height12 = "_height12_j2say_26",
    height24 = "_height24_j2say_30",
    height36 = "_height36_j2say_34",
    height48 = "_height48_j2say_38",
    line20 = "_line20_j2say_42",
    line40 = "_line40_j2say_46",
    line50 = "_line50_j2say_50",
    mb16 = "_mb16_j2say_54",
    mb28 = "_mb28_j2say_58",
    mb48 = "_mb48_j2say_62",
    listItem$1 = "_listItem_j2say_66",
    listItemMedia = "_listItemMedia_j2say_72",
    listItemLine = "_listItemLine_j2say_79",
    listItemSeparate = "_listItemSeparate_j2say_98",
    listItemLarge = "_listItemLarge_j2say_107",
    marginBottom9 = "_margin-bottom-9_j2say_116",
    marginBottom12 = "_margin-bottom-12_j2say_123",
    leaderboardItem = "_leaderboardItem_j2say_130",
    leaderboardItemPrefix = "_leaderboardItemPrefix_j2say_137",
    leaderboardItemMedia = "_leaderboardItemMedia_j2say_146",
    leaderboardItemContentWrap = "_leaderboardItemContentWrap_j2say_154",
    leaderboardItemContentTitle = "_leaderboardItemContentTitle_j2say_157",
    leaderboardItemContent = "_leaderboardItemContent_j2say_154",
    image$4 = "_image_j2say_171",
    boostItem = "_boostItem_j2say_176",
    icon$3 = "_icon_j2say_185",
    content = "_content_j2say_193",
    contentMeta = "_contentMeta_j2say_196",
    name = "_name_j2say_200",
    price$2 = "_price_j2say_206",
    frenItem = "_frenItem_j2say_222",
    frenItemMedia = "_frenItemMedia_j2say_233",
    frenItemContentWrap = "_frenItemContentWrap_j2say_241",
    frenItemContentTitle = "_frenItemContentTitle_j2say_244",
    frenItemPostfix = "_frenItemPostfix_j2say_251",
    frenItemContent = "_frenItemContent_j2say_241",
    styles$z = {
        root: root$5,
        pulse,
        line,
        thickLine,
        height12,
        height24,
        height36,
        height48,
        line20,
        line40,
        line50,
        mb16,
        mb28,
        mb48,
        listItem: listItem$1,
        listItemMedia,
        listItemLine,
        listItemSeparate,
        listItemLarge,
        "margin-bottom-9": "_margin-bottom-9_j2say_116",
        marginBottom9,
        "margin-bottom-12": "_margin-bottom-12_j2say_123",
        marginBottom12,
        leaderboardItem,
        leaderboardItemPrefix,
        leaderboardItemMedia,
        leaderboardItemContentWrap,
        leaderboardItemContentTitle,
        leaderboardItemContent,
        image: image$4,
        boostItem,
        icon: icon$3,
        content,
        contentMeta,
        name,
        price: price$2,
        frenItem,
        frenItemMedia,
        frenItemContentWrap,
        frenItemContentTitle,
        frenItemPostfix,
        frenItemContent
    },
    transition = {
        ease: "easeInOut",
        duration: .3
    },
    variants = {
        initial: {
            opacity: 0,
            transition
        },
        enter: {
            opacity: 1,
            transition
        },
        exit: {
            opacity: 0,
            transition
        }
    },
    Skeleton = () => jsxs(motion.div, {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        className: styles$z.root,
        variants,
        children: [jsxs("div", {
            className: styles$z.listItem,
            children: [jsx("div", {
                className: styles$z.listItemMedia
            }), jsx("div", {
                className: styles$z.listItemLine
            })]
        }), jsxs("div", {
            className: styles$z.listItem,
            children: [jsx("div", {
                className: styles$z.listItemMedia
            }), jsx("div", {
                className: styles$z.listItemLine
            })]
        }), jsxs("div", {
            className: styles$z.listItem,
            children: [jsx("div", {
                className: styles$z.listItemMedia
            }), jsx("div", {
                className: styles$z.listItemLine
            })]
        })]
    }),
    SkeletonListItem = ({
        key: e,
        large: s,
        separate: t,
        marginBottom: n
    }) => jsxs(motion.div, {
        initial: "initial",
        animate: "enter",
        variants,
        className: cn(styles$z.listItem, s && styles$z.listItemLarge, t && styles$z.listItemSeparate, n && styles$z[`margin-bottom-${n}`]),
        children: [jsx("div", {
            className: styles$z.listItemMedia
        }), jsx("div", {
            className: styles$z.listItemLine
        })]
    }, e),
    SkeletonLine = ({
        className: e,
        heightSize: s = "36"
    }) => jsx(motion.div, {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        className: cn(styles$z.root, e),
        variants,
        children: jsx("div", {
            className: cn(styles$z.thickLine, styles$z[`height${s}`])
        })
    }),
    SkeletonLeaderboardItem = ({
        key: e
    }) => jsxs(motion.div, {
        initial: "initial",
        animate: "enter",
        variants,
        className: styles$z.leaderboardItem,
        children: [jsx("div", {
            className: styles$z.leaderboardItemPrefix
        }), jsx("div", {
            className: styles$z.leaderboardItemMedia
        }), jsxs("div", {
            className: styles$z.leaderboardItemContentWrap,
            children: [jsx("div", {
                className: styles$z.leaderboardItemContentTitle
            }), jsx("div", {
                className: styles$z.leaderboardItemContent
            })]
        })]
    }, e),
    SkeletonImage = ({
        className: e,
        width: s,
        height: t,
        borderRadius: n
    }) => jsx(motion.div, {
        initial: "initial",
        animate: "enter",
        variants,
        style: {
            width: `${s}px`,
            height: `${t}px`,
            borderRadius: `${n}px`
        },
        className: cn(styles$z.image, e)
    }),
    SkeletonBoostItem = () => jsxs(motion.div, {
        className: styles$z.boostItem,
        children: [jsx("div", {
            className: styles$z.icon
        }), jsxs("div", {
            className: styles$z.content,
            children: [jsx("div", {
                className: styles$z.name
            }), jsx("div", {
                className: styles$z.contentMeta
            }), jsx("div", {
                className: styles$z.price
            })]
        })]
    }),
    SkeletonFrenItem = ({
        key: e
    }) => jsxs(motion.div, {
        initial: "initial",
        animate: "enter",
        variants,
        className: styles$z.frenItem,
        children: [jsx("div", {
            className: styles$z.frenItemMedia
        }), jsxs("div", {
            className: styles$z.frenItemContentWrap,
            children: [jsx("div", {
                className: styles$z.frenItemContentTitle
            }), jsx("div", {
                className: styles$z.frenItemContent
            })]
        }), jsx("div", {
            className: styles$z.frenItemPostfix
        })]
    }, e);
Skeleton.Line = SkeletonLine;
Skeleton.ListItem = SkeletonListItem;
Skeleton.LeaderboardItem = SkeletonLeaderboardItem;
Skeleton.FrenItem = SkeletonFrenItem;
Skeleton.Image = SkeletonImage;
Skeleton.BoostItem = SkeletonBoostItem;
const price$1 = "_price_1gcic_1",
    expire = "_expire_1gcic_2",
    isCompleted$1 = "_isCompleted_1gcic_24",
    footer = "_footer_1gcic_28",
    isLocked$1 = "_isLocked_1gcic_33",
    yellow$3 = "_yellow_1gcic_40",
    red$1 = "_red_1gcic_45",
    level$2 = "_level_1gcic_54",
    separator$3 = "_separator_1gcic_59",
    isActive$2 = "_isActive_1gcic_67",
    isCompletedIcon$1 = "_isCompletedIcon_1gcic_71",
    badge = "_badge_1gcic_75",
    isEnabled = "_isEnabled_1gcic_84",
    styles$y = {
        price: price$1,
        expire,
        isCompleted: isCompleted$1,
        footer,
        isLocked: isLocked$1,
        yellow: yellow$3,
        red: red$1,
        level: level$2,
        separator: separator$3,
        isActive: isActive$2,
        isCompletedIcon: isCompletedIcon$1,
        badge,
        isEnabled
    };
var SkinStatusEnum = (e => (e[e.purchased = 0] = "purchased", e[e.available = 1] = "available", e[e.enabled = 2] = "enabled", e[e.lockedByPrice = 3] = "lockedByPrice", e[e.lockedByChallenge = 4] = "lockedByChallenge", e))(SkinStatusEnum || {});
const renderSkinFooterByStatus = e => {
        const {
            skin: s,
            skinStatus: t
        } = e;
        return t === SkinStatusEnum.available ? jsx("div", {
            className: cn(styles$y.footer, styles$y.price),
            children: beautifyMoney$1(String(s.coins))
        }) : t === SkinStatusEnum.purchased ? jsx("div", {
            className: cn(styles$y.footer, styles$y.isCompleted),
            children: "You own it"
        }) : t === SkinStatusEnum.lockedByPrice ? jsxs("div", {
            className: cn(styles$y.footer, styles$y.isLocked),
            children: [jsx("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: jsx("path", {
                    d: "M4.69554 15H11.3038C12.2167 15 12.6663 14.5336 12.6663 13.5018V8.20848C12.6663 7.27562 12.2985 6.80212 11.5354 6.72438V4.9788C11.5354 2.29329 9.81184 1 7.99968 1C6.18751 1 4.46391 2.29329 4.46391 4.9788V6.74558C3.75539 6.85866 3.33301 7.32509 3.33301 8.20848V13.5018C3.33301 14.5336 3.78264 15 4.69554 15ZM5.77194 4.85159C5.77194 3.20495 6.78021 2.30035 7.99968 2.30035C9.21233 2.30035 10.2274 3.20495 10.2274 4.85159V6.71025L5.77194 6.71731V4.85159Z",
                    fill: "#FEB803"
                })
            }), t === SkinStatusEnum.lockedByPrice ? beautifyMoney$1(String(s.coins)) : null]
        }) : t === SkinStatusEnum.lockedByChallenge ? jsxs("div", {
            className: cn(styles$y.footer, styles$y.isLocked),
            children: [jsx("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: jsx("path", {
                    d: "M4.69554 15H11.3038C12.2167 15 12.6663 14.5336 12.6663 13.5018V8.20848C12.6663 7.27562 12.2985 6.80212 11.5354 6.72438V4.9788C11.5354 2.29329 9.81184 1 7.99968 1C6.18751 1 4.46391 2.29329 4.46391 4.9788V6.74558C3.75539 6.85866 3.33301 7.32509 3.33301 8.20848V13.5018C3.33301 14.5336 3.78264 15 4.69554 15ZM5.77194 4.85159C5.77194 3.20495 6.78021 2.30035 7.99968 2.30035C9.21233 2.30035 10.2274 3.20495 10.2274 4.85159V6.71025L5.77194 6.71731V4.85159Z",
                    fill: "#FEB803"
                })
            }), "Task is not completed"]
        }) : null
    },
    SkinItem = ({
        skin: e,
        skinStatus: s,
        onClick: t
    }) => {
        const {
            image: n
        } = e, {
            title: o,
            icon: r,
            price: a
        } = skinsData[n], c = {
            color: "pale-grey",
            type: "cover-src",
            value: r
        }, i = renderSkinFooterByStatus({
            skin: Object.assign({ ...e,
                price: a
            }),
            skinStatus: s
        });
        let l = null;
        s === SkinStatusEnum.purchased && (l = jsx("div", {
            className: styles$y.badge,
            children: "turn on"
        })), s === SkinStatusEnum.enabled && (l = jsx("div", {
            className: cn(styles$y.badge, styles$y.isEnabled),
            children: "enabled"
        }));
        const d = s === SkinStatusEnum.available,
            _ = jsx(MediaIcon, {
                media: c,
                imageSize: "48",
                size: "72",
                borderRadius: "12"
            }),
            p = s === SkinStatusEnum.enabled || s === SkinStatusEnum.lockedByPrice,
            u = !1,
            m = !1;
        return jsx(ListItem, {
            onClick: t,
            divider: !1,
            title: jsx(Text, {
                color: "secondary",
                className: cn(p && styles$y.disabled, u),
                children: o
            }),
            footer: i,
            before: _,
            after: l,
            ripple: !p && !u && !m,
            chevron: d,
            large: !0
        })
    },
    defaultSkinModel = {
        id: 100500,
        type: "skin",
        title: "Dark",
        name: "default",
        coins: 1,
        price: 0,
        max: 1,
        expiresAt: "",
        isPartner: !1,
        status: "active",
        createdAt: "",
        image: "default",
        isPurchased: !0,
        isCompleted: !0,
        count: 1,
        category: "skin"
    },
    SkinCarousel = ({}) => {
        const {
            setCurrentSkin: e,
            currentSkin: s,
            skins: t
        } = useBoostStore(), {
            userProfile: n,
            score: o,
            setClickerProfile: r
        } = useClickerStore(), {
            addToast: a,
            hideToasts: c
        } = useToast(), [i, l] = useToggle(!1), [d, _] = reactExports.useState(null), p = useNavigate(), u = h => {
            if (g === h) return;
            let y = t.find(b => b.id === h);
            const k = (y == null ? void 0 : y.coins) && o >= y.coins;
            y && y.isCompleted, h === defaultSkinModel.id && (y = defaultSkinModel), _(y || null), l()
        }, m = async h => {
            window.plausible && window.plausible("apply-skin", {
                props: {
                    id: h
                }
            }), e(h), p("/clicker")
        }, x = async h => {
            a({
                message: "Buying...",
                type: "loading"
            }), await buyBoost(h).then(async y => {
                if (y != null && y.ok) {
                    const k = t.find(b => b.id === h);
                    r(y.data), k && (c(), m(k == null ? void 0 : k.image))
                } else {
                    const k = y != null && y.data.message ? y == null ? void 0 : y.data.message : "¯_(ツ)_/¯ Buying error. Try again later.";
                    a({
                        message: k,
                        type: "error"
                    })
                }
            })
        }, f = t.find(h => h.image === s), g = f ? f.id : defaultSkinModel.id, C = reactExports.useMemo(() => t.sort((h, y) => h.coins > y.coins ? 1 : -1), [t]);
        return jsxs(Fragment, {
            children: [jsx(Carousel, {
                list: [jsx(SkinItem, {
                    skin: defaultSkinModel,
                    userBalance: o,
                    skinStatus: g === defaultSkinModel.id ? SkinStatusEnum.enabled : SkinStatusEnum.purchased,
                    onClick: () => u(defaultSkinModel.id)
                }, "skin-boost-default"), ...C.map(h => {
                    const y = g === h.id,
                        k = h.coins && o >= h.coins;
                    let b = SkinStatusEnum.available;
                    return k || (b = SkinStatusEnum.lockedByPrice), h.challengeId && !h.isCompleted && (b = SkinStatusEnum.lockedByChallenge), h.isCompleted && (b = SkinStatusEnum.purchased), y && (b = SkinStatusEnum.enabled), h.challengeId ? jsx(SkinEarnItem, {
                        skin: h,
                        skinStatus: b,
                        onClick: () => u(h.id)
                    }, h.id) : jsx(SkinItem, {
                        skin: h,
                        userBalance: o,
                        skinStatus: b,
                        onClick: () => u(h.id)
                    }, h.id)
                })],
                slideSize: 4
            }), jsx(SkinSheet, {
                isPurchased: (d == null ? void 0 : d.isCompleted) || !1,
                isOpened: i,
                onClose: l,
                skin: d,
                onBuy: x,
                onApply: m
            })]
        })
    },
    SkinEarnItem = ({
        skin: e,
        skinStatus: s,
        onClick: t
    }) => {
        const [n, o] = reactExports.useState(!1);
        useToast(), useNavigate(), window.Telegram.WebApp;
        const {
            image: r,
            isCompleted: a,
            challengeId: c,
            id: i
        } = e, {
            title: l,
            icon: d,
            price: _
        } = skinsData[r], p = {
            color: "pale-grey",
            type: "cover-src",
            value: d
        }, u = renderSkinFooterByStatus({
            skin: Object.assign({ ...e,
                price: _
            }),
            skinStatus: s
        });
        let m = null;
        s === SkinStatusEnum.purchased && (m = jsx("div", {
            className: styles$y.badge,
            children: "turn on"
        })), s === SkinStatusEnum.enabled && (m = jsx("div", {
            className: cn(styles$y.badge, styles$y.isEnabled),
            children: "enabled"
        }));
        const x = s === SkinStatusEnum.available,
            f = jsx(MediaIcon, {
                media: p,
                imageSize: "72",
                size: "72",
                borderRadius: "12"
            }),
            g = s === SkinStatusEnum.enabled || s === SkinStatusEnum.lockedByChallenge;
        return jsx(ListItem, {
            onClick: t,
            divider: !1,
            title: jsx(Text, {
                color: "secondary",
                className: cn(g && styles$y.disabled, a && styles$y.isCompleted),
                children: l
            }),
            footer: u,
            before: f,
            after: m,
            ripple: !g && !a && !n,
            chevron: x,
            large: !0
        })
    },
    title$e = "_title_z11r6_1",
    subtitle$5 = "_subtitle_z11r6_10",
    image$3 = "_image_z11r6_18",
    backButton$3 = "_backButton_z11r6_29",
    modal$4 = "_modal_z11r6_45",
    body$4 = "_body_z11r6_53",
    backdrop$4 = "_backdrop_z11r6_60",
    board$1 = "_board_z11r6_64",
    card$2 = "_card_z11r6_70",
    cardTitle$1 = "_cardTitle_z11r6_73",
    cardSubtitle$1 = "_cardSubtitle_z11r6_78",
    cardTextYellow$1 = "_cardTextYellow_z11r6_83",
    score$7 = "_score_z11r6_87",
    successIcon$1 = "_successIcon_z11r6_111",
    squadIcon$1 = "_squadIcon_z11r6_116",
    level$1 = "_level_z11r6_121",
    styles$x = {
        title: title$e,
        subtitle: subtitle$5,
        image: image$3,
        backButton: backButton$3,
        modal: modal$4,
        body: body$4,
        backdrop: backdrop$4,
        board: board$1,
        card: card$2,
        cardTitle: cardTitle$1,
        cardSubtitle: cardSubtitle$1,
        cardTextYellow: cardTextYellow$1,
        score: score$7,
        successIcon: successIcon$1,
        squadIcon: squadIcon$1,
        level: level$1
    },
    SkinSheet = ({
        isOpened: e,
        onClose: s,
        skin: t,
        onBuy: n,
        onApply: o,
        isPurchased: r
    }) => {
        const a = useNavigate(),
            c = async () => {
                t.challengeId ? a("/clicker/earn") : await n(t.id)
            },
            i = () => {
                s(), t.image && o(t.image)
            };
        return jsx(Sheet, {
            opened: e,
            onClose: s,
            onBackdropClick: s,
            contentClassName: styles$x.modal,
            backdropClassName: styles$x.backdrop,
            children: t !== null ? jsxs("div", {
                className: styles$x.body,
                children: [jsx("div", {
                    className: styles$x.image,
                    children: jsx(Image, {
                        src: skinsData[t.image].icon
                    })
                }), jsx(Text, {
                    type: "title-0",
                    weight: "bold",
                    margin: "0-0-6-0",
                    align: "center",
                    color: "white",
                    children: skinsData[t.image].title
                }), jsx(Text, {
                    type: "subheadline-1",
                    margin: "0-0-24-0",
                    align: "center",
                    color: "secondary",
                    children: skinsData[t.image].description
                }), !r && !t.challengeId ? jsx("div", {
                    className: styles$x.board,
                    children: jsx("div", {
                        className: styles$x.card,
                        children: jsx("div", {
                            className: cn(styles$x.cardTitle, styles$x.score),
                            children: beautifyMoney$1(String(t.coins))
                        })
                    })
                }) : null, r ? jsx(Button, {
                    type: "Blue",
                    onClick: () => i(),
                    children: "Apply Skin"
                }) : jsx(Button, {
                    type: "Blue",
                    onClick: () => c(),
                    children: t.challengeId ? "Open task" : "Get"
                })]
            }) : null
        })
    },
    solidRoot = "_solidRoot_pcseb_1",
    activeBar = "_activeBar_pcseb_14",
    tabPanel = "_tabPanel_pcseb_29",
    tabPanelActive = "_tabPanelActive_pcseb_32",
    solidTabButton = "_solidTabButton_pcseb_36",
    isActive$1 = "_isActive_pcseb_62",
    flatRoot = "_flatRoot_pcseb_69",
    tabButton = "_tabButton_pcseb_92",
    flatTabButton = "_flatTabButton_pcseb_98",
    styles$w = {
        solidRoot,
        activeBar,
        tabPanel,
        tabPanelActive,
        solidTabButton,
        isActive: isActive$1,
        flatRoot,
        tabButton,
        flatTabButton
    };

function Tabs({
    flat: e,
    onChange: s,
    children: t,
    className: n,
    activeIndex: o
}) {
    const r = p => {
            s(p)
        },
        a = React.Children.map(t, (p, u) => React.cloneElement(p, {
            index: u,
            activeIndex: o,
            onClick: r
        })),
        c = "4px",
        i = e ? "0px" : "4px",
        l = a ? a.length : 0,
        [d, _] = reactExports.useState({
            transform: `translateX(calc(${o} * 100% + ${o} * ${c}))`,
            width: `calc((100% - ${i} * 2 - ${c} * (${l} - 1)) / ${l})`
        });
    return reactExports.useEffect(() => {
        _({
            transform: `translateX(calc(${o} * 100% + ${o} * ${c}))`,
            width: `calc((100% - ${i} * 2 - ${c} * (${l} - 1)) / ${l})`
        })
    }, [o]), jsxs("div", {
        className: cn(e && styles$w.flatRoot, !e && styles$w.solidRoot, n),
        children: [a, jsx("div", {
            className: cn(styles$w.activeBar),
            style: d
        })]
    })
}
Tabs.displayName = "Tabs";
const Tab = ({
    label: e,
    onClick: s,
    index: t,
    className: n,
    activeIndex: o,
    flat: r = !1
}) => {
    const a = i => s && s(i),
        c = o === t;
    return jsx("button", {
        className: cn(styles$w.tabButton, r && styles$w.flatTabButton, !r && styles$w.solidTabButton, c && styles$w.isActive, n && n),
        onClick: () => a(t || 0),
        type: "button",
        role: "tab",
        "aria-selected": "false",
        tabIndex: -1,
        children: e
    })
};
Tab.displayName = "Tab";
const taskCarousel = "_taskCarousel_nprs6_1",
    styles$v = {
        taskCarousel
    },
    taskDailyItem = "_taskDailyItem_e8sye_1",
    bodyWrap = "_bodyWrap_e8sye_10",
    title$d = "_title_e8sye_14",
    status = "_status_e8sye_21",
    icon$2 = "_icon_e8sye_28",
    completed = "_completed_e8sye_35",
    styles$u = {
        taskDailyItem,
        bodyWrap,
        title: title$d,
        status,
        icon: icon$2,
        completed
    };

function minsToMidnight() {
    var e = new Date(new Date().setUTCHours(24, 0, 0, 0)),
        s = new Date().getTime();
    return Math.floor((e - s) / 6e4)
}

function getMidnightStatus() {
    const e = minsToMidnight();
    if (e >= 60) {
        const s = Math.floor(e / 60);
        return `${s} hour${s>1?"s":""} left`
    }
    return `${e} min${e>1?"s":""} left`
}

function getTaskStatus({
    type: e,
    completions: s = 0,
    max: t
}) {
    return s >= t ? getMidnightStatus() : `${t-s}/${t} available`
}
const TaskDailyItem = ({
        task: e,
        onClick: s
    }) => {
        const {
            type: t,
            completions: n,
            max: o
        } = e, {
            title: r,
            icon: a
        } = e, c = () => {
            l || s()
        }, i = getTaskStatus(e), l = n === o;
        return jsxs("div", {
            className: cn(styles$u.taskDailyItem, l && styles$u.completed),
            onClick: c,
            children: [jsxs("div", {
                className: styles$u.bodyWrap,
                children: [jsx("div", {
                    className: styles$u.title,
                    children: r
                }), jsx("div", {
                    className: styles$u.status,
                    children: i
                })]
            }), jsx("div", {
                className: styles$u.icon,
                children: a
            })]
        })
    },
    TaskCarousel = ({
        onSuccess: e
    }) => {
        const {
            addToast: s,
            hideToasts: t
        } = useToast(), [n, o] = useToggle(!1), [r, a] = reactExports.useState(null), {
            dailyTasks: c,
            fetchTasks: i,
            isLoaded: l,
            completeTask: d
        } = useTaskStore();
        useClickerStore();
        const _ = m => {
                t(), a(m), o()
            },
            p = async (m, x) => {
                s({
                    message: "Claiming...",
                    type: "loading"
                });
                const {
                    ok: f
                } = await d(m);
                f ? (await i(), e("daily", x)) : s({
                    message: "¯_(ツ)_/¯ Claiming error. Try again later.",
                    type: "error"
                })
            },
            u = c.sort((m, x) => m.id > x.id ? 1 : -1).sort(m => m.completions === m.max ? 1 : -1);
        return l ? jsxs(Fragment, {
            children: [jsx(TaskSheet, {
                isOpened: n,
                onClose: o,
                task: r,
                claim: p
            }), jsx(Content, {
                className: styles$v.taskCarousel,
                children: u.map((m, x) => jsx(TaskDailyItem, {
                    task: m,
                    onClick: () => _(m)
                }, `task-${m.id}`))
            })]
        }) : null
    },
    price = "_price_1qnug_1",
    priceWrap = "_priceWrap_1qnug_19",
    isCompleted = "_isCompleted_1qnug_22",
    isLocked = "_isLocked_1qnug_26",
    yellow$2 = "_yellow_1qnug_33",
    red = "_red_1qnug_38",
    level = "_level_1qnug_52",
    separator$2 = "_separator_1qnug_57",
    isActive = "_isActive_1qnug_65",
    isCompletedIcon = "_isCompletedIcon_1qnug_69",
    styles$t = {
        price,
        priceWrap,
        isCompleted,
        isLocked,
        yellow: yellow$2,
        red,
        level,
        separator: separator$2,
        isActive,
        isCompletedIcon
    },
    TaskEarn = ({
        userLeagueId: e,
        task: s,
        userBalance: t,
        onClick: n
    }) => {
        const o = window.Telegram.WebApp,
            {
                type: r,
                coins: a,
                id: c,
                isCompleted: i,
                icon: l,
                title: d,
                imageType: _,
                imageSize: p,
                challengeId: u,
                minLeagueId: m
            } = s,
            {
                setClickerProfile: x
            } = useClickerStore(),
            {
                completeTask: f
            } = useTaskStore(),
            {
                addToast: g,
                hideToasts: C
            } = useToast(),
            [h, y] = reactExports.useState(!1),
            k = async () => {
                if (h || i || m && e && e < m) return;
                y(!0);
                const {
                    ok: L,
                    data: T
                } = ["challengeCompleted", "telegramPremium", "welcomeToTon"].indexOf(r) !== -1 ? await claimPartnerReward(c) : await f(c);
                L ? (x(T), C(), g({
                    message: `Task is done +${beautifyMoney$1(String(a))} Notcoin`,
                    type: "success"
                })) : u ? (n && n(s), o.openTelegramLink(`https://t.me/community_bot/join?startapp=id_${u}-b_nb`)) : g({
                    message: "You've not completed the task.",
                    type: "error"
                }), y(!1)
            },
            b = {
                color: "pale-grey",
                type: _ || "cover-emoji",
                value: l
            };
        let $ = null;
        m && e && e < m ? $ = jsxs("div", {
            className: cn(styles$t.isLocked),
            children: [jsx("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: jsx("path", {
                    d: "M4.69554 15H11.3038C12.2167 15 12.6663 14.5336 12.6663 13.5018V8.20848C12.6663 7.27562 12.2985 6.80212 11.5354 6.72438V4.9788C11.5354 2.29329 9.81184 1 7.99968 1C6.18751 1 4.46391 2.29329 4.46391 4.9788V6.74558C3.75539 6.85866 3.33301 7.32509 3.33301 8.20848V13.5018C3.33301 14.5336 3.78264 15 4.69554 15ZM5.77194 4.85159C5.77194 3.20495 6.78021 2.30035 7.99968 2.30035C9.21233 2.30035 10.2274 3.20495 10.2274 4.85159V6.71025L5.77194 6.71731V4.85159Z",
                    fill: "#FEB803"
                })
            }), getLeagueById(m).name, " league"]
        }) : a === 0 ? $ = null : $ = jsx("div", {
            className: cn(styles$t.price, i && styles$t.isCompleted),
            children: i ? "Completed" : `+${beautifyMoney$1(String(a))}`
        });
        let I = !!(t && !i);
        const S = jsx(MediaIcon, {
            className: cn(i && styles$t.isCompletedIcon),
            media: b,
            imageSize: p || "72",
            size: "72",
            borderRadius: "12"
        });
        return jsx(BoostItem, { ...s,
            onClick: k,
            isDisabled: !I,
            title: d,
            footer: $,
            before: S,
            isCompleted: i,
            isLoading: h
        })
    },
    title$c = "_title_kzxmr_1",
    subtitle$4 = "_subtitle_kzxmr_10",
    image$2 = "_image_kzxmr_18",
    backButton$2 = "_backButton_kzxmr_25",
    modal$3 = "_modal_kzxmr_41",
    body$3 = "_body_kzxmr_49",
    backdrop$3 = "_backdrop_kzxmr_56",
    board = "_board_kzxmr_60",
    card$1 = "_card_kzxmr_66",
    cardTitle = "_cardTitle_kzxmr_76",
    cardSubtitle = "_cardSubtitle_kzxmr_81",
    cardTextYellow = "_cardTextYellow_kzxmr_86",
    score$6 = "_score_kzxmr_90",
    successIcon = "_successIcon_kzxmr_114",
    squadIcon = "_squadIcon_kzxmr_119",
    styles$s = {
        title: title$c,
        subtitle: subtitle$4,
        image: image$2,
        backButton: backButton$2,
        modal: modal$3,
        body: body$3,
        backdrop: backdrop$3,
        board,
        card: card$1,
        cardTitle,
        cardSubtitle,
        cardTextYellow,
        score: score$6,
        successIcon,
        squadIcon
    },
    TaskSheet = ({
        isOpened: e,
        onClose: s,
        task: t,
        claim: n
    }) => {
        const o = async (r, a) => {
            await n(r, a), s()
        };
        return jsx(Sheet, {
            opened: e,
            onClose: s,
            onBackdropClick: s,
            contentClassName: styles$s.modal,
            backdropClassName: styles$s.backdrop,
            children: t ? jsxs("div", {
                className: styles$s.body,
                children: [jsx("div", {
                    className: styles$s.image,
                    children: t.icon
                }), jsx(Text, {
                    type: "title-0",
                    weight: "bold",
                    margin: "0-0-4-0",
                    align: "center",
                    color: "white",
                    children: t.title
                }), jsx(Text, {
                    type: "subheadline-1",
                    margin: "0-0-16-0",
                    align: "center",
                    color: "secondary",
                    children: t.description
                }), jsx("div", {
                    className: styles$s.board,
                    children: jsx("div", {
                        className: cn(styles$s.cardTitle, styles$s.score),
                        children: "Free"
                    })
                }), jsx(Button, {
                    onClick: () => o(t.id, t.type),
                    children: "Get"
                })]
            }) : null
        })
    },
    ukranian$7 = {
        oneTitle: "Тапай по монетi на екранi",
        oneDescr: "Та дивись, як зростає баланс",
        twoTitle: "Прокачуй покращення",
        twoDescr: "Та заробляй Notcoin виконуючи завдання",
        threeTitle: "Змагайся з iншими гравцями",
        threeDescr: "Та спробуй дiйти до Diamond лiги",
        fourTitle: "Приєднуйся до команд",
        fourDescr: "Щоб отримати ще бiльше эмоцiй вiд гри",
        more: "Дiзнатись бiльше",
        moreLink: "https://notcoin.notion.site/Notcoin-12ea93f0159d4db199a512a9bb5ea713?pvs=74",
        button: "Грати"
    },
    ClickerBoostsExplanationPageL10n = {
        en: {
            oneTitle: "Tap-to-earn Notcoin",
            oneDescr: "Yes, that’s easy",
            twoTitle: "Upgrade your Boosts",
            twoDescr: "And earn Notcoin for tasks",
            threeTitle: "Climb to the top",
            threeDescr: "Get to the Diamond league",
            fourTitle: "Join Squad!",
            fourDescr: "More fun together",
            more: "Full guide",
            moreLink: "https://notcoin.notion.site/Notcoin-a-full-guide-1c5a21aaf01f4209acc3b8540f3bc84b",
            button: "Play "
        },
        ru: {
            oneTitle: "Жми на монету",
            oneDescr: "И получай Notcoin",
            twoTitle: "Прокачивай Boosts",
            twoDescr: "Чтобы получать больше монет",
            threeTitle: "Соревнуйся с другими",
            threeDescr: "Дойди до Diamond лиги",
            fourTitle: "Вступай в Squad",
            fourDescr: "Вместе больше фана",
            more: "Подробный гайд",
            moreLink: "https://notcoin.notion.site/Notcoin-12ea93f0159d4db199a512a9bb5ea713?pvs=74",
            button: "Погнали"
        },
        tr: {
            oneTitle: "Notcoin kazanmak için dokun",
            oneDescr: "Evet, bu kadar kolay",
            twoTitle: "Takviyelerini Yükselt",
            twoDescr: "Görevler için Notcoin kazan",
            threeTitle: "Zirveye tırman",
            threeDescr: "Diamond Ligine git",
            fourTitle: "Ekibe Katıl!",
            fourDescr: "Birlikte daha fazla eğlence",
            more: "Rehber",
            moreLink: "https://notcoin.notion.site/Notcoin-a-full-guide-1c5a21aaf01f4209acc3b8540f3bc84b",
            button: "Oyna"
        },
        fr: {
            oneTitle: "Appuie pour gagner des Notcoin",
            oneDescr: "Oui, c'est facile",
            twoTitle: "Augmente tes Boosts",
            twoDescr: "Et complète des tâches (pour gagner des Notcoin)",
            threeTitle: "Grimpe au sommet",
            threeDescr: "Vise la league de Diamond",
            fourTitle: "Rejoins une équipe!",
            fourDescr: "C'est plus fun ensemble",
            more: "Guide complet",
            moreLink: "https://notcoin.notion.site/Notcoin-a-full-guide-1c5a21aaf01f4209acc3b8540f3bc84b",
            button: "Jouer"
        },
        uk: ukranian$7,
        ua: ukranian$7
    },
    page$e = "_page_tvl8m_1",
    pageInner$8 = "_pageInner_tvl8m_9",
    title$b = "_title_tvl8m_15",
    stars$7 = "_stars_tvl8m_19",
    bodyVertical$1 = "_bodyVertical_tvl8m_48",
    buttonLink$2 = "_buttonLink_tvl8m_54",
    styles$r = {
        page: page$e,
        pageInner: pageInner$8,
        title: title$b,
        stars: stars$7,
        bodyVertical: bodyVertical$1,
        buttonLink: buttonLink$2
    };

function ClickerBoostsExplanationPage() {
    const e = window.Telegram.WebApp,
        s = useNavigate(),
        t = getUserLang(Object.keys(ClickerBoostsExplanationPageL10n)),
        n = () => s("/clicker");
    return jsxs(Page, {
        className: styles$r.page,
        children: [jsx(BackButton, {
            onClick: () => s("/clicker/boosts")
        }), jsx(MainButton, {
            hidden: !0
        }), jsx(Stars, {
            className: styles$r.stars,
            keyId: "stars",
            amount: 4
        }), jsxs(Content, {
            className: styles$r.pageInner,
            column: !0,
            fadeIn: !0,
            children: [jsxs(Content, {
                spacingChild: "4",
                growChild: !0,
                children: [jsxs(Button$1, {
                    type: "basic",
                    onClick: () => e.openTelegramLink("https://t.me/notcoin"),
                    children: [jsx(Icon, {
                        name: "telegram"
                    }), " Join"]
                }), jsxs(Button$1, {
                    type: "basic",
                    onClick: () => e.openLink("https://x.com/thenotcoin"),
                    children: [jsx(Icon, {
                        name: "x",
                        colorFill: "primary"
                    }), " Follow"]
                })]
            }), jsxs("div", {
                className: styles$r.bodyVertical,
                children: [jsx(Content, {
                    column: !0,
                    className: styles$r.title,
                    children: jsx(Text, {
                        type: "title-large",
                        align: "center",
                        children: "Notcoin"
                    })
                }), jsxs(Content, {
                    spacingChild: "40",
                    column: !0,
                    children: [jsx(motion.div, {
                        initial: {
                            opacity: 0,
                            y: -5
                        },
                        animate: {
                            opacity: 1,
                            y: 5
                        },
                        transition: {
                            duration: .5
                        },
                        children: jsxs(Content, {
                            spacingChild: "18",
                            children: [jsx(Image, {
                                src: "https://cdn.joincommunity.xyz/clicker/moneta-small.png",
                                size: "48"
                            }), jsxs(Content, {
                                spacingChild: "4",
                                column: !0,
                                children: [jsx(Text, {
                                    type: "callout",
                                    semibold: !0,
                                    children: ClickerBoostsExplanationPageL10n[t].oneTitle
                                }), jsx(Text, {
                                    type: "callout",
                                    children: ClickerBoostsExplanationPageL10n[t].oneDescr
                                })]
                            })]
                        })
                    }), jsx(motion.div, {
                        initial: {
                            opacity: 0,
                            y: -5
                        },
                        animate: {
                            opacity: 1,
                            y: 5
                        },
                        transition: {
                            duration: .5,
                            delay: .25
                        },
                        children: jsxs(Content, {
                            spacingChild: "18",
                            children: [jsx(Image, {
                                src: "https://cdn.joincommunity.xyz/clicker/lightning.png",
                                size: "48"
                            }), jsxs(Content, {
                                spacingChild: "4",
                                column: !0,
                                children: [jsx(Text, {
                                    type: "callout",
                                    semibold: !0,
                                    children: ClickerBoostsExplanationPageL10n[t].twoTitle
                                }), jsx(Text, {
                                    type: "callout",
                                    children: ClickerBoostsExplanationPageL10n[t].twoDescr
                                })]
                            })]
                        })
                    }), jsx(motion.div, {
                        initial: {
                            opacity: 0,
                            y: -5
                        },
                        animate: {
                            opacity: 1,
                            y: 5
                        },
                        transition: {
                            duration: .5,
                            delay: .5
                        },
                        children: jsxs(Content, {
                            spacingChild: "18",
                            children: [jsx(Image, {
                                src: "https://cdn.joincommunity.xyz/clicker/league/Diamond-95.png",
                                size: "48"
                            }), jsxs(Content, {
                                spacingChild: "4",
                                column: !0,
                                children: [jsx(Text, {
                                    type: "callout",
                                    semibold: !0,
                                    children: ClickerBoostsExplanationPageL10n[t].threeTitle
                                }), jsx(Text, {
                                    type: "callout",
                                    children: ClickerBoostsExplanationPageL10n[t].threeDescr
                                })]
                            })]
                        })
                    }), jsx(motion.div, {
                        initial: {
                            opacity: 0,
                            y: -5
                        },
                        animate: {
                            opacity: 1,
                            y: 5
                        },
                        transition: {
                            duration: .5,
                            delay: .75
                        },
                        children: jsxs(Content, {
                            spacingChild: "18",
                            children: [jsx(Image, {
                                src: "https://cdn.joincommunity.xyz/clicker/handshake.png",
                                size: "48"
                            }), jsxs(Content, {
                                spacingChild: "4",
                                column: !0,
                                children: [jsx(Text, {
                                    type: "callout",
                                    semibold: !0,
                                    children: ClickerBoostsExplanationPageL10n[t].fourTitle
                                }), jsx(Text, {
                                    type: "callout",
                                    children: ClickerBoostsExplanationPageL10n[t].fourDescr
                                })]
                            })]
                        })
                    })]
                })]
            }), jsx(Button$1, {
                type: "inline-link",
                className: styles$r.buttonLink,
                onClick: () => e.openLink(ClickerBoostsExplanationPageL10n[t].moreLink),
                children: ClickerBoostsExplanationPageL10n[t].more
            }), jsx(Button$1, {
                type: "orange",
                onClick: n,
                fixedBottom: !0,
                children: ClickerBoostsExplanationPageL10n[t].button
            })]
        })]
    })
}
const score$5 = "_score_55nwt_1",
    scoreIcon$2 = "_scoreIcon_55nwt_10",
    scoreLoader$1 = "_scoreLoader_55nwt_19",
    size32 = "_size-32_55nwt_24",
    size48 = "_size-48_55nwt_33",
    styles$q = {
        score: score$5,
        scoreIcon: scoreIcon$2,
        scoreLoader: scoreLoader$1,
        "size-32": "_size-32_55nwt_24",
        size32,
        "size-48": "_size-48_55nwt_33",
        size48
    },
    beautifyMoney = e => new Intl.NumberFormat("en-US").format(parseInt(e));

function Score({
    score: e,
    size: s = 48,
    duration: t = 1
}) {
    const [n, o] = reactExports.useState(e);
    reactExports.useEffect(() => {
        let a = null;
        const c = performance.now(),
            i = t * 1e3,
            l = () => {
                const _ = performance.now() - c;
                if (_ < i) {
                    const p = _ / i,
                        u = r(p, n, e);
                    o(u), a = requestAnimationFrame(l)
                } else o(e)
            };
        return l(), () => {
            a !== null && cancelAnimationFrame(a)
        }
    }, [e, t]);

    function r(a, c, i) {
        return c + (i - c) * a
    }
    return jsxs("div", {
        className: cn(styles$q.score, styles$q[`size-${s}`]),
        children: [jsx("div", {
            className: styles$q.scoreIcon
        }), beautifyMoney(String(n))]
    })
}
const root$4 = "_root_8ljv2_1",
    scoreBar = "_scoreBar_8ljv2_18",
    score$4 = "_score_8ljv2_18",
    scoreCurrent = "_scoreCurrent_8ljv2_30",
    scoreSlash = "_scoreSlash_8ljv2_41",
    scoreLimit = "_scoreLimit_8ljv2_49",
    scoreInner = "_scoreInner_8ljv2_57",
    scoreLoader = "_scoreLoader_8ljv2_60",
    scoreIcon$1 = "_scoreIcon_8ljv2_64",
    bar = "_bar_8ljv2_73",
    buttonGroup = "_buttonGroup_8ljv2_81",
    button$2 = "_button_8ljv2_81",
    icon$1 = "_icon_8ljv2_118",
    iconRed = "_iconRed_8ljv2_128",
    iconCoin = "_iconCoin_8ljv2_147",
    text$1 = "_text_8ljv2_153",
    styles$p = {
        root: root$4,
        scoreBar,
        score: score$4,
        scoreCurrent,
        scoreSlash,
        scoreLimit,
        scoreInner,
        scoreLoader,
        scoreIcon: scoreIcon$1,
        bar,
        buttonGroup,
        button: button$2,
        icon: icon$1,
        iconRed,
        iconCoin,
        text: text$1
    };

function Progress({
    current: e,
    profile: s
}) {
    const t = useNavigate();
    return jsxs("div", {
        className: styles$p.root,
        children: [jsxs("div", {
            className: styles$p.scoreBar,
            children: [jsxs("div", {
                className: styles$p.score,
                children: [jsx("div", {
                    className: styles$p.scoreIcon
                }), jsxs("div", {
                    children: [jsx("div", {
                        className: styles$p.scoreCurrent,
                        children: e
                    }), jsxs("div", {
                        className: styles$p.scoreInner,
                        children: [jsx("span", {
                            className: styles$p.scoreSlash,
                            children: " / "
                        }), jsx("span", {
                            className: styles$p.scoreLimit,
                            children: s == null ? void 0 : s.limitCoins
                        })]
                    })]
                })]
            }), jsxs("div", {
                className: styles$p.buttonGroup,
                children: [jsxs("div", {
                    className: styles$p.button,
                    onClick: () => t("/clicker/frens"),
                    children: [jsx("div", {
                        className: styles$p.icon,
                        children: jsx("div", {
                            className: styles$p.icon,
                            children: "🧸"
                        })
                    }), jsx("div", {
                        className: styles$p.text,
                        children: "Frens"
                    })]
                }), jsxs("div", {
                    className: styles$p.button,
                    onClick: () => t("/clicker/earn"),
                    children: [jsx("div", {
                        className: styles$p.icon,
                        children: jsx("div", {
                            className: styles$p.iconCoin
                        })
                    }), jsx("div", {
                        className: styles$p.text,
                        children: "Earn"
                    })]
                }), jsxs("div", {
                    className: styles$p.button,
                    onClick: () => t("/clicker/boosts"),
                    children: [jsx("div", {
                        className: styles$p.icon,
                        children: "🚀"
                    }), jsx("div", {
                        className: styles$p.text,
                        children: "Boosts"
                    })]
                })]
            })]
        }), jsx(Bar, {
            current: e,
            limit: s == null ? void 0 : s.limitCoins,
            leagueId: s.leagueId
        })]
    })
}
const root$3 = "_root_rb5hw_2",
    container$1 = "_container_rb5hw_6",
    glow$2 = "_glow_rb5hw_1",
    funMode$1 = "_funMode_rb5hw_27",
    fastGlow$1 = "_fastGlow_rb5hw_1",
    sleep$1 = "_sleep_rb5hw_30",
    notcoin$1 = "_notcoin_rb5hw_34",
    blur$1 = "_blur_rb5hw_60",
    cooldown$1 = "_cooldown_rb5hw_79",
    cooldownContainer$1 = "_cooldownContainer_rb5hw_84",
    cooldownNumber$1 = "_cooldownNumber_rb5hw_91",
    cooldownCircle$1 = "_cooldownCircle_rb5hw_104",
    countdown$1 = "_countdown_rb5hw_1",
    clickAmount$1 = "_clickAmount_rb5hw_114",
    skinDefault$1 = "_skin-default_rb5hw_166",
    skinFallout$1 = "_skin-fallout_rb5hw_170",
    skinGalleon$1 = "_skin-galleon_rb5hw_174",
    skinEggs$1 = "_skin-eggs_rb5hw_178",
    click$1 = "_click_rb5hw_114",
    styles$o = {
        root: root$3,
        container: container$1,
        glow: glow$2,
        funMode: funMode$1,
        fastGlow: fastGlow$1,
        sleep: sleep$1,
        notcoin: notcoin$1,
        blur: blur$1,
        cooldown: cooldown$1,
        cooldownContainer: cooldownContainer$1,
        cooldownNumber: cooldownNumber$1,
        cooldownCircle: cooldownCircle$1,
        countdown: countdown$1,
        clickAmount: clickAmount$1,
        "skin-default": "_skin-default_rb5hw_166",
        skinDefault: skinDefault$1,
        "skin-fallout": "_skin-fallout_rb5hw_170",
        skinFallout: skinFallout$1,
        "skin-galleon": "_skin-galleon_rb5hw_174",
        skinGalleon: skinGalleon$1,
        "skin-eggs": "_skin-eggs_rb5hw_178",
        skinEggs: skinEggs$1,
        click: click$1
    },
    numberAnimationDurationMs = 1e3,
    numberAnimationDurationSec = numberAnimationDurationMs / 1e3,
    notCoinAppearence = {
        initial: {
            opacity: 0,
            scale: 0
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0
        },
        transition: {
            duration: .3,
            ease: [0, .71, .2, 1.01],
            scale: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                restDelta: .001
            }
        }
    },
    cooldownAppearence = {
        initial: {
            opacity: 0,
            scale: .7
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: .5
        },
        transition: {
            duration: .7
        }
    },
    Notcoin = ({
        canIClickPlease: e,
        sleep: s,
        funMode: t,
        clickValue: n,
        cooldown: o,
        handleClick: r
    }) => {
        const a = reactExports.useRef(null),
            [c, i] = reactExports.useState({
                translateZ: 0,
                rotateX: 0,
                rotateY: 0
            }),
            [l, d] = reactExports.useState([]),
            {
                currentSkin: _
            } = useBoostStore(),
            p = m => {
                if (r(), a.current) {
                    const x = m.touches[0],
                        f = a.current.getBoundingClientRect(),
                        g = f.left + f.width / 2,
                        C = f.top + f.height / 2,
                        h = x.clientX - g,
                        k = (C - x.clientY) * .1,
                        b = h * .1;
                    i({
                        translateZ: -5,
                        rotateX: k,
                        rotateY: b
                    });
                    const $ = Math.floor(Math.random() * 21) - 10,
                        I = {
                            id: `${Date.now()}`,
                            value: n,
                            x: x.clientX + $,
                            y: x.clientY
                        };
                    d(S => [...S, I]), setTimeout(() => {
                        d(S => S.filter(L => L.id !== I.id))
                    }, numberAnimationDurationMs)
                }
            },
            u = m => {
                i({
                    translateZ: 0,
                    rotateX: 0,
                    rotateY: 0
                })
            };
        return jsx(AnimatePresence, {
            mode: "popLayout",
            children: e ? jsxs(motion.div, {
                className: styles$o.root,
                ...notCoinAppearence,
                children: [jsx("div", {
                    className: cn(styles$o.container, t ? styles$o.funMode : "", s ? styles$o.sleep : ""),
                    children: jsx("div", {
                        ref: a,
                        className: cn(styles$o.notcoin, styles$o[`skin-${_}`], s ? styles$o.sleep : ""),
                        onTouchStart: p,
                        onTouchEnd: u,
                        style: {
                            transform: `
                translateZ(${c.translateZ}px)
                rotateX(${c.rotateX}deg)
                rotateY(${c.rotateY}deg)
              `
                        }
                    })
                }), jsx("div", {
                    children: jsx(AnimatePresence, {
                        children: l.map(m => jsx(motion.div, {
                            className: styles$o.clickAmount,
                            initial: {
                                opacity: 1,
                                y: m.y - 50,
                                x: m.x
                            },
                            animate: {
                                opacity: 0,
                                y: m.y - 200
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: numberAnimationDurationSec
                            },
                            children: m.value
                        }, m.id))
                    })
                })]
            }, "1") : jsx(motion.div, {
                className: styles$o.root,
                ...cooldownAppearence,
                children: jsxs("div", {
                    className: styles$o.cooldownContainer,
                    children: [jsx("div", {
                        className: styles$o.cooldownNumber,
                        children: o || jsx("small", {
                            children: "nothing"
                        })
                    }), jsx("svg", {
                        className: styles$o.cooldown,
                        children: jsx("circle", {
                            className: styles$o.cooldownCircle,
                            r: "140",
                            cx: "150",
                            cy: "150"
                        })
                    })]
                })
            }, "2")
        })
    },
    bronze = "_bronze_wqi7g_12",
    silver = "_silver_wqi7g_16",
    gold = "_gold_wqi7g_20",
    platinum = "_platinum_wqi7g_24",
    diamond = "_diamond_wqi7g_28",
    all = "_all_wqi7g_32",
    influencer = "_influencer_wqi7g_36",
    page$d = "_page_wqi7g_40",
    pageInner$7 = "_pageInner_wqi7g_50",
    pageInnerSquad = "_pageInnerSquad_wqi7g_55",
    intro = "_intro_wqi7g_61",
    statisticsBoard$1 = "_statisticsBoard_wqi7g_67",
    stars$6 = "_stars_wqi7g_73",
    relative = "_relative_wqi7g_93",
    subTitle$1 = "_subTitle_wqi7g_97",
    arrow = "_arrow_wqi7g_105",
    arrowLeft = "_arrowLeft_wqi7g_120",
    arrowRight = "_arrowRight_wqi7g_124",
    arrowDisabled = "_arrowDisabled_wqi7g_128",
    score$3 = "_score_wqi7g_136",
    tabs = "_tabs_wqi7g_142",
    goblet = "_goblet_wqi7g_146",
    squadBoard = "_squadBoard_wqi7g_150",
    squadItem = "_squadItem_wqi7g_158",
    footerSquad = "_footerSquad_wqi7g_163",
    bidAmount = "_bidAmount_wqi7g_177",
    isAdmin = "_isAdmin_wqi7g_181",
    zeroState = "_zeroState_wqi7g_185",
    hypno$9 = "_hypno_wqi7g_1",
    styles$n = {
        bronze,
        silver,
        gold,
        platinum,
        diamond,
        all,
        influencer,
        page: page$d,
        pageInner: pageInner$7,
        pageInnerSquad,
        intro,
        statisticsBoard: statisticsBoard$1,
        stars: stars$6,
        relative,
        subTitle: subTitle$1,
        arrow,
        arrowLeft,
        arrowRight,
        arrowDisabled,
        score: score$3,
        tabs,
        goblet,
        squadBoard,
        squadItem,
        footerSquad,
        bidAmount,
        isAdmin,
        zeroState,
        hypno: hypno$9
    },
    rankToString = e => {
        const s = ["th", "st", "nd", "rd"],
            t = e % 100;
        return beautifyMoney$2(String(e)) + (s[(t - 20) % 10] || s[t] || s[0])
    },
    getCurrentScore = (e, s, t) => e ? s === "team" && t ? t.coins || 0 : e.totalCoins : 0,
    getLeagueDescription = (e, s) => {
        const t = e.enum !== "influencer",
            n = e.enum === "influencer";
        return t ? jsxs("div", {
            className: styles$n.subTitle,
            children: ["from ", beautifyLongNumber(s), " Notcoin"]
        }) : n ? jsx(Text, {
            type: "callout",
            center: !0,
            children: "Invite more frens and become the greatest"
        }) : null
    },
    getLeagueName = e => e.enum === "influencer" ? jsxs(Fragment, {
        children: ["Greatest", jsx("br", {}), "Influencers"]
    }) : `${e.name} league`,
    squadInfoRoot = "_squadInfoRoot_b8j7o_1",
    modal$2 = "_modal_b8j7o_11",
    body$2 = "_body_b8j7o_19",
    squadName = "_squadName_b8j7o_27",
    backdrop$2 = "_backdrop_b8j7o_34",
    modalIcon = "_modalIcon_b8j7o_39",
    squadLogo$1 = "_squadLogo_b8j7o_44",
    laurelIconReversed$1 = "_laurelIconReversed_b8j7o_49",
    squadPlace = "_squadPlace_b8j7o_53",
    squadPlaceWrap = "_squadPlaceWrap_b8j7o_62",
    squadLeague = "_squadLeague_b8j7o_69",
    squadScore$1 = "_squadScore_b8j7o_80",
    joinSquadButton$1 = "_joinSquadButton_b8j7o_94",
    chevron = "_chevron_b8j7o_101",
    styles$m = {
        squadInfoRoot,
        modal: modal$2,
        body: body$2,
        squadName,
        backdrop: backdrop$2,
        modalIcon,
        squadLogo: squadLogo$1,
        laurelIconReversed: laurelIconReversed$1,
        squadPlace,
        squadPlaceWrap,
        squadLeague,
        squadScore: squadScore$1,
        joinSquadButton: joinSquadButton$1,
        chevron
    },
    Squad = ({
        teamId: e,
        squadInfo: s
    }) => {
        window.Telegram.WebApp;
        const t = useNavigate(),
            [n, o] = reactExports.useState(null);
        return reactExports.useEffect(() => {
            o(getLeagueById(s == null ? void 0 : s.leagueId))
        }, [s]), e && s ? jsx("div", {
            className: styles$m.root,
            children: jsxs(Content, {
                onClick: () => {
                    t(`/clicker/squad/${s.id}`)
                },
                className: styles$m.squadInfoRoot,
                fadeIn: !0,
                children: [jsxs(Content, {
                    align: "center",
                    children: [jsx("img", {
                        src: s.logo,
                        className: styles$m.squadLogo,
                        width: "48",
                        alt: `${s.name} logo`,
                        onError: ({
                            currentTarget: r
                        }) => {
                            r.onerror = null, r.src = "https://cdn.joincommunity.xyz/clicker/travolta.gif"
                        }
                    }), jsxs("div", {
                        style: {
                            overflow: "hidden"
                        },
                        children: [jsx(Text, {
                            type: "headline",
                            sfRounded: !0,
                            className: styles$m.squadName,
                            children: s.name
                        }), s.coins ? jsx(Text, {
                            type: "subheadline-1",
                            semibold: !0,
                            sfRounded: !0,
                            className: styles$m.squadScore,
                            children: beautifyMoney$2(String(s.coins))
                        }) : ""]
                    })]
                }), jsxs("div", {
                    style: {
                        flexShrink: "0"
                    },
                    children: [s.rank ? jsxs(Content, {
                        justify: "center",
                        align: "center",
                        spacingBottom: "4",
                        className: styles$m.squadPlaceWrap,
                        children: [jsx(Icon, {
                            name: "Laurel"
                        }), jsx("div", {
                            className: styles$m.squadPlace,
                            children: rankToString(s.rank.rank)
                        }), jsx(Icon, {
                            name: "Laurel",
                            className: styles$m.laurelIconReversed
                        })]
                    }) : "", n ? jsxs(Text, {
                        type: "subheadline-1",
                        semibold: !0,
                        sfRounded: !0,
                        className: styles$m.squadLeague,
                        children: [jsx("img", {
                            src: `https://cdn.joincommunity.xyz/clicker/league/${n.name}-95.png`,
                            height: "24",
                            alt: "League cup"
                        }), n.name]
                    }) : ""]
                })]
            })
        }) : e ? jsx(Button, {
            className: styles$m.joinSquadButton,
            type: "Hollow",
            disabled: !0,
            children: "Loading from the Potato Sarvar 🥔"
        }) : jsx("div", {
            className: styles$m.root,
            children: jsxs(Button, {
                className: styles$m.joinSquadButton,
                type: "Hollow",
                onClick: () => {
                    t("/clicker/league/squad")
                },
                fullwidth: !0,
                children: ["Join squad", jsx(Icon, {
                    name: "chevron-right",
                    className: styles$m.chevron
                })]
            })
        })
    },
    root$2 = "_root_eqip3_1",
    styles$l = {
        root: root$2
    },
    Coinfall = ({
        show: e,
        multiple: s
    }) => {
        const t = s ? s * 2 + "%" : "10%";
        return jsx(AnimatePresence, {
            children: e && jsx(motion.div, {
                className: styles$l.root,
                initial: {
                    backgroundPositionY: "0"
                },
                animate: {
                    backgroundPositionY: ["0", "94%"]
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    backgroundPositionY: {
                        duration: 7,
                        ease: "linear",
                        repeat: 1 / 0
                    },
                    opacity: {
                        duration: .3,
                        ease: "linear"
                    }
                },
                style: {
                    backgroundSize: t
                }
            })
        })
    },
    root$1 = "_root_8iwg7_1",
    floatAnimation = "_floatAnimation_8iwg7_1",
    styles$k = {
        root: root$1,
        floatAnimation
    },
    randomNumber = (e, s) => Math.floor(Math.random() * (s - e + 1)) + e,
    TurboPussy = ({
        show: e,
        times: s,
        onClick: t
    }) => {
        const [n, o] = reactExports.useState({
            top: 0,
            left: 0
        }), [r, a] = reactExports.useState(""), c = () => {
            t()
        };
        return reactExports.useEffect(() => {
            const i = randomNumber(0, window.innerHeight - 100),
                l = randomNumber(0, window.innerWidth - 100),
                d = ["https://cdn.joincommunity.xyz/notcoin/turbo1.png", "https://cdn.joincommunity.xyz/notcoin/turbo2.png", "https://cdn.joincommunity.xyz/notcoin/turbo3.png", "https://cdn.joincommunity.xyz/notcoin/turbo4.png", "https://cdn.joincommunity.xyz/notcoin/turbo5.png", "https://cdn.joincommunity.xyz/notcoin/turbo6.png"],
                _ = d[randomNumber(0, d.length - 1)];
            a(_), o({
                top: i,
                left: l
            })
        }, []), jsx(AnimatePresence, {
            children: e && jsx(motion.img, {
                className: styles$k.root,
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                style: n,
                alt: s.toString(),
                width: "80",
                transition: {
                    opacity: {
                        duration: 3,
                        ease: "linear",
                        delay: 2
                    }
                },
                onClick: c,
                src: "https://cdn.joincommunity.xyz/clicker/peepo-rocket.gif"
            })
        })
    },
    page$c = "_page_rq9m2_12",
    pageInner$6 = "_pageInner_rq9m2_22",
    yellow$1 = "_yellow_rq9m2_27",
    stars$5 = "_stars_rq9m2_32",
    howLink$1 = "_howLink_rq9m2_58",
    rocketPlate = "_rocketPlate_rq9m2_62",
    enter = "_enter_rq9m2_72",
    footnote$1 = "_footnote_rq9m2_79",
    carouselWrap$1 = "_carouselWrap_rq9m2_87",
    hypno$8 = "_hypno_rq9m2_1",
    styles$j = {
        page: page$c,
        pageInner: pageInner$6,
        yellow: yellow$1,
        stars: stars$5,
        howLink: howLink$1,
        rocketPlate,
        enter,
        footnote: footnote$1,
        carouselWrap: carouselWrap$1,
        hypno: hypno$8
    },
    ClickerBoostsPage = () => {
        const {
            addToast: e,
            hideToasts: s
        } = useToast(), t = useNavigate();
        reactExports.useState(null);
        const [n, o] = reactExports.useState(), {
            isLoaded: r,
            fetchBoosts: a
        } = useBoostStore(), {
            userProfile: c,
            score: i,
            freeTurbo: l,
            freeEnergyRestore: d
        } = useClickerStore(), {
            fetchTasks: _,
            isLoaded: p
        } = useTaskStore();
        reactExports.useEffect(() => {
            c && (a(), _())
        }, [c]);
        const u = (f, g) => {
                var C;
                (C = document.querySelector("#page")) == null || C.scrollTo({
                    top: 0,
                    behavior: "smooth"
                }), e({
                    message: "Boost is yours!"
                }), setTimeout(() => {
                    m()
                }, 250), f === "daily" && (g === "fullEnergy" ? d() : g === "oneTurbo" && l(), setTimeout(() => {
                    t("/clicker")
                }, 350))
            },
            m = () => {
                o("enter"), setTimeout(() => {
                    o(null)
                }, 2200)
            },
            x = c && r && p;
        return jsxs(Page, {
            className: styles$j.page,
            children: [jsx(BackButton, {
                onClick: () => t("/clicker")
            }), jsx(MainButton, {
                hidden: !0
            }), jsx(Stars, {
                className: styles$j.stars,
                keyId: "stars",
                amount: 4
            }), jsx(Background, {
                type: "yellow",
                position: "bottom"
            }), jsx("div", {
                className: cn(styles$j.rocketPlate, n === "enter" && styles$j.enter),
                children: "🚀"
            }), x ? jsxs(Content, {
                className: styles$j.pageInner,
                column: !0,
                fadeIn: !0,
                children: [jsxs(Content, {
                    padding: "26-0-24",
                    column: !0,
                    children: [jsx(Text, {
                        type: "subheadline-1",
                        color: "secondary",
                        center: !0,
                        children: "Your balance"
                    }), jsx(Content, {
                        padding: "0-0-4",
                        justify: "center",
                        children: jsx(Score, {
                            score: i
                        })
                    }), jsx(Content, {
                        onClick: () => t("/clicker/boosts-explanation"),
                        children: jsx(Text, {
                            asLink: !0,
                            type: "subheadline-1",
                            semibold: !0,
                            center: !0,
                            children: "How boost works"
                        })
                    })]
                }), jsx(Content, {
                    column: !0,
                    padding: "16-0-12",
                    spacingChild: "2",
                    children: jsx(Text, {
                        type: "title-3",
                        weight: "semibold",
                        children: "Free daily boosters"
                    })
                }), jsx(Content, {
                    padding: "0-0-14",
                    className: styles$j.taskCarouselWrap,
                    children: jsx(TaskCarousel, {
                        onSuccess: u
                    })
                }), jsx(Content, {
                    column: !0,
                    padding: "16-0-12",
                    spacingChild: "2",
                    children: jsx(Text, {
                        type: "title-2",
                        weight: "semibold",
                        children: "Boosters"
                    })
                }), jsx(Content, {
                    padding: "0-0-24",
                    className: styles$j.taskCarouselWrap,
                    children: jsx(BoostCarousel, {
                        onSuccess: u
                    })
                }), jsx(Content, {
                    column: !0,
                    padding: "8-0-12",
                    spacingChild: "2",
                    children: jsx(Text, {
                        type: "title-2",
                        weight: "semibold",
                        children: "Buy Skins"
                    })
                }), jsx(Content, {
                    padding: "0-0-24",
                    className: styles$j.carouselWrap1,
                    children: jsx(SkinCarousel, {})
                }), jsxs(Text, {
                    type: "footnote",
                    margin: "0-0-12-0",
                    bold: !0,
                    center: !0,
                    className: styles$j.footnote,
                    children: ["Built with 😆 by", " ", jsx("a", {
                        href: "https://openbuilders.xyz",
                        target: "_blank",
                        style: {
                            color: "#feb803"
                        },
                        children: "Open Builders"
                    })]
                })]
            }) : null]
        })
    },
    page$b = "_page_dasiz_1",
    hero$1 = "_hero_dasiz_7",
    title$a = "_title_dasiz_18",
    listTitle = "_listTitle_dasiz_26",
    listItem = "_listItem_dasiz_33",
    listItemBody = "_listItemBody_dasiz_42",
    listItemTitle = "_listItemTitle_dasiz_45",
    listItemSubtitle = "_listItemSubtitle_dasiz_51",
    listItemFooter = "_listItemFooter_dasiz_57",
    listItemCover = "_listItemCover_dasiz_62",
    score$2 = "_score_dasiz_69",
    rippleEffect$1 = "_rippleEffect_dasiz_93",
    styles$i = {
        page: page$b,
        hero: hero$1,
        title: title$a,
        listTitle,
        listItem,
        listItemBody,
        listItemTitle,
        listItemSubtitle,
        listItemFooter,
        listItemCover,
        score: score$2,
        rippleEffect: rippleEffect$1
    },
    page$a = "_page_ofiuy_12",
    pageInner$5 = "_pageInner_ofiuy_22",
    yellow = "_yellow_ofiuy_27",
    stars$4 = "_stars_ofiuy_32",
    howLink = "_howLink_ofiuy_58",
    footnote = "_footnote_ofiuy_62",
    carouselWrap = "_carouselWrap_ofiuy_70",
    title$9 = "_title_ofiuy_76",
    priceAfter = "_priceAfter_ofiuy_84",
    priceAfterWrap = "_priceAfterWrap_ofiuy_102",
    slideIndex = "_slideIndex_ofiuy_106",
    hypno$7 = "_hypno_ofiuy_1",
    styles$h = {
        page: page$a,
        pageInner: pageInner$5,
        yellow,
        stars: stars$4,
        howLink,
        footnote,
        carouselWrap,
        title: title$9,
        priceAfter,
        priceAfterWrap,
        slideIndex,
        hypno: hypno$7
    },
    feturedPartners = [105, 72],
    sortPartners = (e, s, t, n) => {
        const o = e.map(i => (i.challengeId && feturedPartners.indexOf(i.challengeId) !== -1 && (i.isFeatured = !0), i.challengeId && (i.isCompleted = s.find(l => l.id === i.id && l.isCompleted)), i)).filter(i => i.locale ? i.locale.indexOf(t) !== -1 : !0).filter(i => i.username ? i.username.indexOf(n) !== -1 : !0).filter(i => i.exceptedLocale ? i.exceptedLocale.indexOf(t) === -1 : !0),
            r = o.filter(i => i.isCompleted),
            a = o.filter(i => i.isFeatured && !i.isCompleted),
            c = o.filter(i => !i.isFeatured && !i.isCompleted).sort(() => Math.random() - .5);
        return [...a, ...c, ...r]
    },
    getNextLeagueTask = (e = 0, s) => {
        const t = e - 2,
            n = [];
        return s.forEach(o => {
            const r = LeagueTypes.indexOf(o.type);
            (r < t && !o.isCompleted || r === t) && n.push(o)
        }), n
    },
    EarnPage = () => {
        const e = window.Telegram.WebApp,
            s = useNavigate(),
            [t, n] = reactExports.useState(0),
            {
                addToast: o,
                hideToasts: r
            } = useToast(),
            {
                isLoaded: a,
                specialBoosts: c,
                partnerBoosts: i,
                fetchBoosts: l
            } = useBoostStore(),
            {
                userProfile: d,
                score: _,
                setClickerProfile: p
            } = useClickerStore(),
            {
                onboardingTasks: u,
                fetchTasks: m,
                leagueTasks: x,
                specialTasks: f,
                partnerTasks: g,
                isLoaded: C
            } = useTaskStore();
        reactExports.useEffect(() => {
            d && (l(), m())
        }, [d]);
        const h = d && a && C,
            y = u.sort((v, B) => v.id < B.id ? 1 : -1).sort(v => v.isCompleted ? 1 : -1),
            b = getUserLang(["fa", "ru", "id", "pl", "az", "kk", "tg", "tk", "uz", "uk", "ua"]),
            $ = d == null ? void 0 : d.user.username,
            I = reactExports.useMemo(() => sortPartners(g, i, b, $), [g, i, b]),
            S = getNextLeagueTask(d == null ? void 0 : d.leagueId, x),
            L = [...f];
        S && L.push(...S);
        const T = reactExports.useMemo(() => sortPartners(L, [...c, ...i], b, $), [f, c, x, b]),
            E = y.filter(v => !v.isCompleted).length === 0,
            N = T.filter(v => !v.isCompleted).length === 0,
            [z, j] = reactExports.useState(null),
            [w, q] = reactExports.useState(null);
        useInterval(async () => {
            if (w && z) {
                const {
                    ok: v,
                    data: B
                } = await checkCompletionTaskApi(w.challengeId, d == null ? void 0 : d.user.telegramId);
                if (v && B && B.isCompleted) {
                    const R = await claimPartnerReward(w.id);
                    q(null), R.ok && (p(R.data), r(), o({
                        message: `Task is done +${beautifyMoney$1(String(w.coins))} Notcoin`,
                        type: "success"
                    }))
                }
            }
        }, z), reactExports.useEffect(() => {
            j(w === null ? null : 3e3)
        }, [w]);
        const A = v => {
                q(v)
            },
            P = jsxs(Fragment, {
                children: [jsx(Content, {
                    column: !0,
                    padding: "16-0-12",
                    spacingChild: "2",
                    children: jsx(Text, {
                        type: "title-2",
                        weight: "semibold",
                        children: "Onboarding"
                    })
                }), jsx(Content, {
                    padding: "0-0-24",
                    children: jsx(List, {
                        type: "inset",
                        children: y.map(v => jsx(TaskEarn, {
                            task: v,
                            userBoosts: [],
                            userBalance: _
                        }, `onboarding-${v.id}`))
                    })
                })]
            }),
            M = jsxs(Fragment, {
                children: [jsx(Content, {
                    column: !0,
                    padding: "8-0-12",
                    spacingChild: "2",
                    children: jsx(Text, {
                        type: "title-2",
                        weight: "semibold",
                        children: "Specials"
                    })
                }), jsx(Content, {
                    padding: "0-0-24",
                    className: styles$h.carouselWrap,
                    children: jsx(Carousel, {
                        list: T.map(v => jsx(TaskEarn, {
                            userBoosts: [],
                            task: v,
                            userBalance: _,
                            onClick: () => {}
                        }, `special-${v.id}`)),
                        slideSize: 4
                    })
                })]
            });
        return jsxs(Page, {
            className: styles$h.page,
            children: [jsx(BackButton, {
                onClick: () => s("/clicker")
            }), jsx(MainButton, {
                hidden: !0
            }), jsx(Stars, {
                className: styles$h.stars,
                keyId: "stars",
                amount: 4
            }), jsx(Background, {
                type: "yellow",
                position: "bottom"
            }), h ? jsxs(Content, {
                className: styles$h.pageInner,
                column: !0,
                fadeIn: !0,
                children: [jsxs(Content, {
                    padding: "26-0-48",
                    column: !0,
                    children: [jsx(Content, {
                        padding: "0-0-16",
                        column: !0,
                        align: "center",
                        children: jsx(Image, {
                            src: "https://cdn.joincommunity.xyz/clicker/moneta-small.png",
                            size: "100"
                        })
                    }), jsx("div", {
                        className: styles$h.title,
                        children: "Earn more coins"
                    }), jsx(Content, {
                        onClick: () => e.openLink("https://notcoin.notion.site/Notcoin-a-full-guide-1c5a21aaf01f4209acc3b8540f3bc84b"),
                        children: jsx(Text, {
                            asLink: !0,
                            type: "subheadline-1",
                            semibold: !0,
                            center: !0,
                            children: "Full guide"
                        })
                    })]
                }), jsx(Content, {
                    padding: "0-0-24",
                    column: !0,
                    children: jsx(List, {
                        type: "inset",
                        children: jsx(ListItem, {
                            onClick: () => s("/clicker/frens"),
                            divider: !1,
                            title: jsx(Text, {
                                color: "secondary",
                                children: "Invite bonus"
                            }),
                            footer: jsxs(Text, {
                                type: "subheadline-2",
                                color: "secondary",
                                className: styles$h.priceAfterWrap,
                                children: [jsx("span", {
                                    className: styles$h.priceAfter,
                                    children: "up to 100K"
                                }), " for fren"]
                            }),
                            before: jsx(MediaIcon, {
                                media: {
                                    type: "cover-emoji",
                                    value: "🧸",
                                    color: "pale-grey"
                                },
                                imageSize: "72",
                                size: "72",
                                borderRadius: "12"
                            }),
                            large: !0,
                            ripple: !0,
                            chevron: !0
                        })
                    })
                }), E ? null : P, N ? null : M, jsx(Content, {
                    column: !0,
                    padding: "8-0-12",
                    spacingChild: "2",
                    children: jsxs(Text, {
                        type: "title-2",
                        weight: "semibold",
                        children: ["Web3 world", " ", jsxs("span", {
                            className: styles$h.slideIndex,
                            children: [t + 1, "/", Math.floor(g.length / 3)]
                        })]
                    })
                }), jsx(Content, {
                    padding: "0-0-24",
                    className: I.length > 4 ? styles$h.carouselWrap : "",
                    children: jsx(Carousel, {
                        onSlideChange: n,
                        list: I.map(v => jsx(TaskEarn, {
                            userLeagueId: d == null ? void 0 : d.leagueId,
                            userBoosts: [],
                            task: v,
                            userBalance: _,
                            onClick: A
                        }, `special-${v.id}`)),
                        slideSize: 4
                    })
                }), E ? P : null, N ? M : null, jsxs(Text, {
                    type: "footnote",
                    margin: "0-0-12-0",
                    bold: !0,
                    center: !0,
                    className: styles$h.footnote,
                    children: ["Built with 😆 by", " ", jsx("a", {
                        href: "https://openbuilders.xyz",
                        target: "_blank",
                        style: {
                            color: "#feb803"
                        },
                        children: "Open Builders"
                    })]
                })]
            }) : null]
        })
    },
    ukranian$6 = {
        title: "Отримай бонуси за друзiв",
        inviteTitle: "Запрошуй братюню до гри",
        inviteDescr: "та разом отримайте бонус",
        premiumTitle: "Братюня з",
        premiumDescr: "для тебе та твого друга",
        levelUpTitle: "Бонус за зростання френдів",
        row1: "Рiвень лiги",
        row2: "Звичайний бро",
        button: "Запросіть френда"
    },
    ClickerFrensDetailsPageL10n = {
        en: {
            title: "Invite fren, get bonus",
            inviteTitle: "Invite fren",
            inviteDescr: "for you and fren",
            premiumTitle: "Fren with",
            premiumDescr: "for you and fren",
            levelUpTitle: "Fren level up bonus",
            row1: "Level up",
            row2: "Regular fren",
            button: "Invite a fren"
        },
        ru: {
            title: "Бонусы за друзей",
            inviteTitle: "Пригласи друга",
            inviteDescr: "тебе и другу",
            premiumTitle: "Друг с",
            premiumDescr: "тебе и другу",
            levelUpTitle: "Бонус за переход друга в новую лигу",
            row1: "Новая лига",
            row2: "За друга",
            button: "Пригласить"
        },
        tr: {
            title: "Arkadaşını davet et bonus kazan",
            inviteTitle: "Arkadaşını davet et",
            inviteDescr: "sen ve arkadaşın için",
            premiumTitle: "Arkadaş için",
            premiumDescr: "sen ve arkadaşın için",
            levelUpTitle: "Arkadaş Seviye atlama bonusu",
            row1: "Seviyeler",
            row2: "Sıradan arkadaş",
            button: "Bir arkadaşını davet et"
        },
        fr: {
            title: "Invite un fren (ami), obtiens des bonus",
            inviteTitle: "Invite un fren",
            inviteDescr: "pour toi et ton fren",
            premiumTitle: "Fren avec",
            premiumDescr: "pour toi et ton fren",
            levelUpTitle: "Bonus pour le niveau de tes frens",
            row1: "Niveau",
            row2: "Standard",
            button: "Invite un fren"
        },
        uk: ukranian$6,
        ua: ukranian$6
    },
    page$9 = "_page_1i81e_12",
    pageInner$4 = "_pageInner_1i81e_23",
    inviteBlock = "_inviteBlock_1i81e_31",
    headerRow = "_headerRow_1i81e_35",
    headerItem = "_headerItem_1i81e_43",
    bodyRow = "_bodyRow_1i81e_52",
    bodyItem = "_bodyItem_1i81e_59",
    cup = "_cup_1i81e_76",
    link$1 = "_link_1i81e_83",
    hypno$6 = "_hypno_1i81e_1",
    styles$g = {
        page: page$9,
        pageInner: pageInner$4,
        inviteBlock,
        headerRow,
        headerItem,
        bodyRow,
        bodyItem,
        cup,
        link: link$1,
        hypno: hypno$6
    },
    inviteFrenViaBotStartRef = () => {
        const e = window.Telegram.WebApp;
        setTimeout(() => {
            e.close()
        }, 1), e.openTelegramLink(`${config$1.botLink}?start=ref`)
    },
    createSquadViaBotStartRef = () => {
        const e = window.Telegram.WebApp;
        setTimeout(() => {
            e.close()
        }, 1), e.openTelegramLink(`${config$1.botLink}?start=joinsquad`)
    };

function ClickerFrensDetailsPage() {
    window.Telegram.WebApp;
    const e = useNavigate(),
        {
            userProfile: s
        } = useClickerStore(),
        t = getUserLang(Object.keys(ClickerFrensDetailsPageL10n)),
        n = s !== null;
    return jsxs(Page, {
        className: styles$g.page,
        children: [jsx(BackButton, {
            onClick: () => e("/clicker/frens")
        }), jsx(MainButton, {
            hidden: !0
        }), jsx(Background, {
            type: "yellow",
            position: "bottom"
        }), n ? jsxs(Content, {
            className: styles$g.pageInner,
            fadeIn: !0,
            children: [jsx(Content, {
                padding: "0-0-32-0",
                children: jsx(Text, {
                    type: "title-large",
                    children: ClickerFrensDetailsPageL10n[t].title
                })
            }), jsxs(Content, {
                spacingChild: "32",
                column: !0,
                className: styles$g.inviteBlock,
                children: [jsxs(Content, {
                    spacingChild: "16",
                    children: [jsx(Image, {
                        size: "48",
                        src: "https://cdn.joincommunity.xyz/clicker/coin-min.svg"
                    }), jsxs(Content, {
                        spacingChild: "2",
                        column: !0,
                        children: [jsx(Text, {
                            semibold: !0,
                            children: ClickerFrensDetailsPageL10n[t].inviteTitle
                        }), jsxs(Text, {
                            children: [jsx(Penny, {
                                text: "2,500",
                                yellow: !0
                            }), " ", ClickerFrensDetailsPageL10n[t].inviteDescr]
                        })]
                    })]
                }), jsxs(Content, {
                    spacingChild: "16",
                    children: [jsx("div", {
                        children: jsx(Icon, {
                            name: "premium",
                            size: "48"
                        })
                    }), jsxs(Content, {
                        spacingChild: "2",
                        column: !0,
                        children: [jsxs(Text, {
                            semibold: !0,
                            children: [ClickerFrensDetailsPageL10n[t].premiumTitle, " ", jsx("a", {
                                className: styles$g.link,
                                href: "https://t.me/premium",
                                children: "Telegram Premium"
                            })]
                        }), jsxs(Text, {
                            children: [jsx(Penny, {
                                text: "50,000",
                                yellow: !0
                            }), " ", ClickerFrensDetailsPageL10n[t].premiumDescr]
                        })]
                    })]
                })]
            }), jsx(Content, {
                padding: "0-0-32-0",
                children: jsx(Text, {
                    type: "title-large",
                    children: ClickerFrensDetailsPageL10n[t].levelUpTitle
                })
            }), jsxs("div", {
                children: [jsxs("div", {
                    className: styles$g.headerRow,
                    children: [jsx("div", {
                        className: styles$g.headerItem,
                        children: ClickerFrensDetailsPageL10n[t].row1
                    }), jsx("div", {
                        className: styles$g.headerItem,
                        children: ClickerFrensDetailsPageL10n[t].row2
                    }), jsx("div", {
                        className: styles$g.headerItem,
                        children: "Premium "
                    })]
                }), jsxs("div", {
                    className: styles$g.bodyRow,
                    children: [jsxs("div", {
                        className: styles$g.bodyItem,
                        children: [jsx("img", {
                            src: "https://cdn.joincommunity.xyz/clicker/league/Silver-95.png",
                            height: "16",
                            alt: "League cup",
                            className: styles$g.cup
                        }), "Silver"]
                    }), jsx("div", {
                        className: styles$g.bodyItem,
                        children: "+12,500"
                    }), jsx("div", {
                        className: styles$g.bodyItem,
                        children: "+125,000"
                    })]
                }), jsxs("div", {
                    className: styles$g.bodyRow,
                    children: [jsxs("div", {
                        className: styles$g.bodyItem,
                        children: [jsx("img", {
                            src: "https://cdn.joincommunity.xyz/clicker/league/Gold-95.png",
                            height: "16",
                            alt: "League cup",
                            className: styles$g.cup
                        }), "Gold"]
                    }), jsx("div", {
                        className: styles$g.bodyItem,
                        children: "+25,000"
                    }), jsx("div", {
                        className: styles$g.bodyItem,
                        children: "+250,000"
                    })]
                }), jsxs("div", {
                    className: styles$g.bodyRow,
                    children: [jsxs("div", {
                        className: styles$g.bodyItem,
                        children: [jsx("img", {
                            src: "https://cdn.joincommunity.xyz/clicker/league/Platinum-95.png",
                            height: "16",
                            alt: "League cup",
                            className: styles$g.cup
                        }), "Platinum"]
                    }), jsx("div", {
                        className: styles$g.bodyItem,
                        children: "+50,000"
                    }), jsx("div", {
                        className: styles$g.bodyItem,
                        children: "+500,000"
                    })]
                }), jsxs("div", {
                    className: styles$g.bodyRow,
                    children: [jsxs("div", {
                        className: styles$g.bodyItem,
                        children: [jsx("img", {
                            src: "https://cdn.joincommunity.xyz/clicker/league/Diamond-95.png",
                            height: "16",
                            alt: "League cup",
                            className: styles$g.cup
                        }), "Diamonds"]
                    }), jsx("div", {
                        className: styles$g.bodyItem,
                        children: "+100,000"
                    }), jsx("div", {
                        className: styles$g.bodyItem,
                        style: {
                            marginLeft: "13px"
                        },
                        children: "+1,000,000"
                    })]
                })]
            }), jsx(Button$1, {
                type: "orange",
                onClick: inviteFrenViaBotStartRef,
                fixedBottom: !0,
                children: ClickerFrensDetailsPageL10n[t].button
            })]
        }) : null]
    })
}
const page$8 = "_page_1pl4f_12",
    pageInner$3 = "_pageInner_1pl4f_21",
    place$2 = "_place_1pl4f_29",
    frenScore = "_frenScore_1pl4f_48",
    frenScoreSkeleton = "_frenScoreSkeleton_1pl4f_57",
    delimeter$1 = "_delimeter_1pl4f_65",
    frensList = "_frensList_1pl4f_73",
    text = "_text_1pl4f_80",
    textShadow = "_textShadow_1pl4f_87",
    icon = "_icon_1pl4f_91",
    stars$3 = "_stars_1pl4f_98",
    placeholder = "_placeholder_1pl4f_127",
    placeholderEmoji = "_placeholderEmoji_1pl4f_131",
    x10 = "_x10_1pl4f_136",
    x10Title = "_x10Title_1pl4f_142",
    row = "_row_1pl4f_152",
    rowIcon = "_rowIcon_1pl4f_156",
    rowIconNot = "_rowIconNot_1pl4f_161",
    rowIconStar = "_rowIconStar_1pl4f_165",
    title$8 = "_title_1pl4f_169",
    subtitle$3 = "_subtitle_1pl4f_176",
    reward = "_reward_1pl4f_182",
    button$1 = "_button_1pl4f_196",
    hypno$5 = "_hypno_1pl4f_1",
    styles$f = {
        page: page$8,
        pageInner: pageInner$3,
        place: place$2,
        frenScore,
        frenScoreSkeleton,
        delimeter: delimeter$1,
        frensList,
        text,
        textShadow,
        icon,
        stars: stars$3,
        placeholder,
        placeholderEmoji,
        x10,
        x10Title,
        row,
        rowIcon,
        rowIconNot,
        rowIconStar,
        title: title$8,
        subtitle: subtitle$3,
        reward,
        button: button$1,
        hypno: hypno$5
    };

function ClickerFrensPage() {
    const e = useNavigate(),
        {
            userProfile: s
        } = useClickerStore(),
        [t, n] = reactExports.useState(null),
        [o, r] = reactExports.useState(null),
        a = async () => {
            var d, _, p;
            const i = await fetchFrens(),
                l = await fetchFrensStatApi();
            l.ok && n({
                score: (d = l.data) != null && d.bonus ? l.data.bonus : 0,
                amount: (_ = l.data) != null && _.count ? l.data.count : 0,
                rank: (p = l.data) != null && p.rank ? l.data.rank : 0
            }), i && (i.sort((u, m) => {
                const x = parseInt(u.score),
                    f = parseInt(m.score);
                if (u.reward === m.reward) {
                    if (x < f) return 1;
                    if (x > f) return -1
                }
                return 0
            }), r(i))
        };
    reactExports.useEffect(() => {
        s && a()
    }, [s]);
    const c = t !== null && o !== null;
    return new Date("Jan 17 2024 12:00:00").getTime() - Date.now(), jsxs(Page, {
        className: styles$f.page,
        children: [jsx(BackButton, {
            onClick: () => e("/clicker")
        }), jsx(MainButton, {
            hidden: !0
        }), jsx(Stars, {
            className: styles$f.stars,
            keyId: "stars",
            amount: 4
        }), jsx(Background, {
            type: "yellow",
            position: "bottom"
        }), c ? jsxs(Content, {
            className: styles$f.pageInner,
            fadeIn: !0,
            children: [jsx(Text, {
                type: "title-large",
                margin: "0-0-24-0",
                center: !0,
                children: jsx(Content, {
                    justify: "center",
                    align: "center",
                    column: !0,
                    spacingChild: "12",
                    children: t !== null && t.amount > 0 ? jsxs(Content, {
                        justify: "center",
                        children: [t.amount, " Fren", t.amount > 1 ? "s" : ""]
                    }) : "Fren zone"
                })
            }), jsxs("div", {
                className: styles$f.place,
                onClick: () => e("/clicker/league/influencer"),
                children: [jsxs("div", {
                    className: styles$f.frenScore,
                    children: [t !== null ? jsx("span", {
                        children: jsx(RollingNumbers, {
                            value: `+${beautifyLongNumber(t.score)}`,
                            height: 40
                        })
                    }) : jsx("div", {
                        className: styles$f.frenScoreSkeleton
                    }), jsx("img", {
                        src: "https://cdn.joincommunity.xyz/clicker/coin-min.svg",
                        alt: "min coin",
                        width: 24
                    })]
                }), jsx("div", {
                    className: styles$f.delimeter
                }), jsxs("div", {
                    className: styles$f.text,
                    children: [jsx("img", {
                        src: "https://cdn.joincommunity.xyz/clicker/league/influencer.png"
                    }), t.rank ? `${t.rank} ${nth(t.rank)}` : "Top 300", " ", jsx("span", {
                        className: styles$f.textShadow,
                        children: "leaders"
                    })]
                }), jsx(Icon, {
                    className: styles$f.icon,
                    name: "ChevronRight"
                })]
            }), jsx("div", {
                className: styles$f.x10Title,
                children: "Invite frens to get bonuses"
            }), jsxs("div", {
                className: styles$f.x10,
                children: [jsxs("div", {
                    className: styles$f.row,
                    children: [jsx("div", {
                        className: cn(styles$f.rowIcon, styles$f.rowIconNot)
                    }), jsxs("div", {
                        children: [jsx("div", {
                            className: styles$f.title,
                            children: "Invite fren"
                        }), jsxs("div", {
                            className: styles$f.subtitle,
                            children: [jsx("p", {
                                className: styles$f.reward,
                                children: "2,500"
                            }), " for you and fren"]
                        })]
                    })]
                }), jsxs("div", {
                    className: styles$f.row,
                    children: [jsx("div", {
                        className: cn(styles$f.rowIcon, styles$f.rowIconStar)
                    }), jsxs("div", {
                        children: [jsxs("div", {
                            className: styles$f.title,
                            children: ["Fren with ", jsx(Button$1, {
                                type: "inline-link",
                                onClick: () => e("/clicker/frens-details"),
                                children: "Telegram Premium"
                            })]
                        }), jsxs("div", {
                            className: styles$f.subtitle,
                            children: [jsx("p", {
                                className: styles$f.reward,
                                children: "50,000"
                            }), " for you and fren"]
                        })]
                    })]
                }), jsx("div", {
                    className: styles$f.button,
                    onClick: () => e("/clicker/frens-details"),
                    children: "Open details"
                })]
            }), jsx(Text, {
                type: "title-2",
                margin: "24-0-12-0",
                semibold: !0,
                children: "Frens List"
            }), jsxs(Content, {
                className: styles$f.frensList,
                column: !0,
                children: [o === null ? jsxs(Content, {
                    column: !0,
                    fadeIn: !0,
                    children: [jsx(Skeleton.FrenItem, {}), jsx(Skeleton.FrenItem, {}), jsx(Skeleton.FrenItem, {})]
                }) : null, o && !o.length ? jsxs(Content, {
                    className: styles$f.placeholder,
                    justify: "center",
                    align: "center",
                    column: !0,
                    fadeIn: !0,
                    children: [jsx("p", {
                        className: styles$f.placeholderEmoji,
                        children: "🧸"
                    }), jsx(Content, {
                        padding: "12-0-24",
                        children: jsx(Text, {
                            type: "subheadline-1",
                            color: "tertiary",
                            center: !0,
                            children: "No frens yet"
                        })
                    })]
                }) : null, o !== null && o.length > 0 ? jsx(Content, {
                    column: !0,
                    fadeIn: !0,
                    spacingChild: "8",
                    children: o.map((i, l) => jsx(FrenItem, {
                        id: i.id,
                        name: i.name,
                        score: i.score,
                        reward: i.reward,
                        leagueId: i.leagueId,
                        isPremium: i.isPremium,
                        avatar: i.avatar,
                        link: i.link
                    }, l))
                }) : null]
            }), jsx(Button$1, {
                type: "orange",
                onClick: inviteFrenViaBotStartRef,
                fixedBottom: !0,
                children: "Invite a fren"
            })]
        }) : null]
    })
}
const title$7 = "_title_1fzam_1",
    subtitle$2 = "_subtitle_1fzam_10",
    image$1 = "_image_1fzam_18",
    backButton$1 = "_backButton_1fzam_25",
    modal$1 = "_modal_1fzam_41",
    body$1 = "_body_1fzam_49",
    backdrop$1 = "_backdrop_1fzam_56",
    shareButton = "_shareButton_1fzam_60",
    inviteLink = "_inviteLink_1fzam_64",
    styles$e = {
        title: title$7,
        subtitle: subtitle$2,
        image: image$1,
        backButton: backButton$1,
        modal: modal$1,
        body: body$1,
        backdrop: backdrop$1,
        shareButton,
        inviteLink
    },
    InviteFren = ({
        inviteLink: e,
        show: s,
        toggleModal: t
    }) => {
        const n = window.Telegram.WebApp,
            {
                addToast: o
            } = useToast(),
            r = () => {
                const c = encodeURI(e);
                n.openTelegramLink(`https://t.me/share/url?url=${c}&text=Oi%20fren%2C%20let%27s%20click%20together%20%F0%9F%A4%99%0A%0A%F0%9F%8E%81%2010k%20notcoins%20for%20you%20and%20me%0A%F0%9F%8E%81%F0%9F%8E%81%F0%9F%8E%81%20100k%20if%20you%20have%20tg%20prem`), t()
            },
            a = () => {
                navigator.clipboard.writeText(e).then(() => {
                    o({
                        message: "Link copied to clipboard"
                    }), t()
                }).catch(c => {
                    o({
                        type: "error",
                        message: "Unable to copy link"
                    }), console.error(c)
                })
            };
        return jsx("div", {
            className: styles$e.root,
            children: jsx(Sheet, {
                opened: s,
                onClose: t,
                onBackdropClick: t,
                contentClassName: styles$e.modal,
                backdropClassName: styles$e.backdrop,
                children: jsxs("div", {
                    className: styles$e.body,
                    children: [jsx("div", {
                        className: styles$e.image,
                        children: "🫂"
                    }), jsx(Text, {
                        type: "headline",
                        margin: "0-0-24-0",
                        align: "center",
                        className: styles$e.inviteLink,
                        children: jsx("code", {
                            children: e.split("https://")[1]
                        })
                    }), jsx(Button, {
                        className: styles$e.shareButton,
                        onClick: r,
                        children: "Invite in Telegram"
                    }), jsx(Button, {
                        type: "Hollow",
                        onClick: a,
                        children: "Copy the link"
                    })]
                })
            })
        })
    },
    ukranian$5 = {
        title: "Королі Вечірок",
        subtitle: jsxs(Fragment, {
            children: ["Запросіть побільше друзів", jsx("br", {}), "щоб попасти сюди"]
        }),
        button: "Запросити друзiв"
    },
    ClickerLeagueInfluencerPageL10n = {
        en: {
            title: "Party Kings",
            subtitle: "Invite more frens to get here",
            button: "Invite frens"
        },
        ru: {
            title: "Короли вечеринки",
            subtitle: jsxs(Fragment, {
                children: ["Приглашай больше друзей", jsx("br", {}), "чтобы попасть сюда"]
            }),
            button: "Пригласить друзей"
        },
        tr: {
            title: "Parti Kralları",
            subtitle: jsxs(Fragment, {
                children: ["Davet et ve daha fazla", jsx("br", {}), "arkadaşın buraya gelsin"]
            }),
            button: "Arkadaşını davet et"
        },
        uk: ukranian$5,
        ua: ukranian$5
    };

function ClickerLeagueInfluencerPage() {
    window.Telegram.WebApp;
    const e = useNavigate(),
        {
            addToast: s
        } = useToast(),
        t = getUserLang(Object.keys(ClickerLeagueInfluencerPageL10n)),
        n = {
            id: 6,
            tgName: "Greatest Influencers",
            name: "Influencers",
            enum: "influencer",
            minProfile: 0,
            minTeam: 0
        },
        [o, r] = reactExports.useState(null),
        a = useClickerStore().userProfile;
    reactExports.useEffect(() => {
        a && c()
    }, [a]);
    const c = async () => {
            var m, x;
            const {
                ok: l,
                items: d,
                rank: _,
                score: p,
                bonus: u
            } = await fetchReferralLeaderboardApi();
            l ? (p && (d.some(g => g.userId === (a == null ? void 0 : a.userId)) || d.push({
                index: _,
                indexText: _ ? void 0 : "300+",
                i: _,
                id: a == null ? void 0 : a.userId,
                img: a == null ? void 0 : a.avatar,
                title: ((m = a == null ? void 0 : a.user) == null ? void 0 : m.firstName) ? ? ((x = a == null ? void 0 : a.user) == null ? void 0 : x.username),
                points: p,
                bonus: u
            })), setTimeout(() => {
                const f = d.filter(g => g.userId !== 4);
                r(f)
            }, 350)) : s({
                message: "Can't fetch data. Try again later.",
                type: "error"
            })
        },
        i = !!a;
    return jsxs(Page, {
        className: styles$n.page,
        children: [i ? jsx(Background, {
            type: getLeagueColor(n.id)
        }) : null, jsx(MainButton, {
            hidden: !0
        }), jsx(BackButton, {
            onClick: () => e("/clicker")
        }), jsx("div", {
            className: styles$n.pageInner,
            children: i ? jsxs(Fragment, {
                children: [jsxs(Content, {
                    align: "center",
                    padding: "24-0-16",
                    spacingChild: "12",
                    column: !0,
                    children: [jsx(Goblet, {
                        type: getLeagueColor(n.id)
                    }), jsx(Stars, {
                        className: styles$n.stars,
                        keyId: n.id
                    }), jsx(Text, {
                        type: "title-large",
                        center: !0,
                        children: ClickerLeagueInfluencerPageL10n[t].title
                    }), jsx(Text, {
                        type: "callout",
                        center: !0,
                        color: "secondary",
                        children: ClickerLeagueInfluencerPageL10n[t].subtitle
                    }), jsx(Content, {
                        fullWidth: !0,
                        growChild: !0,
                        padding: "12-0-0",
                        children: jsx(Button$1, {
                            type: "orange",
                            onClick: inviteFrenViaBotStartRef,
                            children: ClickerLeagueInfluencerPageL10n[t].button
                        })
                    })]
                }), jsx(Content, {
                    padding: "16-0",
                    column: !0,
                    children: jsx(Leaderboard, {
                        highlightId: a == null ? void 0 : a.userId,
                        highlightText: "You",
                        list: o,
                        boardType: "frens",
                        tabs: null
                    })
                })]
            }) : null
        })]
    })
}
const page$7 = "_page_vxkcq_12",
    pageInner$2 = "_pageInner_vxkcq_23",
    stars$2 = "_stars_vxkcq_31",
    subTitle = "_subTitle_vxkcq_60",
    title$6 = "_title_vxkcq_68",
    coin = "_coin_vxkcq_79",
    buttonLink$1 = "_buttonLink_vxkcq_87",
    dataRow = "_dataRow_vxkcq_91",
    delimeter = "_delimeter_vxkcq_97",
    ava$1 = "_ava_vxkcq_104",
    avas$1 = "_avas_vxkcq_122",
    datas = "_datas_vxkcq_128",
    datasTop = "_datasTop_vxkcq_132",
    datasBottom = "_datasBottom_vxkcq_139",
    online = "_online_vxkcq_147",
    pulseRing = "_pulse-ring_vxkcq_1",
    sheetBody = "_sheetBody_vxkcq_176",
    sheetTitle = "_sheetTitle_vxkcq_179",
    sheetNumber = "_sheetNumber_vxkcq_188",
    sheetEqual = "_sheetEqual_vxkcq_194",
    sheetSubNumber = "_sheetSubNumber_vxkcq_197",
    sheetBurned = "_sheetBurned_vxkcq_204",
    sheetButton = "_sheetButton_vxkcq_208",
    sheetFire = "_sheetFire_vxkcq_211",
    flameA = "_flame-a_vxkcq_1",
    sheetFireItem = "_sheetFireItem_vxkcq_253",
    flame = "_flame_vxkcq_261",
    anima = "_anima_vxkcq_275",
    flameAnimation = "_flame-animation_vxkcq_1",
    hypno$4 = "_hypno_vxkcq_1",
    styles$d = {
        page: page$7,
        pageInner: pageInner$2,
        stars: stars$2,
        subTitle,
        title: title$6,
        coin,
        buttonLink: buttonLink$1,
        dataRow,
        delimeter,
        ava: ava$1,
        avas: avas$1,
        datas,
        datasTop,
        datasBottom,
        online,
        "pulse-ring": "_pulse-ring_vxkcq_1",
        pulseRing,
        sheetBody,
        sheetTitle,
        sheetNumber,
        sheetEqual,
        sheetSubNumber,
        sheetBurned,
        sheetButton,
        sheetFire,
        "flame-a": "_flame-a_vxkcq_1",
        flameA,
        sheetFireItem,
        flame,
        anima,
        "flame-animation": "_flame-animation_vxkcq_1",
        flameAnimation,
        hypno: hypno$4
    },
    prefix$1 = "https://cdn.joincommunity.xyz/clicker/",
    avatars$1 = ["demo-ava-1.png", "demo-ava-2.png", "demo-ava-3.png", "demo-ava-4.png", "demo-ava-5.png", "demo-ava-6.png", "demo-ava-7.png", "demo-ava-8.png?1", "demo-ava-9.png", "demo-ava-10.png", "demo-ava-11.png", "demo-ava-12.png", "demo-ava-13.png", "demo-ava-14.png", "demo-ava-15.png"];
shuffleArray(avatars$1);

function shuffleArray(e) {
    for (let s = e.length - 1; s > 0; s--) {
        const t = Math.floor(Math.random() * (s + 1));
        [e[s], e[t]] = [e[t], e[s]]
    }
}

function ClickerStatisticsPage() {
    const e = useNavigate(),
        {
            userProfile: s
        } = useClickerStore(),
        {
            fetchStatistics: t,
            totalUsers: n,
            onlineUsers: o,
            onlineToday: r,
            totalBalance: a,
            totalBurned: c,
            isLoaded: i
        } = useStatisticsStore(),
        l = `https://t.me/notcoin_bot/start?rp_${s==null?void 0:s.userId}`,
        [d, _] = useToggle(!1),
        [p, u] = useToggle(),
        [m, x] = reactExports.useState(null),
        f = useLocation(),
        g = s !== null && i,
        C = s != null && s.avatar ? s == null ? void 0 : s.avatar : "https://cdn.joincommunity.xyz/clicker/moneta.png";
    reactExports.useEffect(() => (t(), x(1e4), () => {
        x(null)
    }), []), useInterval(() => {
        t()
    }, m);
    const h = () => {
        f.key !== "default" ? e(-1) : e("/clicker")
    };
    return jsxs(Page, {
        className: styles$d.page,
        children: [jsx(BackButton, {
            onClick: h
        }), jsx(MainButton, {
            hidden: !0
        }), jsx(Stars, {
            className: styles$d.stars,
            keyId: "stars",
            amount: 4
        }), jsx(Background, {
            type: "yellow",
            position: "bottom"
        }), g ? jsxs(Content, {
            className: styles$d.pageInner,
            fadeIn: !0,
            children: [jsx("div", {
                className: styles$d.subTitle,
                children: "Total Notcoin Balance"
            }), jsx("div", {
                className: styles$d.title,
                children: jsx(Score, {
                    score: a,
                    size: 32,
                    duration: 2
                })
            }), jsx(Button$1, {
                className: styles$d.buttonLink,
                type: "inline-link",
                onClick: _,
                children: jsx(Text, {
                    type: "subheadline-1",
                    center: !0,
                    semibold: !0,
                    children: "What does that number mean"
                })
            }), jsxs("div", {
                className: styles$d.dataRow,
                children: [jsxs("div", {
                    className: styles$d.avas,
                    children: [jsx("div", {
                        className: styles$d.ava,
                        children: jsx("img", {
                            src: `${prefix$1}${avatars$1[1]}`
                        })
                    }), jsx("div", {
                        className: styles$d.ava,
                        children: jsx("img", {
                            src: `${prefix$1}${avatars$1[0]}`
                        })
                    }), jsx("div", {
                        className: styles$d.ava,
                        children: jsx("img", {
                            src: C
                        })
                    })]
                }), jsxs("div", {
                    className: styles$d.datas,
                    children: [jsx("div", {
                        className: styles$d.datasTop,
                        children: beautifyLongNumber(n, "standard")
                    }), jsx("div", {
                        className: styles$d.datasBottom,
                        children: "Total Players"
                    }), jsx("div", {
                        className: styles$d.delimeter
                    })]
                })]
            }), jsxs("div", {
                className: styles$d.dataRow,
                children: [jsxs("div", {
                    className: styles$d.avas,
                    children: [jsx("div", {
                        className: styles$d.ava,
                        children: jsx("img", {
                            src: `${prefix$1}${avatars$1[6]}`
                        })
                    }), jsx("div", {
                        className: styles$d.ava,
                        children: jsx("img", {
                            src: `${prefix$1}${avatars$1[5]}`
                        })
                    }), jsx("div", {
                        className: styles$d.ava,
                        children: jsx("img", {
                            src: `${prefix$1}${avatars$1[7]}`
                        })
                    })]
                }), jsxs("div", {
                    className: styles$d.datas,
                    children: [jsx("div", {
                        className: styles$d.datasTop,
                        children: beautifyLongNumber(r, "standard")
                    }), jsx("div", {
                        className: styles$d.datasBottom,
                        children: "Daily Users"
                    }), jsx("div", {
                        className: styles$d.delimeter
                    })]
                })]
            }), jsxs("div", {
                className: styles$d.dataRow,
                children: [jsxs("div", {
                    className: styles$d.avas,
                    children: [jsx("div", {
                        className: styles$d.ava,
                        children: jsx("img", {
                            src: `${prefix$1}${avatars$1[2]}`
                        })
                    }), jsx("div", {
                        className: styles$d.ava,
                        children: jsx("img", {
                            src: `${prefix$1}${avatars$1[3]}`
                        })
                    }), jsx("div", {
                        className: styles$d.ava,
                        children: jsx("img", {
                            src: `${prefix$1}${avatars$1[4]}`
                        })
                    })]
                }), jsxs("div", {
                    className: styles$d.datas,
                    children: [jsx("div", {
                        className: styles$d.datasTop,
                        children: beautifyLongNumber(o, "standard")
                    }), jsxs("div", {
                        className: styles$d.datasBottom,
                        children: [jsx("div", {
                            className: styles$d.online
                        }), " Online"]
                    })]
                })]
            }), jsx(Button$1, {
                type: "orange",
                onClick: inviteFrenViaBotStartRef,
                fixedBottom: !0,
                children: "Invite a fren"
            })]
        }) : null, jsx(Sheet, {
            opened: d,
            onClose: _,
            onBackdropClick: _,
            contentClassName: styles$d.modal,
            backdropClassName: styles$d.backdrop,
            children: jsxs("div", {
                className: styles$d.sheetBody,
                children: [jsx("div", {
                    className: styles$d.sheetTitle,
                    children: "Details"
                }), jsx("div", {
                    className: styles$d.sheetNumber,
                    children: beautifyLongNumber(a, "standard")
                }), jsx("div", {
                    className: styles$d.sheetSubNumber,
                    children: "Total Notcoin Balance"
                }), jsx("div", {
                    className: cn(styles$d.sheetNumber, styles$d.sheetEqual),
                    children: "="
                }), jsx("div", {
                    className: styles$d.sheetNumber,
                    children: beautifyLongNumber(c + a, "standard")
                }), jsx("div", {
                    className: styles$d.sheetSubNumber,
                    children: "Total Earned"
                }), jsxs("div", {
                    className: cn(styles$d.sheetNumber, styles$d.sheetBurned),
                    children: ["-", beautifyLongNumber(c, "standard")]
                }), jsx("div", {
                    className: styles$d.sheetSubNumber,
                    children: "Spent And Burned"
                }), jsxs("div", {
                    className: styles$d.sheetFire,
                    children: [jsx("div", {
                        className: styles$d.sheetFireItem
                    }), jsxs("div", {
                        className: styles$d.sheetFireItem,
                        children: [jsx("span", {
                            className: cn(styles$d.flame, styles$d.base)
                        }), jsx("span", {
                            className: cn(styles$d.flame, styles$d.anima)
                        })]
                    }), jsx("div", {
                        className: styles$d.sheetFireItem
                    })]
                }), jsx(Button$1, {
                    className: styles$d.sheetButton,
                    onClick: _,
                    children: "Okay"
                })]
            })
        }), jsx(InviteFren, {
            show: p,
            toggleModal: u,
            inviteLink: l
        })]
    })
}
const statisticsBoard = "_statisticsBoard_qytbf_1",
    ava = "_ava_qytbf_11",
    avas = "_avas_qytbf_29",
    title$5 = "_title_qytbf_34",
    separator$1 = "_separator_qytbf_41",
    link = "_link_qytbf_54",
    linkIcon = "_linkIcon_qytbf_61",
    styles$c = {
        statisticsBoard,
        ava,
        avas,
        title: title$5,
        separator: separator$1,
        link,
        linkIcon
    },
    prefix = "https://cdn.joincommunity.xyz/clicker/",
    avatars = ["demo-ava-2.png", "demo-ava-3.png"];

function StatisticsBoard() {
    const e = useNavigate(),
        {
            userProfile: s
        } = useClickerStore(),
        {
            fetchStatistics: t,
            totalUsers: n,
            isLoaded: o
        } = useStatisticsStore(),
        r = s != null && s.avatar ? s == null ? void 0 : s.avatar : "https://cdn.joincommunity.xyz/clicker/moneta.png";
    return reactExports.useEffect(() => {
        t()
    }, []), s !== null && o ? jsxs(Content, {
        className: styles$c.statisticsBoard,
        fadeIn: !0,
        onClick: () => e("/clicker/statistics"),
        children: [jsxs("div", {
            className: styles$c.avas,
            children: [jsx("div", {
                className: styles$c.ava,
                children: jsx("img", {
                    src: `${prefix}${avatars[0]}`
                })
            }), jsx("div", {
                className: styles$c.ava,
                children: jsx("img", {
                    src: `${prefix}${avatars[1]}`
                })
            }), jsx("div", {
                className: styles$c.ava,
                children: jsx("img", {
                    src: r
                })
            })]
        }), jsxs("div", {
            className: styles$c.title,
            children: [beautifyLongNumber(n, "standard"), " Notcoiners"]
        }), jsx("div", {
            className: styles$c.separator,
            children: "・"
        }), jsx("div", {
            className: styles$c.link,
            children: "Stats"
        }), jsx(Icon, {
            className: styles$c.linkIcon,
            name: "ChevronRight"
        })]
    }) : null
}
const typeIndex = ["user", "team"],
    timeIndex = ["daily", "weekly"];

function ClickerLeaguePage() {
    const e = useNavigate(),
        {
            leagueId: s,
            type: t
        } = useParams(),
        {
            addToast: n
        } = useToast(),
        [o, r] = reactExports.useState(t ? typeIndex.indexOf(t) : 0),
        [a, c] = reactExports.useState(1),
        [i, l] = reactExports.useState(getLeagueById(Number(s))),
        [d, _] = reactExports.useState(null);
    useUserActions();
    const {
        clickerTeam: p,
        userProfile: u
    } = useClickerStore(), {
        score: m
    } = useUser(), x = w => {
        w !== o && e(`/clicker/league/${i.id}/${typeIndex[w]}`)
    }, f = w => {
        w !== a && c(w)
    };
    reactExports.useEffect(() => {
        s && Number(s) !== i.id && l(getLeagueById(Number(s)))
    }, [s]), reactExports.useEffect(() => {
        r(typeIndex.indexOf(t)), _(null), u && g()
    }, [a, i, t, u]);
    const g = async () => {
            var M, v;
            const w = timeIndex[a];
            let q = m[w];
            const {
                ok: A,
                items: P
            } = j ? await fetchReferralLeaderboardApi() : await fetchLeaderboard({
                type: t,
                league: i.enum,
                time: w,
                squadId: t === "team" && (u == null ? void 0 : u.teamId) || void 0
            });
            if (A) {
                if ((j || t === "user") && $) {
                    const B = q.rank,
                        R = q.score;
                    !P.some(W => W.userId === (u == null ? void 0 : u.userId)) && B && P.push({
                        index: B,
                        i: B,
                        id: u == null ? void 0 : u.userId,
                        img: u == null ? void 0 : u.avatar,
                        title: ((M = u == null ? void 0 : u.user) == null ? void 0 : M.firstName) ? ? ((v = u == null ? void 0 : u.user) == null ? void 0 : v.username),
                        points: R
                    })
                }
                setTimeout(() => {
                    _(P)
                }, $ ? 350 : 200)
            } else n({
                message: "Can't fetch data. Try again later.",
                type: "error"
            })
        },
        C = () => {
            !j && i.id - 1 >= 1 && e(`/clicker/league/${i.id-1}/${t}`)
        },
        h = () => {
            !j && i.id + 1 <= 5 && e(`/clicker/league/${i.id+1}/${t}`)
        },
        y = getCurrentScore(u, typeIndex[o], p),
        k = getLeagueLimitById(i.id, typeIndex[o]),
        b = getLeagueMinById(i.id, typeIndex[o]),
        $ = (u == null ? void 0 : u.leagueId) === i.id && typeIndex[o] === "user" || p && (p == null ? void 0 : p.leagueId) === i.id && typeIndex[o] === "team",
        I = !!u,
        S = i.id + 1 > 5,
        L = i.id === 1,
        [T, E] = reactExports.useState(null),
        N = w => {
            E(w.touches[0].clientX)
        },
        z = w => {
            if (T === null) return;
            const q = w.touches[0].clientX,
                A = T - q;
            A > 5 && h(), A < -5 && C(), E(null)
        },
        j = i.enum === "influencer";
    return jsxs(Page, {
        className: styles$n.page,
        children: [I ? jsx(Background, {
            type: getLeagueColor(i.id)
        }) : null, jsx(MainButton, {
            hidden: !0
        }), jsx(BackButton, {
            onClick: () => e("/clicker")
        }), jsxs("div", {
            className: styles$n.pageInner,
            children: [jsx("div", {
                className: styles$n.statisticsBoard,
                children: jsx(StatisticsBoard, {})
            }), I ? jsxs(Fragment, {
                children: [jsxs(Content, {
                    align: "center",
                    className: styles$n.intro,
                    spacingChild: "12",
                    column: !0,
                    onTouchStart: N,
                    onTouchMove: z,
                    children: [j ? null : jsxs(Fragment, {
                        children: [jsx("div", {
                            className: cn(styles$n.arrow, styles$n.arrowLeft, L && styles$n.arrowDisabled),
                            onClick: C,
                            children: jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "28",
                                height: "28",
                                viewBox: "0 0 28 28",
                                fill: "none",
                                children: jsx("path", {
                                    d: "M8.34863 13.6543C8.34863 13.9619 8.46289 14.2256 8.70898 14.4541L15.5469 21.1514C15.7402 21.3447 15.9863 21.4502 16.2764 21.4502C16.8564 21.4502 17.3223 20.9932 17.3223 20.4043C17.3223 20.1143 17.1992 19.8594 17.0059 19.6572L10.8447 13.6543L17.0059 7.65137C17.1992 7.44922 17.3223 7.18555 17.3223 6.9043C17.3223 6.31543 16.8564 5.8584 16.2764 5.8584C15.9863 5.8584 15.7402 5.96387 15.5469 6.15723L8.70898 12.8457C8.46289 13.083 8.34863 13.3467 8.34863 13.6543Z",
                                    fill: "white"
                                })
                            })
                        }), jsx("div", {
                            className: cn(styles$n.arrow, styles$n.arrowRight, S && styles$n.arrowDisabled),
                            onClick: h,
                            children: jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "28",
                                height: "28",
                                viewBox: "0 0 28 28",
                                fill: "none",
                                children: jsx("path", {
                                    d: "M19.6514 13.6543C19.6426 13.3467 19.5283 13.083 19.291 12.8457L12.4531 6.15723C12.251 5.96387 12.0137 5.8584 11.7236 5.8584C11.1348 5.8584 10.6777 6.31543 10.6777 6.9043C10.6777 7.18555 10.792 7.44922 10.9941 7.65137L17.1465 13.6543L10.9941 19.6572C10.792 19.8594 10.6777 20.1143 10.6777 20.4043C10.6777 20.9932 11.1348 21.4502 11.7236 21.4502C12.0049 21.4502 12.251 21.3447 12.4531 21.1514L19.291 14.4541C19.5371 14.2256 19.6514 13.9619 19.6514 13.6543Z",
                                    fill: "white"
                                })
                            })
                        })]
                    }), jsx("div", {
                        className: styles$n.goblet,
                        children: jsx(Goblet, {
                            type: getLeagueColor(i.id)
                        })
                    }), jsx(Stars, {
                        className: styles$n.stars,
                        keyId: i.id
                    }), jsx(motion.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            ease: "easeInOut",
                            duration: .45,
                            delay: .35
                        },
                        children: jsx(Text, {
                            type: "title-large",
                            center: !0,
                            children: getLeagueName(i)
                        })
                    }, i.id), $ ? jsxs(Content, {
                        spacingChild: "12",
                        column: !0,
                        fullWidth: !0,
                        align: "center",
                        children: [jsxs("div", {
                            children: [jsxs("span", {
                                className: styles$n.subTitle,
                                children: [beautifyMoney$1(y), " / "]
                            }), jsx("span", {
                                className: styles$n.subTitle,
                                children: beautifyLongNumber(k)
                            })]
                        }), jsx(Progress$1, {
                            type: getLeagueColor(i.id),
                            value: y,
                            maxValue: k
                        })]
                    }) : null, $ ? null : jsx(Content, {
                        spacingChild: "2",
                        column: !0,
                        fadeIn: !0,
                        className: styles$n.subTitleWrap,
                        children: getLeagueDescription(i, b)
                    })]
                }), jsxs(Content, {
                    padding: "16-0",
                    column: !0,
                    children: [j ? null : jsxs(Tabs, {
                        onChange: x,
                        activeIndex: o,
                        className: styles$n.tabs,
                        children: [jsx(Tab, {
                            label: "Miners"
                        }), jsx(Tab, {
                            label: "Squads"
                        })]
                    }), s === "1" ? jsxs(Text, {
                        className: styles$n.zeroState,
                        children: [jsx("div", {
                            children: "🏆"
                        }), o === 0 ? jsxs(Fragment, {
                            children: ["You'll join leaderboard", jsx("br", {}), " in the Silver League"]
                        }) : jsx(Fragment, {
                            children: "Leaderboard is under construction"
                        })]
                    }) : jsx(Leaderboard, {
                        highlightId: t === "user" || j ? u == null ? void 0 : u.userId : (u == null ? void 0 : u.teamId) || null,
                        highlightText: t === "user" || j ? "You" : "Your",
                        list: d,
                        boardType: j ? "frens" : "coins",
                        tabs: j ? null : jsxs(Tabs, {
                            onChange: f,
                            activeIndex: a,
                            flat: !0,
                            children: [jsx(Tab, {
                                label: "Day",
                                flat: !0
                            }), jsx(Tab, {
                                label: "Week",
                                flat: !0
                            })]
                        })
                    })]
                })]
            }) : null]
        })]
    })
}
const ukranian$4 = {
        title: "Королі Вечірок",
        subtitle: jsxs(Fragment, {
            children: ["Ці скводы зараз набирають нових членів", jsx("br", {}), "Хочеш приєднатися?"]
        }),
        button: "Вибрати інший сквод"
    },
    LeagueSquadPageL10n = {
        en: {
            title: "Join Squad!",
            subtitle: jsxs(Fragment, {
                children: ["These squads recruiting now.", jsx("br", {}), " Do you wanna join?"]
            }),
            button: "Join another squad"
        },
        ru: {
            title: "Залетай в сквод",
            subtitle: jsxs(Fragment, {
                children: ["Эти скводы активно набирают игроков", jsx("br", {}), "Выбирай любой"]
            }),
            button: "Выбрать другой сквод"
        },
        tr: {
            title: "Squad Katıl!",
            subtitle: jsxs(Fragment, {
                children: ["Bu takımlar şu anda üye topluyor.", jsx("br", {}), "Katılmak ister misin?"]
            }),
            button: "Başka bir squad katılın"
        },
        uk: ukranian$4,
        ua: ukranian$4
    };

function LeagueSquadPage() {
    var d;
    const e = useNavigate(),
        s = getUserLang(Object.keys(LeagueSquadPageL10n)),
        [t, n] = reactExports.useState([]),
        o = {
            id: 7,
            tgName: "Greatest Influencers",
            name: "Influencers",
            enum: "squad",
            minProfile: 0,
            minTeam: 0
        },
        r = useClickerStore().userProfile;
    reactExports.useEffect(() => {
        a()
    }, [r]);
    const a = async () => {
            if (r) {
                const {
                    ok: _,
                    data: p
                } = await fetchBidsApi();
                _ && n(p)
            }
        },
        c = !!r && t.length,
        i = () => {
            createSquadViaBotStartRef()
        },
        l = r && ((d = r.user) == null ? void 0 : d.role) === "superadmin";
    return jsxs(Page, {
        className: styles$n.page,
        children: [c ? jsx(Background, {
            type: getLeagueColor(6)
        }) : null, jsx(MainButton, {
            hidden: !0
        }), jsx(BackButton, {
            onClick: () => e("/clicker")
        }), jsx("div", {
            className: styles$n.pageInnerSquad,
            children: c ? jsxs(Fragment, {
                children: [jsxs(Content, {
                    align: "center",
                    padding: "24-0-16",
                    spacingChild: "12",
                    column: !0,
                    children: [jsx(Goblet, {
                        type: getLeagueColor(o.id)
                    }), jsx(Stars, {
                        className: styles$n.stars,
                        keyId: o.id
                    }), jsx(Text, {
                        type: "title-large",
                        center: !0,
                        children: LeagueSquadPageL10n[s].title
                    }), jsx(Text, {
                        type: "callout",
                        center: !0,
                        color: "secondary",
                        children: LeagueSquadPageL10n[s].subtitle
                    }), jsx(Content, {
                        fullWidth: !0,
                        growChild: !0,
                        padding: "12-0-0",
                        children: jsx(Button$1, {
                            type: "orange",
                            onClick: i,
                            children: LeagueSquadPageL10n[s].button
                        })
                    })]
                }), jsx(Content, {
                    padding: "16-0",
                    column: !0,
                    className: styles$n.squadBoard,
                    fadeIn: !0,
                    children: t.map(_ => jsx(ListItem, {
                        onClick: () => e(`/clicker/squad/${_.team.id}`),
                        title: jsx(Text, {
                            type: "headline",
                            children: _.team.name
                        }),
                        divider: !1,
                        chevron: !0,
                        medium: !0,
                        footer: jsxs(Text, {
                            type: "subheadline-2",
                            color: "secondary",
                            className: styles$n.footerSquad,
                            children: [jsx("img", {
                                src: `https://cdn.joincommunity.xyz/clicker/league/${getLeagueById(_.team.leagueId).name}-95.png`,
                                height: "24",
                                alt: "League cup",
                                className: styles$n.cup
                            }), getLeagueById(_.team.leagueId).name, l ? jsxs(Content, {
                                className: styles$n.isAdmin,
                                children: [jsx("div", {
                                    children: "・"
                                }), jsxs("p", {
                                    className: styles$n.bidAmount,
                                    children: ["$", _.amount]
                                })]
                            }) : null]
                        }),
                        before: jsx(MediaIcon, {
                            media: {
                                type: "cover-src",
                                value: _.team.logo,
                                color: "pale-grey"
                            },
                            imageSize: "48",
                            size: "48",
                            borderRadius: "12"
                        })
                    }, _.team.id))
                })]
            }) : null
        })]
    })
}
const page$6 = "_page_lkckw_12",
    background = "_background_lkckw_27",
    notice = "_notice_lkckw_38",
    noticeLink = "_noticeLink_lkckw_49",
    place$1 = "_place_lkckw_53",
    laurelIconReversed = "_laurelIconReversed_lkckw_64",
    headerActions = "_headerActions_lkckw_68",
    button = "_button_lkckw_73",
    nav = "_nav_lkckw_80",
    card = "_card_lkckw_85",
    teamIcon = "_teamIcon_lkckw_92",
    taskIcon = "_taskIcon_lkckw_101",
    buttonChevron = "_buttonChevron_lkckw_130",
    rippleEffect = "_rippleEffect_lkckw_146",
    skinLeague1 = "_skin-league-1_lkckw_183",
    skinLeague2 = "_skin-league-2_lkckw_187",
    skinLeague3 = "_skin-league-3_lkckw_191",
    skinLeague4 = "_skin-league-4_lkckw_195",
    skinLeague5 = "_skin-league-5_lkckw_199",
    skinDefault = "_skin-default_lkckw_203",
    skinVi = "_skin-VI_lkckw_207",
    skinFallout = "_skin-fallout_lkckw_211",
    skinGalleon = "_skin-galleon_lkckw_215",
    skinEggs = "_skin-eggs_lkckw_219",
    hypno$3 = "_hypno_lkckw_1",
    glow$1 = "_glow_lkckw_1",
    styles$b = {
        page: page$6,
        background,
        notice,
        noticeLink,
        place: place$1,
        laurelIconReversed,
        headerActions,
        button,
        nav,
        card,
        teamIcon,
        taskIcon,
        buttonChevron,
        rippleEffect,
        "skin-league-1": "_skin-league-1_lkckw_183",
        skinLeague1,
        "skin-league-2": "_skin-league-2_lkckw_187",
        skinLeague2,
        "skin-league-3": "_skin-league-3_lkckw_191",
        skinLeague3,
        "skin-league-4": "_skin-league-4_lkckw_195",
        skinLeague4,
        "skin-league-5": "_skin-league-5_lkckw_199",
        skinLeague5,
        "skin-default": "_skin-default_lkckw_203",
        skinDefault,
        "skin-VI": "_skin-VI_lkckw_207",
        skinVi,
        "skin-fallout": "_skin-fallout_lkckw_211",
        skinFallout,
        "skin-galleon": "_skin-galleon_lkckw_215",
        skinGalleon,
        "skin-eggs": "_skin-eggs_lkckw_219",
        skinEggs,
        hypno: hypno$3,
        glow: glow$1
    },
    title$4 = "_title_1tybo_1",
    subtitle$1 = "_subtitle_1tybo_10",
    image = "_image_1tybo_18",
    backButton = "_backButton_1tybo_23",
    modal = "_modal_1tybo_39",
    body = "_body_1tybo_44",
    backdrop = "_backdrop_1tybo_50",
    robotSays = "_robotSays_1tybo_54",
    score$1 = "_score_1tybo_69",
    scoreSkeleton = "_scoreSkeleton_1tybo_77",
    styles$a = {
        title: title$4,
        subtitle: subtitle$1,
        image,
        backButton,
        modal,
        body,
        backdrop,
        robotSays,
        score: score$1,
        scoreSkeleton
    },
    chinese = {
        message: jsxs("p", {
            children: ["您好，先生/女士，", jsx("br", {}), "这是我为您自动赚取的：", jsx("br", {})]
        }),
        signature: jsx("p", {
            children: "您真诚的，点击器人工智能"
        }),
        button: "谢谢"
    },
    ukranian$3 = {
        message: jsxs("p", {
            children: ["Привіт, друже,", jsx("br", {}), "ото що я заработав автоматом", jsx("br", {}), "для тебе:"]
        }),
        signature: jsx("p", {
            children: "Твій, Клікер ШІ"
        }),
        button: "Дякую"
    },
    RobotL10n = {
        en: {
            message: jsxs("p", {
                children: ["GM sir/madam,", jsx("br", {}), "here is what I auto-earned", jsx("br", {}), "for ya:"]
            }),
            signature: jsx("p", {
                children: "Yours truly, Clicker AI"
            }),
            button: "Thanks"
        },
        ru: {
            message: jsxs("p", {
                children: ["Привет, друг,", jsx("br", {}), "вот что я заработал автоматом", jsx("br", {}), "для тебя:"]
            }),
            signature: jsx("p", {
                children: "Твой, Кликер ИИ"
            }),
            button: "Спасибо"
        },
        uk: ukranian$3,
        ua: ukranian$3,
        kk: {
            message: jsxs("p", {
                children: ["Сәлем, забал,", jsx("br", {}), "мен автоматты түрде қалайсызды таба алдым", jsx("br", {}), "сіз үшін:"]
            }),
            signature: jsx("p", {
                children: "Сіздің, Кликер ИИ"
            }),
            button: "Рақмет, брат"
        },
        id: {
            message: jsxs("p", {
                children: ["Hai, pak/bu,", jsx("br", {}), "ini yang saya dapatkan secara otomatis", jsx("br", {}), "untuk Anda:"]
            }),
            signature: jsx("p", {
                children: "Atas hormat, Clicker AI"
            }),
            button: "Terima kasih"
        },
        tr: {
            message: jsxs("p", {
                children: ["Selam efendim/hanımefendi,", jsx("br", {}), "işte size otomatik kazandıklarım:", jsx("br", {})]
            }),
            signature: jsx("p", {
                children: "Saygılarımla, Clicker AI"
            }),
            button: "Teşekkürler"
        },
        fa: {
            message: jsxs("p", {
                children: ["سلام، جناب/خانم،", jsx("br", {}), "در اینجا چیزی که خودم به دست آوردم هست", jsx("br", {}), "برای شما:"]
            }),
            signature: jsx("p", {
                children: "با احترام، کلیکر هوش مصنوعی"
            }),
            button: "ممنون"
        },
        hi: {
            message: jsxs("p", {
                children: ["नमस्ते सर/मैडम,", jsx("br", {}), "यह रहा वह जो मैंने स्वयं कमाया है", jsx("br", {}), "आपके लिए:"]
            }),
            signature: jsx("p", {
                children: "आपका, क्लिकर ए.आई."
            }),
            button: "धन्यवाद"
        },
        ar: {
            message: jsxs("p", {
                children: ["مرحبًا، يا سيدي/سيدتي،", jsx("br", {}), "إليكم ما حققته تلقائياً", jsx("br", {}), "لكم:"]
            }),
            signature: jsx("p", {
                children: "مع خالص التحية، كليكر الذكاء الاصطناعي"
            }),
            button: "شكرًا"
        },
        pl: {
            message: jsxs("p", {
                children: ["Cześć panie/pani,", jsx("br", {}), "oto co automatycznie zarobiłem", jsx("br", {}), "dla Pana/Pani:"]
            }),
            signature: jsx("p", {
                children: "Z poważaniem, Clicker AI"
            }),
            button: "Dzięki"
        },
        "zh-hans": chinese,
        "zh-hant": chinese,
        de: {
            message: jsxs("p", {
                children: ["Hallo, mein Herr/meine Dame,", jsx("br", {}), "hier ist, was ich automatisch verdient habe", jsx("br", {}), "für Sie:"]
            }),
            signature: jsx("p", {
                children: "Herzlich, Clicker AI"
            }),
            button: "Danke"
        },
        it: {
            message: jsxs("p", {
                children: ["Ciao signore/signora,", jsx("br", {}), "ecco cosa ho guadagnato automaticamente", jsx("br", {}), "per Lei:"]
            }),
            signature: jsx("p", {
                children: "Cordiali saluti, Clicker AI"
            }),
            button: "Grazie"
        },
        es: {
            message: jsxs("p", {
                children: ["Hola señor/señora,", jsx("br", {}), "aquí está lo que gané automáticamente", jsx("br", {}), "para usted:"]
            }),
            signature: jsx("p", {
                children: "Atentamente, Clicker AI"
            }),
            button: "Gracias"
        },
        uz: {
            message: jsxs("p", {
                children: ["Salom, sayyid/sayyidah,", jsx("br", {}), "men avtomatik ravishda qandaydir sotib oldim", jsx("br", {}), "siz uchun:"]
            }),
            signature: jsx("p", {
                children: "Sizning, Clicker AI 😘😘😘"
            }),
            button: "Rahmat"
        },
        he: {
            message: jsxs("p", {
                children: ["שלום חבר/חברה,", jsx("br", {}), "זה מה שרווחתי באופן אוטומטי", jsx("br", {}), "בשבילך:"]
            }),
            signature: jsx("p", {
                children: "בברכה, Clicker AI"
            }),
            button: "תודה"
        },
        vi: {
            message: jsxs("p", {
                children: ["Chào anh/chị,", jsx("br", {}), "đây là những gì tôi đã tự kiếm", jsx("br", {}), "cho anh/chị:"]
            }),
            signature: jsx("p", {
                children: "Trân trọng, Clicker AI"
            }),
            button: "Cảm ơn"
        },
        fr: {
            message: jsxs("p", {
                children: ["Salut monsieur/madame,", jsx("br", {}), "voilà ce que j'ai auto-gagné", jsx("br", {}), "pour vous :"]
            }),
            signature: jsx("p", {
                children: "Amicalement, Clicker AI"
            }),
            button: "Merci"
        },
        br: {
            message: jsxs("p", {
                children: ["Oi senhor/senhora,", jsx("br", {}), "aqui está o que eu ganhei automaticamente", jsx("br", {}), "para o senhor/a senhora:"]
            }),
            signature: jsx("p", {
                children: "Com estima, Clicker AI"
            }),
            button: "Obrigado"
        }
    },
    Robot = ({
        isShown: e,
        minedAmount: s,
        setShow: t,
        claimAction: n
    }) => {
        const {
            addToast: o,
            hideToasts: r
        } = useToast(), [a, c] = reactExports.useState(!1), i = async () => {
            a || (c(!0), o({
                message: "Claiming...",
                type: "loading"
            }), await n(s).then(d => {
                r(), o({
                    message: "Claimed!"
                }), c(!1)
            }).catch(d => {
                o({
                    message: "Try later",
                    type: "error"
                })
            }), t(!1))
        }, l = getUserLang(Object.keys(RobotL10n));
        return jsx("div", {
            className: styles$a.root,
            children: jsx(Sheet, {
                opened: e,
                onClose: () => t(!1),
                onBackdropClick: () => t(!1),
                contentClassName: styles$a.modal,
                backdropClassName: styles$a.backdrop,
                children: jsxs("div", {
                    className: styles$a.body,
                    children: [jsx("div", {
                        className: styles$a.image,
                        children: "🤖"
                    }), jsxs("div", {
                        className: styles$a.robotSays,
                        children: [RobotL10n[l].message, jsx("div", {
                            className: styles$a.score,
                            children: s > 0 ? `+${beautifyMoney$1(s)}` : jsx(Skeleton.Line, {
                                className: styles$a.scoreSkeleton
                            })
                        }), RobotL10n[l].signature]
                    }), jsx(Button, {
                        onClick: () => i(),
                        children: RobotL10n[l].button
                    })]
                })
            })
        })
    };

function ClickerMainPage() {
    const {
        userProfile: e,
        score: s,
        isLoading: t,
        isTurboMode: n,
        availableToClick: o,
        lastMiningAt: r,
        robotMined: a,
        clickValue: c,
        turboSettings: i,
        turboTimes: l,
        turboGift: d,
        cooldown: _,
        isSleep: p,
        isNewbie: u,
        clickerTeam: m,
        click: x,
        restoreClicks: f,
        switchTurbo: g,
        checkTurboGiftValidity: C,
        checkTurbo: h,
        fetchRobotBalance: y,
        claimRobotMinedCoins: k
    } = useClickerStore(), [b, $] = reactExports.useState(!!(!u && !n && (l >= 1 || d))), [I, S] = reactExports.useState(!1), {
        currentSkin: L
    } = useBoostStore(), T = !t && o > 0 && _ === 0, E = window.Telegram.WebApp, N = window.innerHeight, [z, j] = reactExports.useState(N), w = () => {
        p || (E.HapticFeedback.impactOccurred("light"), E.isExpanded || E.expand(), x(), u && z - N / (NEWBIE_UNLOCK_SCORE - 1) > 0 && j(z - N / (NEWBIE_UNLOCK_SCORE - 1)))
    }, q = async () => {
        $(!1), g(!0)
    };
    reactExports.useEffect(() => {
        const B = setInterval(() => {
            f(), C()
        }, 1e3);
        return () => clearInterval(B)
    }, []), reactExports.useEffect(() => {
        E.isExpanded || E.expand();
        const B = F => {
                F.preventDefault()
            },
            R = {
                passive: !1
            };
        return window.addEventListener("touchmove", B, R), () => {
            window.removeEventListener("touchmove", B)
        }
    }, []), reactExports.useEffect(() => {
        $(!!(!u && !n && (l >= 1 || d)))
    }, [n, l, d]), reactExports.useEffect(() => {
        const F = diffInSeconds(new Date(r), new Date) > 3600;
        e != null && e.withRobot && F && M()
    }, [e, r]);
    const [A, P] = reactExports.useState(!1), M = async () => {
        A || (P(!0), S(!0), P(!1), await y())
    }, v = L === "default" ? `league-${e==null?void 0:e.leagueId}` : L;
    return jsxs(Page, {
        className: cn(styles$b.page, styles$b[`skin-${v}`]),
        children: [jsx(MainButton, {
            hidden: !0
        }), jsx(BackButton, {
            hidden: !0
        }), u && jsx("div", {
            className: styles$b.background,
            style: {
                backgroundPositionY: z + "px"
            }
        }), jsx(TurboPussy, {
            show: b,
            times: l,
            onClick: q
        }), jsx(Coinfall, {
            show: n,
            multiple: i == null ? void 0 : i.multiple
        }), !u && jsx(Squad, {
            squadInfo: m,
            teamId: e == null ? void 0 : e.teamId
        }), !u && jsxs(Content, {
            column: !0,
            fadeIn: !0,
            children: [jsx(Score, {
                score: s
            }), jsx(Content, {
                justify: "center",
                align: "center",
                column: !0,
                children: jsx(PlaceAndLeague, {
                    leagueId: e == null ? void 0 : e.leagueId
                })
            })]
        }), u && jsx("div", {
            style: {
                height: "195px"
            }
        }), jsx(Notcoin, {
            canIClickPlease: T,
            sleep: p,
            funMode: n,
            clickValue: calculateClickValue(n, i, c),
            cooldown: _,
            handleClick: w
        }), !u && e && jsx(Progress, {
            current: o,
            profile: e
        }), jsx(Robot, {
            isShown: I,
            minedAmount: a,
            setShow: S,
            claimAction: k
        })]
    })
}
const squadLogo = "_squadLogo_j73ez_1",
    joinSquadButton = "_joinSquadButton_j73ez_6",
    styles$9 = {
        squadLogo,
        joinSquadButton
    },
    time = "_time_usjo5_1",
    styles$8 = {
        time
    },
    root = "_root_2szzu_1",
    container = "_container_2szzu_5",
    glow = "_glow_2szzu_1",
    funMode = "_funMode_2szzu_26",
    fastGlow = "_fastGlow_2szzu_1",
    sleep = "_sleep_2szzu_29",
    notcoin = "_notcoin_2szzu_33",
    blur = "_blur_2szzu_59",
    cooldown = "_cooldown_2szzu_77",
    cooldownContainer = "_cooldownContainer_2szzu_82",
    cooldownNumber = "_cooldownNumber_2szzu_89",
    cooldownCircle = "_cooldownCircle_2szzu_101",
    countdown = "_countdown_2szzu_1",
    clickAmount = "_clickAmount_2szzu_111",
    click = "_click_2szzu_111",
    styles$7 = {
        root,
        container,
        glow,
        funMode,
        fastGlow,
        sleep,
        notcoin,
        blur,
        cooldown,
        cooldownContainer,
        cooldownNumber,
        cooldownCircle,
        countdown,
        clickAmount,
        click
    },
    page$5 = "_page_104u4_12",
    hypno$2 = "_hypno_104u4_1",
    styles$6 = {
        page: page$5,
        hypno: hypno$2
    };
new JSConfetti;
const ukranian$2 = {
        oneTitle: "Канали та групи це сквади",
        oneDescr: "Об'єднуйся с улюбленими та грай",
        twoTitle: "Запросіть усю спільноту",
        twoDescr: "І отримуйте купу бонусів",
        threeTitle: "Зроби свiй сквад найкращим",
        threeDescr: "Навчай грати та прокачувати бусти",
        more: "Повний гід",
        moreLink: "https://notcoin.notion.site/Notcoin-12ea93f0159d4db199a512a9bb5ea713?pvs=74",
        button: "Файно"
    },
    ClickerSquadDetailsPageL10n = {
        en: {
            oneTitle: "Channels & chats are Squads",
            oneDescr: "Play for your favourite one",
            twoTitle: "Invite the whole chat",
            twoDescr: "And get tons of bonuses",
            threeTitle: "Get your squad to the top",
            threeDescr: "Guide newcomers how to play",
            more: "Full guide",
            moreLink: "https://notcoin.notion.site/Notcoin-a-full-guide-1c5a21aaf01f4209acc3b8540f3bc84b",
            button: "Good "
        },
        ru: {
            oneTitle: "Каналы и группы это Squads",
            oneDescr: "Присоединяйся и играй вместе",
            twoTitle: "Пригласи весь чат",
            twoDescr: "И получи больше бонусов",
            threeTitle: "Подними свой Squad в топ",
            threeDescr: "Обучай новичков как играть",
            more: "Подробный гайд",
            moreLink: "https://notcoin.notion.site/Notcoin-12ea93f0159d4db199a512a9bb5ea713?pvs=74",
            button: "Пон"
        },
        tr: {
            oneTitle: "Kanalar ve gruplar",
            oneDescr: "En sevdiğiniz kanal için oynayın",
            twoTitle: "Tüm topluluğu davet et",
            twoDescr: "Ve tonlarca bonus kazanın",
            threeTitle: "Takımınızı Zirveye taşıyın",
            threeDescr: "Yeni gelenlere nasıl oynayacakları konusunda rehberlik edin",
            more: "Rehber",
            moreLink: "https://notcoin.notion.site/Notcoin-a-full-guide-1c5a21aaf01f4209acc3b8540f3bc84b",
            button: "İyi"
        },
        fr: {
            oneTitle: "Les canaux et les groupes sont des Squads",
            oneDescr: "Joue pour ton équipe préférée",
            twoTitle: "Invite toute ta communauté",
            twoDescr: "Et obtiens des tonnes de bonus",
            threeTitle: "Amène ton équipe au sommet",
            threeDescr: "Apprends comment jouer aux nouveaux",
            more: "Guide complet",
            moreLink: "https://notcoin.notion.site/Notcoin-a-full-guide-1c5a21aaf01f4209acc3b8540f3bc84b",
            button: "Bon"
        },
        uk: ukranian$2,
        ua: ukranian$2
    },
    page$4 = "_page_tvl8m_1",
    pageInner$1 = "_pageInner_tvl8m_9",
    title$3 = "_title_tvl8m_15",
    stars$1 = "_stars_tvl8m_19",
    bodyVertical = "_bodyVertical_tvl8m_48",
    buttonLink = "_buttonLink_tvl8m_54",
    styles$5 = {
        page: page$4,
        pageInner: pageInner$1,
        title: title$3,
        stars: stars$1,
        bodyVertical,
        buttonLink
    };

function ClickerSquadDetailsPage() {
    const e = window.Telegram.WebApp,
        s = useNavigate(),
        t = useLocation(),
        n = getUserLang(Object.keys(ClickerSquadDetailsPageL10n)),
        o = () => {
            t.key !== "default" ? s(-1) : s("/clicker")
        };
    return jsxs(Page, {
        className: styles$5.page,
        children: [jsx(BackButton, {
            onClick: o
        }), jsx(MainButton, {
            hidden: !0
        }), jsx(Stars, {
            className: styles$5.stars,
            keyId: "stars",
            amount: 4
        }), jsxs(Content, {
            className: styles$5.pageInner,
            column: !0,
            fadeIn: !0,
            children: [jsxs(Content, {
                spacingChild: "4",
                growChild: !0,
                children: [jsxs(Button$1, {
                    type: "basic",
                    onClick: () => e.openTelegramLink("https://t.me/notcoin"),
                    children: [jsx(Icon, {
                        name: "telegram"
                    }), " Join"]
                }), jsxs(Button$1, {
                    type: "basic",
                    onClick: () => e.openLink("https://x.com/thenotcoin"),
                    children: [jsx(Icon, {
                        name: "x",
                        colorFill: "primary"
                    }), " Follow"]
                })]
            }), jsxs("div", {
                className: styles$5.bodyVertical,
                children: [jsx(Content, {
                    column: !0,
                    className: styles$5.title,
                    children: jsx(Text, {
                        type: "title-large",
                        align: "center",
                        children: "Squads"
                    })
                }), jsxs(Content, {
                    spacingChild: "40",
                    column: !0,
                    children: [jsx(motion.div, {
                        initial: {
                            opacity: 0,
                            y: -5
                        },
                        animate: {
                            opacity: 1,
                            y: 5
                        },
                        transition: {
                            duration: .5
                        },
                        children: jsxs(Content, {
                            spacingChild: "18",
                            children: [jsx(Image, {
                                src: "https://cdn.joincommunity.xyz/clicker/squad-coin.png",
                                size: "48"
                            }), jsxs(Content, {
                                spacingChild: "4",
                                column: !0,
                                children: [jsx(Text, {
                                    type: "callout",
                                    semibold: !0,
                                    children: ClickerSquadDetailsPageL10n[n].oneTitle
                                }), jsx(Text, {
                                    type: "callout",
                                    children: ClickerSquadDetailsPageL10n[n].oneDescr
                                })]
                            })]
                        })
                    }), jsx(motion.div, {
                        initial: {
                            opacity: 0,
                            y: -5
                        },
                        animate: {
                            opacity: 1,
                            y: 5
                        },
                        transition: {
                            duration: .5,
                            delay: .25
                        },
                        children: jsxs(Content, {
                            spacingChild: "18",
                            children: [jsx(Image, {
                                src: "https://cdn.joincommunity.xyz/clicker/money-bag.png",
                                size: "48"
                            }), jsxs(Content, {
                                spacingChild: "4",
                                column: !0,
                                children: [jsx(Text, {
                                    type: "callout",
                                    semibold: !0,
                                    children: ClickerSquadDetailsPageL10n[n].twoTitle
                                }), jsx(Text, {
                                    type: "callout",
                                    children: ClickerSquadDetailsPageL10n[n].twoDescr
                                })]
                            })]
                        })
                    }), jsx(motion.div, {
                        initial: {
                            opacity: 0,
                            y: -5
                        },
                        animate: {
                            opacity: 1,
                            y: 5
                        },
                        transition: {
                            duration: .5,
                            delay: .5
                        },
                        children: jsxs(Content, {
                            spacingChild: "18",
                            children: [jsx(Image, {
                                src: "https://cdn.joincommunity.xyz/clicker/medal-first.png",
                                size: "48"
                            }), jsxs(Content, {
                                spacingChild: "4",
                                column: !0,
                                children: [jsx(Text, {
                                    type: "callout",
                                    semibold: !0,
                                    children: ClickerSquadDetailsPageL10n[n].threeTitle
                                }), jsx(Text, {
                                    type: "callout",
                                    children: ClickerSquadDetailsPageL10n[n].threeDescr
                                })]
                            })]
                        })
                    })]
                })]
            }), jsx(Button$1, {
                type: "inline-link",
                className: styles$5.buttonLink,
                onClick: () => e.openLink(ClickerSquadDetailsPageL10n[n].moreLink),
                children: ClickerSquadDetailsPageL10n[n].more
            }), jsx(Button$1, {
                type: "orange",
                onClick: o,
                fixedBottom: !0,
                children: ClickerSquadDetailsPageL10n[n].button
            })]
        })]
    })
}
const ukranian$1 = {
        title: "Приєднуйся ",
        subtitle: jsxs(Fragment, {
            children: [jsx("p", {
                children: 'Кожний "тап" зараховується в рахунок вашої команди. Таблиця лідерів команди покаже ваш внесок.'
            }), jsx("br", {}), jsx("p", {
                children: "Разом грати веселіше ✨"
            })]
        }),
        button: "Приєднатися"
    },
    ClickerSquadJoinPageL10n = {
        en: {
            title: "Join ",
            subtitle: jsxs(Fragment, {
                children: [jsx("p", {
                    children: "Every tap counts towards your squad score. Squad leaderboard will show your contribution."
                }), jsx("br", {}), jsx("p", {
                    children: "More fun playing together ✨"
                })]
            }),
            button: "Join"
        },
        ru: {
            title: "Вступить в ",
            subtitle: jsxs(Fragment, {
                children: [jsxs("p", {
                    children: ["Каждое нажатие по монете", jsx("br", {}), "увеличивает счёт сквода в лидерборде."]
                }), jsx("br", {}), jsxs("p", {
                    children: ["Данные по участникам", jsx("br", {}), "доступны на странице сквода."]
                }), jsx("br", {}), jsx("p", {
                    children: "Больше фана играть вместе ✨"
                })]
            }),
            button: "Погнали"
        },
        tr: {
            title: "Katılın ",
            subtitle: jsxs(Fragment, {
                children: [jsx("p", {
                    children: "Her dokunuş takım puanınıza sayılır."
                }), jsx("br", {}), jsx("p", {
                    children: "Takım lider tablosu katkınızı gösterecektir"
                }), jsx("br", {}), jsx("p", {
                    children: "Birlikte oynamak daha eğlenceli ✨"
                })]
            }),
            button: "Katıl"
        },
        fr: {
            title: "Rejoins ",
            subtitle: jsxs(Fragment, {
                children: [jsx("p", {
                    children: "Chaque appuie participe au score de l'équipe."
                }), jsx("br", {}), jsx("p", {
                    children: "Le tableau de classement montre ta contribution."
                }), jsx("br", {}), jsx("p", {
                    children: "C'est plus fun de jouer ensemble ✨"
                })]
            }),
            button: "Rejoins"
        },
        uk: ukranian$1,
        ua: ukranian$1
    },
    page$3 = "_page_791zo_1",
    joinContent = "_joinContent_791zo_22",
    media$1 = "_media_791zo_29",
    mediaSquad = "_mediaSquad_791zo_34",
    mediaUser = "_mediaUser_791zo_41",
    stars = "_stars_791zo_50",
    styles$4 = {
        page: page$3,
        joinContent,
        media: media$1,
        mediaSquad,
        mediaUser,
        stars
    };

function ClickerSquadJoinPage() {
    const e = useNavigate(),
        {
            userProfile: s,
            setClickerProfile: t
        } = useClickerStore(),
        [n, o] = reactExports.useState(!0),
        [r, a] = reactExports.useState(!1),
        c = useParams().squadId || "",
        [i, l] = reactExports.useState(null),
        {
            addToast: d
        } = useToast(),
        _ = getUserLang(Object.keys(ClickerSquadJoinPageL10n));
    reactExports.useEffect(() => {
        s && p()
    }, [s]);
    const p = async () => {
            const x = await fetchSquadInfo(Number(c));
            x && (l(x), o(!1))
        },
        u = async () => {
            a(!0);
            const x = await joinSquadApi(c);
            x.ok ? (t(x.data), d({
                message: `You joined ${i==null?void 0:i.name} Squad!`
            }), e(`/clicker/squad/${c}`)) : d({
                message: "Something is wrong with joining. Try again later.",
                type: "error"
            }), a(!1)
        },
        m = !n;
    return jsxs(Page, {
        className: styles$4.page,
        children: [jsx(BackButton, {
            onClick: () => e(`/clicker/squad/${c}`)
        }), jsx(MainButton, {
            text: ClickerSquadJoinPageL10n[_].button,
            disabled: r,
            progress: r,
            onClick: u
        }), m ? jsxs(Content, {
            className: styles$4.joinContent,
            column: !0,
            children: [jsxs(motion.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    ease: "easeInOut",
                    duration: .35
                },
                className: styles$4.media,
                children: [jsx(motion.div, {
                    animate: {
                        x: 32
                    },
                    transition: {
                        ease: "easeOut",
                        duration: .65,
                        delay: .15
                    },
                    children: jsx(Image, {
                        src: i == null ? void 0 : i.logo,
                        placeholder: extractInitials(i == null ? void 0 : i.name),
                        alt: "Squad logo",
                        className: styles$4.mediaSquad
                    })
                }), jsx(motion.div, {
                    animate: {
                        x: -32
                    },
                    transition: {
                        ease: "easeOut",
                        duration: .65,
                        delay: .15
                    },
                    children: jsx(Image, {
                        src: s == null ? void 0 : s.avatar,
                        placeholder: "YOU",
                        alt: "User pic",
                        className: styles$4.mediaUser
                    })
                })]
            }), jsxs(motion.div, {
                initial: {
                    opacity: 0,
                    y: -3
                },
                animate: {
                    opacity: 1,
                    y: 3
                },
                transition: {
                    ease: "easeInOut",
                    duration: .5,
                    delay: .75
                },
                children: [jsxs(Text, {
                    type: "title-0",
                    color: "white",
                    margin: "0-0-6-0",
                    center: !0,
                    children: [ClickerSquadJoinPageL10n[_].title, " ", i == null ? void 0 : i.name, " Squad"]
                }), jsx(Text, {
                    type: "subheadline-1",
                    color: "secondary",
                    margin: "0-0-24-0",
                    center: !0,
                    children: ClickerSquadJoinPageL10n[_].subtitle
                })]
            }), jsx(Stars, {
                className: styles$4.stars,
                keyId: "stars"
            })]
        }) : null]
    })
}
const ukranian = {
        how: "Як це працює?",
        total: "скор",
        inviteTitle: "Отримай бонус",
        inviteSubtitle: "за запрошення",
        inviteButton: "Запросити друга",
        leaveButton: "Вийти з команди",
        joinButton: "Приєднатися до команди",
        promoteButton: "Boost",
        dayPeriod: "День",
        weekPeriod: "Тиждень",
        you: "Ти",
        fetchErrorToast: "Не вдається отримати дані. Спробуйте знову пізніше.",
        leftSquadToast: "Ви вийшли",
        leaveSquadTitle: "Ви впевнені?",
        leaveSquadContent: "Ви збираєтеся вийти ",
        leaveSquadCancel: "Скасувати",
        leaveSquadLeave: "Вийти",
        players: "игроков"
    },
    ClickerSquadPageL10n = {
        en: {
            how: "How it works?",
            total: "mined in squad",
            inviteTitle: "Invite to squad",
            inviteSubtitle: "Get more Notcoin",
            inviteButton: "Invite a fren",
            leaveButton: "Leave squad",
            joinButton: "Join squad",
            promoteButton: "Boost",
            dayPeriod: "Day",
            weekPeriod: "Week",
            you: "You",
            fetchErrorToast: "Can't fetch data. Try again later.",
            leftSquadToast: "You left",
            leaveSquadTitle: "Are you sure?",
            leaveSquadContent: "You are going to leave ",
            leaveSquadCancel: "Cancel",
            leaveSquadLeave: "Leave",
            players: "players"
        },
        ru: {
            how: "Как работают Squads?",
            total: "всего очков",
            inviteTitle: "Получи бонус",
            inviteSubtitle: "За приглашение",
            inviteButton: "Пригласить друга",
            leaveButton: "Выйти из Squad",
            joinButton: "Вступить в Squad",
            promoteButton: "Бустануть",
            dayPeriod: "День",
            weekPeriod: "Неделя",
            you: "Ты",
            fetchErrorToast: "Не могу загрузить данные. Попробуй ещё.",
            leftSquadToast: "Ты покидаешь",
            leaveSquadTitle: "Уверен(-а)?",
            leaveSquadContent: "Ты покидаешь ",
            leaveSquadCancel: "Отмена",
            leaveSquadLeave: "Пока",
            players: "игроков"
        },
        tr: {
            how: "Nasıl çalışır?",
            total: "toplam puan",
            inviteTitle: "Ekibe davet et",
            inviteSubtitle: "Daha fazla Notcoin al",
            inviteButton: "Bir arkadaşı davet et",
            leaveButton: "Ekibi terk et",
            joinButton: "Ekibe katıl",
            promoteButton: "Boost",
            dayPeriod: "Gün",
            weekPeriod: "Hafta",
            you: "Sen",
            fetchErrorToast: "Veri çekilemedi. Daha sonra tekrar deneyin.",
            leftSquadToast: "Ayrıldınız",
            leaveSquadTitle: "Emin misiniz?",
            leaveSquadContent: "Ayrılmak üzeresiniz ",
            leaveSquadCancel: "İptal",
            leaveSquadLeave: "Ayrıl",
            players: "players"
        },
        fr: {
            how: "Comment ça marche ?",
            total: "mined in squad",
            inviteTitle: "Inviter dans l'équipe",
            inviteSubtitle: "Obtenez plus de Notcoin",
            inviteButton: "Inviter un pote",
            leaveButton: "Quitter l'équipe",
            joinButton: "Rejoindre l'équipe",
            promoteButton: "Boost",
            dayPeriod: "Jour",
            weekPeriod: "Semaine",
            you: "Toi",
            fetchErrorToast: "Impossible de récupérer les données. Réessayez plus tard.",
            leftSquadToast: "Vous avez quitté",
            leaveSquadTitle: "Êtes-vous sûr(e) ?",
            leaveSquadContent: "Vous allez quitter ",
            leaveSquadCancel: "Annuler",
            leaveSquadLeave: "Quitter",
            players: "players"
        },
        uk: ukranian,
        ua: ukranian
    },
    page$2 = "_page_1ptm2_12",
    pageInner = "_pageInner_1ptm2_22",
    separator = "_separator_1ptm2_27",
    squadDetails = "_squadDetails_1ptm2_45",
    squadScore = "_squadScore_1ptm2_49",
    squadPic = "_squadPic_1ptm2_66",
    outerIcon = "_outerIcon_1ptm2_73",
    outerLink = "_outerLink_1ptm2_78",
    hypno$1 = "_hypno_1ptm2_1",
    styles$3 = {
        page: page$2,
        pageInner,
        separator,
        squadDetails,
        squadScore,
        squadPic,
        outerIcon,
        outerLink,
        hypno: hypno$1
    },
    media = "_media_1aigc_12",
    title$2 = "_title_1aigc_20",
    place = "_place_1aigc_28",
    size = "_size_1aigc_36",
    controls = "_controls_1aigc_44",
    hypno = "_hypno_1aigc_1",
    styles$2 = {
        media,
        title: title$2,
        place,
        size,
        controls,
        hypno
    };

function ClickerSquadSkeleton() {
    return jsxs(Content, {
        column: !0,
        align: "center",
        fadeIn: !0,
        children: [jsx("div", {
            className: styles$2.media
        }), jsx("div", {
            className: styles$2.title
        }), jsx("div", {
            className: styles$2.place
        }), jsx("div", {
            className: styles$2.controls
        })]
    })
}

function getSizeMessage(e) {
    const s = {
            0: "Your squad is emptier than a vacuum in space 🌌",
            1: "When your squad size matches the number of people who find pineapple on pizza acceptable 🍍🍕",
            10: "Congratulations! You now have enough squad members to form a soccer team ⚽️👏",
            20: "Your squad size is larger than the font size on your grandma's phone 📱👵",
            50: "You now have more squad members than the number of tabs open in my browser 📑🤯",
            100: "You've reached the century mark! Your squad is now officially a party 🎉💯",
            500: 'With 500 squad members, you could host a conference on "How to Clickbait 101" 🎤🤓',
            1e3: "Your squad size is now officially a small army – ready for the emoji war! 🚀🤖",
            5e3: "Your squad is so massive that it's the reason why WiFi is slow in your area 📡🐌",
            1e4: "Congratulations! You now have enough squad members to form a nation, complete with a flag and national anthem 🏴🎶"
        },
        t = Object.keys(s).reduce((n, o) => Math.abs(Number(o) - e) < Math.abs(Number(n) - e) ? o : n);
    return s[Number(t)] || ""
}

function ClickerSquadPage() {
    var N, z;
    const e = window.Telegram.WebApp,
        s = useNavigate(),
        {
            addToast: t
        } = useToast(),
        [n, o] = reactExports.useState(1),
        [r, a] = reactExports.useState(null),
        {
            userProfile: c,
            setClickerProfile: i
        } = useClickerStore(),
        l = getUserLang(Object.keys(ClickerSquadPageL10n)),
        d = () => s("/clicker"),
        _ = j => {
            j !== n && (L(m[j]), o(j))
        };
    let p = getLeagueById(c == null ? void 0 : c.leagueId);
    const u = useParams().squadId || "",
        m = ["daily", "weekly"],
        [x, f] = reactExports.useState(!0),
        [g, C] = reactExports.useState(null),
        [h, y] = reactExports.useState(!1),
        k = (c == null ? void 0 : c.teamId) && Number(u) == (c == null ? void 0 : c.teamId),
        [b, $, I] = useToggle(!1);
    reactExports.useEffect(() => {
        c && (S(), L(m[n]), f(!1))
    }, [c]);
    const S = async () => {
            await fetchSquadInfo(Number(u)).then(C).catch(console.error)
        },
        L = async j => {
            c || d();
            const {
                ok: w,
                items: q
            } = await fetchLeaderboard({
                type: "in-team",
                league: (p == null ? void 0 : p.enum) || "all",
                time: j,
                squadId: Number(u)
            });
            w ? a(q) : t({
                message: ClickerSquadPageL10n[l].fetchErrorToast,
                type: "error"
            })
        },
        T = async () => {
            $();
            const j = await leaveSquadApi();
            j.ok ? (i(j.data), t({
                message: `${ClickerSquadPageL10n[l].leftSquadToast} ${g==null?void 0:g.name} Squad`
            })) : t({
                message: "Something is wrong with leaving. Try again later.",
                type: "error"
            })
        },
        E = g && !x;
    return c && ((N = c.user) == null || N.role), jsxs(Page, {
        className: styles$3.page,
        children: [g != null && g.leagueId ? jsx(Background, {
            type: getLeagueColor(g.leagueId)
        }) : null, jsx(MainButton, {
            hidden: !0
        }), jsx(BackButton, {
            onClick: () => s("/clicker")
        }), jsx(Promote, {
            isOpen: h,
            onClose: () => y(!1),
            squadId: u
        }), jsxs("div", {
            className: styles$3.pageInner,
            children: [E ? null : jsx(ClickerSquadSkeleton, {}), E ? jsxs(Fragment, {
                children: [jsx(Content, {
                    justify: "center",
                    padding: "0-0-24",
                    children: jsx(Image, {
                        src: g == null ? void 0 : g.logo,
                        placeholder: extractInitials(g == null ? void 0 : g.name),
                        borderRadius: "32",
                        size: "112"
                    })
                }), jsx(Text, {
                    type: "title-large",
                    weight: "bold",
                    margin: "0-0-10-0",
                    center: !0,
                    className: styles$3.outerLink,
                    children: jsxs(Content, {
                        justify: "center",
                        align: "center",
                        onClick: () => {
                            e.openTelegramLink(`https://t.me/${g.slug}`)
                        },
                        children: [g == null ? void 0 : g.name, " ", jsx(Icon, {
                            name: "LinkOuter",
                            className: styles$3.outerIcon
                        })]
                    })
                }), jsx(Content, {
                    justify: "center",
                    align: "center",
                    padding: "0-0-12",
                    column: !0,
                    children: jsx(PlaceAndLeague, {
                        place: g != null && g.rank ? (z = g == null ? void 0 : g.rank) == null ? void 0 : z.rank : 0,
                        leagueId: g == null ? void 0 : g.leagueId,
                        type: "squad"
                    })
                }), jsx(Content, {
                    onClick: () => s("/clicker/squad-details"),
                    padding: "0-0-20",
                    children: jsx(Text, {
                        type: "subheadline-1",
                        semibold: !0,
                        center: !0,
                        children: ClickerSquadPageL10n[l].how
                    })
                }), k && l === "en" && (g == null ? void 0 : g.members) && jsx(Text, {
                    type: "subheadline-1",
                    margin: "0-0-24-0",
                    color: "white",
                    center: !0,
                    children: getSizeMessage(g == null ? void 0 : g.members)
                }), jsxs(Content, {
                    padding: "16",
                    column: !0,
                    background: "fourth",
                    borderRadius: "20",
                    spacingChild: "16",
                    children: [jsxs(Content, {
                        padding: "8-0-8",
                        children: [jsxs(Content, {
                            column: !0,
                            children: [jsx("div", {
                                className: styles$3.squadScore,
                                children: jsx(Text, {
                                    type: "title-3",
                                    semibold: !0,
                                    children: g != null && g.coins ? beautifyLongNumber(g == null ? void 0 : g.coins.toString(), "compact", 3) : null
                                })
                            }), jsx(Content, {
                                padding: "0-0-0-32",
                                children: jsx(Text, {
                                    type: "subheadline-1",
                                    color: "secondary",
                                    children: ClickerSquadPageL10n[l].total
                                })
                            })]
                        }), jsx("div", {
                            className: styles$3.separator
                        }), jsxs(Content, {
                            column: !0,
                            padding: "0-8-0-0",
                            children: [jsx(Text, {
                                type: "title-3",
                                semibold: !0,
                                noWrap: !0,
                                children: beautifyLongNumber(g == null ? void 0 : g.members, "standard")
                            }), jsx(Text, {
                                type: "subheadline-1",
                                color: "secondary",
                                children: ClickerSquadPageL10n[l].players
                            })]
                        })]
                    }), k ? jsxs(Fragment, {
                        children: [jsx(Button, {
                            type: "Blue",
                            onClick: () => {
                                inviteFrenViaBotStartRef()
                            },
                            children: ClickerSquadPageL10n[l].inviteButton
                        }), jsx(Button, {
                            type: "Alpha",
                            onClick: $,
                            children: ClickerSquadPageL10n[l].leaveButton
                        })]
                    }) : jsx(Button, {
                        type: "Blue",
                        onClick: () => s(`/clicker/squad-join/${u}`),
                        children: ClickerSquadPageL10n[l].joinButton
                    }), jsx(Button, {
                        type: "Alpha",
                        onClick: () => y(!0),
                        children: ClickerSquadPageL10n[l].promoteButton
                    })]
                })]
            }) : null, jsx(Content, {
                padding: "16-0",
                column: !0,
                children: jsx(Leaderboard, {
                    highlightText: ClickerSquadPageL10n[l].you,
                    highlightId: c == null ? void 0 : c.userId,
                    list: r,
                    tabs: jsxs(Tabs$1, {
                        onChange: _,
                        activeIndex: n,
                        flat: !0,
                        children: [jsx(Tab$1, {
                            label: ClickerSquadPageL10n[l].dayPeriod,
                            flat: !0
                        }), jsx(Tab$1, {
                            label: ClickerSquadPageL10n[l].weekPeriod,
                            flat: !0
                        })]
                    })
                })
            })]
        }), jsx(Dialog, {
            title: ClickerSquadPageL10n[l].leaveSquadTitle,
            content: `${ClickerSquadPageL10n[l].leaveSquadContent} ${g==null?void 0:g.name} Squad.`,
            opened: b,
            onClose: $,
            buttons: [jsx(DialogButton, {
                onClick: $,
                children: ClickerSquadPageL10n[l].leaveSquadCancel
            }, "cancel"), jsx(DialogButton, {
                onClick: T,
                children: ClickerSquadPageL10n[l].leaveSquadLeave
            }, "delete")]
        })]
    })
}
const page$1 = "_page_11cnl_1",
    hero = "_hero_11cnl_7",
    title$1 = "_title_11cnl_18",
    subtitle = "_subtitle_11cnl_27",
    styles$1 = {
        page: page$1,
        hero,
        title: title$1,
        subtitle
    };

function ClickerTeamNewPage() {
    const e = window.Telegram.WebApp,
        s = useNavigate(),
        t = () => s("/clicker");
    reactExports.useEffect(() => (e == null || e.BackButton.show(), e == null || e.onEvent("backButtonClicked", t), () => {
        e == null || e.offEvent("backButtonClicked", t)
    }));
    const [n, o] = reactExports.useState(""), [r, a] = reactExports.useState(""), c = l => {
        o(l)
    }, i = l => {
        a(l)
    };
    return jsxs(Page, {
        className: styles$1.page,
        children: [jsx("div", {
            className: styles$1.hero
        }), jsx("div", {
            className: styles$1.title,
            children: "Create Squad"
        }), jsxs("div", {
            className: styles$1.subtitle,
            children: ["Be careful when filling in data.", jsx("br", {}), " You can't edit it later."]
        }), jsx(Input, {
            onChange: c,
            value: n,
            type: "text",
            placeholder: "Type name",
            label: "Title",
            helper: "This name will be displayed in the top squads and will be public."
        }), jsx(Input, {
            onChange: i,
            value: r,
            type: "text",
            placeholder: "URL",
            label: "Link",
            helper: "This name will be displayed in the top squads and will be public."
        })]
    })
}
const page = "_page_2iwnj_1",
    title = "_title_2iwnj_10",
    score = "_score_2iwnj_18",
    scoreIcon = "_scoreIcon_2iwnj_27",
    styles = {
        page,
        title,
        score,
        scoreIcon
    };

function ClickerWalletPage() {
    const e = window.Telegram.WebApp,
        s = useNavigate(),
        t = () => s("/clicker");
    return reactExports.useEffect(() => (e == null || e.BackButton.show(), e == null || e.onEvent("backButtonClicked", t), () => {
        e == null || e.offEvent("backButtonClicked", t)
    })), jsxs(Page, {
        className: styles.page,
        children: [jsx("div", {
            className: styles.title,
            children: "Wallet balance"
        }), jsxs("div", {
            className: styles.score,
            children: [jsx("div", {
                className: styles.scoreIcon
            }), "10 000"]
        }), jsx("img", {
            src: "https://cdn.joincommunity.xyz/clicker/travolta.gif"
        })]
    })
}
ApiService.after401 = () => {
    if (AuthService.isAuth()) {
        const {
            authorise: e
        } = useUserActions();
        AuthService.clearCredentials(), e()
    }
};
const includeDebugger = () => {
    var e = document.createElement("script");
    e.onload = function() {
        if (window.eruda) try {
            window.eruda.init()
        } catch {}
    }, e.src = "https://cdn.jsdelivr.net/npm/eruda", document.head.appendChild(e)
};

function App() {
    var _;
    const e = (_ = window.Telegram) == null ? void 0 : _.WebApp;
    e.setHeaderColor("#000000"), e.setBackgroundColor("#000000");
    const {
        authorise: s
    } = useUserActions(), {
        userProfile: t,
        clickerTeam: n,
        fetchClickerUserProfile: o,
        fetchTeam: r,
        tryToSaveClicks: a
    } = useClickerStore(), c = useUser.store.isAuth(), l = ["android", "android_x", "ios"].indexOf(e.platform) >= 0, d = config$1.isDev;
    return reactExports.useEffect(() => {
        s()
    }, []), reactExports.useEffect(() => {
        c && !t && o()
    }, [c]), reactExports.useEffect(() => {
        var p;
        t && t.teamId && !n && r(), t && ((p = t.user) == null ? void 0 : p.role) === "superadmin" && config$1.isProd && includeDebugger()
    }, [t]), reactExports.useEffect(() => {
        const u = setInterval(() => {
            a(1500)
        }, 1500);
        return () => clearInterval(u)
    }, []), jsx(MyErrorBoundary, {
        children: jsx(ToastProvider, {
            children: jsx(BrowserRouter, {
                children: jsx(Routes, {
                    children: jsxs(Route, {
                        path: "clicker",
                        children: [jsx(Route, {
                            path: "",
                            element: d || l ? jsx(ClickerMainPage, {}) : jsx(BoringDesktop, {})
                        }), jsx(Route, {
                            path: "houmie",
                            element: jsx(ClickerMainPage, {})
                        }), jsx(Route, {
                            path: "league/:leagueId/:type?",
                            element: jsx(ClickerLeaguePage, {})
                        }), jsx(Route, {
                            path: "league/influencer",
                            element: jsx(ClickerLeagueInfluencerPage, {})
                        }), jsx(Route, {
                            path: "league/squad",
                            element: jsx(LeagueSquadPage, {})
                        }), jsx(Route, {
                            path: "squad/:squadId",
                            element: jsx(ClickerSquadPage, {})
                        }), jsx(Route, {
                            path: "squad-join/:squadId",
                            element: jsx(ClickerSquadJoinPage, {})
                        }), jsx(Route, {
                            path: "squad-details",
                            element: jsx(ClickerSquadDetailsPage, {})
                        }), jsx(Route, {
                            path: "boosts",
                            element: jsx(ClickerBoostsPage, {})
                        }), jsx(Route, {
                            path: "earn",
                            element: jsx(EarnPage, {})
                        }), jsx(Route, {
                            path: "statistics",
                            element: jsx(ClickerStatisticsPage, {})
                        }), jsx(Route, {
                            path: "boosts-explanation",
                            element: jsx(ClickerBoostsExplanationPage, {})
                        }), jsx(Route, {
                            path: "team-new",
                            element: jsx(ClickerTeamNewPage, {})
                        }), jsx(Route, {
                            path: "wallet",
                            element: jsx(ClickerWalletPage, {})
                        }), jsx(Route, {
                            path: "frens",
                            element: jsx(ClickerFrensPage, {})
                        }), jsx(Route, {
                            path: "frens-details",
                            element: jsx(ClickerFrensDetailsPage, {})
                        })]
                    }, "clicker")
                })
            })
        })
    })
}
client.createRoot(document.getElementById("root")).render(jsx(App, {}));