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

    return (

        <div className="">
            <div className="flex flex-col w-fit">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Add Todo" value={todo} onChange={(e) => setTodo(e.target.value)} onKeyDown={(e) => e.key === 'Enter' ? handleSubmit(e) : null} className="input input-bordered input-primary" />
                </form>
                <div className="flex justify-end">
                    <button className="btn btn-square btn-outline" onKeyDown={(e) => e.key === 'Enter' ? handleSubmit(e) : null}>
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
            <div>
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    );
};

export default ToDo;