const { guardarArchivo } = require('./guardar')
const { comments } = require('./APiS/comments')
const { photos } = require('./APiS/photos')
const { albums } = require('./APiS/albums')
const { todos } = require('./APiS/todos')
const { posts } = require('./APiS/posts')


const argumentoEntrada = process.argv.slice(2)
const opcion = argumentoEntrada[0]

const ejecutar = async () => {
    switch(opcion) {
        case 'comments':
            {
                const datos = await comments()
                await guardarArchivo('comments.json', datos);
            }
        break;
        case 'photos':
            {
                const datos = await photos()
                await guardarArchivo('photos.json', datos);
            }
        break; 
        case 'albums':
            {
                const datos = await albums()
                await guardarArchivo('albms.json', datos);
            }
        break; 
        case 'todos':
            {
                const datos = await todos()
                await guardarArchivo('todos.json', datos);
            }
        break; 
        case 'posts':
            {
                const datos = await posts()
                await guardarArchivo('posts.json', datos);
            }
        break; 
        default:
            console.log('Opcion no valida.')
    }
}

ejecutar()