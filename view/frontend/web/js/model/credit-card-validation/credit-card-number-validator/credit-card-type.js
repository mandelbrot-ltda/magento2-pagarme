/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
/*jshint browser:true jquery:true*/
/*global alert*/
define(
    [
        'jquery',
        'mageUtils'
    ],
    function ($, utils) {
        'use strict';

        var types = [
            {
                title: 'Visa',
                type: 'Visa',
                pattern: '^4\\d*$',
                gaps: [4, 8, 12],
                lengths: [16],
                code: {
                    name: 'CVV',
                    size: 3
                }
            },
            {
                title: 'MasterCard',
                type: 'Mastercard',
                pattern: '^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$',
                gaps: [4, 8, 12],
                lengths: [16],
                code: {
                    name: 'CVC',
                    size: 3
                }
            },
            {
                title: 'American Express',
                type: 'AE',
                pattern: '^3([47]\\d*)?$',
                isAmex: true,
                gaps: [4, 10],
                lengths: [15],
                code: {
                    name: 'CID',
                    size: 4
                }
            },
            {
                title: 'Diners',
                type: 'Diners',
                pattern: '^(3(0[0-5]|095|6|[8-9]))\\d*$',
                gaps: [4, 10],
                lengths: [14, 16, 17, 18, 19],
                code: {
                    name: 'CVV',
                    size: 3
                }
            },
            {
                title: 'Discover',
                type: 'Discover',
                pattern: '^(6011(0|[2-4]|74|7[7-9]|8[6-9]|9)|6(4[4-9]|5))\\d*$',
                gaps: [4, 8, 12],
                lengths: [16, 17, 18, 19],
                code: {
                    name: 'CID',
                    size: 3
                }
            },
            {
                title: 'JCB',
                type: 'JCB',
                pattern: '^35(2[8-9]|[3-8])\\d*$',
                gaps: [4, 8, 12],
                lengths: [16, 17, 18, 19],
                code: {
                    name: 'CVV',
                    size: 3
                }
            },
            {
                title: 'UnionPay',
                type: 'UN',
                pattern: '^(622(1(2[6-9]|[3-9])|[3-8]|9([[0-1]|2[0-5]))|62[4-6]|628([2-8]))\\d*?$',
                gaps: [4, 8, 12],
                lengths: [16, 17, 18, 19],
                code: {
                    name: 'CVN',
                    size: 3
                }
            },
            {
                title: 'Maestro International',
                type: 'MI',
                pattern: '^(5(0|[6-9])|63|67(?!59|6770|6774))\\d*$',
                gaps: [4, 8, 12],
                lengths: [12, 13, 14, 15, 16, 17, 18, 19],
                code: {
                    name: 'CVC',
                    size: 3
                }
            },
            {
                title: 'Maestro Domestic',
                type: 'MD',
                pattern: '^6759(?!24|38|40|6[3-9]|70|76)|676770|676774\\d*$',
                gaps: [4, 8, 12],
                lengths: [12, 13, 14, 15, 16, 17, 18, 19],
                code: {
                    name: 'CVC',
                    size: 3
                }
            }
        ];

        return {
            /**
             * Get credit card type
             * @param {String} cardNumber
             * @returns {Array}
             */
            getCardTypes: function (cardNumber) {
                var i, value,
                    result = [];

                if (utils.isEmpty(cardNumber)) {
                    return result;
                }

                if (cardNumber === '') {
                    return $.extend(true, {}, types);
                }

                if (cardNumber.length == 6 || cardNumber.length > 6) {

                    if (cardNumber.length != 6) {
                        cardNumber = cardNumber.substring(0,6);
                    }

                    if (window.checkoutConfig.payment.pagarme_creditcard.number_credit_card == cardNumber) {
                        value = window.checkoutConfig.payment.pagarme_creditcard.data_credit_card;

                        result.push($.extend(true, {}, value));

                        return result;
                    }

                    window.checkoutConfig.payment.pagarme_creditcard.number_credit_card = cardNumber;
                    

                    $.ajax({
                        type: "GET",
                        dataType: "json",
                        url: 'https://api.mundipagg.com/bin/v1/' + cardNumber,
                        async: false,
                        cache: true,
                        success: function (data) {
                            var codeWithArray = {
                                name: 'CVV',
                                size: data.cvv
                            }

                            window.checkoutConfig.payment.pagarme_creditcard.size_credit_card = data.lenghts[data.lenghts.length - 1];


//                             var cardsAvailables = window.checkoutConfig.payment.ccform.availableTypes.pagarme_creditcard;
//
//                             if(!cardsAvailables[data.brandName]){
// alert('Não existe essa bandeira');
//                             }

                            value = {
                                title: data.brandName,
                                type: data.brandName,
                                pattern: '',
                                gaps: data.gaps,
                                lengths: data.lenghts,
                                code: codeWithArray
                            };




                            window.checkoutConfig.payment.pagarme_creditcard.data_credit_card = value;

                            result.push($.extend(true, {}, value));

                            return result;
                        }
                    });
                }

                return result;
            }
        };
    }
);
