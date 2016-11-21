import React, { Component } from 'react'
//Здесь явно лишний стейт. Убери его и перепиши компонент на Functional Component
// готово
function Comment(props) {
        return (
          <span>
            <b> {props.comment.user} </b>
            <p> {props.comment.text} </p>
            </span>
        );
}

export default Comment
