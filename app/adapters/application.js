import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.apiURL,
  ajax: function(url, method, hash) {
    hash = hash || {};
    hash.crossDomain = true;
    return this._super(url, method, hash);
  }
});