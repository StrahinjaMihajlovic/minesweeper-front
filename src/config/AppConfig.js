// put all app globals here
class AppConfig {
  static user = '';
  static backUrl = 'http://localhost';
  static jwt = typeof document.cookie != 'undefined' ? document.cookie.token : '';
}

export default AppConfig