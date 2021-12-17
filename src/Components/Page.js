import React from "react"
import image1 from "../Pictures/cat_image1_desktop.png"
import image3 from "../Pictures/cat_treats_fd_minnows_01 3.png"
import image2 from "../Pictures/cat_image2_desktop.png"

function Page(){
    return(
        <div id="body">
            <div id="treat-your-pet">
                <h1>Treat your pet (and you). It's on us!</h1>
                <p>Treat your pet to a healthy treat for <span>free</span> to kick off your Public Goods trial membership.</p>
                <h2>See what it's like to be a Public Goods member.</h2>
                <ul>
                    <li>Included in your bundle is a free 2-week membership that gives you unlimited access to our entire collection of sustainable essentials.</li>
                    <li>Take a load off. We make it easy for you to make better choices. Always included: eco-friendly products you can trust.</li>
                </ul>
                <button>Claim your free offer</button>
            </div>
            <div id="image-1">
                <img id="cat-1" src={image1}></img>
            </div>
            <div id="minnows-section">
                <h1>Our Treat</h1>
                <div id="minnows-1">
                    <img src={image3}></img>
                    <h2>Freeze Dried Minnows</h2>
                    <p>Healthy ingredients with nothing to hide.</p>
                </div>
                <div id="minnows-2">
                    <img src={image3}></img>
                    <h2>Freeze Dried Minnows</h2>
                    <p>Healthy ingredients with nothing to hide.</p>
                </div>
            </div>
            <div id="image-2">
                <img src={image2}></img>
            </div>
            <div id="pet-approved">
                <h1>Pet-Approved</h1>
                <h2>It feels good to be a member.</h2>
                <p>After your free trial, become a full-time member with benefits for $59 a year.</p>
                <ul>
                    <li>Cancel anytime during your free trial.</li>
                    <li>Free shipping on orders over $45.</li>
                    <li>Direct-to-consumer prices on hundreds of premium products.</li>
                </ul>            
            </div>
        </div>
    )
}

export default Page