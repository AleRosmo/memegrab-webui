import React, { useState } from "react";
import SideBar from "./SideBar/SideBar";

const App = () => {
    let [active, setActive] = useState(true)


    const handlePosition = () => {
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    }

    const buttons = ['test', 'test2', 'palle']

    return (
        <div className="flex">
            <button onClick={handlePosition}>Test</button>
            {/* <SideBar classes={active ? "sidebar active" : "sidebar"} childButtons={buttons} /> */}
            <SideBar childButtons={buttons} />
            <main>
                <section>
                    
                </section>
            </main>
        </div>
    )
}

export default App