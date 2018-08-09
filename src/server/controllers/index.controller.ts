

const getIndex = async (ctx:any) => {
  await fetch('localhost:9991/')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });

  ctx.response.body = 123
}

export {
  getIndex
}