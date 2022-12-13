
const GetApi = async () => {
    
    try {
      const response = await fetch('https://62d9b9919eedb6996361aee7.mockapi.io/Laptos');
      const data = await response.json();
      return data;
    } 
    
    catch (error) {
      return error;
    }
  };


export default GetApi

