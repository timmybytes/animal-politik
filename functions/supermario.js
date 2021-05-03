exports.handler = async () => {
  console.log('function ran');

  const data = { name: 'mario', age: 35, job: 'plumber' };

  // return response to browser
  return {
    statusCode: 200,
    cody: JSON.stringify(data),
  };
};
