const React = require('react')
const Def = require('./default')

function error404(){
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>oops,sorry we cant find the page youre looking for!</p>
        </main>
    </Def>
}

module.exports = error404