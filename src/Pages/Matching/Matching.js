import { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import RenderCharacter from "../../components/RenderCharacter/RenderCharacter";
import React, { Component } from "react";
function Matching() {
    const [skin, setSkin] = useState('default')

    const Model = useMemo(
        () => {
            return (
                <RenderCharacter skin={skin} />
            )
        }
    )
    return (



        <div ClassName="">
            <div className="z-40">
                {Model}
                <div className="flex justify-center">
                     <button onClick={() => {
                        setSkin('https://i.imgur.com/VOSreR4.jpg')
                        console.log(skin)
                    }} className="rounded-full h-8 w-8 bg-red-500 m-2 hover:border-2"></button>
                    <button onClick={() => {
                        setSkin('https://i.imgur.com/gEYieqh.png')
                        console.log(skin)
                    }} className="rounded-full h-8 w-8 bg-green-500 m-2 hover:border-2"></button >

                    <button onClick={() => {
                        setSkin('https://i.imgur.com/Z4Q7nZR.png')
                        console.log(skin)
                    }} className="rounded-full h-8 w-8 bg-blue-500 m-2 hover:border-2"></button >

                    <button onClick={() => {
                        setSkin('https://i.imgur.com/gEYieqh.png')
                        console.log(skin)
                    }} className="rounded-full h-8 w-8 bg-yellow-500 m-2 hover:border-2"></button >

                    <button onClick={() => {
                        setSkin('https://i.imgur.com/Z4Q7nZR.png')
                        console.log(skin)
                    }} className="rounded-full h-8 w-8 bg-purple-500 m-2 hover:border-2"></button >
                </div>
            </div>


            {/* <div className="flex justify-center gap-x-2 m-4">
                <button onClick={() => {

                }}
                    className="bg-gray-200 hover:bg-black hover:text-white active:bg-black active:text-white px-4 py-2 rounded-full">TOPS</button>
                <button className="bg-gray-200 hover:bg-black hover:text-white active:bg-black active:text-white px-4 py-2 rounded-full">PANTS</button>
            </div> */}
        </div>
    )
} export default Matching;