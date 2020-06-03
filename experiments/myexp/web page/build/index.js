"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _pushkinClient = _interopRequireDefault(require("pushkin-client"));

var _pushkinJspsych = _interopRequireDefault(require("pushkin-jspsych"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _experiment = _interopRequireDefault(require("./experiment"));

var _jsYaml = _interopRequireDefault(require("js-yaml"));

require("./assets/experiment.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var expConfig = _jsYaml["default"].safeLoad(Buffer("ZXhwZXJpbWVudE5hbWU6ICZmdWxsTmFtZSAnbXlleHAgRXhwZXJpbWVudCcKc2hvcnROYW1lOiAmc2hvcnROYW1lICdteWV4cCcgIyBUaGlzIHNob3VsZCBiZSB1bmlxdWUgYXMgaXRzIHVzZWQgZm9yIHVybHMsIGV0Yy4KYXBpQ29udHJvbGxlcnM6ICMgVGhlIGRlZmF1bHQgZXhwb3J0IGZyb20gZWFjaCBvZiB0aGVzZSBsb2NhdGlvbnMgd2lsbCBiZSBhdHRhY2hlZCB0byBhIHB1c2hraW4gQVBJCiAgLSBtb3VudFBhdGg6ICpzaG9ydE5hbWUKICAgIGxvY2F0aW9uOiAnYXBpIGNvbnRyb2xsZXJzJwogICAgbmFtZTogJ215Y29udHJvbGxlcicKd29ya2VyOgogIGxvY2F0aW9uOiAnd29ya2VyJwogIHNlcnZpY2U6ICMgd2hhdCB0byBhZGQgYXMgYSBzZXJ2aWNlIGluIG1haW4gY29tcG9zZSBmaWxlCiAgICBpbWFnZTogKnNob3J0TmFtZQogICAgbGlua3M6CiAgICAgIC0gbWVzc2FnZS1xdWV1ZQogICAgICAtIHRlc3RfZGIKICAgIGVudmlyb25tZW50OgogICAgICAtICJBTVFQX0FERFJFU1M9YW1xcDovL21lc3NhZ2UtcXVldWU6NTY3MiIKICAgICAgLSAiREJfVVNFUj1wb3N0Z3JlcyIKICAgICAgLSAiREJfUEFTUz0iCiAgICAgIC0gIkRCX1VSTD10ZXN0X2RiIgogICAgICAtICJEQl9OQU1FPXRlc3RfZGIiCndlYlBhZ2U6CiAgbG9jYXRpb246ICd3ZWIgcGFnZScKbWlncmF0aW9uczoKICBsb2NhdGlvbjogJ21pZ3JhdGlvbnMnCnNlZWRzOgogIGxvY2F0aW9uOiAnJwojIFVzZWQgZm9yIG1pZ3JhdGlvbiBhbmQgc2VlZCBjb21tYW5kcyB2aWEgbWFpbiBDTEkKIyBOb3RlIHRoYXQgdGhlc2UgbWlnaHQgYmUgZGlmZmVyZW50IHRoYW4gdGhvc2UgZ2l2ZW4gdG8gdGhlIHdvcmtlciwKIyBTaW5jZSBpdCdzIHJ1bm5pbmcgaW5zaWRlIGEgbGlua2VkIGRvY2tlciBjb250YWluZXIKZGF0YWJhc2U6ICdsb2NhbHRlc3RkYicKbG9nbzogJ2xvZ281MTIucG5nJwp0YWdsaW5lOiAnQmUgYSBjaXRpemVuIHNjaWVudGlzdCEgVHJ5IHRoaXMgcXVpei4nCmR1cmF0aW9uOiAnJwo=", "base64"), 'utf8');

var pushkin = new _pushkinClient["default"]();
window.jsPsych = _pushkinJspsych["default"];

var mapStateToProps = function mapStateToProps(state) {
  return {
    userID: state.userInfo.userID
  };
};

var quizComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(quizComponent, _React$Component);

  function quizComponent(props) {
    var _this;

    _classCallCheck(this, quizComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(quizComponent).call(this, props));
    _this.state = {
      loading: true
    };
    return _this;
  }

  _createClass(quizComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startExperiment();
    }
  }, {
    key: "startExperiment",
    value: function startExperiment() {
      var timeline;
      return regeneratorRuntime.async(function startExperiment$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.setState({
                experimentStarted: true
              });

              _pushkinJspsych["default"].data.addProperties({
                user_id: this.props.userID
              }); //See https://www.jspsych.org/core_library/jspsych-data/#jspsychdataaddproperties


              _context.next = 4;
              return regeneratorRuntime.awrap(pushkin.connect('/api/myexp'));

            case 4:
              _context.next = 6;
              return regeneratorRuntime.awrap(pushkin.prepExperimentRun(this.props.userID));

            case 6:
              _context.next = 8;
              return regeneratorRuntime.awrap(pushkin.loadScripts(['https://cdn.jsdelivr.net/gh/jspsych/jsPsych@6.0.4/plugins/jspsych-html-keyboard-response.js']));

            case 8:
              timeline = pushkin.setSaveAfterEachStimulus(_experiment["default"]);
              _context.next = 11;
              return regeneratorRuntime.awrap(_pushkinJspsych["default"].init({
                display_element: document.getElementById('jsPsychTarget'),
                timeline: timeline,
                on_finish: this.endExperiment.bind(this)
              }));

            case 11:
              document.getElementById('jsPsychTarget').focus();
              this.setState({
                loading: false
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "endExperiment",
    value: function endExperiment() {
      return regeneratorRuntime.async(function endExperiment$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              document.getElementById("jsPsychTarget").innerHTML = "Processing...";
              _context2.next = 3;
              return regeneratorRuntime.awrap(pushkin.tabulateAndPostResults(this.props.userID, expConfig.experimentName));

            case 3:
              document.getElementById("jsPsychTarget").innerHTML = "Thank you for participating!";

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "render",
    value: function render() {
      var match = this.props.match;
      return _react["default"].createElement("div", null, this.state.loading && _react["default"].createElement("h1", null, "Loading..."), _react["default"].createElement("div", {
        id: "jsPsychTarget"
      }));
    }
  }]);

  return quizComponent;
}(_react["default"].Component);

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(quizComponent));

exports["default"] = _default;