import React from 'react';
import data from "../data";
import Typeahead from './Typeahead';




function App({ books, handleSelect }) {
    return (

        <Typeahead books={data.books} handleSelect={(suggestion) => {
            window.alert(suggestion)
        }} />

    )


}

export default App;
