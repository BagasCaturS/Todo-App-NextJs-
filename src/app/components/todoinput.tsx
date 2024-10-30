'use client';

import React, { useState } from "react";


const ToDo: React.FC = () => {

    const [todo, setTodo] = useState<string>('');
    const [paragraphs, setParagraphs] = useState<String[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (todo.trim()) {
            setParagraphs([...paragraphs, todo]);
            setTodo('');
        };
    };

    const removeItem = (index: any) => {
        setParagraphs([
            ...paragraphs.slice(0, index),
            ...paragraphs.slice(index + 1)
        ])
    }
    return (

        <>
            <div>
                <div className="flex  items-center">
                    <div className="flex gap-2">
                        <form action="" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Add Todo" value={todo} onChange={(e) => setTodo(e.target.value)} onKeyDown={(e) => e.key === 'Enter' ? handleSubmit(e) : null} className="input input-bordered input-primary" />
                        </form>
                        <div className="flex justify-end">
                            <button className="btn btn-square btn-outline" onClick={handleSubmit}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    {paragraphs.map((paragraph, index) => (
                        <div className="flex">
                            <div className="flex items-center justify-center mr-2">
                                <label className="cursor-pointer label">
                
                                    <input type="checkbox" className="checkbox border-2 checkbox-lg checkbox-success" />
                                </label>
                            </div>
                            <div className="bg-slate-700 p-4 w-full rounded-md my-3">
                                <p key={index}>{paragraph}</p>
                            </div>
                            <div className="flex items-center ml-2 justify-center">
                                <button className="btn btn-error text-white" onClick={() => removeItem(index)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ToDo;