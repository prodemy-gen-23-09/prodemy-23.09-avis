// const getAllPosts = async () => {
//     try {
//         const response = await axios.get('https://dummyjson.com/products');
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllPosts();

// const getPosts = async () => {
//     try {
//         const response = await axios.get('https://dummyjson.com/products');
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllPosts();

const putAllPost = async () => {
    try {
        const response = await axios.put ('https://dummyjson.com/products/1');
        console.log (response);
    } catch (error) {
        console.log(error);
    }

}

const deleteData = async () => {
    try {
        const response = await axios.delete('https://dummyjson.com/products/1');
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

deleteData();

