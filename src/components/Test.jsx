import React, { useEffect, useState } from 'react'

const Test = () => {
    const [drag,setdrag] = useState(0)
    const [a, setA] = useState([
        { name: "lol", id: 1 },
        { name: "mol", id: 2 },
        { name: "fol", id: 3 }
    ]);
    const [b, setB] = useState([
        { name: "bol", id: 4 }
    ]);
    const handleDragStart = (e, id, source) => {
        e.dataTransfer.setData("id", id);
        e.dataTransfer.setData("source", source);
    };
    const handleDrop = (e, target) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("id");
        const source = e.dataTransfer.getData("source");
        const item = source === "a" ? a.find(item => item.id.toString() === id) : b.find(item => item.id.toString() === id);
        
        if (item) {
            if (target === "a") {
                const updatedA = [...a, item];
                const updatedB = b.filter(item => item.id.toString() !== id);
                setA(updatedA);
                setB(updatedB);
            } else {
                const updatedA = a.filter(item => item.id.toString() !== id);
                const updatedB = [...b, item];
                setA(updatedA);
                setB(updatedB);
            }
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div className='flex gap-20 mx-10'>
            <div className='bg-gray-400' onDrop={(e) => handleDrop(e, "a")} onDragOver={handleDragOver}>
                {a.map((ele) => (
                    <p key={ele.id} draggable onDragStart={(e) => handleDragStart(e, ele.id, "a")} className='p-3 bg-red-500 cursor-pointer mb-3'>{ele.name}</p>
                ))}
            </div>
            <div className='bg-gray-400' onDrop={(e) => handleDrop(e, "b")} onDragOver={handleDragOver}>
                {b.map((ele) => (
                    <p key={ele.id} draggable onDragStart={(e) => handleDragStart(e, ele.id, "b")} className='p-3 bg-red-500 cursor-pointer mb-3'>{ele.name}</p>
                ))}
            </div>
        </div>
    );
};


export default Test