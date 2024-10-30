'use client';

import React, { useState } from "react";

const ToDo: React.FC = () => {
    const [todo, setTodo] = useState<string>('');
    const [paragraphs, setParagraphs] = useState<string[]>([]);
    const [edit, setEdit] = useState<number | null>(null);
    const [editedText, setEditedText] = useState<string>('');
    const [checked, setChecked] = useState<boolean[]>([]);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (todo.trim()) {
            setParagraphs([...paragraphs, todo]);
            setTodo('');
        }
    };

    const removeItem = (index: number) => {
        setParagraphs([
            ...paragraphs.slice(0, index),
            ...paragraphs.slice(index + 1)
        ]);
        setChecked([
            ...checked.slice(0, index),
            ...checked.slice(index + 1)
        ])
    };

    const editParagraph = (index: number) => {
        setEdit(index);
        setEditedText(paragraphs[index]);
    };

    const saveEdit = (index: number) => {
        const updatedParagraphs = paragraphs.map((paragraph, i) =>
            i === index ? editedText : paragraph
        );
        setParagraphs(updatedParagraphs);
        setEdit(null);
        setEditedText('');
    };

    const toggleCheckbox = (index: number) => {
        const updatedChecked = [...checked];
        updatedChecked[index] = !updatedChecked[index];
        setChecked(updatedChecked);
    };

    return (
        <>
            <div className="flex flex-col gap-3">
                <div className=" flex items-center">
                    <div className="flex gap-2">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Add Todo"
                                value={todo}
                                onChange={(e) => setTodo(e.target.value)}
                                className="input input-bordered input-primary"
                            />
                        </form>
                        <button className="btn btn-square btn-outline" onClick={handleSubmit}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    {paragraphs.map((paragraph, index) => (
                        <div className="flex" key={index}>
                            <div className="flex items-center justify-center mr-2">
                                <label className="cursor-pointer label">
                                    <input type="checkbox" checked={checked[index]} onChange={() => toggleCheckbox(index)} className=" checkbox border-2 checkbox-lg checkbox-success" />
                                </label>
                            </div>
                            <div className={`bg-slate-700 w-full rounded-md ${checked[index] ? 'line-through text-gray-500' : ''}`}>

                                <div className="bg-slate-700 p-2 w-full rounded-md my-3">
                                    {edit === index ? (
                                        <input
                                            type="text"
                                            value={editedText}
                                            onChange={(e) => setEditedText(e.target.value)}
                                            className="input input-bordered w-full"
                                        />
                                    ) : (
                                        <p className=" text-xl">{paragraph}</p>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center ml-2 justify-center">
                                <button
                                    className="btn btn-error text-white"
                                    onClick={() => removeItem(index)}
                                >
                                    Delete
                                </button>

                                {edit === index ? (
                                    <button
                                        className="btn ml-2 btn-success"
                                        onClick={() => saveEdit(index)}
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        className="btn ml-2 btn-info"
                                        onClick={() => editParagraph(index)}
                                    >
                                        Edit
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ToDo;
