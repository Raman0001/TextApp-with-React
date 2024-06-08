import Btn from "./Btn";
import { useState, useRef, useEffect } from "react";

const Textarea = () => {
    const IncreaseTextRows = useRef(null);
    const [text, setText] = useState("");
    useEffect(() => {
        IncreaseTextRows.current.style.height = "auto";
        IncreaseTextRows.current.style.height = IncreaseTextRows.current.scrollHeight + "px";
    }, [text])

        // convert to uppercase 
        const toUpperCase = () => {
            const Upperletter = text.toUpperCase();
            setText(Upperletter)
        }
        // convert to lowercase 
        const toLowerCase = () => {
            const Lowerletter = text.toLowerCase();
            setText(Lowerletter)
        }
        // convert to Capitalise
        const toCapitalize = () => {
            const Capitalize = text.charAt(0).toUpperCase() + text.slice(1);
            if (Capitalize === text.toUpperCase()) {
                alert("Text cannot be Capitalize when it is in uppercase");
            }
            else {
                setText(Capitalize);
            }
        }
        // to change the input of text area
        const handleOnChange = (e) => {
            setText(e.target.value)
        }
        // to bold characters
        const toBoldCase = () => {
            const bold = document.querySelector(".Bold");
            if (bold.style.fontWeight !== "bold") {
                bold.style.fontWeight = "bold";
            }
            else {
                bold.style.fontWeight = "normal";
            }
        }
        // to change the size of text in text area 
        const [fontTx, setFont] = useState("10");
        const toSetFontSize = () => {
            const getFont = document.getElementById("getFont");
            switch (getFont.value) {
                case "8":
                    setFont("8");
                    break;
                case "9":
                    setFont("9")
                    break;
                case "11":
                    setFont("11")
                    break;
                case "12":
                    setFont("12")
                    break;
                case "14":
                    setFont("14")
                    break;
                case "16":
                    setFont("16")
                    break;
                case "18":
                    setFont("18")
                    break;
                case "20":
                    setFont("20")
                    break;
                case "22":
                    setFont("22")
                    break;
                case "26":
                    setFont("26")
                    break;
                case "28":
                    setFont("28")
                    break;
                case "36":
                    setFont("36")
                    break;
                case "48":
                    setFont("48")
                    break;
                case "72":
                    setFont("72")
                    break;
                default:
                    setFont("10");
                    break;
            }
        }

        // to underline the text 
        const toUnderline = () => {
            const underline = document.querySelector(".Line");
            if (underline.style.textDecoration !== "underline") {
                underline.style.textDecoration = "underline"
            }
            else {
                underline.style.textDecoration = "none";
            }
        }
        // to cut text of the list
        const toThroughline = () => {
            const underline = document.querySelector(".Through");
            if (underline.style.textDecoration !== "line-through") {
                underline.style.textDecoration = "line-through"
            }
            else {
                underline.style.textDecoration = "none";
            }
        }
        // to convert the text to italic font
        const toItalicline = () => {
            const Italic = document.querySelector(".Italic");
            if (Italic.style.fontStyle !== "italic") {
                Italic.style.fontStyle = "italic"
            }
            else {
                Italic.style.fontStyle = "normal";
            }
        }
        // erase the text of textarea
        const toClear = () => {
            setText("")
        }

        const colors = ["#3498db", "#e74c3c", "#2ecc71", "#9b59b6", "#ffffff"];
        const [color, setColor] = useState("#ffffff");

        const changeColor = () => {
            let newColor = colors[Math.floor(Math.random() * colors.length)];
            while (newColor === color) {
                newColor = colors[Math.floor(Math.random() * colors.length)];
            }
            setColor(newColor);
        };


    return (
        <>
            <div className="mb-4">
                <textarea
                    ref={IncreaseTextRows}
                    type="text"
                    value={text}
                    onChange={handleOnChange}
                    rows={2}
                    style={{ fontSize: fontTx + "pt", backgroundColor: color }}
                    className={`resize-none Through overflow-hidden Italic Bold Line border w-full border-gray-300 outline-none p-2 rounded`}
                    placeholder="Enter the text"
                />
            </div>
            <Btn
                toUpperCase={toUpperCase}
                toLowerCase={toLowerCase}
                toBoldCase={toBoldCase}
                toCapitalize={toCapitalize}
                toUnderline={toUnderline}
                toItalicline={toItalicline}
                toSetFontSize={toSetFontSize}
                toThroughline={toThroughline}
                toClear={toClear}
                changeColor={changeColor}
            />
        </>
    )
}

export default Textarea;