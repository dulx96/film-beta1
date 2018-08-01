// import appRoot from 'app-root-path';

/**
 * Settings
 *
 * @author Long Nguyen (longnp95@gmail.com)
 * @date 2018-07-12
 * @version 0.1
 */
export default class Settings {
  /**
   * Constructor
   *
   * @param {Object} overrides - settings overrides. Useful for testing.
   */
  constructor(overrides) {
    this.PORT = 3000;

    // Facebook login
    this.FB_LOGIN_PATH = '/api/auth/facebook';
    this.FB_CALLBACK_PATH = '/api/auth/facebook/callback';
    this.FB_APPID = 'fb_appid';
    this.FB_APPSECRET = 'fb_appsecret';

    this.SERVER_API = 'http://35.236.172.71:8000/api';
    this.CDN = 'http://cdn.ekiio.com';

    Object.assign(this, overrides);
  }
}
