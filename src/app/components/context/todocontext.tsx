// // TodoContext.tsx
// import React, { createContext, useContext, useState } from 'react';

// interface TodoContextType {
//     todo: string;
//     setTodo: React.Dispatch<React.SetStateAction<string>>;
//     paragraphs: string[];
//     addTodo: () => void;
// }

// const TodoContext = createContext<TodoContextType | undefined>(undefined);

// export const TodoProvider: React.FC = ({ children }) => {
//     const [todo, setTodo] = useState<string>('');
//     const [paragraphs, setParagraphs] = useState<string[]>([]);

//     const addTodo = () => {
//         if (todo.trim()) {
//             setParagraphs([...paragraphs, todo]);
//             setTodo('');
//         }
//     };

//     return (
//         <TodoContext.Provider value={{ todo, setTodo, paragraphs, addTodo }}>
//             {children}
//         </TodoContext.Provider>
//     );
// };

// export const useTodo = () => {
//     const context = useContext(TodoContext);
//     if (context === undefined) {
//         throw new Error('useTodo must be used within a TodoProvider');
//     }
//     return context;
// };
