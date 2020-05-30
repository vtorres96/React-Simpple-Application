import React from 'react';

import Post from './Post';

function Feed(){

    return (
        <div id="feed" className="x">
            <Post id="post-1" post="Post 1" qtdComentarios={10} />
            <Post id="post-2" listaDeComentarios={["Comentário 1 do Post 2", "Comentário 2 do Post 2"]} post="Post 2" qtdComentarios={100} />
            <Post id="post-3" listaDeComentarios={["Comentário 1 do Post 4", "Comentário 2 do Post 3"]} post="Post 3" qtdComentarios={140} />
            <Post id="post-4" listaDeComentarios={["Comentário 1 do Post 4", "Comentário 2 do Post 4"]} post="Post 4" qtdComentarios={120} />
        </div>
    );
    
}

export default Feed;