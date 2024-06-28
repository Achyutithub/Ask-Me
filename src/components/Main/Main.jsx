import react, {useContext} from 'react';
import "./Main.css";
import {assets} from "../../assets/assets";
import {Context} from "../../Context/Context"

const Main = () =>{

    const {input, setInput, recentPrompt, setRecentPrompt, prevPrompt, setPrevPrompt, onSent, showResult, loading, resultData, newChat}  = useContext(Context);


    return (
        <div className="main">
            <div className="nav">
                <p>Ask Me!</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult?
                    <>
                        <div className="greet">
                        <p><span>Hello.</span></p>
                        <p>How can I help you today?</p>
                        </div>
                        {/* <div className="cards">
                            <div className="card">
                                <p>suggest beautiful place to see on an upcomping road trip</p>
                                <img src={assets.compass_icon} alt=""/>
                            </div>

                            <div className="card">
                                <p>Breafly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt=""/>
                            </div>

                            <div className="card">
                                <p>Brainstrom team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt=""/>
                            </div>

                            <div className="card">
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt=""/>
                            </div>
                        </div> */}
                    </>
                    :<div className='result'>
                        <div className="result-title">
                            <p>{recentPrompt}</p>
                            <img src={assets.user_icon} alt=""/>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt=""/>
                            {loading 
                            ?<div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div>
                            : <p dangerouslySetInnerHTML={{__html: resultData}}></p>
                            }
                        </div>
                    </div>
                }
                
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter Prompt"></input>
                        <div>
                            {/* <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" /> */}
                            {input? <img onClick={() => onSent()} src={assets.send_icon} alt="" />: null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        It may display inacurate info,including about people,so double-check its responses.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;