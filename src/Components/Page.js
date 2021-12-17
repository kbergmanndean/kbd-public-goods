import React from "react"
import image1 from "../Pictures/cat_image1_desktop.png"
import image3 from "../Pictures/cat_treats_fd_minnows_01 3.png"

function Page(){
    return(
        <div>
            <div>
                <h1>Treat your pet (and you). It's on us!</h1>
                <p>Treat your pet to a healthy treat for <span>free</span> to kick off your Public Goods trial membership.</p>
                <h2>See what it's like to be a Public Goods member.</h2>
                <ul>
                    <li>Included in your bundle is a free 2-week membership that gives you unlimited access to our entire collection of sustainable essentials.</li>
                    <li>Take a load off. We make it easy for you to make better choices. Always included: eco-friendly products you can trust.</li>
                </ul>
                <button>Claim your free offer</button>
            </div>
            <div>
                <img src={image1}></img>
            </div>
            <div>
                <h1>Our Treat</h1>
                <div>
                    <img src={image3}></img>
                    <h2>Freeze Dried Minnows</h2>
                    <p>Healthy ingredients with nothing to hide.</p>
                </div>
                <div>
                    <img src={image3}></img>
                    <h2>Freeze Dried Minnows</h2>
                    <p>Healthy ingredients with nothing to hide.</p>
                </div>
            </div>
        </div>
    )
}

export default Page