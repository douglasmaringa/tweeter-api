import Image from "next/image";
import react,{useState} from "react";
import axios  from "axios"
import ReactLoading from 'react-loading';

export default function IndexPage({type,color}) {
  const[search,setSearch]=useState("")
  const[data,setData] = useState([])
  const[error,setError]=useState(false)
  const[loading,setLoading]=useState(false)

  const getTweets = async()=>{
    setLoading(true)
  axios.post(`http://localhost:3000/api/getTweets`, {
      "name":search
    
}).then((response) => {
  //setData(response.data)
  const data2 = []
  response.data.map((m)=>{
    data2.push({"tweet":m.text,"likes":m.public_metrics.like_count})
  })
  
  var sortedData = [...data2].sort((a, b) => b.likes - a.likes)
  setData(sortedData)
  setLoading(false)
}).catch((error) => {
  console.error(error)
  setError(true)
  setLoading(false)
})
   
}
console.log(data)
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
     

      <h2 className="p-3 m-auto font-bold bg-yellow-300 md:text-2xl">
       My Best Tweets
      </h2>

      <p>
           Enter Your Username and hit Search
          </p>

          <div className="min-h-full flex items-center justify-center  px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full ">
   
    <div className="space-y-6" action="#" method="POST">
      
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label  className="sr-only">Search</label>
          <input value={search} onChange={(e)=>{setSearch(e.target.value)}}  name="email"  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter your tweeter @"/>
        </div>
        
      </div>

      

      

      <div>
        <button onClick={getTweets} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          
          Search
        </button>
      </div>

<div>
  {
  loading?(<>
  <h1>loading please wait a few seconds...............</h1>
  </>):(<></>)
  }
</div>

<div>
  {
  error?(<> <h2 className="mb-3 text-xl font-bold">Error could not find tweets</h2></>):(<></>)
  }
</div>


{
  data.map((e)=>(
    <div key={e.tweet} class="max-w-sm rounded overflow-hidden shadow-lg">
 
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Tweet</div>
    <p className="text-gray-700 text-base">
     {e.tweet}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{e.likes} likes</span>
   
  </div>
</div>
  ))
}

    </div>
  </div>
</div>
    </div>
  );
}
