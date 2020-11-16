function styled(static, ...dynamic) {
    let res = '';
    for(let i = 0; i < static.length; i +=1) {
        res += `${static[i]}${i < static.length -1 ? dynamic[i] : ""}`;
    }
    const tmp = res.trim();
    const tmpArr = tmp.split(';');
    let result = {};
    tmpArr.forEach(item => {
      if (item) {
      const arr = item.split(':');
      result[to(arr[0])] = arr[1].trim()  
      }
      
    })
    return result;
  }
  
  function to(str) {
     return str.replace(/^\-/, '').replace(/\-(\w)(\w+)/g, function(a, b,c){
     return b.toUpperCase() + c.toLowerCase();
    });
  }