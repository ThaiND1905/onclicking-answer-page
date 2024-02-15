import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import React from 'react'
export default function Codes() {
    const codeString = `import React, { useState } from 'react'
    const fullname = (name, surname) =>{
        let fullname = surname + ' ' + name;
        return fullname;
    }
    export const Question_1 = () => {
        const [name, setName] = useState('');
        const [surname, setSurname] = useState('');
        return (
            <form>
                <div>
                    <label>Add User's name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Add User's surname</label>
                    <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} required />
                </div>
                <div>
                    <label>Full Name</label>
                    <input disabled value= {fullname(name, surname)} />
                </div>
            </form>
      )
    }
    `;
    return (
        <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={{padding:"25px",marginTop : "2rem",borderRadius:"10px"}}>
        {codeString}
        </SyntaxHighlighter>
  );
}