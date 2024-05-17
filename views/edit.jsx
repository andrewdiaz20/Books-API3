const React = require('react')
const Def = require('../default.jsx')

function edit_form(data) {
  return (
    <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
      <div className="row">
        <div className="form-group col-sm-6">
          <label htmlFor="name">Place Name</label>
          <input id="name"/>
        </div>
        <div className="form-group col-sm-6">
          <label htmlFor="pic">Place Picture</label>
          <input id="pic"/>
        </div>
      </div>

    </form>

  )
}

module.exports = edit_form