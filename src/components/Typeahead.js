import React, { useState } from 'react'
import { InputContainer, Input, Button, List, InputAndResults, Category, Prediction } from "./Styles"



//access data with props.books.

const Typeahead = (props) => {

    const [input, setInput] = useState("");
    const [selection, setSelection] = React.useState(0);
    let books = props.books;

    let filtered = [];

    if (input.length > 1) {
        filtered = books.filter(book => book.title.toUpperCase().includes(input.toUpperCase()));

    }






    const handleClear = () => {
        setInput("");
    }
    return (
        <div>
            <InputAndResults>
                <InputContainer>
                    <Input

                        onKeyDown={e => {

                            if (e.key === "ArrowUp") {
                                setSelection(selection - 1);
                                console.log("arrow UP")
                            } else if (e.key === "ArrowDown") {
                                setSelection(selection + 1)
                                console.log("Arrow DOWN")
                            } else if (e.key === "Enter") {
                                props.handleSelect(filtered[selection].title)
                            }
                        }}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button onClick={handleClear}>Clear</Button>
                </InputContainer >

                <List>
                    {filtered.map((book, id) => {


                        const isSelected = (id === selection);


                        const slicedBook = book.title.slice(book.title.indexOf(input) + input.length, book.title.length)

                        return (
                            <li
                                style={{ background: isSelected ? 'hsla(50deg, 100%, 80%, 0.25)' : 'transparent' }}
                                onClick={() => props.handleSelect(book.title)}
                                key={book.id}
                                index={id}
                                onMouseEnter={() => {
                                    setSelection(id)
                                    console.log(selection)
                                }}>

                                <span>
                                    {input.toLowerCase()}
                                    <Prediction>{slicedBook}</Prediction>
                                </span>

                                <Category> <span>in</span> {book.categoryId}</Category>
                            </li>
                        )
                    })}
                </List>
            </InputAndResults>



        </div >


    )
}

export default Typeahead;