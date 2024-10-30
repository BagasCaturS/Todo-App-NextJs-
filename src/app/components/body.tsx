import React, { useState } from "react";
import ToDo from "./todoinput";

const Body = () => {

    return (
        <>
            <div className="flex flex-col bg-slate-500 justify-center items-center min-h-screen ">
                <h1 className="text-3xl font-bold ">Todo App</h1>
                <div className="shadow-lg p-4 rounded-md w-1/2">
                    <ToDo />

                </div>
            </div>
        </>
    )

}

export default Body;