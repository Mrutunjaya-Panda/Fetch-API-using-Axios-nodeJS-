// Please do not change the prewritten code

const Solution = async () => {
  // Write your code here
  const axios = require('axios');
  try{
    const response = await axios.get('https://api.codingninjas.com/api/v3/event_tags');
    console.log(typeof response);
    console.log(response.data);
  }
  catch(error){
    console.error('Error fetching event tags:', error);
  }
};
Solution();
module.exports = Solution;
