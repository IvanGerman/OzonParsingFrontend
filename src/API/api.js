const baseURL = 'http://localhost:5000/api/';


//POST request to get bonus divs data from otzivi-pages
export const getBonusData = async (event) => {
  console.log('getBonusData')
  await fetch(baseURL + 'books', {
    method: 'POST', 
    mode: 'cors', 
    headers: {
      'Content-Type': 'application/json',
      
    },
    body: JSON.stringify({
      "link": "4444444",
      "message": "8888888"
  }) 
  })
  .then((response) => { 
    return response.json();
  })
  .then((data) => {
    console.log(data);
    return data;
  });
}


//all below are just examples to look up from
// GET request for all messages from mongoDB
export async function getAllMessages() { 

  return await fetch(baseURL + 'messages', { 
    method: 'GET', 
    mode: 'cors', 
    headers: {
      'Content-Type': 'application/json',
      
    }
  })
  .then( async (response) => { 
    const responseJsoned = await response.json();
    return responseJsoned;
  })
};


// POST request to save a new message in mongoDB
export async function postNewMessageToMongo(newMessage) {

  return await fetch(baseURL + 'messages', {
    method: 'POST', 
    mode: 'cors', 
    headers: {
      'Content-Type': 'application/json',
      
    },
    body: JSON.stringify(newMessage) 
  })
  .then((response) => { 
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
};


// PUT request to update a new message in mongoDB
export async function updateMessage(id, newMessage) {

  return await fetch(`${baseURL}messages/${id}`, {
    method: 'PUT', 
    mode: 'cors', 
    headers: {
      'Content-Type': 'application/json',
      
    },
    body: JSON.stringify(
      {'message': newMessage})
  })
}




// DELETE request to delete a new message in mongoDB
export async function deleteMessageRequest(messageID) {
    
  let result = await fetch(`${baseURL}messages/${messageID}`, {
    method: 'DELETE', 
    mode: 'cors', 
    headers: {
      'Content-Type': 'application/json',
      
    }
  });
  const status = result.status;                                               
  return status;                                                                           
};