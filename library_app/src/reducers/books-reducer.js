
var initialBookList = {
    bookList: [
        { id: 1, title: "Da Vinci Code", author: "Dan Brown", description: "Mystery Thriller Novel" },
        { id: 2, title: "Krishna Key", author: "Ashwin Sanghi", description: "Mystery Thriller" },
        { id: 3, title: "The Hunger Games", author: "Suzanne Collins", description: "American post-apocalyptic science fiction" }
    ]
};

export default function (state = initialBookList, action) {
    switch (action.type) {
        case "ADD_BOOK":

            var lastId = state.bookList.length;
            var latestId;
            if (lastId !== 0) {
                latestId = state.bookList[lastId - 1].id;
            }else{
                latestId=0;
            }
            action.payload.id = latestId + 1;
            state = {
                ...state,
                bookList: [...state.bookList, action.payload]
            }
            break;
        case "DELETE_BOOK":
            var newState = { ...state };
            var bookIndex = newState.bookList.findIndex(function (book, index) {
                if (book.id === action.payload.id) {
                    return true;
                }
                return false;
            });
            newState.bookList.splice(bookIndex, 1);
            state = newState;
            break;
    }
    return state;
}


