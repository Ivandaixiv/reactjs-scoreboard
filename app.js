const title = 'First React Element!';
const desc = 'I just learned how to create a React Node and Render it into the DOM';
const myTitleID = 'main-title';
const name = "Ivan";

const header = (
    <header>
        <h1 id={ myTitleID } >{ name }'s {title}</h1>
        <p>{ desc }</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root'),
);