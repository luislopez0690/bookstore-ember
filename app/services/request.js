import Service from '@ember/service';
import ENV from '../config/environment';
import $ from 'jquery';

export default Service.extend({
  request({ method, url, cb, data, errorCb }) {
    console.log('before sending request data: ', data);
    return $.ajax({
      url: `${ENV.apiURL}${url}`,
      method: method,
      data: data,
      success: function(data) {
        cb(data);
      },
      error: function(error) {
        errorCb(error);
        console.log('error in request service request: ', error);
      }
    });
  }
});