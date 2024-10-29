import React, { useState } from "react";
import ToDo from "./todoinput";

const Body = () => {

    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen">
                <div className="bg-primary p-4 rounded-md">
                    <ToDo />

                </div>
            </div>
        </>
    )

}

export default Body;