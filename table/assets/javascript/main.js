'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//document.write(data.slice(0,10).join("<br/ >"))

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this));

    _this.state = { q: '' };
    return _this;
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'table',
          null,
          React.createElement(
            'tbody',
            null,
            _.filter(data, this.f.bind(this)).slice(0, 10).map(function (row) {
              return React.createElement(
                'tr',
                { key: row[0] },
                React.createElement(
                  'td',
                  null,
                  row[0]
                ),
                React.createElement(
                  'td',
                  null,
                  row[1]
                ),
                React.createElement(
                  'td',
                  null,
                  row[2]
                ),
                React.createElement(
                  'td',
                  null,
                  row[3]
                )
              );
            })
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement('input', { onChange: this.onchange.bind(this), value: this.q })
        )
      );
    }
  }, {
    key: 'onchange',
    value: function onchange(e) {
      this.setState({ q: e.target.value });
    }
  }, {
    key: 'f',
    value: function f(row) {
      if (!this.state.q.trim()) return true;
      return row[1].toLowerCase().indexOf(this.state.q.toLowerCase()) >= 0;
    }
  }]);

  return Table;
}(React.Component);

ReactDOM.render(React.createElement(Table, null), document.getElementById('root'));