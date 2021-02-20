import React from 'react'

export default function TodoFilterItem ({ name, filterTodos, filter = 'all' }) {
    function handleFilter () {
        filterTodos(name)
    }

    const style = {
        color: 'blue',
        cursor: 'pointer',
        fontWeight: (filter === name) ? 'bold' : 'normal'
    }

    return <span style={style} onClick={handleFilter}>{name}</span>
}