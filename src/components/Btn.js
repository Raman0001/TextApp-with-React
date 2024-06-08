const Btn = (props) => {
    
    return (
        <>
            <div className="bg-white shadow-md rounded p-4 inline-flex items-center relative flex-wrap laptop:inline-grid laptop:grid-cols-4 justify-items-center">
                <div
                >
                    <select
                        className="border bg-blue-600 rounded-md text-white m-2 p-2  capitalize  outline-none"
                        name="font"
                        id="getFont"
                        onClick={props.toSetFontSize}
                    >
                        <option value="10">Default</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="14">14</option>
                        <option value="16">16</option>
                        <option value="18">18</option>
                        <option value="20">20</option>
                        <option value="22">22</option>
                        <option value="24">24</option>
                        <option value="36">36</option>
                        <option value="26">26</option>
                        <option value="28">28</option>
                        <option value="48">48</option>
                        <option value="72">72</option>

                    </select>
                </div>
                <button className="Bold border bg-blue-600 rounded-md text-white m-2 p-2 font-bold" onClick={props.toBoldCase}>B</button>
                <button className="Italic border bg-blue-600 rounded-md text-white m-2 px-2.5 p-2 italic" onClick={props.toItalicline}>I</button>
                <button className="Line border bg-blue-600 rounded-md text-white m-2 p-2 underline" onClick={props.toUnderline}>U</button>
                <button className="Through border bg-blue-600 rounded-md text-white m-2 p-2 line-through" onClick={props.toThroughline}>S</button>
                <button className="border bg-blue-600 rounded-md text-white m-2 p-2" onClick={props.toUpperCase}>Uppercase</button>
                <button className="border bg-blue-600 rounded-md text-white m-2 p-2" onClick={props.toLowerCase}>Lowercase</button>
                <button className="border bg-blue-600 rounded-md text-white m-2 p-2" onClick={props.toCapitalize}>Capitalize</button>
                <button className="border bg-blue-600 rounded-md text-white m-2 p-2" onClick={props.toClear}>Clear Text</button>
                <button className="border bg-blue-600 rounded-md text-white m-2 p-2" onClick={props.changeColor}>Change color</button>
            </div>
        </>
    )
}

export default Btn;  
