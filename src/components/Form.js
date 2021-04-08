import React from 'react';

function Form({ inputText, setInputText, setQuery }) {
    function updateText(e) {
        setInputText(e.target.value);
    }

    function getText(e) {
        e.preventDefault();
        setQuery(inputText);
        setInputText("");
    }
    

    return(
        <div className="main">
            <form onSubmit={getText}>
                <input
                    placeholder="Digite sua cidade"
                    value={inputText}
                    onChange={updateText}
                    type="text"
                    required
                />
                <button> Pesquisar </button>
            </form>
        </div>
    );
}

export default Form;