<?php
/**
 * Class ConfigInterface
 *
 * @author      PagarMe Modules Team <modules@pagar.me>
 * @copyright   2018 PagarMe (http://pagar.me)
 * @license     http://pagar.me Copyright
 *
 * @link        http://pagar.me
 */

namespace PagarMe\PagarMe\Gateway\Transaction\Base\Config;


interface ConfigInterface
{
    const PATH_PUBLIC_KEY_TEST     = 'pagarme_pagarme/global/public_key_test';
    const PATH_SECRET_KEY_TEST     = 'pagarme_pagarme/global/secret_key_test';
    const PATH_PUBLIC_KEY          = 'pagarme_pagarme/global/public_key';
    const PATH_SECRET_KEY          = 'pagarme_pagarme/global/secret_key';
    const PATH_TEST_MODE           = 'pagarme_pagarme/global/test_mode';
    const PATH_CUSTOMER_STREET     = 'payment/pagarme_customer_address/street_attribute';
    const PATH_CUSTOMER_NUMBER     = 'payment/pagarme_customer_address/number_attribute';
    const PATH_CUSTOMER_COMPLEMENT = 'payment/pagarme_customer_address/complement_attribute';
    const PATH_CUSTOMER_DISTRICT   = 'payment/pagarme_customer_address/district_attribute';

    /**
     * @return string
     */
    public function getSecretKey();

    /**
     * @return string
     */
    public function getPublicKey();

    /**
     * @return string
     */
    public function getTestMode();

    /**
     * @return string
     */
    public function getBaseUrl();

    /**
     * @return string
     */
    public function getCustomerStreetAttribute();

    /**
     * @return string
     */
    public function getCustomerAddressNumber();

    /**
     * @return string
     */
    public function getCustomerAddressComplement();

    /**
     * @return string
     */
    public function getCustomerAddressDistrict();
}
