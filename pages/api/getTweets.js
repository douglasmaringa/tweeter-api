import axios  from "axios"

const getTweets = async(req,res)=>{
const name = req.body.name;
console.log(name)

axios.get(`https://api.twitter.com/2/users/by/username/${name}`, {
  headers: {
    'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
  }
})
.then((response) => {
  console.log(response.data.data.id)
  
  axios.get(`https://api.twitter.com/2/users/${response.data.data.id}/tweets?tweet.fields=public_metrics`, {
  headers: {
    'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
  }
})
.then((response) => {
  console.log(response.data.data)
 return res.send(response.data.data);
})
.catch((error) => {
  console.error(error)
  return res.send("could not find tweets");
})
})
.catch((error) => {
  console.error(error)
  return res.send("could not find user");
})
   
}

export default getTweets;