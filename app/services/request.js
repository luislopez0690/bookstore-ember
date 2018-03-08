import Service from '@ember/service';
import ENV from '../config/environment';
import $ from 'jquery';

export default Service.extend({
  request({ method, url, cb, data, errorCb }) {
    return $.ajax({
      url: `${ENV.apiURL}${url}`,
      method: method,
      data: data,
      success: function(data) {
        cb(data);
      },
      error: function(error) {
        errorCb(error);
      }
    });
  }
});