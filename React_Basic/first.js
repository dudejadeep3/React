'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*Component w/o class*/
function ListItem(props) {
  return React.createElement(
    'li',
    { onClick: props.onClick },
    props.item
  );
}

var ShoppingList = function (_React$Component) {
  _inherits(ShoppingList, _React$Component);

  function ShoppingList() {
    _classCallCheck(this, ShoppingList);

    var _this = _possibleConstructorReturn(this, (ShoppingList.__proto__ || Object.getPrototypeOf(ShoppingList)).call(this));

    _this.state = {
      list: ['unicycle', 'binoculars', 'pen']
    };
    return _this;
  }

  _createClass(ShoppingList, [{
    key: 'onClick',
    value: function onClick(index) {
      var newList = this.state.list.slice();
      newList.splice(index, 1);
      this.setState({ list: newList });
    }
  }, {
    key: 'addItem',
    value: function addItem() {
      var item = document.getElementById('listItem').value;
      document.getElementById('listItem').value = '';
      var newList = this.state.list.slice();
      newList.push(item);
      this.setState({ list: newList });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var listItems = [];
      this.state.list.forEach(function (item, i) {
        listItems.push(React.createElement(ListItem, { item: item, onClick: function onClick() {
            return _this2.onClick(i);
          } }));
      });
      return React.createElement(
        'div',
        { className: 'shopping-list' },
        React.createElement(
          'h1',
          null,
          'Shopping List for ',
          this.props.name
        ),
        React.createElement('input', { type: 'text', id: 'listItem', placeholder: 'Add Item' }),
        React.createElement(
          'button',
          { type: 'button', onClick: function onClick() {
              return _this2.addItem();
            } },
          'Add'
        ),
        React.createElement(
          'ul',
          null,
          listItems
        )
      );
    }
  }]);

  return ShoppingList;
}(React.Component);

ReactDOM.render(React.createElement(ShoppingList, { name: 'Beau' }), document.getElementById('container'));