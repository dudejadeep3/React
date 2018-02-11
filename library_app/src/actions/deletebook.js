export function deleteBook(book){
    return{
        type:'DELETE_BOOK',
        payload:book
    }
}