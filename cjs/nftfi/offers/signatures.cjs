"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _account = /*#__PURE__*/new WeakMap();

var _ethers = /*#__PURE__*/new WeakMap();

var _config = /*#__PURE__*/new WeakMap();

var OffersSignatures = /*#__PURE__*/function () {
  function OffersSignatures() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, OffersSignatures);

    _classPrivateFieldInitSpec(this, _account, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _ethers, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _config, {
      writable: true,
      value: void 0
    });

    (0, _classPrivateFieldSet2["default"])(this, _account, options === null || options === void 0 ? void 0 : options.account);
    (0, _classPrivateFieldSet2["default"])(this, _ethers, options === null || options === void 0 ? void 0 : options.ethers);
    (0, _classPrivateFieldSet2["default"])(this, _config, options === null || options === void 0 ? void 0 : options.config);
  }

  (0, _createClass2["default"])(OffersSignatures, [{
    key: "getV2OfferSignature",
    value: function () {
      var _getV2OfferSignature = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(options) {
        var signature;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                signature = (0, _classPrivateFieldGet2["default"])(this, _account).sign((0, _classPrivateFieldGet2["default"])(this, _ethers).utils.arrayify((0, _classPrivateFieldGet2["default"])(this, _ethers).utils.solidityKeccak256(['address', 'uint256', 'uint256', 'address', 'uint256', 'address', 'uint32', 'uint16', 'address', 'uint256', 'uint256', 'address', 'uint256'], [options.offer.terms.loan.currency, options.offer.terms.loan.principal, options.offer.terms.loan.repayment, options.offer.nft.address, options.offer.nft.id, options.offer.referrer.address, options.offer.terms.loan.duration, options.offer.nftfi.fee.bps, (0, _classPrivateFieldGet2["default"])(this, _account).getAddress(), options.offer.lender.nonce, options.offer.terms.loan.expiry, (0, _classPrivateFieldGet2["default"])(this, _config).loan.fixed.v2_1.address, (0, _classPrivateFieldGet2["default"])(this, _config).chainId])));
                return _context.abrupt("return", signature);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getV2OfferSignature(_x) {
        return _getV2OfferSignature.apply(this, arguments);
      }

      return getV2OfferSignature;
    }()
  }]);
  return OffersSignatures;
}();

var _default = OffersSignatures;
exports["default"] = _default;