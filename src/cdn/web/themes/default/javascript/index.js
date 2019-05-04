// 定义程序类
class Program {
  constructor(language) {
    this.language = language;
  }
  logLanguage() {
    console.log(this.language);
  }
}
// 定义网站类，继承自 Program
class WebSite extends Program {
  constructor(language, domainName) {
    super(language);
    this.domainName = domainName;
  }
  name = 'peter';
  logDomainName () {
    console.log(this.domainName);
  }
}
// 定义网站类型对象实例 mySite
var mySite = new WebSite("JavaScript", "www.excelib.com");
// 使用 mySite 调用父类方法 logLanguage
mySite.logLanguage();
// 使用 mySite 调用自身的方法 logDomainName
mySite.logDomainName();



// "use strict";

// function _instanceof(left, right) { 
//   if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { 
//     return right[Symbol.hasInstance](left); 
//   } else { 
//     return left instanceof right; 
//   } 
// }

// function _classCallCheck(instance, Constructor) { 
//   if (!_instanceof(instance, Constructor)) { 
//     throw new TypeError("Cannot call a class as a function"); 
//   } 
// }

// function _defineProperties(target, props) { 
//   for (var i = 0; i < props.length; i++) { 
//     var descriptor = props[i]; 
//     descriptor.enumerable = descriptor.enumerable || false; 
//     descriptor.configurable = true; 
//     if ("value" in descriptor) descriptor.writable = true; 
//     Object.defineProperty(target, descriptor.key, descriptor); 
//   } 
// }

// function _createClass(Constructor, protoProps, staticProps) { 
//   if (protoProps) _defineProperties(Constructor.prototype, protoProps); 
//   if (staticProps) _defineProperties(Constructor, staticProps); 
//   return Constructor; 
// }

// var Program =
// /*#__PURE__*/
// function () {
//   debugger;
//   function Program(language) {
//     debugger;
//     _classCallCheck(this, Program);

//     this.language = language;
//   }

//   _createClass(Program, [{
//     key: "logLanguage",
//     value: function logLanguage() {
//       console.log(this.language);
//     }
//   }]);

//   return Program;
// }();

// var mySite = new Program("JavaScript");