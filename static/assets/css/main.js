import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "15pt",
        "font": "inherit",
        "verticalAlign": "baseline",
        "lineHeight": 1.65,
        "WebkitTextSizeAdjust": "none",
        "background": "#2e3842",
        "color": "#fff",
        "fontFamily": "\"Open Sans\", Helvetica, sans-serif",
        "fontWeight": "400",
        "letterSpacing": 0.075
    },
    "div": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "span": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "applet": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "object": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "iframe": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "h1": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "color": "#fff",
        "fontWeight": "800",
        "letterSpacing": 0.225,
        "lineHeight": 1,
        "textTransform": "uppercase"
    },
    "h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 1.35,
        "font": "inherit",
        "verticalAlign": "baseline",
        "color": "#fff",
        "fontWeight": "800",
        "letterSpacing": 0.225,
        "lineHeight": 1.75,
        "textTransform": "uppercase"
    },
    "h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 1.15,
        "font": "inherit",
        "verticalAlign": "baseline",
        "color": "#fff",
        "fontWeight": "800",
        "letterSpacing": 0.225,
        "lineHeight": 1.75,
        "textTransform": "uppercase"
    },
    "h4": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 1,
        "font": "inherit",
        "verticalAlign": "baseline",
        "color": "#fff",
        "fontWeight": "800",
        "letterSpacing": 0.225,
        "lineHeight": 1.5,
        "textTransform": "uppercase"
    },
    "h5": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 0.8,
        "font": "inherit",
        "verticalAlign": "baseline",
        "color": "#fff",
        "fontWeight": "800",
        "letterSpacing": 0.225,
        "lineHeight": 1.5,
        "textTransform": "uppercase"
    },
    "h6": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 0.7,
        "font": "inherit",
        "verticalAlign": "baseline",
        "color": "#fff",
        "fontWeight": "800",
        "letterSpacing": 0.225,
        "lineHeight": 1.5,
        "textTransform": "uppercase"
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "blockquote": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0.5,
        "paddingRight": 0,
        "paddingBottom": 0.5,
        "paddingLeft": 2,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "quotes": "none",
        "borderLeft": "solid 4px #fff",
        "fontStyle": "italic"
    },
    "pre": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 0.9,
        "font": "inherit",
        "verticalAlign": "baseline",
        "WebkitOverflowScrolling": "touch",
        "fontFamily": "\"Courier New\", monospace"
    },
    "a": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "MozTransition": "color 0.2s ease, border-bottom-color 0.2s ease",
        "WebkitTransition": "color 0.2s ease, border-bottom-color 0.2s ease",
        "MsTransition": "color 0.2s ease, border-bottom-color 0.2s ease",
        "transition": "color 0.2s ease, border-bottom-color 0.2s ease",
        "borderBottom": "dotted 1px",
        "color": "inherit",
        "textDecoration": "none"
    },
    "abbr": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "acronym": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "address": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "big": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "cite": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "code": {
        "marginTop": 0,
        "marginRight": 0.25,
        "marginBottom": 0,
        "marginLeft": 0.25,
        "paddingTop": 0.25,
        "paddingRight": 0.65,
        "paddingBottom": 0.25,
        "paddingLeft": 0.65,
        "border": 0,
        "fontSize": 0.9,
        "font": "inherit",
        "verticalAlign": "baseline",
        "background": "rgba(144, 144, 144, 0.25)",
        "borderRadius": 3,
        "fontFamily": "\"Courier New\", monospace",
        "letterSpacing": 0
    },
    "del": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "dfn": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "em": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontStyle": "italic"
    },
    "img": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "ins": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "kbd": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "q": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "quotes": "none"
    },
    "s": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "samp": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "small": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "strike": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "strong": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "color": "#fff",
        "fontWeight": "600"
    },
    "sub": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 0.8,
        "font": "inherit",
        "verticalAlign": "baseline",
        "position": "relative",
        "top": 0.5
    },
    "sup": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 0.8,
        "font": "inherit",
        "verticalAlign": "baseline",
        "position": "relative",
        "top": -0.5
    },
    "tt": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "var": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "b": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "color": "#fff",
        "fontWeight": "600"
    },
    "u": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "i": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontStyle": "italic"
    },
    "center": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "dl": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "dt": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "dd": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "ol": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 1.25,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "listStyle": "decimal"
    },
    "ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "listStyle": "disc"
    },
    "li": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "fieldset": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "form": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "label": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 0.9,
        "font": "inherit",
        "verticalAlign": "baseline",
        "color": "#fff",
        "display": "block",
        "fontWeight": "600"
    },
    "legend": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "table": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "borderCollapse": "collapse",
        "borderSpacing": 0,
        "width": "100%"
    },
    "caption": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "tbody": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "tfoot": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "thead": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "tr": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "th": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "td": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "article": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "aside": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "canvas": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "details": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "embed": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "figure": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "figcaption": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "footer": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 6,
        "paddingRight": 0,
        "paddingBottom": 4,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block",
        "backgroundColor": "#1d242a",
        "textAlign": "center"
    },
    "header": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block",
        "MozTransition": "background-color 0.2s ease",
        "WebkitTransition": "background-color 0.2s ease",
        "MsTransition": "background-color 0.2s ease",
        "transition": "background-color 0.2s ease",
        "background": "#2e3842",
        "height": 3,
        "left": 0,
        "lineHeight": 3,
        "position": "fixed",
        "top": 0,
        "width": "100%",
        "zIndex": 10000
    },
    "hgroup": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "menu": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 3,
        "paddingRight": 2,
        "paddingBottom": 3,
        "paddingLeft": 2,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block",
        "MozTransform": "translateX(20em)",
        "WebkitTransform": "translateX(20em)",
        "MsTransform": "translateX(20em)",
        "transform": "translateX(20em)",
        "MozTransition": "-moz-transform 0.5s ease",
        "WebkitTransition": "-webkit-transform 0.5s ease",
        "MsTransition": "-ms-transform 0.5s ease",
        "transition": "transform 0.5s ease",
        "WebkitOverflowScrolling": "touch",
        "background": "#21b2a6",
        "color": "#ffffff",
        "height": "100%",
        "maxWidth": "80%",
        "overflowY": "auto",
        "position": "fixed",
        "right": 0,
        "top": 0,
        "width": 20,
        "zIndex": 10002
    },
    "nav": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "output": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "ruby": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "section": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "summary": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "time": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "mark": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "audio": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "video": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "blockquote:before": {
        "content": "none"
    },
    "blockquote:after": {
        "content": "none"
    },
    "q:before": {
        "content": "none"
    },
    "q:after": {
        "content": "none"
    },
    "*": {
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "*:before": {
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "*:after": {
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "row": {
        "borderBottom": "solid 1px transparent",
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -1.5
    },
    "row > *": {
        "float": "left",
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 1.5
    },
    "row:after": {
        "content": "''",
        "display": "block",
        "clear": "both",
        "height": 0
    },
    "row:before": {
        "content": "''",
        "display": "block",
        "clear": "both",
        "height": 0
    },
    "rowuniform > * > :first-child": {
        "marginTop": 0
    },
    "rowuniform > * > :last-child": {
        "marginBottom": 0
    },
    "row\\30 \\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "row\\30 \\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": 0
    },
    "rowuniform\\30 \\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "rowuniform\\30 \\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": 0
    },
    "rowuniform > *": {
        "paddingTop": 1.5,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 1.5
    },
    "rowuniform": {
        "marginTop": -1.5,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -1.5
    },
    "row\\32 00\\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 3
    },
    "row\\32 00\\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -3
    },
    "rowuniform\\32 00\\25 > *": {
        "paddingTop": 3,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 3
    },
    "rowuniform\\32 00\\25": {
        "marginTop": -3,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -3
    },
    "row\\31 50\\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 2.25
    },
    "row\\31 50\\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -2.25
    },
    "rowuniform\\31 50\\25 > *": {
        "paddingTop": 2.25,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 2.25
    },
    "rowuniform\\31 50\\25": {
        "marginTop": -2.25,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -2.25
    },
    "row\\35 0\\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0.75
    },
    "row\\35 0\\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -0.75
    },
    "rowuniform\\35 0\\25 > *": {
        "paddingTop": 0.75,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0.75
    },
    "rowuniform\\35 0\\25": {
        "marginTop": -0.75,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -0.75
    },
    "row\\32 5\\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0.375
    },
    "row\\32 5\\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -0.375
    },
    "rowuniform\\32 5\\25 > *": {
        "paddingTop": 0.375,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0.375
    },
    "rowuniform\\32 5\\25": {
        "marginTop": -0.375,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -0.375
    },
    "\\31 2u": {
        "width": "100%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 2u\\24": {
        "width": "100%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 1u": {
        "width": "91.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 1u\\24": {
        "width": "91.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 0u": {
        "width": "83.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 0u\\24": {
        "width": "83.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\39 u": {
        "width": "75%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\39 u\\24": {
        "width": "75%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\38 u": {
        "width": "66.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\38 u\\24": {
        "width": "66.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\37 u": {
        "width": "58.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\37 u\\24": {
        "width": "58.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\36 u": {
        "width": "50%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\36 u\\24": {
        "width": "50%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\35 u": {
        "width": "41.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\35 u\\24": {
        "width": "41.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\34 u": {
        "width": "33.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\34 u\\24": {
        "width": "33.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\33 u": {
        "width": "25%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\33 u\\24": {
        "width": "25%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\32 u": {
        "width": "16.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\32 u\\24": {
        "width": "16.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 u": {
        "width": "8.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 u\\24": {
        "width": "8.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 2u\\24 + *": {
        "clear": "left"
    },
    "\\31 1u\\24 + *": {
        "clear": "left"
    },
    "\\31 0u\\24 + *": {
        "clear": "left"
    },
    "\\39 u\\24 + *": {
        "clear": "left"
    },
    "\\38 u\\24 + *": {
        "clear": "left"
    },
    "\\37 u\\24 + *": {
        "clear": "left"
    },
    "\\36 u\\24 + *": {
        "clear": "left"
    },
    "\\35 u\\24 + *": {
        "clear": "left"
    },
    "\\34 u\\24 + *": {
        "clear": "left"
    },
    "\\33 u\\24 + *": {
        "clear": "left"
    },
    "\\32 u\\24 + *": {
        "clear": "left"
    },
    "\\31 u\\24 + *": {
        "clear": "left"
    },
    "\\-11u": {
        "marginLeft": "91.66667%"
    },
    "\\-10u": {
        "marginLeft": "83.33333%"
    },
    "\\-9u": {
        "marginLeft": "75%"
    },
    "\\-8u": {
        "marginLeft": "66.66667%"
    },
    "\\-7u": {
        "marginLeft": "58.33333%"
    },
    "\\-6u": {
        "marginLeft": "50%"
    },
    "\\-5u": {
        "marginLeft": "41.66667%"
    },
    "\\-4u": {
        "marginLeft": "33.33333%"
    },
    "\\-3u": {
        "marginLeft": "25%"
    },
    "\\-2u": {
        "marginLeft": "16.66667%"
    },
    "\\-1u": {
        "marginLeft": "8.33333%"
    },
    "@-ms-viewport": {
        "width": "device-width"
    },
    "bodyis-loading *": {
        "MozAnimation": "none !important",
        "WebkitAnimation": "none !important",
        "MsAnimation": "none !important",
        "animation": "none !important",
        "MozTransition": "none !important",
        "WebkitTransition": "none !important",
        "MsTransition": "none !important",
        "transition": "none !important"
    },
    "bodyis-loading *:before": {
        "MozAnimation": "none !important",
        "WebkitAnimation": "none !important",
        "MsAnimation": "none !important",
        "animation": "none !important",
        "MozTransition": "none !important",
        "WebkitTransition": "none !important",
        "MsTransition": "none !important",
        "transition": "none !important"
    },
    "bodyis-loading *:after": {
        "MozAnimation": "none !important",
        "WebkitAnimation": "none !important",
        "MsAnimation": "none !important",
        "animation": "none !important",
        "MozTransition": "none !important",
        "WebkitTransition": "none !important",
        "MsTransition": "none !important",
        "transition": "none !important"
    },
    "input": {
        "color": "#fff",
        "fontFamily": "\"Open Sans\", Helvetica, sans-serif",
        "fontSize": "15pt",
        "fontWeight": "400",
        "letterSpacing": 0.075,
        "lineHeight": 1.65
    },
    "select": {
        "color": "inherit",
        "fontFamily": "\"Open Sans\", Helvetica, sans-serif",
        "fontSize": "15pt",
        "fontWeight": "400",
        "letterSpacing": 0.075,
        "lineHeight": 1.65,
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "background": "rgba(144, 144, 144, 0.25)",
        "borderRadius": 3,
        "border": "none",
        "display": "block",
        "outline": 0,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "textDecoration": "none",
        "width": "100%",
        "height": 2.75
    },
    "textarea": {
        "color": "inherit",
        "fontFamily": "\"Open Sans\", Helvetica, sans-serif",
        "fontSize": "15pt",
        "fontWeight": "400",
        "letterSpacing": 0.075,
        "lineHeight": 1.65,
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "background": "rgba(144, 144, 144, 0.25)",
        "borderRadius": 3,
        "border": "none",
        "display": "block",
        "outline": 0,
        "paddingTop": 0.75,
        "paddingRight": 1,
        "paddingBottom": 0.75,
        "paddingLeft": 1,
        "textDecoration": "none",
        "width": "100%"
    },
    "a:hover": {
        "borderBottomColor": "transparent"
    },
    "h1 a": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "h2 a": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "h3 a": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "h4 a": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "h5 a": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "h6 a": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "hr": {
        "border": 0,
        "borderBottom": "solid 2px #fff",
        "marginTop": 3,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": 0
    },
    "hrmajor": {
        "marginTop": 4.5,
        "marginRight": 0,
        "marginBottom": 4.5,
        "marginLeft": 0
    },
    "pre code": {
        "display": "block",
        "lineHeight": 1.75,
        "paddingTop": 1,
        "paddingRight": 1.5,
        "paddingBottom": 1,
        "paddingLeft": 1.5,
        "overflowX": "auto"
    },
    "align-left": {
        "textAlign": "left"
    },
    "align-center": {
        "textAlign": "center"
    },
    "align-right": {
        "textAlign": "right"
    },
    "sectionspecial": {
        "textAlign": "center"
    },
    "articlespecial": {
        "textAlign": "center"
    },
    "header p": {
        "color": "rgba(255, 255, 255, 0.5)",
        "position": "relative",
        "top": -0.25
    },
    "header h3 + p": {
        "fontSize": 1.1
    },
    "header h4 + p": {
        "fontSize": 0.9
    },
    "header h5 + p": {
        "fontSize": 0.9
    },
    "header h6 + p": {
        "fontSize": 0.9
    },
    "headermajor": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 3.5,
        "marginLeft": 0
    },
    "headermajor h2": {
        "borderBottom": "solid 2px #fff",
        "display": "inline-block",
        "paddingBottom": 1,
        "position": "relative"
    },
    "headermajor h3": {
        "borderBottom": "solid 2px #fff",
        "display": "inline-block",
        "paddingBottom": 1,
        "position": "relative"
    },
    "headermajor h4": {
        "borderBottom": "solid 2px #fff",
        "display": "inline-block",
        "paddingBottom": 1,
        "position": "relative"
    },
    "headermajor h5": {
        "borderBottom": "solid 2px #fff",
        "display": "inline-block",
        "paddingBottom": 1,
        "position": "relative"
    },
    "headermajor h6": {
        "borderBottom": "solid 2px #fff",
        "display": "inline-block",
        "paddingBottom": 1,
        "position": "relative"
    },
    "headermajor h2:after": {
        "content": "''",
        "display": "block",
        "height": 1
    },
    "headermajor h3:after": {
        "content": "''",
        "display": "block",
        "height": 1
    },
    "headermajor h4:after": {
        "content": "''",
        "display": "block",
        "height": 1
    },
    "headermajor h5:after": {
        "content": "''",
        "display": "block",
        "height": 1
    },
    "headermajor h6:after": {
        "content": "''",
        "display": "block",
        "height": 1
    },
    "headermajor p": {
        "color": "#fff",
        "top": 0
    },
    "input[type=\"text\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "background": "rgba(144, 144, 144, 0.25)",
        "borderRadius": 3,
        "border": "none",
        "color": "inherit",
        "display": "block",
        "outline": 0,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "textDecoration": "none",
        "width": "100%",
        "height": 2.75
    },
    "input[type=\"password\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "background": "rgba(144, 144, 144, 0.25)",
        "borderRadius": 3,
        "border": "none",
        "color": "inherit",
        "display": "block",
        "outline": 0,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "textDecoration": "none",
        "width": "100%",
        "height": 2.75
    },
    "input[type=\"email\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "background": "rgba(144, 144, 144, 0.25)",
        "borderRadius": 3,
        "border": "none",
        "color": "inherit",
        "display": "block",
        "outline": 0,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "textDecoration": "none",
        "width": "100%",
        "height": 2.75
    },
    "input[type=\"text\"]:invalid": {
        "boxShadow": "none"
    },
    "input[type=\"password\"]:invalid": {
        "boxShadow": "none"
    },
    "input[type=\"email\"]:invalid": {
        "boxShadow": "none"
    },
    "select:invalid": {
        "boxShadow": "none"
    },
    "textarea:invalid": {
        "boxShadow": "none"
    },
    "input[type=\"text\"]:focus": {
        "boxShadow": "0 0 0 2px #21b2a6"
    },
    "input[type=\"password\"]:focus": {
        "boxShadow": "0 0 0 2px #21b2a6"
    },
    "input[type=\"email\"]:focus": {
        "boxShadow": "0 0 0 2px #21b2a6"
    },
    "select:focus": {
        "boxShadow": "0 0 0 2px #21b2a6"
    },
    "textarea:focus": {
        "boxShadow": "0 0 0 2px #21b2a6"
    },
    "select-wrapper": {
        "textDecoration": "none",
        "display": "block",
        "position": "relative"
    },
    "select-wrapper:before": {
        "MozOsxFontSmoothing": "grayscale",
        "WebkitFontSmoothing": "antialiased",
        "fontFamily": "FontAwesome",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "textTransform": "none !important",
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "color": "#fff",
        "content": "'\\f078'",
        "display": "block",
        "height": 2.75,
        "lineHeight": 2.75,
        "position": "absolute",
        "right": 0,
        "textAlign": "center",
        "top": 0,
        "width": 2.75
    },
    "select-wrapper select::-ms-expand": {
        "display": "none"
    },
    "input[type=\"checkbox\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "display": "block",
        "float": "left",
        "marginRight": -2,
        "opacity": 0,
        "width": 1,
        "zIndex": -1
    },
    "input[type=\"radio\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "display": "block",
        "float": "left",
        "marginRight": -2,
        "opacity": 0,
        "width": 1,
        "zIndex": -1
    },
    "input[type=\"checkbox\"] + label": {
        "textDecoration": "none",
        "color": "#fff",
        "cursor": "pointer",
        "display": "inline-block",
        "fontSize": 1,
        "fontWeight": "400",
        "paddingLeft": 2.4,
        "paddingRight": 0.75,
        "position": "relative"
    },
    "input[type=\"radio\"] + label": {
        "textDecoration": "none",
        "color": "#fff",
        "cursor": "pointer",
        "display": "inline-block",
        "fontSize": 1,
        "fontWeight": "400",
        "paddingLeft": 2.4,
        "paddingRight": 0.75,
        "position": "relative"
    },
    "input[type=\"checkbox\"] + label:before": {
        "MozOsxFontSmoothing": "grayscale",
        "WebkitFontSmoothing": "antialiased",
        "fontFamily": "FontAwesome",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "textTransform": "none !important",
        "background": "rgba(144, 144, 144, 0.25)",
        "borderRadius": 3,
        "content": "''",
        "display": "inline-block",
        "height": 1.65,
        "left": 0,
        "lineHeight": 1.58125,
        "position": "absolute",
        "textAlign": "center",
        "top": 0,
        "width": 1.65
    },
    "input[type=\"radio\"] + label:before": {
        "MozOsxFontSmoothing": "grayscale",
        "WebkitFontSmoothing": "antialiased",
        "fontFamily": "FontAwesome",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "textTransform": "none !important",
        "background": "rgba(144, 144, 144, 0.25)",
        "borderRadius": "100%",
        "content": "''",
        "display": "inline-block",
        "height": 1.65,
        "left": 0,
        "lineHeight": 1.58125,
        "position": "absolute",
        "textAlign": "center",
        "top": 0,
        "width": 1.65
    },
    "input[type=\"checkbox\"]:checked + label:before": {
        "background": "#2e3842",
        "color": "#fff",
        "content": "'\\f00c'"
    },
    "input[type=\"radio\"]:checked + label:before": {
        "background": "#2e3842",
        "color": "#fff",
        "content": "'\\f00c'"
    },
    "input[type=\"checkbox\"]:focus + label:before": {
        "boxShadow": "0 0 0 2px #21b2a6"
    },
    "input[type=\"radio\"]:focus + label:before": {
        "boxShadow": "0 0 0 2px #21b2a6"
    },
    "::-webkit-input-placeholder": {
        "color": "rgba(255, 255, 255, 0.5) !important",
        "opacity": 1
    },
    ":-moz-placeholder": {
        "color": "rgba(255, 255, 255, 0.5) !important",
        "opacity": 1
    },
    "::-moz-placeholder": {
        "color": "rgba(255, 255, 255, 0.5) !important",
        "opacity": 1
    },
    ":-ms-input-placeholder": {
        "color": "rgba(255, 255, 255, 0.5) !important",
        "opacity": 1
    },
    "formerize-placeholder": {
        "color": "rgba(255, 255, 255, 0.5) !important",
        "opacity": 1
    },
    "box": {
        "borderRadius": 3,
        "border": "solid 2px #fff",
        "marginBottom": 2,
        "paddingTop": 1.5,
        "paddingRight": 1.5,
        "paddingBottom": 1.5,
        "paddingLeft": 1.5
    },
    "box > :last-child": {
        "marginBottom": 0
    },
    "box > :last-child > :last-child": {
        "marginBottom": 0
    },
    "box > :last-child > :last-child > :last-child": {
        "marginBottom": 0
    },
    "boxalt": {
        "border": 0,
        "borderRadius": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "icon": {
        "textDecoration": "none",
        "borderBottom": "none",
        "position": "relative"
    },
    "icon:before": {
        "MozOsxFontSmoothing": "grayscale",
        "WebkitFontSmoothing": "antialiased",
        "fontFamily": "FontAwesome",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "textTransform": "none !important"
    },
    "icon > label": {
        "display": "none"
    },
    "iconmajor": {
        "MozTransform": "rotate(-45deg)",
        "WebkitTransform": "rotate(-45deg)",
        "MsTransform": "rotate(-45deg)",
        "transform": "rotate(-45deg)",
        "borderRadius": 3,
        "border": "solid 2px #fff",
        "display": "inline-block",
        "fontSize": 1.35,
        "height": "calc(3em + 2px)",
        "lineHeight": 3,
        "textAlign": "center",
        "width": "calc(3em + 2px)"
    },
    "iconmajor:before": {
        "MozTransform": "rotate(45deg)",
        "WebkitTransform": "rotate(45deg)",
        "MsTransform": "rotate(45deg)",
        "transform": "rotate(45deg)",
        "display": "inline-block",
        "fontSize": 1.5
    },
    "iconstyle1": {
        "color": "#00ffcc"
    },
    "iconstyle2": {
        "color": "#00f0ff"
    },
    "iconstyle3": {
        "color": "#76ddff"
    },
    "image": {
        "borderRadius": 3,
        "border": 0,
        "display": "inline-block",
        "position": "relative"
    },
    "image img": {
        "borderRadius": 3,
        "display": "block"
    },
    "imageleft": {
        "float": "left",
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 2,
        "marginLeft": 0,
        "top": 0.25,
        "maxWidth": "40%"
    },
    "imageright": {
        "float": "right",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 2,
        "top": 0.25,
        "maxWidth": "40%"
    },
    "imageleft img": {
        "width": "100%"
    },
    "imageright img": {
        "width": "100%"
    },
    "imagefit": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "width": "100%"
    },
    "imagefit img": {
        "width": "100%"
    },
    "ol li": {
        "paddingLeft": 0.25
    },
    "ul li": {
        "paddingLeft": 0.5
    },
    "ulalt": {
        "listStyle": "none",
        "paddingLeft": 0
    },
    "ulalt li": {
        "borderTop": "solid 1px #fff",
        "paddingTop": 0.5,
        "paddingRight": 0,
        "paddingBottom": 0.5,
        "paddingLeft": 0
    },
    "ulalt li:first-child": {
        "borderTop": 0,
        "paddingTop": 0
    },
    "ulicons": {
        "cursor": "default",
        "listStyle": "none",
        "paddingLeft": 0
    },
    "ulicons li": {
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ulicons li:last-child": {
        "paddingRight": "0 !important"
    },
    "uliconsmajor": {
        "paddingTop": 1,
        "paddingRight": 0,
        "paddingBottom": 1,
        "paddingLeft": 0
    },
    "uliconsmajor li": {
        "paddingRight": 3.5
    },
    "ulactions": {
        "cursor": "default",
        "listStyle": "none",
        "paddingLeft": 0
    },
    "ulactions li": {
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 1.5,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
    },
    "ulactions li:last-child": {
        "paddingRight": 0
    },
    "ulactionssmall li": {
        "paddingTop": 0,
        "paddingRight": 0.75,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ulactionsvertical li": {
        "display": "block",
        "paddingTop": 1.5,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ulactionsvertical li:first-child": {
        "paddingTop": 0
    },
    "ulactionsvertical li > *": {
        "marginBottom": 0
    },
    "ulactionsverticalsmall li": {
        "paddingTop": 0.75,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ulactionsverticalsmall li:first-child": {
        "paddingTop": 0
    },
    "ulactionsfit": {
        "display": "table",
        "marginLeft": -1.5,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "tableLayout": "fixed",
        "width": "calc(100% + 1.5em)"
    },
    "ulactionsfit li": {
        "display": "table-cell",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 1.5
    },
    "ulactionsfit li > *": {
        "marginBottom": 0
    },
    "ulactionsfitsmall": {
        "marginLeft": -0.75,
        "width": "calc(100% + 0.75em)"
    },
    "ulactionsfitsmall li": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0.75
    },
    "table-wrapper": {
        "WebkitOverflowScrolling": "touch",
        "overflowX": "auto"
    },
    "table tbody tr": {
        "border": "solid 1px #fff",
        "borderLeft": 0,
        "borderRight": 0
    },
    "table tbody tr:nth-child(2n + 1)": {
        "backgroundColor": "rgba(144, 144, 144, 0.25)"
    },
    "table td": {
        "paddingTop": 0.75,
        "paddingRight": 0.75,
        "paddingBottom": 0.75,
        "paddingLeft": 0.75
    },
    "table th": {
        "color": "#fff",
        "fontSize": 0.9,
        "fontWeight": "600",
        "paddingTop": 0,
        "paddingRight": 0.75,
        "paddingBottom": 0.75,
        "paddingLeft": 0.75,
        "textAlign": "left"
    },
    "table thead": {
        "borderBottom": "solid 2px #fff"
    },
    "table tfoot": {
        "borderTop": "solid 2px #fff"
    },
    "tablealt": {
        "borderCollapse": "separate"
    },
    "tablealt tbody tr td": {
        "border": "solid 1px #fff",
        "borderLeftWidth": 0,
        "borderTopWidth": 0
    },
    "tablealt tbody tr td:first-child": {
        "borderLeftWidth": 1
    },
    "tablealt tbody tr:first-child td": {
        "borderTopWidth": 1
    },
    "tablealt thead": {
        "borderBottom": 0
    },
    "tablealt tfoot": {
        "borderTop": 0
    },
    "command p": {
        "marginLeft": 2,
        "marginBottom": 0.1
    },
    "input[type=\"submit\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "MozTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "WebkitTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "MsTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "transition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "backgroundColor": "transparent",
        "borderRadius": 3,
        "border": 0,
        "boxShadow": "inset 0 0 0 2px #fff",
        "color": "#fff",
        "cursor": "pointer",
        "display": "inline-block",
        "fontSize": 0.8,
        "fontWeight": "600",
        "height": 3.125,
        "letterSpacing": 0.225,
        "lineHeight": 3.125,
        "paddingTop": 0,
        "paddingRight": 2.75,
        "paddingBottom": 0,
        "paddingLeft": 2.75,
        "textAlign": "center",
        "textDecoration": "none",
        "textTransform": "uppercase",
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "textOverflow": "ellipsis"
    },
    "input[type=\"reset\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "MozTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "WebkitTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "MsTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "transition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "backgroundColor": "transparent",
        "borderRadius": 3,
        "border": 0,
        "boxShadow": "inset 0 0 0 2px #fff",
        "color": "#fff",
        "cursor": "pointer",
        "display": "inline-block",
        "fontSize": 0.8,
        "fontWeight": "600",
        "height": 3.125,
        "letterSpacing": 0.225,
        "lineHeight": 3.125,
        "paddingTop": 0,
        "paddingRight": 2.75,
        "paddingBottom": 0,
        "paddingLeft": 2.75,
        "textAlign": "center",
        "textDecoration": "none",
        "textTransform": "uppercase",
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "textOverflow": "ellipsis"
    },
    "input[type=\"button\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "MozTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "WebkitTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "MsTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "transition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "backgroundColor": "transparent",
        "borderRadius": 3,
        "border": 0,
        "boxShadow": "inset 0 0 0 2px #fff",
        "color": "#fff",
        "cursor": "pointer",
        "display": "inline-block",
        "fontSize": 0.8,
        "fontWeight": "600",
        "height": 3.125,
        "letterSpacing": 0.225,
        "lineHeight": 3.125,
        "paddingTop": 0,
        "paddingRight": 2.75,
        "paddingBottom": 0,
        "paddingLeft": 2.75,
        "textAlign": "center",
        "textDecoration": "none",
        "textTransform": "uppercase",
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "textOverflow": "ellipsis"
    },
    "button": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "MozTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "WebkitTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "MsTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "transition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "backgroundColor": "transparent",
        "borderRadius": 3,
        "border": 0,
        "boxShadow": "inset 0 0 0 2px #fff",
        "color": "#fff",
        "cursor": "pointer",
        "display": "inline-block",
        "fontSize": 0.8,
        "fontWeight": "600",
        "height": 3.125,
        "letterSpacing": 0.225,
        "lineHeight": 3.125,
        "paddingTop": 0,
        "paddingRight": 2.75,
        "paddingBottom": 0,
        "paddingLeft": 2.75,
        "textAlign": "center",
        "textDecoration": "none",
        "textTransform": "uppercase",
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "textOverflow": "ellipsis"
    },
    "input[type=\"submit\"]:hover": {
        "backgroundColor": "rgba(144, 144, 144, 0.25)"
    },
    "input[type=\"reset\"]:hover": {
        "backgroundColor": "rgba(144, 144, 144, 0.25)"
    },
    "input[type=\"button\"]:hover": {
        "backgroundColor": "rgba(144, 144, 144, 0.25)"
    },
    "button:hover": {
        "backgroundColor": "rgba(144, 144, 144, 0.25)"
    },
    "input[type=\"submit\"]:active": {
        "backgroundColor": "rgba(144, 144, 144, 0.5)"
    },
    "input[type=\"reset\"]:active": {
        "backgroundColor": "rgba(144, 144, 144, 0.5)"
    },
    "input[type=\"button\"]:active": {
        "backgroundColor": "rgba(144, 144, 144, 0.5)"
    },
    "button:active": {
        "backgroundColor": "rgba(144, 144, 144, 0.5)"
    },
    "input[type=\"submit\"]icon:before": {
        "marginRight": 0.5
    },
    "input[type=\"reset\"]icon:before": {
        "marginRight": 0.5
    },
    "input[type=\"button\"]icon:before": {
        "marginRight": 0.5
    },
    "buttonicon:before": {
        "marginRight": 0.5
    },
    "input[type=\"submit\"]fit": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "width": "100%"
    },
    "input[type=\"reset\"]fit": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "width": "100%"
    },
    "input[type=\"button\"]fit": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "width": "100%"
    },
    "buttonfit": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "width": "100%"
    },
    "input[type=\"submit\"]small": {
        "fontSize": 0.8
    },
    "input[type=\"reset\"]small": {
        "fontSize": 0.8
    },
    "input[type=\"button\"]small": {
        "fontSize": 0.8
    },
    "buttonsmall": {
        "fontSize": 0.8
    },
    "input[type=\"submit\"]big": {
        "fontSize": 1.35
    },
    "input[type=\"reset\"]big": {
        "fontSize": 1.35
    },
    "input[type=\"button\"]big": {
        "fontSize": 1.35
    },
    "buttonbig": {
        "fontSize": 1.35
    },
    "input[type=\"submit\"]special": {
        "backgroundColor": "#ed4933",
        "boxShadow": "none !important",
        "color": "#ffffff !important"
    },
    "input[type=\"reset\"]special": {
        "backgroundColor": "#ed4933",
        "boxShadow": "none !important",
        "color": "#ffffff !important"
    },
    "input[type=\"button\"]special": {
        "backgroundColor": "#ed4933",
        "boxShadow": "none !important",
        "color": "#ffffff !important"
    },
    "buttonspecial": {
        "backgroundColor": "#ed4933",
        "boxShadow": "none !important",
        "color": "#ffffff !important"
    },
    "input[type=\"submit\"]special:hover": {
        "backgroundColor": "#ef5e4a !important"
    },
    "input[type=\"reset\"]special:hover": {
        "backgroundColor": "#ef5e4a !important"
    },
    "input[type=\"button\"]special:hover": {
        "backgroundColor": "#ef5e4a !important"
    },
    "buttonspecial:hover": {
        "backgroundColor": "#ef5e4a !important"
    },
    "input[type=\"submit\"]special:active": {
        "backgroundColor": "#eb341c !important"
    },
    "input[type=\"reset\"]special:active": {
        "backgroundColor": "#eb341c !important"
    },
    "input[type=\"button\"]special:active": {
        "backgroundColor": "#eb341c !important"
    },
    "buttonspecial:active": {
        "backgroundColor": "#eb341c !important"
    },
    "input[type=\"submit\"]disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "input[type=\"submit\"]:disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "input[type=\"reset\"]disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "input[type=\"reset\"]:disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "input[type=\"button\"]disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "input[type=\"button\"]:disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "buttondisabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "button:disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "features": {
        "display": "flex",
        "MozFlexWrap": "wrap",
        "WebkitFlexWrap": "wrap",
        "MsFlexWrap": "wrap",
        "flexWrap": "wrap",
        "MozJustifyContent": "center",
        "WebkitJustifyContent": "center",
        "MsJustifyContent": "center",
        "justifyContent": "center",
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": "100%"
    },
    "features li": {
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 2,
        "paddingLeft": 6,
        "display": "block",
        "position": "relative",
        "textAlign": "left",
        "width": "50%"
    },
    "features li:nth-child(1)": {
        "backgroundColor": "rgba(0, 0, 0, 0.035)",
        "borderTopLeftRadius": 3
    },
    "features li:nth-child(2)": {
        "backgroundColor": "rgba(0, 0, 0, 0.07)",
        "borderTopRightRadius": 3
    },
    "features li:nth-child(3)": {
        "backgroundColor": "rgba(0, 0, 0, 0.105)"
    },
    "features li:nth-child(4)": {
        "backgroundColor": "rgba(0, 0, 0, 0.14)"
    },
    "features li:nth-child(5)": {
        "backgroundColor": "rgba(0, 0, 0, 0.175)"
    },
    "features li:nth-child(6)": {
        "backgroundColor": "rgba(0, 0, 0, 0.21)"
    },
    "features li:nth-child(7)": {
        "backgroundColor": "rgba(0, 0, 0, 0.245)"
    },
    "features li:nth-child(8)": {
        "backgroundColor": "rgba(0, 0, 0, 0.28)"
    },
    "features li:nth-child(9)": {
        "backgroundColor": "rgba(0, 0, 0, 0.315)"
    },
    "features li:nth-child(10)": {
        "backgroundColor": "rgba(0, 0, 0, 0.35)"
    },
    "features li:before": {
        "display": "block",
        "color": "#00ffcc",
        "position": "absolute",
        "left": 1.75,
        "top": 2.75,
        "fontSize": 1.5
    },
    "features li:nth-last-child(1)": {
        "borderBottomRightRadius": 3
    },
    "features li:nth-last-child(2)": {
        "borderBottomLeftRadius": 3
    },
    "spotlight": {
        "MozAlignItems": "center",
        "WebkitAlignItems": "center",
        "MsAlignItems": "center",
        "alignItems": "center",
        "display": "flex",
        "paddingLeft": 2,
        "paddingRight": 2
    },
    "spotlight  video": {
        "MozOrder": 1,
        "WebkitOrder": 1,
        "MsOrder": 1,
        "order": 1,
        "width": "40%"
    },
    "spotlight video  video": {
        "width": "90%",
        "height": "90%",
        "autoplay": "true",
        "loop": "true",
        "paddingLeft": 3
    },
    "spotlight content": {
        "paddingTop": 2,
        "paddingRight": 4,
        "paddingBottom": 0.1,
        "paddingLeft": 4,
        "MozOrder": 2,
        "WebkitOrder": 2,
        "MsOrder": 2,
        "order": 2,
        "maxWidth": 48,
        "width": "60%"
    },
    "spotlight:nth-child(2n)": {
        "MozFlexDirection": "row-reverse",
        "WebkitFlexDirection": "row-reverse",
        "MsFlexDirection": "row-reverse",
        "flexDirection": "row-reverse"
    },
    "spotlight:nth-child(1)": {
        "backgroundColor": "rgba(0, 0, 0, 0.075)"
    },
    "spotlight:nth-child(2)": {
        "backgroundColor": "rgba(0, 0, 0, 0.15)"
    },
    "spotlight:nth-child(3)": {
        "backgroundColor": "rgba(0, 0, 0, 0.225)"
    },
    "spotlight:nth-child(4)": {
        "backgroundColor": "rgba(0, 0, 0, 0.3)"
    },
    "spotlight:nth-child(5)": {
        "backgroundColor": "rgba(0, 0, 0, 0.375)"
    },
    "spotlight:nth-child(6)": {
        "backgroundColor": "rgba(0, 0, 0, 0.45)"
    },
    "spotlight:nth-child(7)": {
        "backgroundColor": "rgba(0, 0, 0, 0.525)"
    },
    "spotlight:nth-child(8)": {
        "backgroundColor": "rgba(0, 0, 0, 0.6)"
    },
    "spotlight:nth-child(9)": {
        "backgroundColor": "rgba(0, 0, 0, 0.675)"
    },
    "spotlight:nth-child(10)": {
        "backgroundColor": "rgba(0, 0, 0, 0.75)"
    },
    "wrapper": {
        "paddingTop": 6,
        "paddingRight": 0,
        "paddingBottom": 4,
        "paddingLeft": 0
    },
    "wrapper > inner": {
        "width": 60,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "wrapperalt": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "wrapperstyle1": {
        "backgroundColor": "#21b2a6",
        "color": "#c7ebe8"
    },
    "wrapperstyle1 strong": {
        "color": "#ffffff"
    },
    "wrapperstyle1 b": {
        "color": "#ffffff"
    },
    "wrapperstyle1 h2": {
        "color": "#ffffff"
    },
    "wrapperstyle1 h3": {
        "color": "#ffffff"
    },
    "wrapperstyle1 h4": {
        "color": "#ffffff"
    },
    "wrapperstyle1 h5": {
        "color": "#ffffff"
    },
    "wrapperstyle1 h6": {
        "color": "#ffffff"
    },
    "wrapperstyle1 hr": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle1 blockquote": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle1 code": {
        "background": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle1 header p": {
        "color": "#a6e0db"
    },
    "wrapperstyle1 headermajor h2": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle1 headermajor h3": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle1 headermajor h4": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle1 headermajor h5": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle1 headermajor h6": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle1 headermajor p": {
        "color": "#c7ebe8"
    },
    "wrapperstyle1 label": {
        "color": "#ffffff"
    },
    "wrapperstyle1 input[type=\"text\"]": {
        "background": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle1 input[type=\"password\"]": {
        "background": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle1 input[type=\"email\"]": {
        "background": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle1 select": {
        "background": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle1 textarea": {
        "background": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle1 select-wrapper:before": {
        "color": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle1 input[type=\"checkbox\"] + label": {
        "color": "#c7ebe8"
    },
    "wrapperstyle1 input[type=\"radio\"] + label": {
        "color": "#c7ebe8"
    },
    "wrapperstyle1 input[type=\"checkbox\"] + label:before": {
        "background": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle1 input[type=\"radio\"] + label:before": {
        "background": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle1 input[type=\"checkbox\"]:checked + label:before": {
        "background": "#ffffff",
        "color": "#21b2a6"
    },
    "wrapperstyle1 input[type=\"radio\"]:checked + label:before": {
        "background": "#ffffff",
        "color": "#21b2a6"
    },
    "wrapperstyle1 ::-webkit-input-placeholder": {
        "color": "#a6e0db !important"
    },
    "wrapperstyle1 :-moz-placeholder": {
        "color": "#a6e0db !important"
    },
    "wrapperstyle1 ::-moz-placeholder": {
        "color": "#a6e0db !important"
    },
    "wrapperstyle1 :-ms-input-placeholder": {
        "color": "#a6e0db !important"
    },
    "wrapperstyle1 formerize-placeholder": {
        "color": "#a6e0db !important"
    },
    "wrapperstyle1 iconmajor": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle1 ulalt li": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle1 table tbody tr": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle1 table tbody tr:nth-child(2n + 1)": {
        "backgroundColor": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle1 table th": {
        "color": "#ffffff"
    },
    "wrapperstyle1 table thead": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle1 table tfoot": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle1 tablealt tbody tr td": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle1 input[type=\"submit\"]": {
        "boxShadow": "inset 0 0 0 2px rgba(0, 0, 0, 0.125)",
        "color": "#ffffff"
    },
    "wrapperstyle1 input[type=\"reset\"]": {
        "boxShadow": "inset 0 0 0 2px rgba(0, 0, 0, 0.125)",
        "color": "#ffffff"
    },
    "wrapperstyle1 input[type=\"button\"]": {
        "boxShadow": "inset 0 0 0 2px rgba(0, 0, 0, 0.125)",
        "color": "#ffffff"
    },
    "wrapperstyle1 button": {
        "boxShadow": "inset 0 0 0 2px rgba(0, 0, 0, 0.125)",
        "color": "#ffffff"
    },
    "wrapperstyle1 input[type=\"submit\"]:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle1 input[type=\"reset\"]:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle1 input[type=\"button\"]:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle1 button:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle1 input[type=\"submit\"]:active": {
        "backgroundColor": "rgba(255, 255, 255, 0.2)"
    },
    "wrapperstyle1 input[type=\"reset\"]:active": {
        "backgroundColor": "rgba(255, 255, 255, 0.2)"
    },
    "wrapperstyle1 input[type=\"button\"]:active": {
        "backgroundColor": "rgba(255, 255, 255, 0.2)"
    },
    "wrapperstyle1 button:active": {
        "backgroundColor": "rgba(255, 255, 255, 0.2)"
    },
    "wrapperstyle2": {
        "backgroundColor": "#81BEF7"
    },
    "wrapperstyle3": {
        "backgroundColor": "#505393",
        "color": "#d3d4e4"
    },
    "wrapperstyle3 strong": {
        "color": "#ffffff"
    },
    "wrapperstyle3 b": {
        "color": "#ffffff"
    },
    "wrapperstyle3 h2": {
        "color": "#ffffff"
    },
    "wrapperstyle3 h3": {
        "color": "#ffffff"
    },
    "wrapperstyle3 h4": {
        "color": "#ffffff"
    },
    "wrapperstyle3 h5": {
        "color": "#ffffff"
    },
    "wrapperstyle3 h6": {
        "color": "#ffffff"
    },
    "wrapperstyle3 hr": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle3 blockquote": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle3 code": {
        "background": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle3 header p": {
        "color": "#b9bad3"
    },
    "wrapperstyle3 headermajor h2": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle3 headermajor h3": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle3 headermajor h4": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle3 headermajor h5": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle3 headermajor h6": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle3 headermajor p": {
        "color": "#d3d4e4"
    },
    "wrapperstyle3 label": {
        "color": "#ffffff"
    },
    "wrapperstyle3 input[type=\"text\"]": {
        "background": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle3 input[type=\"password\"]": {
        "background": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle3 input[type=\"email\"]": {
        "background": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle3 select": {
        "background": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle3 textarea": {
        "background": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle3 select-wrapper:before": {
        "color": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle3 input[type=\"checkbox\"] + label": {
        "color": "#d3d4e4"
    },
    "wrapperstyle3 input[type=\"radio\"] + label": {
        "color": "#d3d4e4"
    },
    "wrapperstyle3 input[type=\"checkbox\"] + label:before": {
        "background": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle3 input[type=\"radio\"] + label:before": {
        "background": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle3 input[type=\"checkbox\"]:checked + label:before": {
        "background": "#ffffff",
        "color": "#505393"
    },
    "wrapperstyle3 input[type=\"radio\"]:checked + label:before": {
        "background": "#ffffff",
        "color": "#505393"
    },
    "wrapperstyle3 ::-webkit-input-placeholder": {
        "color": "#b9bad3 !important"
    },
    "wrapperstyle3 :-moz-placeholder": {
        "color": "#b9bad3 !important"
    },
    "wrapperstyle3 ::-moz-placeholder": {
        "color": "#b9bad3 !important"
    },
    "wrapperstyle3 :-ms-input-placeholder": {
        "color": "#b9bad3 !important"
    },
    "wrapperstyle3 formerize-placeholder": {
        "color": "#b9bad3 !important"
    },
    "wrapperstyle3 iconmajor": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle3 ulalt li": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle3 table tbody tr": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle3 table tbody tr:nth-child(2n + 1)": {
        "backgroundColor": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle3 table th": {
        "color": "#ffffff"
    },
    "wrapperstyle3 table thead": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle3 table tfoot": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle3 tablealt tbody tr td": {
        "borderColor": "rgba(0, 0, 0, 0.125)"
    },
    "wrapperstyle3 input[type=\"submit\"]": {
        "boxShadow": "inset 0 0 0 2px rgba(0, 0, 0, 0.125)",
        "color": "#ffffff"
    },
    "wrapperstyle3 input[type=\"reset\"]": {
        "boxShadow": "inset 0 0 0 2px rgba(0, 0, 0, 0.125)",
        "color": "#ffffff"
    },
    "wrapperstyle3 input[type=\"button\"]": {
        "boxShadow": "inset 0 0 0 2px rgba(0, 0, 0, 0.125)",
        "color": "#ffffff"
    },
    "wrapperstyle3 button": {
        "boxShadow": "inset 0 0 0 2px rgba(0, 0, 0, 0.125)",
        "color": "#ffffff"
    },
    "wrapperstyle3 input[type=\"submit\"]:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle3 input[type=\"reset\"]:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle3 input[type=\"button\"]:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle3 button:hover": {
        "backgroundColor": "rgba(255, 255, 255, 0.075)"
    },
    "wrapperstyle3 input[type=\"submit\"]:active": {
        "backgroundColor": "rgba(255, 255, 255, 0.2)"
    },
    "wrapperstyle3 input[type=\"reset\"]:active": {
        "backgroundColor": "rgba(255, 255, 255, 0.2)"
    },
    "wrapperstyle3 input[type=\"button\"]:active": {
        "backgroundColor": "rgba(255, 255, 255, 0.2)"
    },
    "wrapperstyle3 button:active": {
        "backgroundColor": "rgba(255, 255, 255, 0.2)"
    },
    "wrapperstyle4": {
        "backgroundColor": "transparent"
    },
    "wrapperstyle5": {
        "backgroundColor": "#ffffff",
        "color": "#4E4852"
    },
    "wrapperstyle5 strong": {
        "color": "#2E3842"
    },
    "wrapperstyle5 b": {
        "color": "#2E3842"
    },
    "wrapperstyle5 h2": {
        "color": "#2E3842"
    },
    "wrapperstyle5 h3": {
        "color": "#2E3842"
    },
    "wrapperstyle5 h4": {
        "color": "#2E3842"
    },
    "wrapperstyle5 h5": {
        "color": "#2E3842"
    },
    "wrapperstyle5 h6": {
        "color": "#2E3842"
    },
    "wrapperstyle5 hr": {
        "borderColor": "#dfdfdf"
    },
    "wrapperstyle5 blockquote": {
        "borderColor": "#dfdfdf"
    },
    "wrapperstyle5 code": {
        "background": "rgba(0, 0, 0, 0.0375)"
    },
    "wrapperstyle5 header p": {
        "color": "#8E8892"
    },
    "wrapperstyle5 headermajor h2": {
        "borderColor": "#dfdfdf"
    },
    "wrapperstyle5 headermajor h3": {
        "borderColor": "#dfdfdf"
    },
    "wrapperstyle5 headermajor h4": {
        "borderColor": "#dfdfdf"
    },
    "wrapperstyle5 headermajor h5": {
        "borderColor": "#dfdfdf"
    },
    "wrapperstyle5 headermajor h6": {
        "borderColor": "#dfdfdf"
    },
    "wrapperstyle5 headermajor p": {
        "color": "#4E4852"
    },
    "wrapperstyle5 label": {
        "color": "#2E3842"
    },
    "wrapperstyle5 input[type=\"text\"]": {
        "background": "rgba(0, 0, 0, 0.0375)"
    },
    "wrapperstyle5 input[type=\"password\"]": {
        "background": "rgba(0, 0, 0, 0.0375)"
    },
    "wrapperstyle5 input[type=\"email\"]": {
        "background": "rgba(0, 0, 0, 0.0375)"
    },
    "wrapperstyle5 select": {
        "background": "rgba(0, 0, 0, 0.0375)"
    },
    "wrapperstyle5 textarea": {
        "background": "rgba(0, 0, 0, 0.0375)"
    },
    "wrapperstyle5 select-wrapper:before": {
        "color": "#dfdfdf"
    },
    "wrapperstyle5 input[type=\"checkbox\"] + label": {
        "color": "#4E4852"
    },
    "wrapperstyle5 input[type=\"radio\"] + label": {
        "color": "#4E4852"
    },
    "wrapperstyle5 input[type=\"checkbox\"] + label:before": {
        "background": "rgba(0, 0, 0, 0.0375)"
    },
    "wrapperstyle5 input[type=\"radio\"] + label:before": {
        "background": "rgba(0, 0, 0, 0.0375)"
    },
    "wrapperstyle5 input[type=\"checkbox\"]:checked + label:before": {
        "background": "#2E3842",
        "color": "#ffffff"
    },
    "wrapperstyle5 input[type=\"radio\"]:checked + label:before": {
        "background": "#2E3842",
        "color": "#ffffff"
    },
    "wrapperstyle5 ::-webkit-input-placeholder": {
        "color": "#8E8892 !important"
    },
    "wrapperstyle5 :-moz-placeholder": {
        "color": "#8E8892 !important"
    },
    "wrapperstyle5 ::-moz-placeholder": {
        "color": "#8E8892 !important"
    },
    "wrapperstyle5 :-ms-input-placeholder": {
        "color": "#8E8892 !important"
    },
    "wrapperstyle5 formerize-placeholder": {
        "color": "#8E8892 !important"
    },
    "wrapperstyle5 iconmajor": {
        "borderColor": "#dfdfdf"
    },
    "wrapperstyle5 ulalt li": {
        "borderColor": "#dfdfdf"
    },
    "wrapperstyle5 table tbody tr": {
        "borderColor": "#dfdfdf"
    },
    "wrapperstyle5 table tbody tr:nth-child(2n + 1)": {
        "backgroundColor": "rgba(0, 0, 0, 0.0375)"
    },
    "wrapperstyle5 table th": {
        "color": "#2E3842"
    },
    "wrapperstyle5 table thead": {
        "borderColor": "#dfdfdf"
    },
    "wrapperstyle5 table tfoot": {
        "borderColor": "#dfdfdf"
    },
    "wrapperstyle5 tablealt tbody tr td": {
        "borderColor": "#dfdfdf"
    },
    "wrapperstyle5 input[type=\"submit\"]": {
        "boxShadow": "inset 0 0 0 2px #dfdfdf",
        "color": "#2E3842"
    },
    "wrapperstyle5 input[type=\"reset\"]": {
        "boxShadow": "inset 0 0 0 2px #dfdfdf",
        "color": "#2E3842"
    },
    "wrapperstyle5 input[type=\"button\"]": {
        "boxShadow": "inset 0 0 0 2px #dfdfdf",
        "color": "#2E3842"
    },
    "wrapperstyle5 button": {
        "boxShadow": "inset 0 0 0 2px #dfdfdf",
        "color": "#2E3842"
    },
    "wrapperstyle5 input[type=\"submit\"]:hover": {
        "backgroundColor": "rgba(0, 0, 0, 0.0375)"
    },
    "wrapperstyle5 input[type=\"reset\"]:hover": {
        "backgroundColor": "rgba(0, 0, 0, 0.0375)"
    },
    "wrapperstyle5 input[type=\"button\"]:hover": {
        "backgroundColor": "rgba(0, 0, 0, 0.0375)"
    },
    "wrapperstyle5 button:hover": {
        "backgroundColor": "rgba(0, 0, 0, 0.0375)"
    },
    "wrapperstyle5 input[type=\"submit\"]:active": {
        "backgroundColor": "rgba(0, 0, 0, 0.1)"
    },
    "wrapperstyle5 input[type=\"reset\"]:active": {
        "backgroundColor": "rgba(0, 0, 0, 0.1)"
    },
    "wrapperstyle5 input[type=\"button\"]:active": {
        "backgroundColor": "rgba(0, 0, 0, 0.1)"
    },
    "wrapperstyle5 button:active": {
        "backgroundColor": "rgba(0, 0, 0, 0.1)"
    },
    "page-wrapper": {
        "MozTransition": "opacity 0.5s ease",
        "WebkitTransition": "opacity 0.5s ease",
        "MsTransition": "opacity 0.5s ease",
        "transition": "opacity 0.5s ease",
        "opacity": 1,
        "paddingTop": 3
    },
    "page-wrapper:before": {
        "background": "transparent",
        "content": "''",
        "display": "none",
        "height": "100%",
        "left": 0,
        "position": "fixed",
        "top": 0,
        "width": "100%",
        "zIndex": 10001
    },
    "menu ul": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "menu ul > li": {
        "borderTop": "solid 1px rgba(0, 0, 0, 0.125)",
        "marginTop": 0.5,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0.5,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "menu ul > li:first-child": {
        "borderTop": "0 !important",
        "marginTop": "0 !important",
        "paddingTop": "0 !important"
    },
    "menu ul > li > a": {
        "border": 0,
        "color": "inherit",
        "display": "block",
        "fontSize": 0.8,
        "letterSpacing": 0.225,
        "outline": 0,
        "textDecoration": "none",
        "textTransform": "uppercase"
    },
    "menu close": {
        "backgroundImage": "url(\"images/close.svg\")",
        "backgroundPosition": "4.85em 1em",
        "backgroundRepeat": "no-repeat",
        "border": 0,
        "cursor": "pointer",
        "display": "block",
        "height": 3,
        "position": "absolute",
        "right": 0,
        "top": 0,
        "verticalAlign": "middle",
        "width": 7
    },
    "bodyis-menu-visible page-wrapper": {
        "opacity": 0.35
    },
    "bodyis-menu-visible page-wrapper:before": {
        "display": "block"
    },
    "bodyis-menu-visible menu": {
        "MozTransform": "translateX(0)",
        "WebkitTransform": "translateX(0)",
        "MsTransform": "translateX(0)",
        "transform": "translateX(0)"
    },
    "header h1": {
        "MozTransition": "opacity 0.2s ease",
        "WebkitTransition": "opacity 0.2s ease",
        "MsTransition": "opacity 0.2s ease",
        "transition": "opacity 0.2s ease",
        "height": "inherit",
        "left": 1.25,
        "lineHeight": "inherit",
        "position": "absolute",
        "top": 0
    },
    "header h1 a": {
        "border": 0,
        "display": "block",
        "height": "inherit",
        "lineHeight": "inherit"
    },
    "header nav": {
        "height": "inherit",
        "lineHeight": "inherit",
        "position": "absolute",
        "right": 0,
        "top": 0
    },
    "header nav > ul": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "whiteSpace": "nowrap"
    },
    "header nav > ul > li": {
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "header nav > ul > li > a": {
        "border": 0,
        "color": "#fff",
        "display": "block",
        "fontSize": 0.8,
        "letterSpacing": 0.225,
        "paddingTop": 0,
        "paddingRight": 1.5,
        "paddingBottom": 0,
        "paddingLeft": 1.5,
        "textTransform": "uppercase"
    },
    "header nav > ul > li > amenuToggle": {
        "outline": 0,
        "position": "relative"
    },
    "header nav > ul > li > amenuToggle:after": {
        "backgroundImage": "url(\"images/bars.svg\")",
        "backgroundPosition": "right center",
        "backgroundRepeat": "no-repeat",
        "content": "''",
        "display": "inline-block",
        "height": 3.75,
        "verticalAlign": "top",
        "width": 2
    },
    "header nav > ul > li:first-child": {
        "marginLeft": 0
    },
    "headeralt": {
        "background": "transparent"
    },
    "headeralt h1": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0
    },
    "banner": {
        "display": "flex",
        "MozFlexDirection": "column",
        "WebkitFlexDirection": "column",
        "MsFlexDirection": "column",
        "flexDirection": "column",
        "MozJustifyContent": "center",
        "WebkitJustifyContent": "center",
        "MsJustifyContent": "center",
        "justifyContent": "center",
        "cursor": "default",
        "height": 100 * vh,
        "minHeight": 35,
        "overflow": "hidden",
        "position": "relative",
        "textAlign": "center"
    },
    "banner h2": {
        "MozTransform": "scale(1)",
        "WebkitTransform": "scale(1)",
        "MsTransform": "scale(1)",
        "transform": "scale(1)",
        "MozTransition": "-moz-transform 0.5s ease, opacity 0.5s ease",
        "WebkitTransition": "-webkit-transform 0.5s ease, opacity 0.5s ease",
        "MsTransition": "-ms-transform 0.5s ease, opacity 0.5s ease",
        "transition": "transform 0.5s ease, opacity 0.5s ease",
        "display": "inline-block",
        "fontSize": 1.75,
        "opacity": 1,
        "paddingTop": 0.35,
        "paddingRight": 1,
        "paddingBottom": 0.35,
        "paddingLeft": 1,
        "position": "relative",
        "zIndex": 1,
        "font": "400 100px/1.3 'Oleo Script', Helvetica, sans-serif"
    },
    "banner h2:before": {
        "MozTransition": "width 0.85s ease",
        "WebkitTransition": "width 0.85s ease",
        "MsTransition": "width 0.85s ease",
        "transition": "width 0.85s ease",
        "MozTransitionDelay": "0.25s",
        "WebkitTransitionDelay": "0.25s",
        "MsTransitionDelay": "0.25s",
        "transitionDelay": "0.25s",
        "background": "#fff",
        "content": "''",
        "display": "block",
        "height": 2,
        "position": "absolute",
        "width": "100%",
        "top": 0,
        "left": 0
    },
    "banner h2:after": {
        "MozTransition": "width 0.85s ease",
        "WebkitTransition": "width 0.85s ease",
        "MsTransition": "width 0.85s ease",
        "transition": "width 0.85s ease",
        "MozTransitionDelay": "0.25s",
        "WebkitTransitionDelay": "0.25s",
        "MsTransitionDelay": "0.25s",
        "transitionDelay": "0.25s",
        "background": "#fff",
        "content": "''",
        "display": "block",
        "height": 2,
        "position": "absolute",
        "width": "100%",
        "bottom": 0,
        "right": 0
    },
    "banner p": {
        "letterSpacing": 0.225,
        "textTransform": "uppercase"
    },
    "banner p a": {
        "color": "inherit"
    },
    "banner more": {
        "MozTransition": "-moz-transform 0.75s ease, opacity 0.75s ease",
        "WebkitTransition": "-webkit-transform 0.75s ease, opacity 0.75s ease",
        "MsTransition": "-ms-transform 0.75s ease, opacity 0.75s ease",
        "transition": "transform 0.75s ease, opacity 0.75s ease",
        "MozTransitionDelay": "3.5s",
        "WebkitTransitionDelay": "3.5s",
        "MsTransitionDelay": "3.5s",
        "transitionDelay": "3.5s",
        "MozTransform": "translateY(0)",
        "WebkitTransform": "translateY(0)",
        "MsTransform": "translateY(0)",
        "transform": "translateY(0)",
        "border": "none",
        "bottom": 0,
        "color": "inherit",
        "fontSize": 0.8,
        "height": 8.5,
        "left": "50%",
        "letterSpacing": 0.225,
        "marginLeft": -8.5,
        "opacity": 1,
        "outline": 0,
        "paddingLeft": 0.225,
        "position": "absolute",
        "textAlign": "center",
        "textTransform": "uppercase",
        "width": 16,
        "zIndex": 1
    },
    "banner more:after": {
        "backgroundImage": "url(\"images/arrow.svg\")",
        "backgroundPosition": "center",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "contain",
        "bottom": 4,
        "content": "''",
        "display": "block",
        "height": 1.5,
        "left": "50%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": -0.75,
        "position": "absolute",
        "width": 1.5
    },
    "banner:after": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "MozTransition": "opacity 3s ease-in-out",
        "WebkitTransition": "opacity 3s ease-in-out",
        "MsTransition": "opacity 3s ease-in-out",
        "transition": "opacity 3s ease-in-out",
        "MozTransitionDelay": "1.25s",
        "WebkitTransitionDelay": "1.25s",
        "MsTransitionDelay": "1.25s",
        "transitionDelay": "1.25s",
        "content": "''",
        "background": "#2e3842",
        "display": "block",
        "width": "100%",
        "height": "100%",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "opacity": 0
    },
    "bodyis-loading banner h2": {
        "MozTransform": "scale(0.95)",
        "WebkitTransform": "scale(0.95)",
        "MsTransform": "scale(0.95)",
        "transform": "scale(0.95)",
        "opacity": 0
    },
    "bodyis-loading banner h2:before": {
        "width": 0
    },
    "bodyis-loading banner h2:after": {
        "width": 0
    },
    "bodyis-loading banner more": {
        "MozTransform": "translateY(8.5em)",
        "WebkitTransform": "translateY(8.5em)",
        "MsTransform": "translateY(8.5em)",
        "transform": "translateY(8.5em)",
        "opacity": 0
    },
    "bodyis-loading banner:after": {
        "opacity": 1
    },
    "cta inner": {
        "display": "flex",
        "maxWidth": 45
    },
    "cta inner header": {
        "MozOrder": 1,
        "WebkitOrder": 1,
        "MsOrder": 1,
        "order": 1,
        "paddingRight": 3,
        "width": "70%"
    },
    "cta inner header p": {
        "color": "inherit"
    },
    "cta inner actions": {
        "MozOrder": 2,
        "WebkitOrder": 2,
        "MsOrder": 2,
        "order": 2,
        "width": "30%"
    },
    "main > header": {
        "paddingTop": 12,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "backgroundImage": "linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(\"../../images/backpic01.png\")",
        "backgroundAttachment": "fixed",
        "backgroundPosition": "center center",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "textAlign": "center"
    },
    "main > header h2": {
        "fontSize": 1.75,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.5,
        "marginLeft": 0
    },
    "main > header p": {
        "color": "inherit",
        "letterSpacing": 0.225,
        "textTransform": "uppercase",
        "top": 0
    },
    "main > header p a": {
        "color": "inherit"
    },
    "bodyis-mobile main > header": {
        "backgroundAttachment": "scroll"
    },
    "footer icons": {
        "fontSize": 1.25
    },
    "footer icons a": {
        "color": "rgba(255, 255, 255, 0.5)"
    },
    "footer icons a:hover": {
        "color": "#fff"
    },
    "footer copyright": {
        "color": "rgba(255, 255, 255, 0.5)",
        "fontSize": 0.8,
        "letterSpacing": 0.225,
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textTransform": "uppercase"
    },
    "footer copyright li": {
        "borderLeft": "solid 1px rgba(255, 255, 255, 0.5)",
        "display": "inline-block",
        "lineHeight": 1,
        "marginLeft": 1,
        "paddingLeft": 1
    },
    "footer copyright li:first-child": {
        "borderLeft": 0,
        "marginLeft": 0,
        "paddingLeft": 0
    },
    "footer copyright li a": {
        "color": "inherit"
    },
    "footer copyright li a:hover": {
        "color": "#fff"
    },
    "bodylanding page-wrapper": {
        "backgroundImage": "linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(\"../../images/backpic01.png\")",
        "backgroundAttachment": "fixed",
        "backgroundPosition": "center center",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "paddingTop": 0
    },
    "bodylanding footer": {
        "backgroundColor": "rgba(29, 36, 42, 0.9)"
    },
    "bodyis-mobilelanding page-wrapper": {
        "background": "none"
    },
    "bodyis-mobilelanding banner": {
        "backgroundImage": "linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(\"../../images/backpic01.png\")",
        "backgroundPosition": "center center",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover"
    },
    "bodyis-mobilelanding wrapperstyle4": {
        "backgroundImage": "linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(\"../../images/backpic01.png\")",
        "backgroundPosition": "center center",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover"
    },
    "bodyis-mobilelanding footer": {
        "backgroundColor": "#1d242a"
    }
});