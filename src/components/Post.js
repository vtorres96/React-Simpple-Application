import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

function Post(props) {

    const mudaFonteAoPosicionarCursor = () => {
        document.getElementById(props.id).style.fontSize = '25px';
    }

    const retornaFonteAoRemoverCursor = () => {
        document.getElementById(props.id).style.fontSize = '16px';
    }

    return (
        <div id={props.id} className="post" onMouseOver={mudaFonteAoPosicionarCursor} onMouseOut={retornaFonteAoRemoverCursor}>
            <p>{props.post}</p>
            <p>Comentários({props.qtdComentarios})</p>
            
            <ul>
                {props.listaDeComentarios != null ?
                        props.listaDeComentarios.map((comentario, index) => <li key={comentario + index}>{comentario}</li> )
                    :
                        ""
                }
            </ul>
        </div>
    );
}

Post.defaultProps = {
    qtdComentarios: 0,
    listaDeComentarios: null
}

Post.propTypes = {
    qtdComentarios: PropTypes.number,
    post: PropTypes.string
}

export default Post;