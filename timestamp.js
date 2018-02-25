module.exports = {
  getTimestamp: function (timestamp) {
    return getTimestamp(timestamp);
  },

};



function getTimestamp(timestamp) {
  
  var result = {
    unix: null,
    natural: null
  };
  var date;
  // check if just numbers
  if (!isNaN(parseInt(timestamp))) {
    //convert to natural
    date = new Date(parseInt(timestamp) * 1000);
  
  } else {
    // convert to unix
    date = new Date(timestamp);
    
  }
  // if date is timestamp
  if (!isNaN(date.getTime())) {
      result.unix = date.getTime() / 1000 | 0;
      result.natural = getNaturalDate(date);
      
  }
  
  return result;
  
};

function getNaturalDate(date) {
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Obtober', 'November', 'December'];
	return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}