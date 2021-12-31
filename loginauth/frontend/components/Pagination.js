import axios from 'axios';
import React,{useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = () => {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments?_page=1&limit=10').then(res => {
            setPosts(res.data)
        })
    },[])

    const fetchComments = async selectedPage => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${selectedPage}&limit=10`)
const data = await res.data;
return data;
    }

    const handlePageClick = async (data) => {
       var selectedPage = data.selected + 1;
       const commentsFromServer = await fetchComments(selectedPage)
       setPosts(commentsFromServer)
    }
   

    return (
        <div>
            <ul>
                {
                    posts.map(post => (<li key={post.id}>{post.name}</li>))
                }
            </ul>
          <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={3}
        pageCount={20}
        previousLabel="< previous"
        breakClassName={"break-me"}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}

      />
        </div>
    )
}

export default Pagination
